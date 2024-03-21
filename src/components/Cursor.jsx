import gsap from "gsap";
import { useRef } from "react";

import { useEffect } from "react";

function Cursor({ isOver }) {
  console.log(isOver);
  const size = isOver ? 300 : 30;
  const cursorFollow = useRef();
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const delay = useRef({
    x: 0,
    y: 0,
  });

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const moveMouse = (x, y) => {
    gsap.set(cursorFollow.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const animate = () => {
    const { x, y } = delay.current;

    delay.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveMouse(delay.current.x, delay.current.y);

    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, [isOver]);

  return (
    <div
      ref={cursorFollow}
      className="fixed top-0 left-0 z-40 border-2 rounded-full pointer-events-none border-textcol mix-blend-difference"
      style={{
        width: size,
        height: size,
        transition: "width 0.5s ease, height 0.5s ease",
        backgroundColor: isOver ? "#FBF4DA" : "transparent",
      }}
    ></div>
  );
}

export default Cursor;
