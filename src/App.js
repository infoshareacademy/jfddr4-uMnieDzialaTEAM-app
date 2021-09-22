import "./App.css";
import "./firebaseConfig";
import sendToFirebase from "./sendToFirebase";

function App() {
  return (
    <div className="App">
      <button onClick={sendToFirebase}>Send</button>
    </div>
  );
}

export default App;
