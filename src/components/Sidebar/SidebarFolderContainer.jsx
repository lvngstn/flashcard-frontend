import { useEffect, useState } from 'react'
import { useFolders } from '../../hooks/useFolders';
import { useRefreshKey } from '../../stores/store';
import SidebarFolder from './SidebarFolder';

function SidebarFolderContainer({ collapseAll }) {
    const { getParentFolders } = useFolders();
    const [folders, setFolders] = useState([]);
    const refreshKey = useRefreshKey((state) => state.refreshKey);
    
    useEffect(() => {
        const fetchParentFolders = async () => {
            try {
                const data = await getParentFolders();
                setFolders(data || []);
            } catch (err) {
                console.error('Error fetching folders:', err);
            }
        };

        fetchParentFolders();
    }, [getParentFolders, refreshKey]);
    
    return (
        <div className="flex flex-col overflow-y-auto overflow-x-hidden max-h-[calc(100vh-200px)]">
            {folders.map((folder) => (
                <SidebarFolder key={folder.id} folder={folder} collapse={collapseAll} />
            ))}
        </div>
    );
}
export default SidebarFolderContainer;