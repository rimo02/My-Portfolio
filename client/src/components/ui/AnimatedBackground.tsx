import React, { ReactNode } from "react";

interface StarryBackgroundProps {
  children: ReactNode;
}

const StarryBackground: React.FC<StarryBackgroundProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default StarryBackground;
