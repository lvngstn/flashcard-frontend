import Content from './Content';
import Sidebar from './Sidebar';

function Layout({ children }) {
    return (
        <div className="pl-64">
            <Sidebar />
            <Content>{children}</Content>
        </div>
    );
}

export default Layout;