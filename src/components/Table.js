import format from "date-fns/format";
import link from "../link.png";
import Users from "../data/dummy-data-users.json";

export default function Table({ results }) {
  const user1 = Users[0].photo;
  const user2 = Users[1].photo;

  let reporterPhoto = [];
  let assigneePhoto = [];

  return (
    <div className="review-notes">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>State</th>
            <th>Priority</th>
            <th>Due date</th>
            <th>Assignees</th>
            <th>Reporter</th>
            <th>Section</th>
            <th>Created</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {results?.map((note, i) => {
            const created = format(
              new Date(note.createdAt.$date),
              "dd.MM.yyyy hh:mm"
            );

            const updated = format(
              new Date(note.updatedAt.$date),
              "dd.MM.yyyy hh:mm"
            );

            if (note.assignees.$oid === "001") {
              assigneePhoto = user1;
            } else if (note.assignees.$oid === "002") {
              assigneePhoto = user2;
            } else if (note.assignees.$oid === undefined) {
              assigneePhoto = "";
            }

            if (note.reporterId.$oid === "001") {
              reporterPhoto = user1;
            } else if (note.reporterId.$oid === "002") {
              reporterPhoto = user2;
            }

            return (
              <tr key={i}>
                <td className="title">{note.title}</td>
                <td>
                  <p className="box">{note.type}</p>
                </td>
                <td className="clamp">
                  <p className="box short">{note.status}</p>
                </td>
                <td>
                  <p className="box">{note.priority.text}</p>
                </td>
                <td>{note.dueDate}</td>
                <td>
                  <img
                    src={assigneePhoto}
                    className="user-photo"
                    alt={note.assignees.$oid}
                  />
                </td>
                <td>
                  <img
                    src={reporterPhoto}
                    className="user-photo"
                    alt={note.reporterId.$oid}
                  />
                </td>
                <td className="clamp">
                  <p className="box">{note.sectionRef}</p>
                </td>
                <td>{created}</td>
                <td>{updated}</td>
                <td>
                  <a href="/">
                    <img src={link} className="link-icon" alt="link" />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
