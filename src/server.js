import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';
import handlebars from 'express-handlebars';
import path from 'path';

import UserController from './app/controllers/UserController';
import Queue from './app/lib/Queue';

const app = express();

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.enable('view cache');

app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '/views'));


BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());

app.get('/', UserController.index);
app.post('/users', UserController.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(process.env.PORT, () => {
    console.log(`Server running on the ${process.env.PORT}`)
});
