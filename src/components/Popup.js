export const Popup = ({ setPopup }) => {
  return (
    <>
      <div className="popup" onClick={() => setPopup(false)}>
        <h1>Here will be the form to create a new review note</h1>
        <button className="popup-btn" onClick={() => setPopup(false)}>
          X
        </button>
      </div>
    </>
  );
};
