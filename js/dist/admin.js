module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/admin/addFilesystemPane.js":
/*!****************************************!*\
  !*** ./src/admin/addFilesystemPane.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/AdminNav */ "flarum/components/AdminNav");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/AdminLinkButton */ "flarum/components/AdminLinkButton");
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_FilesystemPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FilesystemPage */ "./src/admin/components/FilesystemPage.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  app.routes.fof_filesystem = {
    path: '/fof-filesystem',
    component: _components_FilesystemPage__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  };

  app.extensionSettings['fof-filesystem'] = function () {
    return m.route(app.route('fof_filesystem'));
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'items', function (items) {
    items.add('fof_filesystem', flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      href: app.route('fof_filesystem'),
      icon: 'fas fa-boxes',
      children: app.translator.trans('fof-filesystem.admin.nav.label'),
      description: app.translator.trans('fof-filesystem.admin.nav.description')
    }));
  });
});

/***/ }),

/***/ "./src/admin/components/AdapterCard.js":
/*!*********************************************!*\
  !*** ./src/admin/components/AdapterCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdapterCard; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AdapterSettingsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdapterSettingsModal */ "./src/admin/components/AdapterSettingsModal.js");
/* harmony import */ var _RequiredPackageModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RequiredPackageModal */ "./src/admin/components/RequiredPackageModal.js");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_8__);










var AdapterCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AdapterCard, _Component);

  function AdapterCard() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AdapterCard.prototype;

  _proto.init = function init() {
    this.adapter = this.props.adapter;
    this.icon = this.props.icon;
    this.available = !!this.adapter['installed'];
    this.enabled = !!this.adapter['enabled'];
  };

  _proto.view = function view() {
    var _this = this;

    var controls = this.controls();
    return m("li", {
      className: 'ExtensionListItem ' + (!this.available ? 'disabled' : '')
    }, m("div", {
      className: "ExtensionListItem-content"
    }, m("span", {
      className: "ExtensionListItem-icon ExtensionIcon",
      onclick: function onclick() {
        return _this.available ? _this.settingsModal() : null;
      }
    }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default()(this.icon)), !controls.isEmpty() ? m(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "ExtensionListItem-controls",
      buttonClassName: "Button Button--icon Button--flat",
      menuClassName: "Dropdown-menu--right",
      icon: "fas fa-ellipsis-h"
    }, controls.toArray()) : '', m("label", {
      className: "ExtensionListItem-title"
    }, m("input", {
      type: "checkbox",
      checked: this.enabled,
      onclick: this.toggle.bind(this, this.adapter['name'])
    }), " ", ' ', app.translator.trans('fof-filesystem.admin.adapters.' + this.adapter['name']))));
  };

  _proto.controls = function controls() {
    var _this2 = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();

    if (!this.available) {
      items.add('required-package', flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
        icon: 'fas fa-cogs',
        children: app.translator.trans('fof-fileysystem.admin.button.required_package'),
        onclick: function onclick() {
          return app.modal.show(_RequiredPackageModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
            adapter: _this2.adapter
          });
        }
      }));
      return items;
    }

    items.add('settings', flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      icon: 'fas fa-cogs',
      children: app.translator.trans('fof-filesystem.admin.button.settings'),
      onclick: function onclick() {
        return _this2.settingsModal();
      }
    }));
    return items;
  };

  _proto.settingsModal = function settingsModal() {
    app.modal.show(_AdapterSettingsModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      adapter: this.adapter
    });
  };

  _proto.toggle = function toggle(adapter) {
    var current = this.adaptersEnabled();
    var foundAt = current.indexOf(adapter); // found

    if (foundAt >= 0) {
      current.splice(foundAt, 1);
    } else {
      current.push(adapter);
    }

    this.adaptersEnabled(current);
    flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_8___default()({
      'fof-filesystem.adapters.enabled': current.filter(function (tmp) {
        return tmp.length > 0;
      }).join(',')
    });
  };

  return AdapterCard;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/AdapterSettingsModal.js":
/*!******************************************************!*\
  !*** ./src/admin/components/AdapterSettingsModal.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdapterSettingsModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/SettingsModal */ "flarum/components/SettingsModal");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);






var AdapterSettingsModal =
/*#__PURE__*/
function (_SettingsModal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AdapterSettingsModal, _SettingsModal);

  function AdapterSettingsModal() {
    return _SettingsModal.apply(this, arguments) || this;
  }

  var _proto = AdapterSettingsModal.prototype;

  _proto.init = function init() {
    _SettingsModal.prototype.init.call(this);

    this.adapter = this.props.adapter.name;
    this.rules = this.props.adapter.rules;
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fof-filesystem.admin.adapter-settings-modal.title', {
      adapter: this.adapter
    });
  };

  _proto.form = function form() {
    var fields = this.buildFields();
    return fields.toArray();
  };

  _proto.buildFields = function buildFields() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a();

    for (var key in this.rules) {
      var field = null;
      var rules = this.rules[key].split('|');

      for (var _iterator = rules, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var rule = _ref;

        if (!field && rule + 'Field' in this) {
          field = this[rule + 'Field'](key, rules);
        }
      }

      if (field) {
        items.add(key, m('div', {
          className: 'Form-group ' + (this.isRequired(rules) ? 'required' : '')
        }, [flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.translations[this.fieldTranslatorKey(key, 'label')] ? m('label', {}, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.fieldTranslatorKey(key, 'label'))) : '', field, m('span', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.fieldTranslatorKey(key, 'description')))]));
      }
    }

    return items;
  };

  _proto.stringField = function stringField(key, rules) {
    return m('input', {
      id: this.fieldName(key),
      className: 'FormControl',
      bidi: this.setting(this.fieldName(key)),
      required: this.isRequired(rules)
    });
  };

  _proto.intField = function intField(key, rules) {
    return m('input', {
      id: this.fieldName(key),
      type: "number",
      className: 'FormControl',
      bidi: this.setting(this.fieldName(key))
    });
  };

  _proto.boolField = function boolField(key, rules) {
    return flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      state: this.setting(this.fieldName(key))(),
      onchange: this.setting(this.fieldName(key)),
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(this.fieldTranslatorKey(key, 'toggle'))
    });
  };

  _proto.isRequired = function isRequired(rules) {
    return rules.indexOf('required') >= 0;
  };

  _proto.fieldTranslatorKey = function fieldTranslatorKey(key, type) {
    return 'fof-filesystem.admin.settings.' + this.adapter + '.' + key + '.' + type;
  };

  _proto.fieldName = function fieldName(key) {
    return 'fof-filesystem.admin.settings.' + this.adapter + '.' + key;
  };

  return AdapterSettingsModal;
}(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/components/FilesystemPage.js":
/*!************************************************!*\
  !*** ./src/admin/components/FilesystemPage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilesystemPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AdapterCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdapterCard */ "./src/admin/components/AdapterCard.js");
/* harmony import */ var _RequirementCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequirementCard */ "./src/admin/components/RequirementCard.js");





var FilesystemPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FilesystemPage, _Page);

  function FilesystemPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = FilesystemPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    this.adapters = app.data.settings['fof-filesystem-adapters'] || {};
    this.requested = app.data.settings['fof-filesystem-requirements'] || {}; // Only needed in UX, so lets hack it in.

    this.icons = {
      'local': 'fas fa-hdd',
      'aliyun': null,
      'azure': 'fab fa-microsoft',
      'aws': 'fab fa-aws',
      'dospaces': 'fab fa-digital-ocean',
      'dropbox': 'fab fa-dropbox',
      'ftp': null,
      'gridfs': null,
      'rackspace': null,
      'sftp': null,
      'webdav': null
    };
  };

  _proto.view = function view() {
    return m('div', {
      className: 'FilesystemsPage'
    }, [m('div', {
      className: 'container'
    }, [m('h3', {}, app.translator.trans('fof-filesystem.admin.requested-list')), this.requestedList(), m('h3', {}, app.translator.trans('fof-filesystem.admin.adapters-list')), this.adaptersList()])]);
  };

  _proto.requestedList = function requestedList() {
    return m('div', {
      className: 'ExtensionsPage-list'
    }, m('div', {
      className: 'container'
    }, m('ul', {
      className: 'Requirement ExtensionList'
    }, this.requiredCards())));
  };

  _proto.requiredCards = function requiredCards() {
    var items = [];

    for (var _iterator = this.requested, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var requested = _ref;
      items.push(_RequirementCard__WEBPACK_IMPORTED_MODULE_3__["default"].component({
        requested: requested,
        adapters: this.adapters
      }));
    }

    return items;
  };

  _proto.adaptersList = function adaptersList() {
    return m('div', {
      className: 'ExtensionsPage-list'
    }, m('div', {
      className: 'container'
    }, m('ul', {
      className: 'Adapters ExtensionList'
    }, this.adapterCards())));
  };

  _proto.adapterCards = function adapterCards() {
    var items = [];

    for (var i in this.adapters) {
      var adapter = this.adapters[i];
      var icon = adapter['icon'] || this.icons[adapter['name']] || 'fas fa-archive';
      items.push(_AdapterCard__WEBPACK_IMPORTED_MODULE_2__["default"].component({
        adapter: adapter,
        icon: icon
      }));
    }

    return items;
  };

  _proto.config = function config() {};

  return FilesystemPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/RequiredPackageModal.js":
/*!******************************************************!*\
  !*** ./src/admin/components/RequiredPackageModal.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequiredPackageModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);




var RequiredPackageModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RequiredPackageModal, _Modal);

  function RequiredPackageModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = RequiredPackageModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.adapter = this.props.adapter;
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fof-filesystem.admin.required-package-modal.title', {
      adapter: this.adapter
    });
  };

  _proto.content = function content() {
    var dependency = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fof-filesystem.admin.you-need-for.' + this.adapter);
    return m("div", {
      className: "Modal-body"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fof-filesystem.admin.required-package-modal.content', {
      package: dependency
    }));
  };

  return RequiredPackageModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/components/RequirementCard.js":
/*!*************************************************!*\
  !*** ./src/admin/components/RequirementCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequirementCard; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _RequirementSettingModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RequirementSettingModal */ "./src/admin/components/RequirementSettingModal.js");









var RequirementCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RequirementCard, _Component);

  function RequirementCard() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = RequirementCard.prototype;

  _proto.init = function init() {
    this.requested = this.props.requested; // @todo if matched with an active driver, mark it enabled

    this.driver = false;
  };

  _proto.view = function view() {
    var _this = this;

    var controls = this.controls();
    return m("li", {
      className: 'ExtensionListItem '
    }, m("div", {
      className: "ExtensionListItem-content"
    }, m("span", {
      className: "ExtensionListItem-icon ExtensionIcon",
      style: this.requested.icon,
      onClick: function onClick() {
        return _this.settingsModal();
      }
    }, this.requested.icon ? flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()(this.requested.icon.name) : ''), !controls.isEmpty() ? m(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "ExtensionListItem-controls",
      buttonClassName: "Button Button--icon Button--flat",
      menuClassName: "Dropdown-menu--right",
      icon: "fas fa-ellipsis-h"
    }, controls.toArray()) : '', m("label", {
      className: "ExtensionListItem-title"
    }, m("input", {
      type: "checkbox",
      checked: this.driver,
      disabled: true
    }), ' ', this.requested.extension ? this.requested.extension + ': ' : '', this.requested.title, this.requested.description ? m("div", null, this.requested.description) : '')));
  };

  _proto.controls = function controls() {
    var _this2 = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
    items.add('settings', flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      icon: 'fas fa-cogs',
      children: app.translator.trans('fof-filesystem.admin.button.settings'),
      onclick: function onclick() {
        return _this2.settingsModal();
      }
    }));
    return items;
  };

  _proto.settingsModal = function settingsModal() {
    app.modal.show(_RequirementSettingModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      requested: this.requested,
      adapters: this.props.adapters
    });
  };

  _proto.toggle = function toggle(adapter) {// const current = this.adaptersEnabled();
    // const foundAt = current.indexOf(adapter);
    //
    // // found
    // if (foundAt >= 0) {
    //     current.splice(foundAt, 1);
    // } else {
    //     current.push(adapter);
    // }
    //
    // this.adaptersEnabled(current);
    // saveSettings({
    //     'fof-filesystem.adapters.enabled': current.filter(tmp => tmp.length > 0).join(',')
    // });
  };

  return RequirementCard;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/RequirementSettingModal.js":
/*!*********************************************************!*\
  !*** ./src/admin/components/RequirementSettingModal.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequirementSettingModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/SettingsModal */ "flarum/components/SettingsModal");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Select */ "flarum/components/Select");
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Select__WEBPACK_IMPORTED_MODULE_4__);






var RequirementSettingModal =
/*#__PURE__*/
function (_SettingsModal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RequirementSettingModal, _SettingsModal);

  function RequirementSettingModal() {
    return _SettingsModal.apply(this, arguments) || this;
  }

  var _proto = RequirementSettingModal.prototype;

  _proto.init = function init() {
    _SettingsModal.prototype.init.call(this);

    this.requested = this.props.requested;
    this.adapters = {};

    for (var _iterator = this.props.adapters, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var adapter = _ref;

      if (!adapter.installed) {
        continue;
      }

      if (this.requested.public === true && adapter.public === false) {
        continue;
      }

      this.adapters[adapter.name] = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fof-filesystem.admin.adapters.' + adapter.name);
    }
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fof-filesystem.admin.requested-driver-modal.title', {
      requested: this.requested.title
    });
  };

  _proto.form = function form() {
    var fields = this.buildFields();
    return fields.toArray();
  };

  _proto.buildFields = function buildFields() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
    items.add('adapter', m('div', {
      className: 'Form-group'
    }, [m('label', {}, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fof-filesystem.admin.requested-driver-modal.adapter')), flarum_components_Select__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      options: this.adapters,
      value: this.requested.default
    })]));
    return items;
  };

  return RequirementSettingModal;
}(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addFilesystemPane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addFilesystemPane */ "./src/admin/addFilesystemPane.js");

app.initializers.add('fof-filesystem', function (app) {
  Object(_addFilesystemPane__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/AdminLinkButton":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/AdminLinkButton']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminLinkButton'];

/***/ }),

/***/ "flarum/components/AdminNav":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/AdminNav']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminNav'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Select":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Select']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Select'];

/***/ }),

/***/ "flarum/components/SettingsModal":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsModal']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingsModal'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/saveSettings":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/saveSettings']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/saveSettings'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map