import React from 'react';
import { SidebarUtils } from '../Sidebar/SidebarUtils';
import HomeIcon from '../../assets/svg/home-alt.svg?react';
import SearchIcon from '../../assets/svg/search.svg?react';
import SettingsIcon from '../../assets/svg/settings.svg?react';
import SidebarAccount from '../Sidebar/SidebarAccount';
import SidebarFooter from '../Sidebar/SidebarFooter';
import { Link } from 'react-router-dom';
import SidebarFolderContainer from '../Sidebar/SidebarFolderContainer';
import Button from '../ui/Button';
import EditIcon from '../../assets/svg/edit.svg?react';
import { useFolders } from '../../hooks/useFolders';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    const { getFolders, createFolder } = useFolders();
    const [folders, setFolders] = useState([]);

    const fetchFolders = useCallback(async () => {
        try {
            const data = await getFolders();
            setFolders(data || []);
        } catch (err) {
            console.error('Error fetching folders:', err);
        }
    }, [getFolders]);
    
    useEffect(() => {
        fetchFolders();
    }, [fetchFolders, createFolder]);

    
    const handleCreateFolder = async () => {
        await createFolder({ name: 'New Folder' });
        await fetchFolders();
        navigate(`/edit/${folders[0].id}`);
    }

    return (
        <div className="fixed top-0 left-0 h-screen w-64 p-2 bg-neutral-900">
            <div className="flex flex-col gap-4 justify-between h-full">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <SidebarAccount />
                        <div className="flex flex-col gap-1">
                            <Link to="/"><SidebarUtils text="Home" icon={HomeIcon} /></Link>
                            <SidebarUtils text="Search" icon={SearchIcon} />
                            <SidebarUtils text="Settings" icon={SettingsIcon} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row px-2 justify-between items-center">
                            <div className="text-neutral-400 font-semibold text-sm">Folders</div>
                            <Button h="h-4" w="w-4" children={<EditIcon />} variant="tertiary_icon" onClick={handleCreateFolder}/>
                        </div>
                        {/* Div below should re-render every time a top-level folder is created */}
                        <div className="flex flex-col">
                            <SidebarFolderContainer />
                        </div>
                    </div>
                </div>
                <div>
                    <SidebarFooter />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;     