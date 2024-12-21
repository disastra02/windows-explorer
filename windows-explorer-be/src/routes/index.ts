import Elysia from "elysia";
import { FolderController } from "../controllers/FolderControllers";

export const Routes = (app: Elysia) =>
    app.group("/folder", (folder) => {
        // Menambil data folder
        folder.get("/", (() => FolderController.getFolder()));
        
        // Mengambil detail folder
        folder.get("/:id", ((req) => {
            const { id } = req.params;
            return FolderController.getSubFolder(id);
        }));
    
        return folder;
    });