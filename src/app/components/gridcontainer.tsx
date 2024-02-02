type gridcontainerprops = {
  children: React.ReactNode;
};
import React from "react";

const Gridcontainer = ({ children }: gridcontainerprops) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="grid-container gap-3 p-3  bg-blue-200"
    >
      {children}
    </div>
  );
};

export default Gridcontainer;
