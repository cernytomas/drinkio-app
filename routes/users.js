var express = require('express');
var router = express.Router();

let UsersRepository = [];
const findUserByEmail = (email) => {
    return UsersRepository.find(user => user.email === email)
}
const findUserById = (id) => {
    return UsersRepository.find(user => user.id == id)
}
let ids = 1;
/* GET users listing. */
router.get('/', function(req, res, next) {

    res.send(UsersRepository);
});

router.get('/:userId', function(req, res, next) {

    const user = findUserById(req.params.userId);
    if(!user) {
        res.sendStatus(204);
        return next()
    }
    res.send(user);
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    if (findUserByEmail(req.body.email)) {
        res.sendStatus(400)
        return next()
    }
    const id = ids++;
    UsersRepository.push(Object.assign({id}, ...req.body));

    res.send({userId: id});
})

module.exports = router;
