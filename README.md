# Template Monorepo

A minimal Nx monorepo template for TypeScript projects.

## Overview

This template provides a foundation for building scalable monorepo applications using:

- **Nx** - Smart, fast and extensible build system
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **pnpm** - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Generate a new application
nx g @nx/js:application apps/my-app

# Generate a new library
nx g @nx/js:library libs/my-lib

# Serve an application
nx serve my-app

# Build an application
nx build my-app

# Run tests
nx test my-app

# Lint
nx lint my-app
```

## Project Structure

```
├── apps/                 # Application projects
├── libs/                 # Shared libraries
├── .devcontainer/        # Dev container configuration
├── .github/              # GitHub configuration
│   ├── agents/           # AI agent definitions
│   ├── prompts/          # Reusable prompts
│   └── dependabot.yml    # Dependency updates
├── .vscode/              # VS Code settings
├── nx.json               # Nx configuration
├── package.json          # Root package.json
├── pnpm-workspace.yaml   # pnpm workspace config
└── tsconfig.base.json    # Base TypeScript config
```

## Nx Commands

```bash
# View dependency graph
nx graph

# Run affected tests
nx affected:test

# Run affected lint
nx affected:lint

# Run affected build
nx affected:build
```

## Contributing

1. Create a feature branch: `feat/<app>/<feature-name>`
2. Make changes with tests
3. Run `nx affected:test`
4. Submit PR with conventional commit format

## License

MIT
