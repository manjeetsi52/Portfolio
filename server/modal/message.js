import { model, Schema } from "mongoose";

const messageSchema = Schema(
  {
    name: { type: String, require: true },
    message: { type: String, require: true },
    email: { type: String, required: true },
  },
  { timestamps: true },
);

export const Message = model('Message',messageSchema)