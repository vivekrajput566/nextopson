import mongoose from "mongoose";

const propertyListing_schema_model = new mongoose.Schema({
  productId:{type:String, required:true},
  mobileno: { type: String, required: true },
  city: { type: String, required: true },
  airConditioning: { type: String, required: false },
  bathrooms: { type: String, required: true },
  bedrooms: { type: String, required: true },
  carpetArea: { type: String, required: false },
  description: { type: String, required: true },
  furniture: { type: String, required: true },
  listedBy: { type: String, required: true },
  parkingAvailable: { type: String, required: false },
  price: { type: String, required: true },
  propertyFor: { type: String, required: true },
  propertyType: { type: String, required: true },
  landmark: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Propertylisting = mongoose.models.propertylisting || mongoose.model('propertylisting', propertyListing_schema_model);
