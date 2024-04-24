/*
 * @file: updateProfile.js
 * @description: It Contain register User  router/api.
 * @author: Pankaj Chaudhari
 */
import express from "express";
import { createValidator } from "express-joi-validation";
import Joi from "@hapi/joi";
import { imgMultipleUpload } from "../../../controllers/user";

const app = express();
const validator = createValidator({ passError: true });

app.post(
  "/user/imgMultipleUpload",
  // validator.body(userSchema, {
  //   joi: { convert: true, allowUnknown: false }
  // }),
  imgMultipleUpload
);

export default app;
