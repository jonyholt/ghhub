webpackJsonp(["widgets-bootstrap-multipleselectsplitter.module"],{

/***/ "./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\" appunwraptag=\"\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto\">\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\n\t\t\t\tBootstrap Multiple Select Splitter\n\t\t\t</h3>\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForms\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForm Widgets\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tMultiple Select Splitter\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- END: Subheader -->\n<div class=\"m-content\">\n\t<!--begin::Portlet-->\n\t<div class=\"m-portlet\">\n\t\t<div class=\"m-portlet__head\">\n\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\tBootstrap Multiple Select Splitter Examples\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--begin::Form-->\n\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\n\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tStandard Group Select\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t\t<optgroup label=\"Category 1\">\n\t\t\t\t\t\t\t\t<option value=\"1\">\n\t\t\t\t\t\t\t\t\tChoice 1\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"2\">\n\t\t\t\t\t\t\t\t\tChoice 2\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"3\">\n\t\t\t\t\t\t\t\t\tChoice 3\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"4\">\n\t\t\t\t\t\t\t\t\tChoice 4\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Category 2\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tChoice 5\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tChoice 6\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tChoice 7\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tChoice 8\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Category 3\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tChoice 9\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tChoice 10\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tChoice 11\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tChoice 12\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tSelect Splitter 1\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<select class=\"form-control\" id=\"m_multipleselectsplitter_1\">\n\t\t\t\t\t\t\t<optgroup label=\"Category 1\">\n\t\t\t\t\t\t\t\t<option value=\"1\" >\n\t\t\t\t\t\t\t\t\tChoice 1\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"2\">\n\t\t\t\t\t\t\t\t\tChoice 2\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"3\">\n\t\t\t\t\t\t\t\t\tChoice 3\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"4\">\n\t\t\t\t\t\t\t\t\tChoice 4\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Category 2\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tChoice 5\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\" selected>\n\t\t\t\t\t\t\t\t\tChoice 6\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tChoice 7\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tChoice 8\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Category 3\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tChoice 9\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tChoice 10\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tChoice 11\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tChoice 12\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tSelect Splitter 2\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<select class=\"form-control\" id=\"m_multipleselectsplitter_2\">\n\t\t\t\t\t\t\t<optgroup label=\"Group 1\">\n\t\t\t\t\t\t\t\t<option value=\"1\" selected>\n\t\t\t\t\t\t\t\t\tOption 1\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"2\">\n\t\t\t\t\t\t\t\t\tOption 2\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"3\">\n\t\t\t\t\t\t\t\t\tOption 3\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"4\">\n\t\t\t\t\t\t\t\t\tOption 4\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Group 2\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tOption 5\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tOption 6\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tOption 7\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tOption 8\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Group 3\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tOption 9\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tOption 10\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tOption 11\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tOption 12\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Group 4\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tOption 13\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tOption 14\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tOption 15\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tOption 16\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Group 5\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tOption 17\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tOption 18\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tOption 19\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tOption 20\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t<div class=\"m-form__actions m-form__actions\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-9 ml-lg-auto\">\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t<!--end::Form-->\n\t</div>\n\t<!--end::Portlet-->\n</div>\n"

/***/ }),

/***/ "./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsBootstrapMultipleselectsplitterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__ = __webpack_require__("./src/app/_services/script-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetsBootstrapMultipleselectsplitterComponent = (function () {
    function WidgetsBootstrapMultipleselectsplitterComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapMultipleselectsplitterComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapMultipleselectsplitterComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-bootstrap-multipleselectsplitter', ['assets/demo/default/custom/components/forms/widgets/bootstrap-multipleselectsplitter.js']);
    };
    WidgetsBootstrapMultipleselectsplitterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-widgets-bootstrap-multipleselectsplitter",
            template: __webpack_require__("./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__["a" /* ScriptLoaderService */]])
    ], WidgetsBootstrapMultipleselectsplitterComponent);
    return WidgetsBootstrapMultipleselectsplitterComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsBootstrapMultipleselectsplitterModule", function() { return WidgetsBootstrapMultipleselectsplitterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_bootstrap_multipleselectsplitter_component__ = __webpack_require__("./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__ = __webpack_require__("./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_component__ = __webpack_require__("./src/app/theme/pages/default/default.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_5__default_component__["a" /* DefaultComponent */],
        "children": [
            {
                "path": "",
                "component": __WEBPACK_IMPORTED_MODULE_3__widgets_bootstrap_multipleselectsplitter_component__["a" /* WidgetsBootstrapMultipleselectsplitterComponent */]
            }
        ]
    }
];
var WidgetsBootstrapMultipleselectsplitterModule = (function () {
    function WidgetsBootstrapMultipleselectsplitterModule() {
    }
    WidgetsBootstrapMultipleselectsplitterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__widgets_bootstrap_multipleselectsplitter_component__["a" /* WidgetsBootstrapMultipleselectsplitterComponent */]
            ]
        })
    ], WidgetsBootstrapMultipleselectsplitterModule);
    return WidgetsBootstrapMultipleselectsplitterModule;
}());



/***/ })

});
//# sourceMappingURL=widgets-bootstrap-multipleselectsplitter.module.chunk.js.map