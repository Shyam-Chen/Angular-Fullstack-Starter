/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '@angular/core';
import * as import1 from '../../../app/app.module';
import * as import2 from '@angular/http';
import * as import3 from '@angular/router';
import * as import4 from '@angular/common';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            HomeComponentNgFactory,
            AboutComponentNgFactory
        ], []) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_4", {
        get: function () {
            if ((this.__BrowserXhr_4 == null)) {
                (this.__BrowserXhr_4 = new import2.BrowserXhr());
            }
            return this.__BrowserXhr_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_5", {
        get: function () {
            if ((this.__ResponseOptions_5 == null)) {
                (this.__ResponseOptions_5 = new import2.BaseResponseOptions());
            }
            return this.__ResponseOptions_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_6", {
        get: function () {
            if ((this.__XSRFStrategy_6 == null)) {
                (this.__XSRFStrategy_6 = import2.ɵb());
            }
            return this.__XSRFStrategy_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_7", {
        get: function () {
            if ((this.__XHRBackend_7 == null)) {
                (this.__XHRBackend_7 = new import2.XHRBackend(this._BrowserXhr_4, this._ResponseOptions_5, this._XSRFStrategy_6));
            }
            return this.__XHRBackend_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_8", {
        get: function () {
            if ((this.__RequestOptions_8 == null)) {
                (this.__RequestOptions_8 = new import2.BaseRequestOptions());
            }
            return this.__RequestOptions_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_9", {
        get: function () {
            if ((this.__Http_9 == null)) {
                (this.__Http_9 = import2.ɵc(this._XHRBackend_7, this._RequestOptions_8));
            }
            return this.__Http_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BASE_HREF_10", {
        get: function () {
            if ((this.__APP_BASE_HREF_10 == null)) {
                (this.__APP_BASE_HREF_10 = '/');
            }
            return this.__APP_BASE_HREF_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_11", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_11 == null)) {
                (this.__ROUTER_CONFIGURATION_11 = {});
            }
            return this.__ROUTER_CONFIGURATION_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_12", {
        get: function () {
            if ((this.__LocationStrategy_12 == null)) {
                (this.__LocationStrategy_12 = import3.ɵc(this.parent.get(import4.PlatformLocation), this._APP_BASE_HREF_10, this._ROUTER_CONFIGURATION_11));
            }
            return this.__LocationStrategy_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_13", {
        get: function () {
            if ((this.__Location_13 == null)) {
                (this.__Location_13 = new import4.Location(this._LocationStrategy_12));
            }
            return this.__Location_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_14", {
        get: function () {
            if ((this.__UrlSerializer_14 == null)) {
                (this.__UrlSerializer_14 = new import3.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_15", {
        get: function () {
            if ((this.__RouterOutletMap_15 == null)) {
                (this.__RouterOutletMap_15 = new import3.RouterOutletMap());
            }
            return this.__RouterOutletMap_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_16", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_16 == null)) {
                (this.__NgModuleFactoryLoader_16 = new import0.SystemJsNgModuleLoader(this.parent.get(import0.Compiler), this.parent.get(import0.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_17", {
        get: function () {
            if ((this.__ROUTES_17 == null)) {
                (this.__ROUTES_17 = [[
                        {
                            path: '',
                            component: import1.HomeComponent,
                            pathMatch: 'full'
                        },
                        {
                            path: 'about',
                            component: import1.AboutComponent,
                            pathMatch: 'full'
                        }
                    ]
                ]);
            }
            return this.__ROUTES_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_18", {
        get: function () {
            if ((this.__Router_18 == null)) {
                (this.__Router_18 = import3.ɵe(this.parent.get(import0.ApplicationRef), this._UrlSerializer_14, this._RouterOutletMap_15, this._Location_13, this, this._NgModuleFactoryLoader_16, this.parent.get(import0.Compiler), this._ROUTES_17, this._ROUTER_CONFIGURATION_11, this.parent.get(import3.UrlHandlingStrategy, null), this.parent.get(import3.RouteReuseStrategy, null)));
            }
            return this.__Router_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_19", {
        get: function () {
            if ((this.__ActivatedRoute_19 == null)) {
                (this.__ActivatedRoute_19 = import3.ɵf(this._Router_18));
            }
            return this.__ActivatedRoute_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_23", {
        get: function () {
            if ((this.__PreloadAllModules_23 == null)) {
                (this.__PreloadAllModules_23 = new import3.PreloadAllModules());
            }
            return this.__PreloadAllModules_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_24", {
        get: function () {
            if ((this.__NgProbeToken_24 == null)) {
                (this.__NgProbeToken_24 = [import3.ɵb()]);
            }
            return this.__NgProbeToken_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_25", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_25 == null)) {
                (this.__ROUTER_INITIALIZER_25 = import3.ɵg(this._Router_18, this.parent.get(import0.ApplicationRef), this._RouterPreloader_22, this._ROUTER_CONFIGURATION_11));
            }
            return this.__ROUTER_INITIALIZER_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_26", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_26 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_26 = [this._ROUTER_INITIALIZER_25]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_26;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._HttpModule_0 = new import2.HttpModule();
        this._ɵa_1 = import3.ɵd(this.parent.get(import3.Router, null));
        this._RouterModule_2 = new import3.RouterModule(this._ɵa_1);
        this._AppModule_3 = new import1.AppModule();
        this._NoPreloading_20 = new import3.NoPreloading();
        this._PreloadingStrategy_21 = this._NoPreloading_20;
        this._RouterPreloader_22 = new import3.RouterPreloader(this._Router_18, this._NgModuleFactoryLoader_16, this.parent.get(import0.Compiler), this, this._PreloadingStrategy_21);
        return this._AppModule_3;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.HttpModule)) {
            return this._HttpModule_0;
        }
        if ((token === import3.ɵa)) {
            return this._ɵa_1;
        }
        if ((token === import3.RouterModule)) {
            return this._RouterModule_2;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_3;
        }
        if ((token === import2.BrowserXhr)) {
            return this._BrowserXhr_4;
        }
        if ((token === import2.ResponseOptions)) {
            return this._ResponseOptions_5;
        }
        if ((token === import2.XSRFStrategy)) {
            return this._XSRFStrategy_6;
        }
        if ((token === import2.XHRBackend)) {
            return this._XHRBackend_7;
        }
        if ((token === import2.RequestOptions)) {
            return this._RequestOptions_8;
        }
        if ((token === import2.Http)) {
            return this._Http_9;
        }
        if ((token === import4.APP_BASE_HREF)) {
            return this._APP_BASE_HREF_10;
        }
        if ((token === import3.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_11;
        }
        if ((token === import4.LocationStrategy)) {
            return this._LocationStrategy_12;
        }
        if ((token === import4.Location)) {
            return this._Location_13;
        }
        if ((token === import3.UrlSerializer)) {
            return this._UrlSerializer_14;
        }
        if ((token === import3.RouterOutletMap)) {
            return this._RouterOutletMap_15;
        }
        if ((token === import0.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_16;
        }
        if ((token === import3.ROUTES)) {
            return this._ROUTES_17;
        }
        if ((token === import3.Router)) {
            return this._Router_18;
        }
        if ((token === import3.ActivatedRoute)) {
            return this._ActivatedRoute_19;
        }
        if ((token === import3.NoPreloading)) {
            return this._NoPreloading_20;
        }
        if ((token === import3.PreloadingStrategy)) {
            return this._PreloadingStrategy_21;
        }
        if ((token === import3.RouterPreloader)) {
            return this._RouterPreloader_22;
        }
        if ((token === import3.PreloadAllModules)) {
            return this._PreloadAllModules_23;
        }
        if ((token === import0.NgProbeToken)) {
            return this._NgProbeToken_24;
        }
        if ((token === import3.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_25;
        }
        if ((token === import0.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_26;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._RouterPreloader_22.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.ɵNgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
var styles_HomeComponent = [];
export var RenderType_HomeComponent = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_HomeComponent,
    data: { animation: [] }
});
export function View_HomeComponent_0() {
    return import0.ɵviewDef(0, [
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['home works!']),
        import0.ɵtextDef(null, ['\n  '])
    ], null, null);
}
var RenderType_HomeComponent_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_HomeComponent_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'ng-component', [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent),
        import0.ɵdirectiveDef(1024, null, 0, import1.HomeComponent, [], null, null)
    ], null, null);
}
export var HomeComponentNgFactory = import0.ɵcreateComponentFactory('ng-component', import1.HomeComponent, View_HomeComponent_Host_0);
var styles_AboutComponent = [];
export var RenderType_AboutComponent = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_AboutComponent,
    data: { animation: [] }
});
export function View_AboutComponent_0() {
    return import0.ɵviewDef(0, [
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['about works!']),
        import0.ɵtextDef(null, ['\n  '])
    ], null, null);
}
var RenderType_AboutComponent_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_AboutComponent_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'ng-component', [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent),
        import0.ɵdirectiveDef(1024, null, 0, import1.AboutComponent, [], null, null)
    ], null, null);
}
export var AboutComponentNgFactory = import0.ɵcreateComponentFactory('ng-component', import1.AboutComponent, View_AboutComponent_Host_0);