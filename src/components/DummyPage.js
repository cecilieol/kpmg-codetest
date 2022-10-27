import { Link } from "react-router-dom";

export default function DummyPage() {
  return (
    <>
      <h1>This is a dummy page</h1>
      <Link to="/engagements/2021_0001/reviewnotes">
        Return to review notes
      </Link>
    </>
  );
}
