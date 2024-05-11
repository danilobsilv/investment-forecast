import mongoose from "mongoose";
const {Schema} = mongoose;

const UserSchema = new Schema({
    UserFullName: {
        type: Schema.Types.String,
        required: true
    },
    UserNickname: {
        type: Schema.Types.String,
        required: true
    },
    UserPassword: {
        type: Schema.Types.String,
        required: true
    },
    UserAge: {
        type: Schema.Types.Number,
        required: true
    },
    UserType: {
        type: Schema.Types.String,
        required: true
    },
    UserStatus: {
        type: Schema.Types.String,
        required: true
    }
},
    {timestamps: true}
);

const UserModel = mongoose.model("UserModel", UserSchema);
export default UserModel;