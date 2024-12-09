import Counter from "./components/useState/Counter";
import Profile from "./components/useState/Profile";
import ShoppingList from "./components/useState/ShoppingList";
import TodoList from "./components/useState/TodoList";
const App = () => {
  return (
    <div>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </div>
  );
};

export default App;
