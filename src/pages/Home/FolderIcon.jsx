import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useFlashcards } from '../../hooks/useFlashcards';

function FolderIcon({ folder, folderCount = 0 }) {
    const { getFlashcards } = useFlashcards();
    const [flashcards, setFlashcards] = useState([]);
    const formattedDate = folder.created_at 
        ? formatDistanceToNow(new Date(folder.created_at), { addSuffix: true })
        : 'Recently';

    const fetchFlashcards = async () => {
        try {
            const data = await getFlashcards(folder.id, false);
            setFlashcards(data || []);
        } catch (err) {
            console.error('Error fetching flashcards:', err);
        }
    };

    useEffect(() => {
        fetchFlashcards();
    }, [folder]);

    return (
        <div className="w-48 h-fit bg-neutral-800 rounded-lg py-4 pl-4 pr-12 border-b-primary-200 border-b-4 hover:bg-neutral-850 transition-colors cursor-pointer">
            <div className="text-neutral-50 font-semibold text-lg truncate max-w-[180px]">
                {folder.name}
            </div>
            <div className="text-neutral-50 font-normal text-sm">
                {formattedDate}
            </div>
            <div className="flex flex-row gap-2 mt-1">
                <div className="text-neutral-400 font-normal text-sm">
                    {flashcards.length === 1 ? '1 Item' : `${flashcards.length} Items`}
                </div>
                {folderCount > 0 && (
                    <div className="text-neutral-400 font-normal text-sm">
                        {folderCount} {folderCount === 1 ? 'Folder' : 'Folders'}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FolderIcon;