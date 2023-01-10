import React, { createContext } from "react";

type ContextType = {
  name: string;
  age: number;
};

type ChildrenProvider = {
  children: React.ReactNode;
};

const initialState = {
  name: "Edward",
  age: 24,
};

export const Context = createContext<ContextType>(initialState);

export const ContextProvider = ({ children }: ChildrenProvider) => {
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
