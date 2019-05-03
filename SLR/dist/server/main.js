(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@agm/core/directives/map.js":
/*!**************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.js ***!
  \**************************************************/
/*! exports provided: AgmMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");











/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = /** @class */ (function () {
    function AgmMap(_elem, _mapsWrapper, _fitBoundsService) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._fitBoundsService = _fitBoundsService;
        /**
           * The longitude that defines the center of the map.
           */
        this.longitude = 0;
        /**
           * The latitude that defines the center of the map.
           */
        this.latitude = 0;
        /**
           * The zoom level of the map. The default zoom level is 8.
           */
        this.zoom = 8;
        /**
           * Enables/disables if map is draggable.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
           * Enables/disables zoom and center on double click. Enabled by default.
           */
        this.disableDoubleClickZoom = false;
        /**
           * Enables/disables all default UI of the Google map. Please note: When the map is created, this
           * value cannot get updated.
           */
        this.disableDefaultUI = false;
        /**
           * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
           */
        this.scrollwheel = true;
        /**
           * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
           * enabled by default.
           */
        this.keyboardShortcuts = true;
        /**
           * The enabled/disabled state of the Zoom control.
           */
        this.zoomControl = true;
        /**
           * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
           * modes, these styles will only apply to labels and geometry.
           */
        this.styles = [];
        /**
           * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
           * used to
           * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
           */
        this.usePanning = false;
        /**
           * The initial enabled/disabled state of the Street View Pegman control.
           * This control is part of the default UI, and should be set to false when displaying a map type
           * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
           */
        this.streetViewControl = true;
        /**
           * Sets the viewport to contain the given bounds.
           * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
           */
        this.fitBounds = false;
        /**
           * The initial enabled/disabled state of the Scale control. This is disabled by default.
           */
        this.scaleControl = false;
        /**
           * The initial enabled/disabled state of the Map type control.
           */
        this.mapTypeControl = false;
        /**
           * The initial enabled/disabled state of the Pan control.
           */
        this.panControl = false;
        /**
           * The initial enabled/disabled state of the Rotate control.
           */
        this.rotateControl = false;
        /**
           * The initial enabled/disabled state of the Fullscreen control.
           */
        this.fullscreenControl = false;
        /**
           * The map mapTypeId. Defaults to 'roadmap'.
           */
        this.mapTypeId = 'roadmap';
        /**
           * When false, map icons are not clickable. A map icon represents a point of interest,
           * also known as a POI. By default map icons are clickable.
           */
        this.clickableIcons = true;
        /**
           * This setting controls how gestures on the map are handled.
           * Allowed values:
           * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
           * - 'greedy'      (All touch gestures pan or zoom the map.)
           * - 'none'        (The map cannot be panned or zoomed by user gestures.)
           * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
           */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
           * This event emitter gets emitted when the user clicks on the map (but not when they click on a
           * marker or infoWindow).
           */
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user right-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user double-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter is fired when the map center changes.
           */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the viewport bounds have changed.
           */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the mapTypeId property changes.
           */
        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the map becomes idle after panning or zooming.
           */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the zoom level has changed.
           */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the google map is fully initialized.
           * You get the google.maps.Map instance as a result of this EventEmitter.
           */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnInit = /** @internal */
    function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleIdleEvent();
    };
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnDestroy = /** @internal */
    function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    };
    /* @internal */
    /* @internal */
    AgmMap.prototype.ngOnChanges = /* @internal */
    function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    AgmMap.prototype.triggerResize = /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                this._updateBounds(this.fitBounds);
        }
    };
    AgmMap.prototype._subscribeToFitBoundsUpdates = function () {
        var _this = this;
        this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(function (b) { return _this._updateBounds(b); });
    };
    AgmMap.prototype._updateBounds = function (bounds) {
        if (this._isLatLngBoundsLiteral(bounds) && google && google.maps) {
            var newBounds = google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds);
            return;
        }
        this._mapsWrapper.fitBounds(bounds);
    };
    AgmMap.prototype._isLatLngBoundsLiteral = function (bounds) {
        return bounds != null && bounds.extend === undefined;
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapTypeIdChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    /**
       * Map option attributes that can change over time
       */
    AgmMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
        'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
        'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
        'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
        'mapTypeId', 'clickableIcons', 'gestureHandling'
    ];
    AgmMap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-map',
                    providers: [
                        _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__["MarkerManager"], _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__["InfoWindowManager"], _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__["CircleManager"], _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__["RectangleManager"],
                        _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__["PolylineManager"], _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__["PolygonManager"], _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__["KmlLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"],
                        _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"]
                    ],
                    host: {
                        // todo: deprecated - we will remove it with the next version
                        '[class.sebm-google-map-container]': 'true'
                    },
                    styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                    template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmMap.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], },
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"], },
    ]; };
    AgmMap.propDecorators = {
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mapDraggable',] },],
        "disableDoubleClickZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableDefaultUI": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollwheel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "backgroundColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggableCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggingCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "keyboardShortcuts": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styles": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "usePanning": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fitBounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickableIcons": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "gestureHandling": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "centerChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "boundsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapTypeIdChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "idle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "zoomChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapReady": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmMap;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/map.ngfactory.js":
/*!************************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.ngfactory.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
var i2 = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
var i3 = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
var i4 = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
var i5 = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
var i6 = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
var i7 = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
var i8 = __webpack_require__(/*! ../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
var i9 = __webpack_require__(/*! ../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
var i10 = __webpack_require__(/*! ../services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
var i11 = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
var i12 = __webpack_require__(/*! ./map */ "./node_modules/@agm/core/directives/map.js");
var styles_AgmMap = [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"];
var RenderType_AgmMap = i0.ɵcrt({ encapsulation: 0, styles: styles_AgmMap, data: {} });
exports.RenderType_AgmMap = RenderType_AgmMap;
function View_AgmMap_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "agm-map-container-inner sebm-google-map-container-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "agm-map-content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
exports.View_AgmMap_0 = View_AgmMap_0;
function View_AgmMap_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 11, "agm-map", [], [[2, "sebm-google-map-container", null]], null, null, View_AgmMap_0, RenderType_AgmMap)), i0.ɵprd(4608, null, i1.MarkerManager, i1.MarkerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i3.InfoWindowManager, i3.InfoWindowManager, [i2.GoogleMapsAPIWrapper, i0.NgZone, i1.MarkerManager]), i0.ɵprd(4608, null, i4.CircleManager, i4.CircleManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i5.RectangleManager, i5.RectangleManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i6.PolylineManager, i6.PolylineManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i7.PolygonManager, i7.PolygonManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i8.KmlLayerManager, i8.KmlLayerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i9.DataLayerManager, i9.DataLayerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(512, null, i2.GoogleMapsAPIWrapper, i2.GoogleMapsAPIWrapper, [i10.MapsAPILoader, i0.NgZone]), i0.ɵprd(512, null, i11.FitBoundsService, i11.FitBoundsService, [i10.MapsAPILoader]), i0.ɵdid(11, 770048, null, 0, i12.AgmMap, [i0.ElementRef, i2.GoogleMapsAPIWrapper, i11.FitBoundsService], null, null)], function (_ck, _v) { _ck(_v, 11, 0); }, function (_ck, _v) { var currVal_0 = true; _ck(_v, 0, 0, currVal_0); }); }
exports.View_AgmMap_Host_0 = View_AgmMap_Host_0;
var AgmMapNgFactory = i0.ɵccf("agm-map", i12.AgmMap, View_AgmMap_Host_0, { longitude: "longitude", latitude: "latitude", zoom: "zoom", minZoom: "minZoom", maxZoom: "maxZoom", draggable: "mapDraggable", disableDoubleClickZoom: "disableDoubleClickZoom", disableDefaultUI: "disableDefaultUI", scrollwheel: "scrollwheel", backgroundColor: "backgroundColor", draggableCursor: "draggableCursor", draggingCursor: "draggingCursor", keyboardShortcuts: "keyboardShortcuts", zoomControl: "zoomControl", zoomControlOptions: "zoomControlOptions", styles: "styles", usePanning: "usePanning", streetViewControl: "streetViewControl", streetViewControlOptions: "streetViewControlOptions", fitBounds: "fitBounds", scaleControl: "scaleControl", scaleControlOptions: "scaleControlOptions", mapTypeControl: "mapTypeControl", mapTypeControlOptions: "mapTypeControlOptions", panControl: "panControl", panControlOptions: "panControlOptions", rotateControl: "rotateControl", rotateControlOptions: "rotateControlOptions", fullscreenControl: "fullscreenControl", fullscreenControlOptions: "fullscreenControlOptions", mapTypeId: "mapTypeId", clickableIcons: "clickableIcons", gestureHandling: "gestureHandling" }, { mapClick: "mapClick", mapRightClick: "mapRightClick", mapDblClick: "mapDblClick", centerChange: "centerChange", boundsChange: "boundsChange", mapTypeIdChange: "mapTypeIdChange", idle: "idle", zoomChange: "zoomChange", mapReady: "mapReady" }, ["*"]);
exports.AgmMapNgFactory = AgmMapNgFactory;


/***/ }),

/***/ "./node_modules/@agm/core/services/fit-bounds.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/services/fit-bounds.js ***!
  \*******************************************************/
/*! exports provided: FitBoundsAccessor, FitBoundsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsService", function() { return FitBoundsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");




/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
var /**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
FitBoundsAccessor = /** @class */ (function () {
    function FitBoundsAccessor() {
    }
    return FitBoundsAccessor;
}());
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */

/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
var FitBoundsService = /** @class */ (function () {
    function FitBoundsService(loader) {
        var _this = this;
        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function () { return _this._includeInBounds$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (time) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, time); }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (includeInBounds) { return _this._generateBounds(includeInBounds); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    FitBoundsService.prototype._generateBounds = function (includeInBounds) {
        var bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(function (b) { return bounds.extend(b); });
        return bounds;
    };
    FitBoundsService.prototype.addToBounds = function (latLng) {
        var id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        var map = this._includeInBounds$.value;
        map.set(id, latLng);
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.removeFromBounds = function (latLng) {
        var map = this._includeInBounds$.value;
        map.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.changeFitBoundsChangeSampleTime = function (timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    };
    FitBoundsService.prototype.getBounds$ = function () {
        return this.bounds$;
    };
    FitBoundsService.prototype._createIdentifier = function (latLng) {
        return latLng.lat + "+" + latLng.lng;
    };
    FitBoundsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FitBoundsService.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], },
    ]; };
    return FitBoundsService;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/google-maps-api-wrapper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/google-maps-api-wrapper.js ***!
  \********************************************************************/
/*! exports provided: GoogleMapsAPIWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = /** @class */ (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);
                _this._mapResolver(map);
                return;
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    /**
       * Creates a google map marker with the map context
       */
    GoogleMapsAPIWrapper.prototype.createMarker = /**
       * Creates a google map marker with the map context
       */
    function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    /**
       * Creates a google.map.Circle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createCircle = /**
       * Creates a google.map.Circle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    /**
       * Creates a google.map.Rectangle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createRectangle = /**
       * Creates a google.map.Rectangle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Rectangle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    /**
       * Creates a new google.map.Data layer for the current map
       */
    GoogleMapsAPIWrapper.prototype.createDataLayer = /**
       * Creates a new google.map.Data layer for the current map
       */
    function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    /**
       * Determines if given coordinates are insite a Polygon path.
       */
    GoogleMapsAPIWrapper.prototype.containsLocation = /**
       * Determines if given coordinates are insite a Polygon path.
       */
    function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
        this._map.then(function (map) {
            google.maps.event.clearInstanceListeners(map);
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
        return this._map.then(function (map) { return map.getMapTypeId(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    GoogleMapsAPIWrapper.prototype.getNativeMap = /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    /**
       * Triggers the given event name on the map instance.
       */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = /**
       * Triggers the given event name on the map instance.
       */
    function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    GoogleMapsAPIWrapper.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return GoogleMapsAPIWrapper;
}());

//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/circle-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/circle-manager.js ***!
  \********************************************************************/
/*! exports provided: CircleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var CircleManager = /** @class */ (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    /**
       * Removes the given circle from the map.
       */
    CircleManager.prototype.removeCircle = /**
       * Removes the given circle from the map.
       */
    function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CircleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return CircleManager;
}());

//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/data-layer-manager.js":
/*!************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/data-layer-manager.js ***!
  \************************************************************************/
/*! exports provided: DataLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = /** @class */ (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    /**
       * Adds a new Data Layer to the map.
       */
    DataLayerManager.prototype.addDataLayer = /**
       * Adds a new Data Layer to the map.
       */
    function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    DataLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    DataLayerManager.prototype.getDataFeatures = /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    DataLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    DataLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return DataLayerManager;
}());

//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/info-window-manager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/info-window-manager.js ***!
  \*************************************************************************/
/*! exports provided: InfoWindowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");




var InfoWindowManager = /** @class */ (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
            });
        });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    InfoWindowManager.prototype.createEventObservable = /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    function (eventName, infoWindow) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    InfoWindowManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    InfoWindowManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
    ]; };
    return InfoWindowManager;
}());

//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/kml-layer-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/kml-layer-manager.js ***!
  \***********************************************************************/
/*! exports provided: KmlLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = /** @class */ (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    /**
       * Adds a new KML Layer to the map.
       */
    KmlLayerManager.prototype.addKmlLayer = /**
       * Adds a new KML Layer to the map.
       */
    function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    KmlLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    KmlLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    KmlLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return KmlLayerManager;
}());

//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/marker-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/marker-manager.js ***!
  \********************************************************************/
/*! exports provided: MarkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var MarkerManager = /** @class */ (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.updateAnimation = function (marker) {
        return this._markers.get(marker).then(function (m) {
            if (typeof marker.animation === 'string') {
                m.setAnimation(google.maps.Animation[marker.animation]);
            }
            else {
                m.setAnimation(marker.animation);
            }
        });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
            animation: (typeof marker.animation === 'string') ? google.maps.Animation[marker.animation] : marker.animation
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MarkerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return MarkerManager;
}());

//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polygon-manager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polygon-manager.js ***!
  \*********************************************************************/
/*! exports provided: PolygonManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolygonManager = /** @class */ (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolygonManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolygonManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolygonManager;
}());

//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polyline-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polyline-manager.js ***!
  \**********************************************************************/
/*! exports provided: PolylineManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolylineManager = /** @class */ (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolylineManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolylineManager;
}());

//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/rectangle-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/rectangle-manager.js ***!
  \***********************************************************************/
/*! exports provided: RectangleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return RectangleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var RectangleManager = /** @class */ (function () {
    function RectangleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    RectangleManager.prototype.addRectangle = function (rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex
        }));
    };
    /**
     * Removes the given rectangle from the map.
     */
    /**
       * Removes the given rectangle from the map.
       */
    RectangleManager.prototype.removeRectangle = /**
       * Removes the given rectangle from the map.
       */
    function (rectangle) {
        var _this = this;
        return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);
            _this._rectangles.delete(rectangle);
        });
    };
    RectangleManager.prototype.setOptions = function (rectangle, options) {
        return this._rectangles.get(rectangle).then(function (r) { return r.setOptions(options); });
    };
    RectangleManager.prototype.getBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) { return r.getBounds(); });
    };
    RectangleManager.prototype.setBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            });
        });
    };
    RectangleManager.prototype.setEditable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
        });
    };
    RectangleManager.prototype.setDraggable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
        });
    };
    RectangleManager.prototype.setVisible = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
        });
    };
    RectangleManager.prototype.createEventObservable = function (eventName, rectangle) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var listener = null;
            _this._rectangles.get(rectangle).then(function (r) {
                listener = r.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    RectangleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    RectangleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return RectangleManager;
}());

//# sourceMappingURL=rectangle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js ***!
  \****************************************************************************/
/*! exports provided: MapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var MapsAPILoader = /** @class */ (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return MapsAPILoader;
}());

//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
exports.RouterModuleNgFactory = RouterModuleNgFactory;
var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
exports.RenderType_ɵEmptyOutletComponent = RenderType_ɵEmptyOutletComponent;
function View_ɵEmptyOutletComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵEmptyOutletComponent_0 = View_ɵEmptyOutletComponent_0;
function View_ɵEmptyOutletComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), i0.ɵdid(1, 49152, null, 0, i1.ɵEmptyOutletComponent, [], null, null)], null, null); }
exports.View_ɵEmptyOutletComponent_Host_0 = View_ɵEmptyOutletComponent_Host_0;
var ɵEmptyOutletComponentNgFactory = i0.ɵccf("ng-component", i1.ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);
exports.ɵEmptyOutletComponentNgFactory = ɵEmptyOutletComponentNgFactory;


/***/ }),

/***/ "./node_modules/@ng-select/ng-select/ng-select.ngfactory.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/ng-select.ngfactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @ng-select/ng-select */ "@ng-select/ng-select");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var NgSelectModuleNgFactory = i0.ɵcmf(i1.NgSelectModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.NgSelectModule, i1.NgSelectModule, []), i0.ɵmpd(256, i1.SELECTION_MODEL_FACTORY, i1.ɵb, [])]); });
exports.NgSelectModuleNgFactory = NgSelectModuleNgFactory;
var styles_NgSelectComponent = [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;cursor:default;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"];
var RenderType_NgSelectComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_NgSelectComponent, data: {} });
exports.RenderType_NgSelectComponent = RenderType_NgSelectComponent;
function View_NgSelectComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["aria-hidden", "true"], ["class", "ng-value-icon left"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.unselect(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00D7"])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "span", [["class", "ng-value-label"]], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.label; _ck(_v, 3, 0, currVal_0); }); }
function View_NgSelectComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgSelectComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "ng-value"]], [[2, "ng-value-disabled", null]], null, null, null, null)), (_l()(), i0.ɵand(0, [["defaultLabelTemplate", 2]], null, 0, null, View_NgSelectComponent_3)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_NgSelectComponent_4)), i0.ɵdid(3, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(4, { item: 0, clear: 1, label: 2 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 4, 0, _v.context.$implicit.value, _co.clearItem, _v.context.$implicit.label); var currVal_2 = (_co.labelTemplate || i0.ɵnov(_v, 1)); _ck(_v, 3, 0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.disabled; _ck(_v, 0, 0, currVal_0); }); }
function View_NgSelectComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgSelectComponent_2)), i0.ɵdid(2, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selectedItems; _ck(_v, 2, 0, currVal_0); }, null); }
function View_NgSelectComponent_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgSelectComponent_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 2, null, View_NgSelectComponent_6)), i0.ɵdid(1, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(2, { items: 0, clear: 1 }), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, _co.selectedValues, _co.clearItem); var currVal_1 = _co.multiLabelTemplate; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_NgSelectComponent_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "ng-spinner-loader"]], null, null, null, null, null))], null, null); }
function View_NgSelectComponent_8(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "span", [["class", "ng-clear-wrapper"]], [[8, "title", 0]], null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["aria-hidden", "true"], ["class", "ng-clear"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00D7"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "", _co.clearAllText, ""); _ck(_v, 0, 0, currVal_0); }); }
function View_NgSelectComponent_11(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "ng-option-label"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.label; _ck(_v, 1, 0, currVal_0); }); }
function View_NgSelectComponent_12(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgSelectComponent_10(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "ng-option"]], [[1, "role", 0], [2, "ng-option-disabled", null], [2, "ng-option-selected", null], [2, "ng-optgroup", null], [2, "ng-option", null], [2, "ng-option-child", null], [2, "ng-option-marked", null], [1, "aria-selected", 0], [1, "id", 0]], [[null, "click"], [null, "mouseover"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleItem(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } if (("mouseover" === en)) {
        var pd_1 = (_co.onItemHover(_v.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(0, [["defaultOptionTemplate", 2]], null, 0, null, View_NgSelectComponent_11)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_NgSelectComponent_12)), i0.ɵdid(3, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(4, { item: 0, item$: 1, index: 2, searchTerm: 3 })], function (_ck, _v) { var _co = _v.component; var currVal_9 = _ck(_v, 4, 0, _v.context.$implicit.value, _v.context.$implicit, _v.context.$implicit.index, _co.filterValue); var currVal_10 = (_v.context.$implicit.children ? (_co.optgroupTemplate || i0.ɵnov(_v, 1)) : (_co.optionTemplate || i0.ɵnov(_v, 1))); _ck(_v, 3, 0, currVal_9, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit.children ? "group" : "option"); var currVal_1 = _v.context.$implicit.disabled; var currVal_2 = _v.context.$implicit.selected; var currVal_3 = _v.context.$implicit.children; var currVal_4 = !_v.context.$implicit.children; var currVal_5 = !!_v.context.$implicit.parent; var currVal_6 = (_v.context.$implicit === _co.itemsList.markedItem); var currVal_7 = _v.context.$implicit.selected; var currVal_8 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.htmlId); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_NgSelectComponent_14(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["class", "ng-tag-label"]], null, null, null, null, null)), (_l()(), i0.ɵted(2, null, ["", ""])), (_l()(), i0.ɵted(3, null, ["\"", "\""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.addTagText; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.filterValue; _ck(_v, 3, 0, currVal_1); }); }
function View_NgSelectComponent_15(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgSelectComponent_13(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "ng-option"], ["role", "option"]], [[2, "ng-option-marked", null]], [[null, "mouseover"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseover" === en)) {
        var pd_0 = (_co.itemsList.unmarkItem() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.selectTag() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(0, [["defaultTagTemplate", 2]], null, 0, null, View_NgSelectComponent_14)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_NgSelectComponent_15)), i0.ɵdid(3, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(4, { searchTerm: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 4, 0, _co.filterValue); var currVal_2 = (_co.tagTemplate || i0.ɵnov(_v, 1)); _ck(_v, 3, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.itemsList.markedItem; _ck(_v, 0, 0, currVal_0); }); }
function View_NgSelectComponent_17(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ng-option ng-option-disabled"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.notFoundText; _ck(_v, 1, 0, currVal_0); }); }
function View_NgSelectComponent_18(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgSelectComponent_16(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(0, [["defaultNotFoundTemplate", 2]], null, 0, null, View_NgSelectComponent_17)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_NgSelectComponent_18)), i0.ɵdid(3, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(4, { searchTerm: 0 }), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 4, 0, _co.filterValue); var currVal_1 = (_co.notFoundTemplate || i0.ɵnov(_v, 1)); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_NgSelectComponent_20(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ng-option ng-option-disabled"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.typeToSearchText; _ck(_v, 1, 0, currVal_0); }); }
function View_NgSelectComponent_21(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgSelectComponent_19(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(0, [["defaultTypeToSearchTemplate", 2]], null, 0, null, View_NgSelectComponent_20)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgSelectComponent_21)), i0.ɵdid(3, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.typeToSearchTemplate || i0.ɵnov(_v, 1)); _ck(_v, 3, 0, currVal_0); }, null); }
function View_NgSelectComponent_23(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ng-option ng-option-disabled"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loadingText; _ck(_v, 1, 0, currVal_0); }); }
function View_NgSelectComponent_24(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgSelectComponent_22(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(0, [["defaultLoadingTextTemplate", 2]], null, 0, null, View_NgSelectComponent_23)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_NgSelectComponent_24)), i0.ɵdid(3, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(4, { searchTerm: 0 }), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 4, 0, _co.filterValue); var currVal_1 = (_co.loadingTextTemplate || i0.ɵnov(_v, 1)); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_NgSelectComponent_9(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 13, "ng-dropdown-panel", [["class", "ng-dropdown-panel"]], [[2, "ng-select-multiple", null], [8, "id", 0]], [[null, "update"], [null, "scroll"], [null, "scrollToEnd"], [null, "outsideClick"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2).handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("update" === en)) {
        var pd_1 = ((_co.viewPortItems = $event) !== false);
        ad = (pd_1 && ad);
    } if (("scroll" === en)) {
        var pd_2 = (_co.scroll.emit($event) !== false);
        ad = (pd_2 && ad);
    } if (("scrollToEnd" === en)) {
        var pd_3 = (_co.scrollToEnd.emit($event) !== false);
        ad = (pd_3 && ad);
    } if (("outsideClick" === en)) {
        var pd_4 = (_co.close() !== false);
        ad = (pd_4 && ad);
    } return ad; }, View_ɵn_0, RenderType_ɵn)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵdid(2, 1818624, [[1, 4]], 0, i1.ɵn, [i0.Renderer2, i0.NgZone, i1.ɵo, i1.ɵp, i0.ElementRef, [2, i2.DOCUMENT]], { items: [0, "items"], markedItem: [1, "markedItem"], position: [2, "position"], appendTo: [3, "appendTo"], bufferAmount: [4, "bufferAmount"], virtualScroll: [5, "virtualScroll"], headerTemplate: [6, "headerTemplate"], footerTemplate: [7, "footerTemplate"], filterValue: [8, "filterValue"] }, { update: "update", scroll: "scroll", scrollToEnd: "scrollToEnd", outsideClick: "outsideClick" }), (_l()(), i0.ɵeld(3, 0, null, 0, 4, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgSelectComponent_10)), i0.ɵdid(5, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgSelectComponent_13)), i0.ɵdid(7, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_NgSelectComponent_16)), i0.ɵdid(9, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_NgSelectComponent_19)), i0.ɵdid(11, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_NgSelectComponent_22)), i0.ɵdid(13, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "ng-dropdown-panel"; var currVal_3 = (_co.appendTo ? _co.classes : null); _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_4 = _co.itemsList.filteredItems; var currVal_5 = _co.itemsList.markedItem; var currVal_6 = _co.dropdownPosition; var currVal_7 = _co.appendTo; var currVal_8 = _co.bufferAmount; var currVal_9 = _co.virtualScroll; var currVal_10 = _co.headerTemplate; var currVal_11 = _co.footerTemplate; var currVal_12 = _co.filterValue; _ck(_v, 2, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_13 = _co.viewPortItems; _ck(_v, 5, 0, currVal_13); var currVal_14 = _co.showAddTag; _ck(_v, 7, 0, currVal_14); var currVal_15 = _co.showNoItemsFound(); _ck(_v, 9, 0, currVal_15); var currVal_16 = _co.showTypeToSearch(); _ck(_v, 11, 0, currVal_16); var currVal_17 = (_co.loading && (_co.itemsList.filteredItems.length === 0)); _ck(_v, 13, 0, currVal_17); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.multiple; var currVal_1 = _co.dropdownId; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_NgSelectComponent_0(_l) { return i0.ɵvid(2, [i0.ɵqud(671088640, 1, { dropdownPanel: 0 }), i0.ɵqud(402653184, 2, { filterInput: 0 }), (_l()(), i0.ɵeld(2, 0, null, null, 15, "div", [["class", "ng-select-container"]], [[2, "ng-has-value", null]], [[null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_co.handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 8, "div", [["class", "ng-value-container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 1, "div", [["class", "ng-placeholder"]], null, null, null, null, null)), (_l()(), i0.ɵted(5, null, ["", ""])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgSelectComponent_1)), i0.ɵdid(7, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgSelectComponent_5)), i0.ɵdid(9, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(10, 0, null, null, 1, "div", [["class", "ng-input"]], null, null, null, null, null)), (_l()(), i0.ɵeld(11, 0, [[2, 0], ["filterInput", 1]], null, 0, "input", [["role", "combobox"], ["type", "text"]], [[1, "autocomplete", 0], [1, "id", 0], [1, "tabindex", 0], [1, "autocorrect", 0], [1, "autocapitalize", 0], [8, "readOnly", 0], [8, "disabled", 0], [8, "value", 0], [1, "aria-expanded", 0], [1, "aria-owns", 0], [1, "aria-activedescendant", 0]], [[null, "input"], [null, "focus"], [null, "blur"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_co.filter(i0.ɵnov(_v, 11).value) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_co.onInputFocus($event) !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (_co.onInputBlur($event) !== false);
        ad = (pd_2 && ad);
    } if (("change" === en)) {
        var pd_3 = ($event.stopPropagation() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgSelectComponent_7)), i0.ɵdid(13, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgSelectComponent_8)), i0.ɵdid(15, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(16, 0, null, null, 1, "span", [["class", "ng-arrow-wrapper"]], null, null, null, null, null)), (_l()(), i0.ɵeld(17, 0, null, null, 0, "span", [["class", "ng-arrow"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgSelectComponent_9)), i0.ɵdid(19, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = (!_co.multiLabelTemplate && (_co.selectedItems.length > 0)); _ck(_v, 7, 0, currVal_2); var currVal_3 = (_co.multiLabelTemplate && (_co.selectedValues.length > 0)); _ck(_v, 9, 0, currVal_3); var currVal_15 = _co.loading; _ck(_v, 13, 0, currVal_15); var currVal_16 = _co.showClear(); _ck(_v, 15, 0, currVal_16); var currVal_17 = _co.isOpen; _ck(_v, 19, 0, currVal_17); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hasValue; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.placeholder; _ck(_v, 5, 0, currVal_1); var currVal_4 = (_co.labelForId ? "off" : _co.dropdownId); var currVal_5 = _co.labelForId; var currVal_6 = _co.tabIndex; var currVal_7 = _co.autoCorrect; var currVal_8 = _co.autoCapitalize; var currVal_9 = !_co.searchable; var currVal_10 = _co.disabled; var currVal_11 = (_co.filterValue ? _co.filterValue : ""); var currVal_12 = _co.isOpen; var currVal_13 = (_co.isOpen ? _co.dropdownId : null); var currVal_14 = (_co.isOpen ? ((_co.itemsList == null) ? null : ((_co.itemsList.markedItem == null) ? null : _co.itemsList.markedItem.htmlId)) : null); _ck(_v, 11, 1, [currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14]); }); }
exports.View_NgSelectComponent_0 = View_NgSelectComponent_0;
function View_NgSelectComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 13, "ng-select", [["class", "ng-select"], ["role", "listbox"]], [[2, "ng-select-single", null], [2, "ng-select-typeahead", null], [2, "ng-select-multiple", null], [2, "ng-select-taggable", null], [2, "ng-select-searchable", null], [2, "ng-select-opened", null], [2, "ng-select-disabled", null], [2, "ng-select-filtered", null]], [[null, "keydown"]], function (_v, en, $event) { var ad = true; if (("keydown" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2).handleKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_NgSelectComponent_0, RenderType_NgSelectComponent)), i0.ɵprd(5120, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.NgSelectComponent]), i0.ɵdid(2, 4964352, null, 11, i1.NgSelectComponent, [[8, null], [8, null], [8, null], i1.NgSelectConfig, i1.SELECTION_MODEL_FACTORY, i0.ElementRef, i0.ChangeDetectorRef, i1.ɵr], null, null), i0.ɵqud(335544320, 1, { optionTemplate: 0 }), i0.ɵqud(335544320, 2, { optgroupTemplate: 0 }), i0.ɵqud(335544320, 3, { labelTemplate: 0 }), i0.ɵqud(335544320, 4, { multiLabelTemplate: 0 }), i0.ɵqud(335544320, 5, { headerTemplate: 0 }), i0.ɵqud(335544320, 6, { footerTemplate: 0 }), i0.ɵqud(335544320, 7, { notFoundTemplate: 0 }), i0.ɵqud(335544320, 8, { typeToSearchTemplate: 0 }), i0.ɵqud(335544320, 9, { loadingTextTemplate: 0 }), i0.ɵqud(335544320, 10, { tagTemplate: 0 }), i0.ɵqud(603979776, 11, { ngOptions: 1 })], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = !i0.ɵnov(_v, 2).multiple; var currVal_1 = i0.ɵnov(_v, 2).typeahead; var currVal_2 = i0.ɵnov(_v, 2).multiple; var currVal_3 = i0.ɵnov(_v, 2).addTag; var currVal_4 = i0.ɵnov(_v, 2).searchable; var currVal_5 = i0.ɵnov(_v, 2).isOpen; var currVal_6 = i0.ɵnov(_v, 2).disabled; var currVal_7 = i0.ɵnov(_v, 2).filtered; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
exports.View_NgSelectComponent_Host_0 = View_NgSelectComponent_Host_0;
var NgSelectComponentNgFactory = i0.ɵccf("ng-select", i1.NgSelectComponent, View_NgSelectComponent_Host_0, { bindLabel: "bindLabel", bindValue: "bindValue", clearable: "clearable", markFirst: "markFirst", placeholder: "placeholder", notFoundText: "notFoundText", typeToSearchText: "typeToSearchText", addTagText: "addTagText", loadingText: "loadingText", clearAllText: "clearAllText", dropdownPosition: "dropdownPosition", appendTo: "appendTo", loading: "loading", closeOnSelect: "closeOnSelect", hideSelected: "hideSelected", selectOnTab: "selectOnTab", openOnEnter: "openOnEnter", maxSelectedItems: "maxSelectedItems", groupBy: "groupBy", groupValue: "groupValue", bufferAmount: "bufferAmount", virtualScroll: "virtualScroll", selectableGroup: "selectableGroup", selectableGroupAsModel: "selectableGroupAsModel", searchFn: "searchFn", excludeGroupsFromDefaultSelection: "excludeGroupsFromDefaultSelection", clearOnBackspace: "clearOnBackspace", labelForId: "labelForId", autoCorrect: "autoCorrect", autoCapitalize: "autoCapitalize", typeahead: "typeahead", multiple: "multiple", addTag: "addTag", searchable: "searchable", isOpen: "isOpen", items: "items", compareWith: "compareWith", clearSearchOnAdd: "clearSearchOnAdd" }, { blurEvent: "blur", focusEvent: "focus", changeEvent: "change", openEvent: "open", closeEvent: "close", searchEvent: "search", clearEvent: "clear", addEvent: "add", removeEvent: "remove", scroll: "scroll", scrollToEnd: "scrollToEnd" }, []);
exports.NgSelectComponentNgFactory = NgSelectComponentNgFactory;
var styles_ɵn = [];
var RenderType_ɵn = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵn, data: {} });
exports.RenderType_ɵn = RenderType_ɵn;
function View_ɵn_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["class", "ng-dropdown-header"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 16777216, null, null, 2, null, null, null, null, null, null, null)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(3, { searchTerm: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _co.filterValue); var currVal_1 = _co.headerTemplate; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_ɵn_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["class", "ng-dropdown-footer"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 16777216, null, null, 2, null, null, null, null, null, null, null)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(3, { searchTerm: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _co.filterValue); var currVal_1 = _co.footerTemplate; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_ɵn_0(_l) { return i0.ɵvid(2, [i0.ɵqud(402653184, 1, { contentElementRef: 0 }), i0.ɵqud(402653184, 2, { scrollElementRef: 0 }), i0.ɵqud(402653184, 3, { paddingElementRef: 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ɵn_1)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(5, 0, [[2, 0], ["scroll", 1]], null, 3, "div", [["class", "ng-dropdown-panel-items scroll-host"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, [[3, 0], ["padding", 1]], null, 0, "div", [], [[2, "total-padding", null]], null, null, null, null)), (_l()(), i0.ɵeld(7, 0, [[1, 0], ["content", 1]], null, 1, "div", [], [[2, "scrollable-content", null]], null, null, null, null)), i0.ɵncd(null, 0), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ɵn_2)), i0.ɵdid(10, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.headerTemplate; _ck(_v, 4, 0, currVal_0); var currVal_3 = _co.footerTemplate; _ck(_v, 10, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.virtualScroll; _ck(_v, 6, 0, currVal_1); var currVal_2 = (_co.virtualScroll && (_co.items.length > 0)); _ck(_v, 7, 0, currVal_2); }); }
exports.View_ɵn_0 = View_ɵn_0;
function View_ɵn_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-dropdown-panel", [], null, [[null, "mousedown"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ɵn_0, RenderType_ɵn)), i0.ɵdid(1, 1818624, null, 0, i1.ɵn, [i0.Renderer2, i0.NgZone, i1.ɵo, i1.ɵp, i0.ElementRef, [2, i2.DOCUMENT]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵn_Host_0 = View_ɵn_Host_0;
var ɵnNgFactory = i0.ɵccf("ng-dropdown-panel", i1.ɵn, View_ɵn_Host_0, { items: "items", markedItem: "markedItem", position: "position", appendTo: "appendTo", bufferAmount: "bufferAmount", virtualScroll: "virtualScroll", headerTemplate: "headerTemplate", footerTemplate: "footerTemplate", filterValue: "filterValue" }, { update: "update", scroll: "scroll", scrollToEnd: "scrollToEnd", outsideClick: "outsideClick" }, ["*"]);
exports.ɵnNgFactory = ɵnNgFactory;
var styles_ɵq = [];
var RenderType_ɵq = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵq, data: {} });
exports.RenderType_ɵq = RenderType_ɵq;
function View_ɵq_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
exports.View_ɵq_0 = View_ɵq_0;
function View_ɵq_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-option", [], null, null, null, View_ɵq_0, RenderType_ɵq)), i0.ɵdid(1, 573440, null, 0, i1.ɵq, [i0.ElementRef], null, null)], null, null); }
exports.View_ɵq_Host_0 = View_ɵq_Host_0;
var ɵqNgFactory = i0.ɵccf("ng-option", i1.ɵq, View_ɵq_Host_0, { value: "value", disabled: "disabled" }, {}, ["*"]);
exports.ɵqNgFactory = ɵqNgFactory;


/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ngx-bootstrap/dropdown */ "ngx-bootstrap/dropdown");
var BsDropdownModuleNgFactory = i0.ɵcmf(i1.BsDropdownModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [BsDropdownContainerComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.BsDropdownModule, i1.BsDropdownModule, [])]); });
exports.BsDropdownModuleNgFactory = BsDropdownModuleNgFactory;
var styles_BsDropdownContainerComponent = [];
var RenderType_BsDropdownContainerComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_BsDropdownContainerComponent, data: {} });
exports.RenderType_BsDropdownContainerComponent = RenderType_BsDropdownContainerComponent;
function View_BsDropdownContainerComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [], [[2, "dropup", null], [2, "dropdown", null], [2, "show", null], [2, "open", null]], null, null, null, null)), i0.ɵncd(null, 0)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.direction === "up"); var currVal_1 = (_co.direction === "down"); var currVal_2 = _co.isOpen; var currVal_3 = _co.isOpen; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
exports.View_BsDropdownContainerComponent_0 = View_BsDropdownContainerComponent_0;
function View_BsDropdownContainerComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "bs-dropdown-container", [["style", "display:block;position: absolute;"]], null, null, null, View_BsDropdownContainerComponent_0, RenderType_BsDropdownContainerComponent)), i0.ɵdid(1, 180224, null, 0, i1.BsDropdownContainerComponent, [i1.BsDropdownState, i0.ChangeDetectorRef, i0.Renderer2, i0.ElementRef], null, null)], null, null); }
exports.View_BsDropdownContainerComponent_Host_0 = View_BsDropdownContainerComponent_Host_0;
var BsDropdownContainerComponentNgFactory = i0.ɵccf("bs-dropdown-container", i1.BsDropdownContainerComponent, View_BsDropdownContainerComponent_Host_0, {}, {}, ["*"]);
exports.BsDropdownContainerComponentNgFactory = BsDropdownContainerComponentNgFactory;


/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/ngx-bootstrap-modal.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/ngx-bootstrap-modal.ngfactory.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ngx-bootstrap/modal */ "ngx-bootstrap/modal");
var ModalModuleNgFactory = i0.ɵcmf(i1.ModalModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.ModalModule, i1.ModalModule, [])]); });
exports.ModalModuleNgFactory = ModalModuleNgFactory;
var styles_ModalContainerComponent = [];
var RenderType_ModalContainerComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ModalContainerComponent, data: {} });
exports.RenderType_ModalContainerComponent = RenderType_ModalContainerComponent;
function View_ModalContainerComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["role", "document"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "modal-content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ("modal-dialog" + (_co.config.class ? (" " + _co.config.class) : "")); _ck(_v, 0, 0, currVal_0); }); }
exports.View_ModalContainerComponent_0 = View_ModalContainerComponent_0;
function View_ModalContainerComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "modal-container", [["class", "modal"], ["role", "dialog"], ["tabindex", "-1"]], [[1, "aria-modal", 0]], [[null, "click"], ["window", "keydown.esc"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:keydown.esc" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1).onEsc($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_ModalContainerComponent_0, RenderType_ModalContainerComponent)), i0.ɵdid(1, 245760, null, 0, i1.ModalContainerComponent, [i1.ModalOptions, i0.ElementRef, i0.Renderer2], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = true; _ck(_v, 0, 0, currVal_0); }); }
exports.View_ModalContainerComponent_Host_0 = View_ModalContainerComponent_Host_0;
var ModalContainerComponentNgFactory = i0.ɵccf("modal-container", i1.ModalContainerComponent, View_ModalContainerComponent_Host_0, {}, {}, ["*"]);
exports.ModalContainerComponentNgFactory = ModalContainerComponentNgFactory;
var styles_ModalBackdropComponent = [];
var RenderType_ModalBackdropComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ModalBackdropComponent, data: {} });
exports.RenderType_ModalBackdropComponent = RenderType_ModalBackdropComponent;
function View_ModalBackdropComponent_0(_l) { return i0.ɵvid(0, [], null, null); }
exports.View_ModalBackdropComponent_0 = View_ModalBackdropComponent_0;
function View_ModalBackdropComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "bs-modal-backdrop", [["class", "modal-backdrop"]], null, null, null, View_ModalBackdropComponent_0, RenderType_ModalBackdropComponent)), i0.ɵdid(1, 114688, null, 0, i1.ModalBackdropComponent, [i0.ElementRef, i0.Renderer2], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ModalBackdropComponent_Host_0 = View_ModalBackdropComponent_Host_0;
var ModalBackdropComponentNgFactory = i0.ɵccf("bs-modal-backdrop", i1.ModalBackdropComponent, View_ModalBackdropComponent_Host_0, {}, {}, []);
exports.ModalBackdropComponentNgFactory = ModalBackdropComponentNgFactory;


/***/ }),

/***/ "./node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ngx-bootstrap/tabs */ "ngx-bootstrap/tabs");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var TabsModuleNgFactory = i0.ɵcmf(i1.TabsModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.TabsModule, i1.TabsModule, [])]); });
exports.TabsModuleNgFactory = TabsModuleNgFactory;
var styles_TabsetComponent = [];
var RenderType_TabsetComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_TabsetComponent, data: {} });
exports.RenderType_TabsetComponent = RenderType_TabsetComponent;
function View_TabsetComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "bs-remove-tab"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        $event.preventDefault();
        var pd_0 = (_co.removeTab(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, [" \u274C"]))], null, null); }
function View_TabsetComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "li", [], [[2, "active", null], [2, "disabled", null]], null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵpad(2, 2), (_l()(), i0.ɵeld(3, 0, null, null, 5, "a", [["class", "nav-link"], ["href", "javascript:void(0);"]], [[1, "id", 0], [2, "active", null], [2, "disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = ((_v.context.$implicit.active = true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(4, 16777216, null, null, 2, "span", [], null, null, null, null, null)), i0.ɵdid(5, 16384, null, 0, i1.NgTranscludeDirective, [i0.ViewContainerRef], { ngTransclude: [0, "ngTransclude"] }, null), (_l()(), i0.ɵted(6, null, ["", ""])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TabsetComponent_2)), i0.ɵdid(8, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 2, 0, "nav-item", (_v.context.$implicit.customClass || "")); _ck(_v, 1, 0, currVal_2); var currVal_6 = _v.context.$implicit.headingRef; _ck(_v, 5, 0, currVal_6); var currVal_8 = _v.context.$implicit.removable; _ck(_v, 8, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.active; var currVal_1 = _v.context.$implicit.disabled; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = (_v.context.$implicit.id ? (_v.context.$implicit.id + "-link") : ""); var currVal_4 = _v.context.$implicit.active; var currVal_5 = _v.context.$implicit.disabled; _ck(_v, 3, 0, currVal_3, currVal_4, currVal_5); var currVal_7 = _v.context.$implicit.heading; _ck(_v, 6, 0, currVal_7); }); }
function View_TabsetComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "ul", [["class", "nav"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = ($event.preventDefault() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TabsetComponent_1)), i0.ɵdid(3, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(4, 0, null, null, 1, "div", [["class", "tab-content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "nav"; var currVal_1 = _co.classMap; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.tabs; _ck(_v, 3, 0, currVal_2); }, null); }
exports.View_TabsetComponent_0 = View_TabsetComponent_0;
function View_TabsetComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "tabset", [], [[2, "tab-container", null]], null, null, View_TabsetComponent_0, RenderType_TabsetComponent)), i0.ɵdid(1, 180224, null, 0, i1.TabsetComponent, [i1.TabsetConfig, i0.Renderer2], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).clazz; _ck(_v, 0, 0, currVal_0); }); }
exports.View_TabsetComponent_Host_0 = View_TabsetComponent_Host_0;
var TabsetComponentNgFactory = i0.ɵccf("tabset", i1.TabsetComponent, View_TabsetComponent_Host_0, { vertical: "vertical", justified: "justified", type: "type" }, {}, ["*"]);
exports.TabsetComponentNgFactory = TabsetComponentNgFactory;


/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/ngx-bootstrap-tooltip.ngfactory.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/ngx-bootstrap-tooltip.ngfactory.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ngx-bootstrap/tooltip */ "ngx-bootstrap/tooltip");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var TooltipModuleNgFactory = i0.ɵcmf(i1.TooltipModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [TooltipContainerComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.TooltipModule, i1.TooltipModule, [])]); });
exports.TooltipModuleNgFactory = TooltipModuleNgFactory;
var styles_TooltipContainerComponent = [".tooltip[_nghost-%COMP%] {\n      display: block;\n      pointer-events: none;\n    }\n    .bs-tooltip-top[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-bottom[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      left: 50%;\n      transform: translateX(-50%);\n    }\n    .bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      top: 50%;\n      transform: translateY(-50%);\n    }"];
var RenderType_TooltipContainerComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_TooltipContainerComponent, data: {} });
exports.RenderType_TooltipContainerComponent = RenderType_TooltipContainerComponent;
function View_TooltipContainerComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "tooltip-arrow arrow"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "tooltip-inner"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
exports.View_TooltipContainerComponent_0 = View_TooltipContainerComponent_0;
function View_TooltipContainerComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "bs-tooltip-container", [["role", "tooltip"]], [[8, "className", 0], [2, "show", null], [1, "id", 0]], null, null, View_TooltipContainerComponent_0, RenderType_TooltipContainerComponent)), i0.ɵdid(1, 4243456, null, 0, i1.TooltipContainerComponent, [i1.TooltipConfig], null, null)], null, function (_ck, _v) { var currVal_0 = (((((((("tooltip in tooltip-" + i0.ɵnov(_v, 1).placement) + " ") + "bs-tooltip-") + i0.ɵnov(_v, 1).placement) + " ") + i0.ɵnov(_v, 1).placement) + " ") + i0.ɵnov(_v, 1).containerClass); var currVal_1 = !i0.ɵnov(_v, 1).isBs3; var currVal_2 = i0.ɵnov(_v, 1).id; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
exports.View_TooltipContainerComponent_Host_0 = View_TooltipContainerComponent_Host_0;
var TooltipContainerComponentNgFactory = i0.ɵccf("bs-tooltip-container", i1.TooltipContainerComponent, View_TooltipContainerComponent_Host_0, {}, {}, ["*"]);
exports.TooltipContainerComponentNgFactory = TooltipContainerComponentNgFactory;


/***/ }),

/***/ "./node_modules/ngx-slick-carousel/ngx-slick-carousel.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-slick-carousel/ngx-slick-carousel.ngfactory.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ngx-slick-carousel */ "ngx-slick-carousel");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var SlickCarouselModuleNgFactory = i0.ɵcmf(i1.SlickCarouselModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.SlickCarouselModule, i1.SlickCarouselModule, [])]); });
exports.SlickCarouselModuleNgFactory = SlickCarouselModuleNgFactory;
var styles_SlickCarouselComponent = [];
var RenderType_SlickCarouselComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SlickCarouselComponent, data: {} });
exports.RenderType_SlickCarouselComponent = RenderType_SlickCarouselComponent;
function View_SlickCarouselComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
exports.View_SlickCarouselComponent_0 = View_SlickCarouselComponent_0;
function View_SlickCarouselComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ngx-slick-carousel", [], null, null, null, View_SlickCarouselComponent_0, RenderType_SlickCarouselComponent)), i0.ɵprd(5120, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.SlickCarouselComponent]), i0.ɵdid(2, 13287424, null, 0, i1.SlickCarouselComponent, [i0.ElementRef, i0.NgZone], null, null)], null, null); }
exports.View_SlickCarouselComponent_Host_0 = View_SlickCarouselComponent_Host_0;
var SlickCarouselComponentNgFactory = i0.ɵccf("ngx-slick-carousel", i1.SlickCarouselComponent, View_SlickCarouselComponent_Host_0, { config: "config" }, { afterChange: "afterChange", beforeChange: "beforeChange", breakpoint: "breakpoint", destroy: "destroy", init: "init" }, ["*"]);
exports.SlickCarouselComponentNgFactory = SlickCarouselComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./root-shared/components/header-component/header.component.ngfactory */ "./src/app/root-shared/components/header-component/header.component.ngfactory.js");
var i2 = __webpack_require__(/*! ./root-shared/components/header-component/header.component */ "./src/app/root-shared/components/header-component/header.component.ts");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! ./root-shared/components/scroll-top-component/scroll-top.component.ngfactory */ "./src/app/root-shared/components/scroll-top-component/scroll-top.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./root-shared/components/scroll-top-component/scroll-top.component */ "./src/app/root-shared/components/scroll-top-component/scroll-top.component.ts");
var i6 = __webpack_require__(/*! ./root-shared/components/form-success/form-success.component.ngfactory */ "./src/app/root-shared/components/form-success/form-success.component.ngfactory.js");
var i7 = __webpack_require__(/*! ./root-shared/components/form-success/form-success.component */ "./src/app/root-shared/components/form-success/form-success.component.ts");
var i8 = __webpack_require__(/*! ./root-shared/services/global.service */ "./src/app/root-shared/services/global.service.ts");
var i9 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i10 = __webpack_require__(/*! angulartics2/ga */ "angulartics2/ga");
var i11 = __webpack_require__(/*! angulartics2/gtm */ "angulartics2/gtm");
var styles_AppComponent = [];
var RenderType_AppComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "header-component", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_HeaderComponent_0, i1.RenderType_HeaderComponent)), i0.ɵdid(1, 245760, null, 0, i2.HeaderComponent, [i3.ActivatedRoute, i3.Router, i0.Renderer], null, null), (_l()(), i0.ɵeld(2, 0, null, null, 2, "main", [["class", "main"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(4, 212992, null, 0, i3.RouterOutlet, [i3.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null), (_l()(), i0.ɵeld(5, 0, null, null, 1, "scroll-top-component", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i0.ɵnov(_v, 6).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i4.View_ScrollTopComponent_0, i4.RenderType_ScrollTopComponent)), i0.ɵdid(6, 49152, null, 0, i5.ScrollTopComponent, [], null, null), (_l()(), i0.ɵeld(7, 0, null, null, 1, "form-success-component", [], null, null, null, i6.View_FormSuccessComponent_0, i6.RenderType_FormSuccessComponent)), i0.ɵdid(8, 180224, null, 0, i7.FormSuccessComponent, [i8.GlobalService, i0.PLATFORM_ID], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 4, 0); }, null); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i0.ɵdid(1, 180224, null, 0, i9.AppComponent, [i10.Angulartics2GoogleAnalytics, i11.Angulartics2GoogleTagManager, i0.PLATFORM_ID], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i0.ɵccf("app-root", i9.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ga_1 = __webpack_require__(/*! angulartics2/ga */ "angulartics2/ga");
var gtm_1 = __webpack_require__(/*! angulartics2/gtm */ "angulartics2/gtm");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var AppComponent = /** @class */ (function () {
    function AppComponent(angulartics2GoogleAnalytics, angulartics2GoogleTagManager, platformId) {
        this.platformId = platformId;
        this.subscription = new rxjs_1.Subscription();
        if (common_1.isPlatformBrowser(this.platformId)) {
            angulartics2GoogleAnalytics.startTracking();
            angulartics2GoogleTagManager.startTracking();
        }
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @ngx-meta/core */ "@ngx-meta/core");
function metaFactory() {
    return new core_1.MetaStaticLoader({
        pageTitlePositioning: core_1.PageTitlePositioning.PrependPageTitle,
        defaults: {
            type: "article",
            site_name: "Smart Legal Resolution",
            title: "Юридическая консалтинговая группа SLR - Smart Legal Resolution",
            description: "Компания SLR предоставляет широкий спектр услуг для повышения эффективности деятельности компаний. Мы знаем ответы на многие вопросы, волнующие бизнес, и обладаем достаточной экспертизой в многих практиках.",
            url: "https://slr.legal",
            "og:image": "https://slr.legal/favicon.ico",
            "og:type": "article",
            "og:locale": "ru_RU"
        }
    });
}
exports.metaFactory = metaFactory;
var ɵ0 = {
    animatedLogo: true,
    meta: {
        title: "Юридическая консалтинговая группа SLR - Smart Legal Resolution",
        description: "Компания SLR предоставляет широкий спектр услуг для повышения эффективности деятельности компаний. Мы знаем ответы на многие вопросы, волнующие бизнес, и обладаем достаточной экспертизой в многих практиках.",
        url: "https://slr.legal"
    }
}, ɵ1 = {
    meta: {
        title: "О компании SLR - Smart Legal Resolution",
        description: "Мы не хуже и не лучше других, мы отличаемся от всех, мы – иные. Наша компания пропитана духом новаторства и авантюризма, работает в стиле асимметрии к действиям основных игроков, секторов и рынков. У нас другое видение, мы создаем новые бизнес-модели, ломаем правила и переворачиваем шахматные доски",
        url: "https://slr.legal/about"
    }
}, ɵ2 = {
    meta: {
        title: "Экспертизы и практики компании SLR - Smart Legal Resolution",
        description: "Компания SLR является профессионалами во многих юридических экспертизах и практиках, что позволяет эффективно и качественно решать задачи любого бизнеса в короткие сроки.",
        url: "https://slr.legal/expertise"
    }
}, ɵ3 = {
    meta: {
        title: "Карьера с SLR - Smart Legal Resolution",
        description: "Приглашаем к сотрудничеству людей, которые готовы к интересной и креативной работе. Если ты талантлив и эффективен, то ты тот кто нам нужен. Гарантируем возможности и перспективы интересной работы.",
        url: "https://slr.legal/career"
    }
}, ɵ4 = {
    meta: {
        url: "https://slr.legal/infocenter"
    }
}, ɵ5 = {
    hideMobBigLogo: true,
    meta: {
        title: "Контакты SLR - Smart Legal Resolution",
        description: "Контактные данные компании Smart Legal Resolution. Напиши нам info@slr.legal Телефон +38 098 8899 008",
        url: "https://slr.legal/contacts"
    }
}, ɵ6 = {
    meta: {
        title: "Индустрии SLR - Smart Legal Resolution",
        description: "Компания SLR обладает значительным опытом в консультировании большого количества индустрий бизнеса. Основными являются IT-компании, Call-центры, современное исскуство, а также многое другое",
        url: "https://slr.legal/industry"
    }
};
exports.ɵ0 = ɵ0;
exports.ɵ1 = ɵ1;
exports.ɵ2 = ɵ2;
exports.ɵ3 = ɵ3;
exports.ɵ4 = ɵ4;
exports.ɵ5 = ɵ5;
exports.ɵ6 = ɵ6;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i4 = __webpack_require__(/*! ../../node_modules/ngx-bootstrap/tooltip/ngx-bootstrap-tooltip.ngfactory */ "./node_modules/ngx-bootstrap/tooltip/ngx-bootstrap-tooltip.ngfactory.js");
var i5 = __webpack_require__(/*! ../../node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory */ "./node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory.js");
var i6 = __webpack_require__(/*! ../../node_modules/ngx-bootstrap/modal/ngx-bootstrap-modal.ngfactory */ "./node_modules/ngx-bootstrap/modal/ngx-bootstrap-modal.ngfactory.js");
var i7 = __webpack_require__(/*! ./pages/home-page/home-page.component.ngfactory */ "./src/app/pages/home-page/home-page.component.ngfactory.js");
var i8 = __webpack_require__(/*! ./pages/about-page/about-page.component.ngfactory */ "./src/app/pages/about-page/about-page.component.ngfactory.js");
var i9 = __webpack_require__(/*! ./pages/expertise-page/expertise-page.component.ngfactory */ "./src/app/pages/expertise-page/expertise-page.component.ngfactory.js");
var i10 = __webpack_require__(/*! ./pages/career-page/career-page.component.ngfactory */ "./src/app/pages/career-page/career-page.component.ngfactory.js");
var i11 = __webpack_require__(/*! ./pages/infocenter-page/infocenter-page.component.ngfactory */ "./src/app/pages/infocenter-page/infocenter-page.component.ngfactory.js");
var i12 = __webpack_require__(/*! ./pages/contacts-page/contacts-page.component.ngfactory */ "./src/app/pages/contacts-page/contacts-page.component.ngfactory.js");
var i13 = __webpack_require__(/*! ./pages/industry-page/industry-page.component.ngfactory */ "./src/app/pages/industry-page/industry-page.component.ngfactory.js");
var i14 = __webpack_require__(/*! ./pages/expertise-page/components/1_the-range-of-legal-practices/the-range-of-legal-practices.component.ngfactory */ "./src/app/pages/expertise-page/components/1_the-range-of-legal-practices/the-range-of-legal-practices.component.ngfactory.js");
var i15 = __webpack_require__(/*! ./pages/expertise-page/components/2_accounting/accounting.component.ngfactory */ "./src/app/pages/expertise-page/components/2_accounting/accounting.component.ngfactory.js");
var i16 = __webpack_require__(/*! ./pages/expertise-page/components/3_marketing-and-PR/marketing-and-pr.component.ngfactory */ "./src/app/pages/expertise-page/components/3_marketing-and-PR/marketing-and-pr.component.ngfactory.js");
var i17 = __webpack_require__(/*! ./pages/expertise-page/components/4_crisis-management/crisis-management.component.ngfactory */ "./src/app/pages/expertise-page/components/4_crisis-management/crisis-management.component.ngfactory.js");
var i18 = __webpack_require__(/*! ./pages/expertise-page/components/5_mediation/mediation.component.ngfactory */ "./src/app/pages/expertise-page/components/5_mediation/mediation.component.ngfactory.js");
var i19 = __webpack_require__(/*! ./pages/expertise-page/components/6_security-consulting/security-consulting.component.ngfactory */ "./src/app/pages/expertise-page/components/6_security-consulting/security-consulting.component.ngfactory.js");
var i20 = __webpack_require__(/*! ./pages/expertise-page/components/7_trashshuting/trashshuting.component.ngfactory */ "./src/app/pages/expertise-page/components/7_trashshuting/trashshuting.component.ngfactory.js");
var i21 = __webpack_require__(/*! ./pages/expertise-page/components/8_other-services/other-services.component.ngfactory */ "./src/app/pages/expertise-page/components/8_other-services/other-services.component.ngfactory.js");
var i22 = __webpack_require__(/*! ./pages/industry-page/components/1_it-companies/it-companies.component.ngfactory */ "./src/app/pages/industry-page/components/1_it-companies/it-companies.component.ngfactory.js");
var i23 = __webpack_require__(/*! ./pages/industry-page/components/2_call-centers/call-centers.component.ngfactory */ "./src/app/pages/industry-page/components/2_call-centers/call-centers.component.ngfactory.js");
var i24 = __webpack_require__(/*! ./pages/industry-page/components/3_сreative-class/сreative-class.component.ngfactory */ "./src/app/pages/industry-page/components/3_сreative-class/сreative-class.component.ngfactory.js");
var i25 = __webpack_require__(/*! ./pages/industry-page/components/4_real-sector-economy/real-sector-economy.component.ngfactory */ "./src/app/pages/industry-page/components/4_real-sector-economy/real-sector-economy.component.ngfactory.js");
var i26 = __webpack_require__(/*! ./pages/industry-page/components/5_clients-of-ukrainian-outsourcing-companies/clients-of-ukrainian-outsourcing-companies.component.ngfactory */ "./src/app/pages/industry-page/components/5_clients-of-ukrainian-outsourcing-companies/clients-of-ukrainian-outsourcing-companies.component.ngfactory.js");
var i27 = __webpack_require__(/*! ./pages/industry-page/components/6_accompanying-intergenerational-business/accompanying-intergenerational-business.component.ngfactory */ "./src/app/pages/industry-page/components/6_accompanying-intergenerational-business/accompanying-intergenerational-business.component.ngfactory.js");
var i28 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i29 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i30 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i31 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i32 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i33 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i34 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i35 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i36 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i37 = __webpack_require__(/*! ngx-bootstrap/tooltip */ "ngx-bootstrap/tooltip");
var i38 = __webpack_require__(/*! ngx-bootstrap/positioning */ "ngx-bootstrap/positioning");
var i39 = __webpack_require__(/*! ngx-bootstrap/component-loader */ "ngx-bootstrap/component-loader");
var i40 = __webpack_require__(/*! ngx-bootstrap/dropdown */ "ngx-bootstrap/dropdown");
var i41 = __webpack_require__(/*! @ngx-meta/core */ "@ngx-meta/core");
var i42 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var i43 = __webpack_require__(/*! ./root-shared/services/link-service */ "./src/app/root-shared/services/link-service.ts");
var i44 = __webpack_require__(/*! ./root-shared/guards/link.guard */ "./src/app/root-shared/guards/link.guard.ts");
var i45 = __webpack_require__(/*! ngx-bootstrap/tabs */ "ngx-bootstrap/tabs");
var i46 = __webpack_require__(/*! ngx-bootstrap/modal */ "ngx-bootstrap/modal");
var i47 = __webpack_require__(/*! @agm/core/utils/browser-globals */ "@agm/core/utils/browser-globals");
var i48 = __webpack_require__(/*! @agm/core/services/maps-api-loader/maps-api-loader */ "@agm/core/services/maps-api-loader/maps-api-loader");
var i49 = __webpack_require__(/*! @agm/core/services/maps-api-loader/lazy-maps-api-loader */ "@agm/core/services/maps-api-loader/lazy-maps-api-loader");
var i50 = __webpack_require__(/*! angulartics2 */ "angulartics2");
var i51 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i52 = __webpack_require__(/*! ./root-shared/services/global.service */ "./src/app/root-shared/services/global.service.ts");
var i53 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i54 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i55 = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
var i56 = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
var i57 = __webpack_require__(/*! ./pages/expertise-page/expertise-page.component */ "./src/app/pages/expertise-page/expertise-page.component.ts");
var i58 = __webpack_require__(/*! ./pages/career-page/career-page.component */ "./src/app/pages/career-page/career-page.component.ts");
var i59 = __webpack_require__(/*! ./pages/infocenter-page/infocenter-page.component */ "./src/app/pages/infocenter-page/infocenter-page.component.ts");
var i60 = __webpack_require__(/*! ./pages/contacts-page/contacts-page.component */ "./src/app/pages/contacts-page/contacts-page.component.ts");
var i61 = __webpack_require__(/*! ./pages/industry-page/industry-page.component */ "./src/app/pages/industry-page/industry-page.component.ts");
var i62 = __webpack_require__(/*! ./pages/expertise-page/components/1_the-range-of-legal-practices/the-range-of-legal-practices.component */ "./src/app/pages/expertise-page/components/1_the-range-of-legal-practices/the-range-of-legal-practices.component.ts");
var i63 = __webpack_require__(/*! ./pages/expertise-page/components/2_accounting/accounting.component */ "./src/app/pages/expertise-page/components/2_accounting/accounting.component.ts");
var i64 = __webpack_require__(/*! ./pages/expertise-page/components/3_marketing-and-PR/marketing-and-pr.component */ "./src/app/pages/expertise-page/components/3_marketing-and-PR/marketing-and-pr.component.ts");
var i65 = __webpack_require__(/*! ./pages/expertise-page/components/4_crisis-management/crisis-management.component */ "./src/app/pages/expertise-page/components/4_crisis-management/crisis-management.component.ts");
var i66 = __webpack_require__(/*! ./pages/expertise-page/components/5_mediation/mediation.component */ "./src/app/pages/expertise-page/components/5_mediation/mediation.component.ts");
var i67 = __webpack_require__(/*! ./pages/expertise-page/components/6_security-consulting/security-consulting.component */ "./src/app/pages/expertise-page/components/6_security-consulting/security-consulting.component.ts");
var i68 = __webpack_require__(/*! ./pages/expertise-page/components/7_trashshuting/trashshuting.component */ "./src/app/pages/expertise-page/components/7_trashshuting/trashshuting.component.ts");
var i69 = __webpack_require__(/*! ./pages/expertise-page/components/8_other-services/other-services.component */ "./src/app/pages/expertise-page/components/8_other-services/other-services.component.ts");
var i70 = __webpack_require__(/*! ./pages/industry-page/components/1_it-companies/it-companies.component */ "./src/app/pages/industry-page/components/1_it-companies/it-companies.component.ts");
var i71 = __webpack_require__(/*! ./pages/industry-page/components/2_call-centers/call-centers.component */ "./src/app/pages/industry-page/components/2_call-centers/call-centers.component.ts");
var i72 = __webpack_require__(/*! ./pages/industry-page/components/3_сreative-class/сreative-class.component */ "./src/app/pages/industry-page/components/3_сreative-class/сreative-class.component.ts");
var i73 = __webpack_require__(/*! ./pages/industry-page/components/4_real-sector-economy/real-sector-economy.component */ "./src/app/pages/industry-page/components/4_real-sector-economy/real-sector-economy.component.ts");
var i74 = __webpack_require__(/*! ./pages/industry-page/components/5_clients-of-ukrainian-outsourcing-companies/clients-of-ukrainian-outsourcing-companies.component */ "./src/app/pages/industry-page/components/5_clients-of-ukrainian-outsourcing-companies/clients-of-ukrainian-outsourcing-companies.component.ts");
var i75 = __webpack_require__(/*! ./pages/industry-page/components/6_accompanying-intergenerational-business/accompanying-intergenerational-business.component */ "./src/app/pages/industry-page/components/6_accompanying-intergenerational-business/accompanying-intergenerational-business.component.ts");
var i76 = __webpack_require__(/*! @ng-select/ng-select */ "@ng-select/ng-select");
var i77 = __webpack_require__(/*! ng-lottie/dist/esm/src/lottieAnimationView.module */ "ng-lottie/dist/esm/src/lottieAnimationView.module");
var i78 = __webpack_require__(/*! ./root-shared/root-shared.module */ "./src/app/root-shared/root-shared.module.ts");
var i79 = __webpack_require__(/*! ngx-slick-carousel */ "ngx-slick-carousel");
var i80 = __webpack_require__(/*! @agm/core/core.module */ "@agm/core/core.module");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵEmptyOutletComponentNgFactory, i4.TooltipContainerComponentNgFactory, i5.BsDropdownContainerComponentNgFactory, i6.ModalBackdropComponentNgFactory, i6.ModalContainerComponentNgFactory, i7.HomePageComponentNgFactory, i8.AboutPageComponentNgFactory, i9.ExpertisePageComponentNgFactory, i10.CareerPageComponentNgFactory, i11.InfoCenterPageComponentNgFactory, i12.ContactsPageComponentNgFactory, i13.IndustryPageComponentNgFactory, i14.TheRangeOfLegalPracticesExpertiseComponentNgFactory, i15.AccountingExpertiseComponentNgFactory, i16.MarketingAndPRExpertiseComponentNgFactory, i17.CrisisManagementExpertiseComponentNgFactory, i18.MediationExpertiseComponentNgFactory, i19.SecurityConsultingExpertiseComponentNgFactory, i20.TrashshutingExpertiseComponentNgFactory, i21.OtherServicesExpertiseComponentNgFactory, i22.ItCompaniesIndustryComponentNgFactory, i23.CallCentersIndustryComponentNgFactory, i24.CreativeClassIndustryComponentNgFactory, i25.RealSectorEconomyIndustryComponentNgFactory, i26.ClientsOfUkrainianOutsourcingCompaniesIndustryComponentNgFactory, i27.AccompanyingIntergenerationalBusinessIndustryComponentNgFactory, i28.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_o, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i29.NgLocalization, i29.NgLocaleLocalization, [i0.LOCALE_ID, [2, i29.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_m, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_n, []), i0.ɵmpd(4608, i30.DomSanitizer, i30.ɵDomSanitizerImpl, [i29.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i30.DomSanitizer]), i0.ɵmpd(4608, i30.HAMMER_GESTURE_CONFIG, i30.HammerGestureConfig, []), i0.ɵmpd(5120, i30.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new i30.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i30.ɵKeyEventsPlugin(p1_0), new i30.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3), new i31.ɵangular_packages_platform_server_platform_server_d(p3_0)]; }, [i29.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i29.DOCUMENT, i29.DOCUMENT, i30.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i30.HAMMER_LOADER], i30.DOCUMENT]), i0.ɵmpd(4608, i30.EventManager, i30.EventManager, [i30.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i30.ɵDomSharedStylesHost, i30.ɵDomSharedStylesHost, [i29.DOCUMENT]), i0.ɵmpd(4608, i30.ɵDomRendererFactory2, i30.ɵDomRendererFactory2, [i30.EventManager, i30.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i31.ɵangular_packages_platform_server_platform_server_c, i31.ɵangular_packages_platform_server_platform_server_c, [i30.DOCUMENT, [2, i30.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i30.ɵSharedStylesHost, null, [i31.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i31.ɵServerRendererFactory2, i31.ɵServerRendererFactory2, [i30.EventManager, i0.NgZone, i30.DOCUMENT, i30.ɵSharedStylesHost]), i0.ɵmpd(4608, i32.AnimationDriver, i32.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i32.ɵAnimationStyleNormalizer, i33.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i32.ɵAnimationEngine, i33.ɵangular_packages_platform_browser_animations_animations_a, [i29.DOCUMENT, i32.AnimationDriver, i32.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i31.ɵangular_packages_platform_server_platform_server_a, [i31.ɵServerRendererFactory2, i32.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i34.AnimationBuilder, i33.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i30.DOCUMENT]), i0.ɵmpd(4608, i35.ɵangular_packages_forms_forms_j, i35.ɵangular_packages_forms_forms_j, []), i0.ɵmpd(4608, i35.FormBuilder, i35.FormBuilder, []), i0.ɵmpd(4608, i36.HttpXsrfTokenExtractor, i36.ɵangular_packages_common_http_http_g, [i29.DOCUMENT, i0.PLATFORM_ID, i36.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i36.ɵangular_packages_common_http_http_h, i36.ɵangular_packages_common_http_http_h, [i36.HttpXsrfTokenExtractor, i36.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i36.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i36.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i36.XhrFactory, i31.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i36.HttpXhrBackend, i36.HttpXhrBackend, [i36.XhrFactory]), i0.ɵmpd(6144, i36.HttpBackend, null, [i36.HttpXhrBackend]), i0.ɵmpd(5120, i36.HttpHandler, i31.ɵangular_packages_platform_server_platform_server_h, [i36.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i36.HttpClient, i36.HttpClient, [i36.HttpHandler]), i0.ɵmpd(4608, i36.ɵangular_packages_common_http_http_d, i36.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(4608, i37.TooltipConfig, i37.TooltipConfig, []), i0.ɵmpd(4608, i38.PositioningService, i38.PositioningService, []), i0.ɵmpd(4608, i39.ComponentLoaderFactory, i39.ComponentLoaderFactory, [i0.ComponentFactoryResolver, i0.NgZone, i0.Injector, i38.PositioningService, i0.ApplicationRef]), i0.ɵmpd(4608, i40.BsDropdownState, i40.BsDropdownState, []), i0.ɵmpd(5120, i41.MetaLoader, i42.metaFactory, []), i0.ɵmpd(4608, i41.MetaService, i41.MetaService, [i41.MetaLoader, i30.Title, i30.Meta]), i0.ɵmpd(4608, i41.MetaGuard, i41.MetaGuard, [i41.MetaService]), i0.ɵmpd(4608, i43.LinkService, i43.LinkService, [i0.RendererFactory2, i30.DOCUMENT]), i0.ɵmpd(4608, i44.LinkGuard, i44.LinkGuard, [i43.LinkService, i30.DOCUMENT]), i0.ɵmpd(4608, i45.TabsetConfig, i45.TabsetConfig, []), i0.ɵmpd(4608, i46.BsModalService, i46.BsModalService, [i0.RendererFactory2, i39.ComponentLoaderFactory]), i0.ɵmpd(4608, i47.WindowRef, i47.WindowRef, []), i0.ɵmpd(4608, i47.DocumentRef, i47.DocumentRef, []), i0.ɵmpd(4608, i48.MapsAPILoader, i49.LazyMapsAPILoader, [[2, i49.LAZY_MAPS_API_CONFIG], i47.WindowRef, i47.DocumentRef]), i0.ɵmpd(4608, i50.RouterlessTracking, i50.AngularRouterTracking, [i51.Router, i29.Location]), i0.ɵmpd(4608, i50.Angulartics2, i50.Angulartics2, [i50.RouterlessTracking, i50.ANGULARTICS2_TOKEN]), i0.ɵmpd(5120, i51.ActivatedRoute, i51.ɵangular_packages_router_router_g, [i51.Router]), i0.ɵmpd(4608, i51.NoPreloading, i51.NoPreloading, []), i0.ɵmpd(6144, i51.PreloadingStrategy, null, [i51.NoPreloading]), i0.ɵmpd(135680, i51.RouterPreloader, i51.RouterPreloader, [i51.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i51.PreloadingStrategy]), i0.ɵmpd(4608, i51.PreloadAllModules, i51.PreloadAllModules, []), i0.ɵmpd(4608, i29.ViewportScroller, i29.ɵNullViewportScroller, []), i0.ɵmpd(5120, i51.ɵangular_packages_router_router_n, i51.ɵangular_packages_router_router_c, [i51.Router, i29.ViewportScroller, i51.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i51.ROUTER_INITIALIZER, i51.ɵangular_packages_router_router_j, [i51.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i51.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i52.GlobalService, i52.GlobalService, []), i0.ɵmpd(4608, i53.BrowserXhr, i31.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i53.ResponseOptions, i53.BaseResponseOptions, []), i0.ɵmpd(4608, i53.XSRFStrategy, i31.ɵangular_packages_platform_server_platform_server_f, []), i0.ɵmpd(4608, i53.XHRBackend, i53.XHRBackend, [i53.BrowserXhr, i53.ResponseOptions, i53.XSRFStrategy]), i0.ɵmpd(4608, i53.RequestOptions, i53.BaseRequestOptions, []), i0.ɵmpd(5120, i53.Http, i31.ɵangular_packages_platform_server_platform_server_g, [i53.XHRBackend, i53.RequestOptions]), i0.ɵmpd(4608, i30.TransferState, i30.TransferState, []), i0.ɵmpd(5120, i31.BEFORE_APP_SERIALIZED, function (p0_0, p0_1, p0_2) { return [i31.ɵangular_packages_platform_server_platform_server_b(p0_0, p0_1, p0_2)]; }, [i30.DOCUMENT, i0.APP_ID, i30.TransferState]), i0.ɵmpd(1073742336, i29.CommonModule, i29.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i30.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i51.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(256, i0.APP_ID, "sls-app", []), i0.ɵmpd(2048, i30.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(512, i51.ɵangular_packages_router_router_h, i51.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p1_1, p1_2, p2_0) { return [i30.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i30.ɵangular_packages_platform_browser_platform_browser_h(p1_0, p1_1, p1_2), i51.ɵangular_packages_router_router_i(p2_0)]; }, [[2, i0.NgProbeToken], i30.ɵTRANSITION_ID, i29.DOCUMENT, i0.Injector, i51.ɵangular_packages_router_router_h]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i30.BrowserModule, i30.BrowserModule, [[3, i30.BrowserModule]]), i0.ɵmpd(1073742336, i33.BrowserAnimationsModule, i33.BrowserAnimationsModule, []), i0.ɵmpd(1073742336, i41.MetaModule, i41.MetaModule, [[3, i41.MetaModule]]), i0.ɵmpd(1024, i51.ɵangular_packages_router_router_a, i51.ɵangular_packages_router_router_e, [[3, i51.Router]]), i0.ɵmpd(512, i51.UrlSerializer, i51.DefaultUrlSerializer, []), i0.ɵmpd(512, i51.ChildrenOutletContexts, i51.ChildrenOutletContexts, []), i0.ɵmpd(256, i51.ROUTER_CONFIGURATION, { scrollPositionRestoration: "enabled", initialNavigation: "enabled" }, []), i0.ɵmpd(1024, i29.LocationStrategy, i51.ɵangular_packages_router_router_d, [i29.PlatformLocation, [2, i29.APP_BASE_HREF], i51.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i29.Location, i29.Location, [i29.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i54.ModuleMapNgFactoryLoader, [i0.Compiler, i54.MODULE_MAP]), i0.ɵmpd(1024, i51.ROUTES, function () { return [[{ path: "", canActivateChild: [i41.MetaGuard, i44.LinkGuard], children: [{ path: "", data: i42.ɵ0, component: i55.HomePageComponent }, { path: "about", data: i42.ɵ1, component: i56.AboutPageComponent }, { path: "expertise", data: i42.ɵ2, component: i57.ExpertisePageComponent }, { path: "career", data: i42.ɵ3, component: i58.CareerPageComponent }, { path: "infocenter", data: i42.ɵ4, component: i59.InfoCenterPageComponent }, { path: "contacts", data: i42.ɵ5, component: i60.ContactsPageComponent }, { path: "industry", data: i42.ɵ6, component: i61.IndustryPageComponent }, { path: "expertise/the-range-of-legal-practices", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { type: "article", "og:type": "article", site_name: "Smart Legal Resolution", title: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 SLR - Smart Legal Resolution", description: "\u041C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043F\u043E\u043B\u043D\u043E\u0435 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u0421 \u043D\u0430\u043C\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E, \u0437\u0430\u0431\u044B\u0432 \u043E \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430\u0445 \u0438 \u0442\u0440\u0443\u0434\u043D\u043E\u0441\u0442\u044F\u0445", url: "https://slr.legal/expertise/the-range-of-legal-practices" } }, component: i62.TheRangeOfLegalPracticesExpertiseComponent }, { path: "expertise/accounting", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { type: "article", site_name: "Smart Legal Resolution", title: "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 SLR - Smart Legal Resolution", description: "\u041C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0443\u044E \u0438 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u0443\u044E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0438\u043C\u0435\u044E\u0442 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u0430\u0433\u0430\u0436 \u0437\u043D\u0430\u043D\u0438\u0439 \u0438 \u043E\u043F\u044B\u0442\u0430 \u0432 \u043D\u0443\u0436\u043D\u044B\u0445 \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u0445. \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u0438 \u043A\u0430\u0434\u0440\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0435\u0442\u0430 \u0441 \u043E\u0445\u0440\u0430\u043D\u043E\u0439 \u0442\u0440\u0443\u0434\u0430", url: "https://slr.legal/expertise/accounting" } }, component: i63.AccountingExpertiseComponent }, { path: "expertise/marketing-and-pr", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { type: "article", site_name: "Smart Legal Resolution", title: "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0438 PR \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 SLR - Smart Legal Resolution", description: "\u041C\u044B \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u0441\u044F \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C, \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043D\u0438\u0448, \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043E\u0442\u043B\u0438\u0447\u0438\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043E\u0442 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432, \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0435\u043C \u0437\u0430 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0435\u0439, \u0440\u044B\u043D\u043A\u043E\u043C \u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0430\u043C\u0438, \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u0430\u0441\u0441\u0438\u043C\u0435\u0442\u0440\u0438\u0447\u043D\u044B\u0435 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0442\u0430\u043A\u0442\u0438\u043A\u0438 - \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u044B\u0435 \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438\u0432\u043D\u044B\u0435", url: "https://slr.legal/expertise/marketing-and-pr" } }, component: i64.MarketingAndPRExpertiseComponent }, { path: "expertise/crisis-management", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { type: "article", site_name: "Smart Legal Resolution", title: "\u0410\u043D\u0442\u0438\u043A\u0440\u0438\u0437\u0438\u0441\u043D\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 SLR - Smart Legal Resolution", description: "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043A\u0440\u0438\u0437\u0438\u0441 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0430\u0442 \u0432\u044B\u0445\u043E\u0434 \u0438\u0437 \u0442\u0440\u0443\u0434\u043D\u043E\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u0441\u043B\u043E\u0436\u0438\u0432\u0448\u0435\u0439\u0441\u044F \u0432 \u0432\u0430\u0448\u0435\u043C \u0431\u0438\u0437\u043D\u0435\u0441\u0435. \u0410\u043D\u0442\u0438\u043A\u0440\u0438\u0437\u0438\u0441\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442 \u044D\u0442\u043E \u043E\u0434\u043D\u043E \u0438\u0437 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", url: "https://slr.legal/expertise/crisis-management" } }, component: i65.CrisisManagementExpertiseComponent }, { path: "expertise/mediation", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { type: "article", site_name: "Smart Legal Resolution", title: "\u041C\u0435\u0434\u0438\u0430\u0446\u0438\u044F - \u0434\u043E\u0441\u0443\u0434\u0435\u0431\u043D\u043E\u0435 \u0443\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 SLR - Smart Legal Resolution", description: "\u0414\u043E\u0441\u0443\u0434\u0435\u0431\u043D\u043E\u0435 \u0443\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043F\u043E\u0440\u043E\u0432 \u0441 \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432 \u0441\u043F\u043E\u0440\u044F\u0449\u0438\u0445 \u0441\u0442\u043E\u0440\u043E\u043D. \u0423\u0441\u043B\u0443\u0433\u0438 \u043C\u0435\u0434\u0438\u0430\u0442\u043E\u0440\u0430 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432 \u0431\u0435\u0437 \u0441\u0443\u0434\u0435\u0431\u043D\u044B\u0445 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432", url: "https://slr.legal/expertise/mediation" } }, component: i66.MediationExpertiseComponent }, { path: "expertise/security-consulting", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { type: "article", site_name: "Smart Legal Resolution", title: "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 SLR - Smart Legal Resolution", description: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u043C \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u041F\u0440\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u0443\u0433\u0440\u043E\u0437\u044B \u0432\u0430\u0448\u0435\u043C\u0443 \u0431\u0438\u0437\u043D\u0435\u0441\u0443 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0443\u0441\u0438\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u0449\u0438\u0442\u044B", url: "https://slr.legal/expertise/security-consulting" } }, component: i67.SecurityConsultingExpertiseComponent }, { path: "expertise/trashshuting", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { type: "article", site_name: "Smart Legal Resolution", title: "\u0422\u0440\u0430\u0431\u043B\u0448\u0443\u0442\u0438\u043D\u0433 - \u0423\u0441\u043B\u0443\u0433\u0438 \u0442\u0440\u0430\u0431\u043B\u0448\u0443\u0442\u0435\u0440\u0430 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0435 - Smart Legal Resolution", description: "\u0422\u0440\u0430\u0431\u043B\u0448\u0443\u0442\u0438\u043D\u0433 \u044D\u0442\u043E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0442\u0443\u043F\u0438\u043A\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u0422\u0440\u0430\u0431\u043B \u0448\u0443\u0442\u0435\u0440 \u0441 \u043E\u043F\u044B\u0442\u043E\u043C \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0438\u0445 \u0437\u0430\u0434\u0430\u0447. \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F SLR - Smart Legal Resolution", url: "https://slr.legal/expertise/trashshuting" } }, component: i68.TrashshutingExpertiseComponent }, { path: "expertise/other-services", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { type: "article", site_name: "Smart Legal Resolution", title: "\u0414\u0440\u0443\u0433\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044E \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0432\u0440\u0435\u043C\u0435\u043D\u0438", description: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 SLR \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0443, \u0437\u0430\u0431\u0438\u0440\u0430\u044F \u043D\u0430 \u0441\u0435\u0431\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043D\u0435\u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447, \u0441\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044F \u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u043A\u0435 \u0435\u0433\u043E \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u043D\u0430 \u0432\u0430\u0436\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430\u0445. ", url: "https://slr.legal/expertise/" } }, component: i69.OtherServicesExpertiseComponent }, { path: "industry/it-companies", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { title: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0432 \u0441\u0444\u0435\u0440\u0435 IT - Smart Legal Resolution", description: "\u0412\u044B \u043A\u043E\u0433\u0434\u0430-\u0442\u043E \u0431\u044B\u043B\u0438 \u0438\u043B\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0435\u0441\u044C \u0444\u0440\u0438\u043B\u0430\u043D\u0441\u0435\u0440\u043E\u043C \u0438\u043B\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u043C \u043A\u0440\u0443\u043F\u043D\u043E\u0439 \u0430\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0443\u043C\u0435\u0435\u0442\u0435 \u0445\u043E\u0440\u043E\u0448\u043E \u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043E\u0434 \u0438 \u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0435\u0449\u0438 \u043A\u0440\u0443\u0442\u043E, \u043D\u043E \u043F\u043E\u0442\u043E\u043C \u043E\u0441\u043E\u0437\u043D\u0430\u043B\u0438, \u0447\u0442\u043E \u0440\u0430\u0434\u043E\u0441\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0430 \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u043D\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442, \u0438 \u0440\u0435\u0448\u0438\u043B\u0438 \u0446\u0438\u0432\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0430 \u0441\u0435\u0431\u044F \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0435\u0434\u0438\u043D\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0438\u043A\u0430\u043C\u0438.", url: "https://slr.legal/industry/it-companies" } }, component: i70.ItCompaniesIndustryComponent }, { path: "industry/call-centers", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { title: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0434\u043B\u044F call-\u0446\u0435\u043D\u0442\u0440\u043E\u0432 - Smart Legal Resolution", description: "\u0412 \u0423\u043A\u0440\u0430\u0438\u043D\u0435 \u0443\u0436\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 call- \u0446\u0435\u043D\u0442\u0440\u043E\u0432. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0437 \u043D\u0438\u0445 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0430\u0448\u0438\u043C\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F. \u041C\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u043C \u0437\u0430\u0434\u0430\u0447\u0438, \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.", url: "https://slr.legal/industry/call-centers" } }, component: i71.CallCentersIndustryComponent }, { path: "industry/\u0441reative-class", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { title: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0441\u0430 - Smart Legal Resolution", description: "\u0415\u0441\u043B\u0438 \u0412\u044B \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435 \u0441\u0435\u0431\u044F \u043A \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E\u043C\u0443 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u043E\u043C\u0443 \u043A\u043B\u0430\u0441\u0441\u0443, \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0435 \u0441\u043E\u0444\u0442, \u043E\u0434\u0435\u0436\u0434\u0443, \u043C\u0443\u0437\u044B\u043A\u0443, \u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u044B, \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0438\u0432\u0430\u0435\u0442\u0435 \u043C\u0438\u0440 \u0438\u043B\u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0435\u0441\u044C \u0434\u0440\u0443\u0433\u043E\u0439 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u0441\u043E\u0437\u0438\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0438\u043B\u0438 \u0441 \u0433\u0440\u0443\u043F\u043F\u043E\u0439 \u0435\u0434\u0438\u043D\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0438\u043A\u043E\u0432, \u0438 \u0412\u0430\u043C \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0445 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u2013 \u043E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u043A \u043D\u0430\u043C.", url: "https://slr.legal/industry/\u0441reative-class" } }, component: i72.CreativeClassIndustryComponent }, { path: "industry/real-sector-economy", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { title: "\u041E\u0446\u0438\u0444\u0440\u043E\u0432\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438 - Smart Legal Resolution", description: "\u0423\u043C\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u0438 \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u043F\u043E\u0434 \u0438\u0437\u043C\u0435\u043D\u044F\u044E\u0449\u0438\u0435\u0441\u044F \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0432\u0430\u0436\u043D\u0435\u0439\u0448\u0438\u043C \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u043C \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0443\u0441\u043F\u0435\u0445\u0430. \u0423\u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u043D\u0430\u0434\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0438 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432, \u0432\u043D\u0435\u0448\u043D\u0438\u0435 - \u043F\u0435\u0440\u0435\u043E\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u0441 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438, \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u0438 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E\u043C.", url: "https://slr.legal/industry/real-sector-economy" } }, component: i73.RealSectorEconomyIndustryComponent }, { path: "industry/clients-of-ukrainian-outsourcing-companies", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { title: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u0443\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0438\u0445 \u0430\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 - Smart Legal Resolution", description: "\u0423\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0438\u0435 IT-\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442 95% \u0441\u0432\u043E\u0438\u0445 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043D\u0430 \u044D\u043A\u0441\u043F\u043E\u0440\u0442, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 90% \u0434\u043B\u044F \u0441\u0442\u0440\u0430\u043D \u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0439 \u0410\u043C\u0435\u0440\u0438\u043A\u0438 \u0438 \u0415\u0432\u0440\u043E\u043F\u044B. \u0423 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439-\u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u0432 \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438 \u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0434\u0435\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432 \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0435.", url: "https://slr.legal/industry/clients-of-ukrainian-outsourcing-companies" } }, component: i74.ClientsOfUkrainianOutsourcingCompaniesIndustryComponent }, { path: "industry/accompanying-intergenerational-business", data: { headerBlackOverlay: true, hideMobBigLogo: true, meta: { title: "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0435\u043C\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 - Smart Legal Resolution", description: "\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0435 \u0431\u0438\u0437\u043D\u0435\u0441\u044B \u0432 \u043C\u0438\u0440\u0435 \u043F\u0440\u0435\u0432\u043E\u0441\u0445\u043E\u0434\u044F\u0442 \u043F\u043E \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043B\u0438\u0434\u0435\u0440\u0441\u0442\u0432\u043E \u0432 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0435 Forbes \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442 \u0438\u043C\u0435\u043D\u043D\u043E \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u043C \u0445\u043E\u043B\u0434\u0438\u043D\u0433\u0430\u043C. \u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u0438 \u0441\u0440\u0435\u0434\u043D\u0438\u0445 \u0443\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u0430\u0447\u0430\u043B\u0438 \u0441\u0432\u043E\u0439 \u043F\u043E\u0434\u044A\u0435\u043C \u0432 90-\u0435 \u0433\u043E\u0434\u044B \u0425\u0425 \u0432\u0435\u043A\u0430. \u0412\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u044B, \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u044F\u0449\u0438\u0435 \u0441\u0432\u043E\u0438\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438 \u0431\u043E\u043B\u0435\u0435 20 \u043B\u0435\u0442, \u0443\u0441\u043F\u0435\u043B\u0438 \u0443\u0442\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u043E\u0442 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043C\u0435\u043D\u044F\u044E\u0449\u0438\u0445\u0441\u044F \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0437\u0430\u0434\u0443\u043C\u0430\u043B\u0438\u0441\u044C \u043E \u043F\u0440\u0435\u0435\u043C\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438.", url: "https://slr.legal/industry/accompanying-intergenerational-business" } }, component: i75.AccompanyingIntergenerationalBusinessIndustryComponent }] }, { path: "**", redirectTo: "/" }]]; }, []), i0.ɵmpd(1024, i51.Router, i51.ɵangular_packages_router_router_f, [i0.ApplicationRef, i51.UrlSerializer, i51.ChildrenOutletContexts, i29.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i51.ROUTES, i51.ROUTER_CONFIGURATION, [2, i51.UrlHandlingStrategy], [2, i51.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i51.RouterModule, i51.RouterModule, [[2, i51.ɵangular_packages_router_router_a], [2, i51.Router]]), i0.ɵmpd(1073742336, i35.ɵangular_packages_forms_forms_bc, i35.ɵangular_packages_forms_forms_bc, []), i0.ɵmpd(1073742336, i35.FormsModule, i35.FormsModule, []), i0.ɵmpd(1073742336, i35.ReactiveFormsModule, i35.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i37.TooltipModule, i37.TooltipModule, []), i0.ɵmpd(1073742336, i40.BsDropdownModule, i40.BsDropdownModule, []), i0.ɵmpd(1073742336, i36.HttpClientXsrfModule, i36.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i36.HttpClientModule, i36.HttpClientModule, []), i0.ɵmpd(1073742336, i76.NgSelectModule, i76.NgSelectModule, []), i0.ɵmpd(1073742336, i77.LottieAnimationViewModule, i77.LottieAnimationViewModule, []), i0.ɵmpd(1073742336, i78.RootSharedModule, i78.RootSharedModule, []), i0.ɵmpd(1073742336, i79.SlickCarouselModule, i79.SlickCarouselModule, []), i0.ɵmpd(1073742336, i45.TabsModule, i45.TabsModule, []), i0.ɵmpd(1073742336, i46.ModalModule, i46.ModalModule, []), i0.ɵmpd(1073742336, i80.AgmCoreModule, i80.AgmCoreModule, []), i0.ɵmpd(1073742336, i50.Angulartics2OnModule, i50.Angulartics2OnModule, []), i0.ɵmpd(1073742336, i50.Angulartics2Module, i50.Angulartics2Module, []), i0.ɵmpd(1073742336, i42.AppModule, i42.AppModule, []), i0.ɵmpd(1073742336, i53.HttpModule, i53.HttpModule, []), i0.ɵmpd(1073742336, i33.NoopAnimationsModule, i33.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i31.ServerModule, i31.ServerModule, []), i0.ɵmpd(1073742336, i54.ModuleMapLoaderModule, i54.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i31.ServerTransferStateModule, i31.ServerTransferStateModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i33.ANIMATION_MODULE_TYPE, "NoopAnimations", []), i0.ɵmpd(256, i36.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i36.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i76.SELECTION_MODEL_FACTORY, i76.ɵb, []), i0.ɵmpd(256, i40.BsDropdownConfig, { autoClose: true, insideClick: false }, []), i0.ɵmpd(256, i49.LAZY_MAPS_API_CONFIG, { apiKey: "AIzaSyAbdH022tswymNTzj-uiDldEMBhmb3dsl0" }, []), i0.ɵmpd(256, i50.ANGULARTICS2_TOKEN, { settings: { gtm: { userId: "GTM-KDSF8KH" }, ga: { userId: "UA-136204572-1" } } }, [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.ngfactory.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory */ "./node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory.js");
var i2 = __webpack_require__(/*! ngx-bootstrap/tabs */ "ngx-bootstrap/tabs");
var i3 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i4 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i5 = __webpack_require__(/*! ./about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
var i6 = __webpack_require__(/*! @angular/router */ "@angular/router");
var styles_AboutPageComponent = [];
var RenderType_AboutPageComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AboutPageComponent, data: {} });
exports.RenderType_AboutPageComponent = RenderType_AboutPageComponent;
function View_AboutPageComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "border-hover -left"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 "]))], null, null); }
function View_AboutPageComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "border-hover -left"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041D\u0430\u0448\u0435 \u0432\u0438\u0434\u0435\u043D\u0438\u0435 \u0438 \u043C\u0438\u0441\u0441\u0438\u044F "]))], null, null); }
function View_AboutPageComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "border-hover -left"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043B\u0438\u0435\u043D\u0442\u0430\u043C "]))], null, null); }
function View_AboutPageComponent_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { staticTabs: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 68, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 0, "section", [["class", "section section-top -about"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 64, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 63, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "section-heading"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h1", [["class", "h2"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"])), (_l()(), i0.ɵeld(8, 0, null, null, 2, "div", [["class", "descr-block mb-lg"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [["class", "font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u043D\u0435 \u0445\u0443\u0436\u0435 \u0438 \u043D\u0435 \u043B\u0443\u0447\u0448\u0435 \u0434\u0440\u0443\u0433\u0438\u0445, \u043C\u044B \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u043C\u0441\u044F \u043E\u0442 \u0432\u0441\u0435\u0445, \u043C\u044B \u2013 \u0438\u043D\u044B\u0435. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u043F\u0438\u0442\u0430\u043D\u0430 \u0434\u0443\u0445\u043E\u043C \u043D\u043E\u0432\u0430\u0442\u043E\u0440\u0441\u0442\u0432\u0430 \u0438 \u0430\u0432\u0430\u043D\u0442\u044E\u0440\u0438\u0437\u043C\u0430, \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u0441\u0442\u0438\u043B\u0435 \u0430\u0441\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u0438 \u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u043C \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432, \u0441\u0435\u043A\u0442\u043E\u0440\u043E\u0432 \u0438 \u0440\u044B\u043D\u043A\u043E\u0432. \u0423 \u043D\u0430\u0441 \u0434\u0440\u0443\u0433\u043E\u0435 \u0432\u0438\u0434\u0435\u043D\u0438\u0435, \u043C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u043D\u043E\u0432\u044B\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438, \u043B\u043E\u043C\u0430\u0435\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u043C \u0448\u0430\u0445\u043C\u0430\u0442\u043D\u044B\u0435 \u0434\u043E\u0441\u043A\u0438. "])), (_l()(), i0.ɵeld(11, 0, null, null, 0, "div", [["class", "js-scroll-tabs"]], null, null, null, null, null)), (_l()(), i0.ɵeld(12, 0, null, null, 55, "div", [["class", "tabs-block tabs-default"], ["data-aos", "fade-up"], ["data-aos-delay", "100"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(13, 0, null, null, 54, "tabset", [["class", "nav-lg"]], [[2, "tab-container", null]], null, null, i1.View_TabsetComponent_0, i1.RenderType_TabsetComponent)), i0.ɵdid(14, 180224, [[1, 4], ["staticTabs", 4]], 0, i2.TabsetComponent, [i2.TabsetConfig, i0.Renderer2], null, null), (_l()(), i0.ɵeld(15, 0, null, 0, 12, "tab", [], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null]], null, null, null, null)), i0.ɵdid(16, 212992, null, 0, i2.TabDirective, [i2.TabsetComponent, i0.ElementRef, i0.Renderer2], null, null), (_l()(), i0.ɵand(0, null, null, 1, null, View_AboutPageComponent_1)), i0.ɵdid(18, 16384, null, 0, i2.TabHeadingDirective, [i0.TemplateRef, i2.TabDirective], null, null), (_l()(), i0.ɵeld(19, 0, null, null, 8, "div", [["class", "descr-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(20, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u0441\u0447\u0438\u0442\u0430\u0435\u043C \u0438\u0441\u0442\u0438\u043D\u043D\u044B\u043C\u0438 \u043D\u043E\u0432\u0430\u0442\u043E\u0440\u0430\u043C\u0438 - Leonardo da Vinci, Nikola Tesla \u0438 John Galt, \u0430 \u043D\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 YouTube-\u043F\u0440\u043E\u043F\u043E\u0432\u0435\u0434\u043D\u0438\u043A\u043E\u0432 \u0438 \u0433\u0443\u0440\u0443 \u0431\u0438\u0437\u043D\u0435\u0441-\u0441\u0435\u043A\u0442 (\u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u043F\u0438\u043A\u0435\u0440\u043E\u0432 \u043F\u043E \u00AB\u0443\u0441\u043F\u0435\u0448\u043D\u043E\u043C\u0443 \u0443\u0441\u043F\u0435\u0445\u0443\u00BB \u0432 \u0431\u0438\u0437\u043D\u0435\u0441\u0435 \u0438 \u043B\u0438\u0447\u043D\u044B\u0445 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F\u0445). \u041D\u0430\u0448\u0430 \u0440\u0430\u0431\u043E\u0442\u0430 - \u0441\u0442\u0440\u0430\u0441\u0442\u043D\u043E\u0435 \u0443\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435, \u0430 \u043D\u0435 \u0431\u0438\u0437\u043D\u0435\u0441 \u0440\u0430\u0434\u0438 \u0432\u044B\u0436\u0438\u0432\u0430\u043D\u0438\u044F. \u041C\u044B \u043C\u043E\u0436\u0435\u043C \u0441\u0435\u0431\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C, \u0440\u0435\u0448\u0430\u044F \u0432\u0430\u0436\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u044F \u043B\u044E\u0434\u044F\u043C, \u043D\u0435 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u043D\u0430 \u044D\u0442\u043E\u043C. \u041D\u043E \u0437\u0430\u0442\u043E, \u043C\u044B \u0442\u0430\u043A\u0436\u0435 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u043C \u043C\u0438\u0440 \u043A \u043B\u0443\u0447\u0448\u0435\u043C\u0443 \u2013 \u0438 \u044D\u0442\u043E \u0434\u043B\u044F \u043D\u0430\u0441 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442. "])), (_l()(), i0.ɵeld(22, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u043D\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u0442\u0440\u0435\u043D\u0435\u0440\u044B \u0438 \u043D\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442\u044B-\u0442\u0435\u043E\u0440\u0435\u0442\u0438\u043A\u0438, \u043C\u044B \u043D\u0435 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u0441\u044F \u0438\u043C\u0438\u0442\u0430\u0446\u0438\u0435\u0439 \u0431\u0443\u0440\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u043D\u0435 \u0432\u044B\u0434\u0430\u0435\u043C \u0438\u0434\u0435\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0437\u0430 \u0441\u0432\u043E\u0438. \u041C\u044B - \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438, \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0449\u0438\u0435\u0441\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u0445. \u041C\u044B - \u0441\u043C\u0435\u043B\u044B\u0435, \u0438\u0441\u043A\u0440\u0435\u043D\u043D\u0438\u0435, \u0447\u0435\u0441\u0442\u043D\u044B\u0435 \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u0438 \u0441\u0430\u043C\u0438\u043C\u0438 \u0441\u043E\u0431\u043E\u0439, \u0446\u0435\u043B\u043E\u0441\u0442\u043D\u044B\u0435 \u0438 \u044D\u0442\u0438\u0447\u043D\u044B\u0435 \u043B\u044E\u0434\u0438. \u041C\u044B \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u043C\u0441\u044F \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0436\u0438\u0437\u043D\u0438, \u043C\u044B\u0448\u043B\u0435\u043D\u0438\u0435\u043C, \u043C\u0438\u0440\u043E\u0432\u043E\u0437\u0437\u0440\u0435\u043D\u0438\u0435\u043C \u0438 \u043C\u044B \u043D\u0435 \u0432\u0438\u0434\u0438\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u0443-\u043B\u0438\u0431\u043E \u0447\u0442\u043E-\u043B\u0438\u0431\u043E \u0434\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C. \u041C\u044B \u043C\u0430\u0441\u0441\u043E\u0432\u043E \u043D\u0435 \u0440\u0430\u0437\u0434\u0430\u0435\u043C \u0446\u0435\u043D\u043D\u044B\u0445 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0439 \u043F\u043E \u0443\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C, \u043D\u0435 \u0432\u044B\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u043A\u043D\u0438\u0433\u0438, \u043D\u0435 \u0434\u0430\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E \u0438 \u043D\u0435 \u0432\u0435\u0434\u0435\u043C \u0431\u043B\u043E\u0433\u0438. \u041C\u044B \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043D\u0430\u0445\u043E\u0434\u0438\u043C\u0441\u044F \u0432\u043D\u0435 \u0437\u043E\u043D\u044B \u043D\u0430\u0448\u0435\u0433\u043E \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430, \u043F\u0440\u043E\u0431\u0443\u0435\u043C \u0447\u0442\u043E-\u0442\u043E \u043D\u043E\u0432\u043E\u0435, \u0440\u0438\u0441\u043A\u0443\u0435\u043C, \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u043C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0438 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u044F \u043B\u0438\u0446\u043E\u043C \u043A \u043B\u0438\u0446\u0443. \u041C\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u043C, \u0447\u0442\u043E \u0431\u0435\u0437 \u0440\u0438\u0441\u043A\u0430 \u0432\u044B\u0438\u0433\u0440\u0430\u0442\u044C \u043D\u0435\u043B\u044C\u0437\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0438\u0440\u0443\u0435\u043C\u0441\u044F, \u0438 \u0432 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0432 \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0435\u043C \u0446\u0435\u043B\u0438, \u043B\u0438\u0431\u043E \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043C\u0441\u044F \u043E\u043F\u044B\u0442\u043D\u0435\u0435 \u0438 \u0441\u0438\u043B\u044C\u043D\u0435\u0435. \u041C\u044B \u0432\u0438\u0434\u0438\u043C \u0438 \u043C\u044B\u0441\u043B\u0438\u043C \u043F\u043E-\u0440\u0430\u0437\u043D\u043E\u043C\u0443, \u0438\u043C\u0435\u0435\u043C \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043C\u044B\u0448\u043B\u0435\u043D\u0438\u0435, \u0440\u0430\u0437\u0432\u0438\u0442\u043E\u0435 \u0432\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438 \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0435 \u0431\u0430\u0437\u044B \u0437\u043D\u0430\u043D\u0438\u0439, \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0443. "])), (_l()(), i0.ɵeld(24, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u043D\u0435 \u0431\u0435\u0440\u0435\u043C\u0441\u044F \u0437\u0430 \u0432\u0441\u044E \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443. \u041D\u0430\u043C \u043D\u0440\u0430\u0432\u044F\u0442\u0441\u044F \u0441\u043B\u043E\u0436\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u043E\u0442 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0435. \u041C\u044B \u043D\u0435 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u043C \u0432 \u0442\u0435\u043D\u0434\u0435\u0440\u0430\u0445, \u0432 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0435, \u0432 \u00AB\u0438\u0433\u0440\u0430\u0445\u00BB \u0441 \u0432\u043B\u0430\u0441\u0442\u044C\u044E, \u043D\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u043C \u0441\u0443\u0442\u044C \u0432\u0441\u0435\u0445 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432, \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F \u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043F\u0440\u0435\u0432\u0435\u043D\u0442\u0438\u0432\u043D\u044B\u0435 \u043C\u0435\u0440\u044B \u0434\u043B\u044F \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u041C\u044B \u0447\u0430\u0441\u0442\u043E \u0440\u0435\u0448\u0430\u0435\u043C \u0441\u043B\u043E\u0436\u043D\u044B\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0438\u0449\u0435\u043C \u043D\u043E\u0432\u044B\u0435 \u043C\u0435\u0442\u043E\u0434\u044B \u0438\u0445 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439, \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044F \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044B, \u0438 \u043A\u0440\u0430\u0439\u043D\u0435 \u0440\u0435\u0434\u043A\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u043C \u043F\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 \u0441\u0445\u0435\u043C\u0435. \u0412 \u043E\u0441\u043D\u043E\u0432\u0435 \u043D\u0430\u0448\u0438\u0445 \u0432\u043D\u0435\u0434\u0440\u044F\u0435\u043C\u044B\u0445 \u0431\u0438\u0437\u043D\u0435\u0441-\u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043C\u044B \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0443\u0435\u043C\u0441\u044F \u0441\u0438\u043C\u0431\u0438\u043E\u0437\u043E\u043C \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u043F\u044B\u0442\u0430, \u0430\u0441\u0441\u0438\u043C\u0435\u0442\u0440\u0438\u0447\u043D\u044B\u043C\u0438 \u0442\u0430\u043A\u0442\u0438\u043A\u0430\u043C\u0438, \u0442\u0435\u043E\u0440\u0438\u0435\u0439 \u0438\u0433\u0440 \u0438 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u043C\u0438 \u0440\u0430\u0432\u043D\u043E\u0432\u0435\u0441\u0438\u044F, \u0442\u043E\u0447\u043D\u044B\u043C\u0438 \u043D\u0430\u0443\u043A\u0430\u043C\u0438 \u0432 \u0433\u0443\u043C\u0430\u043D\u0438\u0442\u0430\u0440\u043D\u043E\u0439 \u0441\u0444\u0435\u0440\u0435 \u0438 \u0448\u0430\u0445\u043C\u0430\u0442\u043D\u044B\u043C\u0438 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u044F\u043C\u0438 - \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043F\u0440\u0430\u0432\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044F. "])), (_l()(), i0.ɵeld(26, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F SLR \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u044F\u043C\u0438 \u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441\u0435. \u0414\u0430\u0439\u0442\u0435 \u043D\u0430\u043C \u043B\u044E\u0431\u0443\u044E \u0431\u0438\u0437\u043D\u0435\u0441-\u0437\u0430\u0434\u0430\u0447\u0443, \u0438 \u043C\u044B \u0435\u0435 \u0440\u0435\u0448\u0438\u043C, \u0438 \u0447\u0435\u043C \u043E\u043D\u0430 \u0431\u0443\u0434\u0435\u0442 \u0442\u0440\u0443\u0434\u043D\u0435\u0435 \u2013 \u0442\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0435\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0435\u0448\u0435\u043D\u0438\u0435. \u041D\u0430\u0448\u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C, \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0433\u043E\u043D\u043E\u0440\u0430\u0440\u044B. \u041D\u0430\u0448\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C, \u0447\u0442\u043E \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0441\u043E\u0432\u0435\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u044B\u043C\u0438 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F\u043C\u0438, \u0430 \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u2013 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438 \u0438 \u0441\u043E\u0440\u0430\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u043E\u043C\u0443 \u043D\u0443\u0436\u043D\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0432 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0438 \u0437\u043D\u0430\u0447\u0438\u043C\u044B\u0445 \u0446\u0435\u043B\u0435\u0439. "])), (_l()(), i0.ɵeld(28, 0, null, 0, 20, "tab", [], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null]], null, null, null, null)), i0.ɵdid(29, 212992, null, 0, i2.TabDirective, [i2.TabsetComponent, i0.ElementRef, i0.Renderer2], null, null), (_l()(), i0.ɵand(0, null, null, 1, null, View_AboutPageComponent_2)), i0.ɵdid(31, 16384, null, 0, i2.TabHeadingDirective, [i0.TemplateRef, i2.TabDirective], null, null), (_l()(), i0.ɵeld(32, 0, null, null, 16, "div", [["class", "descr-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(33, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0411\u0443\u0434\u0443\u0449\u0435\u0435 \u0443\u0436\u0435 \u043D\u0430\u0441\u0442\u0443\u043F\u0438\u043B\u043E. \u041F\u0440\u043E\u0441\u0442\u043E \u043E\u043D\u043E \u043D\u0435\u0440\u0430\u0432\u043D\u043E\u043C\u0435\u0440\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043E. \u041C\u0438\u0440 \u0441\u0442\u0440\u0435\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0432\u0430\u043D\u0443\u043B \u0432\u043F\u0435\u0440\u0435\u0434, \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438, \u0440\u044B\u043D\u043A\u0438 \u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438, \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438. \u041D\u043E\u0432\u043E\u0435 \u0440\u043E\u0436\u0434\u0430\u0435\u0442\u0441\u044F \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0430 \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0438 \u043E\u043F\u044B\u0442\u0430, \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0438 \u0438\u0434\u0435\u0439, \u043B\u0438\u0448\u044C \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0439 \u0432\u0437\u0433\u043B\u044F\u0434 \u043D\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0431\u043E\u0439. \u0422\u0435\u043F\u0435\u0440\u044C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0431\u044B\u0442\u044C \u0432 \u043A\u0443\u0440\u0441\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u0442\u0440\u0435\u043D\u0434\u043E\u0432 \u0438 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0439, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u0438 \u0440\u044B\u043D\u043A\u0430 \u043F\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0439 \u0438 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u043D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C \u0442\u043E\u0447\u043A\u0438 \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u044B\u0442\u0430 \u0438 \u043D\u043E\u0432\u043E\u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0435\u0439. "])), (_l()(), i0.ɵeld(35, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u043C\u043E\u0434\u0435\u043B\u0438 \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430, \u0432\u043D\u0435\u0434\u0440\u044F\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F. \u0412\u0441\u044E\u0434\u0443, \u0433\u0434\u0435 \u0441\u0442\u0430\u0432\u043A\u0438 \u0432\u0435\u043B\u0438\u043A\u0438, \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u0432\u0441\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438, \u0434\u043E \u043A\u0430\u043A\u0438\u0445 \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0442\u044F\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442. \u0412 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C \u0431\u044B\u0441\u0442\u0440\u043E \u043C\u0435\u043D\u044F\u044E\u0449\u0435\u043C\u0441\u044F \u043C\u0438\u0440\u0435 \u043D\u0443\u0436\u043D\u043E \u043D\u0435 \u043E\u043F\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u043D\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0430, \u0430 \u0438\u0441\u043A\u0430\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0432\u044B\u0445\u043E\u0434\u044B \u0438\u0437 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439. \u0418\u043C\u0435\u043D\u043D\u043E \u0442\u0430\u043A\u0430\u044F \u043F\u043E\u0437\u0438\u0446\u0438\u044F \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0434\u043E\u0441\u0442\u0438\u0447\u044C \u0443\u0441\u043F\u0435\u0445\u0430. "])), (_l()(), i0.ɵeld(37, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u2013 \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0435\u043F\u0440\u043E\u0441\u0442\u043E, \u0438 \u0434\u043B\u044F \u043C\u043D\u043E\u0433\u0438\u0445 \u2013 \u044D\u0442\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B. \u041D\u043E, \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C\u0438, \u0435\u0441\u043B\u0438 \u0432\u044B\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043A \u043D\u0438\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434. \u0412 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C, \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0432 \u0437\u0430\u0434\u0430\u0447\u0438, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434\u044B \u0438\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u044F. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u0430\u0443\u0437\u0443, \u043F\u0435\u0440\u0435\u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0438, \u0437\u0430\u0434\u0430\u0442\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F (\u0430 \u043D\u0435 \u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B), \u0443\u0431\u0440\u0430\u0442\u044C \u0441\u043E\u043C\u043D\u0435\u043D\u0438\u044F, \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0441\u043C\u0435\u043B\u044B\u0435 \u0436\u0435\u0441\u0442\u043A\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F. "])), (_l()(), i0.ɵeld(39, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0422\u043E\u043F-\u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0443 \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0432 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u0431\u0435\u0437 \u0447\u0451\u0442\u043A\u043E\u0433\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u044F - \u0447\u0442\u043E \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u0443\u0441\u043F\u0435\u0445\u0443, \u0430 \u0447\u0442\u043E \u043D\u0435\u0442. \u041E\u043D\u0438 \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u044E\u0442 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C \u0443\u0441\u043F\u0435\u0445\u0430 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0438\u0445, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0443\u0441\u043F\u0435\u0442\u044C \u0432 \u0441\u0432\u043E\u0435\u0439 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438. \u041C\u0435\u0436\u0434\u0443 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0443\u0434\u0430\u0447\u0435\u0439 \u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439 \u0443\u0441\u043F\u0435\u0445\u0430 \u2013 \u0446\u0435\u043B\u044B\u0439 \u043C\u0438\u0440. \u0412 \u043D\u0435\u043C \u0438 \u0436\u0438\u0432\u0443\u0442 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0446\u044B. "])), (_l()(), i0.ɵeld(41, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0412\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B\u043C\u0438 \u0441\u0430\u043C\u0438 \u0434\u0435\u043B\u0430\u0442\u044C \u0432\u044B\u0432\u043E\u0434\u044B, \u0430\u00A0\u043D\u0435\u00A0\u0432\u0435\u0440\u0438\u0442\u044C \u0432\u0441\u0435\u043C\u0443 \u043F\u043E\u0434\u0440\u044F\u0434, \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0442\u043E\u043C\u0443 - \u0447\u0442\u043E \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u00AB\u043E\u0447\u0435\u0432\u0438\u0434\u043D\u044B\u043C\u00BB. \u041D\u0435 \u0444\u0430\u043A\u0442, \u0447\u0442\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0438\u0439 \u0443\u0441\u043F\u0435\u0445 \u0442\u043E\u043F-\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043E\u0431\u0443\u0441\u043B\u043E\u0432\u043B\u0435\u043D \u0431\u043B\u0435\u0441\u0442\u044F\u0449\u0435\u0439 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0435\u0439, \u043A\u0430\u043A \u0438 \u043F\u0440\u043E\u0432\u0430\u043B - \u043D\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0432\u044F\u0437\u0430\u043D \u0441 \u043F\u043B\u043E\u0445\u0438\u043C\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F\u043C\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0430, \u0438 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043E\u0431\u044A\u0435\u043C\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432. "])), (_l()(), i0.ɵeld(43, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0418\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432 \u0442\u0430\u043A\u043E\u043C \u043A\u043B\u044E\u0447\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0431\u0438\u0437\u043D\u0435\u0441 \u043D\u043E\u0432\u043E\u0439 \u044D\u043F\u043E\u0445\u0438, \u043E\u043F\u0438\u0440\u0430\u044F\u0441\u044C \u043D\u0430 \u043D\u0430\u0441\u043B\u0435\u0434\u0438\u0435, \u0442\u0432\u0435\u0440\u0434\u043E \u0432\u044B\u0441\u0442\u043E\u044F\u0442\u044C \u0432\u0441\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u044B, \u043D\u0435 \u043F\u043E\u0442\u0435\u0440\u044F\u0432 \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0438 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u2013 \u0434\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u0441\u0435\u0431\u0435, \u043D\u0435 \u0441\u0442\u0435\u0441\u043D\u044F\u0439\u0442\u0435\u0441\u044C \u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u043E\u0432\u0435\u0442\u0430 \u0443 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432, \u0443\u0447\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u0441\u0432\u043E\u0438\u0445 \u043E\u0448\u0438\u0431\u043A\u0430\u0445. \u041C\u043E\u0436\u043D\u043E \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u044C \u0437\u0430\u043A\u043E\u043D\u044B \u043F\u0440\u0438\u0440\u043E\u0434\u044B, \u043D\u043E \u043E\u043D\u0438 \u0432\u0441\u0435 \u0440\u0430\u0432\u043D\u043E \u0440\u0430\u043D\u043E \u0438\u043B\u0438 \u043F\u043E\u0437\u0434\u043D\u043E \u043D\u0430\u0447\u043D\u0443\u0442 \u043F\u0440\u043E\u0431\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0433\u0440\u043E\u0437\u043D\u044B\u043C\u0438 \u043F\u043E\u0442\u043E\u043A\u0430\u043C\u0438 \u0441\u043A\u0432\u043E\u0437\u044C \u0441\u043B\u0430\u0431\u044B\u0435 \u043C\u0435\u0441\u0442\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439. \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0438\u043B\u044C\u043D\u043E \u0432\u043B\u0438\u044F\u043B\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u0443 \u043C\u0438\u0440\u0430 \u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044E\u0442 \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C. "])), (_l()(), i0.ɵeld(45, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0432\u0441\u0435\u0433\u0434\u0430 \u0432 \u0442\u0440\u0435\u043D\u0434\u0435 \u043D\u043E\u0432\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442 \u043D\u0430\u0448 \u043C\u0438\u0440. \u041D\u0430\u0448\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u0441 \u044D\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u043C \u0443\u043C\u043E\u043C \u0438 \u0432\u044B\u0441\u043E\u043A\u0438\u043C IQ, \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u043E\u043F\u044B\u0442 \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u0441\u0444\u0435\u0440\u0430\u0445. \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F SLR \u0436\u0438\u0432\u0435\u0442 \u0442\u0435\u043C, \u0447\u0442\u043E \u0440\u0435\u0448\u0430\u0435\u0442 \u0441\u043B\u043E\u0436\u043D\u044B\u0435 \u0438 \u043D\u0435\u0440\u0430\u0437\u0440\u0435\u0448\u0438\u043C\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0438 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044F \u0441\u0435\u0431\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043A\u0435\u0439\u0441\u044B \u0438 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438. \u041A\u043B\u0438\u0435\u043D\u0442\u044B \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0446\u0435\u043D\u044F\u0442 \u043D\u0430\u0441 \u0437\u0430 \u0442\u043E, \u0447\u0442\u043E \u043C\u044B \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u0434\u0430\u0435\u043C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438, \u043D\u043E \u0438 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B \u0437\u0430 \u0438\u0445 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u0432\u0430\u0436\u043D\u0443\u044E \u0440\u043E\u043B\u044C \u0438\u0433\u0440\u0430\u0435\u0442 \u043D\u0430\u0448 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u0439 \u043E\u043F\u044B\u0442 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044F \u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0439. "])), (_l()(), i0.ɵeld(47, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041D\u0430\u0448\u0430 \u043C\u0438\u0441\u0441\u0438\u044F - \u043F\u043E\u0432\u044B\u0448\u0430\u0442\u044C \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u0443\u0441\u0438\u043B\u0438\u0432\u0430\u0442\u044C \u0438\u0445 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043D\u044B\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0437\u0430 \u0441\u0447\u0435\u0442 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u043D\u043E\u0439, \u0441\u0431\u0430\u043B\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0438 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438, \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0442\u044C \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u043D\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0442\u044C \u043F\u0440\u043E\u0448\u043B\u043E\u043C\u0443 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0432 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438. "])), (_l()(), i0.ɵeld(49, 0, null, 0, 18, "tab", [], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null]], null, null, null, null)), i0.ɵdid(50, 212992, null, 0, i2.TabDirective, [i2.TabsetComponent, i0.ElementRef, i0.Renderer2], null, null), (_l()(), i0.ɵand(0, null, null, 1, null, View_AboutPageComponent_3)), i0.ɵdid(52, 16384, null, 0, i2.TabHeadingDirective, [i0.TemplateRef, i2.TabDirective], null, null), (_l()(), i0.ɵeld(53, 0, null, null, 14, "div", [["class", "descr-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(54, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u044F\u043C\u0438, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u043C\u0438, \u043F\u0440\u0438\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0438 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438, \u043B\u0435\u0433\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F - \u0447\u0442\u043E\u0431\u044B \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u043E\u0441\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0435\u0435 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0435\u0435 \u0447\u0435\u043C \u0441\u0435\u0439\u0447\u0430\u0441. \u041C\u044B \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C\u0441\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0443 \u0438\u0437\u043D\u0443\u0442\u0440\u0438, \u0447\u0442\u043E\u0431\u044B \u0441\u0442\u0430\u0442\u044C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0438 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438. \u041C\u044B \u0438\u0449\u0435\u043C \u0442\u043E\u0447\u043A\u0438 \u0438 \u0443\u0437\u043B\u044B \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0438\u043D\u0435\u0440\u0433\u0438\u0438 \u0438 \u043A\u043E\u043B\u043B\u0430\u0431\u043E\u0440\u0430\u0446\u0438\u0438, \u043D\u0430\u0445\u043E\u0434\u0438\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0438 \u0434\u043E\u0431\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0445\u043E\u0440\u043E\u0448\u0438\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. "])), (_l()(), i0.ɵeld(56, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0438\u0432\u0430\u0435\u043C \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B, \u0434\u0435\u043B\u0430\u0435\u043C \u0431\u0438\u0437\u043D\u0435\u0441 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C, \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u043C \u0438 \u043B\u0435\u0433\u0430\u043B\u044C\u043D\u044B\u043C. \u0421\u0443\u0442\u044C \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 - \u043F\u043E\u0438\u0441\u043A \u0438 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u0435\u043D\u044F\u044E\u0442 \u0436\u0438\u0437\u043D\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u2013 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0438, \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u043C\u0435\u0441\u0442\u0430\u0445, \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u044B\u0445 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0438 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u044F, \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u0438 \u0433\u043B\u043E\u0431\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u041C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u043D\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u043B\u043E\u0432\u0438\u0442\u044C \u043A\u0430\u0436\u0434\u0443\u044E \u043C\u0438\u043D\u0443\u0442\u0443 \u0441\u0447\u0430\u0441\u0442\u044C\u044F (\u0432\u0435\u0434\u044C \u0436\u0438\u0437\u043D\u044C \u2013 \u043A\u043E\u0440\u043E\u0442\u043A\u0430!), \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u043C \u043F\u0440\u0438\u0435\u043C\u043B\u0435\u043C\u0443\u044E \u0437\u043E\u043D\u0443 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430 \u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C. \u041C\u044B \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u0435\u0435\u043C\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F\u043C\u0438, \u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0435\u043C \u043E\u043F\u044B\u0442 \u0441 \u043C\u043E\u043B\u043E\u0434\u043E\u0441\u0442\u044C\u044E \u0438 \u0434\u0435\u0440\u0437\u043E\u0441\u0442\u044C\u044E, \u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0435\u043C \u044D\u043F\u043E\u0445\u0438 \u0438 \u0442\u0440\u0435\u043D\u0434\u044B. "])), (_l()(), i0.ɵeld(58, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u0435\u043C \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u043C\u043D\u043E\u0433\u0438\u043C \u043E\u0442\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C. \u0414\u0430\u043B\u0435\u043A\u043E \u043D\u0435 \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C, \u043D\u0435 \u0432\u0441\u0435\u043C \u043C\u044B \u043D\u0443\u0436\u043D\u044B. \u0423 \u043D\u0430\u0441 \u0435\u0441\u0442\u044C \u0441\u0432\u043E\u0438 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0438, \u0435\u0441\u043B\u0438 \u043C\u044B \u0432\u0438\u0434\u0438\u043C, \u0447\u0442\u043E \u043E\u043D\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442 \u0441 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0438 \u043C\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u043C, \u0447\u0442\u043E \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0433\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u043D\u0435 \u0434\u043E\u0441\u0442\u0438\u0447\u044C \u2013 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u043C. \u0422\u0435\u043C, \u043A\u0442\u043E \u0441\u0442\u0430\u043B \u043D\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C - \u043C\u044B \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u0432\u043D\u0435\u0434\u0440\u044F\u0442\u044C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438 \u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0434\u0438\u0433\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432, \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0432 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438. \u041C\u044B \u0445\u043E\u0442\u0438\u043C, \u0447\u0442\u043E\u0431\u044B \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0441\u0442\u0430\u043B\u0438 \u0432\u0430\u0436\u043D\u043E\u0439 \u0447\u0430\u0441\u0442\u044C\u044E \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F, \u043F\u043E\u043C\u043E\u0433\u0430\u0442\u044C \u0438\u043C \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C\u0441\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B\u043C\u0438 \u0434\u043B\u044F \u0432\u044B\u0445\u043E\u0434\u0430 \u043D\u0430 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0440\u044B\u043D\u043A\u0438. \u0414\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0435\u0433\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0435\u0439 \u0438 \u0437\u0430\u0434\u0430\u0447 \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043C\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u044D\u043F\u0438\u0446\u0435\u043D\u0442\u0440\u0435 \u0438\u0445 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432, \u043F\u0440\u043E\u043D\u0438\u043A\u043D\u0443\u0442\u044C\u0441\u044F \u0434\u0443\u0445\u043E\u043C \u0438 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043E\u0439 \u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u043E\u043D\u044F\u0442\u044C \u0438\u0445 \u0431\u0438\u0437\u043D\u0435\u0441 \u0438 \u0432\u0441\u0435 \u043B\u0438\u043D\u0438\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430. \u041C\u044B \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0438 \u0441\u0430\u043C\u043E\u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u044E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, \u043D\u0438 \u0432 \u043A\u043E\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435 \u0443\u043C\u043D\u0438\u0447\u0430\u0435\u043C \u0438 \u043D\u0435 \u043C\u0435\u0448\u0430\u0435\u043C \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u0435. \u0414\u043B\u044F \u043D\u0430\u0441 \u0432\u0430\u0436\u043D\u044B \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B, \u043C\u044B \u0434\u043E\u0440\u043E\u0436\u0438\u043C \u043D\u0430\u0448\u0435\u0439 \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u0435\u0439, \u043D\u0430\u0448\u0438 \u0432\u0438\u0434\u0435\u043D\u0438\u0435 \u0438 \u0431\u0438\u0437\u043D\u0435\u0441 \u044D\u0442\u0438\u043A\u0430 \u2013 \u0432\u0430\u0436\u043D\u0435\u0435 \u043D\u0430\u0448\u0435\u0439 \u043F\u0440\u0438\u0431\u044B\u043B\u0438. "])), (_l()(), i0.ɵeld(60, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0412 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C \u043A \u043D\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043E\u0441\u043E\u0437\u043D\u0430\u043D\u0438\u044F \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0430 \u0438\u0445 \u0431\u0438\u0437\u043D\u0435\u0441 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0438 \u043D\u0435\u0440\u0435\u0448\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447, \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0434\u043E\u0441\u0442\u0438\u0447\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439, \u0441 \u0437\u0430\u0434\u0430\u0447\u0430\u043C\u0438 \u0432\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C\u044B \u0432 \u0438\u0445 \u0431\u0438\u0437\u043D\u0435\u0441-\u0441\u0438\u0441\u0442\u0435\u043C\u0443. \u0420\u0435\u0436\u0435 \u0441 \u0437\u0430\u0434\u0430\u0447\u0430\u043C\u0438 \u043F\u0435\u0440\u0435\u0434\u0435\u043B\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u043B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0431\u0438\u0437\u043D\u0435\u0441-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442\u043E\u0432. \u0412 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0430\u043A\u0442\u0438\u0432\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C \u0437\u0430\u0434\u0430\u0447\u0438 \u043F\u043E \u043E\u0446\u0438\u0444\u0440\u043E\u0432\u043A\u0435 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430\u043C\u0438 \u0441 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0418\u0418. "])), (_l()(), i0.ɵeld(62, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0417\u0430\u0434\u0430\u0447\u0438 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441\u0435 \u0440\u0435\u0448\u0430\u044E\u0442\u0441\u044F \u043B\u0435\u0433\u043A\u043E, \u043A\u043E\u0433\u0434\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B \u0432\u0441\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u043D\u043E \u0447\u0430\u0441\u0442\u043E \u0431\u044B\u0432\u0430\u0435\u0442 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442. \u041D\u0430\u043C \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043F\u0440\u043E\u044F\u0441\u043D\u044F\u0442\u044C \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u0443\u0442\u043E\u0447\u043D\u044F\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438, \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0432 \u043C\u0435\u043B\u043E\u0447\u0430\u0445, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C\u044B\u0435 \u043D\u0430\u043C\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0431\u044B\u043B\u0438 \u0442\u043E\u0447\u043D\u044B\u043C\u0438. \u0414\u0430\u043B\u0435\u0435, \u043C\u044B \u0432\u044B\u0434\u0430\u0435\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0438 \u043F\u043E\u0441\u043B\u0435 \u0435\u0433\u043E \u0432\u044B\u0431\u043E\u0440\u0430 \u043C\u044B \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u0441\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430\u043C\u0438 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F, \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0438 \u0432\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043E\u043A. "])), (_l()(), i0.ɵeld(64, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0414\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0432\u044B\u0448\u0435\u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447 \u0443 \u043D\u0430\u0441 \u043D\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u044B \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u0435\u043C\u044B \u0438 \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0438, \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u043F\u043E\u0434\u0440\u044F\u0434\u043D\u044B\u043C\u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F\u043C\u0438. \u041C\u044B \u0437\u043D\u0430\u0435\u043C - \u043A\u0443\u0434\u0430 \u043D\u0443\u0436\u043D\u043E \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C, \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u043C -\u0447\u0442\u043E \u0438 \u0443 \u043A\u043E\u0433\u043E \u0441\u043F\u0440\u043E\u0441\u0438\u0442\u044C, \u0438 \u043D\u0430 \u0447\u0442\u043E \u043D\u0435 \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435. "])), (_l()(), i0.ɵeld(66, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u043E, \u043C\u044B \u0432\u044B\u0434\u0430\u0435\u043C \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0435\u043C \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0438 \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0432 \u0441\u0435\u043A\u0442\u043E\u0440\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0441 \u0435\u0433\u043E \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0430\u043C\u0438. \u041C\u044B \u043F\u043E\u0439\u043C\u0435\u043C \u0412\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441 \u0438 \u0431\u0443\u0434\u0435\u043C \u043E\u0431\u0449\u0430\u0442\u044C\u0441\u044F \u0441 \u0412\u0430\u043C\u0438 \u043D\u0430 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u043C \u044F\u0437\u044B\u043A\u0435. "])), (_l()(), i0.ɵeld(68, 0, null, null, 1, "section-contacts-component", [], null, null, null, i3.View_SectionContactsComponent_0, i3.RenderType_SectionContactsComponent)), i0.ɵdid(69, 114688, null, 0, i4.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 16, 0); _ck(_v, 29, 0); _ck(_v, 50, 0); var currVal_10 = _co.PagesType.About; var currVal_11 = "\u041A\u0430\u0440\u044C\u0435\u0440\u0430"; var currVal_12 = _co.PagesLinksMap.get(_co.PagesType.Career); _ck(_v, 69, 0, currVal_10, currVal_11, currVal_12); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 14).clazz; _ck(_v, 13, 0, currVal_0); var currVal_1 = i0.ɵnov(_v, 16).id; var currVal_2 = i0.ɵnov(_v, 16).active; var currVal_3 = i0.ɵnov(_v, 16).addClass; _ck(_v, 15, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = i0.ɵnov(_v, 29).id; var currVal_5 = i0.ɵnov(_v, 29).active; var currVal_6 = i0.ɵnov(_v, 29).addClass; _ck(_v, 28, 0, currVal_4, currVal_5, currVal_6); var currVal_7 = i0.ɵnov(_v, 50).id; var currVal_8 = i0.ɵnov(_v, 50).active; var currVal_9 = i0.ɵnov(_v, 50).addClass; _ck(_v, 49, 0, currVal_7, currVal_8, currVal_9); }); }
exports.View_AboutPageComponent_0 = View_AboutPageComponent_0;
function View_AboutPageComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "about-page-component", [], null, null, null, View_AboutPageComponent_0, RenderType_AboutPageComponent)), i0.ɵdid(1, 1097728, null, 0, i5.AboutPageComponent, [i6.ActivatedRoute], null, null)], null, null); }
exports.View_AboutPageComponent_Host_0 = View_AboutPageComponent_Host_0;
var AboutPageComponentNgFactory = i0.ɵccf("about-page-component", i5.AboutPageComponent, View_AboutPageComponent_Host_0, {}, {}, []);
exports.AboutPageComponentNgFactory = AboutPageComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var ngx_bootstrap_1 = __webpack_require__(/*! ngx-bootstrap */ "ngx-bootstrap");
var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    AboutPageComponent.prototype.scrollTo = function (className) {
        console.log(className);
        var elementList = document.querySelectorAll("." + className);
        var element = elementList[0];
        element.scrollIntoView({ behavior: "smooth" });
    };
    AboutPageComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.tabId) {
                _this.staticTabs.tabs[params.tabId].active = true;
                _this.scrollTo("js-scroll-tabs");
            }
        });
    };
    return AboutPageComponent;
}());
exports.AboutPageComponent = AboutPageComponent;


/***/ }),

/***/ "./src/app/pages/career-page/career-page.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/pages/career-page/career-page.component.ngfactory.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ./career-page.component */ "./src/app/pages/career-page/career-page.component.ts");
var styles_CareerPageComponent = [];
var RenderType_CareerPageComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_CareerPageComponent, data: {} });
exports.RenderType_CareerPageComponent = RenderType_CareerPageComponent;
function View_CareerPageComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 29, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "section", [["class", "section section-top -career"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 25, "section", [["class", "section section-inner pb-0"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 24, "div", [["class", "block-inner mb-150"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 23, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "section-heading"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h1", [["class", "h2"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041A\u0430\u0440\u044C\u0435\u0440\u0430"])), (_l()(), i0.ɵeld(8, 0, null, null, 19, "div", [["class", "mb-lg"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 18, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(10, 0, null, null, 7, "div", [["class", "col-lg-8"], ["data-aos", "fade-right"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(11, 0, null, null, 6, "div", [["class", "descr-block mob-lg-mb-md"]], null, null, null, null, null)), (_l()(), i0.ɵeld(12, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0422\u044B \u0442\u0430\u043B\u0430\u043D\u0442\u043B\u0438\u0432 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u0435\u043D, \u043D\u043E \u0442\u0435\u0431\u0435 \u043D\u0435 \u0434\u0430\u044E\u0442 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u0442\u0432\u043E\u0435\u0439 \u0441\u0444\u0435\u0440\u0435, \u043D\u0435\u0442 \u0434\u0440\u0430\u0439\u0432\u0430 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u043B\u0438 \u043D\u0430 \u0444\u0440\u0438\u043B\u0430\u043D\u0441\u0435, \u043D\u0430\u0434\u043E\u0435\u043B\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432 \u043E\u0434\u0438\u043D\u043E\u0447\u043A\u0443 \u0432 \u043D\u0430\u0448\u0435\u0439 \u0441\u0444\u0435\u0440\u0435, \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0437\u043D\u0430\u043D\u0438\u0439, \u043E\u043F\u044B\u0442\u0430 \u0438 \u0441\u043C\u0435\u043B\u043E\u0441\u0442\u0438 \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u0442\u0432\u043E\u0438\u043C\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438? \u2013 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0441\u044F \u0441 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043D\u0438\u0436\u0435. "])), (_l()(), i0.ɵeld(14, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0415\u0441\u043B\u0438 \u0442\u044B \u0443\u043C\u0435\u0435\u0448\u044C \u043C\u044B\u0441\u043B\u0438\u0442\u044C \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E \u0438 \u0430\u0441\u0441\u0438\u043C\u0435\u0442\u0440\u0438\u0447\u043D\u043E, \u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438\u0432\u043D\u043E \u0438 \u0434\u043E\u0432\u043E\u0434\u0438\u0442\u044C \u043D\u0430\u0447\u0430\u0442\u043E\u0435 \u0434\u043E \u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F, \u0445\u043E\u0447\u0435\u0448\u044C \u0441\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0441 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u043C\u0438 \u0432\u044B\u0437\u043E\u0432\u0430\u043C\u0438, \u0441\u043E\u0441\u043A\u0443\u0447\u0438\u043B\u0441\u044F \u0437\u0430 \u0434\u0440\u0430\u0439\u0432\u043E\u043C \u2013 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043C\u044B \u043D\u0430\u0439\u0434\u0435\u043C \u0442\u043E\u0447\u043A\u0438 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430. \u041C\u044B \u043D\u0435 \u043E\u0431\u0435\u0449\u0430\u0435\u043C \u043B\u0435\u0433\u043A\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u0438 \u043C\u043D\u043E\u0433\u043E \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445, \u043C\u044B \u043B\u0438\u0448\u044C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0438 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u044B \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0439 \u043B\u0435\u0433\u0430\u043B\u044C\u043D\u043E\u0439 \u0432\u044B\u0441\u043E\u043A\u043E\u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u043C\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430. \u041D\u043E \u043D\u0435 \u0432\u0441\u0435\u043C\u2026 "])), (_l()(), i0.ɵeld(16, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B \u043A \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C \u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C, \u0438 \u043D\u0435 \u0432\u0441\u0435 \u0441\u043E\u0438\u0441\u043A\u0430\u0442\u0435\u043B\u0438 \u0441\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0441 \u0432\u044B\u0437\u043E\u0432\u0430\u043C\u0438 \u0438 \u0442\u0435\u043C\u043F\u0430\u043C\u0438. \u041C\u044B \u0443\u0432\u0430\u0436\u0430\u0435\u043C \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0438 \u0446\u0435\u043D\u0438\u043C \u0432\u0440\u0435\u043C\u044F, \u043F\u043E\u043D\u0438\u043C\u0430\u044F \u0431\u044B\u0441\u0442\u0440\u043E\u043C\u0435\u043D\u044F\u044E\u0449\u0438\u0439\u0441\u044F \u043C\u0438\u0440, \u0438 \u043D\u0435 \u0445\u043E\u0442\u0438\u043C \u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043B\u043E\u0447\u0430\u0445. \u0415\u0441\u043B\u0438 \u0442\u044B \u043D\u0435 \u0443\u0432\u0435\u0440\u0435\u043D \u0432 \u0441\u0432\u043E\u0438\u0445 \u0441\u0438\u043B\u0430\u0445 \u0438\u043B\u0438 \u0442\u0432\u043E\u0439 \u043E\u0431\u0440\u0430\u0437 \u0436\u0438\u0437\u043D\u0438 \u0438 \u043C\u044B\u0448\u043B\u0435\u043D\u0438\u044F \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u0441 \u043D\u0430\u0448\u0438\u043C, \u0442\u043E \u043D\u0435 \u0441\u0442\u043E\u0438\u0442 \u0432\u043E\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0440\u0435\u043C\u044F. "])), (_l()(), i0.ɵeld(18, 0, null, null, 9, "div", [["class", "col-lg-4"], ["data-aos", "fade-left"], ["data-aos-offset", "300"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(19, 0, null, null, 8, "div", [["class", "descr-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(20, 0, null, null, 1, "p", [["class", "font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0414\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0432 \u0441\u0435\u0431\u0435 \u0443\u0432\u0435\u0440\u0435\u043D \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043D\u0430\u0448\u0435 \u0432\u0438\u0434\u0435\u043D\u0438\u0435: "])), (_l()(), i0.ɵeld(22, 0, null, null, 2, "p", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), i0.ɵeld(23, 0, null, null, 1, "a", [["class", "link link-primary fz-28"], ["href", "mailto:career@slr.legal"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["career@slr.legal"])), (_l()(), i0.ɵeld(25, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), i0.ɵeld(26, 0, null, null, 1, "span", [["class", "fz-16 color-light-grey d-block"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0434\u043B\u044F \u0440\u0435\u0437\u044E\u043C\u0435 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043F\u0438\u0441\u0435\u043C"])), (_l()(), i0.ɵeld(28, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(29, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Career; var currVal_1 = "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.Contacts); _ck(_v, 29, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_CareerPageComponent_0 = View_CareerPageComponent_0;
function View_CareerPageComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "career-page-component", [], null, null, null, View_CareerPageComponent_0, RenderType_CareerPageComponent)), i0.ɵdid(1, 49152, null, 0, i3.CareerPageComponent, [], null, null)], null, null); }
exports.View_CareerPageComponent_Host_0 = View_CareerPageComponent_Host_0;
var CareerPageComponentNgFactory = i0.ɵccf("career-page-component", i3.CareerPageComponent, View_CareerPageComponent_Host_0, {}, {}, []);
exports.CareerPageComponentNgFactory = CareerPageComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/career-page/career-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/career-page/career-page.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var CareerPageComponent = /** @class */ (function () {
    function CareerPageComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return CareerPageComponent;
}());
exports.CareerPageComponent = CareerPageComponent;


/***/ }),

/***/ "./src/app/pages/contacts-page/contacts-page.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/pages/contacts-page/contacts-page.component.ngfactory.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ./contacts-page.component */ "./src/app/pages/contacts-page/contacts-page.component.ts");
var styles_ContactsPageComponent = [];
var RenderType_ContactsPageComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ContactsPageComponent, data: {} });
exports.RenderType_ContactsPageComponent = RenderType_ContactsPageComponent;
function View_ContactsPageComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(2, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Contacts; _ck(_v, 2, 0, currVal_0); }, null); }
exports.View_ContactsPageComponent_0 = View_ContactsPageComponent_0;
function View_ContactsPageComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "contacts-page-component", [], null, null, null, View_ContactsPageComponent_0, RenderType_ContactsPageComponent)), i0.ɵdid(1, 49152, null, 0, i3.ContactsPageComponent, [], null, null)], null, null); }
exports.View_ContactsPageComponent_Host_0 = View_ContactsPageComponent_Host_0;
var ContactsPageComponentNgFactory = i0.ɵccf("contacts-page-component", i3.ContactsPageComponent, View_ContactsPageComponent_Host_0, {}, {}, []);
exports.ContactsPageComponentNgFactory = ContactsPageComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/contacts-page/contacts-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/contacts-page/contacts-page.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var ContactsPageComponent = /** @class */ (function () {
    function ContactsPageComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return ContactsPageComponent;
}());
exports.ContactsPageComponent = ContactsPageComponent;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/1_the-range-of-legal-practices/the-range-of-legal-practices.component.ngfactory.js":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/1_the-range-of-legal-practices/the-range-of-legal-practices.component.ngfactory.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ./the-range-of-legal-practices.component */ "./src/app/pages/expertise-page/components/1_the-range-of-legal-practices/the-range-of-legal-practices.component.ts");
var styles_TheRangeOfLegalPracticesExpertiseComponent = [];
var RenderType_TheRangeOfLegalPracticesExpertiseComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_TheRangeOfLegalPracticesExpertiseComponent, data: {} });
exports.RenderType_TheRangeOfLegalPracticesExpertiseComponent = RenderType_TheRangeOfLegalPracticesExpertiseComponent;
function View_TheRangeOfLegalPracticesExpertiseComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 31, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 28, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 27, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 26, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 25, "div", [["class", "col-lg-8 "]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0421\u043F\u0435\u043A\u0442\u0440 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u0430\u043A\u0442\u0438\u043A"])), (_l()(), i0.ɵeld(8, 0, null, null, 21, "div", [["class", "descr-block "], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041B\u044E\u0431\u043E\u0439 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0435\u0439\u0441\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0432 \u044D\u043F\u043E\u0445\u0443 \u043F\u0435\u0440\u0435\u043C\u0435\u043D, \u0432 \u0431\u043E\u0440\u044C\u0431\u0435 \u0437\u0430 \u0440\u044B\u043D\u043A\u0438 \u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0441\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0437\u0430\u043A\u043E\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u0422\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u043E\u0442\u0434\u0430\u044E\u0442 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0435\u043D\u0438\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0441 \u0432\u043D\u0435\u0448\u043D\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 \u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u044E\u0440\u0438\u0441\u0442\u043E\u0432, \u043D\u0435\u0436\u0435\u043B\u0438 \u0438\u043C\u0435\u0442\u044C \u0448\u0442\u0430\u0442\u043D\u043E\u0433\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430. \u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0433\u0440\u0443\u043F\u043F\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u044E\u0440\u0438\u0441\u0442\u043E\u0432 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0448\u0442\u0430\u0442\u043D\u043E\u0433\u043E - \u0432 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u043F\u044B\u0442\u0430 \u0438 \u043D\u0430\u0432\u044B\u043A\u043E\u0432, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432 \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u0441\u0440\u043E\u043A\u0438, \u0441 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043C\u0438, \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u0445. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F SLR \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F, \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u0438 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0441\u043C\u043E\u0433\u0443\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F \u0432 \u0441\u0432\u043E\u0435\u0439 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0441 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043E\u043C, \u0438 \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u0442\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F \u0438 \u0441\u0438\u043B\u044B \u043D\u0430 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u0435 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043E \u0448\u0442\u0430\u0442\u043D\u044B\u043C \u044E\u0440\u0438\u0441\u0442\u043E\u043C \u043C\u043D\u043E\u0433\u043E\u0442\u043E\u043C\u043D\u044B\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043D\u043E\u0440\u043C \u0438 \u043F\u0440\u0430\u0432\u0438\u043B. "])), (_l()(), i0.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041D\u0438\u0436\u0435 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D \u043F\u0435\u0440\u0435\u0447\u0435\u043D\u044C \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0432\u0438\u0434\u043E\u0432 \u043D\u0430\u0448\u0438\u0445 \u0443\u0441\u043B\u0443\u0433 \u0432 \u0441\u0444\u0435\u0440\u0435 IT, \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, call-\u0446\u0435\u043D\u0442\u0440\u043E\u0432 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439: "])), (_l()(), i0.ɵeld(15, 0, null, null, 12, "ul", [["class", "square-list font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵeld(16, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F\u043C, \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0446\u0435\u043B\u044F\u043C \u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430; "])), (_l()(), i0.ɵeld(18, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0430\u043D\u0430\u043B\u0438\u0437 \u0438 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043B\u0435\u0433\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0443\u0433\u0440\u043E\u0437 \u0431\u0438\u0437\u043D\u0435\u0441\u0443 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u0441 \u0446\u0435\u043B\u044F\u043C\u0438; "])), (_l()(), i0.ɵeld(20, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F IT-\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, call-\u0446\u0435\u043D\u0442\u0440\u043E\u0432; "])), (_l()(), i0.ɵeld(22, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C\u043E\u0432 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u043C\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C\u0438, "])), (_l()(), i0.ɵeld(24, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0445 \u043C\u0430\u0440\u043E\u043A \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438; "])), (_l()(), i0.ɵeld(26, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u043E-\u0438\u0441\u043A\u043E\u0432\u0430\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u0437\u0430\u0449\u0438\u0442\u0430 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043E\u043A \u0438 \u043E\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0443\u0433\u0440\u043E\u0437. "])), (_l()(), i0.ɵeld(28, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F SLR \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0434\u0440\u0443\u0433\u0438\u0445 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0443\u0441\u043B\u0443\u0433 \u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0441\u0435\u043A\u0442\u043E\u0440\u0430\u0445 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B \u043D\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C. \u041D\u0430\u0448 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u0448\u0430\u043D\u0441\u044B \u043D\u0430 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0439 \u0434\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0432 \u0437\u0430\u043A\u043E\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0438 \u0440\u0435\u043D\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0412\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430. "])), (_l()(), i0.ɵeld(30, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(31, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Expertise; var currVal_1 = "\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.Industry); _ck(_v, 31, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_TheRangeOfLegalPracticesExpertiseComponent_0 = View_TheRangeOfLegalPracticesExpertiseComponent_0;
function View_TheRangeOfLegalPracticesExpertiseComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "the-range-of-legal-practices-epertise-component", [], null, null, null, View_TheRangeOfLegalPracticesExpertiseComponent_0, RenderType_TheRangeOfLegalPracticesExpertiseComponent)), i0.ɵdid(1, 49152, null, 0, i3.TheRangeOfLegalPracticesExpertiseComponent, [], null, null)], null, null); }
exports.View_TheRangeOfLegalPracticesExpertiseComponent_Host_0 = View_TheRangeOfLegalPracticesExpertiseComponent_Host_0;
var TheRangeOfLegalPracticesExpertiseComponentNgFactory = i0.ɵccf("the-range-of-legal-practices-epertise-component", i3.TheRangeOfLegalPracticesExpertiseComponent, View_TheRangeOfLegalPracticesExpertiseComponent_Host_0, {}, {}, []);
exports.TheRangeOfLegalPracticesExpertiseComponentNgFactory = TheRangeOfLegalPracticesExpertiseComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/1_the-range-of-legal-practices/the-range-of-legal-practices.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/1_the-range-of-legal-practices/the-range-of-legal-practices.component.ts ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var TheRangeOfLegalPracticesExpertiseComponent = /** @class */ (function () {
    function TheRangeOfLegalPracticesExpertiseComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return TheRangeOfLegalPracticesExpertiseComponent;
}());
exports.TheRangeOfLegalPracticesExpertiseComponent = TheRangeOfLegalPracticesExpertiseComponent;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/2_accounting/accounting.component.ngfactory.js":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/2_accounting/accounting.component.ngfactory.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ./accounting.component */ "./src/app/pages/expertise-page/components/2_accounting/accounting.component.ts");
var styles_AccountingExpertiseComponent = [];
var RenderType_AccountingExpertiseComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AccountingExpertiseComponent, data: {} });
exports.RenderType_AccountingExpertiseComponent = RenderType_AccountingExpertiseComponent;
function View_AccountingExpertiseComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 27, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 24, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 23, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 22, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 21, "div", [["class", "col-lg-8 "]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0439 \u0443\u0447\u0435\u0442, \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0434\u0435\u043B\u043E\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E "])), (_l()(), i0.ɵeld(8, 0, null, null, 17, "div", [["class", "descr-block "], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u0438 \u043A\u0430\u0434\u0440\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0435\u0442\u0430 \u0441 \u043E\u0445\u0440\u0430\u043D\u043E\u0439 \u0442\u0440\u0443\u0434\u0430 \u2013 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u0441\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0438\u0433\u0440\u0430\u044E\u0449\u0435\u0439 \u00AB\u0432 \u0434\u043E\u043B\u0433\u0443\u044E\u00BB \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0435 \u0441 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u043E\u0439 \u0432\u044B\u0445\u043E\u0434\u0430 \u043D\u0430 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u044B\u043D\u043A\u0438. \u041E\u0434\u043D\u0430\u043A\u043E \u0434\u0430\u043B\u0435\u043A\u043E \u043D\u0435 \u043A\u0430\u0436\u0434\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043C\u043E\u0436\u0435\u0442 \u0441\u0435\u0431\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430 \u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0432 \u0448\u0442\u0430\u0442\u0435 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0430, \u043A\u0430\u0434\u0440\u043E\u0432\u0438\u043A\u0430 \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430 \u043F\u043E \u043E\u0445\u0440\u0430\u043D\u0435 \u0442\u0440\u0443\u0434\u0430 \u0438 \u0442\u0435\u0445\u043D\u0438\u043A\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0441 \u0431\u0430\u0433\u0430\u0436\u043E\u043C \u0437\u043D\u0430\u043D\u0438\u0439 \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u043A \u0432 \u043D\u0443\u0436\u043D\u043E\u0439 \u043E\u0442\u0440\u0430\u0441\u043B\u0438. \u0411\u0435\u0437 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432\u0435\u043B\u0438\u043A\u0430 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0435 \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B \u043D\u0430 \u0448\u0442\u0440\u0430\u0444\u044B \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u0449\u0438\u0445 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0422\u0430\u043A \u0436\u0435, \u043F\u0440\u0438 \u0432\u044B\u0445\u043E\u0434\u0435 \u043D\u0430 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u044B\u043D\u043A\u0438, \u0412\u0430\u0448\u0438\u043C \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C \u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u043C\u0438 \u043E\u0442\u0447\u0435\u0442\u0430\u043C\u0438 \u0432 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u2013 \u041C\u0421\u0424\u041E. "])), (_l()(), i0.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041D\u0438\u0436\u0435 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D \u043F\u0435\u0440\u0435\u0447\u0435\u043D\u044C \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0432\u0438\u0434\u043E\u0432 \u043D\u0430\u0448\u0438\u0445 \u0443\u0441\u043B\u0443\u0433 \u0432 \u0441\u0444\u0435\u0440\u0435 IT, \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, call-\u0446\u0435\u043D\u0442\u0440\u043E\u0432 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439: "])), (_l()(), i0.ɵeld(15, 0, null, null, 8, "ul", [["class", "square-list font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵeld(16, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u043F\u043E\u043B\u043D\u043E\u0435 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0430\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433\u0430; "])), (_l()(), i0.ɵeld(18, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0430\u043B\u043E\u0433\u043E\u043E\u0431\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430; "])), (_l()(), i0.ɵeld(20, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u0430\u0443\u0434\u0438\u0442 \u0438 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0443\u0447\u0435\u0442\u0430 \u043F\u043E \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C (\u041C\u0421\u0424\u041E); "])), (_l()(), i0.ɵeld(22, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0434\u0440\u0443\u0433\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u043E\u0445\u0440\u0430\u043D\u043E\u0439 \u0442\u0440\u0443\u0434\u0430 \u0438 \u0442\u0435\u0445\u043D\u0438\u043A\u043E\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u043A\u0430\u0434\u0440\u043E\u0432\u044B\u043C \u0434\u0435\u043B\u043E\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E\u043C. "])), (_l()(), i0.ɵeld(24, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F SLR \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0434\u0440\u0443\u0433\u0438\u0445 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0445, \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0438\u0445 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u0443\u0441\u043B\u0443\u0433, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u043D\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C, \u0432 \u0442.\u0447. \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u043D\u0435 \u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u0441\u043A\u0438\u0445 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440 \u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432. "])), (_l()(), i0.ɵeld(26, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(27, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Expertise; var currVal_1 = "\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.Industry); _ck(_v, 27, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_AccountingExpertiseComponent_0 = View_AccountingExpertiseComponent_0;
function View_AccountingExpertiseComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "accounting-expertise-component", [], null, null, null, View_AccountingExpertiseComponent_0, RenderType_AccountingExpertiseComponent)), i0.ɵdid(1, 49152, null, 0, i3.AccountingExpertiseComponent, [], null, null)], null, null); }
exports.View_AccountingExpertiseComponent_Host_0 = View_AccountingExpertiseComponent_Host_0;
var AccountingExpertiseComponentNgFactory = i0.ɵccf("accounting-expertise-component", i3.AccountingExpertiseComponent, View_AccountingExpertiseComponent_Host_0, {}, {}, []);
exports.AccountingExpertiseComponentNgFactory = AccountingExpertiseComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/2_accounting/accounting.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/2_accounting/accounting.component.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var AccountingExpertiseComponent = /** @class */ (function () {
    function AccountingExpertiseComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return AccountingExpertiseComponent;
}());
exports.AccountingExpertiseComponent = AccountingExpertiseComponent;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/3_marketing-and-PR/marketing-and-pr.component.ngfactory.js":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/3_marketing-and-PR/marketing-and-pr.component.ngfactory.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ./marketing-and-pr.component */ "./src/app/pages/expertise-page/components/3_marketing-and-PR/marketing-and-pr.component.ts");
var styles_MarketingAndPRExpertiseComponent = [];
var RenderType_MarketingAndPRExpertiseComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_MarketingAndPRExpertiseComponent, data: {} });
exports.RenderType_MarketingAndPRExpertiseComponent = RenderType_MarketingAndPRExpertiseComponent;
function View_MarketingAndPRExpertiseComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 18, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 15, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 14, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 12, "div", [["class", "col-lg-8 "]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0438 PR \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438, \u0437\u0430\u043D\u044F\u0442\u0438\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0439 \u0438 \u043D\u0438\u0448 "])), (_l()(), i0.ɵeld(8, 0, null, null, 8, "div", [["class", "descr-block "], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u043D\u0435 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u0441\u044F \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C \u0438 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043E\u043C, seo-\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F\u043C\u0438 \u0438 smm-\u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435\u043C, \u0430 \u0442\u0430\u043A\u0436\u0435 - \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E\u043C \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438. \u042D\u0442\u043E \u043D\u0438\u0448\u0438 \u0443\u0437\u043A\u043E\u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u0441\u044F \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C, \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043D\u0438\u0448, \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043E\u0442\u043B\u0438\u0447\u0438\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043E\u0442 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432, \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0435\u043C \u0437\u0430 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0435\u0439, \u0440\u044B\u043D\u043A\u043E\u043C \u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0430\u043C\u0438, \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u0430\u0441\u0441\u0438\u043C\u0435\u0442\u0440\u0438\u0447\u043D\u044B\u0435 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0442\u0430\u043A\u0442\u0438\u043A\u0438 - \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u044B\u0435 \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438\u0432\u043D\u044B\u0435. \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u0438 PR \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043C\u044B \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043C \u0432 \u0438\u0445 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u044C \u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0432 HR \u0438 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0438. "])), (_l()(), i0.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0412 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u0445 \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043C\u044B \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u043C \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430\u0445 \u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F \u0441 \u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438-\u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F\u043C\u0438 - \u0434\u0438\u0437\u0430\u0439\u043D\u0430, \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0438\u043B\u044F, \u0431\u0440\u0435\u043D\u0434\u0438\u043D\u0433\u0430 \u0438 \u0440\u0435\u0431\u0440\u0435\u043D\u0434\u0438\u043D\u0433\u0430, \u043C\u0435\u0434\u0438\u0430 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432. \u0414\u0435\u043B\u0430\u0435\u043C \u044D\u0442\u043E \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u043B\u0438 \u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u044F\u043B\u0438 \u0432\u0438\u0434\u0435\u043D\u0438\u0435 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0435\u0435 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B \u0438, \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u0436\u0435, \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u043B\u0438 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u044B\u0439 \u044D\u0444\u0444\u0435\u043A\u0442. "])), (_l()(), i0.ɵeld(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041D\u0430\u0441 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u044E\u0442 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u044B\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u00AB\u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u0430-\u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A\u0430\u00BB \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u043E\u0442\u0441\u0442\u0430\u0438\u0432\u0430\u044F \u0435\u0433\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0430\u043C\u0438. \u0422\u0430\u043A\u0436\u0435, \u043D\u0430\u0441 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u044E\u0442 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u044F\u0441\u043D\u0438\u0442\u044C \u0438 \u0443\u0441\u0442\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u0438\u0447\u0438\u043D\u044B \u043F\u0440\u043E\u0432\u0430\u043B\u044C\u043D\u044B\u0445 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0438 \u0432\u043D\u0435\u0434\u0440\u0438\u0442\u044C \u0430\u043D\u0442\u0438\u043A\u0440\u0438\u0437\u0438\u0441\u043D\u044B\u0439 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433. "])), (_l()(), i0.ɵeld(17, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(18, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Expertise; var currVal_1 = "\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.Industry); _ck(_v, 18, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_MarketingAndPRExpertiseComponent_0 = View_MarketingAndPRExpertiseComponent_0;
function View_MarketingAndPRExpertiseComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "marketing-and-pr-expertise-component", [], null, null, null, View_MarketingAndPRExpertiseComponent_0, RenderType_MarketingAndPRExpertiseComponent)), i0.ɵdid(1, 49152, null, 0, i3.MarketingAndPRExpertiseComponent, [], null, null)], null, null); }
exports.View_MarketingAndPRExpertiseComponent_Host_0 = View_MarketingAndPRExpertiseComponent_Host_0;
var MarketingAndPRExpertiseComponentNgFactory = i0.ɵccf("marketing-and-pr-expertise-component", i3.MarketingAndPRExpertiseComponent, View_MarketingAndPRExpertiseComponent_Host_0, {}, {}, []);
exports.MarketingAndPRExpertiseComponentNgFactory = MarketingAndPRExpertiseComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/3_marketing-and-PR/marketing-and-pr.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/3_marketing-and-PR/marketing-and-pr.component.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var MarketingAndPRExpertiseComponent = /** @class */ (function () {
    function MarketingAndPRExpertiseComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return MarketingAndPRExpertiseComponent;
}());
exports.MarketingAndPRExpertiseComponent = MarketingAndPRExpertiseComponent;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/4_crisis-management/crisis-management.component.ngfactory.js":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/4_crisis-management/crisis-management.component.ngfactory.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ./crisis-management.component */ "./src/app/pages/expertise-page/components/4_crisis-management/crisis-management.component.ts");
var styles_CrisisManagementExpertiseComponent = [];
var RenderType_CrisisManagementExpertiseComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_CrisisManagementExpertiseComponent, data: {} });
exports.RenderType_CrisisManagementExpertiseComponent = RenderType_CrisisManagementExpertiseComponent;
function View_CrisisManagementExpertiseComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 20, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 17, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 16, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 15, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 14, "div", [["class", "col-lg-8 "]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0410\u043D\u0442\u0438\u043A\u0440\u0438\u0437\u0438\u0441\u043D\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "])), (_l()(), i0.ɵeld(8, 0, null, null, 10, "div", [["class", "descr-block "], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0432\u044B\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0449\u0435\u0439 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043A\u0440\u0438\u0437\u0438\u0441\u044B. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0423\u0441\u043B\u0443\u0433\u0438 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430 \u043F\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043A\u0440\u0438\u0437\u0438\u0441\u0430 \u0438 \u043D\u0438\u0437\u043A\u0438\u0445 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u043E\u0432 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0431\u0438\u0437\u043D\u0435\u0441\u0435 \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0433\u043E\u0440\u0430\u0437\u0434\u043E \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u0435\u0435, \u0447\u0435\u043C \u0432 \u0431\u043E\u043B\u0435\u0435 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434. \u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 SLR \u0432\u044B\u0442\u044F\u0433\u0438\u0432\u0430\u044E\u0442 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0438\u0437 \u0434\u043E\u043B\u0433\u043E\u0432\u044B\u0445 \u044F\u043C, \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u0443\u044E\u0442 \u0443\u043C\u044B \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043E\u0432 \u0438 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439, \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0441\u0442\u043E\u044F\u0442 \u043D\u0435\u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043D\u044B\u043C \u043C\u0435\u0442\u043E\u0434\u0430\u043C \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430, \u0433\u043B\u0443\u0431\u043E\u043A\u043E \u0432\u043D\u0438\u043A\u0430\u044E\u0442 \u0432 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0443, \u043F\u0435\u0440\u0435\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044E\u0442 \u043E\u0442\u0447\u0451\u0442\u043D\u043E\u0441\u0442\u044C \u0438 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E\u0442 \u043A \u0437\u0430\u043C\u0435\u043D\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u043D\u0435 \u043D\u0430 \u0441\u0432\u043E\u0435\u043C \u043C\u0435\u0441\u0442\u0435. "])), (_l()(), i0.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u043C \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0434\u043E \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0434\u0435\u043B \u043A \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044E \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438, \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430, \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u044B\u0445 \u0443\u0447\u0435\u0442\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C - \u0437\u043E\u043D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438. \u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0430\u043D\u0442\u0438\u043A\u0440\u0438\u0437\u0438\u0441\u043D\u043E\u0433\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u043C \u043E\u0431\u0449\u0438\u0439 \u044F\u0437\u044B\u043A \u0441 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C\u0438, \u043C\u0438\u043D\u0438\u043C\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u0441\u0442\u0440\u0435\u0441\u0441\u044B \u0438 \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u044D\u043C\u043E\u0446\u0438\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u044B, \u0432\u043E\u0432\u043B\u0435\u043A\u0430\u0435\u043C \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439, \u0438 \u043D\u0430 \u0441\u0435\u0431\u044F \u0431\u0435\u0440\u0435\u043C \u0441\u0430\u043C\u0443\u044E \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u2013 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432. "])), (_l()(), i0.ɵeld(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u0432\u043D\u0435\u0434\u0440\u044F\u0435\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0442\u043E\u0447\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0438 \u043C\u0435\u0442\u043E\u0434\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0437\u0430\u043A\u043E\u043D\u044B \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u041F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0434\u0430\u0435\u0442 \u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u0443\u0435\u043C\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0438 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u0431\u0438\u0437\u043D\u0435\u0441, \u043F\u043E\u0432\u044B\u0448\u0430\u0435\u0442 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430 \u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0432 \u0446\u0435\u043B\u043E\u043C \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u043D\u0430 30 %, \u043F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E \u043A \u0441\u0435\u0439\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u043E\u0442\u0440\u044F\u0441\u0435\u043D\u0438\u044F\u043C. \u0423 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 SLR \u043A\u0440\u0438\u0437\u0438\u0441-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0437\u0430\u0434\u0430\u0447\u0430\u043C\u0438 \u043D\u0430 \u0440\u0430\u0437\u043D\u044B\u0445 \u0441\u0442\u0430\u0434\u0438\u044F\u0445, \u0437\u0430\u043D\u044F\u0442\u044B \u0443\u0437\u043A\u043E\u0439 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E, \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0447\u0430\u0441\u0442\u044C\u044E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0438 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u044E\u0442 \u0441\u0435\u0431\u044F \u0441 \u043D\u0435\u0439. "])), (_l()(), i0.ɵeld(17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0410\u043D\u0442\u0438\u043A\u0440\u0438\u0437\u0438\u0441\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u2013 \u043D\u0435 \u0432\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A, \u043E\u043D \u043C\u043E\u0436\u0435\u0442 \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0432\u0437\u0433\u043B\u044F\u0434\u043E\u043C \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E \u0432 \u043D\u0443\u0436\u043D\u043E\u043C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u043F\u043B\u043E\u0434\u043E\u0442\u0432\u043E\u0440\u043D\u043E \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0434 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 \u0432\u044B\u0437\u043E\u0432\u044B. \u041D\u043E \u043C\u043D\u043E\u0433\u043E\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0436\u0435\u043B\u0430\u043D\u0438\u044F \u043F\u0435\u0440\u0432\u044B\u0445 \u043B\u0438\u0446 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430\u0445 \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u043D\u0438\u044F \u043A\u0440\u0438\u0437\u0438\u0441\u0430. "])), (_l()(), i0.ɵeld(19, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(20, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Expertise; var currVal_1 = "\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.Industry); _ck(_v, 20, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_CrisisManagementExpertiseComponent_0 = View_CrisisManagementExpertiseComponent_0;
function View_CrisisManagementExpertiseComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "crisis-management-expertise-component", [], null, null, null, View_CrisisManagementExpertiseComponent_0, RenderType_CrisisManagementExpertiseComponent)), i0.ɵdid(1, 49152, null, 0, i3.CrisisManagementExpertiseComponent, [], null, null)], null, null); }
exports.View_CrisisManagementExpertiseComponent_Host_0 = View_CrisisManagementExpertiseComponent_Host_0;
var CrisisManagementExpertiseComponentNgFactory = i0.ɵccf("crisis-management-expertise-component", i3.CrisisManagementExpertiseComponent, View_CrisisManagementExpertiseComponent_Host_0, {}, {}, []);
exports.CrisisManagementExpertiseComponentNgFactory = CrisisManagementExpertiseComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/4_crisis-management/crisis-management.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/4_crisis-management/crisis-management.component.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var CrisisManagementExpertiseComponent = /** @class */ (function () {
    function CrisisManagementExpertiseComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return CrisisManagementExpertiseComponent;
}());
exports.CrisisManagementExpertiseComponent = CrisisManagementExpertiseComponent;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/5_mediation/mediation.component.ngfactory.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/5_mediation/mediation.component.ngfactory.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ./mediation.component */ "./src/app/pages/expertise-page/components/5_mediation/mediation.component.ts");
var styles_MediationExpertiseComponent = [];
var RenderType_MediationExpertiseComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_MediationExpertiseComponent, data: {} });
exports.RenderType_MediationExpertiseComponent = RenderType_MediationExpertiseComponent;
function View_MediationExpertiseComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 20, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 17, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 16, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 15, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 14, "div", [["class", "col-lg-8 "]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u0435\u0434\u0438\u0430\u0446\u0438\u044F, \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432 \u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u0441\u043F\u043E\u0440\u043E\u0432 "])), (_l()(), i0.ɵeld(8, 0, null, null, 10, "div", [["class", "descr-block "], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u0435\u0434\u0438\u0430\u0446\u0438\u044F - \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u0443\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432 \u0438 \u0441\u043F\u043E\u0440\u043E\u0432 \u0441 \u0443\u0447\u0430\u0441\u0442\u0438\u0435\u043C \u0442\u0440\u0435\u0442\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B. \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F SLR \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0432\u044B\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0438 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0431\u043E\u0440\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0441\u0442\u043E\u0440\u043E\u043D\u0430\u043C \u0441 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u043C \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0435\u043C \u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041D\u0430\u0448\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u0432 \u043C\u0435\u0434\u0438\u0430\u0446\u0438\u0438 \u2013 \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442 \u0432 \u043D\u0435\u0441\u0443\u0434\u0435\u0431\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044F \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439, \u0432\u0437\u0430\u0438\u043C\u043E\u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0432\u043D\u043E\u043F\u0440\u0430\u0432\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D, \u0438 \u043D\u0430\u0448\u0438 (\u043C\u0435\u0434\u0438\u0430\u0442\u043E\u0440\u0430) \u0431\u0435\u0441\u043F\u0440\u0438\u0441\u0442\u0440\u0430\u0441\u0442\u043D\u043E\u0441\u0442\u044C \u0438 \u044D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430. \u041F\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439 \u0438 \u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u0430\u043C\u0438 \u043C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u043E\u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u0439, \u043A\u0430\u0436\u0434\u044B\u0439 \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0438\u043C\u0435\u0435\u0442 \u0441\u0432\u043E\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F, \u0438 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0438\u0445 \u043D\u0430 \u0432\u044B\u0431\u043E\u0440 \u043A\u043B\u0438\u0435\u043D\u0442\u0443. \u0415\u0441\u043B\u0438 \u0441\u043F\u043E\u0440\u044B \u0438 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u044B \u043D\u0435 \u0438\u043C\u0435\u044E\u0442 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0432 \u043B\u0435\u0433\u0430\u043B\u044C\u043D\u043E\u043C \u043F\u043E\u043B\u0435, \u0445\u043E\u0442\u044F \u0442\u0430\u043A\u043E\u0435 \u0431\u044B\u0432\u0430\u0435\u0442 \u0440\u0435\u0434\u043A\u043E, \u043C\u044B \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0430\u0435\u043C \u043D\u0430\u0448\u0435\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430. "])), (_l()(), i0.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u0441\u0442\u0440\u0435\u043C\u0438\u043C\u0441\u044F \u043F\u043E\u043C\u043E\u0447\u044C \u0441\u0442\u043E\u0440\u043E\u043D\u0430\u043C \u0432\u044B\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043E\u0431\u0449\u0435\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0430 \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0434\u043E\u0441\u0443\u0434\u0435\u0431\u043D\u043E\u0433\u043E \u0443\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u043F\u043E\u0440\u0430, \u043C\u044B \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0435\u043D\u044B \u043D\u0430 \u043E\u0431\u0449\u0435\u043C \u0432\u0438\u0434\u0435\u043D\u0438\u0438 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043E, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u044B\u0432\u0430\u0435\u043C \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u044B \u043C\u0435\u0436\u0434\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0430\u043C\u0438 \u0438 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u043C \u043D\u0430 \u043D\u0438\u0445 \u0441\u0430\u043C\u0438, \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0440\u0443\u0435\u043C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0447\u0435\u0442\u043A\u0438\u0445 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439. \u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 SLR \u0432\u0441\u0435\u0433\u0434\u0430 \u0445\u043B\u0430\u0434\u043D\u043E\u043A\u0440\u043E\u0432\u043D\u044B, \u044D\u043C\u043E\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u044E \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0430. \u041C\u044B \u043D\u0435 \u043F\u043E\u0434\u0432\u0435\u0440\u0436\u0435\u043D\u044B \u0432\u043B\u0438\u044F\u043D\u0438\u044E, \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0446\u0438\u044F\u043C, \u0443\u0433\u0440\u043E\u0437\u0430\u043C \u0438 \u043F\u043E\u0434\u043A\u0443\u043F\u0430\u043C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0443\u044E\u0449\u0438\u0445 \u0441\u0442\u043E\u0440\u043E\u043D \u0434\u043B\u044F \u0441\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u044F \u043D\u0430\u0448\u0435\u0439 \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u043E\u0437\u0438\u0446\u0438\u0438. "])), (_l()(), i0.ɵeld(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E \u0432\u0441\u0435\u0439 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u043C\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u2013 \u043C\u044B \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043D\u0438 \u043E\u0442 \u0447\u0435\u0433\u043E. \u041E\u0442 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u043C\u0435\u0434\u0438\u0430\u0442\u043E\u0440\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0433\u0440\u0443\u043F\u043F\u0430 \u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u044E\u0440\u0438\u0441\u0442\u043E\u0432 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0446\u0435\u0432 \u0441 \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435\u043C (\u0435\u0441\u043B\u0438 \u044D\u0442\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E) \u0434\u0440\u0443\u0433\u0438\u0445 \u0443\u0437\u043A\u043E\u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432. \u041A \u043D\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F \u0437\u0430 \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u043C \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 (\u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C\u0438, \u0443\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044F\u043C\u0438) \u0438 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 (\u043C\u0435\u0436\u0434\u0443 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438, \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C\u0438, \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u0449\u0438\u043C\u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F\u043C\u0438) \u0441\u043F\u043E\u0440\u043D\u044B\u0445 \u0438 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u2013 \u0434\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u0449\u0435\u0439 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u0432\u043E\u0437\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0433\u0440\u0443\u043F\u043F \u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0443\u043C\u043E\u0432. "])), (_l()(), i0.ɵeld(17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u0435\u043C \u043C\u0435\u0434\u0438\u0430\u0446\u0438\u044E \u0432 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0441\u043F\u043E\u0440\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439 \u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430\u0445, \u0440\u0435\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u044B\u0445 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432, \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0430\u0445 \u043C\u0435\u0436\u0434\u0443 \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438 \u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C\u0438, \u0432 \u043D\u0435\u0434\u043E\u0440\u0430\u0437\u0443\u043C\u0435\u043D\u0438\u044F\u0445 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0432\u043B\u0430\u0441\u0442\u0438. "])), (_l()(), i0.ɵeld(19, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(20, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Expertise; var currVal_1 = "\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.Industry); _ck(_v, 20, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_MediationExpertiseComponent_0 = View_MediationExpertiseComponent_0;
function View_MediationExpertiseComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "mediation-expertise-component", [], null, null, null, View_MediationExpertiseComponent_0, RenderType_MediationExpertiseComponent)), i0.ɵdid(1, 49152, null, 0, i3.MediationExpertiseComponent, [], null, null)], null, null); }
exports.View_MediationExpertiseComponent_Host_0 = View_MediationExpertiseComponent_Host_0;
var MediationExpertiseComponentNgFactory = i0.ɵccf("mediation-expertise-component", i3.MediationExpertiseComponent, View_MediationExpertiseComponent_Host_0, {}, {}, []);
exports.MediationExpertiseComponentNgFactory = MediationExpertiseComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/5_mediation/mediation.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/5_mediation/mediation.component.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var MediationExpertiseComponent = /** @class */ (function () {
    function MediationExpertiseComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return MediationExpertiseComponent;
}());
exports.MediationExpertiseComponent = MediationExpertiseComponent;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/6_security-consulting/security-consulting.component.ngfactory.js":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/6_security-consulting/security-consulting.component.ngfactory.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ./security-consulting.component */ "./src/app/pages/expertise-page/components/6_security-consulting/security-consulting.component.ts");
var styles_SecurityConsultingExpertiseComponent = [];
var RenderType_SecurityConsultingExpertiseComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SecurityConsultingExpertiseComponent, data: {} });
exports.RenderType_SecurityConsultingExpertiseComponent = RenderType_SecurityConsultingExpertiseComponent;
function View_SecurityConsultingExpertiseComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 18, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 15, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 14, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 12, "div", [["class", "col-lg-8 "]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 "])), (_l()(), i0.ɵeld(8, 0, null, null, 8, "div", [["class", "descr-block "], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u0433\u0434\u0430 \u0412\u044B \u0434\u043E\u0441\u0442\u0438\u0433\u043B\u0438 \u0443\u0441\u043F\u0435\u0445\u0430 \u0432 \u0441\u043E\u0437\u0438\u0434\u0430\u043D\u0438\u0438, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435\u0441\u044C \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0438 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u043C - \u0412\u044B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0435\u0442\u0435 \u043A \u0441\u0435\u0431\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043B\u044E\u0434\u0435\u0439, \u0441\u043A\u043B\u043E\u043D\u043D\u044B\u0445 \u043A \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043D\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0445\u043E\u0442\u044F\u0442 \u00AB\u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441\u00BB. \u0422\u0430\u043A, \u043A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0443\u0441\u0442\u0440\u043E\u0435\u043D \u043C\u0438\u0440 \u0431\u0438\u0437\u043D\u0435\u0441\u0430, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u043F\u043E\u0436\u0438\u0440\u0430\u044E\u0442 \u043C\u0435\u043D\u044C\u0448\u0438\u0445. \u0412 \u043F\u0435\u0440\u0438\u043E\u0434\u044B \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0443\u0434\u0435\u043B\u044F\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0439 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u0438. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0412 \u043D\u0430\u0448\u0435\u043C \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0434\u043E\u043B\u0436\u043D\u0430 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0438\u043C\u0435\u044E\u0449\u0438\u0445\u0441\u044F \u0432 \u0430\u043A\u0442\u0438\u0432\u0430\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043F\u043E\u043C\u0438\u043C\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0441\u043B\u0430\u0432\u0430 \u0438 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u044C \u2013 \u044D\u0442\u043E \u0446\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u0435\u0441\u043B\u0438 \u0438\u043C\u0438 \u0443\u043C\u0435\u043B\u043E \u0440\u0430\u0441\u043F\u043E\u0440\u044F\u0436\u0430\u0442\u044C\u0441\u044F \u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F PR-\u043E\u043C. "])), (_l()(), i0.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0434\u043E\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u043E\u0442 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0443\u0433\u0440\u043E\u0437 \u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u043A\u043E\u043D\u0441\u043E\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u0432\u0435\u043D\u0442\u0438\u0432\u043D\u044B\u0445 \u043C\u0435\u0440, \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u044F \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F\u043C\u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430. \u041C\u044B \u0443\u0434\u0435\u043B\u044F\u0435\u043C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0439, \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0439 \u0438 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0447\u0442\u043E\u0431\u044B \u043E\u043D\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u043B\u0430\u0441\u044C \u0432 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u043C\u043A\u0430\u0445 \u043F\u0440\u0430\u0432\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044F, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0446\u0435\u043B\u0438 \u0438 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438. \u0422\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u0438 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u043F\u043E \u043A\u043E\u043D\u0441\u043E\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u0432\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u0438 \u0437\u0430\u0449\u0438\u0442\u0443 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u043E\u0432, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044E \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u0438 PR \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u043D\u0430\u0439\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u043E\u0432 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u0434\u0430\u0447. "])), (_l()(), i0.ɵeld(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u0440\u0430\u0439\u043D\u0435 \u0432\u0430\u0436\u043D\u043E, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u043B\u043E \u0432 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0435 \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u043C\u0438, \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0434\u043E\u043F\u043E\u043B\u043D\u044F\u043B\u0438 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430. \u0412 \u0442\u0430\u043A\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u043D\u0435\u043F\u043E\u043A\u043E\u043B\u0435\u0431\u0438\u043C\u043E\u0439, \u0438 \u043B\u044E\u0434\u0438 \u0441 \u043D\u0435\u044D\u0442\u0438\u0447\u043D\u044B\u043C\u0438 \u0437\u0430\u043C\u044B\u0441\u043B\u0430\u043C\u0438 \u0431\u0443\u0434\u0443\u0442 \u043E\u0431\u0445\u043E\u0434\u0438\u0442\u044C \u0435\u0435 \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u0439. "])), (_l()(), i0.ɵeld(17, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(18, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Expertise; var currVal_1 = "\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.Industry); _ck(_v, 18, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_SecurityConsultingExpertiseComponent_0 = View_SecurityConsultingExpertiseComponent_0;
function View_SecurityConsultingExpertiseComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "security-consulting-expertise-component", [], null, null, null, View_SecurityConsultingExpertiseComponent_0, RenderType_SecurityConsultingExpertiseComponent)), i0.ɵdid(1, 49152, null, 0, i3.SecurityConsultingExpertiseComponent, [], null, null)], null, null); }
exports.View_SecurityConsultingExpertiseComponent_Host_0 = View_SecurityConsultingExpertiseComponent_Host_0;
var SecurityConsultingExpertiseComponentNgFactory = i0.ɵccf("security-consulting-expertise-component", i3.SecurityConsultingExpertiseComponent, View_SecurityConsultingExpertiseComponent_Host_0, {}, {}, []);
exports.SecurityConsultingExpertiseComponentNgFactory = SecurityConsultingExpertiseComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/6_security-consulting/security-consulting.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/6_security-consulting/security-consulting.component.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var SecurityConsultingExpertiseComponent = /** @class */ (function () {
    function SecurityConsultingExpertiseComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return SecurityConsultingExpertiseComponent;
}());
exports.SecurityConsultingExpertiseComponent = SecurityConsultingExpertiseComponent;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/7_trashshuting/trashshuting.component.ngfactory.js":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/7_trashshuting/trashshuting.component.ngfactory.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ./trashshuting.component */ "./src/app/pages/expertise-page/components/7_trashshuting/trashshuting.component.ts");
var styles_TrashshutingExpertiseComponent = [];
var RenderType_TrashshutingExpertiseComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_TrashshutingExpertiseComponent, data: {} });
exports.RenderType_TrashshutingExpertiseComponent = RenderType_TrashshutingExpertiseComponent;
function View_TrashshutingExpertiseComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 18, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 15, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 14, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 12, "div", [["class", "col-lg-8 "]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0422\u0440\u0430\u0431\u043B\u0448\u0443\u0442\u0438\u043D\u0433. \u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0438 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447 "])), (_l()(), i0.ɵeld(8, 0, null, null, 8, "div", [["class", "descr-block "], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0422\u0440\u0430\u0431\u043B\u0448\u0443\u0442\u0438\u043D\u0433 \u2013 \u044D\u0442\u043E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0442\u0443\u043F\u0438\u043A\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441\u0435. \u0422\u0440\u0430\u0431\u043B\u0448\u0443\u0442\u0435\u0440 \u2013 \u044D\u0442\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E \u0441 \u0446\u0435\u043B\u044C\u044E \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u043E\u0434\u043D\u043E\u0439 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u0443\u0445\u043E\u0434\u0438\u0442 \u0438\u0437 \u043D\u0435\u0451 \u043F\u043E\u0441\u043B\u0435 \u0443\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0422\u0440\u0430\u0431\u043B\u0448\u0443\u0442\u0435\u0440\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 SLR \u0432\u0438\u0434\u044F\u0442 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 \u0441\u0432\u0435\u0436\u0438\u043C \u0432\u0437\u0433\u043B\u044F\u0434\u043E\u043C \u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432, \u043E\u0431\u043B\u0430\u0434\u0430\u044F \u043E\u0431\u0448\u0438\u0440\u043D\u044B\u043C\u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438 \u0438 \u043D\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u043C \u043E\u043F\u044B\u0442\u043E\u043C. \u0418\u043D\u043E\u0433\u0434\u0430 \u043C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0438\u0437 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u043E\u0442\u0440\u0430\u0441\u043B\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0431\u043E\u0439 \u0433\u0440\u043E\u043C\u043E\u0437\u0434\u043A\u0438\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B, \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432 \u0441\u0432\u0435\u0440\u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445, \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044F \u043A\u0440\u0430\u0439\u043D\u0435 \u0442\u044F\u0436\u0435\u043B\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u0432 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u043D\u0430 \u0432\u0437\u0433\u043B\u044F\u0434 \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0441\u0440\u043E\u043A\u0438. \u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0442\u0440\u0430\u0431\u043B\u0448\u0443\u0442\u0435\u0440\u0430, \u044D\u0442\u043E \u00AB\u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u043E\u043B\u0434\u0430\u0442\u044B\u00BB, \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0449\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u0430\u043C\u0438 \u043C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433\u0430, \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0430, \u043B\u043E\u0433\u0438\u0441\u0442\u0430, \u044E\u0440\u0438\u0441\u0442\u0430. \u041E\u043D\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B \u043D\u0430\u0439\u0442\u0438 \u043E\u0431\u0449\u0438\u0439 \u044F\u0437\u044B\u043A \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0441\u0442\u043E\u0440\u043E\u043D\u0430\u043C\u0438 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043E\u0442\u0434\u0435\u043B\u0430\u043C\u0438, \u043C\u043E\u0433\u0443\u0442 \u0443\u0441\u043B\u044B\u0448\u0430\u0442\u044C \u0438\u0445 \u0438 \u0434\u043E\u043D\u0435\u0441\u0442\u0438 \u0438\u043C \u043E\u0431\u0449\u0443\u044E \u0438\u0434\u0435\u044E. \u041E\u043D\u0438 \u043D\u0435 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u044E\u0442\u0441\u044F \u0433\u043B\u0443\u0431\u043E\u043A\u043E \u0432 \u043A\u0430\u0436\u0434\u043E\u0439 \u0441\u0444\u0435\u0440\u0435, \u043E\u043D\u0438 \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u0435\u0442 \u0432\u043E\u0435\u0434\u0438\u043D\u043E \u0432\u0441\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B. \u0420\u0435\u0448\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C, \u043E\u0447\u0435\u043D\u044C \u043F\u0440\u043E\u0441\u0442\u044B, \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0431\u0435\u0437\u043E\u0448\u0438\u0431\u043E\u0447\u043D\u044B. \u041D\u0430\u0441 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u044E\u0442, \u043A\u043E\u0433\u0434\u0430 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u044B \u043D\u0435 \u0441\u043F\u0440\u0430\u0432\u0438\u043B\u0438\u0441\u044C, \u0430 \u043E\u0442\u0440\u0430\u0441\u043B\u0435\u0432\u044B\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442\u044B - \u043D\u0435 \u043F\u043E\u043C\u043E\u0433\u043B\u0438. "])), (_l()(), i0.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0438\u0440\u0443\u0435\u043C\u0441\u044F \u043D\u0430 \u0440\u0435\u0448\u0435\u043D\u0438\u044F\u0445, \u0430 \u043D\u0435 \u043D\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430\u0445, \u0432\u0441\u0435\u0433\u0434\u0430 \u0438 \u0432\u043E \u0432\u0441\u0435\u043C \u2013 \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u043D\u044B \u0438 \u0431\u0435\u0441\u043F\u0440\u0438\u0441\u0442\u0440\u0430\u0441\u0442\u043D\u044B, \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043C \u0437\u0430\u0434\u0430\u0447\u0438 \u043E\u0442\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u043E \u0438 \u043F\u043E-\u043D\u043E\u0432\u043E\u043C\u0443, \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u043C \u0441\u043B\u043E\u0436\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0438 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0432 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438. \u0428\u0430\u0431\u043B\u043E\u043D\u043D\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044B \u0438 \u0440\u0430\u0441\u043A\u0440\u0443\u0447\u0435\u043D\u043D\u044B\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u2013 \u044D\u0442\u043E \u043D\u0435 \u043D\u0430\u0448 \u0441\u0442\u0438\u043B\u044C, \u043C\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u043C \u0437\u043D\u0430\u043D\u0438\u044F \u0438 \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0438 \u0438\u0437 \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0439, \u0440\u044B\u043D\u043A\u043E\u0432 \u0438 \u044D\u043F\u043E\u0445. \u041C\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E \u043E\u0431\u0449\u0430\u0435\u043C\u0441\u044F \u0441 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F\u043C\u0438 \u0440\u0430\u0437\u043D\u044B\u0445 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0439 \u0438 \u043E\u0442\u0440\u0430\u0441\u043B\u0435\u0439 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438, \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E \u0432\u044B\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C \u043D\u0435\u0434\u043E\u0432\u0435\u0440\u0438\u0435 \u0438 \u0441\u043A\u0435\u043F\u0442\u0438\u0446\u0438\u0437\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u043D\u0430 \u043C\u0435\u0441\u0442\u0435 \u0438 \u0444\u043E\u043A\u0443\u0441\u0438\u0440\u0443\u0435\u043C\u0441\u044F \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0430 \u0438\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0438. "])), (_l()(), i0.ɵeld(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u043D\u0435 \u0432\u043E\u0432\u043B\u0435\u043A\u0430\u0435\u043C\u0441\u044F \u0432 \u0441\u043E\u043C\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0430\u0435\u043C \u043D\u0435 \u0441\u043E \u0432\u0441\u0435\u043C\u0438, \u043C\u044B \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u043F\u043E\u043B\u043D\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u0430\u043D\u0442\u0438\u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438, \u043D\u0430\u0445\u043E\u0434\u0438\u043C\u0441\u044F \u0432 \u0442\u0435\u043D\u0438 \u043D\u0430\u0448\u0435\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430. \u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0433\u043E\u0434\u0430 \u043F\u043E\u0441\u043B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043C\u044B \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0432 \u0435\u0433\u043E \u0441\u0435\u043A\u0442\u043E\u0440\u0435 \u0441 \u0435\u0433\u043E \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0430\u043C\u0438 \u0432 \u0435\u0433\u043E \u0440\u0435\u0433\u0438\u043E\u043D\u0435. "])), (_l()(), i0.ɵeld(17, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(18, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Expertise; var currVal_1 = "\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.Industry); _ck(_v, 18, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_TrashshutingExpertiseComponent_0 = View_TrashshutingExpertiseComponent_0;
function View_TrashshutingExpertiseComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "trashshuting-expertise-component", [], null, null, null, View_TrashshutingExpertiseComponent_0, RenderType_TrashshutingExpertiseComponent)), i0.ɵdid(1, 49152, null, 0, i3.TrashshutingExpertiseComponent, [], null, null)], null, null); }
exports.View_TrashshutingExpertiseComponent_Host_0 = View_TrashshutingExpertiseComponent_Host_0;
var TrashshutingExpertiseComponentNgFactory = i0.ɵccf("trashshuting-expertise-component", i3.TrashshutingExpertiseComponent, View_TrashshutingExpertiseComponent_Host_0, {}, {}, []);
exports.TrashshutingExpertiseComponentNgFactory = TrashshutingExpertiseComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/7_trashshuting/trashshuting.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/7_trashshuting/trashshuting.component.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var TrashshutingExpertiseComponent = /** @class */ (function () {
    function TrashshutingExpertiseComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return TrashshutingExpertiseComponent;
}());
exports.TrashshutingExpertiseComponent = TrashshutingExpertiseComponent;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/8_other-services/other-services.component.ngfactory.js":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/8_other-services/other-services.component.ngfactory.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ./other-services.component */ "./src/app/pages/expertise-page/components/8_other-services/other-services.component.ts");
var styles_OtherServicesExpertiseComponent = [];
var RenderType_OtherServicesExpertiseComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_OtherServicesExpertiseComponent, data: {} });
exports.RenderType_OtherServicesExpertiseComponent = RenderType_OtherServicesExpertiseComponent;
function View_OtherServicesExpertiseComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 14, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 11, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 10, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 8, "div", [["class", "col-lg-8 "]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0414\u0440\u0443\u0433\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044E \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 "])), (_l()(), i0.ɵeld(8, 0, null, null, 4, "div", [["class", "descr-block "], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0441 \u043D\u0430\u0448\u0438\u043C\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043F\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u044B \u0438 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0432\u0430\u0436\u043D\u044B\u0445 \u0438 \u0441\u0440\u043E\u0447\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447. \u0418\u043C \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0442\u0440\u0430\u0442\u0438\u0442\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u044E \u0438 \u0441\u0438\u043B\u044B \u043D\u0430 \u0433\u043B\u0443\u043F\u044B\u0435 \u0438 \u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0432\u0435\u0449\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u0432\u044F\u0442\u0438\u0442\u044C \u0441\u0435\u0431\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0438 \u0443\u0441\u043B\u0443\u0433. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 SLR \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0443, \u0437\u0430\u0431\u0438\u0440\u0430\u044F \u043D\u0430 \u0441\u0435\u0431\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043D\u0435\u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447, \u0441\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044F \u0441\u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u043A\u0438 \u0435\u0433\u043E \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u043D\u0430 \u0432\u0430\u0436\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430\u0445. "])), (_l()(), i0.ɵeld(13, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(14, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Expertise; var currVal_1 = "\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.Industry); _ck(_v, 14, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_OtherServicesExpertiseComponent_0 = View_OtherServicesExpertiseComponent_0;
function View_OtherServicesExpertiseComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "other-services-expertise-component", [], null, null, null, View_OtherServicesExpertiseComponent_0, RenderType_OtherServicesExpertiseComponent)), i0.ɵdid(1, 49152, null, 0, i3.OtherServicesExpertiseComponent, [], null, null)], null, null); }
exports.View_OtherServicesExpertiseComponent_Host_0 = View_OtherServicesExpertiseComponent_Host_0;
var OtherServicesExpertiseComponentNgFactory = i0.ɵccf("other-services-expertise-component", i3.OtherServicesExpertiseComponent, View_OtherServicesExpertiseComponent_Host_0, {}, {}, []);
exports.OtherServicesExpertiseComponentNgFactory = OtherServicesExpertiseComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/expertise-page/components/8_other-services/other-services.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/expertise-page/components/8_other-services/other-services.component.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var OtherServicesExpertiseComponent = /** @class */ (function () {
    function OtherServicesExpertiseComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return OtherServicesExpertiseComponent;
}());
exports.OtherServicesExpertiseComponent = OtherServicesExpertiseComponent;


/***/ }),

/***/ "./src/app/pages/expertise-page/expertise-page.component.ngfactory.js":
/*!****************************************************************************!*\
  !*** ./src/app/pages/expertise-page/expertise-page.component.ngfactory.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i4 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i5 = __webpack_require__(/*! ./expertise-page.component */ "./src/app/pages/expertise-page/expertise-page.component.ts");
var styles_ExpertisePageComponent = [];
var RenderType_ExpertisePageComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ExpertisePageComponent, data: {} });
exports.RenderType_ExpertisePageComponent = RenderType_ExpertisePageComponent;
function View_ExpertisePageComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 16, "div", [["class", "short-item"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "div", [["class", "col-lg-7"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 1, "h3", [["class", "short-item_title"]], null, null, null, null, null)), (_l()(), i0.ɵted(4, null, ["", ""])), (_l()(), i0.ɵeld(5, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 4, "div", [["class", "col-lg-8"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 3, "div", [["class", "custom-col_inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 2, "div", [["class", "short-item_descr descr-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(10, null, ["", ""])), (_l()(), i0.ɵeld(11, 0, null, null, 5, "div", [["class", "col-lg-4"]], null, null, null, null, null)), (_l()(), i0.ɵeld(12, 0, null, null, 4, "a", [["class", "btn btn-primary btn-ms btn-chevron"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(13, 671744, null, 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 "])), (_l()(), i0.ɵeld(15, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(16, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null))], function (_ck, _v) { var currVal_4 = i0.ɵinlineInterpolate(1, "../", _v.context.$implicit.link, ""); _ck(_v, 13, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.context.$implicit.description; _ck(_v, 10, 0, currVal_1); var currVal_2 = i0.ɵnov(_v, 13).target; var currVal_3 = i0.ɵnov(_v, 13).href; _ck(_v, 12, 0, currVal_2, currVal_3); }); }
function View_ExpertisePageComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 14, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "section", [["class", "section section-top -expertise"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 10, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 9, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 2, "div", [["class", "section-heading"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 1, "h1", [["class", "h2"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438"])), (_l()(), i0.ɵeld(7, 0, null, null, 2, "div", [["class", "descr-block mb-lg"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 1, "p", [["class", "font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F SLR \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0443\u0441\u043B\u0443\u0433 \u0434\u043B\u044F \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439. \u041C\u044B \u0437\u043D\u0430\u0435\u043C \u043E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u043C\u043D\u043E\u0433\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0432\u043E\u043B\u043D\u0443\u044E\u0449\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441, \u0438 \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u043C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u043E\u0439 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430\u0445: "])), (_l()(), i0.ɵeld(10, 0, null, null, 2, "div", [["class", "short-list"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ExpertisePageComponent_1)), i0.ɵdid(12, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(13, 0, null, null, 1, "section-contacts-component", [], null, null, null, i3.View_SectionContactsComponent_0, i3.RenderType_SectionContactsComponent)), i0.ɵdid(14, 114688, null, 0, i4.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ExpertiseShortsItems; _ck(_v, 12, 0, currVal_0); var currVal_1 = _co.PagesType.Expertise; var currVal_2 = "\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"; var currVal_3 = _co.PagesLinksMap.get(_co.PagesType.Industry); _ck(_v, 14, 0, currVal_1, currVal_2, currVal_3); }, null); }
exports.View_ExpertisePageComponent_0 = View_ExpertisePageComponent_0;
function View_ExpertisePageComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "expertise-page-component", [], null, null, null, View_ExpertisePageComponent_0, RenderType_ExpertisePageComponent)), i0.ɵdid(1, 49152, null, 0, i5.ExpertisePageComponent, [], null, null)], null, null); }
exports.View_ExpertisePageComponent_Host_0 = View_ExpertisePageComponent_Host_0;
var ExpertisePageComponentNgFactory = i0.ɵccf("expertise-page-component", i5.ExpertisePageComponent, View_ExpertisePageComponent_Host_0, {}, {}, []);
exports.ExpertisePageComponentNgFactory = ExpertisePageComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/expertise-page/expertise-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/expertise-page/expertise-page.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var expertise_shorts_1 = __webpack_require__(/*! @root-shared/data/expertise-shorts */ "./src/app/root-shared/data/expertise-shorts.ts");
var ExpertisePageComponent = /** @class */ (function () {
    function ExpertisePageComponent() {
        this.ExpertiseShortsItems = expertise_shorts_1.ExpertiseShortsItems;
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return ExpertisePageComponent;
}());
exports.ExpertisePageComponent = ExpertisePageComponent;


/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ngfactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ngx-slick-carousel */ "ngx-slick-carousel");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ../../../../node_modules/ngx-slick-carousel/ngx-slick-carousel.ngfactory */ "./node_modules/ngx-slick-carousel/ngx-slick-carousel.ngfactory.js");
var i5 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i6 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i7 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i8 = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
var styles_HomePageComponent = [];
var RenderType_HomePageComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_HomePageComponent, data: {} });
exports.RenderType_HomePageComponent = RenderType_HomePageComponent;
function View_HomePageComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 12, "div", [["class", "slide"], ["ngxSlickItem", ""]], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.SlickItemDirective, [i0.ElementRef, i0.PLATFORM_ID, i1.SlickCarouselComponent], null, null), (_l()(), i0.ɵeld(2, 0, null, null, 10, "div", [["class", "expertise-slide"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 1, "h3", [["class", "expertise-slide_title"]], null, null, null, null, null)), (_l()(), i0.ɵted(4, null, ["", ""])), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "expertise-slide_descr"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(7, null, ["", ""])), (_l()(), i0.ɵeld(8, 0, null, null, 4, "a", [["class", "btn btn-secondary btn-ms btn-chevron"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(9, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(12, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); var currVal_4 = i0.ɵinlineInterpolate(1, "../", _v.context.$implicit.link, ""); _ck(_v, 9, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.context.$implicit.description; _ck(_v, 7, 0, currVal_1); var currVal_2 = i0.ɵnov(_v, 9).target; var currVal_3 = i0.ɵnov(_v, 9).href; _ck(_v, 8, 0, currVal_2, currVal_3); }); }
function View_HomePageComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "li", [["data-aos", "fade-up"], ["data-aos-anchor", ".js-link-list"], ["data-aos-once", "true"]], [[1, "data-aos-delay", 0]], null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 7, "button", [["class", "-init-border-hover"], ["routerLinkActive", "router-link-active"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 16384, [[1, 4]], 0, i2.RouterLink, [i2.Router, i2.ActivatedRoute, [8, null], i0.Renderer2, i0.ElementRef], { routerLink: [0, "routerLink"] }, null), i0.ɵdid(3, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i0.ɵqud(603979776, 1, { links: 1 }), i0.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i0.ɵeld(6, 0, null, null, 0, "div", [["class", "border-hover -right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 1, "div", [["class", "link-list_text"]], null, null, null, null, null)), (_l()(), i0.ɵted(8, null, ["", ""]))], function (_ck, _v) { var currVal_1 = i0.ɵinlineInterpolate(1, "../", _v.context.$implicit.link, ""); _ck(_v, 2, 0, currVal_1); var currVal_2 = "router-link-active"; _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (100 * (_v.context.index + 1)); _ck(_v, 0, 0, currVal_0); var currVal_3 = _v.context.$implicit.title; _ck(_v, 8, 0, currVal_3); }); }
function View_HomePageComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 100, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 5, "section", [["class", "section section-welcome -height-100vh text-white"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 1, "h1", [["class", "lp-4"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0432 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438"])), (_l()(), i0.ɵeld(5, 0, null, null, 1, "div", [["class", "scroll-next"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 0, "button", [["class", "chevron-botom"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.scrollTo() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 12, "section", [["class", "section section-quote"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 1, "div", [["class", "figure center-center"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 0, "div", [["class", "anim-wave rellax"], ["data-rellax-percentage", ".6"], ["data-rellax-speed", "1.2"]], null, null, null, null, null)), (_l()(), i0.ɵeld(10, 0, null, null, 9, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(11, 0, null, null, 8, "div", [["class", "row"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(12, 0, null, null, 7, "div", [["class", "col-lg-10 offset-lg-1 col-12"]], null, null, null, null, null)), (_l()(), i0.ɵeld(13, 0, null, null, 6, "div", [["class", "descr-block text-center"]], null, null, null, null, null)), (_l()(), i0.ɵeld(14, 0, null, null, 1, "p", [["class", "mb-lg"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0411\u0443\u0434\u0443\u0449\u0435\u0435 \u0443\u0436\u0435 \u043D\u0430\u0441\u0442\u0443\u043F\u0438\u043B\u043E. \u041F\u0440\u043E\u0441\u0442\u043E \u043E\u043D\u043E \u043D\u0435\u0440\u0430\u0432\u043D\u043E\u043C\u0435\u0440\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043E. \u041C\u0438\u0440 \u0441\u0442\u0440\u0435\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0432\u0430\u043D\u0443\u043B \u0432\u043F\u0435\u0440\u0435\u0434, \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438, \u0440\u044B\u043D\u043A\u0438 \u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438, \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438. \u041D\u043E\u0432\u043E\u0435 \u0440\u043E\u0436\u0434\u0430\u0435\u0442\u0441\u044F \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0430 \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0438 \u043E\u043F\u044B\u0442\u0430, \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0438 \u0438\u0434\u0435\u0439, \u043B\u0438\u0448\u044C \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0439 \u0432\u0437\u0433\u043B\u044F\u0434 \u043D\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0431\u043E\u0439. \u0422\u0435\u043F\u0435\u0440\u044C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0431\u044B\u0442\u044C \u0432 \u043A\u0443\u0440\u0441\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u0442\u0440\u0435\u043D\u0434\u043E\u0432 \u0438 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0439, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u0438 \u0440\u044B\u043D\u043A\u0430 \u043F\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0439 \u0438 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u043D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C \u0442\u043E\u0447\u043A\u0438 \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u044B\u0442\u0430 \u0438 \u043D\u043E\u0432\u043E\u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0435\u0439. "])), (_l()(), i0.ɵeld(16, 0, null, null, 3, "p", [["class", "text-lg font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵeld(17, 0, null, null, 1, "span", [["class", "d-block"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u2013 \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0435\u043F\u0440\u043E\u0441\u0442\u043E, \u0438 \u0434\u043B\u044F \u043C\u043D\u043E\u0433\u0438\u0445 \u044D\u0442\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B."])), (_l()(), i0.ɵted(-1, null, [" \u041D\u043E, \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C\u0438, \u0435\u0441\u043B\u0438 \u0432\u044B\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043A \u043D\u0438\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434. "])), (_l()(), i0.ɵeld(20, 0, null, null, 15, "section", [["class", "section section-mission text-white bg-overlay-dark"]], null, null, null, null, null)), (_l()(), i0.ɵeld(21, 0, null, null, 0, "div", [["class", "section-bg -mission"]], null, null, null, null, null)), (_l()(), i0.ɵeld(22, 0, null, null, 2, "div", [["class", "section-mask -index-2"]], null, null, null, null, null)), (_l()(), i0.ɵeld(23, 0, null, null, 0, "div", [["class", "mask-top"]], null, null, null, null, null)), (_l()(), i0.ɵeld(24, 0, null, null, 0, "div", [["class", "mask-bot"]], null, null, null, null, null)), (_l()(), i0.ɵeld(25, 0, null, null, 10, "div", [["class", "container"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(26, 0, null, null, 2, "div", [["class", "descr-block "]], null, null, null, null, null)), (_l()(), i0.ɵeld(27, 0, null, null, 1, "p", [["class", "text-lg font-medium mb-70"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041D\u0430\u0448\u0430 \u043C\u0438\u0441\u0441\u0438\u044F \u2013 \u043F\u043E\u0432\u044B\u0448\u0430\u0442\u044C \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u0443\u0441\u0438\u043B\u0438\u0432\u0430\u0442\u044C \u0438\u0445 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043D\u044B\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0437\u0430 \u0441\u0447\u0435\u0442 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u043D\u043E\u0439, \u0441\u0431\u0430\u043B\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0438 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438, \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0442\u044C \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E, \u043D\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0442\u044C \u043F\u0440\u043E\u0448\u043B\u043E\u043C\u0443 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0432 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438. "])), (_l()(), i0.ɵeld(29, 0, null, null, 6, "a", [["class", "btn btn-secondary btn-md btn-chevron"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 30).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(30, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] }, null), i0.ɵpod(31, { tabId: 0 }), i0.ɵpad(32, 2), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 "])), (_l()(), i0.ɵeld(34, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(35, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(36, 0, null, null, 26, "section", [["class", "section section-clients"]], null, null, null, null, null)), (_l()(), i0.ɵeld(37, 0, null, null, 1, "div", [["class", "figure right-top"]], null, null, null, null, null)), (_l()(), i0.ɵeld(38, 0, null, null, 0, "img", [["alt", ""], ["class", "rellax"], ["data-rellax-percentage", "1"], ["data-rellax-speed", "1.4"], ["src", "./assets/img/figures/figure-skew-square.png"]], null, null, null, null, null)), (_l()(), i0.ɵeld(39, 0, null, null, 23, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(40, 0, null, null, 22, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(41, 0, null, null, 3, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), i0.ɵeld(42, 0, null, null, 2, "div", [["class", "section-heading"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(43, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041A\u043B\u0438\u0435\u043D\u0442\u0430\u043C"])), (_l()(), i0.ɵeld(45, 0, null, null, 6, "div", [["class", "col-lg-8"], ["data-aos", "fade-right"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(46, 0, null, null, 5, "div", [["class", "custom-col_inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(47, 0, null, null, 4, "div", [["class", "descr-block mob-lg-mb-md"]], null, null, null, null, null)), (_l()(), i0.ɵeld(48, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u044F\u043C\u0438, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u043C\u0438, \u043F\u0440\u0438\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0438 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438, \u043B\u0435\u0433\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u2013 \u0447\u0442\u043E\u0431\u044B \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u043E\u0441\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0435\u0435 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0435\u0435 \u0447\u0435\u043C \u0441\u0435\u0439\u0447\u0430\u0441. \u041C\u044B \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C\u0441\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0443 \u0438\u0437\u043D\u0443\u0442\u0440\u0438, \u0447\u0442\u043E\u0431\u044B \u0441\u0442\u0430\u0442\u044C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0438 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438. \u041C\u044B \u0438\u0449\u0435\u043C \u0442\u043E\u0447\u043A\u0438 \u0438 \u0443\u0437\u043B\u044B \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0438\u043D\u0435\u0440\u0433\u0438\u0438 \u0438 \u043A\u043E\u043B\u043B\u0430\u0431\u043E\u0440\u0430\u0446\u0438\u0438, \u043D\u0430\u0445\u043E\u0434\u0438\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0438 \u0434\u043E\u0431\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0445\u043E\u0440\u043E\u0448\u0438\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. "])), (_l()(), i0.ɵeld(50, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0438\u0432\u0430\u0435\u043C \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B, \u0434\u0435\u043B\u0430\u0435\u043C \u0431\u0438\u0437\u043D\u0435\u0441 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C, \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u043C \u0438 \u043B\u0435\u0433\u0430\u043B\u044C\u043D\u044B\u043C. \u0421\u0443\u0442\u044C \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u2013 \u043F\u043E\u0438\u0441\u043A \u0438 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u0435\u043D\u044F\u044E\u0442 \u0436\u0438\u0437\u043D\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u2013 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0438, \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u043C\u0435\u0441\u0442\u0430\u0445, \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u044B\u0445 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0438 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u044F, \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u0438 \u0433\u043B\u043E\u0431\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u041C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u043D\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u043B\u043E\u0432\u0438\u0442\u044C \u043A\u0430\u0436\u0434\u0443\u044E \u043C\u0438\u043D\u0443\u0442\u0443 \u0441\u0447\u0430\u0441\u0442\u044C\u044F (\u0432\u0435\u0434\u044C \u0436\u0438\u0437\u043D\u044C \u2013 \u043A\u043E\u0440\u043E\u0442\u043A\u0430!), \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u043C \u043F\u0440\u0438\u0435\u043C\u043B\u0435\u043C\u0443\u044E \u0437\u043E\u043D\u0443 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430 \u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C. \u041C\u044B \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u0435\u0435\u043C\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F\u043C\u0438, \u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0435\u043C \u043E\u043F\u044B\u0442 \u0441 \u043C\u043E\u043B\u043E\u0434\u043E\u0441\u0442\u044C\u044E \u0438 \u0434\u0435\u0440\u0437\u043E\u0441\u0442\u044C\u044E, \u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0435\u043C \u044D\u043F\u043E\u0445\u0438 \u0438 \u0442\u0440\u0435\u043D\u0434\u044B. "])), (_l()(), i0.ɵeld(52, 0, null, null, 10, "div", [["class", "col-lg-4 "], ["data-aos", "fade-left"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(53, 0, null, null, 2, "div", [["class", "descr-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(54, 0, null, null, 1, "p", [["class", "font-medium text-md mb-lg"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u043E, \u043C\u044B \u0432\u044B\u0434\u0430\u0435\u043C \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0435\u043C \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0438 \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0432 \u0441\u0435\u043A\u0442\u043E\u0440\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0441 \u0435\u0433\u043E \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0430\u043C\u0438. \u041C\u044B \u043F\u043E\u0439\u043C\u0435\u043C \u0412\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441 \u0438 \u0431\u0443\u0434\u0435\u043C \u043E\u0431\u0449\u0430\u0442\u044C\u0441\u044F \u0441 \u0412\u0430\u043C\u0438 \u043D\u0430 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u043C \u044F\u0437\u044B\u043A\u0435. "])), (_l()(), i0.ɵeld(56, 0, null, null, 6, "button", [["class", "btn btn-primary btn-md btn-chevron"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 57).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(57, 16384, null, 0, i2.RouterLink, [i2.Router, i2.ActivatedRoute, [8, null], i0.Renderer2, i0.ElementRef], { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] }, null), i0.ɵpod(58, { tabId: 0 }), i0.ɵpad(59, 2), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 "])), (_l()(), i0.ɵeld(61, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(62, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(63, 0, null, null, 17, "section", [["class", "section section-expertise text-white text-center bg-overlay-dark"]], null, null, null, null, null)), (_l()(), i0.ɵeld(64, 0, null, null, 1, "div", [["class", "section-mask"]], null, null, null, null, null)), (_l()(), i0.ɵeld(65, 0, null, null, 0, "div", [["class", "mask-top"]], null, null, null, null, null)), (_l()(), i0.ɵeld(66, 0, null, null, 8, "div", [["class", "container"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(67, 0, null, null, 2, "div", [["class", "section-heading"]], null, null, null, null, null)), (_l()(), i0.ɵeld(68, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430"])), (_l()(), i0.ɵeld(70, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(71, 0, null, null, 3, "div", [["class", "col-md-10 offset-md-1"]], null, null, null, null, null)), (_l()(), i0.ɵeld(72, 0, null, null, 2, "div", [["class", "descr-block text-center mb-lg"]], null, null, null, null, null)), (_l()(), i0.ɵeld(73, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F SLR \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0443\u0441\u043B\u0443\u0433 \u0434\u043B\u044F \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439. \u041C\u044B \u0437\u043D\u0430\u0435\u043C \u043E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u043C\u043D\u043E\u0433\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0432\u043E\u043B\u043D\u0443\u044E\u0449\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441, \u0438 \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u043C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u043E\u0439 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430\u0445: "])), (_l()(), i0.ɵeld(75, 0, null, null, 5, "div", [["class", "slider expertise-slider default-controls text-left"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(76, 0, null, null, 4, "ngx-slick-carousel", [["class", "carousel"]], null, null, null, i4.View_SlickCarouselComponent_0, i4.RenderType_SlickCarouselComponent)), i0.ɵprd(5120, null, i5.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.SlickCarouselComponent]), i0.ɵdid(78, 13287424, [["slickModal", 4]], 0, i1.SlickCarouselComponent, [i0.ElementRef, i0.NgZone], { config: [0, "config"] }, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_HomePageComponent_1)), i0.ɵdid(80, 278528, null, 0, i3.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(81, 0, null, null, 17, "section", [["class", "section section-industry"]], null, null, null, null, null)), (_l()(), i0.ɵeld(82, 0, null, null, 16, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(83, 0, null, null, 2, "div", [["class", "section-heading"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(84, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"])), (_l()(), i0.ɵeld(86, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(87, 0, null, null, 7, "div", [["class", "col-lg-4"], ["data-aos", "fade-right"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(88, 0, null, null, 6, "div", [["class", "descr-block mob-lg-mb-md"]], null, null, null, null, null)), (_l()(), i0.ɵeld(89, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F SLR \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0438 \u0438\u0433\u0440\u0430\u0435\u0442 \u0432\u0435\u0434\u0443\u0449\u0443\u044E \u0440\u043E\u043B\u044C \u0432 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0441\u0435\u043A\u0442\u043E\u0440\u0430\u0445 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438, \u0441\u0440\u0435\u0434\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445: "])), (_l()(), i0.ɵeld(91, 0, null, null, 1, "p", [["class", "text-md font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435, IT, \u043C\u0435\u0434\u0438\u0430, Fashion, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u043E, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E, \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0430, \u043F\u0440\u043E\u0434\u0430\u0436\u0438, \u0443\u0441\u043B\u0443\u0433\u0438, \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0435\u043A\u0442\u043E\u0440\u0430 \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F. "])), (_l()(), i0.ɵeld(93, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u043C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B, \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u0438 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043D\u0438\u0445. "])), (_l()(), i0.ɵeld(95, 0, null, null, 3, "div", [["class", "col-lg-8 "]], null, null, null, null, null)), (_l()(), i0.ɵeld(96, 0, null, null, 2, "ul", [["class", "link-list js-link-list"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HomePageComponent_2)), i0.ɵdid(98, 278528, null, 0, i3.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(99, 0, null, null, 1, "section-contacts-component", [], null, null, null, i6.View_SectionContactsComponent_0, i6.RenderType_SectionContactsComponent)), i0.ɵdid(100, 114688, null, 0, i7.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 31, 0, _co.AboutTabs.OurMission); var currVal_3 = _ck(_v, 32, 0, "/", "about"); _ck(_v, 30, 0, currVal_2, currVal_3); var currVal_4 = _ck(_v, 58, 0, _co.AboutTabs.Clients); var currVal_5 = _ck(_v, 59, 0, "/", "about"); _ck(_v, 57, 0, currVal_4, currVal_5); var currVal_6 = _co.slideConfig; _ck(_v, 78, 0, currVal_6); var currVal_7 = _co.slides; _ck(_v, 80, 0, currVal_7); var currVal_8 = _co.IndustryShortsItems; _ck(_v, 98, 0, currVal_8); var currVal_9 = _co.PagesType.Home; var currVal_10 = "\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438"; var currVal_11 = _co.PagesLinksMap.get(_co.PagesType.Expertise); _ck(_v, 100, 0, currVal_9, currVal_10, currVal_11); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 30).target; var currVal_1 = i0.ɵnov(_v, 30).href; _ck(_v, 29, 0, currVal_0, currVal_1); }); }
exports.View_HomePageComponent_0 = View_HomePageComponent_0;
function View_HomePageComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "home-page-component", [], null, null, null, View_HomePageComponent_0, RenderType_HomePageComponent)), i0.ɵdid(1, 114688, null, 0, i8.HomePageComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomePageComponent_Host_0 = View_HomePageComponent_Host_0;
var HomePageComponentNgFactory = i0.ɵccf("home-page-component", i8.HomePageComponent, View_HomePageComponent_Host_0, {}, {}, []);
exports.HomePageComponentNgFactory = HomePageComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var AOS = __webpack_require__(/*! aos */ "aos");
var Rellax = __webpack_require__(/*! rellax */ "rellax");
var about_tabs_enum_1 = __webpack_require__(/*! @root-shared/enums/about-tabs.enum */ "./src/app/root-shared/enums/about-tabs.enum.ts");
var expertise_shorts_1 = __webpack_require__(/*! @root-shared/data/expertise-shorts */ "./src/app/root-shared/data/expertise-shorts.ts");
var industry_short_1 = __webpack_require__(/*! @root-shared/data/industry-short */ "./src/app/root-shared/data/industry-short.ts");
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
        this.AboutTabs = about_tabs_enum_1.AboutTabs;
        this.slides = expertise_shorts_1.ExpertiseShortsItems;
        this.IndustryShortsItems = industry_short_1.IndustryShortsItems;
        this.slideConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            centerMode: true,
            variableWidth: true,
            nextArrow: '<span class="arrow arrow-right"><i class="icon-icon-chevron-right"></i></span>',
            prevArrow: '<span class="arrow arrow-left"><i class="icon-icon-chevron-left"></i></span>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        variableWidth: false,
                        dots: false,
                        arrows: false,
                        autoplay: true,
                        slidesToShow: 1
                    }
                }
            ]
        };
    }
    HomePageComponent.prototype.scrollTo = function () {
        window.scrollTo({
            top: window.innerHeight - 60,
            behavior: "smooth"
        });
    };
    HomePageComponent.prototype.ngOnInit = function () {
        AOS.init();
        var rellax = new Rellax(".rellax");
    };
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;


/***/ }),

/***/ "./src/app/pages/industry-page/components/1_it-companies/it-companies.component.ngfactory.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/1_it-companies/it-companies.component.ngfactory.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ../servcies-modal/services-modal.component.ngfactory */ "./src/app/pages/industry-page/components/servcies-modal/services-modal.component.ngfactory.js");
var i4 = __webpack_require__(/*! ../servcies-modal/services-modal.component */ "./src/app/pages/industry-page/components/servcies-modal/services-modal.component.ts");
var i5 = __webpack_require__(/*! ./it-companies.component */ "./src/app/pages/industry-page/components/1_it-companies/it-companies.component.ts");
var styles_ItCompaniesIndustryComponent = [];
var RenderType_ItCompaniesIndustryComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ItCompaniesIndustryComponent, data: {} });
exports.RenderType_ItCompaniesIndustryComponent = RenderType_ItCompaniesIndustryComponent;
function View_ItCompaniesIndustryComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 32, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 29, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 28, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" IT-\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C "])), (_l()(), i0.ɵeld(6, 0, null, null, 24, "div", [["class", "row"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 20, "div", [["class", "col-lg-8"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 19, "div", [["class", "descr-block mob-lg-mb-md"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0412\u044B \u043A\u043E\u0433\u0434\u0430-\u0442\u043E \u0431\u044B\u043B\u0438 \u0438\u043B\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0435\u0441\u044C \u0444\u0440\u0438\u043B\u0430\u043D\u0441\u0435\u0440\u043E\u043C \u0438\u043B\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u043C \u043A\u0440\u0443\u043F\u043D\u043E\u0439 \u0430\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0443\u043C\u0435\u0435\u0442\u0435 \u0445\u043E\u0440\u043E\u0448\u043E \u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043E\u0434 \u0438 \u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0435\u0449\u0438 \u043A\u0440\u0443\u0442\u043E, \u043D\u043E \u043F\u043E\u0442\u043E\u043C \u043E\u0441\u043E\u0437\u043D\u0430\u043B\u0438, \u0447\u0442\u043E \u0440\u0430\u0434\u043E\u0441\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0430 \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u043D\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442, \u0438 \u0440\u0435\u0448\u0438\u043B\u0438 \u0446\u0438\u0432\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0430 \u0441\u0435\u0431\u044F \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0435\u0434\u0438\u043D\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0438\u043A\u0430\u043C\u0438. \u0412\u044B \u043D\u0435 \u0437\u043D\u0430\u0435\u0442\u0435, \u0441 \u0447\u0435\u0433\u043E \u043D\u0430\u0447\u0430\u0442\u044C, \u0430 \u043C\u044B\u0441\u043B\u0438 \u043E \u0431\u044E\u0440\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0445\u043B\u043E\u043F\u043E\u0442\u0430\u0445, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0435\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0438 \u0435\u0451 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0437\u0430\u043A\u043E\u043D\u0430, \u0432\u044B\u0437\u044B\u0432\u0430\u044E\u0442 \u0443 \u0432\u0430\u0441 \u0443\u0436\u0430\u0441 \u0438 \u043D\u0435\u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435? \u041E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C \u0441 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043D\u0438\u0436\u0435. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 SLR \u0440\u0435\u0448\u0430\u0435\u0442 \u043C\u043D\u043E\u0433\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u043F\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0438 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C, \u0441\u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0412\u0430\u043C \u0432\u0440\u0435\u043C\u044F \u0438 \u043A\u043E\u043C\u0444\u043E\u0440\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0412\u044B \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u0435 \u043D\u0430 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u043C\u0438\u0440\u0430. \u041D\u0430\u0448\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u0443\u044E\u0442 \u0432\u0441\u0435 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u044F\u0442 \u0438\u043C\u0435\u043D\u043D\u043E \u0434\u043B\u044F \u0412\u0430\u0448\u0438\u0445 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0435\u0439 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0443\u044E \u043C\u043E\u0434\u0435\u043B\u044C, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044F \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u2013 \u0441\u043C\u043E\u0433\u0443\u0442 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u0442\u044C \u0432 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u043E\u0444\u043B\u0430\u0439\u043D \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0435 \u0438 PR. \u0423 \u043D\u0430\u0441 \u0435\u0441\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u043F\u044B\u0442 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F IT-\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0434\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u043F\u0435\u0440\u0435\u0434 \u043F\u0440\u0435\u0434\u0443\u0433\u0430\u0434\u044B\u0432\u0430\u0442\u044C \u0412\u0430\u0448\u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438 \u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0449\u0438\u0435 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438, \u043D\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u0432 \u043D\u0438 \u043C\u0430\u043B\u0435\u0439\u0448\u0435\u0439 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0434\u043B\u044F \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u043D\u0438\u044F \u00AB\u0417\u0430\u043A\u043E\u043D\u0430 \u041C\u0435\u0440\u0444\u0438\u00BB: "])), (_l()(), i0.ɵeld(13, 0, null, null, 12, "ul", [["class", "square-list font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵeld(14, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044E\u00A0\u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432 IT-\u0441\u0435\u043A\u0442\u043E\u0440\u0435; "])), (_l()(), i0.ɵeld(16, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0421\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0443\u0441\u0442\u0430\u0432\u0430, \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0443\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043F\u043E\u043C\u043E\u0449\u044C \u0432 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u0441\u0447\u0435\u0442\u0430, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0435\u0447\u0430\u0442\u0438, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043F\u0440\u0430\u0432\u043E\u043A \u0438\u0437 \u043E\u0440\u0433\u0430\u043D\u043E\u0432 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438, \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u043E\u0432, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0442\u0440\u0443\u0434\u043E\u0432\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438 \u043F\u0440\u0430\u0432\u043E\u0432\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0442\u0440\u0443\u0434\u043E\u0432\u044B\u0445 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0424\u041B\u041F, \u0434\u0440\u0443\u0433\u043E\u0435; "])), (_l()(), i0.ɵeld(18, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u043B\u043D\u043E\u0435 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0438 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 IT-\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u0430\u043D\u0430\u043B\u0438\u0437 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0438 \u043B\u0435\u0433\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438; "])), (_l()(), i0.ɵeld(20, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430, \u043F\u0440\u0430\u0432\u043E\u0432\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430, \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u0432, \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0439, \u043F\u0438\u0441\u0435\u043C, \u0436\u0430\u043B\u043E\u0431, \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0439, \u0432\u043D\u0435\u0448\u043D\u0435\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u043E\u0432 \u0438 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0439; "])), (_l()(), i0.ɵeld(22, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0412\u044B\u0435\u0437\u0434 \u0432 \u0412\u0430\u0448 \u043E\u0444\u0438\u0441 \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043F\u0440\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430\u0445 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u044E\u0449\u0438\u043C\u0438 \u043E\u0440\u0433\u0430\u043D\u0430\u043C\u0438, \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u0430\u044F (\u0443\u0441\u0442\u043D\u0430\u044F \u0438 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u0430\u044F) \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C\u0438 (\u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438, \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438), \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u0430\u0445 \u0441 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C\u0438 \u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u0432, \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430\u043C, \u0434\u043E\u0441\u0443\u0434\u0435\u0431\u043D\u043E\u0433\u043E \u0443\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u043F\u043E\u0440\u0430, \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u043F\u0440\u0430\u0432\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439; "])), (_l()(), i0.ɵeld(24, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0414\u0440\u0443\u0433\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E."])), (_l()(), i0.ɵeld(26, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u0430\u043A\u0435\u0442\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0434\u043B\u044F \u0412\u0430\u0448\u0435\u0439 \u043E\u0442\u0440\u0430\u0441\u043B\u0438. \u0417\u0430\u0434\u0430\u0447\u0438, \u0432\u044B\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0437\u0430 \u0440\u0430\u043C\u043A\u0438 \u043F\u0430\u043A\u0435\u0442\u043E\u0432 \u2013 \u043E\u0431\u0441\u0443\u0436\u0434\u0430\u0435\u043C \u043F\u0440\u0438 \u043B\u0438\u0447\u043D\u043E\u0439 \u0432\u0441\u0442\u0440\u0435\u0447\u0435. "])), (_l()(), i0.ɵeld(28, 0, null, null, 2, "div", [["class", "col-lg-4"]], null, null, null, null, null)), (_l()(), i0.ɵeld(29, 0, null, null, 1, "button", [["class", "btn btn-border-primary btn-sm"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 34).openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u0430\u043A\u0435\u0442\u044B \u0443\u0441\u043B\u0443\u0433 "])), (_l()(), i0.ɵeld(31, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(32, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null), (_l()(), i0.ɵeld(33, 0, null, null, 1, "services-modal-component", [], null, null, null, i3.View_ServicesModalComponent_0, i3.RenderType_ServicesModalComponent)), i0.ɵdid(34, 49152, [["servicesModal", 4]], 0, i4.ServicesModalComponent, [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Industry; var currVal_1 = "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.About); _ck(_v, 32, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_ItCompaniesIndustryComponent_0 = View_ItCompaniesIndustryComponent_0;
function View_ItCompaniesIndustryComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "it-companies-industry-component", [], null, null, null, View_ItCompaniesIndustryComponent_0, RenderType_ItCompaniesIndustryComponent)), i0.ɵdid(1, 49152, null, 0, i5.ItCompaniesIndustryComponent, [], null, null)], null, null); }
exports.View_ItCompaniesIndustryComponent_Host_0 = View_ItCompaniesIndustryComponent_Host_0;
var ItCompaniesIndustryComponentNgFactory = i0.ɵccf("it-companies-industry-component", i5.ItCompaniesIndustryComponent, View_ItCompaniesIndustryComponent_Host_0, {}, {}, []);
exports.ItCompaniesIndustryComponentNgFactory = ItCompaniesIndustryComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/industry-page/components/1_it-companies/it-companies.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/1_it-companies/it-companies.component.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var ItCompaniesIndustryComponent = /** @class */ (function () {
    function ItCompaniesIndustryComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return ItCompaniesIndustryComponent;
}());
exports.ItCompaniesIndustryComponent = ItCompaniesIndustryComponent;


/***/ }),

/***/ "./src/app/pages/industry-page/components/2_call-centers/call-centers.component.ngfactory.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/2_call-centers/call-centers.component.ngfactory.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ../servcies-modal/services-modal.component.ngfactory */ "./src/app/pages/industry-page/components/servcies-modal/services-modal.component.ngfactory.js");
var i4 = __webpack_require__(/*! ../servcies-modal/services-modal.component */ "./src/app/pages/industry-page/components/servcies-modal/services-modal.component.ts");
var i5 = __webpack_require__(/*! ./call-centers.component */ "./src/app/pages/industry-page/components/2_call-centers/call-centers.component.ts");
var styles_CallCentersIndustryComponent = [];
var RenderType_CallCentersIndustryComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_CallCentersIndustryComponent, data: {} });
exports.RenderType_CallCentersIndustryComponent = RenderType_CallCentersIndustryComponent;
function View_CallCentersIndustryComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 30, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 27, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 26, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" Call-\u0446\u0435\u043D\u0442\u0440\u0430\u043C "])), (_l()(), i0.ɵeld(6, 0, null, null, 22, "div", [["class", "row"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 18, "div", [["class", "col-lg-8 "]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 17, "div", [["class", "descr-block mob-lg-mb-md"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0412 \u0423\u043A\u0440\u0430\u0438\u043D\u0435 \u0443\u0436\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 call- \u0446\u0435\u043D\u0442\u0440\u043E\u0432. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0437 \u043D\u0438\u0445 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0430\u0448\u0438\u043C\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F. \u041C\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u043C \u0437\u0430\u0434\u0430\u0447\u0438, \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430: \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043F\u043E\u0438\u0441\u043A \u043E\u0444\u0438\u0441\u0430, \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u0432, \u043F\u043E\u0438\u0441\u043A \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430 \u0438 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0430, \u0441\u0434\u0430\u0447\u0430 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0445 \u043E\u0442\u0447\u0435\u0442\u043E\u0432, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0432\u0438\u0434\u0430 \u043D\u0430 \u0436\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432-\u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0446\u0435\u0432 \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0435, \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u0438\u0437\u0431\u0430\u0432\u0438\u043C \u0412\u0430\u0441 \u043E\u0442 \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0439 \u0431\u043E\u043B\u0438 \u043F\u0440\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0430 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432, \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0431\u044F \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u043D\u043E \u0438 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E. \u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u044E\u0440\u0438\u0441\u0442\u043E\u0432 \u0438 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 SLR \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0443 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0444\u0435\u0440\u0435, \u0433\u043E\u0442\u043E\u0432\u0430 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0412\u0430\u0441 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E \u0432 \u0437\u0430\u0432\u0442\u0440\u0430\u0448\u043D\u0435\u043C \u0434\u043D\u0435 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u0412\u0430\u0448\u0435\u0433\u043E \u043E\u0444\u0438\u0441\u0430: "])), (_l()(), i0.ɵeld(13, 0, null, null, 10, "ul", [["class", "square-list font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵeld(14, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044E\u00A0\u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043F\u043E\u0434\u0431\u043E\u0440 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0432\u0438\u0434\u043E\u0432 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0435\u0447\u0430\u0442\u0438, \u0443\u0441\u0442\u0430\u0432\u043D\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0445 \u0441\u0447\u0435\u0442\u043E\u0432; "])), (_l()(), i0.ɵeld(16, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u043B\u043D\u043E\u0435 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0438 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0442\u0440\u0443\u0434\u043E\u0432\u044B\u0445 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439 \u0441 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C\u0438, \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u0432 \u0430\u0440\u0435\u043D\u0434\u044B, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0438 \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C\u0438; "])), (_l()(), i0.ɵeld(18, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u0438\u0441\u043A \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u0430 \u043D\u0430 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430, \u0441\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0432\u0438\u0434\u0430 \u043D\u0430 \u0436\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u043C \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C; "])), (_l()(), i0.ɵeld(20, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0410\u043D\u0430\u043B\u0438\u0437 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0438 \u043B\u0435\u0433\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0434\u0435\u043B \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F\u0440\u0430\u0432\u043E\u0432\u044B\u043C \u043F\u043E\u043B\u0435\u043C; "])), (_l()(), i0.ɵeld(22, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0414\u0440\u0443\u0433\u043E\u0435..."])), (_l()(), i0.ɵeld(24, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u0430\u043A\u0435\u0442\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0434\u043B\u044F \u0412\u0430\u0448\u0435\u0439 \u043E\u0442\u0440\u0430\u0441\u043B\u0438. \u0417\u0430\u0434\u0430\u0447\u0438, \u0432\u044B\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0437\u0430 \u0440\u0430\u043C\u043A\u0438 \u043F\u0430\u043A\u0435\u0442\u043E\u0432 \u2013 \u043E\u0431\u0441\u0443\u0436\u0434\u0430\u0435\u043C \u043F\u0440\u0438 \u043B\u0438\u0447\u043D\u043E\u0439 \u0432\u0441\u0442\u0440\u0435\u0447\u0435. "])), (_l()(), i0.ɵeld(26, 0, null, null, 2, "div", [["class", "col-lg-4"]], null, null, null, null, null)), (_l()(), i0.ɵeld(27, 0, null, null, 1, "button", [["class", "btn btn-border-primary btn-sm"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 32).openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u0430\u043A\u0435\u0442\u044B \u0443\u0441\u043B\u0443\u0433 "])), (_l()(), i0.ɵeld(29, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(30, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null), (_l()(), i0.ɵeld(31, 0, null, null, 1, "services-modal-component", [], null, null, null, i3.View_ServicesModalComponent_0, i3.RenderType_ServicesModalComponent)), i0.ɵdid(32, 49152, [["servicesModal", 4]], 0, i4.ServicesModalComponent, [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Industry; var currVal_1 = "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.About); _ck(_v, 30, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_CallCentersIndustryComponent_0 = View_CallCentersIndustryComponent_0;
function View_CallCentersIndustryComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "call-centers-industry-component", [], null, null, null, View_CallCentersIndustryComponent_0, RenderType_CallCentersIndustryComponent)), i0.ɵdid(1, 49152, null, 0, i5.CallCentersIndustryComponent, [], null, null)], null, null); }
exports.View_CallCentersIndustryComponent_Host_0 = View_CallCentersIndustryComponent_Host_0;
var CallCentersIndustryComponentNgFactory = i0.ɵccf("call-centers-industry-component", i5.CallCentersIndustryComponent, View_CallCentersIndustryComponent_Host_0, {}, {}, []);
exports.CallCentersIndustryComponentNgFactory = CallCentersIndustryComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/industry-page/components/2_call-centers/call-centers.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/2_call-centers/call-centers.component.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var CallCentersIndustryComponent = /** @class */ (function () {
    function CallCentersIndustryComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return CallCentersIndustryComponent;
}());
exports.CallCentersIndustryComponent = CallCentersIndustryComponent;


/***/ }),

/***/ "./src/app/pages/industry-page/components/3_сreative-class/сreative-class.component.ngfactory.js":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/3_сreative-class/сreative-class.component.ngfactory.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ../servcies-modal/services-modal.component.ngfactory */ "./src/app/pages/industry-page/components/servcies-modal/services-modal.component.ngfactory.js");
var i4 = __webpack_require__(/*! ../servcies-modal/services-modal.component */ "./src/app/pages/industry-page/components/servcies-modal/services-modal.component.ts");
var i5 = __webpack_require__(/*! ./сreative-class.component */ "./src/app/pages/industry-page/components/3_сreative-class/сreative-class.component.ts");
var styles_CreativeClassIndustryComponent = [];
var RenderType_CreativeClassIndustryComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_CreativeClassIndustryComponent, data: {} });
exports.RenderType_CreativeClassIndustryComponent = RenderType_CreativeClassIndustryComponent;
function View_CreativeClassIndustryComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 36, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 33, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 32, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u043E\u043C\u0443 \u043A\u043B\u0430\u0441\u0441\u0443 "])), (_l()(), i0.ɵeld(6, 0, null, null, 28, "div", [["class", "row"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 24, "div", [["class", "col-lg-8 offset-md-2"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 23, "div", [["class", "descr-block mob-lg-mb-md"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0415\u0441\u043B\u0438 \u0412\u044B \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435 \u0441\u0435\u0431\u044F \u043A \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E\u043C\u0443 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u043E\u043C\u0443 \u043A\u043B\u0430\u0441\u0441\u0443, \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0435 \u0441\u043E\u0444\u0442, \u043E\u0434\u0435\u0436\u0434\u0443, \u043C\u0443\u0437\u044B\u043A\u0443, \u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u044B, \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0438\u0432\u0430\u0435\u0442\u0435 \u043C\u0438\u0440 \u0438\u043B\u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0435\u0441\u044C \u0434\u0440\u0443\u0433\u043E\u0439 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u0441\u043E\u0437\u0438\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0438\u043B\u0438 \u0441 \u0433\u0440\u0443\u043F\u043F\u043E\u0439 \u0435\u0434\u0438\u043D\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0438\u043A\u043E\u0432, \u0438 \u0412\u0430\u043C \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0445 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u2013 \u043E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u043A \u043D\u0430\u043C. \u041C\u044B \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C \u0442\u0430\u043A\u0438\u0445, \u043A\u0430\u043A \u0412\u044B, \u0438 \u0433\u043E\u0440\u0434\u0438\u043C\u0441\u044F \u044D\u0442\u0438\u043C. \u0411\u0435\u0437 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u043E\u0432 \u0438 \u0440\u0435\u043C\u0435\u0441\u043B\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u0431\u044B \u043D\u0435 \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u043E\u0440\u044B\u0432\u044B, \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u0431\u044B\u043B\u043E \u0431\u044B \u043C\u0440\u0430\u0447\u043D\u044B\u043C \u0438 \u0443\u0433\u0440\u044E\u043C\u044B\u043C. \u0415\u0441\u043B\u0438 \u043C\u044B \u0443\u0432\u0438\u0434\u0438\u043C \u043E\u0433\u043E\u043D\u044C \u0432 \u0412\u0430\u0448\u0438\u0445 \u0433\u043B\u0430\u0437\u0430\u0445 \u0438 \u043D\u0435\u0443\u0435\u043C\u043D\u043E\u0435 \u0436\u0435\u043B\u0430\u043D\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0438 \u0443\u043B\u0443\u0447\u0448\u0430\u0442\u044C \u043C\u0438\u0440 \u2013 \u043C\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u043C \u0412\u0430\u043C \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0435 \u0441\u043A\u0438\u0434\u043A\u0438 \u043D\u0430 \u043D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438, \u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0412\u0430\u043C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0415\u0441\u043B\u0438 \u0434\u043B\u044F \u0412\u0430\u0441 \u0422\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u043E \u2013 \u044D\u0442\u043E \u0412\u0430\u0448\u0435 \u0432\u0441\u0451, \u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u2013 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0442\u0435\u0441\u0442 \u0438 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u0446\u0438\u044E, \u041D\u0414\u0424\u041B \u2013 \u0430\u0431\u0431\u0440\u0435\u0432\u0438\u0430\u0442\u0443\u0440\u0430, \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0432\u044B \u043D\u0435 \u0437\u043D\u0430\u0435\u0442\u0435 \u0438 \u043D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u0432 \u044D\u0442\u043E \u0432\u043D\u0438\u043A\u0430\u0442\u044C \u2013 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F SLR \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0412\u0430\u043C \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043B\u044E\u0431\u0438\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u0438 \u0438\u0437\u0431\u0430\u0432\u0438\u0442 \u043E\u0442 \u0440\u0443\u0442\u0438\u043D\u044B. \u041C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u043C\u0443 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443, \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u043C\u0443 \u0438 \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044E \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0442\u0430\u043A\u0438\u0445 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0433\u0440\u0443\u043F\u043F, \u043A\u0430\u043A \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u044B, \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B, \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u044B, \u0438\u0437\u043E\u0431\u0440\u0435\u0442\u0430\u0442\u0435\u043B\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0438\u0437\u0443\u0447\u0438\u0442 \u0412\u0430\u0448\u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438 \u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u043B\u044C \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0443\u044E \u043D\u043E\u0440\u043C\u0430\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0443\u044E \u043A\u0430\u043A \u0448\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043A\u0438\u0435 \u0447\u0430\u0441\u044B. "])), (_l()(), i0.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434 \u0432\u0430\u0448\u0438 \u0446\u0435\u043B\u0438 \u0438 \u0437\u0430\u0434\u0430\u0447\u0438 \u043E\u043F\u044B\u0442\u043D\u044B\u0435 \u044E\u0440\u0438\u0441\u0442\u044B \u0438 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 SLR \u043F\u0440\u0438\u043C\u0443\u0442 \u043D\u0430 \u0441\u0435\u0431\u044F \u0443\u0434\u0430\u0440 \u0431\u044E\u0440\u043E\u043A\u0440\u0430\u0442\u0438\u0438, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044F \u0443\u0441\u043B\u0443\u0433\u0438: "])), (_l()(), i0.ɵeld(15, 0, null, null, 14, "ul", [["class", "square-list font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵeld(16, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0445 \u043C\u0430\u0440\u043E\u043A, \u0438\u0437\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u0439, \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438; "])), (_l()(), i0.ɵeld(18, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044E\u00A0\u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438; "])), (_l()(), i0.ɵeld(20, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0421\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0443\u0441\u0442\u0430\u0432\u0430, \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0443\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043F\u043E\u043C\u043E\u0449\u044C \u0432 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u0441\u0447\u0435\u0442\u0430, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0435\u0447\u0430\u0442\u0438, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043F\u0440\u0430\u0432\u043E\u043A \u0438\u0437 \u043E\u0440\u0433\u0430\u043D\u043E\u0432 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438, \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u043E\u0432, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0442\u0440\u0443\u0434\u043E\u0432\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438 \u043F\u0440\u0430\u0432\u043E\u0432\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0442\u0440\u0443\u0434\u043E\u0432\u044B\u0445 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0424\u041B\u041F, \u0434\u0440\u0443\u0433\u043E\u0435; "])), (_l()(), i0.ɵeld(22, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u043B\u043D\u043E\u0435 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0438 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0430\u043D\u0430\u043B\u0438\u0437 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0438 \u043B\u0435\u0433\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438; "])), (_l()(), i0.ɵeld(24, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430, \u043F\u0440\u0430\u0432\u043E\u0432\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430, \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u0432, \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0439, \u043F\u0438\u0441\u0435\u043C, \u0436\u0430\u043B\u043E\u0431, \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0439, \u0432\u043D\u0435\u0448\u043D\u0435\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u043E\u0432 \u0438 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u044B\u0445; "])), (_l()(), i0.ɵeld(26, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0412\u044B\u0435\u0437\u0434 \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043F\u0440\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430\u0445 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u044E\u0449\u0438\u043C\u0438 \u043E\u0440\u0433\u0430\u043D\u0430\u043C\u0438, \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u0430\u044F (\u0443\u0441\u0442\u043D\u0430\u044F \u0438 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u0430\u044F) \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C\u0438 (\u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438, \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438), \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u0430\u0445 \u0441 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C\u0438 \u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u0432, \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430\u043C, \u0434\u043E\u0441\u0443\u0434\u0435\u0431\u043D\u043E\u0433\u043E \u0443\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u043F\u043E\u0440\u0430, \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u043F\u0440\u0430\u0432\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439; "])), (_l()(), i0.ɵeld(28, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0414\u0440\u0443\u0433\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E."])), (_l()(), i0.ɵeld(30, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u0430\u043A\u0435\u0442\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0434\u043B\u044F \u0412\u0430\u0448\u0435\u0439 \u043E\u0442\u0440\u0430\u0441\u043B\u0438. \u0417\u0430\u0434\u0430\u0447\u0438, \u0432\u044B\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0437\u0430 \u0440\u0430\u043C\u043A\u0438 \u043F\u0430\u043A\u0435\u0442\u043E\u0432 \u2013 \u043E\u0431\u0441\u0443\u0436\u0434\u0430\u0435\u043C \u043F\u0440\u0438 \u043B\u0438\u0447\u043D\u043E\u0439 \u0432\u0441\u0442\u0440\u0435\u0447\u0435. "])), (_l()(), i0.ɵeld(32, 0, null, null, 2, "div", [["class", "col-lg-4"]], null, null, null, null, null)), (_l()(), i0.ɵeld(33, 0, null, null, 1, "button", [["class", "btn btn-border-primary btn-sm"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 38).openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u0430\u043A\u0435\u0442\u044B \u0443\u0441\u043B\u0443\u0433 "])), (_l()(), i0.ɵeld(35, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(36, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null), (_l()(), i0.ɵeld(37, 0, null, null, 1, "services-modal-component", [], null, null, null, i3.View_ServicesModalComponent_0, i3.RenderType_ServicesModalComponent)), i0.ɵdid(38, 49152, [["servicesModal", 4]], 0, i4.ServicesModalComponent, [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Industry; var currVal_1 = "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.About); _ck(_v, 36, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_CreativeClassIndustryComponent_0 = View_CreativeClassIndustryComponent_0;
function View_CreativeClassIndustryComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "reative-class-industry-component", [], null, null, null, View_CreativeClassIndustryComponent_0, RenderType_CreativeClassIndustryComponent)), i0.ɵdid(1, 49152, null, 0, i5.CreativeClassIndustryComponent, [], null, null)], null, null); }
exports.View_CreativeClassIndustryComponent_Host_0 = View_CreativeClassIndustryComponent_Host_0;
var CreativeClassIndustryComponentNgFactory = i0.ɵccf("\u0441reative-class-industry-component", i5.CreativeClassIndustryComponent, View_CreativeClassIndustryComponent_Host_0, {}, {}, []);
exports.CreativeClassIndustryComponentNgFactory = CreativeClassIndustryComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/industry-page/components/3_сreative-class/сreative-class.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/3_сreative-class/сreative-class.component.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var CreativeClassIndustryComponent = /** @class */ (function () {
    function CreativeClassIndustryComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return CreativeClassIndustryComponent;
}());
exports.CreativeClassIndustryComponent = CreativeClassIndustryComponent;


/***/ }),

/***/ "./src/app/pages/industry-page/components/4_real-sector-economy/real-sector-economy.component.ngfactory.js":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/4_real-sector-economy/real-sector-economy.component.ngfactory.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ./real-sector-economy.component */ "./src/app/pages/industry-page/components/4_real-sector-economy/real-sector-economy.component.ts");
var styles_RealSectorEconomyIndustryComponent = [];
var RenderType_RealSectorEconomyIndustryComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_RealSectorEconomyIndustryComponent, data: {} });
exports.RenderType_RealSectorEconomyIndustryComponent = RenderType_RealSectorEconomyIndustryComponent;
function View_RealSectorEconomyIndustryComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 16, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 13, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 12, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 10, "div", [["class", "col-lg-8 "]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0420\u0435\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0441\u0435\u043A\u0442\u043E\u0440\u0443 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438. \u041E\u0446\u0438\u0444\u0440\u043E\u0432\u043A\u0430 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438 "])), (_l()(), i0.ɵeld(8, 0, null, null, 6, "div", [["class", "descr-block"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0423\u043C\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u0438 \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u043F\u043E\u0434 \u0438\u0437\u043C\u0435\u043D\u044F\u044E\u0449\u0438\u0435\u0441\u044F \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0432\u0430\u0436\u043D\u0435\u0439\u0448\u0438\u043C \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u043C \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0443\u0441\u043F\u0435\u0445\u0430. \u0423\u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u043D\u0430\u0434\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0438 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432, \u0432\u043D\u0435\u0448\u043D\u0438\u0435 - \u043F\u0435\u0440\u0435\u043E\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u0441 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438, \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u0438 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E\u043C. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 SLR \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u044E\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u0438\u0445 \u0441\u0435\u043A\u0442\u043E\u0440\u0430, \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0442\u0440\u0443\u0434\u043D\u043E\u043A\u043E\u043F\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438, \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u044B. \u0412\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0438 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E - \u043D\u0430\u0438\u043B\u0443\u0447\u0448\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0431\u0443\u0434\u0443\u0442 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u0441\u0442\u0430\u043D\u0435\u0442 \u0432\u0430\u0436\u043D\u044B\u043C \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u043C \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0435\u0433\u043E \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438. \u041C\u044B \u043D\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u043E\u043F\u044B\u0442 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u0435\u0439\u0441\u0430\u0445 \u0438 \u043C\u043E\u0436\u0435\u043C \u0432\u043D\u0435\u0434\u0440\u0438\u0442\u044C \u0438\u0434\u0435\u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u043F\u0440\u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0438 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438 \u0412\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439, \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0438 \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C\u0438 \u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438, \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0439 \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u043A\u043E\u0433\u043D\u0438\u0442\u0438\u0432\u043D\u044B\u043C \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0435\u043C, \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0442 \u0435\u0433\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u0438 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E, \u0432\u0438\u0434\u044F\u0442 \u0438 \u043C\u044B\u0441\u043B\u044F\u0442 \u043F\u043E-\u0440\u0430\u0437\u043D\u043E\u043C\u0443, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0435 \u0431\u0430\u0437\u044B \u0437\u043D\u0430\u043D\u0438\u0439, \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0443, \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u044E\u0442\u0441\u044F \u0432 \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0438 \u0432\u0437\u0430\u0438\u043C\u043E\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445, \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0432 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0440\u0435\u0432\u043E\u043B\u044E\u0446\u0438\u0438 \u0438 \u0432 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0435. \u0427\u0435\u043C \u0441\u0438\u043B\u044C\u043D\u0435\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u0437 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0435\u043A\u0442\u043E\u0440\u0430 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 \u0432 \u0446\u0438\u0444\u0440\u0435, \u0442\u0435\u043C \u043B\u0443\u0447\u0448\u0435 \u0435\u0435 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438. \u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u0445, \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u0445, \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u0445 \u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0430\u0445 \u0441\u0442\u0430\u043D\u0435\u0442 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u043C \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0440\u043E\u0441\u0442\u0430 \u0432\u044B\u0440\u0443\u0447\u043A\u0438 \u0438 \u0440\u0435\u043D\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438. "])), (_l()(), i0.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0423\u0441\u043F\u0435\u0448\u043D\u043E\u0435 \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 20 \u043B\u0435\u0442 \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C \u0434\u0438\u0433\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0438 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u0418\u0418 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043C\u043E\u0449\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430, \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0441\u0440\u043E\u043A\u043E\u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0437\u0430\u0434\u0430\u0447 \u0438 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432 \u043C\u0438\u0440\u0435 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E\u0441\u0442\u0438. \u0421\u0435\u0439\u0447\u0430\u0441 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u2013 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C: \u043D\u0435 \u043C\u043E\u0436\u0435\u0448\u044C \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0447\u0442\u043E-\u0442\u043E \u0441\u0430\u043C \u2014 \u0441\u0440\u043E\u0447\u043D\u043E \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u044C\u0441\u044F \u0438 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0439 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043C\u043E\u0433\u0443\u0442. "])), (_l()(), i0.ɵeld(15, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(16, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Industry; var currVal_1 = "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.About); _ck(_v, 16, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_RealSectorEconomyIndustryComponent_0 = View_RealSectorEconomyIndustryComponent_0;
function View_RealSectorEconomyIndustryComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "real-sector-economy-industry-component", [], null, null, null, View_RealSectorEconomyIndustryComponent_0, RenderType_RealSectorEconomyIndustryComponent)), i0.ɵdid(1, 49152, null, 0, i3.RealSectorEconomyIndustryComponent, [], null, null)], null, null); }
exports.View_RealSectorEconomyIndustryComponent_Host_0 = View_RealSectorEconomyIndustryComponent_Host_0;
var RealSectorEconomyIndustryComponentNgFactory = i0.ɵccf("real-sector-economy-industry-component", i3.RealSectorEconomyIndustryComponent, View_RealSectorEconomyIndustryComponent_Host_0, {}, {}, []);
exports.RealSectorEconomyIndustryComponentNgFactory = RealSectorEconomyIndustryComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/industry-page/components/4_real-sector-economy/real-sector-economy.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/4_real-sector-economy/real-sector-economy.component.ts ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var RealSectorEconomyIndustryComponent = /** @class */ (function () {
    function RealSectorEconomyIndustryComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return RealSectorEconomyIndustryComponent;
}());
exports.RealSectorEconomyIndustryComponent = RealSectorEconomyIndustryComponent;


/***/ }),

/***/ "./src/app/pages/industry-page/components/5_clients-of-ukrainian-outsourcing-companies/clients-of-ukrainian-outsourcing-companies.component.ngfactory.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/5_clients-of-ukrainian-outsourcing-companies/clients-of-ukrainian-outsourcing-companies.component.ngfactory.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ./clients-of-ukrainian-outsourcing-companies.component */ "./src/app/pages/industry-page/components/5_clients-of-ukrainian-outsourcing-companies/clients-of-ukrainian-outsourcing-companies.component.ts");
var styles_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent = [];
var RenderType_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent, data: {} });
exports.RenderType_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent = RenderType_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent;
function View_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 30, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 27, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 26, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 25, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 24, "div", [["class", "col-lg-8 "]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u0443\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0438\u0445 \u0430\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0438 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430\u043C \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 "])), (_l()(), i0.ɵeld(8, 0, null, null, 20, "div", [["class", "descr-block "], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0423\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0438\u0435 IT-\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442 95% \u0441\u0432\u043E\u0438\u0445 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043D\u0430 \u044D\u043A\u0441\u043F\u043E\u0440\u0442, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 90% \u0434\u043B\u044F \u0441\u0442\u0440\u0430\u043D \u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0439 \u0410\u043C\u0435\u0440\u0438\u043A\u0438 \u0438 \u0415\u0432\u0440\u043E\u043F\u044B. \u0423 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439-\u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u0432 \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438 \u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0434\u0435\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432 \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0435. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C\u0441\u044F \u043D\u0430 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0437\u0430\u0434\u0430\u0447: "])), (_l()(), i0.ɵeld(13, 0, null, null, 6, "ul", [["class", "square-list font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵeld(14, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u0430\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u0438 \u0430\u0443\u0442\u0441\u0442\u0430\u0444\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0441 \u043E\u0444\u0438\u0441\u0430\u043C\u0438 \u00AB\u043F\u043E\u0434 \u043A\u043B\u044E\u0447\u00BB, \u043F\u043E\u0438\u0441\u043A \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439, \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u0432 \u0430\u0440\u0435\u043D\u0434\u044B, \u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u043C\u0435\u0431\u0435\u043B\u0438 \u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F, \u0434\u0440\u0443\u0433\u043E\u0435; "])), (_l()(), i0.ɵeld(16, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0430\u0443\u0442\u0441\u0442\u0430\u0444\u0438\u043D\u0433\u043E\u0432\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043D\u0443\u0436\u043D\u044B\u0445 \u0412\u0430\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0432 \u043D\u0430\u0448\u0443 IT \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430 \u043D\u0438\u0445 \u043E\u043F\u043B\u0430\u0442 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u043E\u0432 \u0441 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 \u0437\u0430 \u0438\u0445 \u0440\u0430\u0431\u043E\u0442\u0443 (\u0447\u0442\u043E\u0431\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043E\u0442\u043D\u0435\u0441\u043B\u0430 \u043E\u043F\u043B\u0430\u0442\u044B \u043D\u0430 \u0440\u0430\u0441\u0445\u043E\u0434\u044B), \u043C\u0438\u043D\u0443\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u044B Upwork \u0438 Payoneer; "])), (_l()(), i0.ɵeld(18, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439-\u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432 \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u043E\u0432, \u0432\u0438\u0437\u0438\u0442\u044B \u0432 \u043E\u0444\u0438\u0441 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439, \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u043E\u0432 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0438\u0445 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F; "])), (_l()(), i0.ɵeld(20, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C\u0441\u044F \u043D\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0434\u0435\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439: "])), (_l()(), i0.ɵeld(22, 0, null, null, 4, "ul", [["class", "square-list font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵeld(23, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0441\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432 \u0438 \u0441\u043F\u043E\u0440\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430\u043C\u0438 \u0438 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F\u043C\u0438; "])), (_l()(), i0.ɵeld(25, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0432 \u043E\u0440\u0433\u0430\u043D\u0430\u0445 \u0432\u043B\u0430\u0441\u0442\u0438, \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u043E-\u0438\u0441\u043A\u043E\u0432\u0430\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u0434\u043E\u0441\u0443\u0434\u0435\u0431\u043D\u043E\u0435 \u0438 \u0441\u0443\u0434\u0435\u0431\u043D\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435. "])), (_l()(), i0.ɵeld(27, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0415\u0441\u043B\u0438 \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C \u0438\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B, \u043C\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0438\u0445 \u0438 \u043D\u0430\u0439\u0442\u0438 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F. "])), (_l()(), i0.ɵeld(29, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(30, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Industry; var currVal_1 = "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.About); _ck(_v, 30, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent_0 = View_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent_0;
function View_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "clients-of-ukrainian-outsourcing-companies-industry-component", [], null, null, null, View_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent_0, RenderType_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent)), i0.ɵdid(1, 49152, null, 0, i3.ClientsOfUkrainianOutsourcingCompaniesIndustryComponent, [], null, null)], null, null); }
exports.View_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent_Host_0 = View_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent_Host_0;
var ClientsOfUkrainianOutsourcingCompaniesIndustryComponentNgFactory = i0.ɵccf("clients-of-ukrainian-outsourcing-companies-industry-component", i3.ClientsOfUkrainianOutsourcingCompaniesIndustryComponent, View_ClientsOfUkrainianOutsourcingCompaniesIndustryComponent_Host_0, {}, {}, []);
exports.ClientsOfUkrainianOutsourcingCompaniesIndustryComponentNgFactory = ClientsOfUkrainianOutsourcingCompaniesIndustryComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/industry-page/components/5_clients-of-ukrainian-outsourcing-companies/clients-of-ukrainian-outsourcing-companies.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/5_clients-of-ukrainian-outsourcing-companies/clients-of-ukrainian-outsourcing-companies.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var ClientsOfUkrainianOutsourcingCompaniesIndustryComponent = /** @class */ (function () {
    function ClientsOfUkrainianOutsourcingCompaniesIndustryComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return ClientsOfUkrainianOutsourcingCompaniesIndustryComponent;
}());
exports.ClientsOfUkrainianOutsourcingCompaniesIndustryComponent = ClientsOfUkrainianOutsourcingCompaniesIndustryComponent;


/***/ }),

/***/ "./src/app/pages/industry-page/components/6_accompanying-intergenerational-business/accompanying-intergenerational-business.component.ngfactory.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/6_accompanying-intergenerational-business/accompanying-intergenerational-business.component.ngfactory.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../../../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i3 = __webpack_require__(/*! ./accompanying-intergenerational-business.component */ "./src/app/pages/industry-page/components/6_accompanying-intergenerational-business/accompanying-intergenerational-business.component.ts");
var styles_AccompanyingIntergenerationalBusinessIndustryComponent = [];
var RenderType_AccompanyingIntergenerationalBusinessIndustryComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AccompanyingIntergenerationalBusinessIndustryComponent, data: {} });
exports.RenderType_AccompanyingIntergenerationalBusinessIndustryComponent = RenderType_AccompanyingIntergenerationalBusinessIndustryComponent;
function View_AccompanyingIntergenerationalBusinessIndustryComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 18, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 15, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 14, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 12, "div", [["class", "col-lg-8 "]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "section-heading mb-sm"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h1", [["class", "h3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0435\u043C\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F\u043C\u0438, \u043D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E "])), (_l()(), i0.ɵeld(8, 0, null, null, 8, "div", [["class", "descr-block "], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0435 \u0431\u0438\u0437\u043D\u0435\u0441\u044B \u0432\u00A0\u043C\u0438\u0440\u0435 \u043F\u0440\u0435\u0432\u043E\u0441\u0445\u043E\u0434\u044F\u0442 \u043F\u043E \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043B\u0438\u0434\u0435\u0440\u0441\u0442\u0432\u043E \u0432 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0435 Forbes \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442 \u0438\u043C\u0435\u043D\u043D\u043E \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u043C \u0445\u043E\u043B\u0434\u0438\u043D\u0433\u0430\u043C. \u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u0438 \u0441\u0440\u0435\u0434\u043D\u0438\u0445 \u0443\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u0430\u0447\u0430\u043B\u0438 \u0441\u0432\u043E\u0439 \u043F\u043E\u0434\u044A\u0435\u043C \u0432 90-\u0435 \u0433\u043E\u0434\u044B \u0425\u0425 \u0432\u0435\u043A\u0430. \u0412\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u044B, \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u044F\u0449\u0438\u0435 \u0441\u0432\u043E\u0438\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438 \u0431\u043E\u043B\u0435\u0435 20\u00A0\u043B\u0435\u0442, \u0443\u0441\u043F\u0435\u043B\u0438 \u0443\u0442\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u043E\u0442 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043C\u0435\u043D\u044F\u044E\u0449\u0438\u0445\u0441\u044F \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438\u00A0\u0437\u0430\u0434\u0443\u043C\u0430\u043B\u0438\u0441\u044C \u043E\u00A0\u043F\u0440\u0435\u0435\u043C\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438. \u041D\u0430\u0441\u043B\u0435\u0434\u043D\u0438\u043A\u0438 \u0443\u0441\u043F\u0435\u043B\u0438 \u043F\u043E\u0434\u0440\u0430\u0441\u0442\u0438, \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u044E \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0442\u044C \u0441\u0435\u043C\u0435\u0439\u043D\u043E\u0435 \u0434\u0435\u043B\u043E. \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u043D\u0430\u0441\u043B\u0435\u0434\u043D\u0438\u043A\u0430 \u0432\u00A0\u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u043F\u043E\u0434 \u0441\u0438\u043B\u0443 \u0434\u0430\u043B\u0435\u043A\u043E \u043D\u0435 \u0432\u0441\u0435\u043C \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C. \u041F\u043E \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0435, \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0440\u0435\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442 \u0432\u00A0\u0440\u0443\u043A\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F. \u0421\u0432\u044F\u0437\u0430\u043D\u043E \u044D\u0442\u043E \u0432\u00A0\u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C \u0441\u00A0\u0442\u0435\u043C, \u0447\u0442\u043E \u0438\u0445 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u044B \u043D\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u044E\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u0441\u00A0\u043F\u0440\u0435\u0435\u043C\u043D\u0438\u043A\u0430\u043C\u0438, \u043D\u0435 \u0433\u043E\u0442\u043E\u0432\u044F\u0442 \u0438\u0445 \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u043A \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0443 \u043D\u0430\u0441\u043B\u0435\u0434\u043D\u0438\u043A\u043E\u0432 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0443\u0436\u043D\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 \u0438 \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u044F. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0441\u043B\u0435\u0434\u043D\u0438\u043A\u0438 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 \u043D\u0435 \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u00A0\u0434\u0430\u0436\u0435 \u043D\u0435 \u0442\u0435 \u043E\u0442\u0440\u0430\u0441\u043B\u0438, \u0432\u00A0\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u044D\u0442\u043E\u0442 \u0431\u0438\u0437\u043D\u0435\u0441, \u0430 \u0442\u0430\u043A\u0436\u0435 \u2013 \u0431\u044B\u0432\u0430\u0435\u0442 \u043C\u0430\u0441\u0441\u0430 \u0441\u043B\u0443\u0447\u0430\u0435\u0432, \u043A\u043E\u0433\u0434\u0430 \u043D\u0430\u0441\u043B\u0435\u0434\u043D\u0438\u043A\u0438 \u043D\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043F\u0440\u0435\u0435\u043C\u043D\u0438\u043A\u0430\u043C\u0438. "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0412 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0435 \u0442\u044B\u0441\u044F\u0447\u0438 \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0432 \u0441\u0442\u0430\u0434\u0438\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F\u043C\u0438, \u0438, \u043A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043C\u043D\u043E\u0433\u0438\u0435 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u044B \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u044E\u0442 \u043E\u0434\u043D\u0438 \u0438 \u0442\u0435 \u0436\u0435 \u043E\u0448\u0438\u0431\u043A\u0438. \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u2013 \u044D\u043C\u043E\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u0438 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043C\u0435\u0436\u0434\u0443 \u0440\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0430\u043C\u0438 \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u0438\u0445 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0442\u043D\u043E\u0441\u0442\u0438, \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0432 \u043E\u0431\u0449\u0438\u0445 \u0446\u0435\u043B\u044F\u0445 \u0438 \u043C\u0435\u0447\u0442\u0430\u0445, \u043F\u043B\u0430\u043D\u0430\u0445 \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u0445, \u043D\u0435\u0445\u0432\u0430\u0442\u043A\u0430 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0438 \u043D\u0435\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0432\u044B\u0445\u043E\u0434\u0438\u0442\u044C \u0438\u0437 \u0437\u043E\u043D\u044B \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430. \u0412\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430\u043C \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0446\u0435\u043B\u0435\u0441\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u043E \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u0441\u0440\u043E\u043A\u0438 \u043F\u0440\u0435\u0435\u043C\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u0432\u043E\u0432\u0440\u0435\u043C\u044F \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u0438\u0437 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F - \u0432 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0432 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0432\u044B\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0443\u044E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0438 \u043F\u043B\u0430\u043D\u044B \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0435\u043C\u044C\u0438, \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u043E\u0432 \u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0430. "])), (_l()(), i0.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 SLR \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u043C\u0438 \u043D\u0430\u0432\u044B\u043A\u0430\u043C\u0438 \u0438 \u043E\u043F\u044B\u0442\u043E\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0435\u0448\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0438 \u043F\u0440\u0435\u0435\u043C\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438: \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E, \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0434\u043E\u0440\u043E\u0436\u043D\u0443\u044E \u043A\u0430\u0440\u0442\u0443, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0442\u0435\u043E\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u043D\u0430\u043D\u0438\u044F \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u0442\u044C \u043D\u0430\u0441\u043B\u0435\u0434\u043D\u0438\u043A\u0430 \u043F\u043E \u0432\u0441\u0435\u043C \u044D\u0442\u0430\u043F\u0430\u043C \u0434\u043E\u0440\u043E\u0436\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B, \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u0442\u044C \u0441 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u043E\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0441\u0442\u0430\u0436\u0438\u0440\u043E\u0432\u043A\u0438 \u0438 \u0432\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u0435\u043C\u043D\u0438\u043A\u0430 \u0432 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435, \u0441\u0433\u043B\u0430\u0436\u0438\u0432\u0430\u0442\u044C \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0449\u0438\u0435 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u044B \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432. \u041E\u043D\u0438 \u0445\u043B\u0430\u0434\u043D\u043E\u043A\u0440\u043E\u0432\u043D\u043E \u043A\u0443\u0440\u0438\u0440\u0443\u044E\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B, \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0438 \u0438 \u0443\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u0439, \u043C\u0435\u0448\u0430\u044E\u0449\u0438\u0445 \u043F\u0440\u043E\u0446\u0432\u0435\u0442\u0430\u043D\u0438\u044E \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u041E\u043D\u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0432\u0430\u0442\u044C \u044D\u0442\u0430\u043F\u044B \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F\u043C\u0438, \u0432\u044B\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0430\u044E\u0442 \u0432\u0440\u0435\u043C\u044F \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u043C\u044C\u0438 \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0430\u043A\u0442\u0438\u0432\u043E\u0432. \u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u043E\u0437\u0440\u0430\u0441\u0442 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 SLR - 35 \u043B\u0435\u0442, \u043E\u043D\u0438 \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F\u043C\u0438 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 50-60 \u043B\u0435\u0442 \u0438 \u0438\u0445 \u043F\u0440\u0435\u0435\u043C\u043D\u0438\u043A\u0430\u043C\u0438 20-25 \u043B\u0435\u0442, \u0438 \u043F\u043E\u043D\u0438\u043C\u0430\u044E\u0442 \u043E\u0431\u0430 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F. "])), (_l()(), i0.ɵeld(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u0432\u043E\u043F\u043B\u043E\u0449\u0430\u0435\u043C \u043C\u0435\u0447\u0442\u044B \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u043E \u043D\u0430\u0441\u043B\u0435\u0434\u0438\u0438 \u0432 \u0444\u0430\u043C\u0438\u043B\u044C\u043D\u044B\u0435 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u0441\u0442\u0430\u0442\u044C \u043D\u0430\u0441\u043B\u0435\u0434\u043D\u0438\u043A\u0430\u043C \u0443\u0441\u043F\u0435\u0448\u043D\u0435\u0435 \u0441\u0432\u043E\u0438\u0445 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439, \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u0435\u0435 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0435\u0435. \u0412\u0430\u0448\u0438 \u043D\u0430\u0441\u043B\u0435\u0434\u043D\u0438\u043A\u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0442 \u043C\u0435\u043D\u044F\u0442\u044C \u043C\u0438\u0440 \u043A \u043B\u0443\u0447\u0448\u0435\u043C\u0443, \u0440\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0412\u0430\u043C\u0438. "])), (_l()(), i0.ɵeld(17, 0, null, null, 1, "section-contacts-component", [], null, null, null, i1.View_SectionContactsComponent_0, i1.RenderType_SectionContactsComponent)), i0.ɵdid(18, 114688, null, 0, i2.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PagesType.Industry; var currVal_1 = "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"; var currVal_2 = _co.PagesLinksMap.get(_co.PagesType.About); _ck(_v, 18, 0, currVal_0, currVal_1, currVal_2); }, null); }
exports.View_AccompanyingIntergenerationalBusinessIndustryComponent_0 = View_AccompanyingIntergenerationalBusinessIndustryComponent_0;
function View_AccompanyingIntergenerationalBusinessIndustryComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "accompanying-intergenerational-business-industry-component", [], null, null, null, View_AccompanyingIntergenerationalBusinessIndustryComponent_0, RenderType_AccompanyingIntergenerationalBusinessIndustryComponent)), i0.ɵdid(1, 49152, null, 0, i3.AccompanyingIntergenerationalBusinessIndustryComponent, [], null, null)], null, null); }
exports.View_AccompanyingIntergenerationalBusinessIndustryComponent_Host_0 = View_AccompanyingIntergenerationalBusinessIndustryComponent_Host_0;
var AccompanyingIntergenerationalBusinessIndustryComponentNgFactory = i0.ɵccf("accompanying-intergenerational-business-industry-component", i3.AccompanyingIntergenerationalBusinessIndustryComponent, View_AccompanyingIntergenerationalBusinessIndustryComponent_Host_0, {}, {}, []);
exports.AccompanyingIntergenerationalBusinessIndustryComponentNgFactory = AccompanyingIntergenerationalBusinessIndustryComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/industry-page/components/6_accompanying-intergenerational-business/accompanying-intergenerational-business.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/6_accompanying-intergenerational-business/accompanying-intergenerational-business.component.ts ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var AccompanyingIntergenerationalBusinessIndustryComponent = /** @class */ (function () {
    function AccompanyingIntergenerationalBusinessIndustryComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return AccompanyingIntergenerationalBusinessIndustryComponent;
}());
exports.AccompanyingIntergenerationalBusinessIndustryComponent = AccompanyingIntergenerationalBusinessIndustryComponent;


/***/ }),

/***/ "./src/app/pages/industry-page/components/servcies-modal/services-modal.component.ngfactory.js":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/servcies-modal/services-modal.component.ngfactory.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ngx-bootstrap/modal */ "ngx-bootstrap/modal");
var i2 = __webpack_require__(/*! ngx-bootstrap/component-loader */ "ngx-bootstrap/component-loader");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ./services-modal.component */ "./src/app/pages/industry-page/components/servcies-modal/services-modal.component.ts");
var styles_ServicesModalComponent = [];
var RenderType_ServicesModalComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ServicesModalComponent, data: {} });
exports.RenderType_ServicesModalComponent = RenderType_ServicesModalComponent;
function View_ServicesModalComponent_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { serviceModal: 0 }), (_l()(), i0.ɵeld(1, 16777216, null, null, 143, "div", [["bsModal", ""], ["class", "modal fade"], ["role", "dialog"], ["tabindex", "-1"]], null, [[null, "click"], [null, "keydown.esc"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown.esc" === en)) {
        var pd_1 = (i0.ɵnov(_v, 2).onEsc($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 212992, [[1, 4], ["serviceModal", 4]], 0, i1.ModalDirective, [i0.ElementRef, i0.ViewContainerRef, i0.Renderer2, i2.ComponentLoaderFactory], null, null), (_l()(), i0.ɵeld(3, 0, null, null, 141, "div", [["class", "modal-dialog modal-lg modal-serice"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 140, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 4, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "h4", [["class", "modal-title pull-left"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u0430\u043A\u0435\u0442\u044B \u0423\u0441\u043B\u0443\u0433 "])), (_l()(), i0.ɵeld(8, 0, null, null, 1, "button", [["class", "modal-close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2).hide() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 0, "i", [["class", "icon-icon-close"]], null, null, null, null, null)), (_l()(), i0.ɵeld(10, 0, null, null, 134, "div", [["class", "modal-body custom-scrollbar"]], null, null, null, null, null)), (_l()(), i0.ɵeld(11, 0, null, null, 133, "div", [["class", "services-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(12, 0, null, null, 40, "div", [["class", "services-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(13, 0, null, null, 4, "div", [["class", "services-item_header"]], null, null, null, null, null)), (_l()(), i0.ɵeld(14, 0, null, null, 1, "h3", [["class", "d-inline text-primary mr-3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00AB\u0411\u0430\u0437\u043E\u0432\u044B\u0439\u00BB"])), (_l()(), i0.ɵeld(16, 0, null, null, 1, "h4", [["class", "d-inline"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u043E\u0442 600$ \u0432 \u043C\u0435\u0441\u044F\u0446"])), (_l()(), i0.ɵeld(18, 0, null, null, 34, "div", [["class", "services-item_body"]], null, null, null, null, null)), (_l()(), i0.ɵeld(19, 0, null, null, 16, "div", [["class", "services-item_col -left"]], null, null, null, null, null)), (_l()(), i0.ɵeld(20, 0, null, null, 1, "div", [["class", "services-item_subtitle"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u042E\u0440\u0438\u0441\u0442\u044B \u0438 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u044B:"])), (_l()(), i0.ɵeld(22, 0, null, null, 7, "div", [["class", "services-item_descr font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵeld(23, 0, null, null, 4, "div", [["class", "top"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0434\u043E "])), (_l()(), i0.ɵeld(25, 0, null, null, 1, "span", [["class", "h2"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["20"])), (_l()(), i0.ɵted(-1, null, [" \u0447\u0430\u0441\u043E\u0432 \u0440\u0430\u0431\u043E\u0442\u044B; "])), (_l()(), i0.ɵeld(28, 0, null, null, 1, "div", [["class", "bot"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0434\u043E 5 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 15 \u0448\u0430\u0431\u043B\u043E\u043D\u043D\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432* "])), (_l()(), i0.ɵeld(30, 0, null, null, 5, "div", [["class", "d-none d-lg-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(31, 0, null, null, 4, "a", [["class", "btn btn-primary btn-ms btn-chevron mt-5"], ["routerLink", "/contacts"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 32).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(32, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, [" \u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C "])), (_l()(), i0.ɵeld(34, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(35, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(36, 0, null, null, 16, "div", [["class", "services-item_col -right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(37, 0, null, null, 1, "div", [["class", "services-item_subtitle"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E:"])), (_l()(), i0.ɵeld(39, 0, null, null, 7, "div", [["class", "descr-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(40, 0, null, null, 6, "ul", [["class", "square-list mt-0 mb-0 list-mb-sm"]], null, null, null, null, null)), (_l()(), i0.ɵeld(41, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u043E\u0431\u0449\u0435\u043C\u0443 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 \u2013 1 \u0447\u0430\u0441"])), (_l()(), i0.ɵeld(43, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0443 \u2013 1 \u0447\u0430\u0441"])), (_l()(), i0.ɵeld(45, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 HR- 1 \u0447\u0430\u0441"])), (_l()(), i0.ɵeld(47, 0, null, null, 5, "div", [["class", "d-block d-lg-none"]], null, null, null, null, null)), (_l()(), i0.ɵeld(48, 0, null, null, 4, "a", [["class", "btn btn-primary btn-ms btn-chevron mt-5"], ["routerLink", "/contacts"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 49).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(49, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, [" \u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C "])), (_l()(), i0.ɵeld(51, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(52, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(53, 0, null, null, 42, "div", [["class", "services-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(54, 0, null, null, 4, "div", [["class", "services-item_header"]], null, null, null, null, null)), (_l()(), i0.ɵeld(55, 0, null, null, 1, "h3", [["class", "d-inline text-primary mr-3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00AB\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439\u00BB"])), (_l()(), i0.ɵeld(57, 0, null, null, 1, "h4", [["class", "d-inline"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u043E\u0442 900$ \u0432 \u043C\u0435\u0441\u044F\u0446"])), (_l()(), i0.ɵeld(59, 0, null, null, 36, "div", [["class", "services-item_body"]], null, null, null, null, null)), (_l()(), i0.ɵeld(60, 0, null, null, 16, "div", [["class", "services-item_col -left"]], null, null, null, null, null)), (_l()(), i0.ɵeld(61, 0, null, null, 1, "div", [["class", "services-item_subtitle"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u042E\u0440\u0438\u0441\u0442\u044B \u0438 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u044B:"])), (_l()(), i0.ɵeld(63, 0, null, null, 7, "div", [["class", "services-item_descr font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵeld(64, 0, null, null, 4, "div", [["class", "top"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0434\u043E "])), (_l()(), i0.ɵeld(66, 0, null, null, 1, "span", [["class", "h2"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["40"])), (_l()(), i0.ɵted(-1, null, [" \u0447\u0430\u0441\u043E\u0432 \u0440\u0430\u0431\u043E\u0442\u044B; "])), (_l()(), i0.ɵeld(69, 0, null, null, 1, "div", [["class", "bot"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0434\u043E 10 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 30 \u0448\u0430\u0431\u043B\u043E\u043D\u043D\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432* "])), (_l()(), i0.ɵeld(71, 0, null, null, 5, "div", [["class", "d-none d-lg-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(72, 0, null, null, 4, "a", [["class", "btn btn-primary btn-ms btn-chevron mt-5"], ["routerLink", "/contacts"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 73).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(73, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, [" \u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C "])), (_l()(), i0.ɵeld(75, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(76, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(77, 0, null, null, 18, "div", [["class", "services-item_col -right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(78, 0, null, null, 1, "div", [["class", "services-item_subtitle"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E:"])), (_l()(), i0.ɵeld(80, 0, null, null, 9, "div", [["class", "descr-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(81, 0, null, null, 8, "ul", [["class", "square-list mt-0 mb-0 list-mb-sm"]], null, null, null, null, null)), (_l()(), i0.ɵeld(82, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u043E\u0431\u0449\u0435\u043C\u0443 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u2013 2 \u0447\u0430\u0441\u0430 "])), (_l()(), i0.ɵeld(84, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E PR \u0438 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0443 \u2013 2 \u0447\u0430\u0441\u0430"])), (_l()(), i0.ɵeld(86, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 HR \u2013 2 \u0447\u0430\u0441\u0430"])), (_l()(), i0.ɵeld(88, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0432 \u0441\u0444\u0435\u0440\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u2013 1 \u0447\u0430\u0441"])), (_l()(), i0.ɵeld(90, 0, null, null, 5, "div", [["class", "d-block d-lg-none"]], null, null, null, null, null)), (_l()(), i0.ɵeld(91, 0, null, null, 4, "a", [["class", "btn btn-primary btn-ms btn-chevron mt-5"], ["routerLink", "/contacts"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 92).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(92, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, [" \u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C "])), (_l()(), i0.ɵeld(94, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(95, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(96, 0, null, null, 48, "div", [["class", "services-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(97, 0, null, null, 4, "div", [["class", "services-item_header"]], null, null, null, null, null)), (_l()(), i0.ɵeld(98, 0, null, null, 1, "h3", [["class", "d-inline text-primary mr-3"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00AB\u041E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439\u00BB"])), (_l()(), i0.ɵeld(100, 0, null, null, 1, "h4", [["class", "d-inline"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u043E\u0442 1900$ \u0432 \u043C\u0435\u0441\u044F\u0446"])), (_l()(), i0.ɵeld(102, 0, null, null, 42, "div", [["class", "services-item_body"]], null, null, null, null, null)), (_l()(), i0.ɵeld(103, 0, null, null, 16, "div", [["class", "services-item_col -left"]], null, null, null, null, null)), (_l()(), i0.ɵeld(104, 0, null, null, 1, "div", [["class", "services-item_subtitle"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u042E\u0440\u0438\u0441\u0442\u044B \u0438 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u044B:"])), (_l()(), i0.ɵeld(106, 0, null, null, 7, "div", [["class", "services-item_descr font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵeld(107, 0, null, null, 4, "div", [["class", "top"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0434\u043E "])), (_l()(), i0.ɵeld(109, 0, null, null, 1, "span", [["class", "h2"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["70"])), (_l()(), i0.ɵted(-1, null, [" \u0447\u0430\u0441\u043E\u0432 \u0440\u0430\u0431\u043E\u0442\u044B; "])), (_l()(), i0.ɵeld(112, 0, null, null, 1, "div", [["class", "bot"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0434\u043E 20 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 60 \u0448\u0430\u0431\u043B\u043E\u043D\u043D\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432* "])), (_l()(), i0.ɵeld(114, 0, null, null, 5, "div", [["class", "d-none d-lg-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(115, 0, null, null, 4, "a", [["class", "btn btn-primary btn-ms btn-chevron mt-5"], ["routerLink", "/contacts"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 116).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(116, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, [" \u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C "])), (_l()(), i0.ɵeld(118, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(119, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(120, 0, null, null, 24, "div", [["class", "services-item_col -right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(121, 0, null, null, 1, "div", [["class", "services-item_subtitle"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E:"])), (_l()(), i0.ɵeld(123, 0, null, null, 15, "div", [["class", "descr-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(124, 0, null, null, 14, "ul", [["class", "square-list mt-0 mb-0 list-mb-sm"]], null, null, null, null, null)), (_l()(), i0.ɵeld(125, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 \u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044E \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u2013\u043C\u043E\u0434\u0435\u043B\u0438 - 3 \u0447\u0430\u0441\u0430 "])), (_l()(), i0.ɵeld(127, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E PR \u0438 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0443 \u2013 3 \u0447\u0430\u0441\u0430"])), (_l()(), i0.ɵeld(129, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0432 \u0441\u0444\u0435\u0440\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430 \u0437\u0430\u0449\u0438\u0442\u043D\u044B\u0445 \u043C\u0435\u0440 \u2013 2 \u0447\u0430\u0441\u0430 "])), (_l()(), i0.ɵeld(131, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 HR \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u043D\u0430\u0439\u043C\u0443 \u2013 3 \u0447\u0430\u0441\u0430 "])), (_l()(), i0.ɵeld(133, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u0412\u042D\u0414 - 1 \u0447\u0430\u0441"])), (_l()(), i0.ɵeld(135, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u0435\u0434\u0438\u0430\u0446\u0438\u044F \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432 \u0438 \u0441\u043F\u043E\u0440\u043E\u0432 \u0432 \u043E\u0444\u0438\u0441\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u2013 1 \u0447\u0430\u0441 "])), (_l()(), i0.ɵeld(137, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043C\u043E\u0437\u0433\u043E\u0432\u044B\u0445 \u0448\u0442\u0443\u0440\u043C\u0430\u0445 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447 \u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0432 \u043E\u0444\u0438\u0441\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u2013 1 \u0447\u0430\u0441 "])), (_l()(), i0.ɵeld(139, 0, null, null, 5, "div", [["class", "d-block d-lg-none"]], null, null, null, null, null)), (_l()(), i0.ɵeld(140, 0, null, null, 4, "a", [["class", "btn btn-primary btn-ms btn-chevron mt-5"], ["routerLink", "/contacts"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 141).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(141, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, [" \u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C "])), (_l()(), i0.ɵeld(143, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(144, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 2, 0); var currVal_2 = "/contacts"; _ck(_v, 32, 0, currVal_2); var currVal_5 = "/contacts"; _ck(_v, 49, 0, currVal_5); var currVal_8 = "/contacts"; _ck(_v, 73, 0, currVal_8); var currVal_11 = "/contacts"; _ck(_v, 92, 0, currVal_11); var currVal_14 = "/contacts"; _ck(_v, 116, 0, currVal_14); var currVal_17 = "/contacts"; _ck(_v, 141, 0, currVal_17); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 32).target; var currVal_1 = i0.ɵnov(_v, 32).href; _ck(_v, 31, 0, currVal_0, currVal_1); var currVal_3 = i0.ɵnov(_v, 49).target; var currVal_4 = i0.ɵnov(_v, 49).href; _ck(_v, 48, 0, currVal_3, currVal_4); var currVal_6 = i0.ɵnov(_v, 73).target; var currVal_7 = i0.ɵnov(_v, 73).href; _ck(_v, 72, 0, currVal_6, currVal_7); var currVal_9 = i0.ɵnov(_v, 92).target; var currVal_10 = i0.ɵnov(_v, 92).href; _ck(_v, 91, 0, currVal_9, currVal_10); var currVal_12 = i0.ɵnov(_v, 116).target; var currVal_13 = i0.ɵnov(_v, 116).href; _ck(_v, 115, 0, currVal_12, currVal_13); var currVal_15 = i0.ɵnov(_v, 141).target; var currVal_16 = i0.ɵnov(_v, 141).href; _ck(_v, 140, 0, currVal_15, currVal_16); }); }
exports.View_ServicesModalComponent_0 = View_ServicesModalComponent_0;
function View_ServicesModalComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "services-modal-component", [], null, null, null, View_ServicesModalComponent_0, RenderType_ServicesModalComponent)), i0.ɵdid(1, 49152, null, 0, i5.ServicesModalComponent, [], null, null)], null, null); }
exports.View_ServicesModalComponent_Host_0 = View_ServicesModalComponent_Host_0;
var ServicesModalComponentNgFactory = i0.ɵccf("services-modal-component", i5.ServicesModalComponent, View_ServicesModalComponent_Host_0, {}, {}, []);
exports.ServicesModalComponentNgFactory = ServicesModalComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/industry-page/components/servcies-modal/services-modal.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/industry-page/components/servcies-modal/services-modal.component.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ngx_bootstrap_1 = __webpack_require__(/*! ngx-bootstrap */ "ngx-bootstrap");
var ServicesModalComponent = /** @class */ (function () {
    function ServicesModalComponent() {
    }
    ServicesModalComponent.prototype.openModal = function () {
        this.serviceModal.show();
    };
    ServicesModalComponent.prototype.show = function () { };
    return ServicesModalComponent;
}());
exports.ServicesModalComponent = ServicesModalComponent;


/***/ }),

/***/ "./src/app/pages/industry-page/industry-page.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/pages/industry-page/industry-page.component.ngfactory.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i4 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i5 = __webpack_require__(/*! ./components/servcies-modal/services-modal.component.ngfactory */ "./src/app/pages/industry-page/components/servcies-modal/services-modal.component.ngfactory.js");
var i6 = __webpack_require__(/*! ./components/servcies-modal/services-modal.component */ "./src/app/pages/industry-page/components/servcies-modal/services-modal.component.ts");
var i7 = __webpack_require__(/*! ./industry-page.component */ "./src/app/pages/industry-page/industry-page.component.ts");
var styles_IndustryPageComponent = [];
var RenderType_IndustryPageComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_IndustryPageComponent, data: {} });
exports.RenderType_IndustryPageComponent = RenderType_IndustryPageComponent;
function View_IndustryPageComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 2, "div", [["class", "mt-4"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 1, "button", [["class", "btn btn-border-primary btn-sm"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v.parent.parent, 18).openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u0430\u043A\u0435\u0442\u044B \u0443\u0441\u043B\u0443\u0433 "]))], null, null); }
function View_IndustryPageComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 19, "div", [["class", "short-item"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "div", [["class", "col-md-7"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 1, "h3", [["class", "short-item_title"]], null, null, null, null, null)), (_l()(), i0.ɵted(4, null, ["", ""])), (_l()(), i0.ɵeld(5, 0, null, null, 14, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 4, "div", [["class", "col-lg-8"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 3, "div", [["class", "custom-col_inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 2, "div", [["class", "short-item_descr descr-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(10, null, ["", ""])), (_l()(), i0.ɵeld(11, 0, null, null, 8, "div", [["class", "col-lg-4"]], null, null, null, null, null)), (_l()(), i0.ɵeld(12, 0, null, null, 7, "div", [["class", "short-item_footer"]], null, null, null, null, null)), (_l()(), i0.ɵeld(13, 0, null, null, 4, "a", [["class", "btn btn-primary btn-ms btn-chevron"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(14, 671744, null, 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 "])), (_l()(), i0.ɵeld(16, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(17, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_IndustryPageComponent_2)), i0.ɵdid(19, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_4 = i0.ɵinlineInterpolate(1, "../", _v.context.$implicit.link, ""); _ck(_v, 14, 0, currVal_4); var currVal_5 = _v.context.$implicit.modal; _ck(_v, 19, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.context.$implicit.description; _ck(_v, 10, 0, currVal_1); var currVal_2 = i0.ɵnov(_v, 14).target; var currVal_3 = i0.ɵnov(_v, 14).href; _ck(_v, 13, 0, currVal_2, currVal_3); }); }
function View_IndustryPageComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 16, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "section", [["class", "section section-top -industry"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 12, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 11, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 2, "div", [["class", "section-heading"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 1, "h1", [["class", "h2"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"])), (_l()(), i0.ɵeld(7, 0, null, null, 4, "div", [["class", "descr-block mb-lg"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 1, "p", [["class", "font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F SLR \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0438 \u0438\u0433\u0440\u0430\u0435\u0442 \u0432\u0435\u0434\u0443\u0449\u0443\u044E \u0440\u043E\u043B\u044C \u0432 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0441\u0435\u043A\u0442\u043E\u0440\u0430\u0445 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438, \u0441\u0440\u0435\u0434\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445: \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435, IT, \u043C\u0435\u0434\u0438\u0430, Fashion, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u043E, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E, \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0430, \u043F\u0440\u043E\u0434\u0430\u0436\u0438, \u0443\u0441\u043B\u0443\u0433\u0438, \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0435\u043A\u0442\u043E\u0440\u0430 \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F. "])), (_l()(), i0.ɵeld(10, 0, null, null, 1, "p", [["class", "font-medium"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041C\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u043C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B, \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u0438 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043D\u0438\u0445: "])), (_l()(), i0.ɵeld(12, 0, null, null, 2, "div", [["class", "short-list"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_IndustryPageComponent_1)), i0.ɵdid(14, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(15, 0, null, null, 1, "section-contacts-component", [], null, null, null, i3.View_SectionContactsComponent_0, i3.RenderType_SectionContactsComponent)), i0.ɵdid(16, 114688, null, 0, i4.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null), (_l()(), i0.ɵeld(17, 0, null, null, 1, "services-modal-component", [], null, null, null, i5.View_ServicesModalComponent_0, i5.RenderType_ServicesModalComponent)), i0.ɵdid(18, 49152, [["servicesModal", 4]], 0, i6.ServicesModalComponent, [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.IndustryShortsItems; _ck(_v, 14, 0, currVal_0); var currVal_1 = _co.PagesType.Industry; var currVal_2 = "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"; var currVal_3 = _co.PagesLinksMap.get(_co.PagesType.About); _ck(_v, 16, 0, currVal_1, currVal_2, currVal_3); }, null); }
exports.View_IndustryPageComponent_0 = View_IndustryPageComponent_0;
function View_IndustryPageComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "industry-page-component", [], null, null, null, View_IndustryPageComponent_0, RenderType_IndustryPageComponent)), i0.ɵdid(1, 49152, null, 0, i7.IndustryPageComponent, [], null, null)], null, null); }
exports.View_IndustryPageComponent_Host_0 = View_IndustryPageComponent_Host_0;
var IndustryPageComponentNgFactory = i0.ɵccf("industry-page-component", i7.IndustryPageComponent, View_IndustryPageComponent_Host_0, {}, {}, []);
exports.IndustryPageComponentNgFactory = IndustryPageComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/industry-page/industry-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/industry-page/industry-page.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var industry_short_1 = __webpack_require__(/*! @root-shared/data/industry-short */ "./src/app/root-shared/data/industry-short.ts");
var IndustryPageComponent = /** @class */ (function () {
    function IndustryPageComponent() {
        this.IndustryShortsItems = industry_short_1.IndustryShortsItems;
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return IndustryPageComponent;
}());
exports.IndustryPageComponent = IndustryPageComponent;


/***/ }),

/***/ "./src/app/pages/infocenter-page/infocenter-page.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/pages/infocenter-page/infocenter-page.component.ngfactory.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory */ "./node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory.js");
var i2 = __webpack_require__(/*! ngx-bootstrap/tabs */ "ngx-bootstrap/tabs");
var i3 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component.ngfactory */ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js");
var i4 = __webpack_require__(/*! ../shared/section-contacts/section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var i5 = __webpack_require__(/*! ./infocenter-page.component */ "./src/app/pages/infocenter-page/infocenter-page.component.ts");
var styles_InfoCenterPageComponent = [];
var RenderType_InfoCenterPageComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_InfoCenterPageComponent, data: {} });
exports.RenderType_InfoCenterPageComponent = RenderType_InfoCenterPageComponent;
function View_InfoCenterPageComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "border-hover -left"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u042F\u043D\u0432\u0430\u0440\u044C 2019 "]))], null, null); }
function View_InfoCenterPageComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "border-hover -left"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0414\u0435\u043A\u0430\u0431\u0440\u044C 2018 "]))], null, null); }
function View_InfoCenterPageComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 91, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "section", [["class", "section section-top -infocenter"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 87, "section", [["class", "section section-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 86, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 2, "div", [["class", "section-heading"], ["data-aos", "fade-up"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0418\u043D\u0444\u043E\u0446\u0435\u043D\u0442\u0440"])), (_l()(), i0.ɵeld(7, 0, null, null, 82, "div", [["class", "tabs-block tabs-default"], ["data-aos", "fade-up"], ["data-aos-delay", "100"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 81, "tabset", [["class", "nav-lg"]], [[2, "tab-container", null]], null, null, i1.View_TabsetComponent_0, i1.RenderType_TabsetComponent)), i0.ɵdid(9, 180224, null, 0, i2.TabsetComponent, [i2.TabsetConfig, i0.Renderer2], null, null), (_l()(), i0.ɵeld(10, 0, null, 0, 46, "tab", [], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null]], null, null, null, null)), i0.ɵdid(11, 212992, null, 0, i2.TabDirective, [i2.TabsetComponent, i0.ElementRef, i0.Renderer2], null, null), (_l()(), i0.ɵand(0, null, null, 1, null, View_InfoCenterPageComponent_1)), i0.ɵdid(13, 16384, null, 0, i2.TabHeadingDirective, [i0.TemplateRef, i2.TabDirective], null, null), (_l()(), i0.ɵeld(14, 0, null, null, 42, "div", [["class", "post-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(15, 0, null, null, 13, "div", [["class", "post-item"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(16, 0, null, null, 1, "div", [["class", "post-item_date"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" 24 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2018 "])), (_l()(), i0.ɵeld(18, 0, null, null, 1, "h4", [["class", "post-item_title"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u0440\u0430\u0432\u043E vs IT: \u0441\u043C\u0435\u0440\u0442\u044C \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430? "])), (_l()(), i0.ɵeld(20, 0, null, null, 1, "div", [["class", "post-item_img"]], null, null, null, null, null)), (_l()(), i0.ɵeld(21, 0, null, null, 0, "div", [["class", "resp-img"], ["style", "background-image: url(./assets/img/post/post-img-1.png)"]], null, null, null, null, null)), (_l()(), i0.ɵeld(22, 0, null, null, 2, "div", [["class", "post-item_descr"]], null, null, null, null, null)), (_l()(), i0.ɵeld(23, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" 25 \u0430\u043F\u0440\u0435\u043B\u044F 2017 \u0433\u043E\u0434\u0430 \u0441\u043E\u0441\u0442\u043E\u044F\u043B\u0441\u044F \u0444\u043E\u0440\u0443\u043C \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u043E\u0432 \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430 \u043F\u0440\u0430\u0432\u0430 \u00AB\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0432 \u044E\u0440\u0438\u0441\u043F\u0440\u0443\u0434\u0435\u043D\u0446\u0438\u0438\u00BB. \u041F\u0430\u0440\u0442\u043D\u0451\u0440\u044B \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043F\u0440\u0430\u0432\u043E\u0432\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0442\u0430\u0440\u0442\u0430\u043F\u043E\u0432 \u0438 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u044B \u0432 \u044D\u0442\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043E\u0431\u0441\u0443\u0434\u0438\u043B\u0438 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u044B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u044E\u0440\u0438\u0441\u043F\u0440\u0443\u0434\u0435\u043D\u0446\u0438\u0438 \u0438 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u043C\u0430\u0448\u0438\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u044E\u0440\u0438\u0441\u0442\u043E\u0432-\u043B\u044E\u0434\u0435\u0439. \u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0441\u043A\u0438\u0439 \u043F\u0440\u0435\u0441\u0441-\u0446\u0435\u043D\u0442\u0440 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B \u043E\u0431\u0437\u043E\u0440 \u044D\u0442\u043E\u0433\u043E \u0440\u0443\u0431\u0435\u0436\u043D\u043E\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F. "])), (_l()(), i0.ɵeld(25, 0, null, null, 3, "button", [["class", "btn btn-secondary btn-ms btn-chevron"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 "])), (_l()(), i0.ɵeld(27, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(28, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(29, 0, null, null, 13, "div", [["class", "post-item"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(30, 0, null, null, 1, "div", [["class", "post-item_date"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" 9 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2018 "])), (_l()(), i0.ɵeld(32, 0, null, null, 1, "h4", [["class", "post-item_title"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u0438\u0431\u0435\u0440-\u043F\u0440\u0430\u0432\u043E. \u041A\u0430\u043A\u0438\u0435 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u044B \u0443 \u044E\u0440\u0438\u0441\u0442\u043E\u0432 IT-\u043E\u0442\u0440\u0430\u0441\u043B\u0438 "])), (_l()(), i0.ɵeld(34, 0, null, null, 1, "div", [["class", "post-item_img"]], null, null, null, null, null)), (_l()(), i0.ɵeld(35, 0, null, null, 0, "div", [["class", "resp-img"], ["style", "background-image: url(./assets/img/post/post-img-2.png)"]], null, null, null, null, null)), (_l()(), i0.ɵeld(36, 0, null, null, 2, "div", [["class", "post-item_descr"]], null, null, null, null, null)), (_l()(), i0.ɵeld(37, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0412 \u043D\u0430\u0448\u0438 \u0434\u043D\u0438 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u044E\u0440\u0438\u0441\u0442\u044B, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0435\u0441\u044F \u0432 \u0441\u043F\u043E\u0440\u0430\u0445 \u0432 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u043C \u0441\u0435\u043A\u0442\u043E\u0440\u0435, \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439. \u0421\u043F\u0440\u043E\u0441 \u043D\u0430 \u044E\u0440\u0438\u0441\u0442\u043E\u0432 \u0432 IT-\u043E\u0442\u0440\u0430\u0441\u043B\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0433\u043E\u0434\u044B \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E \u0440\u0430\u0441\u0442\u0435\u0442. \u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430 \u044E\u0440\u0438\u0441\u0442\u0430 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 IT-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0441\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043A \u0437\u0430\u0449\u0438\u0442\u0435 \u043F\u0440\u0430\u0432 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0433\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F, \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438 \u043E\u0431\u043C\u0435\u043D\u0430 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445... "])), (_l()(), i0.ɵeld(39, 0, null, null, 3, "button", [["class", "btn btn-secondary btn-ms btn-chevron"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 "])), (_l()(), i0.ɵeld(41, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(42, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(43, 0, null, null, 13, "div", [["class", "post-item"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(44, 0, null, null, 1, "div", [["class", "post-item_date"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" 2 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2018 "])), (_l()(), i0.ɵeld(46, 0, null, null, 1, "h4", [["class", "post-item_title"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435: \u0447\u0438\u0441\u043B\u043E \u043D\u043E\u0432\u044B\u0445 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432 \u0440\u0430\u0441\u0442\u0435\u0442, \u0430 \u0438\u0445 \u0433\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C \u043A \u043D\u043E\u0432\u043E\u0439 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438 \u0441\u043D\u0438\u0436\u0430\u0435\u0442\u0441\u044F "])), (_l()(), i0.ɵeld(48, 0, null, null, 1, "div", [["class", "post-item_img"]], null, null, null, null, null)), (_l()(), i0.ɵeld(49, 0, null, null, 0, "div", [["class", "resp-img"], ["style", "background-image: url(./assets/img/post/post-img-1.png)"]], null, null, null, null, null)), (_l()(), i0.ɵeld(50, 0, null, null, 2, "div", [["class", "post-item_descr"]], null, null, null, null, null)), (_l()(), i0.ɵeld(51, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0412\u0441\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E\u0442 \u0441\u0432\u043E\u0438\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043A\u0430\u0440\u044C\u0435\u0440\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0438 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430. \u041D\u043E \u0442\u0435\u043C, \u043A\u043E\u043C\u0443 \u043F\u043E\u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u0438\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043F\u043E \u0441\u043B\u0443\u0436\u0431\u0435, \u043D\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u044F\u0441\u043D\u043E, \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435: \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u043A \u0441\u0432\u043E\u0435\u0439 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438 \u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u043A\u043E\u0433\u0434\u0430-\u043B\u0438\u0431\u043E. \u0425\u0438\u043B\u0438\u0430\u043D \u0425\u0430\u0440\u0434\u0438, \u0441\u0442\u0430\u0432\u0448\u0430\u044F \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u043C \u043B\u0438\u0442\u0438\u0433\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 Hogan Lovells \u0432 2017 \u0433\u043E\u0434\u0443, \u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0441 \u0436\u0435\u043D\u0438\u0442\u044C\u0431\u043E\u0439: \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0431\u0440\u0430\u043A\u0435 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C, \u043D\u043E... "])), (_l()(), i0.ɵeld(53, 0, null, null, 3, "button", [["class", "btn btn-secondary btn-ms btn-chevron"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 "])), (_l()(), i0.ɵeld(55, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(56, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(57, 0, null, 0, 32, "tab", [], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null]], null, null, null, null)), i0.ɵdid(58, 212992, null, 0, i2.TabDirective, [i2.TabsetComponent, i0.ElementRef, i0.Renderer2], null, null), (_l()(), i0.ɵand(0, null, null, 1, null, View_InfoCenterPageComponent_2)), i0.ɵdid(60, 16384, null, 0, i2.TabHeadingDirective, [i0.TemplateRef, i2.TabDirective], null, null), (_l()(), i0.ɵeld(61, 0, null, null, 28, "div", [["class", "post-block"]], null, null, null, null, null)), (_l()(), i0.ɵeld(62, 0, null, null, 13, "div", [["class", "post-item"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(63, 0, null, null, 1, "div", [["class", "post-item_date"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" 9 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2018 "])), (_l()(), i0.ɵeld(65, 0, null, null, 1, "h4", [["class", "post-item_title"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041A\u0438\u0431\u0435\u0440-\u043F\u0440\u0430\u0432\u043E. \u041A\u0430\u043A\u0438\u0435 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u044B \u0443 \u044E\u0440\u0438\u0441\u0442\u043E\u0432 IT-\u043E\u0442\u0440\u0430\u0441\u043B\u0438 "])), (_l()(), i0.ɵeld(67, 0, null, null, 1, "div", [["class", "post-item_img"]], null, null, null, null, null)), (_l()(), i0.ɵeld(68, 0, null, null, 0, "div", [["class", "resp-img"], ["style", "background-image: url(./assets/img/post/post-img-2.png)"]], null, null, null, null, null)), (_l()(), i0.ɵeld(69, 0, null, null, 2, "div", [["class", "post-item_descr"]], null, null, null, null, null)), (_l()(), i0.ɵeld(70, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u0412 \u043D\u0430\u0448\u0438 \u0434\u043D\u0438 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u044E\u0440\u0438\u0441\u0442\u044B, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0435\u0441\u044F \u0432 \u0441\u043F\u043E\u0440\u0430\u0445 \u0432 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u043C \u0441\u0435\u043A\u0442\u043E\u0440\u0435, \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439. \u0421\u043F\u0440\u043E\u0441 \u043D\u0430 \u044E\u0440\u0438\u0441\u0442\u043E\u0432 \u0432 IT-\u043E\u0442\u0440\u0430\u0441\u043B\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0433\u043E\u0434\u044B \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E \u0440\u0430\u0441\u0442\u0435\u0442. \u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430 \u044E\u0440\u0438\u0441\u0442\u0430 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 IT-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0441\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043A \u0437\u0430\u0449\u0438\u0442\u0435 \u043F\u0440\u0430\u0432 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0433\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F, \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438 \u043E\u0431\u043C\u0435\u043D\u0430 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445... "])), (_l()(), i0.ɵeld(72, 0, null, null, 3, "button", [["class", "btn btn-secondary btn-ms btn-chevron"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 "])), (_l()(), i0.ɵeld(74, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(75, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(76, 0, null, null, 13, "div", [["class", "post-item"], ["data-aos", "fade-up"], ["data-aos-offset", "200"], ["data-aos-once", "true"]], null, null, null, null, null)), (_l()(), i0.ɵeld(77, 0, null, null, 1, "div", [["class", "post-item_date"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" 24 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2018 "])), (_l()(), i0.ɵeld(79, 0, null, null, 1, "h4", [["class", "post-item_title"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u0440\u0430\u0432\u043E vs IT: \u0441\u043C\u0435\u0440\u0442\u044C \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430? "])), (_l()(), i0.ɵeld(81, 0, null, null, 1, "div", [["class", "post-item_img"]], null, null, null, null, null)), (_l()(), i0.ɵeld(82, 0, null, null, 0, "div", [["class", "resp-img"], ["style", "background-image: url(./assets/img/post/post-img-1.png)"]], null, null, null, null, null)), (_l()(), i0.ɵeld(83, 0, null, null, 2, "div", [["class", "post-item_descr"]], null, null, null, null, null)), (_l()(), i0.ɵeld(84, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" 25 \u0430\u043F\u0440\u0435\u043B\u044F 2017 \u0433\u043E\u0434\u0430 \u0441\u043E\u0441\u0442\u043E\u044F\u043B\u0441\u044F \u0444\u043E\u0440\u0443\u043C \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u043E\u0432 \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430 \u043F\u0440\u0430\u0432\u0430 \u00AB\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0432 \u044E\u0440\u0438\u0441\u043F\u0440\u0443\u0434\u0435\u043D\u0446\u0438\u0438\u00BB. \u041F\u0430\u0440\u0442\u043D\u0451\u0440\u044B \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043F\u0440\u0430\u0432\u043E\u0432\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0442\u0430\u0440\u0442\u0430\u043F\u043E\u0432 \u0438 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u044B \u0432 \u044D\u0442\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043E\u0431\u0441\u0443\u0434\u0438\u043B\u0438 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u044B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u044E\u0440\u0438\u0441\u043F\u0440\u0443\u0434\u0435\u043D\u0446\u0438\u0438 \u0438 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u043C\u0430\u0448\u0438\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u044E\u0440\u0438\u0441\u0442\u043E\u0432-\u043B\u044E\u0434\u0435\u0439. \u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0441\u043A\u0438\u0439 \u043F\u0440\u0435\u0441\u0441-\u0446\u0435\u043D\u0442\u0440 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B \u043E\u0431\u0437\u043E\u0440 \u044D\u0442\u043E\u0433\u043E \u0440\u0443\u0431\u0435\u0436\u043D\u043E\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F. "])), (_l()(), i0.ɵeld(86, 0, null, null, 3, "button", [["class", "btn btn-secondary btn-ms btn-chevron"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 "])), (_l()(), i0.ɵeld(88, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(89, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(90, 0, null, null, 1, "section-contacts-component", [], null, null, null, i3.View_SectionContactsComponent_0, i3.RenderType_SectionContactsComponent)), i0.ɵdid(91, 114688, null, 0, i4.SectionContactsComponent, [], { currentPage: [0, "currentPage"], footerLinkLabel: [1, "footerLinkLabel"], footerLinkHref: [2, "footerLinkHref"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 11, 0); _ck(_v, 58, 0); var currVal_7 = _co.PagesType.Infocenter; var currVal_8 = "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"; var currVal_9 = _co.PagesLinksMap.get(_co.PagesType.Contacts); _ck(_v, 91, 0, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 9).clazz; _ck(_v, 8, 0, currVal_0); var currVal_1 = i0.ɵnov(_v, 11).id; var currVal_2 = i0.ɵnov(_v, 11).active; var currVal_3 = i0.ɵnov(_v, 11).addClass; _ck(_v, 10, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = i0.ɵnov(_v, 58).id; var currVal_5 = i0.ɵnov(_v, 58).active; var currVal_6 = i0.ɵnov(_v, 58).addClass; _ck(_v, 57, 0, currVal_4, currVal_5, currVal_6); }); }
exports.View_InfoCenterPageComponent_0 = View_InfoCenterPageComponent_0;
function View_InfoCenterPageComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "infocenter-page-component", [], null, null, null, View_InfoCenterPageComponent_0, RenderType_InfoCenterPageComponent)), i0.ɵdid(1, 49152, null, 0, i5.InfoCenterPageComponent, [], null, null)], null, null); }
exports.View_InfoCenterPageComponent_Host_0 = View_InfoCenterPageComponent_Host_0;
var InfoCenterPageComponentNgFactory = i0.ɵccf("infocenter-page-component", i5.InfoCenterPageComponent, View_InfoCenterPageComponent_Host_0, {}, {}, []);
exports.InfoCenterPageComponentNgFactory = InfoCenterPageComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/infocenter-page/infocenter-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/infocenter-page/infocenter-page.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var InfoCenterPageComponent = /** @class */ (function () {
    function InfoCenterPageComponent() {
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
    }
    return InfoCenterPageComponent;
}());
exports.InfoCenterPageComponent = InfoCenterPageComponent;


/***/ }),

/***/ "./src/app/pages/shared/contacts-form/contacts-form.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/shared/contacts-form/contacts-form.component.ngfactory.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ../../../../../node_modules/@ng-select/ng-select/ng-select.ngfactory */ "./node_modules/@ng-select/ng-select/ng-select.ngfactory.js");
var i4 = __webpack_require__(/*! @ng-select/ng-select */ "@ng-select/ng-select");
var i5 = __webpack_require__(/*! ./contacts-form.component */ "./src/app/pages/shared/contacts-form/contacts-form.component.ts");
var i6 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i7 = __webpack_require__(/*! ../../../root-shared/services/global.service */ "./src/app/root-shared/services/global.service.ts");
var styles_ContactsFormComponent = [];
var RenderType_ContactsFormComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ContactsFormComponent, data: {} });
exports.RenderType_ContactsFormComponent = RenderType_ContactsFormComponent;
function View_ContactsFormComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["class", "form-control_error"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.formControl.Name.errors.required; _ck(_v, 1, 0, currVal_0); }); }
function View_ContactsFormComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "form-control_error"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 Email "])), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.formControl.Email.errors.email; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_co.formControl.Email.errors.required; _ck(_v, 3, 0, currVal_1); }); }
function View_ContactsFormComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 79, "div", [["class", "row js-contact-form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 540672, null, 0, i1.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), i0.ɵprd(2048, null, i1.ControlContainer, null, [i1.FormGroupDirective]), i0.ɵdid(3, 16384, null, 0, i1.NgControlStatusGroup, [[4, i1.ControlContainer]], null, null), (_l()(), i0.ɵeld(4, 0, null, null, 59, "div", [["class", "col-xl-4 col-lg-5 col-md-12"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 12, "div", [["class", "form-group"], ["data-aos", "fade-up"], ["data-aos-anchor", ".js-contact-form"], ["data-aos-delay", "100"], ["data-aos-offset", "100"], ["data-aos-once", "true"]], null, null, null, null, null)), i0.ɵdid(6, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(7, { "has-value": 0 }), (_l()(), i0.ɵeld(8, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "Name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 9)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 9).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 9)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 9)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(9, 16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.DefaultValueAccessor]), i0.ɵdid(11, 671744, null, 0, i1.FormControlName, [[3, i1.ControlContainer], [8, null], [8, null], [6, i1.NG_VALUE_ACCESSOR], [2, i1.ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.FormControlName]), i0.ɵdid(13, 16384, null, 0, i1.NgControlStatus, [[4, i1.NgControl]], null, null), (_l()(), i0.ɵeld(14, 0, null, null, 1, "label", [["class", "form-control_label"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0418\u043C\u044F"])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ContactsFormComponent_1)), i0.ɵdid(17, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(18, 0, null, null, 12, "div", [["class", "form-group"], ["data-aos", "fade-up"], ["data-aos-anchor", ".js-contact-form"], ["data-aos-delay", "150"], ["data-aos-offset", "100"], ["data-aos-once", "true"]], null, null, null, null, null)), i0.ɵdid(19, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(20, { "has-value": 0 }), (_l()(), i0.ɵeld(21, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "Email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 22)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 22).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 22)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 22)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(22, 16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.DefaultValueAccessor]), i0.ɵdid(24, 671744, null, 0, i1.FormControlName, [[3, i1.ControlContainer], [8, null], [8, null], [6, i1.NG_VALUE_ACCESSOR], [2, i1.ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.FormControlName]), i0.ɵdid(26, 16384, null, 0, i1.NgControlStatus, [[4, i1.NgControl]], null, null), (_l()(), i0.ɵeld(27, 0, null, null, 1, "label", [["class", "form-control_label"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Email"])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ContactsFormComponent_2)), i0.ɵdid(30, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(31, 0, null, null, 10, "div", [["class", "form-group"], ["data-aos", "fade-up"], ["data-aos-anchor", ".js-contact-form"], ["data-aos-delay", "200"], ["data-aos-offset", "100"], ["data-aos-once", "true"]], null, null, null, null, null)), i0.ɵdid(32, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(33, { "has-value": 0 }), (_l()(), i0.ɵeld(34, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "CompanyName"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 35)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 35).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 35)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 35)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(35, 16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.DefaultValueAccessor]), i0.ɵdid(37, 671744, null, 0, i1.FormControlName, [[3, i1.ControlContainer], [8, null], [8, null], [6, i1.NG_VALUE_ACCESSOR], [2, i1.ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.FormControlName]), i0.ɵdid(39, 16384, null, 0, i1.NgControlStatus, [[4, i1.NgControl]], null, null), (_l()(), i0.ɵeld(40, 0, null, null, 1, "label", [["class", "form-control_label"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"])), (_l()(), i0.ɵeld(42, 0, null, null, 21, "div", [["class", "form-group -select"], ["data-aos", "fade-up"], ["data-aos-anchor", ".js-contact-form"], ["data-aos-delay", "250"], ["data-aos-offset", "100"], ["data-aos-once", "true"]], null, null, null, null, null)), i0.ɵdid(43, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(44, { "has-value": 0 }), (_l()(), i0.ɵeld(45, 0, null, null, 16, "ng-select", [["bindLabel", "label"], ["bindValue", "value"], ["class", "ng-select ng-select"], ["formControlName", "ServiceId"], ["role", "listbox"]], [[2, "ng-select-single", null], [2, "ng-select-typeahead", null], [2, "ng-select-multiple", null], [2, "ng-select-taggable", null], [2, "ng-select-searchable", null], [2, "ng-select-opened", null], [2, "ng-select-disabled", null], [2, "ng-select-filtered", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keydown"]], function (_v, en, $event) { var ad = true; if (("keydown" === en)) {
        var pd_0 = (i0.ɵnov(_v, 46).handleKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i3.View_NgSelectComponent_0, i3.RenderType_NgSelectComponent)), i0.ɵdid(46, 4964352, null, 11, i4.NgSelectComponent, [[8, "ng-select"], [8, null], [8, null], i4.NgSelectConfig, i4.SELECTION_MODEL_FACTORY, i0.ElementRef, i0.ChangeDetectorRef, i4.ɵr], { bindLabel: [0, "bindLabel"], bindValue: [1, "bindValue"], clearable: [2, "clearable"], searchable: [3, "searchable"], items: [4, "items"] }, null), i0.ɵqud(335544320, 1, { optionTemplate: 0 }), i0.ɵqud(335544320, 2, { optgroupTemplate: 0 }), i0.ɵqud(335544320, 3, { labelTemplate: 0 }), i0.ɵqud(335544320, 4, { multiLabelTemplate: 0 }), i0.ɵqud(335544320, 5, { headerTemplate: 0 }), i0.ɵqud(335544320, 6, { footerTemplate: 0 }), i0.ɵqud(335544320, 7, { notFoundTemplate: 0 }), i0.ɵqud(335544320, 8, { typeToSearchTemplate: 0 }), i0.ɵqud(335544320, 9, { loadingTextTemplate: 0 }), i0.ɵqud(335544320, 10, { tagTemplate: 0 }), i0.ɵqud(603979776, 11, { ngOptions: 1 }), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.NgSelectComponent]), i0.ɵdid(59, 671744, null, 0, i1.FormControlName, [[3, i1.ControlContainer], [8, null], [8, null], [6, i1.NG_VALUE_ACCESSOR], [2, i1.ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.FormControlName]), i0.ɵdid(61, 16384, null, 0, i1.NgControlStatus, [[4, i1.NgControl]], null, null), (_l()(), i0.ɵeld(62, 0, null, null, 1, "label", [["class", "form-control_label"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0420\u0430\u0437\u0434\u0435\u043B \u0443\u0441\u043B\u0443\u0433"])), (_l()(), i0.ɵeld(64, 0, null, null, 15, "div", [["class", "col-xl-8 col-lg-7 col-md-12"]], null, null, null, null, null)), (_l()(), i0.ɵeld(65, 0, null, null, 10, "div", [["class", "form-group"], ["data-aos", "fade-up"], ["data-aos-anchor", ".js-contact-form"], ["data-aos-delay", "100"], ["data-aos-offset", "100"], ["data-aos-once", "true"]], null, null, null, null, null)), i0.ɵdid(66, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(67, { "has-value": 0 }), (_l()(), i0.ɵeld(68, 0, null, null, 5, "textarea", [["class", "form-control"], ["cols", "30"], ["formControlName", "Message"], ["rows", "10"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 69)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 69).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 69)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 69)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(69, 16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.DefaultValueAccessor]), i0.ɵdid(71, 671744, null, 0, i1.FormControlName, [[3, i1.ControlContainer], [8, null], [8, null], [6, i1.NG_VALUE_ACCESSOR], [2, i1.ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i1.NgControl, null, [i1.FormControlName]), i0.ɵdid(73, 16384, null, 0, i1.NgControlStatus, [[4, i1.NgControl]], null, null), (_l()(), i0.ɵeld(74, 0, null, null, 1, "label", [["class", "form-control_label"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"])), (_l()(), i0.ɵeld(76, 0, null, null, 3, "button", [["class", "btn btn-secondary btn-md btn-chevron"], ["data-aos", "fade-up"], ["data-aos-anchor", ".js-contact-form"], ["data-aos-delay", "150"], ["data-aos-offset", "100"], ["data-aos-once", "true"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSaveForm() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C "])), (_l()(), i0.ɵeld(78, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(79, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.formGroup; _ck(_v, 1, 0, currVal_7); var currVal_8 = "form-group"; var currVal_9 = _ck(_v, 7, 0, _co.formControl.Name.value); _ck(_v, 6, 0, currVal_8, currVal_9); var currVal_17 = "Name"; _ck(_v, 11, 0, currVal_17); var currVal_18 = (_co.formControl.Name.errors && !_co.formControl.Name.pristine); _ck(_v, 17, 0, currVal_18); var currVal_19 = "form-group"; var currVal_20 = _ck(_v, 20, 0, _co.formControl.Email.value); _ck(_v, 19, 0, currVal_19, currVal_20); var currVal_28 = "Email"; _ck(_v, 24, 0, currVal_28); var currVal_29 = (_co.formControl.Email.errors && !_co.formControl.Email.pristine); _ck(_v, 30, 0, currVal_29); var currVal_30 = "form-group"; var currVal_31 = _ck(_v, 33, 0, _co.formControl.CompanyName.value); _ck(_v, 32, 0, currVal_30, currVal_31); var currVal_39 = "CompanyName"; _ck(_v, 37, 0, currVal_39); var currVal_40 = "form-group -select"; var currVal_41 = _ck(_v, 44, 0, _co.formControl.ServiceId.value); _ck(_v, 43, 0, currVal_40, currVal_41); var currVal_57 = "label"; var currVal_58 = "value"; var currVal_59 = false; var currVal_60 = false; var currVal_61 = _co.ServicesTypeOptions; _ck(_v, 46, 0, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61); var currVal_62 = "ServiceId"; _ck(_v, 59, 0, currVal_62); var currVal_63 = "form-group"; var currVal_64 = _ck(_v, 67, 0, _co.formControl.Message.value); _ck(_v, 66, 0, currVal_63, currVal_64); var currVal_72 = "Message"; _ck(_v, 71, 0, currVal_72); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 3).ngClassUntouched; var currVal_1 = i0.ɵnov(_v, 3).ngClassTouched; var currVal_2 = i0.ɵnov(_v, 3).ngClassPristine; var currVal_3 = i0.ɵnov(_v, 3).ngClassDirty; var currVal_4 = i0.ɵnov(_v, 3).ngClassValid; var currVal_5 = i0.ɵnov(_v, 3).ngClassInvalid; var currVal_6 = i0.ɵnov(_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_10 = i0.ɵnov(_v, 13).ngClassUntouched; var currVal_11 = i0.ɵnov(_v, 13).ngClassTouched; var currVal_12 = i0.ɵnov(_v, 13).ngClassPristine; var currVal_13 = i0.ɵnov(_v, 13).ngClassDirty; var currVal_14 = i0.ɵnov(_v, 13).ngClassValid; var currVal_15 = i0.ɵnov(_v, 13).ngClassInvalid; var currVal_16 = i0.ɵnov(_v, 13).ngClassPending; _ck(_v, 8, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_21 = i0.ɵnov(_v, 26).ngClassUntouched; var currVal_22 = i0.ɵnov(_v, 26).ngClassTouched; var currVal_23 = i0.ɵnov(_v, 26).ngClassPristine; var currVal_24 = i0.ɵnov(_v, 26).ngClassDirty; var currVal_25 = i0.ɵnov(_v, 26).ngClassValid; var currVal_26 = i0.ɵnov(_v, 26).ngClassInvalid; var currVal_27 = i0.ɵnov(_v, 26).ngClassPending; _ck(_v, 21, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_32 = i0.ɵnov(_v, 39).ngClassUntouched; var currVal_33 = i0.ɵnov(_v, 39).ngClassTouched; var currVal_34 = i0.ɵnov(_v, 39).ngClassPristine; var currVal_35 = i0.ɵnov(_v, 39).ngClassDirty; var currVal_36 = i0.ɵnov(_v, 39).ngClassValid; var currVal_37 = i0.ɵnov(_v, 39).ngClassInvalid; var currVal_38 = i0.ɵnov(_v, 39).ngClassPending; _ck(_v, 34, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_42 = !i0.ɵnov(_v, 46).multiple; var currVal_43 = i0.ɵnov(_v, 46).typeahead; var currVal_44 = i0.ɵnov(_v, 46).multiple; var currVal_45 = i0.ɵnov(_v, 46).addTag; var currVal_46 = i0.ɵnov(_v, 46).searchable; var currVal_47 = i0.ɵnov(_v, 46).isOpen; var currVal_48 = i0.ɵnov(_v, 46).disabled; var currVal_49 = i0.ɵnov(_v, 46).filtered; var currVal_50 = i0.ɵnov(_v, 61).ngClassUntouched; var currVal_51 = i0.ɵnov(_v, 61).ngClassTouched; var currVal_52 = i0.ɵnov(_v, 61).ngClassPristine; var currVal_53 = i0.ɵnov(_v, 61).ngClassDirty; var currVal_54 = i0.ɵnov(_v, 61).ngClassValid; var currVal_55 = i0.ɵnov(_v, 61).ngClassInvalid; var currVal_56 = i0.ɵnov(_v, 61).ngClassPending; _ck(_v, 45, 1, [currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56]); var currVal_65 = i0.ɵnov(_v, 73).ngClassUntouched; var currVal_66 = i0.ɵnov(_v, 73).ngClassTouched; var currVal_67 = i0.ɵnov(_v, 73).ngClassPristine; var currVal_68 = i0.ɵnov(_v, 73).ngClassDirty; var currVal_69 = i0.ɵnov(_v, 73).ngClassValid; var currVal_70 = i0.ɵnov(_v, 73).ngClassInvalid; var currVal_71 = i0.ɵnov(_v, 73).ngClassPending; _ck(_v, 68, 0, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71); }); }
exports.View_ContactsFormComponent_0 = View_ContactsFormComponent_0;
function View_ContactsFormComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "contacts-form-component", [], null, null, null, View_ContactsFormComponent_0, RenderType_ContactsFormComponent)), i0.ɵdid(1, 49152, null, 0, i5.ContactsFormComponent, [i6.HttpClient, i7.GlobalService], null, null)], null, null); }
exports.View_ContactsFormComponent_Host_0 = View_ContactsFormComponent_Host_0;
var ContactsFormComponentNgFactory = i0.ɵccf("contacts-form-component", i5.ContactsFormComponent, View_ContactsFormComponent_Host_0, {}, {}, []);
exports.ContactsFormComponentNgFactory = ContactsFormComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/shared/contacts-form/contacts-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/shared/contacts-form/contacts-form.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_helper_1 = __webpack_require__(/*! @root-shared/utils/forms-helper */ "./src/app/root-shared/utils/forms-helper.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var industry_type_enum_1 = __webpack_require__(/*! @root-shared/enums/industry-type.enum */ "./src/app/root-shared/enums/industry-type.enum.ts");
var mark_form_control_1 = __webpack_require__(/*! @root-shared/utils/mark-form-control */ "./src/app/root-shared/utils/mark-form-control.ts");
var services_enum_1 = __webpack_require__(/*! @root-shared/enums/services.enum */ "./src/app/root-shared/enums/services.enum.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var global_service_1 = __webpack_require__(/*! @root-shared/services/global.service */ "./src/app/root-shared/services/global.service.ts");
var ContactsFormComponent = /** @class */ (function () {
    function ContactsFormComponent(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.IndustryTypeOptions = industry_type_enum_1.IndustryTypeOptions;
        this.ServicesTypeOptions = services_enum_1.ServicesTypeOptions;
        this.ServicesTypeMap = services_enum_1.ServicesTypeMap;
        this.formGroup = new forms_helper_1.FormGroupTypeSafe({
            Name: new forms_1.FormControl(null, forms_1.Validators.required),
            Email: new forms_1.FormControl(null, [forms_1.Validators.email, forms_1.Validators.required]),
            CompanyName: new forms_1.FormControl(null),
            IndustryId: new forms_1.FormControl(null),
            IndustryName: new forms_1.FormControl(null),
            ServiceId: new forms_1.FormControl(null),
            ServiceName: new forms_1.FormControl(null),
            Subject: new forms_1.FormControl("SLR"),
            Message: new forms_1.FormControl(null)
        });
    }
    Object.defineProperty(ContactsFormComponent.prototype, "formControl", {
        get: function () {
            return this.formGroup.controls;
        },
        enumerable: true,
        configurable: true
    });
    ContactsFormComponent.prototype.onSaveForm = function () {
        var _this = this;
        mark_form_control_1.markFormControl.used(this.formGroup);
        if (this.formGroup.valid) {
            this.formGroup.controls.ServiceName.reset(this.ServicesTypeMap.get(this.formGroup.controls.ServiceId.value));
            this.http.post("/api/Mail", this.formGroup.value).subscribe(function (x) {
                if (x) {
                    _this.globalService.isFormSuccess.next(true);
                    _this.formGroup.reset();
                    mark_form_control_1.markFormControl.unused(_this.formGroup);
                }
            });
        }
    };
    return ContactsFormComponent;
}());
exports.ContactsFormComponent = ContactsFormComponent;


/***/ }),

/***/ "./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/shared/section-contacts/section-contacts.component.ngfactory.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @agm/core/services/fit-bounds */ "@agm/core/services/fit-bounds");
var i2 = __webpack_require__(/*! @agm/core/directives/marker */ "@agm/core/directives/marker");
var i3 = __webpack_require__(/*! @agm/core/services/managers/marker-manager */ "@agm/core/services/managers/marker-manager");
var i4 = __webpack_require__(/*! ../../../../../node_modules/@agm/core/directives/map.ngfactory */ "./node_modules/@agm/core/directives/map.ngfactory.js");
var i5 = __webpack_require__(/*! @agm/core/services/google-maps-api-wrapper */ "@agm/core/services/google-maps-api-wrapper");
var i6 = __webpack_require__(/*! @agm/core/services/managers/info-window-manager */ "@agm/core/services/managers/info-window-manager");
var i7 = __webpack_require__(/*! @agm/core/services/managers/circle-manager */ "@agm/core/services/managers/circle-manager");
var i8 = __webpack_require__(/*! @agm/core/services/managers/rectangle-manager */ "@agm/core/services/managers/rectangle-manager");
var i9 = __webpack_require__(/*! @agm/core/services/managers/polyline-manager */ "@agm/core/services/managers/polyline-manager");
var i10 = __webpack_require__(/*! @agm/core/services/managers/polygon-manager */ "@agm/core/services/managers/polygon-manager");
var i11 = __webpack_require__(/*! @agm/core/services/managers/kml-layer-manager */ "@agm/core/services/managers/kml-layer-manager");
var i12 = __webpack_require__(/*! @agm/core/services/managers/data-layer-manager */ "@agm/core/services/managers/data-layer-manager");
var i13 = __webpack_require__(/*! @agm/core/services/maps-api-loader/maps-api-loader */ "@agm/core/services/maps-api-loader/maps-api-loader");
var i14 = __webpack_require__(/*! @agm/core/directives/map */ "@agm/core/directives/map");
var i15 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i16 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i17 = __webpack_require__(/*! ../contacts-form/contacts-form.component.ngfactory */ "./src/app/pages/shared/contacts-form/contacts-form.component.ngfactory.js");
var i18 = __webpack_require__(/*! ../contacts-form/contacts-form.component */ "./src/app/pages/shared/contacts-form/contacts-form.component.ts");
var i19 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i20 = __webpack_require__(/*! ../../../root-shared/services/global.service */ "./src/app/root-shared/services/global.service.ts");
var i21 = __webpack_require__(/*! ./section-contacts.component */ "./src/app/pages/shared/section-contacts/section-contacts.component.ts");
var styles_SectionContactsComponent = [];
var RenderType_SectionContactsComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SectionContactsComponent, data: {} });
exports.RenderType_SectionContactsComponent = RenderType_SectionContactsComponent;
function View_SectionContactsComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "agm-marker", [], null, null, null, null, null)), i0.ɵprd(6144, null, i1.FitBoundsAccessor, null, [i2.AgmMarker]), i0.ɵdid(2, 1720320, null, 1, i2.AgmMarker, [i3.MarkerManager], { latitude: [0, "latitude"], longitude: [1, "longitude"], iconUrl: [2, "iconUrl"] }, null), i0.ɵqud(603979776, 1, { infoWindow: 1 })], function (_ck, _v) { var currVal_0 = _v.context.$implicit.lat; var currVal_1 = _v.context.$implicit.lng; var currVal_2 = "/assets/img/map-marker.png"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_SectionContactsComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 14, "div", [["class", "google-map"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 13, "agm-map", [], [[2, "sebm-google-map-container", null]], null, null, i4.View_AgmMap_0, i4.RenderType_AgmMap)), i0.ɵprd(4608, null, i3.MarkerManager, i3.MarkerManager, [i5.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i6.InfoWindowManager, i6.InfoWindowManager, [i5.GoogleMapsAPIWrapper, i0.NgZone, i3.MarkerManager]), i0.ɵprd(4608, null, i7.CircleManager, i7.CircleManager, [i5.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i8.RectangleManager, i8.RectangleManager, [i5.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i9.PolylineManager, i9.PolylineManager, [i5.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i10.PolygonManager, i10.PolygonManager, [i5.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i11.KmlLayerManager, i11.KmlLayerManager, [i5.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i12.DataLayerManager, i12.DataLayerManager, [i5.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(512, null, i5.GoogleMapsAPIWrapper, i5.GoogleMapsAPIWrapper, [i13.MapsAPILoader, i0.NgZone]), i0.ɵprd(512, null, i1.FitBoundsService, i1.FitBoundsService, [i13.MapsAPILoader]), i0.ɵdid(12, 770048, null, 0, i14.AgmMap, [i0.ElementRef, i5.GoogleMapsAPIWrapper, i1.FitBoundsService], { longitude: [0, "longitude"], latitude: [1, "latitude"], zoom: [2, "zoom"], scrollwheel: [3, "scrollwheel"], styles: [4, "styles"], mapTypeId: [5, "mapTypeId"] }, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_SectionContactsComponent_2)), i0.ɵdid(14, 278528, null, 0, i15.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.lng; var currVal_2 = _co.lat; var currVal_3 = _co.zoom; var currVal_4 = _co.scrollwheel; var currVal_5 = _co.styles; var currVal_6 = _co.mapTypeId; _ck(_v, 12, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _co.listMarker; _ck(_v, 14, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = true; _ck(_v, 1, 0, currVal_0); }); }
function View_SectionContactsComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "a", [["class", "section-contacts_bot_bot"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 671744, null, 0, i16.RouterLinkWithHref, [i16.Router, i16.ActivatedRoute, i15.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i0.ɵpad(2, 2), (_l()(), i0.ɵeld(3, 0, null, null, 4, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 3, "span", [["class", "btn btn-white chevron-secondary btn-lg btn-chevron h2 mb-0 no-hover"]], null, null, null, null, null)), (_l()(), i0.ɵted(5, null, [" ", " "])), (_l()(), i0.ɵeld(6, 0, null, null, 1, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 0, "i", [["class", "icon-icon-sm-chevron-right"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 2, 0, "/", _co.footerLinkHref); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 1).target; var currVal_1 = i0.ɵnov(_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _co.footerLinkLabel; _ck(_v, 5, 0, currVal_3); }); }
function View_SectionContactsComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_SectionContactsComponent_1)), i0.ɵdid(1, 16384, null, 0, i15.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(2, 0, null, null, 8, "section", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "section-mask"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 0, "div", [["class", "mask-top"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 2, "div", [["class", "section-heading "]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 1, "span", [["class", "h2"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C"])), (_l()(), i0.ɵeld(9, 0, null, null, 1, "contacts-form-component", [], null, null, null, i17.View_ContactsFormComponent_0, i17.RenderType_ContactsFormComponent)), i0.ɵdid(10, 49152, null, 0, i18.ContactsFormComponent, [i19.HttpClient, i20.GlobalService], null, null), (_l()(), i0.ɵeld(11, 0, null, null, 27, "section", [], null, null, null, null, null)), i0.ɵdid(12, 278528, null, 0, i15.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(13, { "bg-overlay-dark": 0 }), (_l()(), i0.ɵeld(14, 0, null, null, 22, "div", [["class", "section-contacts_bot_top"]], null, null, null, null, null)), (_l()(), i0.ɵeld(15, 0, null, null, 21, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(16, 0, null, null, 20, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(17, 0, null, null, 16, "div", [["class", "col-lg-4"]], null, null, null, null, null)), (_l()(), i0.ɵeld(18, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), i0.ɵeld(19, 0, null, null, 1, "a", [["class", "link link-white fz-30 font-secondary font-bold"], ["href", "tel:+380988899008"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["+38 098 8899 008"])), (_l()(), i0.ɵeld(21, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), i0.ɵeld(22, 0, null, null, 1, "a", [["class", "link link-white fz-30"], ["href", "mailto:info@slr.legal"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["info@slr.legal"])), (_l()(), i0.ɵeld(24, 0, null, null, 2, "ul", [["class", "address-list"]], null, null, null, null, null)), (_l()(), i0.ɵeld(25, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0425\u0430\u0440\u044C\u043A\u043E\u0432, \u0443\u043B. \u041A\u043E\u043B\u043E\u043C\u0435\u043D\u0441\u043A\u0430\u044F, 63"])), (_l()(), i0.ɵeld(27, 0, null, null, 6, "ul", [["class", "social-list"]], null, null, null, null, null)), (_l()(), i0.ɵeld(28, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(29, 0, null, null, 1, "a", [["class", "link link-secondary"], ["href", "https://www.facebook.com/SLRLEGAL/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i0.ɵeld(30, 0, null, null, 0, "i", [["class", "icon-icon-facebook"]], null, null, null, null, null)), (_l()(), i0.ɵeld(31, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(32, 0, null, null, 1, "a", [["class", "link link-secondary"], ["href", "https://www.linkedin.com/in/smart-legal-resolution-b01a37182/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i0.ɵeld(33, 0, null, null, 0, "i", [["class", "icon-icon-linkedin"]], null, null, null, null, null)), (_l()(), i0.ɵeld(34, 0, null, null, 2, "div", [["class", "col-lg-8 align-items-end d-flex"]], null, null, null, null, null)), (_l()(), i0.ɵeld(35, 0, null, null, 1, "span", [["class", "copyright"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u00A9 SLR Smart Legal Resolution 2019 "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SectionContactsComponent_3)), i0.ɵdid(38, 16384, null, 0, i15.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.currentPage === _co.PagesType.Contacts); _ck(_v, 1, 0, currVal_0); var currVal_2 = i0.ɵinlineInterpolate(1, "section section-contacts_bot text-white  -", _co.PagesTypeMap.get(_co.currentPage), ""); var currVal_3 = _ck(_v, 13, 0, ((_co.currentPage !== _co.PagesType.Home) && (_co.currentPage !== _co.PagesType.Career))); _ck(_v, 12, 0, currVal_2, currVal_3); var currVal_4 = (_co.currentPage !== _co.PagesType.Contacts); _ck(_v, 38, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = i0.ɵinlineInterpolate(1, "section section-contacts text-white -", _co.PagesTypeMap.get(_co.currentPage), ""); _ck(_v, 2, 0, currVal_1); }); }
exports.View_SectionContactsComponent_0 = View_SectionContactsComponent_0;
function View_SectionContactsComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "section-contacts-component", [], null, null, null, View_SectionContactsComponent_0, RenderType_SectionContactsComponent)), i0.ɵdid(1, 114688, null, 0, i21.SectionContactsComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SectionContactsComponent_Host_0 = View_SectionContactsComponent_Host_0;
var SectionContactsComponentNgFactory = i0.ɵccf("section-contacts-component", i21.SectionContactsComponent, View_SectionContactsComponent_Host_0, { currentPage: "currentPage", footerLinkLabel: "footerLinkLabel", footerLinkHref: "footerLinkHref" }, {}, []);
exports.SectionContactsComponentNgFactory = SectionContactsComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/shared/section-contacts/section-contacts.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/shared/section-contacts/section-contacts.component.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var AOS = __webpack_require__(/*! aos */ "aos");
var SectionContactsComponent = /** @class */ (function () {
    function SectionContactsComponent() {
        this.PagesTypeMap = pages_enum_1.PagesTypeMap;
        this.PagesType = pages_enum_1.PagesType;
        // lat and lng for 2 addresses
        // lat: number = 50.011786;
        // lng: number = 36.232143;
        this.lat = 50.02254;
        this.lng = 36.226943;
        this.latMap = 50.026;
        this.zoom = 15;
        this.mapTypeId = "roadmap";
        this.scrollwheel = false;
        this.listMarker = [
            {
                street: "Kolominska63",
                lat: 50.02254,
                lng: 36.226943
            }
            // {
            //   street: "Pushkinska44",
            //   lat: 49.9980577,
            //   lng: 36.2406837
            // }
        ];
        this.styles = [
            {
                featureType: "all",
                elementType: "geometry.fill",
                stylers: [
                    {
                        hue: "#ff0000"
                    },
                    {
                        saturation: "-100"
                    },
                    {
                        lightness: "-83"
                    }
                ]
            },
            {
                featureType: "all",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        saturation: "-100"
                    },
                    {
                        lightness: "-52"
                    }
                ]
            },
            {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        saturation: "-100"
                    },
                    {
                        lightness: "60"
                    },
                    {
                        color: "#aeaeae"
                    }
                ]
            },
            {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        saturation: "-100"
                    },
                    {
                        lightness: "-99"
                    },
                    {
                        gamma: "2.12"
                    }
                ]
            },
            {
                featureType: "all",
                elementType: "labels.icon",
                stylers: [
                    {
                        lightness: "-16"
                    },
                    {
                        gamma: "0.70"
                    },
                    {
                        saturation: "-100"
                    }
                ]
            },
            {
                featureType: "landscape.man_made",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "on"
                    },
                    {
                        weight: "1.00"
                    },
                    {
                        gamma: "0.64"
                    },
                    {
                        lightness: "52"
                    }
                ]
            },
            {
                featureType: "landscape.man_made",
                elementType: "geometry.fill",
                stylers: [
                    {
                        visibility: "on"
                    },
                    {
                        color: "#0e1212"
                    }
                ]
            },
            {
                featureType: "landscape.man_made",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        color: "#d1a41e"
                    },
                    {
                        visibility: "on"
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "all",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "poi.business",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#2a3737"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        visibility: "off"
                    },
                    {
                        lightness: "48"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "on"
                    }
                ]
            },
            {
                featureType: "road.highway.controlled_access",
                elementType: "all",
                stylers: [
                    {
                        visibility: "on"
                    }
                ]
            },
            {
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "transit",
                elementType: "labels.icon",
                stylers: [
                    {
                        hue: "#ff0000"
                    },
                    {
                        weight: "3.66"
                    }
                ]
            },
            {
                featureType: "transit.line",
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#ffd967"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#121212"
                    }
                ]
            }
        ];
    }
    SectionContactsComponent.prototype.ngOnInit = function () {
        AOS.init();
    };
    return SectionContactsComponent;
}());
exports.SectionContactsComponent = SectionContactsComponent;


/***/ }),

/***/ "./src/app/root-shared/components/form-success/form-success.component.ngfactory.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/root-shared/components/form-success/form-success.component.ngfactory.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i2 = __webpack_require__(/*! ./form-success.component */ "./src/app/root-shared/components/form-success/form-success.component.ts");
var i3 = __webpack_require__(/*! ../../services/global.service */ "./src/app/root-shared/services/global.service.ts");
var styles_FormSuccessComponent = [];
var RenderType_FormSuccessComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_FormSuccessComponent, data: {} });
exports.RenderType_FormSuccessComponent = RenderType_FormSuccessComponent;
function View_FormSuccessComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "div", [["class", "form-success"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.hideMessage() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { show: 0 }), (_l()(), i0.ɵeld(3, 0, null, null, 5, "div", [["class", "form-success_content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 2, "div", [["class", "form-success_icon"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 1, ":svg:svg", [[":xml:space", "preserve"], [":xmlns:xlink", "http://www.w3.org/1999/xlink"], ["enable-background", "new 0 0 100 100"], ["id", "Layer_1"], ["version", "1.1"], ["viewBox", "0 0 100 100"], ["x", "0px"], ["xmlns", "http://www.w3.org/2000/svg"], ["y", "0px"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 0, ":svg:polyline", [["class", "check"], ["fill", "none"], ["points", "15,60 40,80 85,20"], ["stroke", "#fff"], ["stroke-miterlimit", "20"], ["stroke-width", "10"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 1, "div", [["class", "form-success_text"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" \u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-success"; var currVal_1 = _ck(_v, 2, 0, _co.isFormSuccess); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_FormSuccessComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_FormSuccessComponent_1)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isBrowser; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_FormSuccessComponent_0 = View_FormSuccessComponent_0;
function View_FormSuccessComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "form-success-component", [], null, null, null, View_FormSuccessComponent_0, RenderType_FormSuccessComponent)), i0.ɵdid(1, 180224, null, 0, i2.FormSuccessComponent, [i3.GlobalService, i0.PLATFORM_ID], null, null)], null, null); }
exports.View_FormSuccessComponent_Host_0 = View_FormSuccessComponent_Host_0;
var FormSuccessComponentNgFactory = i0.ɵccf("form-success-component", i2.FormSuccessComponent, View_FormSuccessComponent_Host_0, {}, {}, []);
exports.FormSuccessComponentNgFactory = FormSuccessComponentNgFactory;


/***/ }),

/***/ "./src/app/root-shared/components/form-success/form-success.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/root-shared/components/form-success/form-success.component.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var global_service_1 = __webpack_require__(/*! @root-shared/services/global.service */ "./src/app/root-shared/services/global.service.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var FormSuccessComponent = /** @class */ (function () {
    function FormSuccessComponent(globalService, platformId) {
        var _this = this;
        this.globalService = globalService;
        this.platformId = platformId;
        this.destroySubject = new rxjs_1.Subject();
        this.isFormSuccess = false;
        this.isBrowser = false;
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.isBrowser = true;
        }
        this.globalService.isFormSuccess
            .pipe(operators_1.takeUntil(this.destroySubject), operators_1.filter(function (x) { return x !== null; }))
            .subscribe(function (response) {
            _this.isFormSuccess = response;
            if (response) {
                setTimeout(function () {
                    _this.isFormSuccess = false;
                }, 3000);
            }
        });
    }
    FormSuccessComponent.prototype.hideMessage = function () {
        this.isFormSuccess = false;
    };
    FormSuccessComponent.prototype.ngOnDestroy = function () {
        this.destroySubject.next();
    };
    return FormSuccessComponent;
}());
exports.FormSuccessComponent = FormSuccessComponent;


/***/ }),

/***/ "./src/app/root-shared/components/header-component/header.component.ngfactory.js":
/*!***************************************************************************************!*\
  !*** ./src/app/root-shared/components/header-component/header.component.ngfactory.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! ./header.component */ "./src/app/root-shared/components/header-component/header.component.ts");
var styles_HeaderComponent = [".overlay[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: #000;\n        z-index: 201;\n        opacity: 1;\n        transition: all 1s;\n      }\n      .overlay.-hide[_ngcontent-%COMP%] {\n        opacity: 0;\n        pointer-events: none;\n      }"];
var RenderType_HeaderComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_HeaderComponent, data: { "animation": [{ type: 7, name: "moveToHeader", definitions: [{ type: 0, name: "move", styles: { type: 6, styles: { top: "30px", left: "50px", transform: "translate(0%, 0%)", maxWidth: "250px" }, offset: null }, options: undefined }, { type: 0, name: "moveMobile", styles: { type: 6, styles: { top: "70px", transform: "translate(-50%, 0%)", maxWidth: "250px" }, offset: null }, options: undefined }], options: {} }] } });
exports.RenderType_HeaderComponent = RenderType_HeaderComponent;
function View_HeaderComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 2, "div", [["class", "overlay "]], null, null, null, null, null)), i0.ɵdid(2, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "-hide": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = "overlay "; var currVal_1 = _ck(_v, 3, 0, _co.animationComplete); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_HeaderComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 63, "header", [["class", "header"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "-scroll": 0, "-black": 1, "-menu-open": 2 }), (_l()(), i0.ɵeld(3, 0, null, null, 60, "nav", [["class", "navbar navbar-expand-xl"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 5, "button", [["class", "navbar-toggler"], ["type", "button"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 4, "div", [["class", "hamburger hamburger--spin js-hamburger"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.manageMobileMenu() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(6, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(7, { "is-active": 0 }), (_l()(), i0.ɵeld(8, 0, null, null, 1, "div", [["class", "hamburger-box"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 0, "div", [["class", "hamburger-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(10, 0, null, null, 3, "a", [["class", "mobile-logo"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(11, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i1.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i0.ɵpad(12, 2), (_l()(), i0.ɵeld(13, 0, null, null, 0, "img", [["alt", ""], ["src", "../assets/img/logo_short.svg"]], null, null, null, null, null)), (_l()(), i0.ɵeld(14, 0, null, null, 43, "div", [["class", "collapse navbar-collapse"]], null, null, null, null, null)), i0.ɵdid(15, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(16, { show: 0 }), (_l()(), i0.ɵeld(17, 0, null, null, 40, "ul", [["class", "navbar-nav mr-auto ml-auto"]], null, null, null, null, null)), (_l()(), i0.ɵeld(18, 0, null, null, 7, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(19, 0, null, null, 6, "a", [["class", "nav-link"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(20, 671744, [[2, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i1.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i0.ɵpad(21, 2), i0.ɵdid(22, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i0.ɵqud(603979776, 1, { links: 1 }), i0.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i0.ɵted(-1, null, ["\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438"])), (_l()(), i0.ɵeld(26, 0, null, null, 7, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(27, 0, null, null, 6, "a", [["class", "nav-link"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 28).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(28, 671744, [[4, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i1.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i0.ɵpad(29, 2), i0.ɵdid(30, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i0.ɵqud(603979776, 3, { links: 1 }), i0.ɵqud(603979776, 4, { linksWithHrefs: 1 }), (_l()(), i0.ɵted(-1, null, ["\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438"])), (_l()(), i0.ɵeld(34, 0, null, null, 7, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(35, 0, null, null, 6, "a", [["class", "nav-link"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 36).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(36, 671744, [[6, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i1.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i0.ɵpad(37, 2), i0.ɵdid(38, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i0.ɵqud(603979776, 5, { links: 1 }), i0.ɵqud(603979776, 6, { linksWithHrefs: 1 }), (_l()(), i0.ɵted(-1, null, ["\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"])), (_l()(), i0.ɵeld(42, 0, null, null, 7, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(43, 0, null, null, 6, "a", [["class", "nav-link"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 44).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(44, 671744, [[8, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i1.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i0.ɵpad(45, 2), i0.ɵdid(46, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i0.ɵqud(603979776, 7, { links: 1 }), i0.ɵqud(603979776, 8, { linksWithHrefs: 1 }), (_l()(), i0.ɵted(-1, null, ["\u041A\u0430\u0440\u044C\u0435\u0440\u0430"])), (_l()(), i0.ɵeld(50, 0, null, null, 7, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(51, 0, null, null, 6, "a", [["class", "nav-link"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 52).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(52, 671744, [[10, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i1.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i0.ɵpad(53, 2), i0.ɵdid(54, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i0.ɵqud(603979776, 9, { links: 1 }), i0.ɵqud(603979776, 10, { linksWithHrefs: 1 }), (_l()(), i0.ɵted(-1, null, ["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"])), (_l()(), i0.ɵeld(58, 0, null, null, 5, "div", [["class", "ml-auto header-set"]], null, null, null, null, null)), (_l()(), i0.ɵeld(59, 0, null, null, 4, "div", [["class", "header-info"]], null, null, null, null, null)), (_l()(), i0.ɵeld(60, 0, null, null, 1, "a", [["class", "btn-icon btn-white btn-icon-36"], ["href", "tel:+380988899008"]], null, null, null, null, null)), (_l()(), i0.ɵeld(61, 0, null, null, 0, "i", [["class", "icon-icon-phone"]], null, null, null, null, null)), (_l()(), i0.ɵeld(62, 0, null, null, 1, "a", [["class", "btn-icon btn-white btn-icon-36"], ["href", "mailto:info@slr.legal"]], null, null, null, null, null)), (_l()(), i0.ɵeld(63, 0, null, null, 0, "i", [["class", "icon-icon-mail"]], null, null, null, null, null)), (_l()(), i0.ɵeld(64, 0, null, null, 13, "div", [["class", "header-logo_wrap"]], null, null, null, null, null)), i0.ɵdid(65, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(66, { "animation-finished": 0, hideLogo: 1 }), (_l()(), i0.ɵeld(67, 0, null, null, 10, "a", [["class", "header-logo"]], [[24, "@moveToHeader", 0], [1, "target", 0], [8, "href", 4]], [[null, "@moveToHeader.done"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 68).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("@moveToHeader.done" === en)) {
        var pd_1 = (_co.moveToHeaderDone($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(68, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i1.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i0.ɵpad(69, 2), i0.ɵdid(70, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(71, { "-scroll": 0, "-showAnimation": 1, "-static": 2, "-ended": 3, "-small": 4 }), (_l()(), i0.ɵeld(72, 0, null, null, 1, "div", [["class", "logo-sm"]], null, null, null, null, null)), (_l()(), i0.ɵeld(73, 0, null, null, 0, "img", [["alt", ""], ["src", "../assets/img/logo_short.svg"]], null, null, null, null, null)), (_l()(), i0.ɵeld(74, 0, null, null, 3, "div", [["class", "logo-animat"]], null, null, null, null, null)), (_l()(), i0.ɵeld(75, 0, null, null, 1, "div", [["class", "logo-subtitle"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u041A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u0430\u044F \u0413\u0440\u0443\u043F\u043F\u0430"])), (_l()(), i0.ɵeld(77, 0, null, null, 0, "span", [["class", "logo-lg"], ["id", "js-logo"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HeaderComponent_1)), i0.ɵdid(79, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "header"; var currVal_1 = _ck(_v, 2, 0, _co.isScrollDown, _co.isHeaderBlack, _co.isOpenMobileMenu); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "hamburger hamburger--spin js-hamburger"; var currVal_3 = _ck(_v, 7, 0, _co.isOpenMobileMenu); _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_6 = _ck(_v, 12, 0, "/", _co.PagesLinksMap.get(_co.PagesType.Home)); _ck(_v, 11, 0, currVal_6); var currVal_7 = "collapse navbar-collapse"; var currVal_8 = _ck(_v, 16, 0, _co.isOpenMobileMenu); _ck(_v, 15, 0, currVal_7, currVal_8); var currVal_11 = _ck(_v, 21, 0, "/", _co.PagesLinksMap.get(_co.PagesType.Expertise)); _ck(_v, 20, 0, currVal_11); var currVal_12 = "active"; _ck(_v, 22, 0, currVal_12); var currVal_15 = _ck(_v, 29, 0, "/", _co.PagesLinksMap.get(_co.PagesType.Industry)); _ck(_v, 28, 0, currVal_15); var currVal_16 = "active"; _ck(_v, 30, 0, currVal_16); var currVal_19 = _ck(_v, 37, 0, "/", _co.PagesLinksMap.get(_co.PagesType.About)); _ck(_v, 36, 0, currVal_19); var currVal_20 = "active"; _ck(_v, 38, 0, currVal_20); var currVal_23 = _ck(_v, 45, 0, "/", _co.PagesLinksMap.get(_co.PagesType.Career)); _ck(_v, 44, 0, currVal_23); var currVal_24 = "active"; _ck(_v, 46, 0, currVal_24); var currVal_27 = _ck(_v, 53, 0, "/", _co.PagesLinksMap.get(_co.PagesType.Contacts)); _ck(_v, 52, 0, currVal_27); var currVal_28 = "active"; _ck(_v, 54, 0, currVal_28); var currVal_29 = "header-logo_wrap"; var currVal_30 = _ck(_v, 66, 0, (_co.isOpenMobileMenu || _co.isAnimationEnded), _co.hideBigMobLogo); _ck(_v, 65, 0, currVal_29, currVal_30); var currVal_34 = _ck(_v, 69, 0, "/", _co.PagesLinksMap.get(_co.PagesType.Home)); _ck(_v, 68, 0, currVal_34); var currVal_35 = "header-logo"; var currVal_36 = _ck(_v, 71, 0, _co.isScrollDown, _co.isShowPreloader, !_co.isShowPreloader, _co.isAnimationEnded, _co.isAlwaysSmall); _ck(_v, 70, 0, currVal_35, currVal_36); var currVal_37 = _co.isShowPreloader; _ck(_v, 79, 0, currVal_37); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = i0.ɵnov(_v, 11).target; var currVal_5 = i0.ɵnov(_v, 11).href; _ck(_v, 10, 0, currVal_4, currVal_5); var currVal_9 = i0.ɵnov(_v, 20).target; var currVal_10 = i0.ɵnov(_v, 20).href; _ck(_v, 19, 0, currVal_9, currVal_10); var currVal_13 = i0.ɵnov(_v, 28).target; var currVal_14 = i0.ɵnov(_v, 28).href; _ck(_v, 27, 0, currVal_13, currVal_14); var currVal_17 = i0.ɵnov(_v, 36).target; var currVal_18 = i0.ɵnov(_v, 36).href; _ck(_v, 35, 0, currVal_17, currVal_18); var currVal_21 = i0.ɵnov(_v, 44).target; var currVal_22 = i0.ɵnov(_v, 44).href; _ck(_v, 43, 0, currVal_21, currVal_22); var currVal_25 = i0.ɵnov(_v, 52).target; var currVal_26 = i0.ɵnov(_v, 52).href; _ck(_v, 51, 0, currVal_25, currVal_26); var currVal_31 = _co.animateTo; var currVal_32 = i0.ɵnov(_v, 68).target; var currVal_33 = i0.ɵnov(_v, 68).href; _ck(_v, 67, 0, currVal_31, currVal_32, currVal_33); }); }
exports.View_HeaderComponent_0 = View_HeaderComponent_0;
function View_HeaderComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "header-component", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_HeaderComponent_0, RenderType_HeaderComponent)), i0.ɵdid(1, 245760, null, 0, i3.HeaderComponent, [i2.ActivatedRoute, i2.Router, i0.Renderer], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HeaderComponent_Host_0 = View_HeaderComponent_Host_0;
var HeaderComponentNgFactory = i0.ɵccf("header-component", i3.HeaderComponent, View_HeaderComponent_Host_0, {}, {}, []);
exports.HeaderComponentNgFactory = HeaderComponentNgFactory;


/***/ }),

/***/ "./src/app/root-shared/components/header-component/header.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/root-shared/components/header-component/header.component.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var pages_enum_1 = __webpack_require__(/*! @root-shared/enums/pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
var pageLinks_enum_1 = __webpack_require__(/*! @root-shared/enums/pageLinks.enum */ "./src/app/root-shared/enums/pageLinks.enum.ts");
var bodymovin = __webpack_require__(/*! lottie-web */ "lottie-web");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(activatedRoute, router, renderer) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.renderer = renderer;
        this.destroySubject = new rxjs_1.Subject();
        this.isScrollDown = false;
        this.isHeaderBlack = false;
        this.isHomePage = false;
        this.isShowPreloader = false;
        this.isAlwaysSmall = false;
        this.isAnimationEnded = false;
        this.animateTo = "";
        this.PagesType = pages_enum_1.PagesType;
        this.PagesLinksMap = pageLinks_enum_1.PagesLinksMap;
        this.animationComplete = false;
        this.isOpenMobileMenu = false;
        this.hideBigMobLogo = false;
        this.router.events
            .pipe(operators_1.takeUntil(this.destroySubject), operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }), operators_1.map(function () { return _this.activatedRoute.snapshot; }), operators_1.map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .subscribe(function (route) {
            _this.isOpenMobileMenu = false;
            if (route.data.headerBlackOverlay) {
                _this.isHeaderBlack = true;
                _this.isAlwaysSmall = true;
            }
            else {
                _this.isHeaderBlack = false;
                _this.isAlwaysSmall = false;
            }
            if (route.data.animatedLogo) {
                _this.isShowPreloader = true;
                _this.headerAnimation.playSpeed = 1;
            }
            else {
                _this.isShowPreloader = false;
                _this.headerAnimation.playSpeed = 100;
            }
            if (window.innerWidth < 1200) {
                if (route.data.hideMobBigLogo) {
                    _this.hideBigMobLogo = true;
                }
                else {
                    _this.hideBigMobLogo = false;
                }
            }
        });
    }
    HeaderComponent.prototype.onWindowScroll = function ($event) {
        var pageYOffset = window.pageYOffset;
        if (pageYOffset > 50) {
            this.isScrollDown = true;
        }
        else {
            this.isScrollDown = false;
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setBodyDisabled(true);
        this.headerAnimation = bodymovin.loadAnimation({
            container: document.getElementById("js-logo"),
            renderer: "svg",
            loop: false,
            autoplay: true,
            path: "./assets/data/data.json"
        });
        this.headerAnimation.onComplete = function () {
            var windowWidth = window.innerWidth;
            if (windowWidth > 1200) {
                _this.animateTo = "move";
            }
            else {
                _this.animateTo = "moveMobile";
            }
            _this.animationComplete = true;
            _this.setBodyDisabled(false);
        };
    };
    HeaderComponent.prototype.moveToHeaderDone = function (e) {
        if (e.toState === "move" || e.toState === "moveMobile") {
            this.isAnimationEnded = true;
        }
    };
    HeaderComponent.prototype.manageMobileMenu = function () {
        this.isOpenMobileMenu = !this.isOpenMobileMenu;
        if (this.isOpenMobileMenu) {
            this.setBodyDisabled(true);
        }
        else {
            this.setBodyDisabled(false);
        }
    };
    HeaderComponent.prototype.setBodyDisabled = function (condition) {
        if (condition) {
            this.renderer.setElementClass(document.body, "-disabled", true);
        }
        else {
            this.renderer.setElementClass(document.body, "-disabled", false);
        }
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.destroySubject.next();
    };
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/root-shared/components/scroll-top-component/scroll-top.component.ngfactory.js":
/*!***********************************************************************************************!*\
  !*** ./src/app/root-shared/components/scroll-top-component/scroll-top.component.ngfactory.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i2 = __webpack_require__(/*! ./scroll-top.component */ "./src/app/root-shared/components/scroll-top-component/scroll-top.component.ts");
var styles_ScrollTopComponent = [];
var RenderType_ScrollTopComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ScrollTopComponent, data: {} });
exports.RenderType_ScrollTopComponent = RenderType_ScrollTopComponent;
function View_ScrollTopComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "button", [["class", "scroll-top-btn "]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.handleGoTop() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "-show": 0 }), (_l()(), i0.ɵeld(3, 0, null, null, 0, "i", [["class", "icon-chevron-up"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "scroll-top-btn "; var currVal_1 = _ck(_v, 2, 0, _co.isShow); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
exports.View_ScrollTopComponent_0 = View_ScrollTopComponent_0;
function View_ScrollTopComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "scroll-top-component", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ScrollTopComponent_0, RenderType_ScrollTopComponent)), i0.ɵdid(1, 49152, null, 0, i2.ScrollTopComponent, [], null, null)], null, null); }
exports.View_ScrollTopComponent_Host_0 = View_ScrollTopComponent_Host_0;
var ScrollTopComponentNgFactory = i0.ɵccf("scroll-top-component", i2.ScrollTopComponent, View_ScrollTopComponent_Host_0, {}, {}, []);
exports.ScrollTopComponentNgFactory = ScrollTopComponentNgFactory;


/***/ }),

/***/ "./src/app/root-shared/components/scroll-top-component/scroll-top.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/root-shared/components/scroll-top-component/scroll-top.component.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScrollTopComponent = /** @class */ (function () {
    function ScrollTopComponent() {
        this.isShow = false;
    }
    ScrollTopComponent.prototype.onWindowScroll = function ($event) {
        var scrollOnTop = 0;
        var pageYOffset = window.pageYOffset;
        if (pageYOffset > 1000) {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    };
    ScrollTopComponent.prototype.handleGoTop = function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 100);
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    };
    return ScrollTopComponent;
}());
exports.ScrollTopComponent = ScrollTopComponent;


/***/ }),

/***/ "./src/app/root-shared/data/expertise-shorts.ts":
/*!******************************************************!*\
  !*** ./src/app/root-shared/data/expertise-shorts.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpertiseShortsItems = [
    {
        title: "Спектр юридических практик",
        description: "Компания SLR предоставляет широкий спектр юридического обслуживания и сопровождения, в рамках которого владелец и руководитель бизнеса смогут сосредоточиться в своей профессиональной деятельности с уверенностью и комфортом, и не будут тратить время и силы на совместное изучение со штатным юристом многотомных юридических норм и правил.",
        link: "expertise/the-range-of-legal-practices"
    },
    {
        title: "Бухгалтерский учет, налоговое планирование и делопроизводство",
        description: "Качественное ведение бухгалтерского и кадрового учета с охраной труда – гарантия уверенности и спокойствия компании, играющей «в долгую» в Украине с перспективой выхода на глобальные рынки. Однако далеко не каждая компания может себе позволить выделение отдельного кабинета и содержание в штате бухгалтера, кадровика и специалиста по охране труда и технике безопасности, особенно с багажом знаний и практик в нужной отрасли.",
        link: "expertise/accounting"
    },
    {
        title: "Маркетинговые и PR стратегии, занятие позиций и ниш",
        description: "Мы занимаемся стратегическим позиционированием, выявлением ниш, формированием отличий компаний от конкурентов, наблюдаем за целевой аудиторией, рынком и конкурентами, разрабатываем ассиметричные маркетинговые тактики — применимые и результативные. Маркетинг и PR наших клиентов мы интегрируем в их бизнес-модель и структуру безопасности капитала компании, в HR и в продажи.",
        link: "expertise/marketing-and-pr"
    },
    {
        title: "Антикризисное управление и консультирование",
        description: "Услуги внешнего специалиста по управлению во время кризиса и низких горизонтов планирования в бизнесе становятся гораздо востребованнее, чем в более спокойный период. Сотрудники компании SLR вытягивают предприятия из долговых ям, форматируют умы акционеров и руководителей, противостоят неконкурентным методам ведения бизнеса, глубоко вникают в аналитику, перестраивают отчётность и предлагают к замене сотрудников, которые находятся не на своем месте.",
        link: "expertise/crisis-management"
    },
    {
        title: "Медиация, разрешение внешних конфликтов и внутренних споров",
        description: "Мы стремимся помочь сторонам выработать общее понимание конфликта и действовать в направлении урегулирования спора, мы сосредоточены на общем видении будущего, организовываем переговоры между сторонами и присутствуем на них сами, структурируем процессы для достижения четких отношений. Сотрудники SLR всегда хладнокровны, эмоционально не принимают позицию одной из стороны конфликта. Мы не подвержены влиянию, манипуляциям, угрозам и подкупам конфликтующих сторон для склонения нашей объективной позиции.",
        link: "expertise/mediation"
    },
    {
        title: "Консультации в сфере безопасности и практическое сопровождение",
        description: "Когда Вы достигли успеха в созидании, становитесь состоятельным и известным - Вы автоматически привлекаете к себе внимание людей, склонных к разрушению, которые хотят «восстановить баланс». Так, к сожалению, устроен мир бизнеса, в котором большие пожирают меньших. В периоды развития компании, вопросам комплексной безопасности следует уделять внимание не меньше, чем вопросам управления и финансовой платежеспособности.",
        link: "expertise/security-consulting"
    },
    {
        title: "Траблшутинг. Решение сложных и невозможных задач",
        description: "Траблшутинг – это технологии решения тупиковых проблем с последующей оптимизацией процессов в бизнесе. Траблшутер – это человек со стороны, который приходит в компанию с целью решения какой-то одной конкретной задачи и уходит из неё после устранения проблемы.",
        link: "expertise/trashshuting"
    },
    {
        title: "Другие услуги по обеспечению комфорта и добавлению времени",
        description: "Сотрудники компании SLR помогают добавить времени и создать оптимальный комфорт клиенту, забирая на себя решение различных непрофильных задач, содействуя фокусировке его внимания на важных процессах.",
        link: "expertise/other-services"
    }
];


/***/ }),

/***/ "./src/app/root-shared/data/industry-short.ts":
/*!****************************************************!*\
  !*** ./src/app/root-shared/data/industry-short.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustryShortsItems = [
    {
        title: "IT-компаниям",
        description: "Вы когда-то были или являетесь фрилансером или сотрудником крупной аутсорсинговой компании, умеете хорошо писать код и делать другие вещи круто, но потом осознали, что радости работа на других не приносит, и решили цивилизованно работать на себя вместе с единомышленниками. Вы не знаете, с чего начать, а мысли о бюрократических хлопотах, связанных с открытием компании и поддержании её деятельности в рамках закона, вызывают у вас ужас и непонимание? ",
        link: "industry/it-companies",
        modal: true
    },
    {
        title: "Call-центрам",
        description: "В Украине уже работает достаточное количество международных call- центров. Некоторые из них являются нашими клиентами длительное время. Мы понимаем задачи, проблемы и другие потребности владельцев данного бизнеса: регистрация компании, поиск офиса, сопровождение договоров, поиск директора и бухгалтера, сдача налоговых отчетов, получение вида на жительство сотрудников-иностранцев в Украине, внедрение систем безопасности деятельности и не только.",
        link: "industry/call-centers",
        modal: true
    },
    {
        title: "Креативному классу",
        description: "Если Вы относите себя к прогрессивному креативному классу, создаете софт, одежду, музыку, пишите картины, с помощью дизайна упорядочиваете мир или занимаетесь другой творческой созидательной деятельностью самостоятельно или с группой единомышленников, и Вам не хватает системных управленческих и юридических навыков – обращайтесь к нам. Мы поддерживаем таких, как Вы, и гордимся этим. Без художников и ремесленников никогда бы не произошли технологические прорывы, общество было бы мрачным и угрюмым. Если мы увидим огонь в Ваших глазах и неуемное желание действовать и улучшать мир – мы предложим Вам огромные скидки на наши услуги, а возможно и поможем Вам бесплатно.",
        link: "industry/сreative-class",
        modal: true
    },
    {
        title: "Реальному сектору экономики. Оцифровка рабочих процессов и построение уникальной бизнес-модели",
        description: "Умение строить и перестраивать модели ведения бизнеса под изменяющиеся внешние условия становится важнейшим фактором достижения успеха. Усовершенствование бизнес-модели предполагает внутренние надстройки бизнеса в сочетании инноваций процессов и ресурсов, внешние - переосмысленные отношения с партнерами, клиентами и государством. ",
        link: "industry/real-sector-economy",
        modal: false
    },
    {
        title: "Клиентам украинских аутсорсинговых компаний и заказчикам цифровых решений",
        description: "Украинские IT-компании разрабатывают 95% своих цифровых решений на экспорт, в том числе 90% для стран Северной Америки и Европы. У иностранных компаний-заказчиков периодически возникают потребности в решении различных задач и разрешении деструктивных ситуаций, связанных с деятельностью партнеров в Украине.",
        link: "industry/clients-of-ukrainian-outsourcing-companies",
        modal: false
    },
    {
        title: "Сопровождение преемственности бизнеса между поколениями, наставничество",
        description: "Семейные бизнесы в мире превосходят по эффективности публичные компании, лидерство в рейтинге Forbes принадлежат именно семейным холдингам. Большинство крупных и средних украинских компаний начали свой подъем в 90-е годы ХХ века. Владельцы, руководящие своими компаниями более 20 лет, успели утомиться от постоянно меняющихся условий ведения бизнеса и задумались о преемственности. Наследники успели подрасти, получить образование и мотивацию продолжать семейное дело. Подготовить наследника в семейный бизнес под силу далеко не всем основателям. По статистике, только треть компаний успешно переходит в руки следующего поколения. Связано это в первую очередь с тем, что их владельцы не всегда создают правильные отношения с преемниками, не готовят их заранее к совместной деятельности, у наследников отсутствует нужные навыки и мотивация. Некоторые наследники выбирают не семейные компании и даже не те отрасли, в которых работает этот бизнес, а также – бывает масса случаев, когда наследники не способны становится преемниками. ",
        link: "industry/accompanying-intergenerational-business",
        modal: false
    }
];


/***/ }),

/***/ "./src/app/root-shared/enums/about-tabs.enum.ts":
/*!******************************************************!*\
  !*** ./src/app/root-shared/enums/about-tabs.enum.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AboutTabs;
(function (AboutTabs) {
    AboutTabs[AboutTabs["About"] = 0] = "About";
    AboutTabs[AboutTabs["OurMission"] = 1] = "OurMission";
    AboutTabs[AboutTabs["Clients"] = 2] = "Clients";
})(AboutTabs = exports.AboutTabs || (exports.AboutTabs = {}));
exports.AboutTabsMap = new Map([
    [AboutTabs.About, "About"],
    [AboutTabs.OurMission, "OurMission"],
    [AboutTabs.Clients, "Clients"]
]);


/***/ }),

/***/ "./src/app/root-shared/enums/industry-type.enum.ts":
/*!*********************************************************!*\
  !*** ./src/app/root-shared/enums/industry-type.enum.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var map_to_select_options_1 = __webpack_require__(/*! @root-shared/utils/map-to-select-options */ "./src/app/root-shared/utils/map-to-select-options.ts");
var IndustryType;
(function (IndustryType) {
    IndustryType[IndustryType["FinanceAndTech"] = 0] = "FinanceAndTech";
    IndustryType[IndustryType["IT"] = 1] = "IT";
    IndustryType[IndustryType["Media"] = 2] = "Media";
    IndustryType[IndustryType["Fashion"] = 3] = "Fashion";
    IndustryType[IndustryType["ModerArt"] = 4] = "ModerArt";
    IndustryType[IndustryType["Production"] = 5] = "Production";
    IndustryType[IndustryType["Processing"] = 6] = "Processing";
    IndustryType[IndustryType["Sales"] = 7] = "Sales";
    IndustryType[IndustryType["Services"] = 8] = "Services";
    IndustryType[IndustryType["Others"] = 9] = "Others";
})(IndustryType = exports.IndustryType || (exports.IndustryType = {}));
exports.IndustryTypeMap = new Map([
    [IndustryType.FinanceAndTech, "Финансово-технологические"],
    [IndustryType.IT, "IT"],
    [IndustryType.Media, "Медиа"],
    [IndustryType.Fashion, "Fashion"],
    [IndustryType.ModerArt, "Современное искусство"],
    [IndustryType.Production, "Производство"],
    [IndustryType.Processing, "Переработка"],
    [IndustryType.Sales, "Продажи"],
    [IndustryType.Services, "Услуги"],
    [IndustryType.Others, "Другие сектора и направления"]
]);
exports.IndustryTypeOptions = map_to_select_options_1.mapToSelectOptions(exports.IndustryTypeMap);


/***/ }),

/***/ "./src/app/root-shared/enums/pageLinks.enum.ts":
/*!*****************************************************!*\
  !*** ./src/app/root-shared/enums/pageLinks.enum.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pages_enum_1 = __webpack_require__(/*! ./pages.enum */ "./src/app/root-shared/enums/pages.enum.ts");
exports.PagesLinksMap = new Map([
    [pages_enum_1.PagesType.Home, ""],
    [pages_enum_1.PagesType.About, "about"],
    [pages_enum_1.PagesType.Expertise, "expertise"],
    [pages_enum_1.PagesType.Industry, "industry"],
    [pages_enum_1.PagesType.Career, "career"],
    [pages_enum_1.PagesType.Infocenter, "infocenter"],
    [pages_enum_1.PagesType.Contacts, "contacts"]
]);


/***/ }),

/***/ "./src/app/root-shared/enums/pages.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/root-shared/enums/pages.enum.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PagesType;
(function (PagesType) {
    PagesType[PagesType["Home"] = 0] = "Home";
    PagesType[PagesType["About"] = 1] = "About";
    PagesType[PagesType["Expertise"] = 2] = "Expertise";
    PagesType[PagesType["Industry"] = 3] = "Industry";
    PagesType[PagesType["Career"] = 4] = "Career";
    PagesType[PagesType["Infocenter"] = 5] = "Infocenter";
    PagesType[PagesType["Contacts"] = 6] = "Contacts";
})(PagesType = exports.PagesType || (exports.PagesType = {}));
exports.PagesTypeMap = new Map([
    [PagesType.Home, "home"],
    [PagesType.About, "about"],
    [PagesType.Expertise, "expertise"],
    [PagesType.Industry, "industry"],
    [PagesType.Career, "career"],
    [PagesType.Infocenter, "infocenter"],
    [PagesType.Contacts, "contacts"]
]);


/***/ }),

/***/ "./src/app/root-shared/enums/services.enum.ts":
/*!****************************************************!*\
  !*** ./src/app/root-shared/enums/services.enum.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var map_to_select_options_1 = __webpack_require__(/*! @root-shared/utils/map-to-select-options */ "./src/app/root-shared/utils/map-to-select-options.ts");
var ServicesType;
(function (ServicesType) {
    ServicesType[ServicesType["TheRangeOfLegalPractices"] = 0] = "TheRangeOfLegalPractices";
    ServicesType[ServicesType["Accounting"] = 1] = "Accounting";
    ServicesType[ServicesType["MarketingAndPR"] = 2] = "MarketingAndPR";
    ServicesType[ServicesType["CrisisManagement"] = 3] = "CrisisManagement";
    ServicesType[ServicesType["Mediation"] = 4] = "Mediation";
    ServicesType[ServicesType["SecurityConsulting"] = 5] = "SecurityConsulting";
    ServicesType[ServicesType["Trashshuting"] = 6] = "Trashshuting";
    ServicesType[ServicesType["OtherServices"] = 7] = "OtherServices";
    ServicesType[ServicesType["ItCompanies"] = 8] = "ItCompanies";
    ServicesType[ServicesType["CallCenters"] = 9] = "CallCenters";
    ServicesType[ServicesType["CreativeClass"] = 10] = "CreativeClass";
    ServicesType[ServicesType["RealSectorEconomy"] = 11] = "RealSectorEconomy";
    ServicesType[ServicesType["ClientsOfUkrainianOutsourcing"] = 12] = "ClientsOfUkrainianOutsourcing";
    ServicesType[ServicesType["AccompanyingIntergenerationalBusiness"] = 13] = "AccompanyingIntergenerationalBusiness";
})(ServicesType = exports.ServicesType || (exports.ServicesType = {}));
exports.ServicesTypeMap = new Map([
    [ServicesType.TheRangeOfLegalPractices, "Спектр юридических практик"],
    [
        ServicesType.Accounting,
        "Бухгалтерский учет, налоговое планирование и делопроизводство"
    ],
    [
        ServicesType.MarketingAndPR,
        "Маркетинговые и PR стратегии, занятие позиций и ниш"
    ],
    [
        ServicesType.CrisisManagement,
        "Антикризисное управление и консультирование"
    ],
    [
        ServicesType.Mediation,
        "Медиация, разрешение внешних конфликтов и внутренних споров"
    ],
    [
        ServicesType.SecurityConsulting,
        "Консультации в сфере безопасности и практическое сопровождение"
    ],
    [
        ServicesType.Trashshuting,
        "Траблшутинг. Решение сложных и невозможных задач"
    ],
    [
        ServicesType.OtherServices,
        "Другие услуги по обеспечению комфорта и добавлению времени"
    ],
    [ServicesType.ItCompanies, "IT-компаниям"],
    [ServicesType.CallCenters, "Call-центрам"],
    [ServicesType.CreativeClass, "Креативному классу"],
    [
        ServicesType.RealSectorEconomy,
        "Реальному сектору экономики. Оцифровка рабочих процессов и построение уникальной бизнес-модели"
    ],
    [
        ServicesType.ClientsOfUkrainianOutsourcing,
        "Клиентам украинских аутсорсинговых компаний и заказчикам цифровых решений"
    ],
    [
        ServicesType.AccompanyingIntergenerationalBusiness,
        "Сопровождение преемственности бизнеса между поколениями, наставничество"
    ]
]);
exports.ServicesTypeOptions = map_to_select_options_1.mapToSelectOptions(exports.ServicesTypeMap);


/***/ }),

/***/ "./src/app/root-shared/guards/index.ts":
/*!*********************************************!*\
  !*** ./src/app/root-shared/guards/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./link.guard */ "./src/app/root-shared/guards/link.guard.ts"));


/***/ }),

/***/ "./src/app/root-shared/guards/link.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/root-shared/guards/link.guard.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var services_1 = __webpack_require__(/*! @root-shared/services */ "./src/app/root-shared/services/index.ts");
var LinkGuard = /** @class */ (function () {
    function LinkGuard(linkService, document) {
        this.linkService = linkService;
        this.document = document;
    }
    LinkGuard.prototype.canActivate = function (route, state) {
        var metaSettings = route.hasOwnProperty("data") ? route.data.meta : undefined;
        if (this.activeLink) {
            this.activeLink.remove();
        }
        if (metaSettings && metaSettings.url) {
            this.activeLink = this.linkService.addTag({
                rel: "canonical",
                href: metaSettings.url
            });
        }
        return true;
    };
    LinkGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    return LinkGuard;
}());
exports.LinkGuard = LinkGuard;


/***/ }),

/***/ "./src/app/root-shared/root-shared.module.ts":
/*!***************************************************!*\
  !*** ./src/app/root-shared/root-shared.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var services_1 = __webpack_require__(/*! ./services */ "./src/app/root-shared/services/index.ts");
var guards_1 = __webpack_require__(/*! ./guards */ "./src/app/root-shared/guards/index.ts");
var RootSharedModule = /** @class */ (function () {
    function RootSharedModule() {
    }
    RootSharedModule.forRoot = function () {
        return {
            ngModule: RootSharedModule,
            providers: [services_1.LinkService, guards_1.LinkGuard]
        };
    };
    return RootSharedModule;
}());
exports.RootSharedModule = RootSharedModule;


/***/ }),

/***/ "./src/app/root-shared/services/global.service.ts":
/*!********************************************************!*\
  !*** ./src/app/root-shared/services/global.service.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.isFormSuccess = new rxjs_1.BehaviorSubject(null);
    }
    return GlobalService;
}());
exports.GlobalService = GlobalService;


/***/ }),

/***/ "./src/app/root-shared/services/index.ts":
/*!***********************************************!*\
  !*** ./src/app/root-shared/services/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./link-service */ "./src/app/root-shared/services/link-service.ts"));
__export(__webpack_require__(/*! ./global.service */ "./src/app/root-shared/services/global.service.ts"));


/***/ }),

/***/ "./src/app/root-shared/services/link-service.ts":
/*!******************************************************!*\
  !*** ./src/app/root-shared/services/link-service.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var LinkService = /** @class */ (function () {
    function LinkService(rendererFactory, document) {
        this.rendererFactory = rendererFactory;
        this.document = document;
    }
    /**
     * Inject the State into the bottom of the <head>
     */
    LinkService.prototype.addTag = function (tag, forceCreation) {
        try {
            var renderer_1 = this.rendererFactory.createRenderer(this.document, {
                id: "-1",
                encapsulation: core_1.ViewEncapsulation.None,
                styles: [],
                data: {}
            });
            var link_1 = renderer_1.createElement("link");
            var head = this.document.head;
            var selector = this._parseSelector(tag);
            if (head === null) {
                throw new Error("<head> not found within DOCUMENT.");
            }
            Object.keys(tag).forEach(function (prop) {
                return renderer_1.setAttribute(link_1, prop, tag[prop]);
            });
            // [TODO]: get them to update the existing one (if it exists) ?
            renderer_1.appendChild(head, link_1);
            return link_1;
        }
        catch (e) {
            console.error("Error within linkService : ", e);
            return null;
        }
    };
    LinkService.prototype._parseSelector = function (tag) {
        // Possibly re-work this
        var attr = tag.rel ? "rel" : "hreflang";
        return attr + "=\"" + tag[attr] + "\"";
    };
    return LinkService;
}());
exports.LinkService = LinkService;


/***/ }),

/***/ "./src/app/root-shared/utils/forms-helper.ts":
/*!***************************************************!*\
  !*** ./src/app/root-shared/utils/forms-helper.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var FormGroupTypeSafe = /** @class */ (function (_super) {
    __extends(FormGroupTypeSafe, _super);
    function FormGroupTypeSafe(controls, validatorOrOpts, asyncValidator) {
        return _super.call(this, controls, validatorOrOpts, asyncValidator) || this;
    }
    return FormGroupTypeSafe;
}(forms_1.FormGroup));
exports.FormGroupTypeSafe = FormGroupTypeSafe;
var FormArrayEventType;
(function (FormArrayEventType) {
    FormArrayEventType[FormArrayEventType["Add"] = 0] = "Add";
    FormArrayEventType[FormArrayEventType["Remove"] = 1] = "Remove";
    FormArrayEventType[FormArrayEventType["Updated"] = 2] = "Updated";
    FormArrayEventType[FormArrayEventType["Reset"] = 3] = "Reset";
    FormArrayEventType[FormArrayEventType["LastControlChanged"] = 4] = "LastControlChanged";
})(FormArrayEventType = exports.FormArrayEventType || (exports.FormArrayEventType = {}));
var FormArrayTypeSafe = /** @class */ (function (_super) {
    __extends(FormArrayTypeSafe, _super);
    function FormArrayTypeSafe(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, controls, validatorOrOpts, asyncValidator) || this;
        _this.onControlChangedSubject = new rxjs_1.Subject();
        _this.onControlChanged = _this.onControlChangedSubject.asObservable();
        return _this;
    }
    FormArrayTypeSafe.prototype.push = function (control, isLast) {
        if (isLast === void 0) { isLast = true; }
        _super.prototype.push.call(this, control);
        this.onControlChangedSubject.next({
            index: this.length - 1,
            type: FormArrayEventType.Add,
            target: control,
            value: control.value
        });
    };
    FormArrayTypeSafe.prototype.insert = function (index, control) {
        _super.prototype.insert.call(this, index, control);
        this.onControlChangedSubject.next({
            index: index,
            type: FormArrayEventType.Add,
            target: control,
            value: control.value
        });
    };
    FormArrayTypeSafe.prototype.removeAt = function (index) {
        var control = this.controls[index];
        _super.prototype.removeAt.call(this, index);
        this.onControlChangedSubject.next({
            index: index,
            type: FormArrayEventType.Remove,
            target: control,
            value: control.value
        });
    };
    FormArrayTypeSafe.prototype.setControl = function (index, control) {
        _super.prototype.setControl.call(this, index, control);
        this.onControlChangedSubject.next({
            index: index,
            type: FormArrayEventType.Updated,
            target: control,
            value: control.value
        });
    };
    FormArrayTypeSafe.prototype.setValue = function (value, options) {
        _super.prototype.setValue.call(this, value, options);
        this.onControlChangedSubject.next({
            type: FormArrayEventType.Updated,
            target: this.controls,
            value: value
        });
    };
    FormArrayTypeSafe.prototype.reset = function (value, options) {
        _super.prototype.reset.call(this, value, options);
        this.onControlChangedSubject.next({
            type: FormArrayEventType.Reset,
            target: this.controls,
            value: value
        });
    };
    return FormArrayTypeSafe;
}(forms_1.FormArray));
exports.FormArrayTypeSafe = FormArrayTypeSafe;


/***/ }),

/***/ "./src/app/root-shared/utils/map-to-select-options.ts":
/*!************************************************************!*\
  !*** ./src/app/root-shared/utils/map-to-select-options.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mapToSelectOptions(mapList) {
    var result = [];
    mapList.forEach(function (label, value) {
        result.push({ value: value, label: label });
    });
    return result;
}
exports.mapToSelectOptions = mapToSelectOptions;


/***/ }),

/***/ "./src/app/root-shared/utils/mark-form-control.ts":
/*!********************************************************!*\
  !*** ./src/app/root-shared/utils/mark-form-control.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
exports.markFormControl = {
    used: function (control, updateValueAndValidity) {
        if (updateValueAndValidity === void 0) { updateValueAndValidity = true; }
        control.markAsDirty({ onlySelf: true });
        control.markAsTouched({ onlySelf: true });
        var childControls = [];
        if (control instanceof forms_1.FormArray) {
            childControls = control.controls;
        }
        else if (control instanceof forms_1.FormGroup) {
            childControls = Object.values(control.controls);
        }
        else if (control instanceof forms_1.FormControl && updateValueAndValidity) {
            control.updateValueAndValidity();
        }
        childControls.forEach(function (childControl) {
            exports.markFormControl.used(childControl);
        });
    },
    unused: function (control) {
        control.markAsPristine({ onlySelf: true });
        control.markAsUntouched({ onlySelf: true });
        var childControls = [];
        if (control instanceof forms_1.FormArray) {
            childControls = control.controls;
        }
        else if (control instanceof forms_1.FormGroup) {
            childControls = Object.values(control.controls);
        }
        childControls.forEach(function (childControl) {
            exports.markFormControl.unused(childControl);
        });
    }
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Sources\DevpaceDemonstrations\SLS\SLS.Web\src\main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@agm/core/core.module":
/*!****************************************!*\
  !*** external "@agm/core/core.module" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/core.module");

/***/ }),

/***/ "@agm/core/directives/map":
/*!*******************************************!*\
  !*** external "@agm/core/directives/map" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/directives/map");

/***/ }),

/***/ "@agm/core/directives/marker":
/*!**********************************************!*\
  !*** external "@agm/core/directives/marker" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/directives/marker");

/***/ }),

/***/ "@agm/core/services/fit-bounds":
/*!************************************************!*\
  !*** external "@agm/core/services/fit-bounds" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/fit-bounds");

/***/ }),

/***/ "@agm/core/services/google-maps-api-wrapper":
/*!*************************************************************!*\
  !*** external "@agm/core/services/google-maps-api-wrapper" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/google-maps-api-wrapper");

/***/ }),

/***/ "@agm/core/services/managers/circle-manager":
/*!*************************************************************!*\
  !*** external "@agm/core/services/managers/circle-manager" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/circle-manager");

/***/ }),

/***/ "@agm/core/services/managers/data-layer-manager":
/*!*****************************************************************!*\
  !*** external "@agm/core/services/managers/data-layer-manager" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/data-layer-manager");

/***/ }),

/***/ "@agm/core/services/managers/info-window-manager":
/*!******************************************************************!*\
  !*** external "@agm/core/services/managers/info-window-manager" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/info-window-manager");

/***/ }),

/***/ "@agm/core/services/managers/kml-layer-manager":
/*!****************************************************************!*\
  !*** external "@agm/core/services/managers/kml-layer-manager" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/kml-layer-manager");

/***/ }),

/***/ "@agm/core/services/managers/marker-manager":
/*!*************************************************************!*\
  !*** external "@agm/core/services/managers/marker-manager" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/marker-manager");

/***/ }),

/***/ "@agm/core/services/managers/polygon-manager":
/*!**************************************************************!*\
  !*** external "@agm/core/services/managers/polygon-manager" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/polygon-manager");

/***/ }),

/***/ "@agm/core/services/managers/polyline-manager":
/*!***************************************************************!*\
  !*** external "@agm/core/services/managers/polyline-manager" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/polyline-manager");

/***/ }),

/***/ "@agm/core/services/managers/rectangle-manager":
/*!****************************************************************!*\
  !*** external "@agm/core/services/managers/rectangle-manager" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/rectangle-manager");

/***/ }),

/***/ "@agm/core/services/maps-api-loader/lazy-maps-api-loader":
/*!**************************************************************************!*\
  !*** external "@agm/core/services/maps-api-loader/lazy-maps-api-loader" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/maps-api-loader/lazy-maps-api-loader");

/***/ }),

/***/ "@agm/core/services/maps-api-loader/maps-api-loader":
/*!*********************************************************************!*\
  !*** external "@agm/core/services/maps-api-loader/maps-api-loader" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/maps-api-loader/maps-api-loader");

/***/ }),

/***/ "@agm/core/utils/browser-globals":
/*!**************************************************!*\
  !*** external "@agm/core/utils/browser-globals" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/utils/browser-globals");

/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@ng-select/ng-select":
/*!***************************************!*\
  !*** external "@ng-select/ng-select" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-select/ng-select");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "@ngx-meta/core":
/*!*********************************!*\
  !*** external "@ngx-meta/core" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngx-meta/core");

/***/ }),

/***/ "angulartics2":
/*!*******************************!*\
  !*** external "angulartics2" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("angulartics2");

/***/ }),

/***/ "angulartics2/ga":
/*!**********************************!*\
  !*** external "angulartics2/ga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("angulartics2/ga");

/***/ }),

/***/ "angulartics2/gtm":
/*!***********************************!*\
  !*** external "angulartics2/gtm" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("angulartics2/gtm");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "lottie-web":
/*!*****************************!*\
  !*** external "lottie-web" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lottie-web");

/***/ }),

/***/ "ng-lottie/dist/esm/src/lottieAnimationView.module":
/*!********************************************************************!*\
  !*** external "ng-lottie/dist/esm/src/lottieAnimationView.module" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ng-lottie/dist/esm/src/lottieAnimationView.module");

/***/ }),

/***/ "ngx-bootstrap":
/*!********************************!*\
  !*** external "ngx-bootstrap" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-bootstrap");

/***/ }),

/***/ "ngx-bootstrap/component-loader":
/*!*************************************************!*\
  !*** external "ngx-bootstrap/component-loader" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-bootstrap/component-loader");

/***/ }),

/***/ "ngx-bootstrap/dropdown":
/*!*****************************************!*\
  !*** external "ngx-bootstrap/dropdown" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-bootstrap/dropdown");

/***/ }),

/***/ "ngx-bootstrap/modal":
/*!**************************************!*\
  !*** external "ngx-bootstrap/modal" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-bootstrap/modal");

/***/ }),

/***/ "ngx-bootstrap/positioning":
/*!********************************************!*\
  !*** external "ngx-bootstrap/positioning" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-bootstrap/positioning");

/***/ }),

/***/ "ngx-bootstrap/tabs":
/*!*************************************!*\
  !*** external "ngx-bootstrap/tabs" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-bootstrap/tabs");

/***/ }),

/***/ "ngx-bootstrap/tooltip":
/*!****************************************!*\
  !*** external "ngx-bootstrap/tooltip" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-bootstrap/tooltip");

/***/ }),

/***/ "ngx-slick-carousel":
/*!*************************************!*\
  !*** external "ngx-slick-carousel" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-slick-carousel");

/***/ }),

/***/ "rellax":
/*!*************************!*\
  !*** external "rellax" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rellax");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map