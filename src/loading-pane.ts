/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
import {Component} from 'angular2/core';


@Component({
    selector: 'loading-pane',
    template: `
        <div class="loading-pane" [class.lp-loaded]="tracker.complete === true" [class.lp-loading]="tracker.complete !== true">
            <div class="lp-spinner">
                <div class="lp-spinner-icon"></div>
            </div>
            <div class="lp-overlay"></div>
            <div class="lp-content" >
                <content></content>
            </div>
        </div>`
})
export class LoadingPane {

}

export class WorkTracker {
    private _activePromises:number = 0;

    constructor(public complete:boolean,
                public minDelayInMs?:number) {

    }

    track(promise:Promise<any>) {
        this.complete = false;
        this._activePromises++;
        if (this.minDelayInMs === 0) {
            return promise.then(this.completePromise, this.completePromise);
        } else {
            return Promise.all([promise, this.createTimedPromise(this.minDelayInMs)])
                .then(this.completePromise, this.completePromise);
        }
    }

    createTimedPromise(timeInMs) {
        return new Promise((resolve)=> {
            setTimeout(()=>resolve(), timeInMs)
        });
    }

    completePromise() {
        this._activePromises = Math.max(0, this._activePromises - 1);
        this.complete = this._activePromises === 0;
    }
}

