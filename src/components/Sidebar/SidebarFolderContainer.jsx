import React, { useEffect, useState } from 'react'
import { useFolders } from '../../hooks/useFolders';
import SidebarFolder from './SidebarFolder';

function SidebarFolderContainer() {
    const { getParentFolders } = useFolders();
    const [folders, setFolders] = useState([]);
    
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
    }, [getParentFolders]);
    
    return (
        <div>
            {folders.map((folder) => (
                <SidebarFolder key={folder.id} folder={folder} />
            ))}
        </div>
    );
}
export default SidebarFolderContainer;