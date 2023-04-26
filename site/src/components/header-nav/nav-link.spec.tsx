import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { HeaderNavLink } from './nav-link';

test(`[HeaderNavLink Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<HeaderNavLink data={[
    {label:"Test Label" , submenu:[{sublabel:"Test Sublabel", suburl:"Test Suburl"},]},
    {label: "Test Label1", url: "url"}
  ]}/>);
  expect(screen.outerHTML).toContain('Test Label');
  expect(screen.outerHTML).toContain('Test Sublabel');
  expect(screen.outerHTML).toContain('url')
});