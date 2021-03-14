export const pageTrans = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.2,
    },
  },
};

export const staggerItems = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.4,
    },
  },
};

export const hoverBtn = {
  hover: {
    scale: 1.2,
  },
};

export const hoverCard = {
  hover: {
    scale: 1.03,
  },
};

export const catTitleAnim = {
  hidden: {
    opacity: 0,
    x: 900,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.4,
    },
  },
};

export const detailTitleAnim = {
  hidden: {
    opacity: 0,
    x: -900,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
    },
  },
};
