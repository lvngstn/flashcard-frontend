import axios from "axios";

const API_URL = "http://localhost:5000/api/folders";

const createFolder = (folder) => {
    return axios.post(API_URL, folder);
}

const updateFolder = (id, folder) => {
    console.log("test");
    return axios.put(`${API_URL}/${id}`, folder);
}

const getFolders = () => {
    return axios.get(API_URL);
}

const deleteFolder = (id) => {
    return axios.delete(`${API_URL}/${id}`);
}

const getFolderbyId = (id) => {
    return axios.get(`${API_URL}/${id}`);
}

const linkSubfolder = (parentId, childId) => {
    return axios.post(`${API_URL}/${parentId}/subfolders`, { childId });
}

const addSubfolder = (parentId, name) => {
    return axios.post(`${API_URL}/${parentId}/subfolders`, { name });
}

const getSubfolders = (folderId) => {
    return axios.get(`${API_URL}/${folderId}/subfolders`);
}

const getParentFolders = () => {
    return axios.get(`${API_URL}/parent-folders`);
}

const getParentFolderId = (folderId) => {
    return axios.get(`${API_URL}/${folderId}/parent`);
}

const getLatestFolders = () => {
    return axios.get(`${API_URL}/latest`);
}

const searchFolders = (query) => {
    return axios.get(`${API_URL}/search/${query}`);
}

export default {
    getFolders,
    createFolder,
    updateFolder,
    deleteFolder,
    getFolderbyId,
    linkSubfolder,
    addSubfolder,
    getSubfolders,
    getParentFolders,
    getParentFolderId,
    getLatestFolders,
    searchFolders   
}
