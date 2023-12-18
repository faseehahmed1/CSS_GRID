import "./App.css";
import { useState } from "react";

function App() {
  const [currentJustifyContentOption, setCurrentJustifyContentOption] =
    useState("flex-start");
  const [currentJustifyItemOption, setCurrentJustifyItemOption] =
    useState("stretch");
  const [currentAlignContentOption, setCurrentAlignContentOption] =
    useState("flex-start");
  const [currentAlignOption, setCurrentAlignOption] = useState("stretch");
  const [currentSelfAlignOption, setCurrentSelfAlignOption] =
    useState("stretch");

  return (
    <>
      <ul
        className="wrapper"
        style={{
          justifyContent: currentJustifyContentOption,
          justifyItems: currentJustifyItemOption,
          alignContent: currentAlignContentOption,
          alignItems: currentAlignOption,
        }}
      >
        <li>
          Hello <br /> Friend
        </li>
        <li>to</li>
        <li>the</li>
        <li style={{ alignSelf: currentSelfAlignOption }}>World</li>
      </ul>
      <p>
        justify-content: (col) <code>{currentJustifyContentOption}</code>{" "}
        {currentJustifyContentOption === "flex-start" && "(Default)"}
      </p>
      <p>
        align-content: (row) <code>{currentAlignContentOption}</code>{" "}
        {currentAlignContentOption === "flex-start" && "(Default)"}
      </p>
      <p>
        align-items: (cell-rowDir) <code>{currentAlignOption}</code>{" "}
        {currentAlignOption === "stretch" && "(Default)"}
      </p>
      <p>
        justify-items: (cell-colDir) <code>{currentJustifyItemOption}</code>{" "}
        {currentJustifyItemOption === "stretch" && "(Default)"}
      </p>
      <p>
        self-align (last-li): <code>{currentSelfAlignOption}</code>{" "}
        {currentSelfAlignOption === "stretch" && "(Default)"}
      </p>

      <div className="dropdowns">
        <label htmlFor="currentJustifyOption">
          justify-content (col)
          <select
            value={currentJustifyContentOption}
            onChange={(e) => setCurrentJustifyContentOption(e.target.value)}
            id="currentJustifyOption"
          >
            <option value="flex-start">flex-start (Default)</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="space-evenly">space-evenly</option>
          </select>
        </label>
  
        <label htmlFor="currentAlignContentOption">
          align-content (row)
          <select
            value={currentAlignContentOption}
            onChange={(e) => setCurrentAlignContentOption(e.target.value)}
            id="currentAlignContentOption"
          >
            <option value="flex-start">flex-start (Default)</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="space-evenly">space-evenly</option>
          </select>
        </label>
  
        <label htmlFor="align-items">
          align-items: (cell-rowDir)
          <select id="align-items" onChange={(e) => setCurrentAlignOption(e.target.value)}>
            <option value="stretch">stretch (Default)</option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="baseline">baseline</option>
          </select>
        </label>

        <label htmlFor="justify-items">
          justify-items: (cell-colDir)
          <select onChange={(e) => setCurrentJustifyItemOption(e.target.value)}>
            <option value="stretch">stretch (Default)</option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="baseline">baseline</option>
          </select>
        </label>
  
        <label htmlFor="setCurrentSelfAlignOption">
          self-align (last-li)
          <select onChange={(e) => setCurrentSelfAlignOption(e.target.value)}>
            <option value="stretch">stretch (Default)</option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="baseline">baseline</option>
          </select>
        </label>
      </div>
    </>
  );
}

export default App;
