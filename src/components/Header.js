import { useState } from "react";
import { Popup } from "./Popup";

export default function Header() {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <section className="header">
        <h1>Review Notes</h1>
        <button className="new-note" onClick={() => setPopup(true)}>
          New note
        </button>
        {popup && <Popup setPopup={setPopup} />}
      </section>
    </>
  );
}
