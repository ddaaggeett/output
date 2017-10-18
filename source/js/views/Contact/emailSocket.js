import { emailConfigs } from './emailConfigs'

const nodemailer = require('nodemailer')

export const socketIO_setup = (app) => {

    var ioServer = app.listen(process.env.PORT || 1234, listen);
    var io = require('socket.io')(ioServer);

    function listen() {
        var host = ioServer.address().address;
        var port = ioServer.address().port;
        console.log('socket.io listening at http://' + host + ':' + port);
    }

    io.sockets.on('connection', function (socket) {

        socket.on('submitEmail', function(data) {
            sendEmail(data)
        })

        socket.on('disconnect', function() {
            console.log("Client has disconnected");
        });
    });
}

const sendEmail = (email) => {
    var mailOpts, transporter;
    //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
    try {
        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: emailConfigs.user,
                clientId: emailConfigs.clientId,
                clientSecret: emailConfigs.clientSecret,
                refreshToken: emailConfigs.refreshToken
            }
        })
    }
    catch (err) {
        // set up your own credentials
        console.log('\nyou need your own email credentials. SEE: source/js/views/Contact/emailSocket.js\n')
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: emailConfigs.user,
                clientId: emailConfigs.clientId,
                clientSecret: emailConfigs.clientSecret,
                refreshToken: emailConfigs.refreshToken
            }
        });
    }

    //Mail options
    mailOpts = {
        from: email.email,
        to: emailConfigs.user,
        subject: '** DEFAULT ddaaggeett.xyz CONTACT **',
        text: 'from: '+ email.email + '\n\n' + email.message
    };
    transporter.sendMail(mailOpts, function (error, response) {
        //Email not sent
        if (error) {
            console.log('\nEMAIL ERROR:\n',error)
        }
        //Yay!! Email sent
        else {}
    });
}
