import { useState } from "react";
import Cursor from "./components/Cursor";

function App() {
  const [isOver, setIsOver] = useState(false);

  return (
    <section className="grid w-screen h-screen bg-bgcol">
      <h1
        onMouseEnter={() => {
          setIsOver(true);
        }}
        onMouseLeave={() => {
          setIsOver(false);
        }}
        className="text-center text-7xl place-self-center text-textcol"
      >
        Discover the world of Novelty Marketing
      </h1>
      <Cursor isOver={isOver} />
    </section>
  );
}

export default App;
