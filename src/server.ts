import express from 'express';
import { routes } from './routes';

const cors = require('cors');


const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.use(routes);
app.get("/", (req, res) => {
  return res.json('Hello world!');
})


app.listen(port, () => console.log("Server is running as port ", port))