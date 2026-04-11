import "./App.css";
import { UserList } from "./components/UserList/UserList";
import { usersMockDataOne } from "./data/usersMockDataOne";
import { usersMockDataTwo } from "./data/usersMockDataTwo";

function App() {
  return (
    <main className="app">
      <h1>User List App</h1>
      <UserList initialUsers={usersMockDataOne} />
      <UserList initialUsers={usersMockDataTwo} />
    </main>
  );
}

export default App;
