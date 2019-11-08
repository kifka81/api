import filmDao from '../../models/films/dao.js';

import HTTPError from 'http-errors';

const create = async (req,res,next) => {

    try {

        const film= await filmDao.create (Object.assign ({},req.body));

        res.send(film);
        
    } catch (error) {

        next(error)
        
    }
}

export default create;