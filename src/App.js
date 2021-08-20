import "./styles.css";

import withHeightWidth from "./withHeightWidth";

function App(props) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>height: {props.height}</h1>
      <h1>width: {props.width}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default withHeightWidth(App);
// export default App;
