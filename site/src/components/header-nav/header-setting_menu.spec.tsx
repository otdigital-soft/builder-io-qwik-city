import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { HeaderSettingMenu } from './header-setting_menu';

test(`[HeaderSettingMenu Component]`, async () => {
    const { screen, render } = await createDOM();
    await render(<HeaderSettingMenu data={{ singin: {url:"https://www.google.com", label:"SignIn"}, signup: {url:"https://www.google.com", label:"SignUp"}, openmain: {label:"OpenMain", svgfirst: {id:"#svg1", xmlns:"https://www.google.com"}, svgsecond: {id:"#svg2", xmlns:"https://www.google.com"}}}}/>);
    expect(screen.outerHTML).toContain('SignIn');
    expect(screen.outerHTML).toContain('https://www.google.com');
});