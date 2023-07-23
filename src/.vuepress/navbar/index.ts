import { navbar } from "vuepress-theme-hope"
import access from './content/access'
import solution from './content/solution'
import frontEnd from './content/frontEnd'
import cs from './content/cs'
import tool from './content/tool'
import english from './content/english'
import math from './content/math'

const navBar = navbar([
  "/",

  // Access
  {
    text: 'Access',
    children: access,
  },

  // Solution
  {
    text: 'Solution',
    prefix: '/solution',
    children: solution
  },

  // Front End
  {
    text: 'Front End',
    prefix: '/front_end',
    children: frontEnd
  },

  // Computer Science
  {
    text: 'Computer Science',
    prefix: '/cs',
    children: cs
  },

  // Tool
  {
    text: 'Tool',
    prefix: '/tool',
    children: tool
  },

  // English
  {
    text: 'English',
    prefix: '/english',
    children: english,
  },

  // Math
  {
    text: 'Math',
    prefix: '/math',
    children: math,
  },
]);

export default navBar
