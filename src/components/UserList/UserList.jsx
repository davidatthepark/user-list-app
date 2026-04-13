import { useState } from "react";
import { UserListForm } from "../UserListForm/UserListForm";
import { UserListTable } from "../UserListTable/UserListTable";
import "./UserList.css";

export const UserList = ({ initialUsers = [] }) => {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  const handleDeleteUser = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));

    if (editingUser?.id === userId) {
      setEditingUser(null);
    }
  };

  const handleClickEdit = (user) => {
    setEditingUser(user);
  };

  const handleEditUser = (updatedUser) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    );

    setEditingUser(null);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="user-list">
      <div className="user-list-form-container">
        <UserListForm
          editingUser={editingUser}
          onSubmit={editingUser ? handleEditUser : handleAddUser}
          onCancelEdit={handleCancelEdit}
        />
      </div>
      <div className="user-list-table-container">
        <UserListTable
          users={users}
          onClickDelete={handleDeleteUser}
          onClickEdit={handleClickEdit}
        />
      </div>
    </div>
  );
};
