import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Run cleanup automatically after each test
afterEach(() => {
  cleanup();
});