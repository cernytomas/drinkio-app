var express = require('express');
var router = express.Router();

let UsersRepository = [];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(UsersRepository);
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    UsersRepository.push(req.body);

    res.sendStatus(200);
})

module.exports = router;
