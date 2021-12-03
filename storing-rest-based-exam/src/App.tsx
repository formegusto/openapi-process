import axios from "axios";
import React from "react";
import "./styles/block.css";

// 사용자의 마우스 클릭 감지
type Offset = {
  x: number;
  y: number;
};
function App() {
  const [offset, setOffset] = React.useState<Offset>({
    x: 0,
    y: 0,
  });
  const refX = React.useRef(0);
  const refY = React.useRef(0);
  // const saveOffset = React.useCallback(
  //   async (e: React.MouseEvent<HTMLDivElement>) => {
  //     const elMMI = document.getElementById("mouse-movement-info");

  //     if (elMMI) {
  //       const { clientX: x, clientY: y } = e;
  //       elMMI.classList.add("click");
  //       const result = await axios.post(
  //         "http://localhost:8080/mouse-movement",
  //         {
  //           x,
  //           y,
  //         }
  //       );
  //       console.log(result.data);
  //     }
  //   },
  //   []
  // );
  const saveOffset = React.useCallback(async () => {
    const elMMI = document.getElementById("mouse-movement-info");

    if (elMMI) {
      const result = await axios.post("http://localhost:8080/mouse-movement", {
        ...offset,
      });
      console.log(result.data);
    }
  }, [offset]);

  React.useEffect(() => {
    saveOffset();
  }, [saveOffset]);

  React.useEffect(() => {
    setInterval(async () => {
      setOffset({
        x: refX.current,
        y: refY.current,
      });
    }, 5000);
  }, []);

  const mouseMovementDetect = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const elMMI = document.getElementById("mouse-movement-info");

      if (elMMI) {
        // elMMI.classList.remove("click");
        const { clientX: x, clientY: y } = e;

        refX.current = x;
        refY.current = y;

        elMMI.style.top = y + 10 + "px";
        elMMI.style.left = x + 10 + "px";
        elMMI.textContent = `${x},${y}`;
      }
    },
    []
  );

  return (
    <>
      <div
        id="mouse-movement-detect"
        onMouseMoveCapture={mouseMovementDetect}
        // onMouseUp={saveOffset}
      />
      <div id="mouse-movement-info" />
    </>
  );
}

export default App;
