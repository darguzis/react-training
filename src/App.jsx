import Greeting1 from "./components/props/Greeting1";
import UserStatus from "./components/props/UserStatus";
import Weather from "./components/props/Weather";
import ArrayUseState from "./components/useState/ArrayUseState";

const App = () => {
  return (
    <div>
      <UserStatus loggedIn={true} isAdmin={true} />
      <Weather temperature="28" />
      <Greeting1 timeOfDay="afternoon" />
      <ArrayUseState />
    </div>
  );
};

export default App;
