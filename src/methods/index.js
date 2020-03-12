/**
 * SVG (c) Robby Kraft
 */

import Debug from "../environment/debug";
import Case from "../arguments/case";
import Nodes from "../nodes/nodes";
// categories
import AttributeSetters from "./forAttributes/attributeSetters";
import Transforms from "./transforms";
import URLs from "./urls";
import DOM from "./dom";
// specific to nodes
import svg from "./forElements/svg";
import path from "./forElements/path";
import style from "./forElements/style";
import marker from "./forElements/marker";
// import TouchEvents from "../events/touch";

const makeExist = (obj, key) => {
  if (obj[key] === undefined) { obj[key] = {}; }
};

// build a master lookup table, relating an element's attribute to a setter
//   circle: {
//     fill: function () { ... },
//   },
//   svg: {
//     size: function () { ... },
//   }
const nodeMethods = {
  // the most uniquely-behaving element methods
  svg: svg,
  path: path,
  style: style,
  marker: marker,
};

const applyMethodsToNode = (methods, node) => {
  makeExist(nodeMethods, node);
  Object.keys(methods).forEach(method => {
    nodeMethods[node][method] = methods[method];
  });
};

const applyMethodsToGroup = (methods, groups) => groups
  .forEach(category => category
    .forEach(node => applyMethodsToNode(methods, node)));

const t_v_g = [Nodes.t, Nodes.v, Nodes.g];
const most = t_v_g.concat([Nodes.s, Nodes.p, Nodes.i, Nodes.h, Nodes.d]);
// transforms "translate", "rotate"...
applyMethodsToGroup(Transforms, t_v_g.concat([Nodes.s]));
// clipPath, mask, symbol, markers as attaching onto the object.
applyMethodsToGroup(URLs, t_v_g);
// DOM methods, appendChild, removeChildren...
applyMethodsToGroup(DOM, most);
// setAttributes()
applyMethodsToGroup({
  setAttributes: (el, attrs) => Object.keys(attrs)
    .forEach(key => el.setAttribute(Case.toKebab(key), attrs[key]))},
  most);

Object.keys(AttributeSetters)
  .forEach(nodeName => applyMethodsToNode(AttributeSetters[nodeName], nodeName));

// build the export object
const methods = {};

// assigning methods to "this" to pass the Constructor back up the chain.
Object.keys(nodeMethods).forEach(nodeName => {
  makeExist(methods, nodeName);
  Object.keys(nodeMethods[nodeName])
    .filter(method => methods[nodeName][method] === undefined)
    .forEach(method => {
      // always return something. if method has no return, return the element
      methods[nodeName][method] = (el, ...args) => nodeMethods[nodeName][method].call(methods, el, ...args) || el;
    });
});

Debug.log(methods);

export default methods;