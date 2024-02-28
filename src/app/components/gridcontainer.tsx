type gridcontainerprops = {
  children: React.ReactNode;
};
import React from "react";

const Gridcontainer = ({ children }: gridcontainerprops) => {
  return (
    <div className=" sm:columns-1 md:columns-3 lg:columns-4 container gap-x-2  p-3 py-4 mt-4  bg">
      {children}
    </div>
  );
};

export default Gridcontainer;
