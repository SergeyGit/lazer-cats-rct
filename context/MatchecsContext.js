import React, { createContext } from 'react';

const MatchesContext = createContext();

const MatchesProvider = ({ matchesData, children }) => {
  return <MatchesContext.Provider value={{ matchesData }}>{children}</MatchesContext.Provider>;
};

export { MatchesProvider, MatchesContext };
