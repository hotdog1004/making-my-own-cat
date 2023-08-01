import { ReactNode } from "react";
import React from "react";

interface MainLayoutProps {
    children: ReactNode;
}
const MainLayout = ({children}:MainLayoutProps) => {
    return (
        <main className="bg-white h-4/5">
            {children}
        </main>
    )
       
}
export default MainLayout;