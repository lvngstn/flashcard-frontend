import Content from './Content';
import Sidebar from './Sidebar';

function Layout({ children }) {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <Content>{children}</Content>
        </div>
    );
}

export default Layout;