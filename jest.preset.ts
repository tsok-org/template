import { nxPreset } from '@nx/jest/preset';

export default {
    ...nxPreset,
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]sx?$': ['@swc/jest', {}],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    coverageReporters: ['text', 'lcov', 'html'],
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/dist/**',
        '!**/*.spec.{ts,tsx}',
    ],
};
