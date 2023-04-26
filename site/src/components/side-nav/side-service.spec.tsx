import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { SideServiceNav } from './side-service';

test(`[SideServiceNav Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<SideServiceNav data={[{label:"Test Title", url:"https://www.google.com", svgid:"#test", xmlns:"https://www.google.com"}]}/>);
  expect(screen.outerHTML).toContain('Test Title');
  expect(screen.outerHTML).toContain('https://www.google.com');
});