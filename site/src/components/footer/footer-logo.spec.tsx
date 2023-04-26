import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { FooterLogo } from './footer-logo';

test(`[FooterLogo Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<FooterLogo url="https://www.google.com" img="https://www.google.com" alt="img" label="test label"/>);
  expect(screen.outerHTML).toContain('img');
  expect(screen.outerHTML).toContain('test label');
  expect(screen.outerHTML).toContain('https://www.google.com');
});
