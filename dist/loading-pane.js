System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LoadingPane, WorkTracker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoadingPane = (function () {
                function LoadingPane() {
                }
                LoadingPane = __decorate([
                    core_1.Component({
                        selector: 'loading-pane',
                        template: "\n        <div class=\"loading-pane\" [class.lp-loaded]=\"tracker.complete === true\" [class.lp-loading]=\"tracker.complete !== true\">\n            <div class=\"lp-spinner\">\n                <div class=\"lp-spinner-icon\"></div>\n            </div>\n            <div class=\"lp-overlay\"></div>\n            <div class=\"lp-content\" >\n                <content></content>\n            </div>\n        </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoadingPane);
                return LoadingPane;
            }());
            exports_1("LoadingPane", LoadingPane);
            WorkTracker = (function () {
                function WorkTracker(complete, minDelayInMs) {
                    this.complete = complete;
                    this.minDelayInMs = minDelayInMs;
                    this._activePromises = 0;
                }
                WorkTracker.prototype.track = function (promise) {
                    this.complete = false;
                    this._activePromises++;
                    if (this.minDelayInMs === 0) {
                        return promise.then(this.completePromise, this.completePromise);
                    }
                    else {
                        return Promise.all([promise, this.createTimedPromise(this.minDelayInMs)])
                            .then(this.completePromise, this.completePromise);
                    }
                };
                WorkTracker.prototype.createTimedPromise = function (timeInMs) {
                    return new Promise(function (resolve) {
                        setTimeout(function () { return resolve(); }, timeInMs);
                    });
                };
                WorkTracker.prototype.completePromise = function () {
                    this._activePromises = Math.max(0, this._activePromises - 1);
                    this.complete = this._activePromises === 0;
                };
                return WorkTracker;
            }());
            exports_1("WorkTracker", WorkTracker);
        }
    }
});
