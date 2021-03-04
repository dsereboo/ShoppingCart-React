import './App.css';
import ItemRow from "./ItemRow"

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <h3>Sizes:</h3>
            <button className="btn btn-default btn-circle">XS</button>
				    <button className="btn btn-default btn-circle">S</button>
            <button className="btn btn-default btn-circle">M</button>
            <button className="btn btn-default btn-circle">ML</button>
            <button className="btn btn-default btn-circle">L</button>
            <button className="btn btn-default btn-circle">XL</button>
            <button className="btn btn-default btn-circle">XXL</button>
            <p>Leave a star on github  if this repository was useful.</p>
            <button className="btn btn-default"><span class="glyphicon glyphicon-star"></span> Star </button>
            <button className="btn btn-default" id="talkBubble">932</button>
          </div>
          <div className="container">
            <ItemRow/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
