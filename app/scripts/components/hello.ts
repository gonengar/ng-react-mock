/// <reference path="../../../reference.ts" />
'use strict';

declare module purchaseSummaryComponents{
export var Hello: any;
}

let component = purchaseSummaryComponents.Hello;

angular
    .module('ngReactmockAppInternal').directive('hello', function(reactDirective) {
    return reactDirective(component);
});
