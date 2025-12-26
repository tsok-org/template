```prompt
---
description: Comprehensive code review with security, performance, and architectural analysis
---

# Code Review Assistant

Review the selected code or recent changes with a focus on:

## Code Quality

- **Correctness**: Logic errors, edge cases, error handling
- **Maintainability**: Naming clarity, function size (<50 LOC), code duplication
- **Standards**: TypeScript strict mode, ESLint/Prettier compliance
- **Testing**: Test coverage, test quality, missing test cases

## Architecture & Design

- **Separation of Concerns**: Clear boundaries between layers
- **Dependencies**: Circular dependencies, tight coupling
- **Patterns**: Consistency with monorepo patterns
- **Nx Integration**: Proper project boundaries respected

## Security

- **Input Validation**: Sanitization, Zod schemas
- **Authentication**: Auth checks before business logic
- **Data Protection**: Secrets not hardcoded

## Performance

- **Database**: N+1 queries, missing indexes
- **Caching**: Appropriate caching strategies
- **Async Operations**: Proper Promise handling

## Deliverable

Provide:

1. **Critical Issues** (must fix before merge)
2. **Suggestions** (improvements for consideration)
3. **Praise** (what's done well)
4. **Commands** to validate fixes:
   ```bash
   nx affected:lint
   nx affected:test
   nx affected:typecheck
   ```
```
