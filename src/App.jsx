import Greeting1 from "./components/Greeting1";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div>
      <UserStatus loggedIn={true} isAdmin={true} />
      <Weather temperature="28" />
      <Greeting1 timeOfDay="morning" />
    </div>
  );
};

export default App;
