const path = require("path")

module.exports = (app) => {
		
    app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}