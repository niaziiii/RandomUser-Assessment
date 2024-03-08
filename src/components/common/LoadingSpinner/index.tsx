import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 h-screen bg-white w-full z-10 flex items-center justify-center">
      <div className="card flex justify-content-center">
        <ProgressSpinner
          pt={{
            spinner: { style: { animationDuration: "2s" } },
            circle: { style: { strokeWidth: 3 } },
          }}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
