exports.config = {
    multiCapabilities: [
        {
            'browserName':'chrome',

        },
        {
            'browserName':'firefox',
        }
    ],

    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //sauceSeleniumAddress: 'ondemand.saucelabs.com:443/wd/hub',
    specs: ['Test.js'],
   //directConnect:true,
    sauceUser: "Prathyusha1616",
    sauceKey: "230a9414-7233-41cd-8424-de37c827e3ac",

    jasmineNodeOpts: {
        defaultTimeoutInterval:60000
    }
};