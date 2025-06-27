import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

function Layout({ children }) {
    return (
        <div className="pl-64">
            <Sidebar />
            <Content>{children}</Content>
        </div>
    );
}

export default Layout;