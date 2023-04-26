import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Tooltip } from './index';

test(`[Tooltip Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<Tooltip data={[{buttonlabel:"Test ButtonLabel", content:"Test Content"}]}/>);
  expect(screen.outerHTML).toContain('Test ButtonLabel');
  expect(screen.outerHTML).toContain('Test Content');
});