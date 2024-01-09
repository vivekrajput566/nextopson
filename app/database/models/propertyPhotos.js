import mongoose from "mongoose";

const propertyPhotos_schema_model = new mongoose.Schema({
  productId:{type:String, required:true},
  mobileno: { type: String, required: true },
  fileName: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

export const Propertyphotos = mongoose.models.propertyphotos || mongoose.model('propertyphotos', propertyPhotos_schema_model);
