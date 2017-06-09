var fs = require('fs');

export const socketIO_setup = (app) => {

    console.log('\nsetting up sockets\n')

    var ioServer = app.listen(process.env.PORT || 1234, listen);
    var io = require('socket.io')(ioServer);

    function listen() {
        var host = ioServer.address().address;
        var port = ioServer.address().port;
        console.log('socket.io listening at http://' + host + ':' + port);
    }

    io.sockets.on('connection', function (socket) {

        console.log("Camera client connected: " + socket.id);

        socket.on('disconnect', function() {
            console.log("Client has disconnected");
        });

        socket.on('bloop', function(data) {
            console.log('retrieving image ...')

            /*
            TODO:
            timestamp should be originated by blooprint/input application at capture time
            */
            var timestamp = generateTimestamp()
            var inputSavePath = './whiteSocket/input/'+timestamp+'.bmp'
            var outputSavePath = './whiteSocket/output/'+timestamp+'.bmp'

            // base64toBMP(data.image, inputSavePath);
            base64toBMP(data.image, outputSavePath); // for testing

            var flag = true
            while(flag) {
                if(fs.existsSync(outputSavePath)) {
                    console.log('ok, got it!')
                    flag = false
                }
            }

            // whiteSocket(timestamp,'white','write','000000',true)
            //
            // /*
            // TODO:
            // server-side rendering (redux)
            // */
            // flag = true
            // while(flag) {
            //     if(fs.existsSync(outputSavePath)) {
            //         console.log('whiteSocket output saved')
            //         flag = false
            //     }
            // }

            io.sockets.emit('bloop_out', {
                timestamp: timestamp,
                // outputSavePath: outputSavePath
            })

        });

    });
}

function base64toBMP(img, file) {
    var buff = new Buffer(img, 'base64');
    fs.writeFileSync(file, buff);
}

function generateTimestamp() {
    var yy = new Date().getFullYear().toString()
    var mm = new Date().getMonth().toString()
    var dd = new Date().getDate().toString()
    var h = new Date().getHours().toString()
    var m = new Date().getMinutes().toString()
    var s = new Date().getSeconds().toString()
    var mmm = new Date().getMilliseconds().toString()
    var timestamp = yy.concat(mm,dd,h,m,s,mmm)
    return timestamp
}
