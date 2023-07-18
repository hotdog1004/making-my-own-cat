import React from 'react';
import Footer from '../Footer/index'
import Header from '../Header/index'

const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;