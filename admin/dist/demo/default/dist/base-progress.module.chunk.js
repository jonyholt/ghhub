webpackJsonp(["base-progress.module"],{

/***/ "./src/app/theme/pages/default/components/base/base-progress/base-progress.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\" appunwraptag=\"\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto\">\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\n\t\t\t\tProgress\n\t\t\t</h3>\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tBase\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tProgress\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- END: Subheader -->\n<div class=\"m-content\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-6\">\n\t\t\t<!--begin::Portlet-->\n\t\t\t<div class=\"m-portlet\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\tBasic Progress Bars\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t<!--begin::Section-->\n\t\t\t\t\t<div class=\"m-section m-section--last\">\n\t\t\t\t\t\t<span class=\"m-section__sub\">\n\t\t\t\t\t\t\tProgress components are built with two HTML elements, some CSS to set the width, and a few attributes.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<div class=\"m-section__content\">\n\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--end::Section-->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--end::Portlet-->  \t\t<!--begin::Portlet-->\n\t\t\t<div class=\"m-portlet\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\tCustomizing\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--end::Portlet-->  \t\t<!--begin::Portlet-->\n\t\t\t<div class=\"m-portlet\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\tSizing\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t<!--begin::Section-->\n\t\t\t\t\t<div class=\"m-section\">\n\t\t\t\t\t\t<h3 class=\"m-section__heading\">\n\t\t\t\t\t\t\tSizing\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t<span class=\"m-section__sub\">\n\t\t\t\t\t\t\tUse\n\t\t\t\t\t\t\t<code>\n\t\t\t\t\t\t\t.m-progress--sm\n\t\t\t\t\t\t</code>\n\t\t\t\t\t\tclass to change progress size to small:\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"m-section__content\">\n\t\t\t\t\t\t<div class=\"progress m-progress--sm\">\n\t\t\t\t\t\t\t<div class=\"progress-bar m--bg-primary\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t\t<div class=\"progress m-progress--sm\">\n\t\t\t\t\t\t\t<div class=\"progress-bar m--bg-accent\" role=\"progressbar\" style=\"width: 50%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t\t<div class=\"progress m-progress--sm\">\n\t\t\t\t\t\t\t<div class=\"progress-bar m--bg-warning\" role=\"progressbar\" style=\"width: 75%;\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t\t<div class=\"progress m-progress--sm\">\n\t\t\t\t\t\t\t<div class=\"progress-bar m--bg-danger\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\n\t\t\t\t\t<span class=\"m-section__sub\">\n\t\t\t\t\t\tUse\n\t\t\t\t\t\t<code>\n\t\t\t\t\t\t.m-progress--lg\n\t\t\t\t\t</code>\n\t\t\t\t\tclass to change progress size to large:\n\t\t\t\t</span>\n\t\t\t\t<div class=\"m-section__content\">\n\t\t\t\t\t<div class=\"progress m-progress--lg\">\n\t\t\t\t\t\t<div class=\"progress-bar m--bg-primary\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t<div class=\"progress m-progress--lg\">\n\t\t\t\t\t\t<div class=\"progress-bar m--bg-accent\" role=\"progressbar\" style=\"width: 50%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t<div class=\"progress m-progress--lg\">\n\t\t\t\t\t\t<div class=\"progress-bar m--bg-warning\" role=\"progressbar\" style=\"width: 75%;\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t<div class=\"progress m-progress--lg\">\n\t\t\t\t\t\t<div class=\"progress-bar m--bg-danger\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"m-separator m-separator--dashed\"></div>\n\t\t\t\t<h3 class=\"m-section__heading\">\n\t\t\t\t\tCustom Height\n\t\t\t\t</h3>\n\t\t\t\t<span class=\"m-section__sub\">\n\t\t\t\t\tSet a height value on the\n\t\t\t\t\t<code>\n\t\t\t\t\t.progress-bar\n\t\t\t\t</code>\n\t\t\t\t, so if you change that value the outer\n\t\t\t\t<code>\n\t\t\t\t.progress\n\t\t\t</code>\n\t\t\twill automatically resize accordingly.\n\t\t</span>\n\t\t<div class=\"m-section__content\">\n\t\t\t<div class=\"progress\" style=\"height: 1px;\">\n\t\t\t\t<div class=\"progress-bar m--bg-info\" role=\"progressbar\" style=\"width: 65%;\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t<div class=\"progress\" style=\"height: 5px;\">\n\t\t\t\t<div class=\"progress-bar m--bg-success\" role=\"progressbar\" style=\"width: 65%;\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t<div class=\"progress\" style=\"height: 10px;\">\n\t\t\t\t<div class=\"progress-bar m--bg-accent\" role=\"progressbar\" style=\"width: 65%;\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t<div class=\"progress\" style=\"height: 15px;\">\n\t\t\t\t<div class=\"progress-bar m--bg-brand\" role=\"progressbar\" style=\"width: 65%;\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--end::Section-->\n</div>\n</div>\n<!--end::Portlet-->\n</div>\n<div class=\"col-lg-6\">\n\t<!--begin::Portlet-->\n\t<div class=\"m-portlet\">\n\t\t<div class=\"m-portlet__head\">\n\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\tProgress States\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"m-portlet__body\">\n\t\t\t<!--begin::Section-->\n\t\t\t<div class=\"m-section\">\n\t\t\t\t<h3 class=\"m-section__heading\">\n\t\t\t\t\tBackgrounds\n\t\t\t\t</h3>\n\t\t\t\t<span class=\"m-section__sub\">\n\t\t\t\t\tUse state utility classes to change the appearance of individual progress bars.\n\t\t\t\t</span>\n\t\t\t\t<div class=\"m-section__content\">\n\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t<div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t<div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t<div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--end::Section-->  \t\t\t\t<!--begin::Section-->\n\t\t\t<div class=\"m-section m-section--last\">\n\t\t\t\t<h3 class=\"m-section__heading\">\n\t\t\t\t\tMultiple bars\n\t\t\t\t</h3>\n\t\t\t\t<span class=\"m-section__sub\">\n\t\t\t\t\tInclude multiple progress bars in a progress component if you need.\n\t\t\t\t</span>\n\t\t\t\t<div class=\"m-section__content\">\n\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 30%\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t<div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" style=\"width: 35%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t<div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t<div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--end::Section-->\n\t\t</div>\n\t</div>\n\t<!--end::Portlet-->  \t\t<!--begin::Portlet-->\n\t<div class=\"m-portlet\">\n\t\t<div class=\"m-portlet__head\">\n\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\tStriped\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"m-portlet__body\">\n\t\t\t<!--begin::Section-->\n\t\t\t<div class=\"m-section\">\n\t\t\t\t<span class=\"m-section__sub\">\n\t\t\t\t\tAdd\n\t\t\t\t\t<code>\n\t\t\t\t\t.progress-bar-striped\n\t\t\t\t</code>\n\t\t\t\tto any\n\t\t\t\t<code>\n\t\t\t\t.progress-bar\n\t\t\t</code>\n\t\t\tto apply a stripe via CSS gradient over the progress bar’s background color.\n\t\t</span>\n\t\t<div class=\"m-section__content\">\n\t\t\t<div class=\"progress\">\n\t\t\t\t<div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t<div class=\"progress\">\n\t\t\t\t<div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t<div class=\"progress\">\n\t\t\t\t<div class=\"progress-bar progress-bar-striped bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t<div class=\"progress\">\n\t\t\t\t<div class=\"progress-bar progress-bar-striped bg-warning\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"m--space-10\"></div>\n\t\t\t<div class=\"progress\">\n\t\t\t\t<div class=\"progress-bar progress-bar-striped bg-danger\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--end::Section-->  \t\t\t\t<!--begin::Section-->\n\t<div class=\"m-section m-section--last\">\n\t\t<span class=\"m-section__sub\">\n\t\t\tThe striped gradient can also be animated. Add\n\t\t\t<code>\n\t\t\t.progress-bar-animated\n\t\t</code>\n\t\tto\n\t\t<code>\n\t\t.progress-bar\n\t</code>\n\tto animate the stripes right to left via CSS3 animations.\n</span>\n<div class=\"m-section__content\">\n\t<div class=\"progress\">\n\t\t<div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%\"></div>\n\t</div>\n\t<div class=\"m--space-10\"></div>\n\t<div class=\"progress\">\n\t\t<div class=\"progress-bar progress-bar-striped progress-bar-animated  bg-warning\" role=\"progressbar\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 35%\"></div>\n\t</div>\n\t<div class=\"m--space-10\"></div>\n\t<div class=\"progress\">\n\t\t<div class=\"progress-bar progress-bar-striped progress-bar-animated  bg-success\" role=\"progressbar\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 65%\"></div>\n\t</div>\n</div>\n</div>\n<!--end::Section-->\n</div>\n</div>\n<!--end::Portlet-->\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/pages/default/components/base/base-progress/base-progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseProgressComponent = (function () {
    function BaseProgressComponent() {
    }
    BaseProgressComponent.prototype.ngOnInit = function () {
    };
    BaseProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-base-progress",
            template: __webpack_require__("./src/app/theme/pages/default/components/base/base-progress/base-progress.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], BaseProgressComponent);
    return BaseProgressComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/components/base/base-progress/base-progress.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseProgressModule", function() { return BaseProgressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_progress_component__ = __webpack_require__("./src/app/theme/pages/default/components/base/base-progress/base-progress.component.ts");
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
                "component": __WEBPACK_IMPORTED_MODULE_3__base_progress_component__["a" /* BaseProgressComponent */]
            }
        ]
    }
];
var BaseProgressModule = (function () {
    function BaseProgressModule() {
    }
    BaseProgressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__base_progress_component__["a" /* BaseProgressComponent */]
            ]
        })
    ], BaseProgressModule);
    return BaseProgressModule;
}());



/***/ })

});
//# sourceMappingURL=base-progress.module.chunk.js.map