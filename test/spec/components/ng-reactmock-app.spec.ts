/// <reference path="../../../reference.ts" />
'use strict';

class NgReactmockAppDriver extends WixBaseViewUnitDriver {

  render(name = '') {
    this.renderFromTemplate(`<ng-reactmock-app name="name"></ng-reactmock-app>`, {name});
  }

  getContainerElement() {
    return this.findByDataHook('container');
  }

  getCounterElement() {
    return this.findByDataHook('counter');
  }
}

describe('Component: ngReactmockApp', () => {
  let driver: NgReactmockAppDriver;

  beforeEach(() => {
    module('ngReactmockAppInternal');
    driver = new NgReactmockAppDriver();
  });

  afterEach(() => {
    driver.disconnectFromBody();
  });
});
