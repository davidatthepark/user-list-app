import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { UserList } from "./UserList";

describe("UserList", () => {
  it("should add a user", async () => {
    render(<UserList />);

    await userEvent.type(screen.getByLabelText("First Name"), "George");
    await userEvent.type(screen.getByLabelText("Last Name"), "Washington");
    await userEvent.type(screen.getByLabelText("Email"), "george@prez.com");
    await userEvent.click(screen.getByRole("button", { name: "Add" }));

    expect(screen.getByText("George Washington")).toBeInTheDocument();
  });

  it("should delete a user", async () => {
    const usersMockData = [
      {
        id: "1",
        firstName: "George",
        lastName: "Washington",
        email: "george@prez.com",
        status: "active",
        created: Date.now(),
      },
    ];
    render(<UserList initialUsers={usersMockData} />);

    expect(screen.getByText("George Washington")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Delete user" }));
    expect(screen.queryByText("George Washington")).not.toBeInTheDocument();
  });

  it("should edit a user", async () => {
    const usersMockData = [
      {
        id: "1",
        firstName: "George",
        lastName: "Washington",
        email: "george@prez.com",
        status: "active",
        created: Date.now(),
      },
    ];
    render(<UserList initialUsers={usersMockData} />);

    await userEvent.click(screen.getByRole("button", { name: "Edit user" }));
    const firstNameInput = screen.getByLabelText("First Name");
    await userEvent.clear(firstNameInput);
    await userEvent.type(firstNameInput, "Denzel");
    await userEvent.click(screen.getByRole("button", { name: "Edit" }));

    expect(screen.getByText("Denzel Washington")).toBeInTheDocument();
    expect(screen.queryByText("George Washington")).not.toBeInTheDocument();
  });
});
