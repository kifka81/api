import Router from 'express';

import create from '../controllers/votos/create.js';
import list from '../controllers/votos/list.js';
import update from '../controllers/votos/update.js';
import remove from '../controllers/votos/remove.js'

const router = Router();

router.route ('/')
      .post(create)
      .get(list);

router.route('/:id')
      .put(update)
      .delete(remove);
      
export default router;