import create from "zustand";

const useStore = create((set) => ({
  DestopSize: [1920, 937],
  maxIndex: 1,
  windowsStack: [],
  AddWindow: () =>
    set((state) => ({
      windowsStack: [
        ...state.windowsStack,
        {
          id: state.windowsStack.length,
          name: "window",
          index: state.maxIndex,
        },
      ],
      maxIndex: state.maxIndex + 1,
    })),
  MoveToTop: (windowIndex) =>
    set((state) => {
      var newMax = state.maxIndex;
      if (state.windowsStack[windowIndex].index != state.maxIndex - 1) {
        state.windowsStack[windowIndex].index = state.maxIndex;
        newMax = newMax + 1;
      }
      return {
        windowsStack: state.windowsStack,
        maxIndex: newMax,
      };
    }),
}));

export default useStore;
