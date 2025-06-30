import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFolders } from '../../hooks/useFolders';
import { useRefreshKey } from '../../stores/store';

import Button from '../../components/ui/Button'
import PageLink from '../../components/ui/PageLink'
import ViewSearch from './ViewSearch'

import ChevronDownIcon from '../../assets/svg/chevron-down.svg?react'
import CopyIcon from '../../assets/svg/copy.svg?react'
import EditIcon from '../../assets/svg/edit.svg?react'
import MoreIcon from '../../assets/svg/more.svg?react'
import TrashIcon from '../../assets/svg/trash.svg?react'

function FolderViewUtils({folderId}) {
    const { deleteFolder } = useFolders();
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const setRefreshKey = useRefreshKey((state) => state.setRefreshKey);
    
    const handleDeleteFolder = async () => {
        await deleteFolder(folderId);
        setRefreshKey();
        navigate('/');
    }

    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }
    
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 justify-between items-center">
                <div className="flex flex-row gap-2">
                    <div className="relative">
                        <div className="flex flex-row gap-2">
                            <PageLink 
                                to={`/study/${folderId}/false`} 
                                variant="primary" 
                                children={"Study"}
                            />
                            <Button 
                                h="h-6" 
                                w="w-6" 
                                children={<ChevronDownIcon />} 
                                variant="tertiary_icon" 
                                onClick={handleDropdown}
                            />
                        </div>
                        {dropdownOpen && (
                            <div className="absolute left-0 top-full mt-1 w-full">
                                <PageLink 
                                    to={`/study/${folderId}/true`} 
                                    children={"Study All"} 
                                    variant="primary" 
                                />
                            </div>
                        )}
                    </div>
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