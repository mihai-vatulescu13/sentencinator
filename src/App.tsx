import { useState } from "react";
import "./App.css";
import PlayMode from "./components/play-mode/PlayMode";

function App() {
  const [isPlaySelected, setIsPlaySelected] = useState(false);

  const onSelectPlay = (playStatusFlag: boolean) => {
    console.log("play mode selected");
    setIsPlaySelected(playStatusFlag);
  };

  return (
    <div className="app-container">
      <div className="presentation">
        <h1>
          Welcome to <span className="title-span">Sentenc</span>
          <span className="description-span">inator</span>! &#x270D;
        </h1>
        <div className="card">
          {!isPlaySelected && (
            <button onClick={() => onSelectPlay(true)} className="play-btn">
              Play
            </button>
          )}
          {isPlaySelected && (
            <div className="play-mode-container">
              <PlayMode />
              <button className="back-btn" onClick={() => onSelectPlay(false)}>
                &#x1F448; Back
              </button>
            </div>
          )}
        </div>
        <p className="read-the-docs">
          This is the place where you and your friends can{" "}
          <span className="description-span">compose sentences</span> in a{" "}
          <span className="description-span">fun</span> way &#x1F61C;
        </p>
      </div>
    </div>
  );
}

export default App;
