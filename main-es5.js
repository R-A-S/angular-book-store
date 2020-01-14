function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/books-card-page/books-card-page.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books-card-page/books-card-page.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBooksCardPageBooksCardPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"container  mt-5 pt-3\">\n  <ng-template #loading>\n    <div class=\" w-100 d-flex justify-content-center mt-4 pt-4 \">\n      <div\n        class=\"spinner-border text-primary\"\n        style=\"width: 3rem; height: 3rem\"\n        role=\"status\"\n      >\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n  </ng-template>\n\n  <div\n    class=\"row mt-5  w-100 row  d-flex justify-content-between\"\n    *ngIf=\"book$ | async as book; else loading\"\n  >\n    <div class=\"card mb-3 col-md-8 col-lg-8 bg-dark border-0\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-md-4\">\n          <img src=\"{{ book.cover }}\" class=\"card-img\" alt=\"Cover\" />\n        </div>\n        <div class=\"col-md-8\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title border-bottom\">{{ book.title }}</h5>\n            <p class=\"card-text\">Author: {{ book.author }}</p>\n            <p class=\"card-text\">Level: {{ book.level }}</p>\n            <p class=\"card-text\">\n              <span class=\"text-muted\">Tags: {{ book.tags }}</span>\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"m-5\">{{ book.description }}</div>\n    </div>\n    <div class=\" mb-3 text-light col-md-4 col-lg-4 bg-dark shadow-none\">\n      <div\n        class=\"card-body d-flex flex-column rounded\"\n        style=\"border: 2px dashed; user-select: none\"\n      >\n        <ul class=\"list-unstyled mb-4\">\n          <li class=\"d-flex justify-content-between py-3 border-bottom\">\n            <strong>Price </strong>\n            <strong>{{ book.price }}</strong>\n          </li>\n          <li class=\"d-flex justify-content-between py-3 border-bottom\">\n            <strong>Count </strong>\n            <div\n              class=\"d-flex justify-content-end rounded border\"\n              style=\"width: 75px\"\n            >\n              <span class=\"pt-1 pr-2\">\n                <strong>{{\n                  book.count >= currentCount ? currentCount : book.count\n                }}</strong>\n              </span>\n              <div class=\"d-flex flex-column\">\n                <span\n                  class=\"badge\"\n                  style=\"cursor: pointer\"\n                  (click)=\"increaseCount()\"\n                  >➕</span\n                >\n                <span\n                  class=\"badge\"\n                  style=\"cursor: pointer\"\n                  (click)=\"decreaseCount()\"\n                  >➖</span\n                >\n              </div>\n            </div>\n          </li>\n          <li class=\"d-flex justify-content-between py-3 border-bottom\">\n            <strong>Total price </strong>\n            <h5 class=\"font-weight-bold\">\n              ${{ (book.price * currentCount).toFixed(2) }}\n            </h5>\n          </li>\n        </ul>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addToCart()\">\n          Add to cart\n        </button>\n      </div>\n    </div>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/books-page/books-page.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books-page/books-page.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBooksPageBooksPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"container input-group pt-4\">\n  <ng-template #loading>\n    <div class=\" w-100 d-flex justify-content-center mt-4 \">\n      <div\n        class=\"spinner-border text-primary\"\n        style=\"width: 3rem; height: 3rem\"\n        role=\"status\"\n      >\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n  </ng-template>\n\n  <div class=\"col-auto\">\n    <label\n      ><input\n        class=\"form-control\"\n        id=\"title\"\n        type=\"search\"\n        placeholder=\"search by title\"\n        [(ngModel)]=\"searchStr\"\n    /></label>\n  </div>\n  <div class=\"col-auto \">\n    <label\n      ><select class=\"form-control\" id=\"price\" [(ngModel)]=\"priceStr\">\n        <option value=\"0 Infinity\">Price</option>\n        <option value=\"0 15\">Price←15</option>\n        <option value=\"15 30\">15←Price→30</option>\n        <option value=\"30 Infinity\">30→Price</option>\n      </select></label\n    >\n  </div>\n</header>\n<main class=\"container-fluid mt-5\">\n  <div class=\"row\" *ngIf=\"books$ | async as books; else loading\">\n    <app-book\n      class=\"col-xl-3 col-lg-4 col-md-6 mt-2 mb-4 shadow\"\n      style=\"max-width:400px\"\n      *ngFor=\"let book of books | searchBook: searchStr | priceFilter: priceStr\"\n      [book]=\"book\"\n    ></app-book>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-page/cart-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart-page/cart-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartPageCartPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #cartTemplate>\n  <div class=\"container mt-5\" *ngIf=\"cart.length; else empty\">\n    <button\n      type=\"button\"\n      class=\"btn btn-secondary mt-5 mb-2 float-right\"\n      (click)=\"purchase()\"\n    >\n      Purchase\n    </button>\n    <table class=\"table table-striped table-dark\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Book name</th>\n          <th scope=\"col\">Count</th>\n          <th scope=\"col\">Total price</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of cart\">\n          <th scope=\"row\">{{ item.title }}</th>\n          <td>{{ item.count }}</td>\n          <td>{{ (item.count * item.price).toFixed(2) }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <span class=\"float-right text-light mr-5 \">\n      <b> Total price, $ {{ total }}</b></span\n    >\n  </div>\n</ng-template>\n<div\n  *ngIf=\"isFetching; else cartTemplate\"\n  class=\"d-flex justify-content-center mt-4 pt-4\"\n>\n  <div\n    class=\"spinner-border text-primary\"\n    style=\"width: 3rem; height: 3rem\"\n    role=\"status\"\n  >\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n\n<div *ngIf=\"message$ | async as message\">\n  <div class=\"modal-backdrop bg-dark\" style=\"display: block; opacity: 0.9\">\n    <div class=\"modal backdrop\" style=\"display: block\">\n      <div\n        class=\"modal-dialog modal-lg modal-dialog-centered \"\n        style=\"z-index: 2\"\n      >\n        <div class=\"modal-content bg-dark text-light text-center\">\n          <h2 class=\"text-white m-4\">🙏 {{ message.message }}</h2>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary m-4\"\n            (click)=\"clearCart()\"\n            [routerLink]=\"'/books'\"\n          >\n            Return to Home Page 🚀\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #empty>\n  <div class=\"container min-vh-100 d-flex justify-content-center\">\n    <h3 class=\"my-auto\">\n      <span role=\"img\" aria-label=\"Basket\">\n        🛒\n      </span>\n      Cart empty...\n    </h3>\n  </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notfound-page/notfound-page.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notfound-page/notfound-page.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotfoundPageNotfoundPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"position-absolute h-100 w-100 d-flex justify-content-center\">\n  <div class=\"my-auto\">\n    <h1 class=\"text-white\">\n      <span role=\"img\" aria-label=\"Search\">\n        🔍\n      </span>\n      404\n      <span role=\"img\" aria-label=\"Search\">\n        🔎\n      </span>\n      There&apos;s nothing here 🕵️‍♂️\n    </h1>\n    <a class=\"btn btn-link\" [routerLink]=\"'/books'\">\n      Return to Home Page\n    </a>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/book/book.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/book/book.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsBookBookComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card h-100 position-relative text-center\">\n  <img\n    class=\"card-img-top align-self-center mt-2\"\n    [src]=\"book.cover\"\n    alt=\"Cover\"\n    style=\"width: 95%\"\n  />\n  <div class=\"card-body\">\n    <h5 class=\"card-title text-center text-secondary\">{{ book.title }}</h5>\n    <p class=\"card-text text-secondary\">{{ book.author }}</p>\n  </div>\n  <div class=\"card-footer\">\n    <span class=\"h-75 text-center text-dark float-left rounded pt-1\">\n      <b>Price {{ book.price }} $</b>\n    </span>\n    <div class=\"float-right\">\n      <button\n        class=\"btn btn-secondary \"\n        type=\"button\"\n        [routerLink]=\"['/books', book.id]\"\n        (click)=\"updateBook(book)\"\n      >\n        View\n      </button>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/main-layout/main-layout.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/main-layout/main-layout.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsMainLayoutMainLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark top bg-dark border-bottom\">\n  <div class=\"container\">\n    <h3 class=\"navbar-brand\">JS BAND STORE / Roman Stoliarenko</h3>\n\n    <form action=\"\" class=\"form-inline\" *ngIf=\"auth.isAuthenticated()\">\n      <button type=\"button\" class=\"btn btn-secondary mr-4\" routerLink=\"/cart\">\n        <span role=\"img\" aria-label=\"Cart\">\n          🛒\n          <span class=\"badge badge-pill badge-light\">\n            {{ cart.length }}\n          </span>\n        </span>\n      </button>\n\n      <button type=\"button\" class=\"btn btn-secondary mr-4\" (click)=\"logout()\">\n        Sign-Out\n      </button>\n      <div>\n        <img\n          class=\"rounded-circle mr-2\"\n          width=\"40\"\n          alt=\"avatar\"\n          [src]=\"user.avatar\"\n        />\n        <strong>{{ user.username }} </strong>\n      </div>\n    </form>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signin-page/signin-page.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin-page/signin-page.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSigninPageSigninPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"h-100 d-flex justify-content-center mt-5 pt-5\">\n  <div\n    *ngIf=\"submitted\"\n    class=\"w-100 d-flex justify-content-center mt-4 position-fixed\"\n  >\n    <div\n      class=\"spinner-border text-primary\"\n      style=\"width: 3rem; height: 3rem\"\n      role=\"status\"\n    >\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n  <form\n    class=\"mt-5 form-group  text-center\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"submit()\"\n  >\n    <div class=\"alert alert-danger\" *ngIf=\"message\">{{ message }}</div>\n    <img\n      src=\"../../assets/img/jsBandCover.png\"\n      class=\"mb-4 rounded mx-auto d-block\"\n      alt=\"jsBandCover\"\n      width=\"150\"\n    />\n    <label for=\"name\" class=\"text-light\">Username</label>\n    <div\n      [ngClass]=\"{\n        invalid: form.get('name').dirty && form.get('name').invalid\n      }\"\n    >\n      <input\n        type=\"text\"\n        id=\"name\"\n        class=\"form-control\"\n        placeholder=\"type Username\"\n        formControlName=\"name\"\n      />\n      <div\n        class=\"validation\"\n        *ngIf=\"form.get('name').dirty && form.get('name').invalid; else br\"\n      >\n        <small *ngIf=\"form.get('name').errors.required\">Field is empty </small>\n        <small *ngIf=\"form.get('name').errors.pattern\"\n          >Only letters and digits are allowed\n        </small>\n        <small *ngIf=\"form.get('name').errors.minlength\"\n          >Minimum\n          {{ form.get('name').errors.minlength.requiredLength }} characters.\n          Now: {{ form.get('name').errors.minlength.actualLength }}\n        </small>\n        <small *ngIf=\"form.get('name').errors.maxlength\"\n          >Maximum\n          {{ form.get('name').errors.maxlength.requiredLength }} characters.\n          Now: {{ form.get('name').errors.maxlength.actualLength }}\n        </small>\n      </div>\n\n      <ng-template #br><br /></ng-template>\n    </div>\n\n    <!--      class={`form-control ${isValid ? 'is-valid' : 'is-invalid'}`}-->\n    <!--      value={username}-->\n    <!--      onChange={this.validateUserName}-->\n    <!--      onKeyDown={this.enterHandler}-->\n\n    <button\n      class=\"btn btn-outline-primary btn-block mt-3\"\n      type=\"submit\"\n      [disabled]=\"form.invalid || submitted\"\n    >\n      <!--      -->\n      <!--      onClick={this.signInAsync}-->\n\n      Sign-in\n    </button>\n  </form>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/components/main-layout/main-layout.component */
    "./src/app/shared/components/main-layout/main-layout.component.ts");
    /* harmony import */


    var _signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signin-page/signin-page.component */
    "./src/app/signin-page/signin-page.component.ts");
    /* harmony import */


    var _books_page_books_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./books-page/books-page.component */
    "./src/app/books-page/books-page.component.ts");
    /* harmony import */


    var _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notfound-page/notfound-page.component */
    "./src/app/notfound-page/notfound-page.component.ts");
    /* harmony import */


    var _books_card_page_books_card_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./books-card-page/books-card-page.component */
    "./src/app/books-card-page/books-card-page.component.ts");
    /* harmony import */


    var _shared_book_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/book.resolver */
    "./src/app/shared/book.resolver.ts");
    /* harmony import */


    var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./cart-page/cart-page.component */
    "./src/app/cart-page/cart-page.component.ts");
    /* harmony import */


    var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/auth.guard */
    "./src/app/shared/auth.guard.ts");

    var routes = [{
      path: '',
      redirectTo: '/signin',
      pathMatch: 'full'
    }, {
      path: '',
      component: _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
      children: [{
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }, {
        path: 'signin',
        component: _signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_4__["SigninPageComponent"]
      }, {
        path: 'books',
        component: _books_page_books_page_component__WEBPACK_IMPORTED_MODULE_5__["BooksPageComponent"],
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'books/:id',
        component: _books_card_page_books_card_page_component__WEBPACK_IMPORTED_MODULE_7__["BooksCardPageComponent"],
        resolve: {
          post: _shared_book_resolver__WEBPACK_IMPORTED_MODULE_8__["BookResolver"]
        },
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'cart',
        component: _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_9__["CartPageComponent"],
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }]
    }, {
      path: 'error',
      component: _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_6__["NotfoundPageComponent"]
    }, {
      path: '**',
      redirectTo: '/error'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: browserRefresh, AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "browserRefresh", function () {
      return browserRefresh;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // eslint-disable-next-line import/no-mutable-exports


    var browserRefresh = false;

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.subscription = router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            browserRefresh = !router.navigated;
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signin-page/signin-page.component */
    "./src/app/signin-page/signin-page.component.ts");
    /* harmony import */


    var _books_page_books_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./books-page/books-page.component */
    "./src/app/books-page/books-page.component.ts");
    /* harmony import */


    var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/components/main-layout/main-layout.component */
    "./src/app/shared/components/main-layout/main-layout.component.ts");
    /* harmony import */


    var _books_card_page_books_card_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./books-card-page/books-card-page.component */
    "./src/app/books-card-page/books-card-page.component.ts");
    /* harmony import */


    var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./cart-page/cart-page.component */
    "./src/app/cart-page/cart-page.component.ts");
    /* harmony import */


    var _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./notfound-page/notfound-page.component */
    "./src/app/notfound-page/notfound-page.component.ts");
    /* harmony import */


    var _shared_components_book_book_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/components/book/book.component */
    "./src/app/shared/components/book/book.component.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/auth.guard */
    "./src/app/shared/auth.guard.ts");
    /* harmony import */


    var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/services/api.service */
    "./src/app/shared/services/api.service.ts");
    /* harmony import */


    var _shared_pipes_seach_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./shared/pipes/seach.pipe */
    "./src/app/shared/pipes/seach.pipe.ts");
    /* harmony import */


    var _shared_pipes_price_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./shared/pipes/price.pipe */
    "./src/app/shared/pipes/price.pipe.ts");
    /* harmony import */


    var _shared_services_state_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shared/services/state.service */
    "./src/app/shared/services/state.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_7__["SigninPageComponent"], _books_page_books_page_component__WEBPACK_IMPORTED_MODULE_8__["BooksPageComponent"], _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__["MainLayoutComponent"], _books_card_page_books_card_page_component__WEBPACK_IMPORTED_MODULE_10__["BooksCardPageComponent"], _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_11__["CartPageComponent"], _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundPageComponent"], _shared_components_book_book_component__WEBPACK_IMPORTED_MODULE_13__["BookComponent"], _shared_pipes_seach_pipe__WEBPACK_IMPORTED_MODULE_17__["SeachBookPipe"], _shared_pipes_price_pipe__WEBPACK_IMPORTED_MODULE_18__["PriceFilterPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _shared_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _shared_services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"], _shared_services_state_service__WEBPACK_IMPORTED_MODULE_19__["StateService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/books-card-page/books-card-page.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/books-card-page/books-card-page.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBooksCardPageBooksCardPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzLWNhcmQtcGFnZS9ib29rcy1jYXJkLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/books-card-page/books-card-page.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/books-card-page/books-card-page.component.ts ***!
    \**************************************************************/

  /*! exports provided: BooksCardPageComponent */

  /***/
  function srcAppBooksCardPageBooksCardPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksCardPageComponent", function () {
      return BooksCardPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/api.service */
    "./src/app/shared/services/api.service.ts");
    /* harmony import */


    var _shared_services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/services/state.service */
    "./src/app/shared/services/state.service.ts");

    var BooksCardPageComponent =
    /*#__PURE__*/
    function () {
      function BooksCardPageComponent(route, api, state) {
        _classCallCheck(this, BooksCardPageComponent);

        this.route = route;
        this.api = api;
        this.state = state;
      }

      _createClass(BooksCardPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.book$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.api.fetchBook(params.id);
          }));
          this.state.cart.subscribe(function (result) {
            _this.cart = result;
          });
          this.state.book.subscribe(function (result) {
            _this.book = result;
          });
          this.currentCount = this.validateCount(1, null);
        }
      }, {
        key: "increaseCount",
        value: function increaseCount() {
          this.currentCount = this.validateCount(this.currentCount, true);
        }
      }, {
        key: "decreaseCount",
        value: function decreaseCount() {
          this.currentCount = this.validateCount(this.currentCount, false);
        }
      }, {
        key: "validateCount",
        value: function validateCount(currentCount, operation) {
          var _this2 = this;

          var cartItem = this.cart.find(function (book) {
            return book.id === _this2.book.id;
          });
          var freeCount = cartItem ? this.book.count - cartItem.count : this.book.count;

          if (operation !== null) {
            var isValid = operation ? currentCount < freeCount : currentCount > 0;

            if (!isValid) {
              return freeCount > 0 ? currentCount : 0;
            }

            return operation ? currentCount + 1 : currentCount - 1;
          }

          return freeCount === 0 ? 0 : 1;
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          var _this3 = this;

          var existIndex = this.cart.findIndex(function (book) {
            return book.id === _this3.book.id;
          });
          var bookToAdd;

          if (existIndex !== -1) {
            bookToAdd = Object.assign({}, this.book, {
              count: this.cart[existIndex].count + this.currentCount
            });
            this.cart[existIndex] = bookToAdd;
          } else {
            bookToAdd = Object.assign({}, this.book, {
              count: this.currentCount
            });

            if (this.currentCount) {
              this.cart.push(bookToAdd);
            }
          }

          this.state.changeCart(this.cart);
          this.currentCount = this.validateCount(1, null);
        }
      }]);

      return BooksCardPageComponent;
    }();

    BooksCardPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _shared_services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]
      }];
    };

    BooksCardPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-books-card-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./books-card-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/books-card-page/books-card-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./books-card-page.component.scss */
      "./src/app/books-card-page/books-card-page.component.scss")).default]
    })], BooksCardPageComponent);
    /***/
  },

  /***/
  "./src/app/books-page/books-page.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/books-page/books-page.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBooksPageBooksPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzLXBhZ2UvYm9va3MtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/books-page/books-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/books-page/books-page.component.ts ***!
    \****************************************************/

  /*! exports provided: BooksPageComponent */

  /***/
  function srcAppBooksPageBooksPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksPageComponent", function () {
      return BooksPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/api.service */
    "./src/app/shared/services/api.service.ts");

    var BooksPageComponent =
    /*#__PURE__*/
    function () {
      function BooksPageComponent(api) {
        _classCallCheck(this, BooksPageComponent);

        this.api = api;
        this.searchStr = '';
        this.priceStr = '0 Infinity';
      }

      _createClass(BooksPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.books$ = this.api.fetchBooks();
        }
      }]);

      return BooksPageComponent;
    }();

    BooksPageComponent.ctorParameters = function () {
      return [{
        type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    BooksPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-books-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./books-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/books-page/books-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./books-page.component.scss */
      "./src/app/books-page/books-page.component.scss")).default]
    })], BooksPageComponent);
    /***/
  },

  /***/
  "./src/app/cart-page/cart-page.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/cart-page/cart-page.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartPageCartPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/cart-page/cart-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/cart-page/cart-page.component.ts ***!
    \**************************************************/

  /*! exports provided: CartPageComponent */

  /***/
  function srcAppCartPageCartPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageComponent", function () {
      return CartPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/state.service */
    "./src/app/shared/services/state.service.ts");
    /* harmony import */


    var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/api.service */
    "./src/app/shared/services/api.service.ts");

    var CartPageComponent =
    /*#__PURE__*/
    function () {
      function CartPageComponent(state, api) {
        _classCallCheck(this, CartPageComponent);

        this.state = state;
        this.api = api;
        this.isFetching = false;
      }

      _createClass(CartPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.state.cart.subscribe(function (result) {
            _this4.cart = result;
          });
          this.updateTotal();
        }
      }, {
        key: "updateTotal",
        value: function updateTotal() {
          this.total = this.cart.reduce(function (acc, book) {
            return acc + book.price * book.count;
          }, 0).toFixed(2);
        }
      }, {
        key: "purchase",
        value: function purchase() {
          var _this5 = this;

          this.isFetching = true;
          var books = this.cart.map(function (book) {
            return book.id;
          });
          this.message$ = this.api.purchase(books);
          this.message$.subscribe(function () {
            _this5.isFetching = false;
          });
        }
      }, {
        key: "clearCart",
        value: function clearCart() {
          this.state.changeCart([]);
        }
      }]);

      return CartPageComponent;
    }();

    CartPageComponent.ctorParameters = function () {
      return [{
        type: _shared_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    CartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-page/cart-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart-page.component.scss */
      "./src/app/cart-page/cart-page.component.scss")).default]
    })], CartPageComponent);
    /***/
  },

  /***/
  "./src/app/notfound-page/notfound-page.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/notfound-page/notfound-page.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotfoundPageNotfoundPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kLXBhZ2Uvbm90Zm91bmQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/notfound-page/notfound-page.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/notfound-page/notfound-page.component.ts ***!
    \**********************************************************/

  /*! exports provided: NotfoundPageComponent */

  /***/
  function srcAppNotfoundPageNotfoundPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotfoundPageComponent", function () {
      return NotfoundPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotfoundPageComponent = function NotfoundPageComponent() {
      _classCallCheck(this, NotfoundPageComponent);
    };

    NotfoundPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notfound-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notfound-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notfound-page/notfound-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notfound-page.component.scss */
      "./src/app/notfound-page/notfound-page.component.scss")).default]
    })], NotfoundPageComponent);
    /***/
  },

  /***/
  "./src/app/shared/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* eslint-disable @typescript-eslint/no-unused-vars */


    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      } // eslint-disable-next-line consistent-return


      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.auth.isAuthenticated()) {
            return true;
          }

          this.auth.logout();
          this.router.navigate(['/signin'], {
            queryParams: {
              loginAgain: true
            }
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/shared/book.resolver.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/book.resolver.ts ***!
    \*****************************************/

  /*! exports provided: BookResolver */

  /***/
  function srcAppSharedBookResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookResolver", function () {
      return BookResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BookResolver =
    /*#__PURE__*/
    function () {
      function BookResolver() {
        _classCallCheck(this, BookResolver);
      }

      _createClass(BookResolver, [{
        key: "resolve",
        value: function resolve(route, // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(route.params.id).pipe();
        }
      }]);

      return BookResolver;
    }();

    BookResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BookResolver);
    /***/
  },

  /***/
  "./src/app/shared/components/book/book.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/book/book.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsBookBookComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jvb2svYm9vay5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/components/book/book.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/components/book/book.component.ts ***!
    \**********************************************************/

  /*! exports provided: BookComponent */

  /***/
  function srcAppSharedComponentsBookBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookComponent", function () {
      return BookComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/state.service */
    "./src/app/shared/services/state.service.ts");

    var BookComponent =
    /*#__PURE__*/
    function () {
      function BookComponent(state) {
        _classCallCheck(this, BookComponent);

        this.state = state;
      }

      _createClass(BookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.state.book.subscribe(function (result) {
            _this6.currentBook = result;
          });
        }
      }, {
        key: "updateBook",
        value: function updateBook(book) {
          this.state.changeBook(book);
        }
      }]);

      return BookComponent;
    }();

    BookComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BookComponent.prototype, "book", void 0);
    BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-book',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/book/book.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book.component.scss */
      "./src/app/shared/components/book/book.component.scss")).default]
    })], BookComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/main-layout/main-layout.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/main-layout/main-layout.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsMainLayoutMainLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/main-layout/main-layout.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/main-layout/main-layout.component.ts ***!
    \************************************************************************/

  /*! exports provided: MainLayoutComponent */

  /***/
  function srcAppSharedComponentsMainLayoutMainLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () {
      return MainLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/state.service */
    "./src/app/shared/services/state.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../app.component */
    "./src/app/app.component.ts");

    var MainLayoutComponent =
    /*#__PURE__*/
    function () {
      function MainLayoutComponent(router, auth, state) {
        _classCallCheck(this, MainLayoutComponent);

        this.router = router;
        this.auth = auth;
        this.state = state;
      }

      _createClass(MainLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.state.user.subscribe(function (result) {
            _this7.user = result;
          });
          this.state.cart.subscribe(function (result) {
            _this7.cart = result;
          });

          if (_app_component__WEBPACK_IMPORTED_MODULE_5__["browserRefresh"]) {
            this.state.getState();
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.auth.logout();
          this.router.navigate(['/signin']).then(function (r) {
            return r;
          });
        }
      }]);

      return MainLayoutComponent;
    }();

    MainLayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]
      }];
    };

    MainLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/main-layout/main-layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-layout.component.scss */
      "./src/app/shared/components/main-layout/main-layout.component.scss")).default]
    })], MainLayoutComponent);
    /***/
  },

  /***/
  "./src/app/shared/pipes/price.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/pipes/price.pipe.ts ***!
    \********************************************/

  /*! exports provided: PriceFilterPipe */

  /***/
  function srcAppSharedPipesPricePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PriceFilterPipe", function () {
      return PriceFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PriceFilterPipe =
    /*#__PURE__*/
    function () {
      function PriceFilterPipe() {
        _classCallCheck(this, PriceFilterPipe);
      }

      _createClass(PriceFilterPipe, [{
        key: "transform",
        // eslint-disable-next-line class-methods-use-this
        value: function transform(books, filter) {
          var value = filter.split(' ');
          var filterValue = {
            min: value[0],
            max: value[1]
          };
          return books.filter(function (book) {
            return +filterValue.min <= book.price && book.price <= +filterValue.max;
          });
        }
      }]);

      return PriceFilterPipe;
    }();

    PriceFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'priceFilter'
    })], PriceFilterPipe);
    /***/
  },

  /***/
  "./src/app/shared/pipes/seach.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/pipes/seach.pipe.ts ***!
    \********************************************/

  /*! exports provided: SeachBookPipe */

  /***/
  function srcAppSharedPipesSeachPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeachBookPipe", function () {
      return SeachBookPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SeachBookPipe =
    /*#__PURE__*/
    function () {
      function SeachBookPipe() {
        _classCallCheck(this, SeachBookPipe);
      }

      _createClass(SeachBookPipe, [{
        key: "transform",
        // eslint-disable-next-line class-methods-use-this
        value: function transform(books) {
          var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          if (!search.trim()) {
            return books;
          }

          return books.filter(function (book) {
            return book.title.toLowerCase().includes(search.trim().toLowerCase());
          });
        }
      }]);

      return SeachBookPipe;
    }();

    SeachBookPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'searchBook'
    })], SeachBookPipe);
    /***/
  },

  /***/
  "./src/app/shared/services/api.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/services/api.service.ts ***!
    \************************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppSharedServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/services/auth.service.ts");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http, auth) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.auth = auth;
        this.ROOT_URL = 'https://js-band-api.glitch.me/';
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Bearer ".concat(this.auth.token)
          })
        };
      }

      _createClass(ApiService, [{
        key: "fetchBooks",
        value: function fetchBooks() {
          return this.http.get("".concat(this.ROOT_URL, "books"), Object.assign({}, this.httpOptions, {
            observe: 'response'
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.body;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
          }));
        }
      }, {
        key: "fetchBook",
        value: function fetchBook(bookId) {
          return this.http.get("".concat(this.ROOT_URL, "books/").concat(bookId), Object.assign({}, this.httpOptions, {
            observe: 'response'
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.body;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
          }));
        }
      }, {
        key: "purchase",
        value: function purchase(booksId) {
          this.httpOptions.headers.set('Content-Type', 'application/json');
          return this.http.post("".concat(this.ROOT_URL, "purchase"), {
            books: booksId
          }, Object.assign({}, this.httpOptions, {
            observe: 'response'
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.body;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
          }));
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ApiService);
    /***/
  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.user = {};
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(user) {
          return this.http.post('https://js-band-api.glitch.me/signin', {
            username: user.username
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(this.setToken));
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return !!this.token;
        }
      }, {
        key: "setToken",
        value: function setToken(responce) {
          if (responce) {
            localStorage.setItem('token', responce.token);
            this.user = responce;
          } else {
            localStorage.clear();
          }
        }
      }, {
        key: "token",
        get: function get() {
          var token = localStorage.getItem('token');

          if (!token) {
            this.logout();
            return null;
          }

          return token;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthService);
    /***/
  },

  /***/
  "./src/app/shared/services/state.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/state.service.ts ***!
    \**************************************************/

  /*! exports provided: StateService */

  /***/
  function srcAppSharedServicesStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateService", function () {
      return StateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/services/auth.service.ts");

    var StateService =
    /*#__PURE__*/
    function () {
      function StateService(auth) {
        _classCallCheck(this, StateService);

        this.auth = auth;
        this.cartSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.cart = this.cartSource.asObservable();
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
          username: ''
        });
        this.user = this.userSource.asObservable();
        this.bookSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.book = this.bookSource.asObservable();
      }

      _createClass(StateService, [{
        key: "changeCart",
        value: function changeCart(cart) {
          this.cartSource.next(cart);
          this.setState();
        }
      }, {
        key: "changeUser",
        value: function changeUser(user) {
          this.userSource.next(user);
          this.setState();
        }
      }, {
        key: "changeBook",
        value: function changeBook(book) {
          this.bookSource.next(book);
          this.setState();
        }
      }, {
        key: "setState",
        value: function setState() {
          localStorage.setItem("store".concat(this.auth.token), JSON.stringify({
            cart: this.cartSource.value,
            user: this.userSource.value,
            book: this.bookSource.value
          }));
        }
      }, {
        key: "getState",
        value: function getState() {
          if (this.auth.isAuthenticated()) {
            var store = JSON.parse(localStorage.getItem("store".concat(this.auth.token)));
            this.changeBook(store.book);
            this.changeUser(store.user);
            this.changeCart(store.cart);
          }
        }
      }]);

      return StateService;
    }();

    StateService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], StateService);
    /***/
  },

  /***/
  "./src/app/signin-page/signin-page.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/signin-page/signin-page.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSigninPageSigninPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "small {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9SLUEtUy9hbmd1bGFyLWJvb2stc3RvcmUvc3JjL2FwcC9zaWduaW4tcGFnZS9zaWduaW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbmluLXBhZ2Uvc2lnbmluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4tcGFnZS9zaWduaW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNtYWxsIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiIsInNtYWxsIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/signin-page/signin-page.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/signin-page/signin-page.component.ts ***!
    \******************************************************/

  /*! exports provided: SigninPageComponent */

  /***/
  function srcAppSigninPageSigninPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninPageComponent", function () {
      return SigninPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/services/state.service */
    "./src/app/shared/services/state.service.ts");

    var SigninPageComponent =
    /*#__PURE__*/
    function () {
      function SigninPageComponent(auth, router, route, state) {
        _classCallCheck(this, SigninPageComponent);

        this.auth = auth;
        this.router = router;
        this.route = route;
        this.state = state;
        this.submitted = false;
      }

      _createClass(SigninPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.route.queryParams.subscribe(function (params) {
            if (params.loginAgain) {
              _this8.message = 'Please log in again.';
            }

            _this8.state.user.subscribe(function (result) {
              _this8.user = result;
            });
          });
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)])
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this9 = this;

          if (this.form.invalid) {
            return;
          }

          this.submitted = true;
          var userLogin = {
            username: this.form.value.name
          };
          this.auth.login(userLogin).subscribe(function (user) {
            _this9.state.changeUser(user);

            _this9.form.reset();

            _this9.router.navigate(['/books']);

            _this9.submitted = false;
          });
        }
      }]);

      return SigninPageComponent;
    }();

    SigninPageComponent.ctorParameters = function () {
      return [{
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _shared_services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]
      }];
    };

    SigninPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signin-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signin-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signin-page/signin-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signin-page.component.scss */
      "./src/app/signin-page/signin-page.component.scss")).default]
    })], SigninPageComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]) // eslint-disable-next-line no-console
    .catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/travis/build/R-A-S/angular-book-store/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map