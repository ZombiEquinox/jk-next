module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
     require('@tailwindcss/typography'),
  ],
  daisyui:{
    styled: true,
    themes:[
      {
        'jk':{
           'primary' : '#4D4C6D',           /* Primary color */
           'primary-focus' : '#3c2f46',     /* Primary color - focused */
           'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */

           'secondary' : '#7CE69D',         /* Secondary color */
           'secondary-focus' : '#539784',   /* Secondary color - focused */
           'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */

           'accent' : '#F4F8C2',            /* Accent color */
           'accent-focus' : '##FDFFE0',      /* Accent color - focused */
           'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

           'neutral' : '#3d4451',           /* Neutral color */
           'neutral-focus' : '#2a2e37',     /* Neutral color - focused */
           'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

           'base-100' : '#333333',          /* Base color of page, used for blank backgrounds */
           'base-200' : '#222222',          /* Base color, a little darker */
           'base-300' : '#000000',          /* Base color, even more darker */
           'base-content' : '#1f2937',      /* Foreground content color to use on base color */

           'info' : '#2094f3',              /* Info */
           'success' : '#009485',           /* Success */
           'warning' : '#ff9900',           /* Warning */
           'error' : '#ff5724',             /* Error */
        }
      }
    ]
  }
}
