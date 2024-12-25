particlesJS('snowfall', {
  particles: {
    number: {
      value: 100, // Adjust for more or fewer snowflakes
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff', // White color for snow
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.8,
    },
    size: {
      value: 5,
      random: true,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'bottom', // Snow falls downward
      random: false,
      straight: false,
      out_mode: 'out',
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
    },
  },
  retina_detect: true,
});
