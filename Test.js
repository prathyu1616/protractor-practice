describe('Protractor Demo App', function() {
    beforeAll(function(){
        browser.manage().window().maximize();
    });
    beforeEach(function() {
        console.log("title");
    });

    it('should have a title', function() {
        var name ="zenq";
        //var mode =0;
        browser.get('http://www.thetestroom.com/jswebapp');
        element(by.model('person.name')).sendKeys(name);
        var elem = element(by.binding('person.name'));
        browser.getTitle().then(function(text){
            console.log(text);
        });
        element(by.id('continue_button')).click();
        

        browser.sleep(10000);
        expect(browser.getTitle()).toEqual('Zoo Adoption | Home');
        expect(elem.getText()).toEqual(name);


    });
});