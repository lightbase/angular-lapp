////// HttpClient-Only version ////
import { NgModule } from '@angular/core';



var LappModule = (function () {
    function HttpClientInMemoryWebApiModule() {
    }
  
    LappModule.forRoot = function () {
        return "Lapp"
    };
    /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */
    LappModule.forFeature = function () {
        return LappModule.forRoot();
    };
    return LappModule;
}());
export { LappModule };
LappModule.decorators = [
    { type: NgModule, args: [{},] },
];
