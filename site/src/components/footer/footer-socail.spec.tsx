import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { FooterSocialLinkComponent } from './footer-social_link';

test(`[FooterSocialLinkComponent Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<FooterSocialLinkComponent data={[{url:"https://www.google.com",label:"test label"}]}/>);
  expect(screen.outerHTML).toContain('test label');
  expect(screen.outerHTML).toContain('https://www.google.com');
});
