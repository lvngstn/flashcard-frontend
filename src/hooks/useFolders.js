import { useState, useCallback } from 'react';
import folderService from '../services/folderService';

export const useFolders = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getFolders = useCallback(async () => {
        try {
            setLoading(true);
            const response = await folderService.getFolders();
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch folders');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const createFolder = useCallback(async (folder) => {
        try {
            setLoading(true);
            const response = await folderService.createFolder(folder);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create folder');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const updateFolder = useCallback(async (id, folder) => {
        try {
            setLoading(true);
            const response = await folderService.updateFolder(id, folder);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update folder');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const deleteFolder = useCallback(async (id) => {
        try {
            setLoading(true);
            const response = await folderService.deleteFolder(id);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to delete folder');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getFolderById = useCallback(async (id) => {
        try {
            setLoading(true);
            const response = await folderService.getFolderbyId(id);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch folder');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const linkSubfolder = useCallback(async (parentId, childId) => {
        try {
            setLoading(true);
            const response = await folderService.linkSubfolder(parentId, childId);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to add subfolder');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const addSubfolder = useCallback(async (parentId, name) => {
        try {
            setLoading(true);
            const response = await folderService.addSubfolder(parentId, name);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to add subfolder');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getSubfolders = useCallback(async (folderId) => {
        try {
            setLoading(true);
            const response = await folderService.getSubfolders(folderId);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch subfolders');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getParentFolders = useCallback(async () => {
        try {
            setLoading(true);
            const response = await folderService.getParentFolders();
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch parent folders');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getParentFolderId = useCallback(async (folderId) => {
        try {
            setLoading(true);
            const response = await folderService.getParentFolderId(folderId);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch parent folder ID');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getLatestFolders = useCallback(async () => {
        try {
            setLoading(true);
            const response = await folderService.getLatestFolders();
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch latest folders');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const searchFolders = useCallback(async (query) => {
        try {
            setLoading(true);
            const response = await folderService.searchFolders(query);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to search folders');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        error,
        getFolders,
        createFolder,
        updateFolder,
        deleteFolder,
        getFolderById,
        linkSubfolder,
        addSubfolder,
        getSubfolders,
        getParentFolders,
        getParentFolderId,
        getLatestFolders,
        searchFolders
    };
};

export default useFolders;