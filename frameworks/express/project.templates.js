module.exports = [
  {
    template: "project/package.ejs",
    output: "package.json",
  },
  {
    template: "project/gitignore.ejs",
    output: ".gitignore",
  },
  {
    template: "project/env.ejs",
    output: ".env",
  },
  {
    template: "project/readme.ejs",
    output: "README.md",
  },
  {
    template: "project/rynex.config.ejs",
    output: "rynex.config.json",
  },
  {
    template: "project/app.ejs",
    output: "src/app.js",
  },
  {
    template: "project/server.ejs",
    output: "src/server.js",
  },
  {
    template: "config/db.ejs",
    output: "src/config/db.js",
  },
  {
    template: "config/redis.ejs",
    output: "src/config/redis.js",
  },
  {
    template: "config/socket.ejs",
    output: "src/config/socket.js",
  },
  {
    template: "config/bullmq.ejs",
    output: "src/config/bullmq.js",
  },
  {
    template: "routes/index.ejs",
    output: "src/routes/index.js",
  },
];
