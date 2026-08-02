<div align="center">

# Rynex CLI

### Opinionated Node.js CLI for Scaffolding Production-Ready Express.js Applications

Build scalable Express.js applications in seconds with a clean, modular architecture.

<!-- [![npm version](https://img.shields.io/npm/v/rynex-cli.svg)](https://www.npmjs.com/package/rynex-cli)
[![npm downloads](https://img.shields.io/npm/dm/rynex-cli.svg)](https://www.npmjs.com/package/rynex-cli)
[![License](https://img.shields.io/npm/l/rynex-cli.svg)](LICENSE) -->

</div>

---

# Features

- Create production-ready Express.js projects
- Opinionated folder structure
- Automatic dependency management
- Modular architecture
- Template-based code generation
- Interactive CLI
- Easy module generation
- Beginner friendly

---

# Installation

Install globally using npm.

```bash
npm install -g rynex-cli
```

Verify installation.

```bash
rynex --version
```

---

# Create a Project

```bash
rynex create my-api
```

Example

```bash
rynex create ecommerce-api
```

This generates a complete Express.js project with the recommended folder structure.

---

# Generated Structure

```text
my-api/
│
├── src/
│   ├── config/
│   ├── helpers/
│   ├── middlewares/
│   ├── modules/
│   ├── routes/
│   ├── seeds/
│   └── shared/
│       ├── constants/
│       └── utils/
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── rynex.config.json
```

---

# Generated Files

Rynex automatically creates:

- package.json
- README.md
- .env
- .gitignore
- app.js
- server.js
- config/db.js
- config/redis.js
- config/socket.js
- config/bullmq.js
- routes/index.js

---

# Commands

## Create Project

```bash
rynex create project-name
```

## Generate Module

```bash
rynex generate module user
```

or

```bash
rynex g module user
```

---

# Philosophy

Rynex is not just another Express boilerplate.

It follows an opinionated architecture focused on scalability, maintainability, and clean code.

The goal is to help developers start with production-ready project structures instead of repeatedly configuring the same files.

---

# Roadmap

Current Version

- Express.js Support
- Project Generator
- Template Engine
- Module Generator

Upcoming

- Fastify Support
- NestJS Support
- Authentication Generator
- CRUD Generator
- Docker Templates
- Redis Templates
- BullMQ Templates
- WebSocket Templates
- Testing Templates
- Plugin System
- Interactive Project Configuration

---

# Contributing

Contributions are welcome.

If you'd like to improve Rynex, feel free to open an issue or submit a pull request.

---

# 📜 License

ISC License

---

<div align="center">

Made with ❤️ by **Oviyan**

⭐ If you like this project, consider giving it a star.

</div>