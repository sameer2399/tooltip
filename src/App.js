import ToolTip from "./component/Tooltip";
import "./index.css";

function App() {
  return (
    <div className="container">
      <ToolTip position="top" content="Hey, You triggered something">
        <button className="btn" > Hey Hover Here </button>
      </ToolTip>
    </div>
  );
}


export default App;
