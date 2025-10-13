import { createContext, useContext, useState } from "react";

const DonateContext = createContext();

export function DonateProvider({ children }) {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <DonateContext.Provider value={{ isDonateOpen, setIsDonateOpen }}>
      {children}
    </DonateContext.Provider>
  );
}

// Custom hook for convenience
export function useDonate() {
  return useContext(DonateContext);
}
