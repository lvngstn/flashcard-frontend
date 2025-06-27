import React from 'react'

function AddFlashcardButton({ onAdd }) {
    return (
        <button 
            onClick={onAdd} 
            className="flex flex-row bg-neutral-700 border-b border-neutral-500 hover:bg-neutral-750 transition-colors rounded-lg gap-2 py-6 text-neutral-100 items-center justify-center text-sm w-full"
        >
            <div className="border-b-2 border-b-neutral-900">Add Flashcard</div>
        </button>
    );
}
export default AddFlashcardButton;