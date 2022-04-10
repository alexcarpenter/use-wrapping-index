# use-wrapping-index

> Useful for managing a wrapping index for an array of items.

## Usage

```tsx
import useWrappingIndex from "@alexcarpenter/use-wrapping-index";

const sampleData = [{ name: "Alex" }, { name: "Stacey" }, { name: "Frankie" }];

function App() {
  const {
    activeIndex,
    previousIndex,
    nextIndex,
    moveToPreviousIndex,
    moveToNextIndex,
  } = useWrappingIndex({
    maxIndex = sampleData.length,
  });

  return (
    <>
      <p>Active index: {activeIndex}</p>
      <p>Previous index: {previousIndex}</p>
      <p>Next index: {nextIndex}</p>
      <hr />
      <p>Active user: {sampleData[activeIndex].name}</p>
      <p>Previous user: {sampleData[previousIndex].name}</p>
      <p>Next user: {sampleData[nextIndex].name}</p>
      <hr />
      <button onClick={moveToPreviousIndex}>Previous</button>
      <button onClick={moveToNextIndex}>Next</button>
    </>
  );
}
```

This package was based off of the [`use-roving-index`](https://github.com/souporserious/use-roving-index) hook by [souporserious](https://github.com/souporserious).
