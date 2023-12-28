import mongoose from "mongoose";



const userdata_schema_model = new mongoose.Schema({

    mobileNo:{type:String,required:true},
    password:{type:String,required:true},
    username:{type:String, required:true},
    email:{type:String, required:false},
    createdAt:{type: Date, default: Date.now},

});

export const Userdata= mongoose.models.userdata || mongoose.model('userdata',userdata_schema_model);
