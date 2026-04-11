import { useState } from "react";
import { UserListForm } from "../UserListForm/UserListForm";
import { UserListTable } from "../UserListTable/UserListTable";
import "./UserList.css";

export const UserList = ({ initialUsers = [] }) => {
  const [users, setUsers] = useState(initialUsers);

  return (
    <div className="user-list">
      <div className="user-list-form-container">
        <UserListForm />
      </div>
      <div className="user-list-table-container">
        <UserListTable users={users} />
      </div>
    </div>
  );
};
