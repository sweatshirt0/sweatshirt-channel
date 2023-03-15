const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const server = http.createServer((req, res) => {
    if (req.url === "/style") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        fs.readFile("./stylesheet/styles.css", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data)
            }

            res.end();
        });
    }

    if (req.url === "/nao") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./stylesheet/nao.jpg", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

    if (req.url === "/moments") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./stylesheet/moments.png", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

    if (req.url === "/genshigames") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./stylesheet/genshikengames.jpg", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data)
            }

            res.end();
        });
    }

    if (req.url === "/happyhacking") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./stylesheet/anime-hacking.gif", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File nor found.");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

    if (req.url === "/freehacking") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./stylesheet/freehack.gif", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

    if (req.url === "/libcasa") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./stylesheet/coding.gif", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

    if (req.url === "/haruhara") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./stylesheet/haru-ramen.jpg", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./pages/home.html", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

    if (req.url === "/contact") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./pages/contact.html", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

    if (req.url === "/blog") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./pages/blog.html", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

    if (req.url === "/nkb") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./stylesheet/thorfinn.jpg", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

    if (req.url === "/post1") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./pages/post1.html", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else  {
                res.write(data);
            }

            res.end();
        });
    }

    if (req.url === "/hackmacs") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./error_pages/in_dev.html", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

    if (req.url === "/games") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./pages/gamelist.html", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

    if (req.url === "/asteroids") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./pages/asteroids.html", (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found.");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

});

const port = process.env.port || 8080;

server.listen(port, console.log(`Server running on port ${port}`));
