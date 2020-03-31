const { Router } = require('express');
const routes = Router();
const database = require('./database/connection.js');
const prayerController = require('./controllers/prayerController.js');

routes.post('/prayer', prayerController.create);
routes.get('/prayers', prayerController.index);


module.exports = routes;