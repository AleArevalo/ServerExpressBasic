const { Router } = require('express');
const { petGet } = require('../controllers/pet');

const router = Router();

router.get('/', petGet);

module.exports = router;