import mongoose from "mongoose";

const propertyViews_schema_model = new mongoose.Schema({
  
  productId:{type:String, required:true},
  mobileno: { type: String, required: true },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },

});

export const Propertyviews = mongoose.models.propertyviews || mongoose.model('propertyviews', propertyViews_schema_model);
