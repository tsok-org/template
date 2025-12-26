```prompt
---
description: Generate comprehensive test suites with unit, integration, and E2E tests
---

# Test Generation Assistant

Generate comprehensive test coverage for the selected code following monorepo testing standards.

## Test Standards

### Jest Configuration

```typescript
// Follow jest.config.ts pattern from workspace
export default {
  displayName: "<project-name>",
  preset: "../../jest.preset.ts",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/test-setup.ts"],
  coverageDirectory: "../../coverage/apps/<project-name>",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.spec.{ts,tsx}",
    "!src/generated/**"
  ]
};
```

### Test Structure

```typescript
describe("ComponentName or functionName", () => {
  beforeEach(() => {
    // Reset mocks, initialize test data
  });

  describe("happy paths", () => {
    it("should handle normal case", () => {
      // Arrange
      // Act
      // Assert
    });
  });

  describe("edge cases", () => {
    it("should handle empty input", () => {});
    it("should handle null/undefined", () => {});
  });

  describe("error cases", () => {
    it("should throw on invalid input", () => {});
  });
});
```

## Coverage Requirements

- **Critical Paths**: 90%+ coverage
- **Business Logic**: 85%+ coverage
- **Utilities**: 80%+ coverage

## Testing Commands

```bash
# Run tests for specific project
nx test <project-name>

# Run tests with coverage
nx test <project-name> --coverage

# Run affected tests
nx affected:test

# Watch mode (development)
nx test <project-name> --watch
```

## Deliverable

Generate:

1. **Test file(s)** with complete test suite
2. **Mock setup** if external dependencies exist
3. **Test data fixtures** if needed
4. **Coverage report** after running tests
```
