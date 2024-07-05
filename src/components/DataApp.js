import React, { createContext, useState } from "react";

export const DataAppContext = createContext();

const DataApp = ({ children }) => {
  const [appState, setAppState] = useState({
    username: "", // Initial empty username
    loginStatus: false, // Initial login status
  });

  return (
    <DataAppContext.Provider value={{ appState, setAppState }}>
      {children}
    </DataAppContext.Provider>
  );
};

export default DataApp;
