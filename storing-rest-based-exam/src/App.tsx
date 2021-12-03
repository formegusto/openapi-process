import React from "react";
import "./styles/block.css";

// 사용자의 마우스 움직임 감지
function App() {
  const mouseMovementDetect = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      console.log(e.clientX);
      console.log(e.clientY);

      const elMMI = document.getElementById("mouse-movement-info");
      if (elMMI) {
        const { clientX: X, clientY: Y } = e;
        elMMI.style.top = Y + "px";
        elMMI.style.left = X + "px";
        elMMI.textContent = `${X},${Y}`;
      }
    },
    []
  );

  return (
    <>
      <div
        id="mouse-movement-detect"
        onMouseMoveCapture={mouseMovementDetect}
      />
      <div id="mouse-movement-info" />
    </>
  );
}

export default App;
