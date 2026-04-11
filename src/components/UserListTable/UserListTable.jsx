import { formatDateString } from "../../utils/date-utils";
import "./UserListTable.css";
import { StatusIcon } from "./StatusIcon";
import { Pencil, Trash2 } from "lucide-react";

export const UserListTable = ({ users }) => {
  return (
    <section className="user-list-table" aria-live="polite">
      <h2>User List</h2>
      {users.length ? (
        <div className="table-container">
          <table>
            <thead>
              <tr className="visually-hidden">
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Created at</th>
                <th>Updated at</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    <td>
                      <span aria-hidden="true">&lt;</span>
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                      <span aria-hidden="true">&gt;</span>
                    </td>
                    <td className="status-cell">
                      <span className="status-icon">
                        <StatusIcon status={user.status} />
                      </span>
                      <span className="status">{user.status}</span>
                    </td>
                    <td>Created: {formatDateString(user.created)}</td>
                    <td>Updated: {formatDateString(user.updated)}</td>
                    <td className="action-buttons-cell">
                      <button aria-label="Delete user" type="button">
                        <Trash2 size={14} color="white" />
                      </button>
                      <button aria-label="Edit user" type="button">
                        <Pencil size={14} color="white" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
};
