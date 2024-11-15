import Todo from "./components/Todo";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",

        position: "absolute",
        top: 0,
        padding: "10px" /* Optional: for spacing */,
        overflow: "auto",
      }}
    >
      <Todo heading="TO DO" />
    </div>
  );
}

export default App;
