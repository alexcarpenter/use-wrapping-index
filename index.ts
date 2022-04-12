import { useCallback, useState } from "react";

export default function useWrappingIndex({
  defaultIndex = 0,
  maxIndex = Infinity,
}: {
  /**
   * The default index to start at.
   */
  defaultIndex?: number;
  /**
   * The maximum index to allow.
   */
  maxIndex: number;
}): {
  /**
   * The current active index.
   */
  activeIndex: number;
  /**
   * The current next index.
   */
  nextIndex: number;
  /**
   * The current previous index.
   */
  previousIndex: number;
  /**
   * Moves the active index to the speficied index.
   */
  setActiveIndex: (index: number) => void;
  /**
   * Moves to the next index.
   * @see nextIndex
   */
  moveToNextIndex: () => void;
  /**
   * Moves to the previous index.
   * @see previousIndex
   */
  moveToPreviousIndex: () => void;
} {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const getNextIndex = useCallback(
    (nextIndex) => {
      return ((nextIndex % maxIndex) + maxIndex) % maxIndex;
    },
    [maxIndex]
  );

  const moveActiveIndex = useCallback(
    (amountToMove) => {
      setActiveIndex((currentIndex) =>
        getNextIndex(currentIndex + amountToMove)
      );
    },
    [getNextIndex]
  );

  const moveToNextIndex = useCallback(
    () => moveActiveIndex(1),
    [moveActiveIndex]
  );

  const moveToPreviousIndex = useCallback(
    () => moveActiveIndex(-1),
    [moveActiveIndex]
  );

  return {
    activeIndex,
    nextIndex: getNextIndex(activeIndex + 1),
    previousIndex: getNextIndex(activeIndex - 1),
    setActiveIndex,
    moveToNextIndex,
    moveToPreviousIndex,
  };
}
