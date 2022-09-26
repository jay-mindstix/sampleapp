import express from 'express';

const app = express();
const PORT = 8080

app.use(express.json())

app.get('/start', (req: express.Request, res: express.Response) => {
  console.log('Inside start endpoint');
  res.send('Hello World');
})

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});