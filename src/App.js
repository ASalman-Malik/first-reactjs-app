import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hello</h1>
        <button>Click me...</button>
      </header> */
      return(
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <Vote brandName = "Samsung" model = "s21 ultra"/>
          <Vote brandName = "Apple" model = "12 mini"/>
          <Vote brandName = "Realme" model = "X7 5G"/>
          <Vote brandName = "Oppo" model = "A7"/>
          <Vote brandName = "Nokia" model = "Lumia 730"/>
          <Vote brandName = "Sony" model = "Xpress Music"/>
          <Vote brandName = "MI" model = "Note 10 Pro"/>
        </div>
      )
     
    }
function Vote(a)
{
  const [like, setLike] = useState(0);
  const [dislike, disLike] = useState(0);
 
  return (
    <div className="App" 
    style={{
      background: like >= dislike ? "green" : "red"
      }}>
    <h1>{a.brandName}</h1>
    <h4>{a.model}</h4>
    <button onClick={() => setLike(like + 1)}>👍 {like}</button>
    <button onClick={() => disLike(dislike + 1)}>👎 {dislike}</button>
  </div>
)
}


export default App;
