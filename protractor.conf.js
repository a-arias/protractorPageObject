exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/e2e/specs/*.js'],
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },
    onPrepare: () => {
        require("@babel/register");
        browser.ignoreSynchronization = true;
        var width = 1600;
        var height = 1200;
        browser.driver.manage().window().setSize(width, height);

        var chai = require('chai'); // chai
        var chaiAsPromised = require("chai-as-promised"); // deal with promises from protractor

        chai.use(chaiAsPromised); // add promise candy to the candy of chai
        global.chai = chai; // expose chai globally
    }
};