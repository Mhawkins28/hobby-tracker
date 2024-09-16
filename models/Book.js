import mongoose from "mongoose";
const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  genre: {
    type: [String],
    required: true
  },
  origalLanguage: {
    type: String,
    required: false
  },
  chapters: {
    type: String,
    required: false
  },
  complete: {
    type: Boolean,
    default: false,
  },
  author: {
    type: String,
    required: false
  },
  artist: {
    type: String,
    required: false
  }, 
  officialTranslation: {
    type: Boolean,
    required: false
  },
  readingDates: {
    type: [Date],
    default: []
  }
});

export default mongoose.model("books", BookSchema);
