---
title: Mitosis Component Building
tags:
  - Mitosis
  - Components
authors:
  - Nedim Malicbegovic
---

# Mitosis components

in depth docs
https://github.com/BuilderIO/mitosis/tree/main/docs

You write them in Mitosis, which is not a web framework though, and you can compile it to (almost) any other .js framework like Qwik, React, Vue, Svelte etc.

### Setup

To install all `node_modules` dependencies on your local machine, please run the command:
`yarn install` at the corresponding folder location.

### High level overview

- Write a component inside `src/components/` using Mitosis syntax:
  - The way it works for builder.io, is that we have input `props` which is what the user can change in builder.io for the component. E.g. Carousel component, you would need `image file` and `alt text` for the image so in Mitosis you would need a `For` tag to loop it over a list.
  - Variables and functions can only be stored inside `state` with `useStore`
  - We have to use `onInit` method to assign the props to variables
- Run command `mitosis build` to build all the components
- Copy and paste the output to the desired framework

### Project structure

Here are some key things to look at:

- `src` contains your Mitosis source code
- `src/components` contains your Mitosis components
- `output` contains per-target output of the project
  - You will notice `.lite.tsx` files _in_ your output. Those are a human-readable Mitosis components. Think of them as a reference point for you to debug more easily, since the actual JS output is minified and thus difficult to read.
- `mitosis.config.js` contains general and per-target configuration. It is used by `mitosis build`.
- `overrides` contains a per-target folder that mimicks the structure of `src`, and will completely swap out any files with identical names. Example: since we have defined `overrides/react-native/src/functions/is-react-native.ts`, it will override `src/functions/is-react-native.ts` in `output/react-native/src/functions/is-react-native.js`

### Sample component

Check out the sample carousel component built using Flowbite where we have only used an image file as an input string, but ideally you should add to props whatever the user should control like `alt` tag for the img for better SEO:

- `src/components/carousels/carousel.lite.tsx`

### Custom Output location

It is possible to change the output location from Mitosis to a location of your choice at `mitosis.config.js` add `dest` to the destination of your choice, possibly Qwik components folder.