import "./App.css";
import BottomNav from "./Components/BottomNav";
import Header1 from "./Components/Header1";
import HraCalculator from "./Components/HraCalculator";
import MiddleNav from "./Components/MiddleNav";
import TopNav from "./Components/TopNav";

const App = () => {
  return (
    <div className="App">
      <TopNav />
      <MiddleNav />
      <BottomNav />
      <Header1 />
      <HraCalculator />
    </div>
  );
};

export default App;
