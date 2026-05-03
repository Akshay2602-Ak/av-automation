/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        raisin: {
          DEFAULT: '#C87740',
          light:   '#E09058',
          dim:     '#A05E2A',
        },
        caramel: {
          DEFAULT: '#021F26',
          mid:     '#062B36',
          light:   '#0C3D4A',
          muted:   '#123040',
        },
        gold:  '#F0A850',
        ember: '#E8623A',
      },
      fontFamily: {
        zeroarea: ['"ZEROAREA"', '"Rajdhani"', 'sans-serif'],
        body:     ['"Rajdhani"', 'sans-serif'],
        mono:     ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delay':'float 7s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
        'gradient':   'gradientShift 8s ease infinite',
        'glow':       'glow 2s ease-in-out infinite alternate',
        'slide-up':   'slideUp 0.8s ease forwards',
        'fade-in':    'fadeIn 1s ease forwards',
        'scan':       'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 5px #C87740, 0 0 10px #C87740, 0 0 20px #C87740' },
          '100%': { boxShadow: '0 0 10px #E8623A, 0 0 20px #E8623A, 0 0 40px #E8623A' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundSize: { '300%': '300%' },
      boxShadow: {
        'raisin': '0 0 20px rgba(200,119,64,.4)',
        'ember':  '0 0 20px rgba(232,98,58,.4)',
      },
    },
  },
  plugins: [],
}