let querystring = require("querystring");

//local imports
const {
    loremParagraph,
    loremSentence,
    loremWord
} = require('./Lorem-server/lorem');
const render = require("./renderer.js");
let header = {
    "Content-Type": "text/html";
};

const homeRoute = (request, response) => {
    if (request.url === "/") {
        if (request.method === "GET") {
            response.writeHead(200, header);
            render.view("header", null, response);
            render.view("body", null, response);
            response.end();
        } else {
            if (request.method === 'POST') {
                request.on('data', (chunk) => {
                    let query = querystring.parse(chunk.toString());
                    if (query.number > 0) {
                        if (query.button === "parachecker") {
                            // get the data
                            const loremData = loremParagraph(query.number);
                            // write to template
                            response.writeHead(200, header);
                            render.view("header", null, response);
                            render.view("body", null, response);
                            render.view("details", loremData, response);
                            render.view("footer", null, response);
                            response.end();

                        } else if (query.button === "sentencechecker") {
                            // get the data
                            const loremData = loremSentence(query.number);
                            // write to template
                            response.writeHead(200, header);
                            render.view("header", null, response);
                            render.view("body", null, response);
                            render.view("details", loremData, response);
                            render.view("footer", null, response);
                            response.end();

                        } else if (query.button === "wordchecker") {
                            // get the data
                            const loremData = loremWord(query.number);
                            // write to template
                            response.writeHead(200, header);
                            render.view("header", null, response);
                            render.view("body", null, response);
                            render.view("details", loremData, response);
                            render.view("footer", null, response);
                            response.end();
                        }
                    } else {
                        // write to template
                        response.writeHead(200, header);
                        render.view("header", null, response);
                        render.view("error", null, response);
                        render.view("body", null, response);
                        render.view("footer", null, response);
                        response.end();
                    }
                });
                request.on("error", () => {
                    response.writeHead(200, header);
                    response.write("There was an error with your request!");
                    render.view("body", null, response);
                    response.end();
                })
            }
        }
    }
}

module.exports.home = homeRoute;
