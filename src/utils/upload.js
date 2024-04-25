import multer from "multer";

const storage = multer.memoryStorage();
export const uploadZip = multer({ storage: storage });