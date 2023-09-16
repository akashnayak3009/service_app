import mongoose from "mongoose";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10; 

const bookingSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    personalId: {
      type: String, // Store hashed personalId as a string
      required: true,
    },
  },
  { timestamps: true }
);


bookingSchema.pre("save", function (next) {
  if (!this.isModified("personalId")) {
    return next();
  }

  bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.personalId, salt, (err, hash) => {
      if (err) return next(err);

      this.personalId = hash;
      next();
    });
  });
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
