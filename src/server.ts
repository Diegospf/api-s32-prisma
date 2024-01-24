import express from 'express';
import { routes } from './routes';

const cors = require('cors');


const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
const corsOptions = {
  origin: (origin: any, callback: any) => {
    const allowedOrigins = ['https://s32inmovies.vercel.app', 'http://localhost:3000'];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(routes);
app.get("/", (req, res) => {
  return res.json('Hello world!');
})


app.listen(port, () => console.log("Server is running as port ", port))