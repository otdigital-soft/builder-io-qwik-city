import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { SideSettingComponent } from './side-setting';

test(`[SideSettingComponent Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<SideSettingComponent data={{title:"Test Title",furl:"https://www.google.com", fsvgid:"#test", fxmlns:"https://www.google.com", surl:"https://www.google.com", ssvgid:"#test2", sxmlns:"https://www.google.com", txlink:"https://www.google.com", tsvgid:"#test3", txmlns:"https://www.google.com"}}/>);
  expect(screen.outerHTML).toContain('Test Title');
  expect(screen.outerHTML).toContain('https://www.google.com');
});