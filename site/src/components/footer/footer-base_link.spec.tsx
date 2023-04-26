import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { FooterBaseLinkComponent } from './footer-base_link';

test(`[FooterBaseLinkComponent Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<FooterBaseLinkComponent data={[{title:"Test Title", navlinks:[{label:"Test Label", url:"Test Url"}]}]}/>);
  expect(screen.outerHTML).toContain('Test Title');
  expect(screen.outerHTML).toContain('Test Label');
  expect(screen.outerHTML).toContain('Test Url');
});