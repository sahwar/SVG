const CodeSVG = function (container) {
  const { SVG, ace } = window;
  const app = {};

  if (document.readyState === "loading") {
    console.warn("CodeSVG(): wait until DOM has loaded. use DOMContentLoaded");
  }
  const buildDOM = function (appContainer) {
    const codeContainer = document.createElement("div");
    const svgContainer = document.createElement("div");
    const consoleContainer = document.createElement("div");
    codeContainer.setAttribute("class", "code-container");
    svgContainer.setAttribute("class", "image-container");
    consoleContainer.setAttribute("class", "console");
    appContainer.appendChild(codeContainer);
    appContainer.appendChild(svgContainer);
    appContainer.appendChild(consoleContainer);
    return [
      codeContainer,
      svgContainer,
      consoleContainer
    ];
  };
  const initDOM = function (appContainer) {
    const [
      codeContainer,
      svgContainer,
      consoleContainer
    ] = buildDOM(appContainer);

    app.svg = SVG(svgContainer, 100, 100);
    app.console = consoleContainer;
    return [
      codeContainer,
      svgContainer,
      consoleContainer
    ];
  };
  const compileAndRun = function () {
    try {
      if (typeof app.reset === "function") { app.reset(); }
      eval(app.editor.getValue());
      app.console.innerHTML = "";
    } catch (err) {
      app.console.innerHTML = `<p>${err}</p>`;
    }
  };
  const editorDidUpdate = function () {
    compileAndRun();
    if (typeof app.didUpdate === "function") { app.didUpdate(); }
  };
  const injectCode = function (text) {
    app.editor.session.insert({
      row: app.editor.session.getLength(),
      column: 0
    }, text);
  };
  const bindToWindow = function () {
    // simple bind all methods to the window
    // Object.getOwnPropertyNames(SVG)
    //   .filter(p => typeof SVG[p] === "function")
    //   .filter(name => name !== "svg") // prevent creating SVGs
    //   .forEach(name => window[name] = SVG[name].bind(SVG));

    // bind draw methods and insert an appendChild to our one svg
    ["text", "line", "circle", "ellipse", "rect", "polygon", "polyline",
      "bezier", "wedge", "arc", "curve", "regularPolygon",
      "group", "style", "clipPath"
    ].forEach((name) => {
      window[name] = function (...args) {
        const element = SVG[name](...args);
        if (app.svg !== undefined) {
          app.svg.appendChild(element);
        }
        return element;
      };
    });

    window.size = function (...args) {
      if (app.svg !== undefined) {
        if (args.length === 2) {
          [app.svg.w, app.svg.h] = args;
          app.svg.setViewBox(0, 0, args[0], args[1]);
        }
      }
    };

    window.image = function (...args) {
      if (app.svg !== undefined) {
        const parent = app.svg.parentElement;
        parent.removeChild(app.svg);
        app.svg = SVG(parent, ...args);
      } else {
        app.svg = SVG(parent, ...args);
      }
      return app.svg;
    };
  };

  // init app
  const [codeContainer] = initDOM(container);
  bindToWindow();
  try {
    app.editor = ace.edit(codeContainer);
  } catch (err) {
    throw new Error("bad internet connection. or Ace CDN moved-see index.html");
  }
  app.code = app.editor.container;
  app.editor.setTheme("ace/theme/monokai");
  app.editor.setKeyboardHandler("ace/keyboard/sublime");
  app.editor.session.setMode("ace/mode/javascript");
  app.editor.session.on("change", editorDidUpdate);

  Object.defineProperty(app, "injectCode", { value: injectCode });
  // allow these to be overwritten
  app.didUpdate = function () {};
  app.reset = function () {
    if (app.svg !== undefined) {
      while (app.svg.lastChild) {
        app.svg.removeChild(app.svg.lastChild);
      }
    }
  };

  compileAndRun();

  return app;
};