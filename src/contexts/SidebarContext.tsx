import { FC, createContext, useState } from 'react';

type SidebarContext = {
  sidebarToggle: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};
export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
);

export const SidebarProvider: FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);
  const toggleSidebar = () => setSidebarToggle((prev) => !prev);
  const closeSidebar = () => setSidebarToggle(false);
  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
