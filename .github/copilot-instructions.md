# Node.js Tinkering Project - AI Coding Assistant Instructions

## Project Overview

This is a Node.js learning and experimentation repository focused on core Node.js concepts, JavaScript fundamentals, and practical coding challenges. It serves as a sandbox for exploring various Node.js features and patterns.

## File Extension Patterns

- **`.mjs`** - ES modules with explicit module syntax (import/export)
- **`.js`** - CommonJS modules or mixed syntax depending on context
- **`.cjs`** - Explicit CommonJS modules (e.g., `concurrentMainWorker.cjs`)
- **`.ts`** - TypeScript files (see `sensor-tower/sensor_tower.ts`)

## Testing Strategy

The project uses **dual testing approaches**:

- **Vitest** for modern testing (`npm test`) - see `like.test.js`
- **Node.js built-in test runner** (`npm run testing`) - see `stack.test.mjs`

When adding tests, match the existing pattern: Vitest for `.js` files, Node test runner for `.mjs` files.

## Key Learning Areas & Patterns

### Stream Processing

- **Pattern**: Transform streams with object mode for CSV processing
- **Example**: `stream-transform.js` shows CSV parsing → transform → filter → write pipeline
- **Data**: Use `data/import.csv` and `data/export.csv` for stream examples

### Concurrency Patterns

- **Worker threads**: `multithread.mjs` and `hashWorker.js` demonstrate worker communication
- **Clustering**: `cluster.mjs` shows CPU-based worker forking with auto-restart
- **Event loop**: `event_loop.js` demonstrates microtask vs macrotask execution order

### Module System Examples

- **ES modules**: `stack.mjs` exports default class, imported in `stack.test.mjs`
- **CommonJS**: Traditional require/module.exports pattern
- **Mixed imports**: Some files use both import and require (transitional patterns)

### Real-World Problem Solving

- **sensor-tower/**: Contains a coding challenge for company name deduplication
- **Pattern**: Text normalization, tokenization, and fuzzy matching using TypeScript
- **Key technique**: Diacritics removal and token-based grouping for duplicate detection

## Development Workflow

- Run tests: `npm test` (Vitest) or `npm run testing` (Node runner)
- No build process - files run directly with Node.js
- Use `node filename.mjs` for ES modules, `node filename.js` for CommonJS

## Coding Conventions

- Prefer `const`/`let` over `var` (see `const.mjs`)
- Use modern async/await patterns (examples in `async_function.js`)
- Event loop understanding is crucial - see commented explanations in `event_loop.js`
- Class-based patterns for data structures (e.g., `Stack` in `stack.mjs`)

## When Adding New Code

- **For Node.js concepts**: Create standalone demonstration files
- **For algorithms/data structures**: Follow the Stack pattern with separate test file
- **For real problems**: Create subdirectory like `sensor-tower/` with README
- **For performance testing**: Use clinic.js (already in devDependencies)

## Dependencies & Tools

- **csv-parser**: For CSV processing examples
- **express**: Web server demonstrations
- **clinic**: Performance profiling and analysis
- **vitest**: Modern testing framework
