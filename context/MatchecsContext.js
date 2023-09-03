import React, { useState, createContext } from 'react';

// Создаем контекст
const MatchesContext = createContext();

// Создаем Matches Provider
const MatchesProvider = ({ matchesData, children }) => {
  console.log(matchesData);
  return <MatchesContext.Provider value={{ matchesData }}>{children}</MatchesContext.Provider>;
};

export { MatchesProvider, MatchesContext };
