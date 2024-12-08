import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      .
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map((emoji) => (
        <Card
          key={emoji.id}
          emoji={emoji.emoji}
          name={emoji.name}
          meaning={emoji.meaning}
        />
      ))}
    </div>
  );
}

export default App;
