import React, { useEffect, useState } from 'react'
import FlashcardRow from './FlashcardRow'
import { useFlashcards } from '../../../hooks/useFlashcards'
import { useParams } from 'react-router-dom'
import PageLink from '../../../components/ui/PageLink'

function FlashcardRowsContainer() {
    const { getFlashcards } = useFlashcards();
    const [flashcards, setFlashcards] = useState([]);
    const { folderId } = useParams();

    const fetchFlashcards = async () => {
        try {
            const data = await getFlashcards(folderId, false);
            setFlashcards(data || []);
        } catch (err) {
            console.error('Error fetching flashcards:', err);
        }
    };

    useEffect(() => {
        fetchFlashcards();
    }, [folderId]);
        
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col text-neutral-100">
                {flashcards.map((flashcard) => (
                    <FlashcardRow key={flashcard.id} flashcard={flashcard} />
                ))}
            </div>
``            <div className="flex flex-row justify-center">
                <PageLink to={`/edit/${folderId}`} children={"Add or Remove Flashcards"} variant="primary" />
            </div>
        </div>
    );
}
export default FlashcardRowsContainer;