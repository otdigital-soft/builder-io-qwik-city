import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import {FeatureContentComponent } from './feature-content';

test(`[FeatureContentComponent Component]`, async () => {
  const { screen, render } = await createDOM();
  await render(<FeatureContentComponent data={[{title:"Test Title", description:"Test Description", path1: {dpath:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", fill: "evenodd", clip:"evenodd"}}]}/>);
  expect(screen.outerHTML).toContain('Test Title');
  expect(screen.outerHTML).toContain('Test Description');
});
