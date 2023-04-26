import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { HeroBlogsComponent } from './hero-blogs';

test(`[HeroBlogsComponent Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<HeroBlogsComponent data={[{title:"Test Title", url:"https://www.google.com", description:"Test Description", svgid:"#test", xmlns:"https://www.google.com"}]}/>);
  expect(screen.outerHTML).toContain('Test Title');
  expect(screen.outerHTML).toContain('https://www.google.com');
  expect(screen.outerHTML).toContain('Test Description');
});