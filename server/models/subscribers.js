const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SubscriberSchema = new Schema({
    email: {
        type: String,
        required: true,
        validator: {
            validate: v => typeof(v) === 'string' && v.length !== 0
        }
    }
})

module.exports = mongoose.model('Subscriber', SubscriberSchema)