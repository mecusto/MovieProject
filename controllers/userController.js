const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var salt = 10;

const jwt = require("jsonwebtoken");

const User = require('../models/user.js');

const myprivatekey = "tokenprivatekey";

const userController = {};



userController.putUser = (req, res) => {
    let userId = req.params.userId;
    let update = req.body;

    User.findByIdAndUpdate(userId, update, (err, user) => {

        if (err) res.status(500).send({ message: 'Error al actualizar usuario' });

        res.status(200).send({ user });
    })
}

userController.updateFilmography = (req, res) => {
    const { userId, filmId } = req.param;

    User.findByIdAndUpdate(userId, { $push: { "filmography": filmId } }, { upsert: true }, (err, user) => {

        if (err) res.status(500).send({ message: 'Error al incluir película' });

        res.status(200).send({ user });
    })
}


module.exports = userController;