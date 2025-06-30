import { Link } from 'react-router-dom';

import SidebarUtils from '../Sidebar/SidebarUtils';
import SidebarAccount from '../Sidebar/SidebarAccount';
import SidebarFooter from '../Sidebar/SidebarFooter';
import SidebarFolderContainer from '../Sidebar/SidebarFolderContainer';
import Button from '../ui/Button';

import HomeIcon from '../../assets/svg/home-alt.svg?react';
import SearchIcon from '../../assets/svg/search.svg?react';
import SettingsIcon from '../../assets/svg/settings.svg?react';
import ChevronDownIcon from '../../assets/svg/chevron-down.svg?react';
import ChevronRightIcon from '../../assets/svg/chevron-right.svg?react';
import EditIcon from '../../assets/svg/edit.svg?react';
import { useFolders } from '../../hooks/useFolders';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRefreshKey } from '../../stores/store';

function Sidebar() {
    const navigate = useNavigate();
    const { createFolder } = useFolders();
    const [isClicked, setIsClicked] = useState(false);
    const setRefreshKey = useRefreshKey((state) => state.setRefreshKey);
    

    const handleCreateFolder = async () => {
        const newFolder = await createFolder({ name: 'New Folder' });
        navigate(`/edit/${newFolder.id}`);
        setRefreshKey();
    }

    const handleCollapseAll = () => {
        setIsClicked(!isClicked);
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
                            <div className="flex flex-row gap-2">
                                <Button h="h-4" w="w-4" children={isClicked ? <ChevronDownIcon /> : <ChevronRightIcon />} variant="tertiary_icon" onClick={handleCollapseAll}/>
                                <div className="text-neutral-400 font-semibold text-sm">Folders</div>
                            </div>
                            <Button h="h-4" w="w-4" children={<EditIcon />} variant="tertiary_icon" onClick={handleCreateFolder}/>
                        </div>
                        <SidebarFolderContainer collapseAll={isClicked} />
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