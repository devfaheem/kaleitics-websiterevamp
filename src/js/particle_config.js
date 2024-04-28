var config = require('./particlesjs-config.json')

if (typeof particlesJS !== 'undefined') {
    try {

        particlesJS(config);
    }
    catch (e) {
        console.log("particlesJS is not defined");
    }
}



