import "./UserListTable.css";

export const UserListTable = ({ users }) => {
  return (
    <section className="user-list-table" aria-live="polite">
      <h2>User List</h2>
      {users.length ? (
        <table>
          <thead>
            <tr class="visually-hidden">
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Created at</th>
              <th>Updated at</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>{user.created}</td>
                  <td>{user.updated}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </section>
  );
};
