'use strict';

// Declare app level module which depends on views, and components
angular.module('treeGameApp', [
  'ngRoute',
  'treeGameApp.startScreen',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/', {
  template: '<start-screen></start-screen>'
  })
  .otherwise({redirectTo: '/'});
}]);
