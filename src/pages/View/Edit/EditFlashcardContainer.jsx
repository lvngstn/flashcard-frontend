import React, { useEffect, useState, useCallback } from 'react'
import SectionHeader from '../../../components/ui/SectionHeader'
import EditFlashcardRowsContainer from './EditFlashcardRowsContainer'
import { useParams } from 'react-router-dom'
import { useFolders } from '../../../hooks/useFolders'
import CopyIcon from '../../../assets/svg/copy.svg?react'
import MoreIcon from '../../../assets/svg/more.svg?react'
import TrashIcon from '../../../assets/svg/trash.svg?react'
import FolderViewSearch from '../ViewSearch'
import PageLink from '../../../components/ui/PageLink'

function EditFlashcardContainer() {
    const { folderId } = useParams();
    const { getFolderById, updateFolder } = useFolders();
    const [folder, setFolder] = useState(null);

    const fetchFolder = useCallback(async () => {
        try {
            const data = await getFolderById(folderId);
            setFolder(data);
        } catch (err) {
            console.error('Error fetching folder:', err);
        }
    }, [folderId]);

    useEffect(() => {
        fetchFolder();
    }, [fetchFolder]);

    const handleUpdateFolder = async (id, folder) => {
        await updateFolder(id, folder);
        await fetchFolder();
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <input className="text-neutral-50 font-normal text-5xl text-left pt-6 bg-transparent outline-none" type="text" defaultValue={folder?.name} onChange={(e) => handleUpdateFolder(folderId, { ...folder, name: e.target.value })}/>
                <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 justify-end items-center">
                <div className="flex flex-row gap-4">
                    <PageLink h="h-6" w="w-6" children={<CopyIcon />} variant="tertiary_icon" />
                    <PageLink h="h-6" w="w-6" children={<MoreIcon />} variant="tertiary_icon" />
                    <PageLink h="h-6" w="w-6" children={<TrashIcon />} variant="tertiary_icon" />
                </div>
                
            </div>
            <div className="flex flex-row gap-2 justify-between items-center">
                <div className="flex flex-row gap-2">
                    <PageLink to={`/view/${folderId}/cards`} children={"Done"} variant="primary" />
                </div>
                <FolderViewSearch />
            </div>
        </div>
            </div>
            <div className="flex flex-col gap-2">
                <EditFlashcardRowsContainer />
            </div>
        </div>
    );
}
export default EditFlashcardContainer;