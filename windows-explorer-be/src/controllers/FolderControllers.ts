import prisma from "../../prisma/client";
import { FolderService } from "../services/FolderService";

export const FolderController = {
    // Mengambil data folder
    getFolder: async() => {
        try {
            const folders = await FolderService.getFolder();

            return {
                success: true,
                message: 'List parent folders',
                data: folders
            };
        } catch (e: unknown) {
            console.error(`Error getting folders: ${e}`);
        }
    },
    // Mengambil data sub folder & files
    getSubFolder: async(id: string) => {
        try {
            const folders = await FolderService.getSubFolder(id);
            const files = await FolderService.getFiles(id);
            
            return {
                success: true,
                message: 'List folders',
                data: {
                    folders: folders,
                    files: files
                }
            };
        } catch (e: unknown) {
            console.error(`Error getting folders: ${e}`);
        }
    }
}