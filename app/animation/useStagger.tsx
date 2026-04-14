export const useStagger = (delay = 0.12) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: delay,
      },
    },
  };
};