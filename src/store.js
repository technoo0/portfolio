import create from "zustand";

const useStore = create((set, get) => ({
  DesktopSize: [1920, 937],
  maxIndex: 1,
  windowsStack: [],
  spwanMargin: -4,
  AddMatgin: () => {
    const spwanMarginstate = get().spwanMargin;
    if (spwanMarginstate <= 40) {
      set((state) => ({ spwanMargin: state.spwanMargin + 8 }));
    } else {
      set((state) => ({ spwanMargin: -4 }));
    }
  },
  AddWindow: (name, content, hight, width, props = {}) => {
    const AddMatgin = get().AddMatgin;

    set((state) => ({
      windowsStack: [
        ...state.windowsStack,
        {
          id: state.windowsStack.length,
          name: name,
          index: state.maxIndex,
          minimized: false,
          content: content,
          hight: hight,
          width: width,
          props
        },
      ],
      maxIndex: state.maxIndex + 1,
    }));
    AddMatgin();
  },
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
