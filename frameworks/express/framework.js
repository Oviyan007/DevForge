
const projectStructure = require("./project.structure");
const projectTemplates = require("./project.templates");

const moduleStructure = require("./module.structure");
const moduleTemplates = require("./module.templates");

const dependencies = require("./dependencies");

module.exports = {
  name: "express",
  displayName: "Express.js",

  project: {
    structure: projectStructure,
    templates: projectTemplates,
  },

  module: {
    structure: moduleStructure,
    templates: moduleTemplates,
  },

  dependencies,

  templateRoot: __dirname + "/templates",
};
