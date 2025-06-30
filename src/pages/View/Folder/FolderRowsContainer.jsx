import React, { useEffect, useState } from 'react'
import { useFolders } from '../../../hooks/useFolders'
import { useParams } from 'react-router-dom'
import FolderRow from './FolderRow'
import Button from '../../../components/ui/Button'
import { useRefreshKey } from '../../../stores/store';

function FolderRowsContainer() {
    const { getSubfolders, addSubfolder, deleteFolder } = useFolders();
    const [subfolders, setSubfolders] = useState([]);
    const { folderId } = useParams();
    const setRefreshKey = useRefreshKey((state) => state.setRefreshKey);

    const fetchSubfolders = async () => {
        try {
            const data = await getSubfolders(folderId);
            setSubfolders(data || []);
        } catch (err) {
            console.error('Error fetching folders:', err);
        }
    };

    useEffect(() => {
        fetchSubfolders();
    }, [folderId]);

    const handleAddSubfolder = async (name) => {
        try {
            await addSubfolder(folderId, name);
            fetchSubfolders();
        } catch (err) {
            console.error('Error adding subfolder:', err);
        }
    };

    const handleDeleteFolder = async (folderId) => {
        try {
            await deleteFolder(folderId);
            setRefreshKey();
            fetchSubfolders();
        } catch (err) {
            console.error('Error deleting folder:', err);
        }
    };
        
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col text-neutral-100">
                {subfolders.map((folder) => (
                    <FolderRow key={folder.id} folder={folder} onDelete={handleDeleteFolder} />
                ))}
            </div>
            <div className="flex flex-row justify-center">
                <Button onClick={() => handleAddSubfolder("New Folder")} children={"Add or Remove Subfolders"} variant="primary" />
            </div>
        </div>
    );
}
export default FolderRowsContainer;