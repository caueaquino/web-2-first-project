const express = require("express");
const routes = express.Router();
const UserController = require("../controller/UserController");
const CalendarController = require("../controller/CalendarController");

routes.get("/users", UserController.show);
routes.post("/users", UserController.store);

routes.get("/calendars", CalendarController.index);
routes.get("/calendars/:id", CalendarController.show);
routes.post("/calendars", CalendarController.store);

module.exports = routes;