import mongoose from "mongoose";

const clientVisitSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },

    from: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    to: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: null,
    },
    accessories: {
      type: Array,
      required: false,
      default: [String],
    },
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Auth",
    //   required: true,
    // },
  },
  { timestamps: true }
);

const ClientVisit = mongoose.model("ClientVisit", clientVisitSchema);
export default ClientVisit;
