/// <reference path="../../../reference.ts" />
'use strict';
class NgReactmockApp {
  clicks: number;
  name: string;

  /* @ngInject */
  constructor(private $scope: ng.IScope) {

    this.clicks = 0;
  }

  onClick = () =>{
      console.log('clicked');
    this.clicks++;
  }
}

angular
  .module('ngReactmockAppInternal')
  .component('ngReactmockApp', {
    templateUrl: 'views/ng-reactmock-app.html',
    controller: NgReactmockApp,
    bindings: {
      name: '='
    }
  });
