import { useState, useCallback } from 'react';
import flashcardService from '../services/flashcardService';

export const useFlashcards = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createFlashcard = useCallback(async (flashcard) => {
        try {
            setLoading(true);
            const response = await flashcardService.createFlashcard(flashcard);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create flashcard');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const updateFlashcard = useCallback(async (id, question, answer) => {
        try {
            setLoading(true);
            const response = await flashcardService.updateFlashcard(id, question, answer);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update flashcard');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getFlashcards = useCallback(async (folderId, all) => {
        try {
            setLoading(true);
            const response = await flashcardService.getFlashcards(folderId, all);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch flashcards');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getFlashcardById = useCallback(async (id) => {
        try {
            setLoading(true);
            const response = await flashcardService.getFlashcardById(id);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch flashcard');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const deleteFlashcard = useCallback(async (id) => {
        try {
            setLoading(true);
            const response = await flashcardService.deleteFlashcard(id);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to delete flashcard');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const searchFlashcards = useCallback(async (folderId, searchQuery) => {
        try {
            setLoading(true);
            const response = await flashcardService.searchFlashcards(folderId, searchQuery);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to search flashcards');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getFlashcardQuestion = useCallback(async (id) => {
        try {
            setLoading(true);
            const response = await flashcardService.getFlashcardQuestion(id);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch flashcard question');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getFlashcardAnswer = useCallback(async (id) => {
        try {
            setLoading(true);
            const response = await flashcardService.getFlashcardAnswer(id);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch flashcard answer');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const updateFlashcardQuestion = useCallback(async (id, question) => {
        try {
            setLoading(true);
            const response = await flashcardService.updateFlashcardQuestion(id, question);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update flashcard question');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const updateFlashcardAnswer = useCallback(async (id, answer) => {
        try {
            setLoading(true);
            const response = await flashcardService.updateFlashcardAnswer(id, answer);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update flashcard answer');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const setChecked = useCallback(async (id, checked) => {
        try {
            setLoading(true);
            const response = await flashcardService.setChecked(id, checked);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to set flashcard checked');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        error,
        createFlashcard,
        updateFlashcard,
        getFlashcards,
        getFlashcardById,
        deleteFlashcard,
        searchFlashcards,
        getFlashcardQuestion,
        getFlashcardAnswer,
        updateFlashcardQuestion,
        updateFlashcardAnswer,
        setChecked
    };
};

export default useFlashcards;
