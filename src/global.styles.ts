import { theme } from "@mrshmllw/smores-react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Circular';
    src: url('https://assets.marshmallow.com/fonts/CircularXXSub-RegularSubset.woff2') format('woff2');
    font-weight: ${theme.font.weight.normal};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular';
    src: url('https://assets.marshmallow.com/fonts/CircularXXWeb-Medium.woff2') format('woff2');
    font-weight: ${theme.font.weight.medium};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular';
    src: url('https://assets.marshmallow.com/fonts/CircularXXWeb-Bold.woff2') format('woff2');
    font-weight: ${theme.font.weight.bold};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'MarshmallowYouth';
    src: url('https://assets.marshmallow.com/fonts/MarshmallowYouth-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

/* 1. Use a more-intuitive box-sizing model */
*,
*::before,
*::after {
	box-sizing: border-box;
}

/* 2. Remove default margin */
* {
	margin: 0;
	font-family: 'Circular', ${theme.font.system};
}

body {
	/* 3. Add accessible line-height */
	line-height: 1.5;
	/* 4. Improve text rendering */
	-webkit-font-smoothing: antialiased;
}

/* 5. Improve media defaults */
img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
}

/* 6. Inherit fonts for form controls */
input,
button,
textarea,
select {
	font: inherit;
	border: none;
}

/* 7. Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}

/* 8. Improve line wrapping */
p {
	text-wrap: pretty;
}

/* 1. Use a more-intuitive box-sizing model */
*,
*::before,
*::after {
	box-sizing: border-box;
}

/* 2. Remove default margin */
* {
	margin: 0;
}

body {
	/* 3. Add accessible line-height */
	line-height: 1.5;
	/* 4. Improve text rendering */
	-webkit-font-smoothing: antialiased;
}

/* 5. Improve media defaults */
img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
}

/* 6. Inherit fonts for form controls */
input,
button,
textarea,
select {
	font: inherit;
}

/* 7. Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}

/* 8. Improve line wrapping */
p {
	text-wrap: pretty;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	text-wrap: balance;
}

/*
  9. Create a root stacking context
*/
#root,
#__next {
	isolation: isolate;
}

/* 1. Use a more-intuitive box-sizing model */
*,
*::before,
*::after {
	box-sizing: border-box;
}

/* 2. Remove default margin */
* {
	margin: 0;
}

body {
	/* 3. Add accessible line-height */
	line-height: 1.5;
	/* 4. Improve text rendering */
	-webkit-font-smoothing: antialiased;
}

/* 5. Improve media defaults */
img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
}

/* 6. Inherit fonts for form controls */
input,
button,
textarea,
select {
	font: inherit;
}

/* 7. Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}

/* 8. Improve line wrapping */
p {
	text-wrap: pretty;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	text-wrap: balance;
}

/*
  9. Create a root stacking context
*/
#root,
#__next {
	isolation: isolate;
}

/* 1. Use a more-intuitive box-sizing model */
*,
*::before,
*::after {
	box-sizing: border-box;
}

/* 2. Remove default margin */
* {
	margin: 0;
}

body {
	/* 3. Add accessible line-height */
	line-height: 1.5;
	/* 4. Improve text rendering */
	-webkit-font-smoothing: antialiased;
}

/* 5. Improve media defaults */
img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
}

/* 6. Inherit fonts for form controls */
input,
button,
textarea,
select {
	font: inherit;
}

/* 7. Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}

/* 8. Improve line wrapping */
p {
	text-wrap: pretty;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	text-wrap: balance;
}

/*
  9. Create a root stacking context
*/
#root,
#__next {
	isolation: isolate;
}

/* 1. Use a more-intuitive box-sizing model */
*,
*::before,
*::after {
	box-sizing: border-box;
}

/* 2. Remove default margin */
* {
	margin: 0;
}

body {
	/* 3. Add accessible line-height */
	line-height: 1.5;
	/* 4. Improve text rendering */
	-webkit-font-smoothing: antialiased;
}

/* 5. Improve media defaults */
img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
}

/* 6. Inherit fonts for form controls */
input,
button,
textarea,
select {
	font: inherit;
}

/* 7. Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}

/* 8. Improve line wrapping */
p {
	text-wrap: pretty;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	text-wrap: balance;
}

/*
  9. Create a root stacking context
*/
#root,
#__next {
	isolation: isolate;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	text-wrap: balance;
}

/*
  9. Create a root stacking context
*/
#root,
#__next {
	isolation: isolate;
}
`;
