import { useEffect, useState } from "react";
import "./UserListForm.css";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  status: "active",
};

export const UserListForm = ({ editingUser, onSubmit }) => {
  const [form, setForm] = useState(editingUser ?? initialFormState);

  useEffect(() => {
    setForm(editingUser ?? initialFormState);
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = Date.now();

    if (editingUser) {
      onSubmit({
        ...editingUser,
        ...form,
        updated: currentTime,
      });
    } else {
      onSubmit({
        ...form,
        id: crypto.randomUUID(),
        created: currentTime,
      });
    }

    setForm(initialFormState);
  };

  const isEditingUserDisabled = editingUser?.status === "disabled";

  return (
    <section className="user-list-form">
      <h2>Add/Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          maxLength={255}
          onChange={handleChange}
          value={form.firstName}
          disabled={isEditingUserDisabled}
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          name="lastName"
          type="text"
          autoComplete="family-name"
          required
          maxLength={255}
          onChange={handleChange}
          value={form.lastName}
          disabled={isEditingUserDisabled}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={255}
          onChange={handleChange}
          value={form.email}
          disabled={isEditingUserDisabled}
        />
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          onChange={handleChange}
          value={form.status}
          disabled={isEditingUserDisabled}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="disabled">Disabled</option>
        </select>
        <button type="submit" disabled={isEditingUserDisabled}>
          {editingUser ? "Edit" : "Add"}
        </button>
      </form>
    </section>
  );
};
