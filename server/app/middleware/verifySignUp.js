const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

isUsernameOrEmailDuplicate = (req, res, next) => {
    //for username
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Try a new username - Username already in use"
            });
            return;
        }

        //for email 
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Failed! Email is already in use"
                });
                return;
            }

            next();
        });
    });
};

doesRoleExist = (req, res, next) => {
    if (req.body.roles) {
        for (let i=0; i<req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Error! Role does not exist = " + req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
};

const verifySignUp = {
    isUsernameOrEmailDuplicate: isUsernameOrEmailDuplicate,
    doesRoleExist: doesRoleExist
};

module.exports = verifySignUp;