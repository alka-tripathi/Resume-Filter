import mongoose from 'mongoose';



//it will store the filtered details
const candidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    score: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

export default mongoose.model('Candidate', candidateSchema);
