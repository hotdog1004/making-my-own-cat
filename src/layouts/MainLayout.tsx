import { ReactNode } from 'react';
import React from 'react';

interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return <main className="bg-white my-12">{children}</main>;
};
export default MainLayout;
