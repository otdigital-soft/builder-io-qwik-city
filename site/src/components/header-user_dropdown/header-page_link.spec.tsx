import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { HeaderPageLinkComponent } from './header-page_link';

test(`[HeaderPageLinkComponent Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<HeaderPageLinkComponent data={[{label:"Test Label", url:"https://www.google.com"}]}/>);
  expect(screen.outerHTML).toContain('Test Label');
  expect(screen.outerHTML).toContain('https://www.google.com');
});