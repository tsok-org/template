```prompt
---
description: Plan and architect new features with technical design and implementation roadmap
---

# Feature Planning Assistant

Create a comprehensive feature implementation plan following monorepo architecture patterns.

## Planning Process

### 1. Requirements Analysis

- **User Story**: What problem does this solve?
- **Acceptance Criteria**: What defines "done"?
- **Non-functional Requirements**: Performance, security, scalability
- **Dependencies**: What existing features/services does this depend on?

### 2. Architecture Design

#### Identify Affected Layers

- **Frontend**: UI components, pages, client state
- **Backend**: Business logic, data access
- **Database**: Schema changes, migrations

### 3. Implementation Roadmap

#### Phase 1: Foundation

- [ ] Database schema and migrations
- [ ] Core domain models and types
- [ ] Server-side business logic

#### Phase 2: Backend API

- [ ] API routes/endpoints
- [ ] Input validation (Zod schemas)
- [ ] Error handling

#### Phase 3: Frontend

- [ ] UI components
- [ ] Client-side hooks/utilities
- [ ] Pages and routing
- [ ] Form validation

#### Phase 4: Testing

- [ ] Unit tests (business logic)
- [ ] Integration tests (API)
- [ ] E2E tests (critical user flows)

### 4. Risk Assessment

**Technical Risks**:

- Performance: Will this cause N+1 queries? Need caching?
- Scalability: Can this handle 10x load?
- Data Migration: How to migrate existing data?

**Operational Risks**:

- Rollback Plan: How to revert if issues arise?
- Monitoring: What metrics/logs are needed?

## Deliverable

Provide:

1. **Architecture Diagram** (ASCII or description)
2. **Implementation Checklist** with phases
3. **File Structure** showing new files to create
4. **Code Scaffolding** for key interfaces/types
5. **Testing Strategy**
6. **Rollback Procedure**

## Example Commands

```bash
# Create new feature branch
git checkout -b feat/<app>/<feature-name>

# Run affected commands
nx affected:lint
nx affected:test
nx affected:build

# Serve app for development
nx serve <app-name>
```
```
