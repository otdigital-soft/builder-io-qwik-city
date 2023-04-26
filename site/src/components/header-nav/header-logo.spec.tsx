import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { HeaderLogo } from './header-logo';

test(`[HeaderLogo Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<HeaderLogo url="https://www.google.com" img="https://www.google.com" label="Test Label" alt="img"/>);
  expect(screen.outerHTML).toContain('Test Label');
  expect(screen.outerHTML).toContain('https://www.google.com');
});