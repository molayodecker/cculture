import express from 'express';
import { connect } from 'mongoose';
import { createClient } from 'redis';
import { mongoURI } from './config/key';
import ('./services/passport');

const app = express();
import ('./routes/authRoutes').then(app => app);

const client = createClient();

connect(mongoURI);

const port = process.env.PORT || 5000
app.listen(port, () => console.log(process.env.BT_ENVIROMENT))