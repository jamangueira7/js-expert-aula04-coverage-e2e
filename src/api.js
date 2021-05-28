const http = require('http');

const routes = {

    '/contact:get': (request, response) => {
        response.write('contact us page.');
        return response.end();
    },

    '/login:post': (request, response) => {
        response.write('Logging has succeeded!');
        return response.end();
    },

    default: (request, response) => {
        response.write('Hello World!');
        return response.end();
    }
};

const header = function (request, response) {
    const { url, method } = request;
    const routeKey = `${url}:${method.toLowerCase()}`
    const chosen = routes[routeKey] || routes.default;

    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    return chosen(request, response);
};

const app = new http.createServer(header).listen(3000, () => console.log('app running at', 3000));

module.exports = app;
