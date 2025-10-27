import { app } from "./index.js";
import { ConnectDB } from "./db/db.js";

console.log("hiii");
const port = process.env.PORT || 4000;

ConnectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on the PORT ${port}`);
    });
  })
  .catch(() => {
    console.error("Something went wrong while connecting to the server");
  });
