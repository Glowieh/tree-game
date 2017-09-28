'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('tree game', function() {


  it('should automatically redirect to / when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('start-screen', function() {

    beforeEach(function() {
      browser.get('index.html#!');
    });


    it('should render start-screen when user navigates to /', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for start screen/);
    });

  });

});
