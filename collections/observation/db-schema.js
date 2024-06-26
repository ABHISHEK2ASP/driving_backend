/*
 * @file: db-schema.js
 * @description: It Contain db schema for pdeclaration collection.
 * @author: Manas Agrawal
 */
import validator from "validator";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const observationSchema = new mongoose.Schema(
    {
        declarationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Declaration",
            required: true,
        },
        deviceType: {
            type: String,
            required: true,
        },
        pulse: {
            type: Number,
            required: false,
            default: 0,

        },
        pulseVariation: [
            {
                pulse: {
                    type: Number,
                    required: false,
                    default: 0,
                },
                dateTime: {
                    type: String,
                    required: false,
                    default: "",
                }
            }
        ],
        QOL: {
            type: String,
            required: false,
            default: "",
        },
        steps: {
            type: Number,
            required: false,
            default: 0,

        },
        exerciseScore:{
            type: Number,
            required: false,
            default: 0,

        },
        stressScore:{
            type: Number,
            required: false,
            default: 0,

        },
        sleepScore:{
            type: Number,
            required: false,
            default: 0,

        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

// Add an index on the createdAt field
observationSchema.index({ createdAt: -1 });
observationSchema.index({ declarationId:1});


export default observationSchema;
