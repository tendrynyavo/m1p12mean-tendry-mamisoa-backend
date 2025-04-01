const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const MecanicienSchema = new Schema({
    nom: {
        type: String,
        required: [true, 'Le nom est requis']
    },
    prenom: {
        type: String,
        required: [true, 'Le prénom est requis']
    },
    login: {
        type: String,
        required: [true, 'Le login est requis'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Le mot de passe est requis']
    },
    contact: {
        type: String,
        required: [true, 'Le contact est requis'],
        validate: {
            validator: function(v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: props => `${props.value} n'est pas un numéro de téléphone valide!`
        }
    }
}, {
    timestamps: true
});

// Pre-save middleware to hash password
MecanicienSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare passwords
MecanicienSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('Mecanicien', MecanicienSchema);