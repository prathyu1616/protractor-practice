var wikiLocators =require('../wikiPageLocators/theWikiPageLocators');


var wikiModules = {
    enterSearch:function(msg){
        element(wikiLocators.SEARCH).sendKeys(msg);
    },
    buttonClick:function(){
        element(wikiLocators.BUT).click();
    },
    linking:function(){
        element(wikiLocators.LINK).click();

    },
    createAcc:function(){
        element(wikiLocators.CREATE).click();
    },



}
module.exports = wikiModules;
