import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { TabsComponent } from './index';

test(`[TabsComponent Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<TabsComponent data={[{tab:"Test Tab", tabcontent:{before:"before", bold:"bold", after:"after"}}]}/>);
  expect(screen.outerHTML).toContain('Test Tab');
  expect(screen.outerHTML).toContain('before');
  expect(screen.outerHTML).toContain('bold');
  expect(screen.outerHTML).toContain('after');
});