import React from 'react'
import TrashIcon from '../../../assets/svg/trash.svg?react'
import Button from '../../../components/ui/Button'
import RichTextEditor from './Editor/RichTextEditor'

function EditFlashcardRow({ flashcard, onDelete, onEdit }) {
  return (
    <div className="flex flex-row bg-neutral-700 rounded-lg gap-2 p-4 text-neutral-100 justify-between items-center text-sm">
      <RichTextEditor isQuestion={true} id={flashcard.id}/>
      <RichTextEditor isQuestion={false} id={flashcard.id}/>
      <div className="flex flex-row gap-2 w-fit h-fit">
        <Button 
          h="h-6" 
          w="w-6" 
          children={<TrashIcon />} 
          variant="secondary_icon" 
          onClick={() => onDelete(flashcard.id)}
        />
      </div>
    </div>
  );
}
export default EditFlashcardRow;