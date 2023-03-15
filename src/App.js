
import './App.css';
import QuoteAPI from "./components/QuoteAPI";

function App() {
  return (
    <div className="App">
      <div className="header">Quote Collector</div> 
      
        <QuoteAPI></QuoteAPI>

      <div className="topRightButtons">
          <a href="" className="saveIcon">save</a>
          <a href="" className="collectionIcon">collection</a>
      </div>
      <div className="middleSideButtons">
          <a href="" className="rightIcon">right</a>
          <a href="" className="leftIcon">left</a>
      </div>
    </div>
  );
}



export default App;
