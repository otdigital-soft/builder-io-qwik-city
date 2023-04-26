import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { FooterBottomLinkComponent } from './footer-bottom_link';

test(`[FooterBottomLinkComponent Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<FooterBottomLinkComponent url="https://www.google.com" label="test label"/>);
  expect(screen.outerHTML).toContain('test label');
  expect(screen.outerHTML).toContain('https://www.google.com');
});
