import restaurantKeys from '../../../assets/keys/restaurantKeys'

const menuSections = [      //  as read from google document
    'restaurant home',
    'hours',
    'breakfast specials',
    'breakfast items',
    'lunch specials',
    'lunch items',
    'dinner specials',
    'dinner items',
    'dessert'
]

export const menuSocket = (app) => {

    var ioServer = app.listen(process.env.PORT || 1235, listen);
    var io = require('socket.io')(ioServer);

    function listen() {
        var host = ioServer.address().address;
        var port = ioServer.address().port;
        console.log('socket.io listening at http://' + host + ':' + port);
    }

    io.sockets.on('connection', function (socket) {

        socket.on('getMenuData', function() {

            console.log('\nreceiving NCFR menu data from spreadsheet')

            var gsjson = require('google-spreadsheet-to-json');

            gsjson({
                spreadsheetId: restaurantKeys.menuID,
                worksheet: menuSections
            })
            .then(function(data) {
                socket.emit('mountMenuData', data)
            })
            .catch(function(err) {
                console.log(err.message);
                console.log(err.stack);
            });
        })

        socket.on('disconnect', function() {
            console.log("Client has disconnected");
        });
    });
}
