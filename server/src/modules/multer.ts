import multer from "multer";

const fileStorage = multer.memoryStorage();

export const upload = multer({
  storage: fileStorage,
  limits: {
    fileSize: 1024 * 1024 * 15
  }
});