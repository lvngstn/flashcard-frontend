import { useEffect, useState, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'

import { useFlashcards } from '../../../hooks/useFlashcards'
import { useRefreshKey } from '../../../stores/store';

import AddFlashcardButton from './AddFlashcardButton'
import Button from '../../../components/ui/Button'
import EditFlashcardRow from './EditFlashcardRow'

import flashcardModel from '../../../models/flashcardModel.json'

function EditFlashcardRowsContainer() {
    const { folderId } = useParams();
    const { getFlashcards, createFlashcard, deleteFlashcard, updateFlashcard } = useFlashcards();
    const [flashcards, setFlashcards] = useState([]);
    const setRefreshKey = useRefreshKey((state) => state.setRefreshKey);

    const fetchFlashcards = useCallback(async () => {
        try {
            const data = await getFlashcards(folderId, false);
            setFlashcards(data || []);
        } catch (err) {
            console.error('Error fetching flashcards:', err);
        }
    }, [folderId, getFlashcards]);

    useEffect(() => {
        fetchFlashcards();
    }, [fetchFlashcards]);

    const handleAddFlashcard = async () => {
        try {
            const newFlashcard = {
                ...flashcardModel.flashcard,
                folder_id: folderId
            };
            
            await createFlashcard(newFlashcard);
            await fetchFlashcards();
        } catch (error) {
            console.error('Failed to add flashcard:', error);
        }
    };
    
    const handleDeleteFlashcard = async (id) => {
        try {
            await deleteFlashcard(id);
            await fetchFlashcards();
        } catch (error) {
            console.error('Failed to delete flashcard:', error);
        }
    };
    
    const handleEditFlashcard = async (id, flashcard) => {
        try {
            await updateFlashcard(id, flashcard.question, flashcard.answer);
            await fetchFlashcards();
        } catch (error) {
            console.error('Failed to edit flashcard:', error);
        }
    };
    
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col text-neutral-100 gap-2">
                {flashcards.map((flashcard) => (
                    <EditFlashcardRow onDelete={handleDeleteFlashcard} onEdit={handleEditFlashcard} key={flashcard.id} flashcard={flashcard} />
                ))}
                <div className="flex flex-row justify-center">
                    <AddFlashcardButton onAdd={handleAddFlashcard} />
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <Link to={`/view/${folderId}/cards`}><Button onClick={() => setRefreshKey()} children={"Done"} variant="primary" /></Link>
            </div>
        </div>
    );
}

export default EditFlashcardRowsContainer;