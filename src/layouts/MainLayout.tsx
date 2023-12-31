import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return <main className="mt-2.5 h-[92%]">{children}</main>;
};
export default MainLayout;
