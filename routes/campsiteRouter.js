const express = require("express");
const campsiteRouter = express.Router();

campsiteRouter
    .route("/")
    .all((req, res, next) => {
        // catches all HTTP verbs to path
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next(); // passes control of app routing to next relavent routing method
    })
    .get((req, res) => {
        res.end("Will send all the campsites to you");
    })
    .post((req, res) => {
        res.end(
            `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
        );
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /campsites");
    })
    .delete((req, res) => {
        res.end("Deleting all campsites");
    });

module.exports = campsiteRouter;
