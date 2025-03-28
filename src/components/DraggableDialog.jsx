import React, { useState } from "react";
import "../styles/DraggableDialog.css";

const DraggableDialog = () => {
  const [position, setPosition] = useState({ x: 1100, y: 320 });
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    setDragging(true);
    setRel({
      x: e.pageX - position.x,
      y: e.pageY - position.y,
    });
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!dragging) return;

    // Get the boundaries of the window
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Get the dimensions of the dialog box
    const dialogWidth = e.target.offsetWidth;
    const dialogHeight = e.target.offsetHeight;

    // Calculate the new position, ensuring it stays within the boundaries
    let newX = e.pageX - rel.x;
    let newY = e.pageY - rel.y;

    // Constrain the box within the boundaries of the screen
    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX + dialogWidth > windowWidth) newX = windowWidth - dialogWidth;
    if (newY + dialogHeight > windowHeight) newY = windowHeight - dialogHeight;

    setPosition({
      x: newX,
      y: newY,
    });

    e.preventDefault();
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className={`draggable-dialog ${dragging ? "dragging" : ""}`}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="dialog-header">
        <h3 className="marquee">My Personal Philosophy</h3>
      </div>
      <div className="dialog-content">
        <p>Follow the CRUD of life:</p>
        <p>&gt; Create memories</p>
        <p>&gt; Read situations</p>
        <p>&gt; Update yourself</p>
        <p>&gt; Delete negativity</p>
      </div>
    </div>
  );
};

export default DraggableDialog;
