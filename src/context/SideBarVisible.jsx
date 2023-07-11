import React, { createContext, useState } from 'react';

const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <SideBarContext.Provider value={{ visible, setVisible }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarContext, SideBarProvider };
