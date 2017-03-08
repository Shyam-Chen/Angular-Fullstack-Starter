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
import * as import1 from '../../../app/browser-app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/platform-browser';
import * as import4 from '../../../transfer-state.browser.module';
import * as import5 from '@angular/http';
import * as import6 from '@angular/router';
import * as import7 from '../../../app/app.module';
<<<<<<< HEAD
import * as import8 from './app.module.ngfactory';
import * as import9 from './app.component.ngfactory';
import * as import10 from '../../../transfer-state';
=======
import * as import8 from './home-view.component.ngfactory';
import * as import9 from './app.component.ngfactory';
import * as import10 from '../../../app/home-view.component';
import * as import11 from '../../../transfer-state';
>>>>>>> dc4570b... 211th Commit
var BrowserAppModuleInjector = (function (_super) {
    __extends(BrowserAppModuleInjector, _super);
    function BrowserAppModuleInjector(parent) {
        return _super.call(this, parent, [
<<<<<<< HEAD
            import8.HomeComponentNgFactory,
            import8.AboutComponentNgFactory,
=======
            import8.HomeViewNgFactory,
>>>>>>> dc4570b... 211th Commit
            import9.AppComponentNgFactory
        ], [import9.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_LOCALE_ID_9", {
        get: function () {
            if ((this.__LOCALE_ID_9 == null)) {
                (this.__LOCALE_ID_9 = import0.ɵo(this.parent.get(import0.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_NgLocalization_10", {
        get: function () {
            if ((this.__NgLocalization_10 == null)) {
                (this.__NgLocalization_10 = new import2.NgLocaleLocalization(this._LOCALE_ID_9));
            }
            return this.__NgLocalization_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_ApplicationRef_18", {
        get: function () {
            if ((this.__ApplicationRef_18 == null)) {
                (this.__ApplicationRef_18 = this._ɵf_17);
            }
            return this.__ApplicationRef_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_Compiler_19", {
        get: function () {
            if ((this.__Compiler_19 == null)) {
                (this.__Compiler_19 = new import0.Compiler());
            }
            return this.__Compiler_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_20", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_20 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_20 = new import3.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_21", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_21 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_21 = [
                    new import3.ɵDomEventsPlugin(this.parent.get(import3.DOCUMENT)),
                    new import3.ɵKeyEventsPlugin(this.parent.get(import3.DOCUMENT)),
                    new import3.ɵHammerGesturesPlugin(this.parent.get(import3.DOCUMENT), this._HAMMER_GESTURE_CONFIG_20)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_EventManager_22", {
        get: function () {
            if ((this.__EventManager_22 == null)) {
                (this.__EventManager_22 = new import3.EventManager(this._EVENT_MANAGER_PLUGINS_21, this.parent.get(import0.NgZone)));
            }
            return this.__EventManager_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_AnimationDriver_24", {
        get: function () {
            if ((this.__AnimationDriver_24 == null)) {
                (this.__AnimationDriver_24 = import3.ɵc());
            }
            return this.__AnimationDriver_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_\u0275DomRootRenderer_25", {
        get: function () {
            if ((this.__ɵDomRootRenderer_25 == null)) {
                (this.__ɵDomRootRenderer_25 = new import3.ɵDomRootRenderer_(this.parent.get(import3.DOCUMENT), this._EventManager_22, this._ɵDomSharedStylesHost_23, this._AnimationDriver_24, this._APP_ID_12));
            }
            return this.__ɵDomRootRenderer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_NgProbeToken_26", {
        get: function () {
            if ((this.__NgProbeToken_26 == null)) {
                (this.__NgProbeToken_26 = [import6.ɵb()]);
            }
            return this.__NgProbeToken_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_RootRenderer_27", {
        get: function () {
            if ((this.__RootRenderer_27 == null)) {
                (this.__RootRenderer_27 = import3.ɵd(this._ɵDomRootRenderer_25, this.parent.get(import3.NgProbeToken, null), this._NgProbeToken_26));
            }
            return this.__RootRenderer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_DomSanitizer_28", {
        get: function () {
            if ((this.__DomSanitizer_28 == null)) {
                (this.__DomSanitizer_28 = new import3.ɵf(this.parent.get(import3.DOCUMENT)));
            }
            return this.__DomSanitizer_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_Sanitizer_29", {
        get: function () {
            if ((this.__Sanitizer_29 == null)) {
                (this.__Sanitizer_29 = this._DomSanitizer_28);
            }
            return this.__Sanitizer_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_\u0275z_30", {
        get: function () {
            if ((this.__ɵz_30 == null)) {
                (this.__ɵz_30 = new import0.ɵz(this.parent.get(import0.NgZone)));
            }
            return this.__ɵz_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_\u0275ViewUtils_31", {
        get: function () {
            if ((this.__ɵViewUtils_31 == null)) {
                (this.__ɵViewUtils_31 = new import0.ɵViewUtils(this._RootRenderer_27, this._Sanitizer_29, this._ɵz_30));
            }
            return this.__ɵViewUtils_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_IterableDiffers_32", {
        get: function () {
            if ((this.__IterableDiffers_32 == null)) {
                (this.__IterableDiffers_32 = import0.ɵm());
            }
            return this.__IterableDiffers_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_KeyValueDiffers_33", {
        get: function () {
            if ((this.__KeyValueDiffers_33 == null)) {
                (this.__KeyValueDiffers_33 = import0.ɵn());
            }
            return this.__KeyValueDiffers_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_\u0275DomRendererFactoryV2_34", {
        get: function () {
            if ((this.__ɵDomRendererFactoryV2_34 == null)) {
                (this.__ɵDomRendererFactoryV2_34 = new import3.ɵDomRendererFactoryV2(this._EventManager_22, this._ɵDomSharedStylesHost_23));
            }
            return this.__ɵDomRendererFactoryV2_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_RendererFactoryV2_35", {
        get: function () {
            if ((this.__RendererFactoryV2_35 == null)) {
                (this.__RendererFactoryV2_35 = this._ɵDomRendererFactoryV2_34);
            }
            return this.__RendererFactoryV2_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_\u0275SharedStylesHost_36", {
        get: function () {
            if ((this.__ɵSharedStylesHost_36 == null)) {
                (this.__ɵSharedStylesHost_36 = this._ɵDomSharedStylesHost_23);
            }
            return this.__ɵSharedStylesHost_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_Meta_37", {
        get: function () {
            if ((this.__Meta_37 == null)) {
                (this.__Meta_37 = new import3.Meta(this.parent.get(import3.DOCUMENT)));
            }
            return this.__Meta_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_Title_38", {
        get: function () {
            if ((this.__Title_38 == null)) {
                (this.__Title_38 = new import3.Title(this.parent.get(import3.DOCUMENT)));
            }
            return this.__Title_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_TransferState_39", {
        get: function () {
            if ((this.__TransferState_39 == null)) {
                (this.__TransferState_39 = import4.getTransferState());
            }
            return this.__TransferState_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_BrowserXhr_40", {
        get: function () {
            if ((this.__BrowserXhr_40 == null)) {
                (this.__BrowserXhr_40 = new import5.BrowserXhr());
            }
            return this.__BrowserXhr_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_ResponseOptions_41", {
        get: function () {
            if ((this.__ResponseOptions_41 == null)) {
                (this.__ResponseOptions_41 = new import5.BaseResponseOptions());
            }
            return this.__ResponseOptions_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_XSRFStrategy_42", {
        get: function () {
            if ((this.__XSRFStrategy_42 == null)) {
                (this.__XSRFStrategy_42 = import5.ɵb());
            }
            return this.__XSRFStrategy_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_XHRBackend_43", {
        get: function () {
            if ((this.__XHRBackend_43 == null)) {
                (this.__XHRBackend_43 = new import5.XHRBackend(this._BrowserXhr_40, this._ResponseOptions_41, this._XSRFStrategy_42));
            }
            return this.__XHRBackend_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_RequestOptions_44", {
        get: function () {
            if ((this.__RequestOptions_44 == null)) {
                (this.__RequestOptions_44 = new import5.BaseRequestOptions());
            }
            return this.__RequestOptions_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_Http_45", {
        get: function () {
            if ((this.__Http_45 == null)) {
                (this.__Http_45 = import5.ɵc(this._XHRBackend_43, this._RequestOptions_44));
            }
            return this.__Http_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_APP_BASE_HREF_46", {
        get: function () {
            if ((this.__APP_BASE_HREF_46 == null)) {
                (this.__APP_BASE_HREF_46 = '/');
            }
            return this.__APP_BASE_HREF_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_ROUTER_CONFIGURATION_47", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_47 == null)) {
                (this.__ROUTER_CONFIGURATION_47 = {});
            }
            return this.__ROUTER_CONFIGURATION_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_LocationStrategy_48", {
        get: function () {
            if ((this.__LocationStrategy_48 == null)) {
                (this.__LocationStrategy_48 = import6.ɵc(this.parent.get(import2.PlatformLocation), this._APP_BASE_HREF_46, this._ROUTER_CONFIGURATION_47));
            }
            return this.__LocationStrategy_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_Location_49", {
        get: function () {
            if ((this.__Location_49 == null)) {
                (this.__Location_49 = new import2.Location(this._LocationStrategy_48));
            }
            return this.__Location_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_UrlSerializer_50", {
        get: function () {
            if ((this.__UrlSerializer_50 == null)) {
                (this.__UrlSerializer_50 = new import6.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_RouterOutletMap_51", {
        get: function () {
            if ((this.__RouterOutletMap_51 == null)) {
                (this.__RouterOutletMap_51 = new import6.RouterOutletMap());
            }
            return this.__RouterOutletMap_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_NgModuleFactoryLoader_52", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_52 == null)) {
                (this.__NgModuleFactoryLoader_52 = new import0.SystemJsNgModuleLoader(this._Compiler_19, this.parent.get(import0.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_ROUTES_53", {
        get: function () {
            if ((this.__ROUTES_53 == null)) {
                (this.__ROUTES_53 = [[
                        {
                            path: '',
<<<<<<< HEAD
                            component: import7.HomeComponent,
                            pathMatch: 'full'
                        },
                        {
                            path: 'about',
                            component: import7.AboutComponent,
                            pathMatch: 'full'
=======
                            component: import10.HomeView,
                            pathMatch: 'full'
                        },
                        {
                            path: 'lazy',
                            loadChildren: './lazy.module#LazyModule'
>>>>>>> dc4570b... 211th Commit
                        }
                    ]
                ]);
            }
            return this.__ROUTES_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_Router_54", {
        get: function () {
            if ((this.__Router_54 == null)) {
                (this.__Router_54 = import6.ɵe(this._ApplicationRef_18, this._UrlSerializer_50, this._RouterOutletMap_51, this._Location_49, this, this._NgModuleFactoryLoader_52, this._Compiler_19, this._ROUTES_53, this._ROUTER_CONFIGURATION_47, this.parent.get(import6.UrlHandlingStrategy, null), this.parent.get(import6.RouteReuseStrategy, null)));
            }
            return this.__Router_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_ActivatedRoute_55", {
        get: function () {
            if ((this.__ActivatedRoute_55 == null)) {
                (this.__ActivatedRoute_55 = import6.ɵf(this._Router_54));
            }
            return this.__ActivatedRoute_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_PreloadAllModules_59", {
        get: function () {
            if ((this.__PreloadAllModules_59 == null)) {
                (this.__PreloadAllModules_59 = new import6.PreloadAllModules());
            }
            return this.__PreloadAllModules_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_ROUTER_INITIALIZER_60", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_60 == null)) {
                (this.__ROUTER_INITIALIZER_60 = import6.ɵg(this._Router_54, this._ApplicationRef_18, this._RouterPreloader_58, this._ROUTER_CONFIGURATION_47));
            }
            return this.__ROUTER_INITIALIZER_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserAppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_61", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_61 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_61 = [this._ROUTER_INITIALIZER_60]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_61;
        },
        enumerable: true,
        configurable: true
    });
    BrowserAppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import0.ApplicationModule();
        this._BrowserModule_2 = new import3.BrowserModule(this.parent.get(import3.BrowserModule, null));
        this._BrowserTransferStateModule_3 = new import4.BrowserTransferStateModule();
        this._HttpModule_4 = new import5.HttpModule();
        this._ɵa_5 = import6.ɵd(this.parent.get(import6.Router, null));
        this._RouterModule_6 = new import6.RouterModule(this._ɵa_5);
        this._AppModule_7 = new import7.AppModule();
        this._BrowserAppModule_8 = new import1.BrowserAppModule();
        this._ErrorHandler_11 = import3.ɵa();
        this._APP_ID_12 = 'Universal Web Application';
        this._ɵTRANSITION_ID_13 = this._APP_ID_12;
        this._APP_INITIALIZER_14 = [
            import0.ɵp,
            import3.ɵg(this._ɵTRANSITION_ID_13, this.parent.get(import3.DOCUMENT))
        ];
        this._ApplicationInitStatus_15 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_14);
        this._Testability_16 = new import0.Testability(this.parent.get(import0.NgZone));
        this._ɵf_17 = new import0.ɵf(this.parent.get(import0.NgZone), this.parent.get(import0.ɵConsole), this, this._ErrorHandler_11, this, this._ApplicationInitStatus_15, this.parent.get(import0.TestabilityRegistry, null), this._Testability_16);
        this._ɵDomSharedStylesHost_23 = new import3.ɵDomSharedStylesHost(this.parent.get(import3.DOCUMENT));
        this._NoPreloading_56 = new import6.NoPreloading();
        this._PreloadingStrategy_57 = this._NoPreloading_56;
        this._RouterPreloader_58 = new import6.RouterPreloader(this._Router_54, this._NgModuleFactoryLoader_52, this._Compiler_19, this, this._PreloadingStrategy_57);
        return this._BrowserAppModule_8;
    };
    BrowserAppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import0.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import3.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import4.BrowserTransferStateModule)) {
            return this._BrowserTransferStateModule_3;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_4;
        }
        if ((token === import6.ɵa)) {
            return this._ɵa_5;
        }
        if ((token === import6.RouterModule)) {
            return this._RouterModule_6;
        }
        if ((token === import7.AppModule)) {
            return this._AppModule_7;
        }
        if ((token === import1.BrowserAppModule)) {
            return this._BrowserAppModule_8;
        }
        if ((token === import0.LOCALE_ID)) {
            return this._LOCALE_ID_9;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_10;
        }
        if ((token === import0.ErrorHandler)) {
            return this._ErrorHandler_11;
        }
        if ((token === import0.APP_ID)) {
            return this._APP_ID_12;
        }
        if ((token === import3.ɵTRANSITION_ID)) {
            return this._ɵTRANSITION_ID_13;
        }
        if ((token === import0.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_14;
        }
        if ((token === import0.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_15;
        }
        if ((token === import0.Testability)) {
            return this._Testability_16;
        }
        if ((token === import0.ɵf)) {
            return this._ɵf_17;
        }
        if ((token === import0.ApplicationRef)) {
            return this._ApplicationRef_18;
        }
        if ((token === import0.Compiler)) {
            return this._Compiler_19;
        }
        if ((token === import3.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_20;
        }
        if ((token === import3.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_21;
        }
        if ((token === import3.EventManager)) {
            return this._EventManager_22;
        }
        if ((token === import3.ɵDomSharedStylesHost)) {
            return this._ɵDomSharedStylesHost_23;
        }
        if ((token === import3.AnimationDriver)) {
            return this._AnimationDriver_24;
        }
        if ((token === import3.ɵDomRootRenderer)) {
            return this._ɵDomRootRenderer_25;
        }
        if ((token === import0.NgProbeToken)) {
            return this._NgProbeToken_26;
        }
        if ((token === import0.RootRenderer)) {
            return this._RootRenderer_27;
        }
        if ((token === import3.DomSanitizer)) {
            return this._DomSanitizer_28;
        }
        if ((token === import0.Sanitizer)) {
            return this._Sanitizer_29;
        }
        if ((token === import0.ɵz)) {
            return this._ɵz_30;
        }
        if ((token === import0.ɵViewUtils)) {
            return this._ɵViewUtils_31;
        }
        if ((token === import0.IterableDiffers)) {
            return this._IterableDiffers_32;
        }
        if ((token === import0.KeyValueDiffers)) {
            return this._KeyValueDiffers_33;
        }
        if ((token === import3.ɵDomRendererFactoryV2)) {
            return this._ɵDomRendererFactoryV2_34;
        }
        if ((token === import0.RendererFactoryV2)) {
            return this._RendererFactoryV2_35;
        }
        if ((token === import3.ɵSharedStylesHost)) {
            return this._ɵSharedStylesHost_36;
        }
        if ((token === import3.Meta)) {
            return this._Meta_37;
        }
        if ((token === import3.Title)) {
            return this._Title_38;
        }
<<<<<<< HEAD
        if ((token === import10.TransferState)) {
=======
        if ((token === import11.TransferState)) {
>>>>>>> dc4570b... 211th Commit
            return this._TransferState_39;
        }
        if ((token === import5.BrowserXhr)) {
            return this._BrowserXhr_40;
        }
        if ((token === import5.ResponseOptions)) {
            return this._ResponseOptions_41;
        }
        if ((token === import5.XSRFStrategy)) {
            return this._XSRFStrategy_42;
        }
        if ((token === import5.XHRBackend)) {
            return this._XHRBackend_43;
        }
        if ((token === import5.RequestOptions)) {
            return this._RequestOptions_44;
        }
        if ((token === import5.Http)) {
            return this._Http_45;
        }
        if ((token === import2.APP_BASE_HREF)) {
            return this._APP_BASE_HREF_46;
        }
        if ((token === import6.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_47;
        }
        if ((token === import2.LocationStrategy)) {
            return this._LocationStrategy_48;
        }
        if ((token === import2.Location)) {
            return this._Location_49;
        }
        if ((token === import6.UrlSerializer)) {
            return this._UrlSerializer_50;
        }
        if ((token === import6.RouterOutletMap)) {
            return this._RouterOutletMap_51;
        }
        if ((token === import0.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_52;
        }
        if ((token === import6.ROUTES)) {
            return this._ROUTES_53;
        }
        if ((token === import6.Router)) {
            return this._Router_54;
        }
        if ((token === import6.ActivatedRoute)) {
            return this._ActivatedRoute_55;
        }
        if ((token === import6.NoPreloading)) {
            return this._NoPreloading_56;
        }
        if ((token === import6.PreloadingStrategy)) {
            return this._PreloadingStrategy_57;
        }
        if ((token === import6.RouterPreloader)) {
            return this._RouterPreloader_58;
        }
        if ((token === import6.PreloadAllModules)) {
            return this._PreloadAllModules_59;
        }
        if ((token === import6.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_60;
        }
        if ((token === import0.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_61;
        }
        return notFoundResult;
    };
    BrowserAppModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_17.ngOnDestroy();
        this._ɵDomSharedStylesHost_23.ngOnDestroy();
        this._RouterPreloader_58.ngOnDestroy();
    };
    return BrowserAppModuleInjector;
}(import0.ɵNgModuleInjector));
export var BrowserAppModuleNgFactory = new import0.NgModuleFactory(BrowserAppModuleInjector, import1.BrowserAppModule);