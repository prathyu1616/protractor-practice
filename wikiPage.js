
var theWikiModules = require('../wikiPageModules/theWikiPageModules');
var theWikiLocators = require('../wikiPageLocators/theWikiPageLocators');



describe('Title',function(){
    it('Wikipedia',function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.wikipedia.org/');
        browser.sleep(5000);
        var msg = "Message";
        theWikiModules.enterSearch(msg);
        browser.sleep(5000);
        theWikiModules.buttonClick();
        browser.sleep(5000);
        theWikiModules.linking();
        browser.sleep(5000);
        theWikiModules.createAcc();
        browser.sleep(4000);


    });





});