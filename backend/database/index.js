const db = require("./db");

//require("./models")-> reads and executes './models.index' file and then returns the export object
/*
When we execute this file, we:
• create the tables (if not created already)
• create associations between the tables 
*/
require("./models");
module.exports = db;
