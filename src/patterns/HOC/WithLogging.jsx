import React, { useEffect } from "react";
export const WithLogging = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log("Component mounted", props);
    }, []);
    return <WrappedComponent {...props} />;
  };
};
