import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,                    // Enables describe/it/expect globals
    environment: 'node',              // Node.js environment
    include: ['__test__/**/*.test.js'], // Test file pattern
    testTimeout: 10000,
    snapshotFormat: {
      printBasicPrototype: false      // Snapshot compatibility
    }
  }
})
