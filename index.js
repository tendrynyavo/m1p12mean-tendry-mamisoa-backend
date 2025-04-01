const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const dotenv = require('dotenv');

const authMiddleware = require('./middlewares/authMiddleware');

app.use(cors());
app.use(express.json());

app.use('/marques', authMiddleware);
app.use('/voitures', authMiddleware);
app.use('/motorisations', authMiddleware);

const env = process.env.NODE_ENV || 'development';
const envFile = `.env.${env}`;
dotenv.config({ path: envFile });

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

routes.forEach((route) => {
    app.use(route.path, route.route);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});