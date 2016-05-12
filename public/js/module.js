'use strict';

var app = angular.module('CitydioApp', ['ui.router', 'chart.js']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl',
      resolve: {

        }
    })
    .state('start', {
      url: '/start',
      templateUrl: '/html/start.html',
      controller: 'startCtrl'
    })
    .state('photo', {
      url: '/photo',
      templateUrl: '/html/photo.html',
      controller: 'photoCtrl'
    })

  $urlRouterProvider.otherwise('/');
});

app.config(function (ChartJsProvider) {
  ChartJsProvider.setOptions({ colours : [ '#18bc9c', '#1a242f', '#798d8f', '#217dbb', '#c87f0a', '#d62c1a', '#18bc9c', '#1a242f', '#798d8f', '#217dbb', '#c87f0a', '#d62c1a'] });
});
