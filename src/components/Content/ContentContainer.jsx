import React from 'react'
import HomeContainer from '../../pages/Home/HomeContainer'
import FolderViewContainer from '../../pages/View/Flashcards/FlashcardViewContainer'

function ContentContainer({ children }) {
    return (
        <div className="flex flex-col gap-4 bg-neutral-950 h-screen w-full px-48">
            {children}
        </div>
    );
}

export default ContentContainer;