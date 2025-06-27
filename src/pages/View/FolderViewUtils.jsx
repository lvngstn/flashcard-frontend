import React from 'react'
import Button from '../../components/ui/Button'
import EditIcon from '../../assets/svg/edit.svg?react'
import CopyIcon from '../../assets/svg/copy.svg?react'
import MoreIcon from '../../assets/svg/more.svg?react'
import TrashIcon from '../../assets/svg/trash.svg?react'
import ViewSearch from './ViewSearch'
import PageLink from '../../components/ui/PageLink'
import { useFolders } from '../../hooks/useFolders';
import { useNavigate } from 'react-router-dom';

function FolderViewUtils({folderId}) {
    const { deleteFolder } = useFolders();
    const navigate = useNavigate();
    
    const handleDeleteFolder = async () => {
        await deleteFolder(folderId);
        navigate('/');
    }
    
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 justify-between items-center">
                <div className="flex flex-row gap-2">
                    <PageLink to={`/study/${folderId}/false`} children={"Study"} variant="primary" />
                    <PageLink to={`/study/${folderId}/true`} children={"Study All"} variant="tertiary" />
                </div>

                <div className="flex flex-row gap-4">
                    <PageLink to={`/edit/${folderId}`} h="h-6" w="w-6" children={<EditIcon />} variant="tertiary_icon" />
                    <PageLink to={"#"} h="h-6" w="w-6" children={<CopyIcon />} variant="tertiary_icon" />
                    <PageLink to={"#"} h="h-6" w="w-6" children={<MoreIcon />} variant="tertiary_icon" />
                    <Button h="h-6" w="w-6" children={<TrashIcon />} variant="tertiary_icon" onClick={handleDeleteFolder}/>
                </div>
                
            </div>
            <div className="flex flex-row gap-2 justify-between items-center">
                <div className="flex flex-row gap-2">
                    <PageLink to={`/view/${folderId}/cards`} children={"Flashcards"} variant="secondary" />
                    <PageLink to={`/view/${folderId}/folders`} children={"Folders"} variant="tertiary" />
                </div>
                <ViewSearch folderId={folderId}/>
            </div>
        </div>
    );
}
export default FolderViewUtils;