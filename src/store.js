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
          minimized: false,
        },
      ],
      maxIndex: state.maxIndex + 1,
    })),
  MoveToTop: (windowIndex) =>
    set((state) => ({
      windowsStack: state.windowsStack.map((t) =>
        t.id === windowIndex ? { ...t, index: state.maxIndex } : t
      ),
      maxIndex: state.maxIndex + 1,
    })),
  MinmizeWindow: (windowIndex) =>
    set((state) => ({
      windowsStack: state.windowsStack.map((t) =>
        t.id === windowIndex ? { ...t, minimized: !t.minimized } : t
      ),
    })),
  CloseWindow: (windowIndex) =>
    set((state) => ({
      windowsStack: state.windowsStack.filter(function (item) {
        return item.id != windowIndex;
      }),
    })),
  // set((state) => {
  //   var newMax = state.maxIndex;
  //   if (state.windowsStack[windowIndex].index != state.maxIndex - 1) {
  //     state.windowsStack[windowIndex].index = state.maxIndex;
  //     newMax = newMax + 1;
  //   }
  //   return {
  //     windowsStack: state.windowsStack,
  //     maxIndex: newMax,
  //   };
  // }),
}));

export default useStore;
