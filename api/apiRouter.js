const express = require('express');
const api = require('./apiModel.js');
const bc = require('bcryptjs');

const router = express.Router();


// router.post('/register', (req, res) => {
//     if (req.body.username && req.body.password) {
//         const user = req.body;
//         user.password = bc.hashSync(req.body.password, 10);
//         api.registerUser(user)
//             .then(() => {
//                 api.getUserByUsername(user.username)
//                 .then(response => {
//                     return res.status(201).json(response);
//                 })
//                 .catch(err => {
//                     console.log(err);
//                     return res.status(400).json({ error: "Error retrieving user after register." })
//                 })
//             })
//             .catch(err => {
//                 console.log(err);
//                 return res.status(500).json({ error: "User was not added." })
//             })
//     } else {
//         return res.status(400).json({ error: "Username and Password needed." })
//     }
// })

router.post("/register", (req, res) => {
    let user = req.body;

    const hash = bc.hashSync(req.body.password, 8);

    user.password = hash;

    api.registerUser(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});



router.post('/login', async (req, res) => {
    if (req.body.username && req.body.password) {
        const user = await api.getUserByUsername(req.body.username);
        if (user && bc.compareSync(req.body.password, user.password)) {
            return res.status(201).json({ token: user.password, message: "Logged In." })
        }
        else {
            return res.status(400).json({ error: "Error logging in user." })
        }
    } else {
        return res.status(400).json({ error: "Username and Password are required." })
    }
})

router.get('/users', (req, res) => {
    api.getUsers()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({ error: "you shall not pass" });
        });
})



module.exports = router;