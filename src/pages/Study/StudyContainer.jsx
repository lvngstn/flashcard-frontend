import { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useFlashcards } from '../../hooks/useFlashcards'

import StudyCard from './StudyCard'
import StudyUtils from './StudyUtils'

function StudyContainer() {
    const { folderId, all } = useParams();
    const { getFlashcards } = useFlashcards();
    const [folder, setFolder] = useState([]);
    const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [editable, setEditable] = useState(false);
    const navigate = useNavigate();

    const fetchFlashcards = useCallback(async () => {
        try {
            const data = await getFlashcards(folderId, all);
            setFolder(data || []);
        } catch (err) {
            console.error('Error fetching flashcards:', err);
        }
    }, [folderId, getFlashcards]);

    useEffect(() => {
        fetchFlashcards();
    }, [fetchFlashcards]);


    const handleNextFlashcard = () => {
        if (currentFlashcardIndex < folder?.length - 1) {
            setCurrentFlashcardIndex(currentFlashcardIndex + 1);
            setIsFlipped(false);
        } else {
            navigate(`/view/${folderId}/cards`);
        }
    }

    const handleBackFlashcard = () => {
        if (currentFlashcardIndex > 0) {
            setCurrentFlashcardIndex(currentFlashcardIndex - 1);
            setIsFlipped(false);
        }
    }

    const handleShuffle = () => {
        const shuffledFolder = [...folder].sort(() => Math.random() - 0.5);
        setFolder(shuffledFolder);
        setIsFlipped(false);
    }

    const handleEdit = () => {
        setEditable(!editable);
    }

    const handleFlip = () => {
        if (!editable) setIsFlipped(!isFlipped);
    }
    
    return (
        <div className="flex flex-col pt-16 gap-2 h-full w-full">
            <div onClick={() => handleFlip()} className="flex text-white flex-row justify-center gap-2 h-full w-full">
                { folder.length > 0 && <StudyCard id={folder[currentFlashcardIndex].id} isFlipped={isFlipped} editing={editable}/>}
            </div>

            <div className="flex flex-row h-full">
                <StudyUtils 
                    length={folder?.length}
                    index={currentFlashcardIndex}
                    onNext={handleNextFlashcard} 
                    onBack={handleBackFlashcard} 
                    folderId={folderId}
                    onShuffle={handleShuffle}
                    onEdit={handleEdit}
                />
            </div>
        </div>
    );
}
export default StudyContainer;