import gsap from "gsap";
import { useRef } from "react";

import { useEffect } from "react";

function Cursor() {
  const size = 30;
  const cursorFollow = useRef();
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
    moveMouse(mouse.current.x, mouse.current.y);
    console.log(mouse.current.x, mouse.current.y);
  };

  const moveMouse = (x, y) => {
    gsap.set(cursorFollow.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const animate = () => {};

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  return (
    <div
      ref={cursorFollow}
      className="fixed top-0 left-0 z-40 border-2 rounded-full border-textcol"
      style={{
        width: size,
        height: size,
      }}
    ></div>
  );
}

export default Cursor;
