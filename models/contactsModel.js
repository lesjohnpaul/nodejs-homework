import { Schema, model } from "mongoose";

const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Set Name for contact"],
        },

        email: {
            type: String,
            required: [true, "Set Email for contact"],
        },
        phone: {
            type: String,
            required: [true, "Set phone for contact"],
        },
        favorite: {
            type: Boolean,
            default: false,
        },
    },
    {versionKey:false}
);

const Contact = model("contact", contactSchema);
export { Contact };