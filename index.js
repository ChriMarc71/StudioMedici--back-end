const app = require("express")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(8080);
