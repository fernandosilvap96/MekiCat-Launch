import React from "react";

const ProgressBar = (props) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%", paddingRight: 30 }}>{props.children}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
