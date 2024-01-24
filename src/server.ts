import express from 'express';
import { routes } from './routes';

const cors = require('cors');

const app = express();
app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.use(routes);

app.listen(3001, () => console.log("Server is running as port 3001"))