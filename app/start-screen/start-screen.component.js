'use strict';

angular.module('treeGameApp.startScreen', ['ngRoute'])
.component('startScreen', {
  templateUrl: 'start-screen/start-screen.template.html',
  controller: class StartScreenController {
    constructor() {
      this.hello = "hw";
    }
  }
});
