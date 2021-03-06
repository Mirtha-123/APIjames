var mongoose = require('mongoose')
    , Schema = mongoose.Schema

mongoose.connect(process.env.DB_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db =>{
    
    console.log("Db is connected a", process.env.DB_MONGO)
    console.log("Db is connected", db.connection.host)
})
    .catch(err => console.log(err));
    
//mongoose.connect('mongodb://superAdmin:pass1234@167.99.2.159:27017/sulem?authSource=admin', { useNewUrlParser: true });
var clientes = Schema({
    nombre: String,
    apellido: String,
    email: String,
    created_at: { type: Date, required: true, default: Date.now },
    tz_lock: { type: String, default: '0' }
})

var cli = mongoose.model('clientes', clientes)

module.exports.client = cli