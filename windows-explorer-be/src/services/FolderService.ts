import { FolderRepository } from "../repository/FolderRepository";

export const FolderService = {
    getFolder: async() => {
        return await FolderRepository.getFolder();
    },
    getSubFolder: async(id: string) => {
        return await FolderRepository.getSubFolder(id);
    },
    getFiles: async(id: string) => {
        return await FolderRepository.getFiles(id);
    }
}