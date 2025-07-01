import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
     <p> Conatct layout</p>
      {children}
    </div>
  );
};

export default layout;
