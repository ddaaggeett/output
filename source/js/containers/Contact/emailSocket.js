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
            console.log('\nabout to send an email')
            console.log('from: ', data.email)
            console.log('message: ', data.message, '\n')
            awsSendEmail(data)
        })

        socket.on('disconnect', function() {
            console.log("Client has disconnected");
        });
    });
}

const awsSendEmail = (email) => {

    // let nodemailer = require('nodemailer')
    let aws = require('aws-sdk')

    // configure AWS SDK
    aws.config.loadFromPath('./source/js/containers/Contact/awsConfigs.json')

    // create Nodemailer SES transporter
    let transporter = nodemailer.createTransport({
        SES: new aws.SES({
            apiVersion: '2010-12-01'
        })
    })

    const message = 'from: '.concat(email.email, '\n', email.message)

    // send some mail
    transporter.sendMail({
        from: emailConfigs.user,
        to: emailConfigs.user,
        subject: emailConfigs.subject,
        text: message

    }, (err, info) => {
        console.log("email error: ",err);
    })
}
