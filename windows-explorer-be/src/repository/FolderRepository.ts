import prisma from "../../prisma/client";

export const FolderRepository =  {
    getFolder: async() => {
        try {
            const folders = await prisma.folder.findMany({
                where: {parent_id: null}, 
                orderBy: {name: 'asc'},
                include: {children: true}
            });

            return folders;
        } catch (e: unknown) {
            throw new Error(`Error fetching folders: ${e}`);
        }
    },
    getSubFolder: async(id: string) => {
        try {
            const parentId = parseInt(id);
            const folders = await prisma.folder.findMany({
                where: {parent_id: parentId}, 
                orderBy: {name: 'asc'},
                include: {children: true}
            });

            return folders;
        } catch (e: unknown) {
            throw new Error(`Error fetching sub folders: ${e}`);
        }
    },
    getFiles: async(id: string) => {
        try {
            const parentId = parseInt(id);
            const files = await prisma.file.findMany({
                where: {folder_id: parentId}, 
                orderBy: {name: 'asc'}
            });

            return files;
        } catch (e: unknown) {
            throw new Error(`Error fetching sub folders: ${e}`);
        }
    }
}