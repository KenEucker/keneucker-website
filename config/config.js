module.exports = {
    ssl: {
        enabled: true,
        strategy: 'greenlock',
        contentSecurityPolicy: {
            directives: {
                scriptSrc: [
                    'https://use.fontawesome.com/',
                    'https://www.googletagmanager.com/',
                    "'unsafe-inline' js/modernizr-2.0.6.js",
                ],
                fontSrc: ['https://use.fontawesome.com/'],
                connectSrc: ['https://www.google-analytics.com'],
                styleSrc: ['https://use.fontawesome.com', "'unsafe-inline' js/modernizr-2.0.6.js"],
            },
        },
    },
    subdomains: {
        index: {
            aliases: ['www'],
            template: 'ken',
        },
    },

    rendering: {
        overrideViewEngine: ['liquid', 'ejs'],
    },

    // "favicon": "img/KenEuckerLLCLogo.jpg",
}
