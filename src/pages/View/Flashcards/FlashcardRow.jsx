import React from 'react'
import EditIcon from '../../../assets/svg/edit.svg?react'
import TrashIcon from '../../../assets/svg/trash.svg?react'
import Button from '../../../components/ui/Button'
import RichTextEditor from '../../View/Edit/Editor/RichTextEditor'
    
function FlashcardRow({flashcard}) {
    return (
        <div className="flex flex-row hover:bg-neutral-900 border-t-neutral-800 border-t-2 gap-2 pt-1 pb-3 text-neutral-100 justify-between items-top text-sm">
            <div className="flex flex-row w-full">
                <div className="flex flex-row gap-2 w-full items-top h-fit">
                    <input defaultChecked type="checkbox" className="checked:bg-primary-700 h-fit checked:border-primary-700 checked:fill-primary-700 checked:stroke-primary-700 rounded focus:ring-0 focus:ring-offset-0" />
                    <div className="text-wrap align-top">
                        <RichTextEditor isQuestion={true} id={flashcard.id}/>
                    </div>
                </div>
                <div className="flex flex-row gap-2 w-full text-wrap">
                    <RichTextEditor isQuestion={false} id={flashcard.id}/>
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <Button h="h-5" w="w-5" children={<EditIcon />} variant="tertiary_icon" />
                <Button h="h-5" w="w-5" children={<TrashIcon />} variant="tertiary_icon" />
            </div>
        </div>
    );
}
export default FlashcardRow;

