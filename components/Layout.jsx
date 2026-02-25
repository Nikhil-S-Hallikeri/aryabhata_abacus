import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyContactButtons from './StickyContactButtons';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <StickyContactButtons />
        </div>
    );
};

export default Layout;
