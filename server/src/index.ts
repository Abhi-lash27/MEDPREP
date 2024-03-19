import * as dotenv from "dotenv"

import app  from "./server";
import logger from "./logger";
import { createAdmin } from "./handlers/admin";

dotenv.config()
const port = 2222 as number;

(async (): Promise<void> => {
  try {
    await createAdmin();
  } catch (error: any) {
    logger.error(`Error creating admin: ${error.message || error.toString()}`);
  }
})();

app.listen(port, () => {
  logger.info(`listening on http://localhost:${port}`);
}) 
