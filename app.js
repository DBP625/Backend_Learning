import express from "express";
import mongoose from "mongoose";
import connectDB from "./app/config/db.js";

import router from "./routes/api.js";
import ratelimit from "express-rate-limit";
import heltmet from "helmet";
import hpp from "hpp";
import cors from "cors";
import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";
import cluster from "cluster";

import {
  Mongoose_Connection,
  JWT_SECRET,
  JWT_EXPIRATION_TIME,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASSWORD,
  MAX_JSON_SIZE,
  URL_ENCODED,
  REQUEST_LIMIT_TIME,
  REQUEST_LIMIT_NUMBER,
  WEB_CACHE,
  PORT,
  OTP_EXPIRATION_TIME,
  LOG_LEVEL,
  LOG_FILE_RELATIVE,
  RABBITMQ_URL,
  RABBITMQ_QUEUE,
  IMAGE_UPLOAD_MAX_BYTES,
  IMAGE_UPLOAD_PATH,
} from "./app/config/config.js";
import { abort, config } from "process";

const app = express();

// Disable caching in development
app.use((req, res, next) => {
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  next();
});

// Middleware
app.use(cors());
app.use(heltmet());
app.use(hpp());
app.use(
  fileUpload({
    limits: { filesize: IMAGE_UPLOAD_MAX_BYTES },
    abortOnLimit: true,
    createParentPath: true,
    useTempFiles: false,
  }),
);

app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));

const limiter = ratelimit({
  windowMs: REQUEST_LIMIT_TIME, // 15 minutes
  max: REQUEST_LIMIT_NUMBER, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.set("etag", WEB_CACHE); //default cache is set to false

//Database Connection
// mongoose
//   .connect(Mongoose_Connection, { autoIndex: true })
//   .then(() => console.log("DB Connection Success"))
//   .catch((err) => console.log("Database Connection Error:", err.message));

// const __rootDir = path.dirname(fileURLToPath(import.meta.url));
// app.use(
//   "/storage-files",
//   express.static(path.join(__rootDir, IMAGE_UPLOAD_PATH)),
// );

//Database Connection
connectDB();

// Routes

app.use("/api", router);

app.use((req, res) => {
  res.json({
    msg: "404 not found",
  });
});

if (cluster.isPrimary) {
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  app.listen(PORT, () => {
    console.log(`Process ${process.pid} is running on port ${PORT}`);
  });
}
