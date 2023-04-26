import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { HeroSummaryComponent } from './hero-summary';

test(`[HeroSummaryComponent Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<HeroSummaryComponent title="Test Title" url="https://www.google.com" description="Test Description" svgid="#test" xmlns="https://www.google.com"/>);
  expect(screen.outerHTML).toContain('Test Title');
  expect(screen.outerHTML).toContain('https://www.google.com');
  expect(screen.outerHTML).toContain('Test Description');
});