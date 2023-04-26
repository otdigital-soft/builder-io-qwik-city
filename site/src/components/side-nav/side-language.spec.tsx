import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { SideLanguageNav } from './side-language';

test(`[SideLanguageNav Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<SideLanguageNav data={[{label:"Test Title", url:"https://www.google.com", xmlns:"https://www.google.com", svgid:"#test" }]}/>);
  expect(screen.outerHTML).toContain('Test Title');
  expect(screen.outerHTML).toContain('https://www.google.com');
});