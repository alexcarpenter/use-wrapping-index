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
}) {
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
    /**
     * The current active index.
     */
    activeIndex,
    /**
     * The current next inde
     */
    nextIndex: getNextIndex(activeIndex + 1),
    /**
     * The current previous index.
     */
    previousIndex: getNextIndex(activeIndex - 1),
    /**
     * Moves the active index to the speficied index.
     */
    setActiveIndex,
    /**
     * Moves to the next index.
     * @see nextIndex
     */
    moveToNextIndex,
    /**
     * Moves to the previous index.
     * @see previousIndex
     */
    moveToPreviousIndex,
  };
}
