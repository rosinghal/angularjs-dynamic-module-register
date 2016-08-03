(function (app) {
  'use strict';

  // Start by defining the main module and adding the module dependencies
  angular
    .module(app.applicationModuleName, app.applicationModuleVendorDependencies);

  angular
    .module(app.applicationModuleName)
    .run(run);

  function run($rootScope) {
    $rootScope.checkModule = function(module) {
      try { angular.module(module); console.log(1);return true; } catch(err) { console.log(2);return false; }
    }
  }

  // Then define the init function for starting up the application
  angular.element(document).ready(init);

  function init() {
    // Then init the app
    angular.bootstrap(document, [app.applicationModuleName]);
  }
}(ApplicationConfiguration));