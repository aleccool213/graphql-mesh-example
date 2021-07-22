const { model, Schema } = require("mongoose");
const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

const User = model("User", UserSchema);

const LaunchesAttendedSchema = new Schema(
  {
    spacexLaunchID: {
      type: String,
    },
    userId: { type: "ObjectId", ref: "User" },
  },
  {
    collection: "launches_attended",
  }
);

const LaunchesAttended = model("LaunchesAttended", LaunchesAttendedSchema);

module.exports = {
  User,
  LaunchesAttended,
};
