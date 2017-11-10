import * as express from 'express';
import Controller from '../controllers/NluController';

let router = express.Router();

router.get('/story', Controller.analyze);

export default router;