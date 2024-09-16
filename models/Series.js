import mongoose from "mongoose";
const { Schema } = mongoose;

const ShowSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  country: {
    type: String
  },
  genre: {
    type: [String],
    required: true
  },
  episodes: {
    type: Number
  },
  complete: {
    type: Boolean,
    default: false,
  },
  watchedDates: {
    type: [Date],
    default: []
  }
});

export default mongoose.model("shows", ShowSchema);
