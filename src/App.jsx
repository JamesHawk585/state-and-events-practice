import "./App.css";

const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(e)
};

const handleButtonClick = (event) => {
  console.log("in handleButtonClick: ", event);
};

const handleInputChange = (event) => {
  console.log("In handleInputChange: ", event);
};

function App() {
  return (
    <div>
      <h1>React Events</h1>
      <button onClick={(event) => handleButtonClick(event)}>Click Me!</button>
      <form type="submit" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="sample text"
          onChange={(event) => handleInputChange(event)}
        />
        <select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <button>
          Submit form
        </button>
      </form>
    </div>
  );
}

export default App;
