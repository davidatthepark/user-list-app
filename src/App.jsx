import "./App.css";
import { UserList } from "./components/UserList/UserList";
import { usersMockDataOne } from "./mockData/usersMockDataOne";
import { usersMockDataTwo } from "./mockData/usersMockDataTwo";

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
