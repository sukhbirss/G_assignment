import { Schema, model } from "mongoose";

import { ITagDocument,TagObjectTypes } from "../Types";

const TagSchema = new Schema<ITagDocument>(
  {
    name: {
      type: String,
      required: [true, "Please provide name field"],
    },
    objectType: {
      type: String,
      enum: Object.values(TagObjectTypes),
      required:  [true, "Please provide objectType field"],
      default: "TAG",
    },
    description: {
      type: String,
      required:  [true, "Please provide description field"],
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


export default model<ITagDocument>("Tag", TagSchema);
