(function () {
  'use strict';

  angular
    .module('module1')
    .run(run)
    .config(config)
    .controller('ModuleController', ModuleController);

  function config() {
    console.log('hurray1');
  }

  function run() {
    console.log('hurray2');
  }
  function ModuleController() {
    console.log('hurray3');
  }
}());
