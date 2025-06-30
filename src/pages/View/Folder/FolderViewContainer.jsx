import React, { useEffect, useState } from 'react'
import SectionHeader from '../../../components/ui/SectionHeader'
import FolderViewUtils from '../FolderViewUtils'
import FolderRowsContainer from './FolderRowsContainer'
import { useParams, useNavigate } from 'react-router-dom'
import { useFolders } from '../../../hooks/useFolders'
import ChevronUpIcon from '../../../assets/svg/chevron-up.svg?react'
import Button from '../../../components/ui/Button'

function FolderViewContainer() {
    const { folderId } = useParams();
    const { getFolderById, getParentFolderId } = useFolders();
    const [folder, setFolder] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFolder = async () => {
            try {
                const data = await getFolderById(folderId);
                setFolder(data);
            } catch (err) {
                console.error('Error fetching folder:', err);
            }
        };

        fetchFolder();
    }, [folderId]);

    const navigateParentFolder = async () => {
        try {
            const data = await getParentFolderId(folderId);
            if (data === -1) {
                navigate('/');
            } else {
                navigate(`/view/${data}/folders`);
            }
        } catch (err) {
            console.error('Error fetching parent folder:', err);
        }
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                    <Button h="h-10" w="w-10" children={<ChevronUpIcon />} variant="tertiary_icon" onClick={navigateParentFolder} />
                    <SectionHeader title={folder?.name}/>
                </div>
                <FolderViewUtils folderId={folderId} />
            </div>
            <div className="flex flex-col gap-2">
                <FolderRowsContainer />
            </div>
        </div>
    );
}
export default FolderViewContainer;