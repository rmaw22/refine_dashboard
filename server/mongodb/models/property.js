import mongose from 'mongoose';

const PropertySchema = new mongose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    propertyType: { type: String, required: true},
    location: { type: String, required: true},
    price: { type: Number, required: true},
    photo: { type: String, required: true},
    creator: { type: mongose.Schema.Types.ObjectId, ref: 'User' }, // tidak pake [] artinya satu properti mengarah kepada satu user creator
});


const propertyModel = mongose.model('Property', PropertySchema);

export default propertyModel;
