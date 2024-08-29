export const carSaleParticles = {
  particles: {
    number: {
      value: 50, 
    },
    color: {
      value: "#C70039", 
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.7, 
    },
    size: {
      value: { min: 2, max: 6 }, 
    },
    move: {
      enable: true,
      speed: 1.35,
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