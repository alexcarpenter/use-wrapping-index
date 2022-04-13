import { renderHook, act } from "@testing-library/react-hooks";
import useWrappingIndex from "./dist";

describe("useWrappingIndex", () => {
  it("should return the correct default index", () => {
    const { result } = renderHook(() =>
      useWrappingIndex({ maxIndex: 5, defaultIndex: 3 })
    );
    expect(result.current.activeIndex).toBe(3);
  });

  it("should wrap the index when it exceeds the maxIndex", () => {
    const { result } = renderHook(() => useWrappingIndex({ maxIndex: 2 }));
    expect(result.current.activeIndex).toBe(0);
    act(() => result.current.moveToNextIndex());
    expect(result.current.activeIndex).toBe(1);
    act(() => result.current.moveToNextIndex());
    expect(result.current.activeIndex).toBe(0);
  });

  it("should set active index", () => {
    const { result } = renderHook(() =>
      useWrappingIndex({ maxIndex: 5, defaultIndex: 3 })
    );
    expect(result.current.activeIndex).toBe(3);
    act(() => {
      result.current.setActiveIndex(4);
    });
    expect(result.current.activeIndex).toBe(4);
  });

  it("should return the correct next and previous indexes", () => {
    const { result } = renderHook(() => useWrappingIndex({ maxIndex: 5 }));
    expect(result.current.activeIndex).toBe(0);
    expect(result.current.nextIndex).toBe(1);
    expect(result.current.previousIndex).toBe(4);
  });

  it("should move to the next and previous indexes", () => {
    const { result } = renderHook(() => useWrappingIndex({ maxIndex: 5 }));
    expect(result.current.activeIndex).toBe(0);
    act(() => result.current.moveToNextIndex());
    expect(result.current.activeIndex).toBe(1);
    act(() => result.current.moveToPreviousIndex());
    expect(result.current.activeIndex).toBe(0);
  });
});
