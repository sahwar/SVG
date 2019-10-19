/**
 * SVG (c) Robby Kraft
 */

/*
const keys = {
  // "accent-height", // deprecated
  "accumulate": ["animate", "animateColor", "animateMotion", "animateTransform"],
  "additive": ["animate", "animateColor", "animateMotion", "animateTransform"],
  "alignment-baseline": ["tspan", "tref", "altGlyph", "textPath"],
  // "allowReorder", // red
  // "alphabetic", // deprecated
  "amplitude":  ["feFuncA", "feFuncB", "feFuncG", "feFuncR"],
  // "arabic-form", // deprecated
  // "ascent", // deprecated
  "attributeName": ["animate", "animateColor", "animateTransform", "set"],
  // "attributeType",  // deprecated
  // "autoReverse",  // red
  "azimuth": ["feDistantLight"],
  // "BSection", // not exist
  "baseFrequency": ["feTurbulence"],
  // "baseline-shift",  // use vertical-align instead
  // "baseProfile", // deprecated
  // "bbox", // deprecated
  "begin": ["animate", "animateColor", "animateMotion", "animateTransform", "discard", "set"],
  "bias": ["feConvolveMatrix"],
  "by": ["animate", "animateColor", "animateMotion", "animateTransform"],
  // "CSection",
  "calcMode": ["animate", "animateColor", "animateMotion", "animateTransform"],
  // "cap-height", // deprecated
  "class": ["a", "altGlyph", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feFlood", "feGaussianBlur", "feImage", "feMerge", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence", "filter", "font", "foreignObject", "g", "glyph", "glyphRef", "image", "line", "linearGradient", "marker", "mask", "missing-glyph", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use" ],
  // "clip", // deprecated
  // "clipPathUnits",
  // "clip-path",
  "clip-rule": [], // any shape
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  // "cx",
  // "cy",
  "DSection",
  // "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  // "dx",
  // "dy",
  "ESection",
  "edgeMode",
  "elevation",
  "enable-background",
  "end",
  "exponent",
  "externalResourcesRequired",
  "FSection",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterRes",
  "filterUnits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "format",
  "from",
  "fr",
  "fx",
  "fy",
  "GSection",
  "g1",
  "g2",
  "glyph-name",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "HSection",
  "hanging",
  // "height",
  "href",
  "hreflang",
  "horiz-adv-x",
  "horiz-origin-x",
  "ISection",
  // "id",
  "ideographic",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "KSection",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "LSection",
  "lang",
  // "lengthAdjust",
  "letter-spacing",
  "lighting-color",
  "limitingConeAngle",
  "local",
  "MSection",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  // "mask",
  // "maskContentUnits",
  // "maskUnits",
  "mathematical",
  "max",
  "media",
  "method",
  "min",
  "mode",
  "NSection",
  "name",
  "numOctaves",
  "OSection",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overline-position",
  "overline-thickness",
  "PSection",
  "panose-1",
  "paint-order",
  "path",
  // "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "ping",
  "pointer-events",
  // "points",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "RSection",
  // "r",
  "radius",
  "referrerPolicy",
  "refX",
  "refY",
  "rel",
  "rendering-intent",
  "repeatCount",
  "repeatDur",
  // "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  // "rotate",
  // "rx",
  // "ry",
  "SSection",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stop-color",
  "stop-opacity",
  "strikethrough-position",
  "strikethrough-thickness",
  "string",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  // "style",
  "surfaceScale",
  // "systemLanguage",
  "TSection",
  "tabindex",
  "tableValues",
  "target",
  "targetX",
  "targetY",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  // "textLength",
  "to",
  // "transform",
  "type",
  "USection",
  "u1",
  "u2",
  "underline-position",
  "underline-thickness",
  "unicode",
  "unicode-bidi",
  "unicode-range",
  "units-per-em",
  "VSection",
  "v-alphabetic",
  "v-hanging",
  "v-ideographic",
  "v-mathematical",
  "values",
  "vector-effect",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "viewBox",
  "viewTarget",
  "visibility",
  "WSection",
  // "width",
  "widths",
  "word-spacing",
  "writing-mode",
  "XSection",
  // "x",
  "x-height",
  // "x1",
  // "x2",
  "xChannelSelector",
  // "xlink:actuate",
  // "xlink:arcrole",
  // "xlink:href",
  // "xlink:role",
  // "xlink:show",
  // "xlink:title",
  // "xlink:type",
  // "xml:base",
  // "xml:lang",
  // "xml:space",
  "YSection",
  // "y",
  // "y1",
  // "y2",
  "yChannelSelector",
  "ZSection",
  // "z",
  "zoomAndPan"
};
*/

// these are attributes across the entire SVG language, not just <svg> element
export default [
  // "accent-height", // deprecated
  "accumulate",
  "additive",
  "alignment-baseline",
  "allowReorder",
  // "alphabetic", // deprecated
  "amplitude",
  // "arabic-form", // deprecated
  // "ascent", // deprecated
  "attributeName",
  // "attributeType", // deprecated
  "autoReverse",
  "azimuth",
  "BSection",
  "baseFrequency",
  "baseline-shift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "CSection",
  "calcMode",
  "cap-height",
  "class",
  "clip",
  // "clipPathUnits",
  // "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  // "cx",
  // "cy",
  "DSection",
  // "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  // "dx",
  // "dy",
  "ESection",
  "edgeMode",
  "elevation",
  "enable-background",
  "end",
  "exponent",
  "externalResourcesRequired",
  "FSection",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterRes",
  "filterUnits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "format",
  "from",
  "fr",
  "fx",
  "fy",
  "GSection",
  "g1",
  "g2",
  "glyph-name",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "HSection",
  "hanging",
  // "height",
  "href",
  "hreflang",
  "horiz-adv-x",
  "horiz-origin-x",
  "ISection",
  // "id",
  "ideographic",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "KSection",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "LSection",
  "lang",
  // "lengthAdjust",
  "letter-spacing",
  "lighting-color",
  "limitingConeAngle",
  "local",
  "MSection",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  // "mask",
  // "maskContentUnits",
  // "maskUnits",
  "mathematical",
  "max",
  "media",
  "method",
  "min",
  "mode",
  "NSection",
  "name",
  "numOctaves",
  "OSection",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overline-position",
  "overline-thickness",
  "PSection",
  "panose-1",
  "paint-order",
  // "path",   // Robby removed this
  // "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "ping",
  "pointer-events",
  // "points",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "RSection",
  // "r",
  "radius",
  "referrerPolicy",
  "refX",
  "refY",
  "rel",
  "rendering-intent",
  "repeatCount",
  "repeatDur",
  // "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  // "rotate",
  // "rx",
  // "ry",
  "SSection",
  // "scale",  // Robby removed this. transforms
  "seed",
  "shape-rendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stop-color",
  "stop-opacity",
  "strikethrough-position",
  "strikethrough-thickness",
  "string",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  // "style",
  "surfaceScale",
  // "systemLanguage",
  "TSection",
  "tabindex",
  "tableValues",
  "target",
  "targetX",
  "targetY",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  // "textLength",
  "to",
  // "transform",
  "transform-origin", // i added this -Robby
  "type",
  "USection",
  "u1",
  "u2",
  "underline-position",
  "underline-thickness",
  "unicode",
  "unicode-bidi",
  "unicode-range",
  "units-per-em",
  "VSection",
  "v-alphabetic",
  "v-hanging",
  "v-ideographic",
  "v-mathematical",
  "values",
  "vector-effect",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "viewBox",
  "viewTarget",
  "visibility",
  "WSection",
  // "width",
  "widths",
  "word-spacing",
  "writing-mode",
  "XSection",
  // "x",
  "x-height",
  // "x1",
  // "x2",
  "xChannelSelector",
  // "xlink:actuate",
  // "xlink:arcrole",
  // "xlink:href",
  // "xlink:role",
  // "xlink:show",
  // "xlink:title",
  // "xlink:type",
  // "xml:base",
  // "xml:lang",
  // "xml:space",
  "YSection",
  // "y",
  // "y1",
  // "y2",
  "yChannelSelector",
  "ZSection",
  // "z",
  "zoomAndPan"
];
