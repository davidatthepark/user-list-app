import { UserListForm } from "../UserListForm/UserListForm";
import { UserListTable } from "../UserListTable/UserListTable";
import "./UserList.css";

export const UserList = () => {
  return (
    <div className="user-list">
      <div className="form-container">
        <UserListForm />
      </div>
      <div className="table-container">
        <UserListTable />
      </div>
    </div>
  );
};
