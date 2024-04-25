import mongoose from "mongoose";

export default (db) => {
  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err.message);
    });
}
