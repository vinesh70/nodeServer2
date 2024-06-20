const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/compute", (req, res) => {
	let num = req.query.number;
	let n = parseFloat(num);
	let r = Math.sqrt(n);
	let msg = "Square root of " + num + " is " + r.toFixed(2);

	fs.appendFile("result.txt", msg + "\n", (err) => {
		if (err) console.log(err);
	});
	res.json({ ans: msg });
});

app.listen(9000, () => { console.log("Server is listening on port 9000"); });
