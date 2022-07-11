const express = require("express");
const path = require("path");

const port = 5500;
// const port = 80;

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.use(function (request, response) {
    response.status(404);

    if (request.accepts("html")) {
        response.sendFile(path.resolve(__dirname, "public/404.html"), { url: request.url });
        return;
    }

    if (request.accepts("json")) {
        response.json({ error: "404 Not found" });
        return;
    }

    response.type("txt").send("404 Not found");
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});