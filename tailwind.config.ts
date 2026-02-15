import type { Config } from 'tailwindcss'
import plugin = require('tailwindcss-animate')
import vidstackTailwind =  require( '@vidstack/react/tailwind.cjs')
export default {
  content: [
    './index.html',
    './404.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        'media-brand': 'rgb(var(--media-brand) / <alpha-value>)',
        'media-focus': 'rgb(var(--media-focus) / <alpha-value>)',
      },
    },
  },
  plugins: [
    plugin,
    vidstackTailwind({
      prefix: 'media',
    }),
    customVariants,
  ],
};

function customVariants({ addVariant, matchVariant }) {
  // Strict version of `.group` to help with nesting.
  matchVariant('parent-data', (value) => `.parent[data-${value}] > &`);

  addVariant('hocus', ['&:hover', '&:focus-visible']);
  addVariant('group-hocus', ['.group:hover &', '.group:focus-visible &']);
}
