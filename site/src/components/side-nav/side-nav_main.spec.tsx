import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { SideNavMain } from './side-nav_main';

test(`[SideNavMain Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<SideNavMain data={[{dropbutton:"DropButton", xmlns:"https://google.com", svgid:"#text1", subxmlns:"https://google.com", subsvgid:"#text2", submenu:[{suburl:"SubUrl", sublabel:"SubLabel"}]}]}/>);
  expect(screen.outerHTML).toContain('DropButton');
  expect(screen.outerHTML).toContain('SubUrl');
});