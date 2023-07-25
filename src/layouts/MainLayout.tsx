import { ReactNode } from "react";
import React from "react";

interface MainLayoutProps {
    children: ReactNode;
}
const MainLayout = ({children}:MainLayoutProps) => {
    return (
        <main>
            {children}
        </main>
    )
       
}
export default MainLayout;