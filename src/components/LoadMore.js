export default function LoadMore({ currentlyLoaded, Data, handleLoad }) {
  return (
    <>
      {currentlyLoaded < Data.length + 3 && (
        <button className="load-more" onClick={() => handleLoad()}>
          Load more
        </button>
      )}
    </>
  );
}
