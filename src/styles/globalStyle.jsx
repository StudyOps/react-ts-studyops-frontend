import React from 'react';
import { Global, css } from '@emotion/react';

const baseStyle = css`
  @import url('https://webfontworld.github.io/kopus/KoPubWorldDotum.css');
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1.5;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  :root {
    --color-primary: #8d4bf6;
    --color-crown: #f5e03c;
    --color-border: rgb(221, 221, 221);
    --color-textgrey: rgb(112, 112, 112);
    --color-textlight: rgb(150, 150, 150);
    --width-maxwidth: 1440px;
    --fontsize-title: 1.2rem;
  }
  body {
    margin: 0;
    font-family: 'KoPubWorldDotum';
    height: 100%;
    overflow: hidden;
    background-color: rgb(245, 245, 247);
  }

  textarea,
  input:focus {
    outline: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
