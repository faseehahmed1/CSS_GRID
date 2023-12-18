import "./App.css";
import { useState } from "react";

function App() {
  const [currentJustifyOption, setCurrentJustifyOption] =
    useState("flex-start");
  const [currentAlignOption, setCurrentAlignOption] = useState("stretch");
  const [currentAxisOption, setCurrentAxisOption] = useState("row");
  const [currentSelfAlignOption, setCurrentSelfAlignOption] =
    useState("stretch");

  return (
    <>
      <ul
        className="wrapper"
        style={{
          justifyContent: currentJustifyOption,
          alignItems: currentAlignOption,
          flexDirection: currentAxisOption,
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
        justify-content: <code>{currentJustifyOption}</code>{" "}
        {currentJustifyOption === "flex-start" && "(Default)"}
      </p>
      <p>
        align-items: <code>{currentAlignOption}</code>{" "}
        {currentAlignOption === "stretch" && "(Default)"}
      </p>
      <p>
        self-align (last-li): <code>{currentSelfAlignOption}</code>{" "}
        {currentSelfAlignOption === "stretch" && "(Default)"}
      </p>

      <select
        value={currentJustifyOption}
        onChange={(e) => setCurrentJustifyOption(e.target.value)}
      >
        <option value="flex-start">flex-start (Default)</option>
        <option value="flex-end">flex-end</option>
        <option value="center">center</option>
        <option value="space-between">space-between</option>
        <option value="space-around">space-around</option>
        <option value="space-evenly">space-evenly</option>
      </select>

      <select onChange={(e) => setCurrentAlignOption(e.target.value)}>
        <option value="stretch">stretch (Default)</option>
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
        <option value="center">center</option>
        <option value="baseline">baseline</option>
      </select>

      <select onChange={(e) => setCurrentAxisOption(e.target.value)}>
        <option value="row">row (Default)</option>
        <option value="column">column</option>
      </select>

      <select onChange={(e) => setCurrentSelfAlignOption(e.target.value)}>
        <option value="stretch">stretch (Default)</option>
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
        <option value="center">center</option>
        <option value="baseline">baseline</option>
      </select>
    </>
  );
}

export default App;
