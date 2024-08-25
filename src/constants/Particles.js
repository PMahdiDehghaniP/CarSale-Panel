export const carSaleParticles = {
  particles: {
    number: {
      value: 50, 
    },
    color: {
      value: "#ffffff", 
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.3, 
    },
    size: {
      value: { min: 2, max: 4 }, 
    },
    move: {
      enable: true,
      speed: 1.25,
      direction: "none",
      outModes: {
        default: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
        },
        onClick: {
          enable: false, 
        },
      },
    },
  },
  detectRetina: true,
}