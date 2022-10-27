export default function FilterBar({ onChangeHandler, text }) {
  return (
    <div className="filter-bar">
      <input
        type="search"
        className="search"
        placeholder="Search notes.."
        aria-label="Search"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
      />
    </div>
  );
}
