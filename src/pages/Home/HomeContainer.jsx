import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useFolders } from '../../hooks/useFolders'

import Button from '../../components/ui/Button'
import FolderIconContainer from './FolderIconContainer'
import HeroHomeText from './HeroHomeText'
import HomeSearch from './HomeSearch'
import SectionSubheader from '../../components/ui/SectionSubheader'

import EditIcon from '../../assets/svg/edit.svg?react'

function HomeContainer() {
    const navigate = useNavigate();
    const { getLatestFolders, createFolder } = useFolders();
    const [folders, setFolders] = useState([]);
    
    useEffect(() => {
        const fetchLatestFolders = async () => {
            try {
                const data = await getLatestFolders();
                setFolders(data || []);
            } catch (err) {
                console.error('Error fetching folders:', err);
            }
        };
        fetchLatestFolders();
    }, []);

    
    const handleCreateFolder = async () => {
        const newFolder = await createFolder({ name: 'New Folder' });
        await navigate(`/edit/${newFolder.id}`);
    }
    
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
                <HeroHomeText />
                <HomeSearch onFolderSearch={setFolders}/>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center">
                    <SectionSubheader text="Recently Viewed"/>
                    <Button onClick={handleCreateFolder} h="h-5" w="w-5" children={<EditIcon />} variant="tertiary_icon"/>
                </div>
                <FolderIconContainer folders={folders}/>
            </div>
        </div>
    );
}
export default HomeContainer;