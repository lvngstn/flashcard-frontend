import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useFolders } from '../../hooks/useFolders';
import { useRefreshKey } from '../../stores/store';
import SidebarUtils from '../Sidebar/SidebarUtils';
import SidebarAccount from '../Sidebar/SidebarAccount';
import SidebarFooter from '../Sidebar/SidebarFooter';
import SidebarFolderContainer from '../Sidebar/SidebarFolderContainer';
import Button from '../ui/Button';

import HomeIcon from '../../assets/svg/home-alt.svg?react';
import SearchIcon from '../../assets/svg/search.svg?react';
import SettingsIcon from '../../assets/svg/settings.svg?react';
import ChevronDownIcon from '../../assets/svg/chevron-down.svg?react';
import ChevronUpIcon from '../../assets/svg/chevron-up.svg?react';
import EditIcon from '../../assets/svg/edit.svg?react';

function Sidebar() {
    const navigate = useNavigate();
    const { createFolder } = useFolders();
    const [width, setWidth] = useState(256);
    const resizing = useRef(false);
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

    const handleMouseDown = () => {
        resizing.current = true;
      };
      
      const handleMouseUp = () => {
        resizing.current = false;
      };

    const handleMouseMove = (e) => {
        if (resizing.current) {
          const newWidth = Math.min(448, Math.max(256, e.clientX));
          setWidth(newWidth);
        }
      };

    return (
        <div className="flex flex-row">
            <div 
                className="sticky top-0 left-0 h-screen p-2 bg-neutral-900"
                style={{ width }}
            >
                <div className="flex flex-col gap-4 justify-between h-full">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <SidebarAccount username="Aiden L"/>
                            <div className="flex flex-col gap-1">
                                <SidebarUtils text="Home" icon={"home"} />
                                <SidebarUtils text="Search" icon={"search"} />
                                <SidebarUtils text="Settings" icon={"settings"} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row px-2 justify-between items-center">
                            <div className="text-neutral-400 font-semibold text-sm">Folders</div>
                                <div className="flex flex-row gap-2">
                                    <Button h="h-4" w="w-4" children={isClicked ? <ChevronDownIcon /> : <ChevronUpIcon />} variant="tertiary_icon" onClick={handleCollapseAll}/>
                                    <Button h="h-4" w="w-4" children={<EditIcon />} variant="tertiary_icon" onClick={handleCreateFolder}/>
                                </div>
                            </div>
                            <SidebarFolderContainer collapseAll={isClicked} />
                        </div>
                    </div>
                    <SidebarFooter />
                </div>
            </div>
            {/* <div 
                className="bg-neutral-500 h-full w-8 cursor-col-resize"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            /> */}
        </div>
    );
}

export default Sidebar;     