import "./UserListForm.css";

// add basic validation
export const UserListForm = () => {
  return (
    <>
      <h2>Add/Edit User</h2>
      <form>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          type="text"
          autoComplete="given-name"
          required
          maxLength={255}
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          type="text"
          autoComplete="family-name"
          required
          maxLength={255}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          maxLength={255}
        />
        <label htmlFor="status">Status</label>
        <select id="status" name="status">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="disabled">Disabled</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
