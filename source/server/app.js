import path from 'path';
import express from 'express';
import horizon from '@horizon/server';
import devProps from '../../config/webpack/devProps';
import config from '../../config/page';
import dbConfig from '../../config/db';

// import './jobs';

const app = express();

app.use('/static', express.static(path.join(process.cwd(), '.build')));

/**
 * @TODO move the html out of the server dir
 */
const host = process.env.NODE_ENV === 'production' ? '' : `http://127.0.0.1:${devProps.webpackPort}`;
const bundle = `${host}/static/client.bundle.js`;
const styles = `${host}/static/styles.css`;

app.use('/', (req, res) => {
  res.status(200).send(`<!doctype html>
    <html>
      <head>
        <title>${config.title}</title>
        <link rel="stylesheet" type="text/css" href="${styles}" />
      </head>
      <body>
        <div id='root'></div>
        <script src="${bundle}"></script>
      </body>
    </html>`);
});

const run = () => {
  const port = process.env.PORT || config.port;

  const httpServer = app.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.info(`Express listening at http://localhost:${port}`); // eslint-disable-line
  });

  horizon(httpServer, {
    auto_create_collection: true,
    auto_create_index: true,
    project_name: dbConfig.db,
    permissions: false, // waiting for additions to permission system atm
    auth: {
      allow_anonymous: true,
      allow_unauthenticated: true,
      token_secret: config.token_secret
    }
  });

    var ioServer = app.listen(process.env.PORT || 1234, listen);
    var io = require('socket.io')(ioServer);

    function listen() {
        var host = ioServer.address().address;
        var port = ioServer.address().port;
        console.log('socket.io listening at http://' + host + ':' + port);
    }

    io.sockets.on('connection', function (socket) {

        console.log("Camera client connected: " + socket.id);

        socket.on('bloop', function(data) {
            console.log("Received: " + data.message);
            console.log("image binary: " + data.image);
            /*
            TODO:
            feed image through blooprint/whiteSocket.jar
            */
        });

        socket.on('disconnect', function() {
            console.log("Client has disconnected");
        });
    });
};

export default {
  run
};
