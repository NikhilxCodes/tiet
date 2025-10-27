import { Schema, model } from "mongoose";
import medicine from "./medicine";

const schema = new Schema(
  {
    patient_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    doctor_id: { type: String },
    paramedic_notes: { type: String },
    vitals: {
      bp: { type: String },
      spo2: { type: String },
      temperature: { type: String },
      heart_rate: { type: String },
      bmi: { type: String },
      glucose: { type: String },
      respiratory_rate: { type: String },
      pregnant: { type: Boolean },
    },
    treatment_plan: {
      history: { type: String },
      co: { type: String },
      allergy: { type: String },
      investigation: { type: String },
      diagnosis: { type: String },
      prognosis: { type: String },
      advice: { type: String },
    },
    medicine: [
      {
        medicine_id: { type: Schema.Types.ObjectId, ref: "Medicine" },
        medicine_name: { type: String, required: true },
        frequency: { type: String, required: true },
        duration: { type: String, required: true },
        instructions: { type: String, required: true },
      },
    ],
    referred_outside: { type: Boolean, default: false },
    rest_recommendation: { type: String },
    follow_up_date: { type: Date },
    date: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true }
);

export default model("Prescription", schema);
