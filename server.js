const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectMongoDB = require('./config/mongoDB');

const moneyEntryRoutes = require('./routes/moneyEntryRoutes');
const moneySourceRoutes = require('./routes/moneySourceRoutes');

dotenv.config();
connectMongoDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/entries', moneyEntryRoutes);
app.use('/api/sources', moneySourceRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));