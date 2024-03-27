import { defineMongooseModel } from '#nuxt/mongoose';

export const ApartmentSchema = defineMongooseModel({
    name: 'Apartment',
    schema: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        photos: {
            type: Array,
            default: []
        },
        roomsCount: {
            type: Number,
            required: true
        },
        bedsCount: {
            type: Number,
            default: 0
        }
        squareCount: {
            type: String,
        },
        adult: {
            type: Number,
            default: 1
        }
        children: {
            type: Number,
            default: 0
        },
        city: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        comfortsList: {
            type: Array,
            default: []
        },
        price: {
            type: String,
        },
        provider: {
            type: String, 
        }
    }
})