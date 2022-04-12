export default function useWrappingIndex({
  defaultIndex,
  maxIndex,
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
};
