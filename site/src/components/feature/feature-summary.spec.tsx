import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import {FeatureSummaryComponent } from './feature-summary';

test(`[FeatureSummaryComponent Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<FeatureSummaryComponent title="Test Title" description="Test Description" url="https://www.google.com" svgpath="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>);
  expect(screen.outerHTML).toContain('Test Title');
  expect(screen.outerHTML).toContain('Test Description');
  expect(screen.outerHTML).toContain('https://www.google.com');
});

