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
      className="grid-container gap-x-2 p-3 py-4 mt-4  bg-blue-100"
    >
      {children}
    </div>
  );
};

export default Gridcontainer;
