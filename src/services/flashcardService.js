import axios from "axios";

const API_URL = "http://localhost:5000/api/flashcards";

const createFlashcard = (flashcard) => {
    return axios.post(API_URL, flashcard);
}

const updateFlashcard = (id, question, answer) => {
    return axios.put(`${API_URL}/${id}`, { question, answer });
}

const getFlashcards = (folderId, all) => {
    return axios.get(`${API_URL}/folder/${folderId}/${all}`);
}

const getFlashcardById = (id) => {
    return axios.get(`${API_URL}/${id}`);
}

const deleteFlashcard = (id) => {
    return axios.delete(`${API_URL}/${id}`);
}

const searchFlashcards = (folderId, searchQuery) => {
    return axios.get(`${API_URL}/search/${folderId}?query=${searchQuery}`);
}

const getFlashcardQuestion = (id) => {
    return axios.get(`${API_URL}/${id}/question`);
}

const getFlashcardAnswer = (id) => {
    return axios.get(`${API_URL}/${id}/answer`);
}

const updateFlashcardQuestion = (id, question) => {
    return axios.put(`${API_URL}/${id}/question`, { question });
}

const updateFlashcardAnswer = (id, answer) => {
    return axios.put(`${API_URL}/${id}/answer`, { answer });
}

export default {
    createFlashcard,
    updateFlashcard,
    deleteFlashcard,
    getFlashcardById,
    getFlashcards,
    searchFlashcards,
    getFlashcardQuestion,
    getFlashcardAnswer,
    updateFlashcardQuestion,
    updateFlashcardAnswer
}
