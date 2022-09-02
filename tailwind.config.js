const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./templates/**/*.twig', './templates/**/*.html'],
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        alpha: {
          DEFAULT: '#ed2146',
          50: '#fef4f6',
          100: '#fde9ed',
          200: '#fbc8d1',
          300: '#f8a6b5',
          400: '#f2647e',
          500: '#ed2146',
          600: '#d51e3f',
          700: '#b21935',
          800: '#8e142a',
          900: '#741022',
        },
        beta: {
          DEFAULT: '#1b2580',
          50: '#f4f4f9',
          100: '#e8e9f2',
          200: '#c6c9df',
          300: '#a4a8cc',
          400: '#5f66a6',
          500: '#1b2580',
          600: '#182173',
          700: '#141c60',
          800: '#10164d',
          900: '#0d123f',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'max-width': '100%',
            fontFamily: theme('fontFamily.sans').join(', '),
            a: {
              textDecoration: 'none',
              borderBottom: '2px solid ' + theme('colors.alpha[500]'),
              '&:hover': {
                textDecoration: 'none',
                borderBottom: '2px solid transparent',
              },
            },
          },
        },
        ci: {
          css: {
            '--tw-prose-body': theme('colors.gray[900]'),
            '--tw-prose-headings': theme('colors.alpha[500]'),
            '--tw-prose-lead': theme('colors.alpha[700]'),
            '--tw-prose-links': theme('colors.alpha[600]'),
            '--tw-prose-bold': theme('colors.gray[900]'),
            '--tw-prose-counters': theme('colors.alpha[600]'),
            '--tw-prose-bullets': theme('colors.alpha[600]'),
            '--tw-prose-hr': theme('colors.alpha[300]'),
            '--tw-prose-quotes': theme('colors.alpha[900]'),
            '--tw-prose-quote-borders': theme('colors.alpha[300]'),
            '--tw-prose-captions': theme('colors.alpha[700]'),
            '--tw-prose-code': theme('colors.alpha[900]'),
            '--tw-prose-pre-code': theme('colors.alpha[100]'),
            '--tw-prose-pre-bg': theme('colors.alpha[900]'),
            '--tw-prose-th-borders': theme('colors.alpha[300]'),
            '--tw-prose-td-borders': theme('colors.alpha[200]'),
            '--tw-prose-invert-body': theme('colors.gray[100]'),
            '--tw-prose-invert-headings': theme('colors.alpha[500]'),
            '--tw-prose-invert-lead': theme('colors.alpha[300]'),
            '--tw-prose-invert-links': theme('colors.alpha[600]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.alpha[400]'),
            '--tw-prose-invert-bullets': theme('colors.alpha[600]'),
            '--tw-prose-invert-hr': theme('colors.alpha[700]'),
            '--tw-prose-invert-quotes': theme('colors.alpha[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.alpha[700]'),
            '--tw-prose-invert-captions': theme('colors.alpha[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.alpha[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.alpha[600]'),
            '--tw-prose-invert-td-borders': theme('colors.alpha[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
};
