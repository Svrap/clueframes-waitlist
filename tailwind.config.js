/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          purple: 'rgba(139, 92, 246, 0.3)',
          orange: 'rgba(236, 72, 153, 0.2)',
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(circle at center, #ffffff 0%, #f8f9fa 50%, #f0f0f0 100%)',
        'purple-orange': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
      },
      boxShadow: {
        'soft-glow': '0 0 40px rgba(139, 92, 246, 0.2), 0 0 80px rgba(236, 72, 153, 0.1)',
        'glow-sm': '0 0 20px rgba(139, 92, 246, 0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        orbitSlow: {
          'from': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        workflowCycle: {
          '0%, 100%': { opacity: '1', transform: 'translateY(0)' },
          '25%': { opacity: '0.3', transform: 'translateY(-10px)' },
          '50%': { opacity: '0.1', transform: 'translateY(-20px)' },
          '75%': { opacity: '0.3', transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'orbit-slow': 'orbitSlow 20s linear infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'workflow-cycle': 'workflowCycle 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
