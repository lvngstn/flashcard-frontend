import React, { useEffect, useState } from 'react'
import EditIcon from '../../../assets/svg/edit.svg?react'
import TrashIcon from '../../../assets/svg/trash.svg?react'
import PageLink from '../../../components/ui/PageLink'
import Button from '../../../components/ui/Button'
import { useFlashcards } from '../../../hooks/useFlashcards'

function FolderRow({ folder, onDelete }) {
    const { getFlashcards } = useFlashcards();
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        const fetchFlashcards = async () => {
            try {
                const data = await getFlashcards(folder.id);
                setFlashcards(data || []);
            } catch (err) {
                console.error('Error fetching flashcards:', err);
            }
        };
        fetchFlashcards();
    }, [folder.id]);

    return (
        <div className="flex flex-row hover:bg-neutral-900 border-t-neutral-800 border-t-2 gap-2 pt-1 pb-3 text-neutral-100 items-center justify-between">
            <div className="flex flex-row gap-2 w-full">
                <input defaultChecked type="checkbox" className="checked:bg-primary-700 checked:border-primary-700 checked:fill-primary-700 checked:stroke-primary-700 rounded focus:ring-0 focus:ring-offset-0" />
                <PageLink 
                    className="w-fit" 
                    to={`/view/${folder.id}/folders`} 
                    h="h-5" w="w-5" 
                    children={<div className="font-semibold text-lg text-neutral-50 tracking-[0] leading-[25.2px] whitespace-nowrap font-['Inter-Regular',Helvetica]">{folder.name}</div>} 
                    variant="tertiary_icon" 
                />

                <div className="flex flex-row gap-2 font-normal text-sm text-neutral-400 tracking-[0] leading-[25.2px] whitespace-nowrap font-['Inter-Regular',Helvetica]">{flashcards.length === 1 ? '1 item' : `${flashcards.length} items`}</div>
            </div>
            <div className="flex flex-row gap-2">
                <PageLink to={`/edit/${folder.id}`} h="h-5" w="w-5" children={<EditIcon />} variant="tertiary_icon" />
                <Button onClick={() => onDelete(folder.id)} h="h-5" w="w-5" children={<TrashIcon />} variant="tertiary_icon" />
            </div>
        </div>
    );
}
export default FolderRow;