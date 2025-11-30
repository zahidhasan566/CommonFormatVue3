"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["auth-login-boxed"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.mjs");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _composables_useCommon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/composables/useCommon */ "./resources/js/composables/useCommon.js");
/* harmony import */ var _utils_validationRules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/validationRules */ "./resources/js/utils/validationRules.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'login_boxed',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var _useCommon = (0,_composables_useCommon__WEBPACK_IMPORTED_MODULE_3__.useCommon)(),
      axiosGet = _useCommon.axiosGet,
      axiosPost = _useCommon.axiosPost,
      errorNoti = _useCommon.errorNoti,
      successNoti = _useCommon.successNoti;
    // Import your validation system
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

    // Manual rule combination function (since combineRules might not be available)
    var createCombinedRule = function createCombinedRule() {
      for (var _len = arguments.length, rules = new Array(_len), _key = 0; _key < _len; _key++) {
        rules[_key] = arguments[_key];
      }
      return function (value) {
        for (var _i = 0, _rules = rules; _i < _rules.length; _i++) {
          var rule = _rules[_i];
          var result = typeof rule === 'function' ? rule(value) : rule;
          if (result !== true) {
            return result;
          }
        }
        return true;
      };
    };

    // Setup form
    var _useForm = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      isSubmitting = _useForm.isSubmitting;

    // Create email validation rule
    var emailValidation = createCombinedRule(_utils_validationRules__WEBPACK_IMPORTED_MODULE_4__.validationRules.required, _utils_validationRules__WEBPACK_IMPORTED_MODULE_4__.validationRules.email);

    // Create password validation rule
    var passwordValidation = createCombinedRule(_utils_validationRules__WEBPACK_IMPORTED_MODULE_4__.validationRules.required, _utils_validationRules__WEBPACK_IMPORTED_MODULE_4__.validationRules.minLength(4));

    // Create fields
    //const email = useField('email', emailValidation)
    var password = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.useField)('password', passwordValidation);
    var staffId = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.useField)('staffId');
    var showPassword = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var togglePassword = function togglePassword() {
      showPassword.value = !showPassword.value;
    };
    var onSubmit = handleSubmit(/*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(values) {
        var submitUrl;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              try {
                submitUrl = 'login';
                axiosPost(submitUrl, {
                  staffId: values.staffId,
                  password: values.password
                }, function (response) {
                  localStorage.setItem("token", response.access_token);
                  console.log(response.access_token);
                  successNoti('Login successfully');
                  router.push({
                    path: '/dashboard'
                  });
                }, function (error) {
                  console.log(error);
                  errorNoti(error);
                });
                // Here you would make your API call
                // const response = await loginAPI(values.email, values.password)

                // Navigate to dashboard
                //await router.push({ name: 'Dashboard' })
              } catch (error) {
                console.error('Login failed:', error);
              }
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    var __returned__ = {
      axiosGet: axiosGet,
      axiosPost: axiosPost,
      errorNoti: errorNoti,
      successNoti: successNoti,
      router: router,
      createCombinedRule: createCombinedRule,
      handleSubmit: handleSubmit,
      isSubmitting: isSubmitting,
      emailValidation: emailValidation,
      passwordValidation: passwordValidation,
      password: password,
      staffId: staffId,
      showPassword: showPassword,
      togglePassword: togglePassword,
      onSubmit: onSubmit,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get useForm() {
        return vee_validate__WEBPACK_IMPORTED_MODULE_1__.useForm;
      },
      get useField() {
        return vee_validate__WEBPACK_IMPORTED_MODULE_1__.useField;
      },
      get useRouter() {
        return vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter;
      },
      get useCommon() {
        return _composables_useCommon__WEBPACK_IMPORTED_MODULE_3__.useCommon;
      },
      get validationRules() {
        return _utils_validationRules__WEBPACK_IMPORTED_MODULE_4__.validationRules;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login_boxed.vue?vue&type=template&id=77930828&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login_boxed.vue?vue&type=template&id=77930828&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "login-container"
};
var _hoisted_2 = {
  "class": "login-box account-card"
};
var _hoisted_3 = {
  "class": "input-group"
};
var _hoisted_4 = {
  key: 0,
  "class": "error-message"
};
var _hoisted_5 = {
  "class": "input-group"
};
var _hoisted_6 = ["type"];
var _hoisted_7 = {
  key: 0,
  "class": "error-message"
};
var _hoisted_8 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    style: {
      "color": "white"
    }
  }, "Group Expense", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "login-form",
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.onSubmit && $setup.onSubmit.apply($setup, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Email Input "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.staffId.value.value = $event;
    }),
    placeholder: "Staff Id",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'error-border': $setup.staffId.errorMessage.value
    }])
  }, null, 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.staffId.value.value]]), $setup.staffId.errorMessage.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.staffId.errorMessage.value), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Password Input "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: $setup.showPassword ? 'text' : 'password',
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.password.value.value = $event;
    }),
    placeholder: "Password",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'error-border': $setup.password.errorMessage.value
    }])
  }, null, 10 /* CLASS, PROPS */, _hoisted_6), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $setup.password.value.value]]), $setup.password.errorMessage.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.password.errorMessage.value), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    onClick: $setup.togglePassword,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-eye"
  }, _toConsumableArray(_cache[3] || (_cache[3] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
  }, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }, null, -1 /* CACHED */)]))))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: $setup.isSubmitting,
    type: "submit",
    "class": "btn login-btn"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.isSubmitting ? 'Logging in...' : 'Log In'), 9 /* TEXT, PROPS */, _hoisted_8)], 32 /* NEED_HYDRATION */)])]);
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login_boxed.vue?vue&type=style&index=0&id=77930828&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login_boxed.vue?vue&type=style&index=0&id=77930828&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.login-container[data-v-77930828] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    background: url('http://app.acibd.com/la_monitoring/assets/images/geb.png') no-repeat top;\n    background-size: cover;\n    background-position: center;\n}\n.login-box[data-v-77930828] {\n    background: rgba(255, 255, 255, 0.9);\n    padding: 30px;\n    border-radius: 10px;\n    width: 400px;\n    text-align: center;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(5px);\n}\nh1[data-v-77930828] {\n    font-size: 2.5em;\n    color: #3e8e41;\n    margin-bottom: 30px;\n}\n.login-form[data-v-77930828] {\n    display: flex;\n    flex-direction: column;\n}\n.input-group[data-v-77930828] {\n    margin-bottom: 20px;\n    position: relative;\n}\n.input-group input[data-v-77930828] {\n    width: 100%;\n    padding: 12px;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    outline: none;\n    box-sizing: border-box;\n}\n.input-group input[data-v-77930828]:focus {\n    border-color: #3e8e41;\n    box-shadow: 0 0 5px rgba(62, 142, 65, 0.3);\n}\n.error-border[data-v-77930828] {\n    border-color: #e74c3c !important;\n}\n.error-message[data-v-77930828] {\n    color: #e74c3c;\n    font-size: 12px;\n    text-align: left;\n    margin-top: 5px;\n    display: block;\n}\n.login-btn[data-v-77930828] {\n    background-color: #00BCD4;\n    color: white;\n    padding: 12px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 16px;\n    font-weight: bold;\n    transition: background-color 0.3s ease;\n}\n.login-btn[data-v-77930828]:hover:not(:disabled) {\n    background-color: #2196F3;\n}\n.login-btn[data-v-77930828]:disabled {\n    background-color: #ccc;\n    cursor: not-allowed;\n}\n.feather.feather-eye[data-v-77930828] {\n    position: absolute;\n    top: 50%;\n    right: 15px;\n    transform: translateY(-50%);\n    cursor: pointer;\n    color: #666;\n    width: 20px;\n    height: 20px;\n}\n.feather.feather-eye[data-v-77930828]:hover {\n    color: #3e8e41;\n}\n.account-card[data-v-77930828] {\n    background-color: rgb(0 53 81 / 43%);\n    backdrop-filter: blur(10px);\n    border-radius: 8px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.account-card-content[data-v-77930828] {\n    padding: 20px; /* Adjust padding as necessary */\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login_boxed.vue?vue&type=style&index=0&id=77930828&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login_boxed.vue?vue&type=style&index=0&id=77930828&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_style_index_0_id_77930828_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login_boxed.vue?vue&type=style&index=0&id=77930828&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login_boxed.vue?vue&type=style&index=0&id=77930828&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_style_index_0_id_77930828_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_style_index_0_id_77930828_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vee-validate/dist/vee-validate.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/vee-validate/dist/vee-validate.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorMessage: () => (/* binding */ ErrorMessage),
/* harmony export */   Field: () => (/* binding */ Field),
/* harmony export */   FieldArray: () => (/* binding */ FieldArray),
/* harmony export */   FieldContextKey: () => (/* binding */ FieldContextKey),
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   FormContextKey: () => (/* binding */ FormContextKey),
/* harmony export */   IS_ABSENT: () => (/* binding */ IS_ABSENT),
/* harmony export */   PublicFormContextKey: () => (/* binding */ PublicFormContextKey),
/* harmony export */   cleanupNonNestedPath: () => (/* binding */ cleanupNonNestedPath),
/* harmony export */   configure: () => (/* binding */ configure),
/* harmony export */   defineRule: () => (/* binding */ defineRule),
/* harmony export */   isNotNestedPath: () => (/* binding */ isNotNestedPath),
/* harmony export */   normalizeRules: () => (/* binding */ normalizeRules),
/* harmony export */   useField: () => (/* binding */ useField),
/* harmony export */   useFieldArray: () => (/* binding */ useFieldArray),
/* harmony export */   useFieldError: () => (/* binding */ useFieldError),
/* harmony export */   useFieldValue: () => (/* binding */ useFieldValue),
/* harmony export */   useForm: () => (/* binding */ useForm),
/* harmony export */   useFormContext: () => (/* binding */ useFormContext),
/* harmony export */   useFormErrors: () => (/* binding */ useFormErrors),
/* harmony export */   useFormValues: () => (/* binding */ useFormValues),
/* harmony export */   useIsFieldDirty: () => (/* binding */ useIsFieldDirty),
/* harmony export */   useIsFieldTouched: () => (/* binding */ useIsFieldTouched),
/* harmony export */   useIsFieldValid: () => (/* binding */ useIsFieldValid),
/* harmony export */   useIsFormDirty: () => (/* binding */ useIsFormDirty),
/* harmony export */   useIsFormTouched: () => (/* binding */ useIsFormTouched),
/* harmony export */   useIsFormValid: () => (/* binding */ useIsFormValid),
/* harmony export */   useIsSubmitting: () => (/* binding */ useIsSubmitting),
/* harmony export */   useIsValidating: () => (/* binding */ useIsValidating),
/* harmony export */   useResetForm: () => (/* binding */ useResetForm),
/* harmony export */   useSetFieldError: () => (/* binding */ useSetFieldError),
/* harmony export */   useSetFieldTouched: () => (/* binding */ useSetFieldTouched),
/* harmony export */   useSetFieldValue: () => (/* binding */ useSetFieldValue),
/* harmony export */   useSetFormErrors: () => (/* binding */ useSetFormErrors),
/* harmony export */   useSetFormTouched: () => (/* binding */ useSetFormTouched),
/* harmony export */   useSetFormValues: () => (/* binding */ useSetFormValues),
/* harmony export */   useSubmitCount: () => (/* binding */ useSubmitCount),
/* harmony export */   useSubmitForm: () => (/* binding */ useSubmitForm),
/* harmony export */   useValidateField: () => (/* binding */ useValidateField),
/* harmony export */   useValidateForm: () => (/* binding */ useValidateForm),
/* harmony export */   validate: () => (/* binding */ validate),
/* harmony export */   validateObject: () => (/* binding */ validateObjectSchema)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/**
  * vee-validate v4.15.1
  * (c) 2025 Abdelrahman Awad
  * @license MIT
  */


function isCallable(fn) {
    return typeof fn === 'function';
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
const isObject = (obj) => obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj);
function isIndex(value) {
    return Number(value) >= 0;
}
function toNumber(value) {
    const n = parseFloat(value);
    return isNaN(n) ? value : n;
}
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
function getTag(value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return Object.prototype.toString.call(value);
}
// Reference: https://github.com/lodash/lodash/blob/master/isPlainObject.js
function isPlainObject(value) {
    if (!isObjectLike(value) || getTag(value) !== '[object Object]') {
        return false;
    }
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
}
function merge(target, source) {
    Object.keys(source).forEach(key => {
        if (isPlainObject(source[key]) && isPlainObject(target[key])) {
            if (!target[key]) {
                target[key] = {};
            }
            merge(target[key], source[key]);
            return;
        }
        target[key] = source[key];
    });
    return target;
}
/**
 * Constructs a path with dot paths for arrays to use brackets to be compatible with vee-validate path syntax
 */
function normalizeFormPath(path) {
    const pathArr = path.split('.');
    if (!pathArr.length) {
        return '';
    }
    let fullPath = String(pathArr[0]);
    for (let i = 1; i < pathArr.length; i++) {
        if (isIndex(pathArr[i])) {
            fullPath += `[${pathArr[i]}]`;
            continue;
        }
        fullPath += `.${pathArr[i]}`;
    }
    return fullPath;
}

const RULES = {};
/**
 * Adds a custom validator to the list of validation rules.
 */
function defineRule(id, validator) {
    // makes sure new rules are properly formatted.
    guardExtend(id, validator);
    RULES[id] = validator;
}
/**
 * Gets an already defined rule
 */
function resolveRule(id) {
    return RULES[id];
}
/**
 * Guards from extension violations.
 */
function guardExtend(id, validator) {
    if (isCallable(validator)) {
        return;
    }
    throw new Error(`Extension Error: The validator '${id}' must be a function.`);
}

function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

const FormContextKey = Symbol('vee-validate-form');
const PublicFormContextKey = Symbol('vee-validate-form-context');
const FieldContextKey = Symbol('vee-validate-field-instance');
const IS_ABSENT = Symbol('Default empty value');

const isClient = typeof window !== 'undefined';
function isLocator(value) {
    return isCallable(value) && !!value.__locatorRef;
}
function isTypedSchema(value) {
    return !!value && isCallable(value.parse) && value.__type === 'VVTypedSchema';
}
function isYupValidator(value) {
    return !!value && isCallable(value.validate);
}
function hasCheckedAttr(type) {
    return type === 'checkbox' || type === 'radio';
}
function isContainerValue(value) {
    return isObject(value) || Array.isArray(value);
}
/**
 * True if the value is an empty object or array
 */
function isEmptyContainer(value) {
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    return isObject(value) && Object.keys(value).length === 0;
}
/**
 * Checks if the path opted out of nested fields using `[fieldName]` syntax
 */
function isNotNestedPath(path) {
    return /^\[.+\]$/i.test(path);
}
/**
 * Checks if an element is a native HTML5 multi-select input element
 */
function isNativeMultiSelect(el) {
    return isNativeSelect(el) && el.multiple;
}
/**
 * Checks if an element is a native HTML5 select input element
 */
function isNativeSelect(el) {
    return el.tagName === 'SELECT';
}
/**
 * Checks if a tag name with attrs object will render a native multi-select element
 */
function isNativeMultiSelectNode(tag, attrs) {
    // The falsy value array is the values that Vue won't add the `multiple` prop if it has one of these values
    const hasTruthyBindingValue = ![false, null, undefined, 0].includes(attrs.multiple) && !Number.isNaN(attrs.multiple);
    return tag === 'select' && 'multiple' in attrs && hasTruthyBindingValue;
}
/**
 * Checks if a node should have a `:value` binding or not
 *
 * These nodes should not have a value binding
 * For files, because they are not reactive
 * For multi-selects because the value binding will reset the value
 */
function shouldHaveValueBinding(tag, attrs) {
    return !isNativeMultiSelectNode(tag, attrs) && attrs.type !== 'file' && !hasCheckedAttr(attrs.type);
}
function isFormSubmitEvent(evt) {
    return isEvent(evt) && evt.target && 'submit' in evt.target;
}
function isEvent(evt) {
    if (!evt) {
        return false;
    }
    if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
        return true;
    }
    // this is for IE and Cypress #3161
    /* istanbul ignore next */
    if (evt && evt.srcElement) {
        return true;
    }
    return false;
}
function isPropPresent(obj, prop) {
    return prop in obj && obj[prop] !== IS_ABSENT;
}
/**
 * Compares if two values are the same borrowed from:
 * https://github.com/epoberezkin/fast-deep-equal
 * We added a case for file matching since `Object.keys` doesn't work with Files.
 *
 * NB: keys with the value undefined are ignored in the evaluation and considered equal to missing keys.
 * */
function isEqual(a, b) {
    if (a === b)
        return true;
    if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (a.constructor !== b.constructor)
            return false;
        // eslint-disable-next-line no-var
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length)
                return false;
            for (i = length; i-- !== 0;)
                if (!isEqual(a[i], b[i]))
                    return false;
            return true;
        }
        if (a instanceof Map && b instanceof Map) {
            if (a.size !== b.size)
                return false;
            for (i of a.entries())
                if (!b.has(i[0]))
                    return false;
            for (i of a.entries())
                if (!isEqual(i[1], b.get(i[0])))
                    return false;
            return true;
        }
        // We added this part for file comparison, arguably a little naive but should work for most cases.
        // #3911
        if (isFile(a) && isFile(b)) {
            if (a.size !== b.size)
                return false;
            if (a.name !== b.name)
                return false;
            if (a.lastModified !== b.lastModified)
                return false;
            if (a.type !== b.type)
                return false;
            return true;
        }
        if (a instanceof Set && b instanceof Set) {
            if (a.size !== b.size)
                return false;
            for (i of a.entries())
                if (!b.has(i[0]))
                    return false;
            return true;
        }
        if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            length = a.length;
            if (length != b.length)
                return false;
            for (i = length; i-- !== 0;)
                if (a[i] !== b[i])
                    return false;
            return true;
        }
        if (a.constructor === RegExp)
            return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
            return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
            return a.toString() === b.toString();
        // Remove undefined values before object comparison
        a = normalizeObject(a);
        b = normalizeObject(b);
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
            return false;
        for (i = length; i-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
                return false;
        for (i = length; i-- !== 0;) {
            // eslint-disable-next-line no-var
            var key = keys[i];
            if (!isEqual(a[key], b[key]))
                return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
}
/**
 * Returns a new object where keys with an `undefined` value are removed.
 *
 * @param a object to normalize
 */
function normalizeObject(a) {
    return Object.fromEntries(Object.entries(a).filter(([, value]) => value !== undefined));
}
function isFile(a) {
    if (!isClient) {
        return false;
    }
    return a instanceof File;
}

function cleanupNonNestedPath(path) {
    if (isNotNestedPath(path)) {
        return path.replace(/\[|\]/gi, '');
    }
    return path;
}
function getFromPath(object, path, fallback) {
    if (!object) {
        return fallback;
    }
    if (isNotNestedPath(path)) {
        return object[cleanupNonNestedPath(path)];
    }
    const resolvedValue = (path || '')
        .split(/\.|\[(\d+)\]/)
        .filter(Boolean)
        .reduce((acc, propKey) => {
        if (isContainerValue(acc) && propKey in acc) {
            return acc[propKey];
        }
        return fallback;
    }, object);
    return resolvedValue;
}
/**
 * Sets a nested property value in a path, creates the path properties if it doesn't exist
 */
function setInPath(object, path, value) {
    if (isNotNestedPath(path)) {
        object[cleanupNonNestedPath(path)] = value;
        return;
    }
    const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
    let acc = object;
    for (let i = 0; i < keys.length; i++) {
        // Last key, set it
        if (i === keys.length - 1) {
            acc[keys[i]] = value;
            return;
        }
        // Key does not exist, create a container for it
        if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
            // container can be either an object or an array depending on the next key if it exists
            acc[keys[i]] = isIndex(keys[i + 1]) ? [] : {};
        }
        acc = acc[keys[i]];
    }
}
function unset(object, key) {
    if (Array.isArray(object) && isIndex(key)) {
        object.splice(Number(key), 1);
        return;
    }
    if (isObject(object)) {
        delete object[key];
    }
}
/**
 * Removes a nested property from object
 */
function unsetPath(object, path) {
    if (isNotNestedPath(path)) {
        delete object[cleanupNonNestedPath(path)];
        return;
    }
    const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
    let acc = object;
    for (let i = 0; i < keys.length; i++) {
        // Last key, unset it
        if (i === keys.length - 1) {
            unset(acc, keys[i]);
            break;
        }
        // Key does not exist, exit
        if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
            break;
        }
        acc = acc[keys[i]];
    }
    const pathValues = keys.map((_, idx) => {
        return getFromPath(object, keys.slice(0, idx).join('.'));
    });
    for (let i = pathValues.length - 1; i >= 0; i--) {
        if (!isEmptyContainer(pathValues[i])) {
            continue;
        }
        if (i === 0) {
            unset(object, keys[0]);
            continue;
        }
        unset(pathValues[i - 1], keys[i - 1]);
    }
}
/**
 * A typed version of Object.keys
 */
function keysOf(record) {
    return Object.keys(record);
}
// Uses same component provide as its own injections
// Due to changes in https://github.com/vuejs/vue-next/pull/2424
function injectWithSelf(symbol, def = undefined) {
    const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    return (vm === null || vm === void 0 ? void 0 : vm.provides[symbol]) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(symbol, def);
}
function warn(message) {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.warn)(`[vee-validate]: ${message}`);
}
function resolveNextCheckboxValue(currentValue, checkedValue, uncheckedValue) {
    if (Array.isArray(currentValue)) {
        const newVal = [...currentValue];
        // Use isEqual since checked object values can possibly fail the equality check #3883
        const idx = newVal.findIndex(v => isEqual(v, checkedValue));
        idx >= 0 ? newVal.splice(idx, 1) : newVal.push(checkedValue);
        return newVal;
    }
    return isEqual(currentValue, checkedValue) ? uncheckedValue : checkedValue;
}
/**
 * Creates a throttled function that only invokes the provided function (`func`) at most once per within a given number of milliseconds
 * (`limit`)
 */
function throttle(func, limit) {
    let inThrottle;
    let lastResult;
    return function (...args) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        if (!inThrottle) {
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
            lastResult = func.apply(context, args);
        }
        return lastResult;
    };
}
function debounceAsync(inner, ms = 0) {
    let timer = null;
    let resolves = [];
    return function (...args) {
        // Run the function after a certain amount of time
        if (timer) {
            clearTimeout(timer);
        }
        // @ts-expect-error timer is a number
        timer = setTimeout(() => {
            // Get the result of the inner function, then apply it to the resolve function of
            // each promise that has been created since the last time the inner function was run
            const result = inner(...args);
            resolves.forEach(r => r(result));
            resolves = [];
        }, ms);
        return new Promise(resolve => resolves.push(resolve));
    };
}
function applyModelModifiers(value, modifiers) {
    if (!isObject(modifiers)) {
        return value;
    }
    if (modifiers.number) {
        return toNumber(value);
    }
    return value;
}
function withLatest(fn, onDone) {
    let latestRun;
    return async function runLatest(...args) {
        const pending = fn(...args);
        latestRun = pending;
        const result = await pending;
        if (pending !== latestRun) {
            return result;
        }
        latestRun = undefined;
        return onDone(result, args);
    };
}
function computedDeep({ get, set }) {
    const baseRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(klona(get()));
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(get, newValue => {
        if (isEqual(newValue, baseRef.value)) {
            return;
        }
        baseRef.value = klona(newValue);
    }, {
        deep: true,
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(baseRef, newValue => {
        if (isEqual(newValue, get())) {
            return;
        }
        set(klona(newValue));
    }, {
        deep: true,
    });
    return baseRef;
}
function normalizeErrorItem(message) {
    return Array.isArray(message) ? message : message ? [message] : [];
}
function resolveFieldOrPathState(path) {
    const form = injectWithSelf(FormContextKey);
    const state = path ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => form === null || form === void 0 ? void 0 : form.getPathState((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path))) : undefined;
    const field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextKey);
    if (!field && !(state === null || state === void 0 ? void 0 : state.value)) {
        if ((true)) {
            warn(`field with name ${(0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path)} was not found`);
        }
    }
    return state || field;
}
function omit(obj, keys) {
    const target = {};
    for (const key in obj) {
        if (!keys.includes(key)) {
            target[key] = obj[key];
        }
    }
    return target;
}
function debounceNextTick(inner) {
    let lastTick = null;
    let resolves = [];
    return function (...args) {
        // Run the function after a certain amount of time
        const thisTick = (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            if (lastTick !== thisTick) {
                return;
            }
            // Get the result of the inner function, then apply it to the resolve function of
            // each promise that has been created since the last time the inner function was run
            const result = inner(...args);
            resolves.forEach(r => r(result));
            resolves = [];
            lastTick = null;
        });
        lastTick = thisTick;
        return new Promise(resolve => resolves.push(resolve));
    };
}

function normalizeChildren(tag, context, slotProps) {
    if (!context.slots.default) {
        return context.slots.default;
    }
    if (typeof tag === 'string' || !tag) {
        return context.slots.default(slotProps());
    }
    return {
        default: () => { var _a, _b; return (_b = (_a = context.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a, slotProps()); },
    };
}
/**
 * Vue adds a `_value` prop at the moment on the input elements to store the REAL value on them, real values are different than the `value` attribute
 * as they do not get casted to strings unlike `el.value` which preserves user-code behavior
 */
function getBoundValue(el) {
    if (hasValueBinding(el)) {
        return el._value;
    }
    return undefined;
}
/**
 * Vue adds a `_value` prop at the moment on the input elements to store the REAL value on them, real values are different than the `value` attribute
 * as they do not get casted to strings unlike `el.value` which preserves user-code behavior
 */
function hasValueBinding(el) {
    return '_value' in el;
}

function parseInputValue(el) {
    if (el.type === 'number') {
        return Number.isNaN(el.valueAsNumber) ? el.value : el.valueAsNumber;
    }
    if (el.type === 'range') {
        return Number.isNaN(el.valueAsNumber) ? el.value : el.valueAsNumber;
    }
    return el.value;
}
function normalizeEventValue(value) {
    if (!isEvent(value)) {
        return value;
    }
    const input = value.target;
    // Vue sets the current bound value on `_value` prop
    // for checkboxes it it should fetch the value binding type as is (boolean instead of string)
    if (hasCheckedAttr(input.type) && hasValueBinding(input)) {
        return getBoundValue(input);
    }
    if (input.type === 'file' && input.files) {
        const files = Array.from(input.files);
        return input.multiple ? files : files[0];
    }
    if (isNativeMultiSelect(input)) {
        return Array.from(input.options)
            .filter(opt => opt.selected && !opt.disabled)
            .map(getBoundValue);
    }
    // makes sure we get the actual `option` bound value
    // #3440
    if (isNativeSelect(input)) {
        const selectedOption = Array.from(input.options).find(opt => opt.selected);
        return selectedOption ? getBoundValue(selectedOption) : input.value;
    }
    return parseInputValue(input);
}

/**
 * Normalizes the given rules expression.
 */
function normalizeRules(rules) {
    const acc = {};
    Object.defineProperty(acc, '_$$isNormalized', {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false,
    });
    if (!rules) {
        return acc;
    }
    // Object is already normalized, skip.
    if (isObject(rules) && rules._$$isNormalized) {
        return rules;
    }
    if (isObject(rules)) {
        return Object.keys(rules).reduce((prev, curr) => {
            const params = normalizeParams(rules[curr]);
            if (rules[curr] !== false) {
                prev[curr] = buildParams(params);
            }
            return prev;
        }, acc);
    }
    /* istanbul ignore if */
    if (typeof rules !== 'string') {
        return acc;
    }
    return rules.split('|').reduce((prev, rule) => {
        const parsedRule = parseRule(rule);
        if (!parsedRule.name) {
            return prev;
        }
        prev[parsedRule.name] = buildParams(parsedRule.params);
        return prev;
    }, acc);
}
/**
 * Normalizes a rule param.
 */
function normalizeParams(params) {
    if (params === true) {
        return [];
    }
    if (Array.isArray(params)) {
        return params;
    }
    if (isObject(params)) {
        return params;
    }
    return [params];
}
function buildParams(provided) {
    const mapValueToLocator = (value) => {
        // A target param using interpolation
        if (typeof value === 'string' && value[0] === '@') {
            return createLocator(value.slice(1));
        }
        return value;
    };
    if (Array.isArray(provided)) {
        return provided.map(mapValueToLocator);
    }
    // #3073
    if (provided instanceof RegExp) {
        return [provided];
    }
    return Object.keys(provided).reduce((prev, key) => {
        prev[key] = mapValueToLocator(provided[key]);
        return prev;
    }, {});
}
/**
 * Parses a rule string expression.
 */
const parseRule = (rule) => {
    let params = [];
    const name = rule.split(':')[0];
    if (rule.includes(':')) {
        params = rule.split(':').slice(1).join(':').split(',');
    }
    return { name, params };
};
function createLocator(value) {
    const locator = (crossTable) => {
        var _a;
        const val = (_a = getFromPath(crossTable, value)) !== null && _a !== void 0 ? _a : crossTable[value];
        return val;
    };
    locator.__locatorRef = value;
    return locator;
}
function extractLocators(params) {
    if (Array.isArray(params)) {
        return params.filter(isLocator);
    }
    return keysOf(params)
        .filter(key => isLocator(params[key]))
        .map(key => params[key]);
}

const DEFAULT_CONFIG = {
    generateMessage: ({ field }) => `${field} is not valid.`,
    bails: true,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: true,
};
let currentConfig = Object.assign({}, DEFAULT_CONFIG);
const getConfig = () => currentConfig;
const setConfig = (newConf) => {
    currentConfig = Object.assign(Object.assign({}, currentConfig), newConf);
};
const configure = setConfig;

/**
 * Validates a value against the rules.
 */
async function validate(value, rules, options = {}) {
    const shouldBail = options === null || options === void 0 ? void 0 : options.bails;
    const field = {
        name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
        rules,
        label: options === null || options === void 0 ? void 0 : options.label,
        bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
        formData: (options === null || options === void 0 ? void 0 : options.values) || {},
    };
    const result = await _validate(field, value);
    return Object.assign(Object.assign({}, result), { valid: !result.errors.length });
}
/**
 * Starts the validation process.
 */
async function _validate(field, value) {
    const rules = field.rules;
    if (isTypedSchema(rules) || isYupValidator(rules)) {
        return validateFieldWithTypedSchema(value, Object.assign(Object.assign({}, field), { rules }));
    }
    // if a generic function or chain of generic functions
    if (isCallable(rules) || Array.isArray(rules)) {
        const ctx = {
            field: field.label || field.name,
            name: field.name,
            label: field.label,
            form: field.formData,
            value,
        };
        // Normalize the pipeline
        const pipeline = Array.isArray(rules) ? rules : [rules];
        const length = pipeline.length;
        const errors = [];
        for (let i = 0; i < length; i++) {
            const rule = pipeline[i];
            const result = await rule(value, ctx);
            const isValid = typeof result !== 'string' && !Array.isArray(result) && result;
            if (isValid) {
                continue;
            }
            if (Array.isArray(result)) {
                errors.push(...result);
            }
            else {
                const message = typeof result === 'string' ? result : _generateFieldError(ctx);
                errors.push(message);
            }
            if (field.bails) {
                return {
                    errors,
                };
            }
        }
        return {
            errors,
        };
    }
    const normalizedContext = Object.assign(Object.assign({}, field), { rules: normalizeRules(rules) });
    const errors = [];
    const rulesKeys = Object.keys(normalizedContext.rules);
    const length = rulesKeys.length;
    for (let i = 0; i < length; i++) {
        const rule = rulesKeys[i];
        const result = await _test(normalizedContext, value, {
            name: rule,
            params: normalizedContext.rules[rule],
        });
        if (result.error) {
            errors.push(result.error);
            if (field.bails) {
                return {
                    errors,
                };
            }
        }
    }
    return {
        errors,
    };
}
function isYupError(err) {
    return !!err && err.name === 'ValidationError';
}
function yupToTypedSchema(yupSchema) {
    const schema = {
        __type: 'VVTypedSchema',
        async parse(values, context) {
            var _a;
            try {
                const output = await yupSchema.validate(values, { abortEarly: false, context: (context === null || context === void 0 ? void 0 : context.formData) || {} });
                return {
                    output,
                    errors: [],
                };
            }
            catch (err) {
                // Yup errors have a name prop one them.
                // https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
                if (!isYupError(err)) {
                    throw err;
                }
                if (!((_a = err.inner) === null || _a === void 0 ? void 0 : _a.length) && err.errors.length) {
                    return { errors: [{ path: err.path, errors: err.errors }] };
                }
                const errors = err.inner.reduce((acc, curr) => {
                    const path = curr.path || '';
                    if (!acc[path]) {
                        acc[path] = { errors: [], path };
                    }
                    acc[path].errors.push(...curr.errors);
                    return acc;
                }, {});
                return { errors: Object.values(errors) };
            }
        },
    };
    return schema;
}
/**
 * Handles yup validation
 */
async function validateFieldWithTypedSchema(value, context) {
    const typedSchema = isTypedSchema(context.rules) ? context.rules : yupToTypedSchema(context.rules);
    const result = await typedSchema.parse(value, { formData: context.formData });
    const messages = [];
    for (const error of result.errors) {
        if (error.errors.length) {
            messages.push(...error.errors);
        }
    }
    return {
        value: result.value,
        errors: messages,
    };
}
/**
 * Tests a single input value against a rule.
 */
async function _test(field, value, rule) {
    const validator = resolveRule(rule.name);
    if (!validator) {
        throw new Error(`No such validator '${rule.name}' exists.`);
    }
    const params = fillTargetValues(rule.params, field.formData);
    const ctx = {
        field: field.label || field.name,
        name: field.name,
        label: field.label,
        value,
        form: field.formData,
        rule: Object.assign(Object.assign({}, rule), { params }),
    };
    const result = await validator(value, params, ctx);
    if (typeof result === 'string') {
        return {
            error: result,
        };
    }
    return {
        error: result ? undefined : _generateFieldError(ctx),
    };
}
/**
 * Generates error messages.
 */
function _generateFieldError(fieldCtx) {
    const message = getConfig().generateMessage;
    if (!message) {
        return 'Field is invalid';
    }
    return message(fieldCtx);
}
function fillTargetValues(params, crossTable) {
    const normalize = (value) => {
        if (isLocator(value)) {
            return value(crossTable);
        }
        return value;
    };
    if (Array.isArray(params)) {
        return params.map(normalize);
    }
    return Object.keys(params).reduce((acc, param) => {
        acc[param] = normalize(params[param]);
        return acc;
    }, {});
}
async function validateTypedSchema(schema, values) {
    const typedSchema = isTypedSchema(schema) ? schema : yupToTypedSchema(schema);
    const validationResult = await typedSchema.parse(klona(values), { formData: klona(values) });
    const results = {};
    const errors = {};
    for (const error of validationResult.errors) {
        const messages = error.errors;
        // Fixes issue with path mapping with Yup 1.0 including quotes around array indices
        const path = (error.path || '').replace(/\["(\d+)"\]/g, (_, m) => {
            return `[${m}]`;
        });
        results[path] = { valid: !messages.length, errors: messages };
        if (messages.length) {
            errors[path] = messages[0];
        }
    }
    return {
        valid: !validationResult.errors.length,
        results,
        errors,
        values: validationResult.value,
        source: 'schema',
    };
}
async function validateObjectSchema(schema, values, opts) {
    const paths = keysOf(schema);
    const validations = paths.map(async (path) => {
        var _a, _b, _c;
        const strings = (_a = opts === null || opts === void 0 ? void 0 : opts.names) === null || _a === void 0 ? void 0 : _a[path];
        const fieldResult = await validate(getFromPath(values, path), schema[path], {
            name: (strings === null || strings === void 0 ? void 0 : strings.name) || path,
            label: strings === null || strings === void 0 ? void 0 : strings.label,
            values: values,
            bails: (_c = (_b = opts === null || opts === void 0 ? void 0 : opts.bailsMap) === null || _b === void 0 ? void 0 : _b[path]) !== null && _c !== void 0 ? _c : true,
        });
        return Object.assign(Object.assign({}, fieldResult), { path });
    });
    let isAllValid = true;
    const validationResults = await Promise.all(validations);
    const results = {};
    const errors = {};
    for (const result of validationResults) {
        results[result.path] = {
            valid: result.valid,
            errors: result.errors,
        };
        if (!result.valid) {
            isAllValid = false;
            errors[result.path] = result.errors[0];
        }
    }
    return {
        valid: isAllValid,
        results,
        errors,
        source: 'schema',
    };
}

let ID_COUNTER = 0;
function useFieldState(path, init) {
    const { value, initialValue, setInitialValue } = _useFieldValue(path, init.modelValue, init.form);
    if (!init.form) {
        const { errors, setErrors } = createFieldErrors();
        const id = ID_COUNTER >= Number.MAX_SAFE_INTEGER ? 0 : ++ID_COUNTER;
        const meta = createFieldMeta(value, initialValue, errors, init.schema);
        function setState(state) {
            var _a;
            if ('value' in state) {
                value.value = state.value;
            }
            if ('errors' in state) {
                setErrors(state.errors);
            }
            if ('touched' in state) {
                meta.touched = (_a = state.touched) !== null && _a !== void 0 ? _a : meta.touched;
            }
            if ('initialValue' in state) {
                setInitialValue(state.initialValue);
            }
        }
        return {
            id,
            path,
            value,
            initialValue,
            meta,
            flags: { pendingUnmount: { [id]: false }, pendingReset: false },
            errors,
            setState,
        };
    }
    const state = init.form.createPathState(path, {
        bails: init.bails,
        label: init.label,
        type: init.type,
        validate: init.validate,
        schema: init.schema,
    });
    const errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => state.errors);
    function setState(state) {
        var _a, _b, _c;
        if ('value' in state) {
            value.value = state.value;
        }
        if ('errors' in state) {
            (_a = init.form) === null || _a === void 0 ? void 0 : _a.setFieldError((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), state.errors);
        }
        if ('touched' in state) {
            (_b = init.form) === null || _b === void 0 ? void 0 : _b.setFieldTouched((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), (_c = state.touched) !== null && _c !== void 0 ? _c : false);
        }
        if ('initialValue' in state) {
            setInitialValue(state.initialValue);
        }
    }
    return {
        id: Array.isArray(state.id) ? state.id[state.id.length - 1] : state.id,
        path,
        value,
        errors,
        meta: state,
        initialValue,
        flags: state.__flags,
        setState,
    };
}
/**
 * Creates the field value and resolves the initial value
 */
function _useFieldValue(path, modelValue, form) {
    const modelRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(modelValue));
    function resolveInitialValue() {
        if (!form) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(modelRef);
        }
        return getFromPath(form.initialValues.value, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(modelRef));
    }
    function setInitialValue(value) {
        if (!form) {
            modelRef.value = value;
            return;
        }
        form.setFieldInitialValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), value, true);
    }
    const initialValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(resolveInitialValue);
    // if no form is associated, use a regular ref.
    if (!form) {
        const value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(resolveInitialValue());
        return {
            value,
            initialValue,
            setInitialValue,
        };
    }
    // to set the initial value, first check if there is a current value, if there is then use it.
    // otherwise use the configured initial value if it exists.
    // prioritize model value over form values
    // #3429
    const currentValue = resolveModelValue(modelValue, form, initialValue, path);
    form.stageInitialValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), currentValue, true);
    // otherwise use a computed setter that triggers the `setFieldValue`
    const value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)({
        get() {
            return getFromPath(form.values, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path));
        },
        set(newVal) {
            form.setFieldValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), newVal, false);
        },
    });
    return {
        value,
        initialValue,
        setInitialValue,
    };
}
/*
  to set the initial value, first check if there is a current value, if there is then use it.
  otherwise use the configured initial value if it exists.
  prioritize model value over form values
  #3429
*/
function resolveModelValue(modelValue, form, initialValue, path) {
    if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(modelValue)) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(modelValue);
    }
    if (modelValue !== undefined) {
        return modelValue;
    }
    return getFromPath(form.values, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValue));
}
/**
 * Creates meta flags state and some associated effects with them
 */
function createFieldMeta(currentValue, initialValue, errors, schema) {
    const isRequired = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => { var _a, _b, _c; return (_c = (_b = (_a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(schema)) === null || _a === void 0 ? void 0 : _a.describe) === null || _b === void 0 ? void 0 : _b.call(_a).required) !== null && _c !== void 0 ? _c : false; });
    const meta = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
        touched: false,
        pending: false,
        valid: true,
        required: isRequired,
        validated: !!(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(errors).length,
        initialValue: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValue)),
        dirty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return !isEqual((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(currentValue), (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValue));
        }),
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(errors, value => {
        meta.valid = !value.length;
    }, {
        immediate: true,
        flush: 'sync',
    });
    return meta;
}
/**
 * Creates the error message state for the field state
 */
function createFieldErrors() {
    const errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    return {
        errors,
        setErrors: (messages) => {
            errors.value = normalizeErrorItem(messages);
        },
    };
}

const DEVTOOLS_FORMS = {};
const DEVTOOLS_FIELDS = {};
const INSPECTOR_ID = 'vee-validate-inspector';
const COLORS = {
    error: 0xbd4b4b,
    success: 0x06d77b,
    unknown: 0x54436b,
    white: 0xffffff,
    black: 0x000000,
    blue: 0x035397,
    purple: 0xb980f0,
    orange: 0xf5a962,
    gray: 0xbbbfca,
};
let SELECTED_NODE = null;
/**
 * Plugin API
 */
let API;
async function installDevtoolsPlugin(app) {
    if ((true)) {
        if (!isClient) {
            return;
        }
        const devtools = await __webpack_require__.e(/*! import() */ "node_modules_vue_devtools-api_dist_index_js").then(__webpack_require__.bind(__webpack_require__, /*! @vue/devtools-api */ "./node_modules/@vue/devtools-api/dist/index.js"));
        devtools.setupDevtoolsPlugin({
            id: 'vee-validate-devtools-plugin',
            label: 'VeeValidate Plugin',
            packageName: 'vee-validate',
            homepage: 'https://vee-validate.logaretm.com/v4',
            app,
            logo: 'https://vee-validate.logaretm.com/v4/logo.png',
        }, api => {
            API = api;
            api.addInspector({
                id: INSPECTOR_ID,
                icon: 'rule',
                label: 'vee-validate',
                noSelectionText: 'Select a vee-validate node to inspect',
                actions: [
                    {
                        icon: 'done_outline',
                        tooltip: 'Validate selected item',
                        action: async () => {
                            if (!SELECTED_NODE) {
                                // eslint-disable-next-line no-console
                                console.error('There is not a valid selected vee-validate node or component');
                                return;
                            }
                            if (SELECTED_NODE.type === 'field') {
                                await SELECTED_NODE.field.validate();
                                return;
                            }
                            if (SELECTED_NODE.type === 'form') {
                                await SELECTED_NODE.form.validate();
                                return;
                            }
                            if (SELECTED_NODE.type === 'pathState') {
                                await SELECTED_NODE.form.validateField(SELECTED_NODE.state.path);
                            }
                        },
                    },
                    {
                        icon: 'delete_sweep',
                        tooltip: 'Clear validation state of the selected item',
                        action: () => {
                            if (!SELECTED_NODE) {
                                // eslint-disable-next-line no-console
                                console.error('There is not a valid selected vee-validate node or component');
                                return;
                            }
                            if (SELECTED_NODE.type === 'field') {
                                SELECTED_NODE.field.resetField();
                                return;
                            }
                            if (SELECTED_NODE.type === 'form') {
                                SELECTED_NODE.form.resetForm();
                            }
                            if (SELECTED_NODE.type === 'pathState') {
                                SELECTED_NODE.form.resetField(SELECTED_NODE.state.path);
                            }
                        },
                    },
                ],
            });
            api.on.getInspectorTree(payload => {
                if (payload.inspectorId !== INSPECTOR_ID) {
                    return;
                }
                const forms = Object.values(DEVTOOLS_FORMS);
                const fields = Object.values(DEVTOOLS_FIELDS);
                payload.rootNodes = [
                    ...forms.map(mapFormForDevtoolsInspector),
                    ...fields.map(field => mapFieldForDevtoolsInspector(field)),
                ];
            });
            api.on.getInspectorState(payload => {
                if (payload.inspectorId !== INSPECTOR_ID) {
                    return;
                }
                const { form, field, state, type } = decodeNodeId(payload.nodeId);
                api.unhighlightElement();
                if (form && type === 'form') {
                    payload.state = buildFormState(form);
                    SELECTED_NODE = { type: 'form', form };
                    api.highlightElement(form._vm);
                    return;
                }
                if (state && type === 'pathState' && form) {
                    payload.state = buildFieldState(state);
                    SELECTED_NODE = { type: 'pathState', state, form };
                    return;
                }
                if (field && type === 'field') {
                    payload.state = buildFieldState({
                        errors: field.errors.value,
                        dirty: field.meta.dirty,
                        valid: field.meta.valid,
                        touched: field.meta.touched,
                        value: field.value.value,
                        initialValue: field.meta.initialValue,
                    });
                    SELECTED_NODE = { field, type: 'field' };
                    api.highlightElement(field._vm);
                    return;
                }
                SELECTED_NODE = null;
                api.unhighlightElement();
            });
        });
    }
}
const refreshInspector = throttle(() => {
    setTimeout(async () => {
        await (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)();
        API === null || API === void 0 ? void 0 : API.sendInspectorState(INSPECTOR_ID);
        API === null || API === void 0 ? void 0 : API.sendInspectorTree(INSPECTOR_ID);
    }, 100);
}, 100);
function registerFormWithDevTools(form) {
    const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    if (!API) {
        const app = vm === null || vm === void 0 ? void 0 : vm.appContext.app;
        if (!app) {
            return;
        }
        installDevtoolsPlugin(app);
    }
    DEVTOOLS_FORMS[form.formId] = Object.assign({}, form);
    DEVTOOLS_FORMS[form.formId]._vm = vm;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
        delete DEVTOOLS_FORMS[form.formId];
        refreshInspector();
    });
    refreshInspector();
}
function registerSingleFieldWithDevtools(field) {
    const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    if (!API) {
        const app = vm === null || vm === void 0 ? void 0 : vm.appContext.app;
        if (!app) {
            return;
        }
        installDevtoolsPlugin(app);
    }
    DEVTOOLS_FIELDS[field.id] = Object.assign({}, field);
    DEVTOOLS_FIELDS[field.id]._vm = vm;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
        delete DEVTOOLS_FIELDS[field.id];
        refreshInspector();
    });
    refreshInspector();
}
function mapFormForDevtoolsInspector(form) {
    const { textColor, bgColor } = getValidityColors(form.meta.value.valid);
    const formTreeNodes = {};
    Object.values(form.getAllPathStates()).forEach(state => {
        setInPath(formTreeNodes, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path), mapPathForDevtoolsInspector(state, form));
    });
    function buildFormTree(tree, path = []) {
        const key = [...path].pop();
        if ('id' in tree) {
            return Object.assign(Object.assign({}, tree), { label: key || tree.label });
        }
        if (isObject(tree)) {
            return {
                id: `${path.join('.')}`,
                label: key || '',
                children: Object.keys(tree).map(key => buildFormTree(tree[key], [...path, key])),
            };
        }
        if (Array.isArray(tree)) {
            return {
                id: `${path.join('.')}`,
                label: `${key}[]`,
                children: tree.map((c, idx) => buildFormTree(c, [...path, String(idx)])),
            };
        }
        return { id: '', label: '', children: [] };
    }
    const { children } = buildFormTree(formTreeNodes);
    return {
        id: encodeNodeId(form),
        label: form.name,
        children,
        tags: [
            {
                label: 'Form',
                textColor,
                backgroundColor: bgColor,
            },
            {
                label: `${form.getAllPathStates().length} fields`,
                textColor: COLORS.white,
                backgroundColor: COLORS.unknown,
            },
        ],
    };
}
function mapPathForDevtoolsInspector(state, form) {
    return {
        id: encodeNodeId(form, state),
        label: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path),
        tags: getFieldNodeTags(state.multiple, state.fieldsCount, state.type, state.valid, form),
    };
}
function mapFieldForDevtoolsInspector(field, form) {
    return {
        id: encodeNodeId(form, field),
        label: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.name),
        tags: getFieldNodeTags(false, 1, field.type, field.meta.valid, form),
    };
}
function getFieldNodeTags(multiple, fieldsCount, type, valid, form) {
    const { textColor, bgColor } = getValidityColors(valid);
    return [
        multiple
            ? undefined
            : {
                label: 'Field',
                textColor,
                backgroundColor: bgColor,
            },
        !form
            ? {
                label: 'Standalone',
                textColor: COLORS.black,
                backgroundColor: COLORS.gray,
            }
            : undefined,
        type === 'checkbox'
            ? {
                label: 'Checkbox',
                textColor: COLORS.white,
                backgroundColor: COLORS.blue,
            }
            : undefined,
        type === 'radio'
            ? {
                label: 'Radio',
                textColor: COLORS.white,
                backgroundColor: COLORS.purple,
            }
            : undefined,
        multiple
            ? {
                label: 'Multiple',
                textColor: COLORS.black,
                backgroundColor: COLORS.orange,
            }
            : undefined,
    ].filter(Boolean);
}
function encodeNodeId(form, stateOrField) {
    const type = stateOrField ? ('path' in stateOrField ? 'pathState' : 'field') : 'form';
    const fieldPath = stateOrField ? ('path' in stateOrField ? stateOrField === null || stateOrField === void 0 ? void 0 : stateOrField.path : (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(stateOrField === null || stateOrField === void 0 ? void 0 : stateOrField.name)) : '';
    const idObject = { f: form === null || form === void 0 ? void 0 : form.formId, ff: (stateOrField === null || stateOrField === void 0 ? void 0 : stateOrField.id) || fieldPath, type };
    return btoa(encodeURIComponent(JSON.stringify(idObject)));
}
function decodeNodeId(nodeId) {
    try {
        const idObject = JSON.parse(decodeURIComponent(atob(nodeId)));
        const form = DEVTOOLS_FORMS[idObject.f];
        if (!form && idObject.ff) {
            const field = DEVTOOLS_FIELDS[idObject.ff];
            if (!field) {
                return {};
            }
            return {
                type: idObject.type,
                field,
            };
        }
        if (!form) {
            return {};
        }
        const state = form.getPathState(idObject.ff);
        return {
            type: idObject.type,
            form,
            state,
        };
    }
    catch (err) {
        // console.error(`Devtools: [vee-validate] Failed to parse node id ${nodeId}`);
    }
    return {};
}
function buildFieldState(state) {
    return {
        'Field state': [
            { key: 'errors', value: state.errors },
            {
                key: 'initialValue',
                value: state.initialValue,
            },
            {
                key: 'currentValue',
                value: state.value,
            },
            {
                key: 'touched',
                value: state.touched,
            },
            {
                key: 'dirty',
                value: state.dirty,
            },
            {
                key: 'valid',
                value: state.valid,
            },
        ],
    };
}
function buildFormState(form) {
    const { errorBag, meta, values, isSubmitting, isValidating, submitCount } = form;
    return {
        'Form state': [
            {
                key: 'submitCount',
                value: submitCount.value,
            },
            {
                key: 'isSubmitting',
                value: isSubmitting.value,
            },
            {
                key: 'isValidating',
                value: isValidating.value,
            },
            {
                key: 'touched',
                value: meta.value.touched,
            },
            {
                key: 'dirty',
                value: meta.value.dirty,
            },
            {
                key: 'valid',
                value: meta.value.valid,
            },
            {
                key: 'initialValues',
                value: meta.value.initialValues,
            },
            {
                key: 'currentValues',
                value: values,
            },
            {
                key: 'errors',
                value: keysOf(errorBag.value).reduce((acc, key) => {
                    var _a;
                    const message = (_a = errorBag.value[key]) === null || _a === void 0 ? void 0 : _a[0];
                    if (message) {
                        acc[key] = message;
                    }
                    return acc;
                }, {}),
            },
        ],
    };
}
/**
 * Resolves the tag color based on the form state
 */
function getValidityColors(valid) {
    return {
        bgColor: valid ? COLORS.success : COLORS.error,
        textColor: valid ? COLORS.black : COLORS.white,
    };
}

/**
 * Creates a field composite.
 */
function useField(path, rules, opts) {
    if (hasCheckedAttr(opts === null || opts === void 0 ? void 0 : opts.type)) {
        return useFieldWithChecked(path, rules, opts);
    }
    return _useField(path, rules, opts);
}
function _useField(path, rules, opts) {
    const { initialValue: modelValue, validateOnMount, bails, type, checkedValue, label, validateOnValueUpdate, uncheckedValue, controlled, keepValueOnUnmount, syncVModel, form: controlForm, } = normalizeOptions(opts);
    const injectedForm = controlled ? injectWithSelf(FormContextKey) : undefined;
    const form = controlForm || injectedForm;
    const name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => normalizeFormPath((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path)));
    const validator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const schema = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(form === null || form === void 0 ? void 0 : form.schema);
        if (schema) {
            return undefined;
        }
        const rulesValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(rules);
        if (isYupValidator(rulesValue) ||
            isTypedSchema(rulesValue) ||
            isCallable(rulesValue) ||
            Array.isArray(rulesValue)) {
            return rulesValue;
        }
        return normalizeRules(rulesValue);
    });
    const isTyped = !isCallable(validator.value) && isTypedSchema((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(rules));
    const { id, value, initialValue, meta, setState, errors, flags } = useFieldState(name, {
        modelValue,
        form,
        bails,
        label,
        type,
        validate: validator.value ? validate$1 : undefined,
        schema: isTyped ? rules : undefined,
    });
    const errorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => errors.value[0]);
    if (syncVModel) {
        useVModel({
            value,
            prop: syncVModel,
            handleChange,
            shouldValidate: () => validateOnValueUpdate && !flags.pendingReset,
        });
    }
    /**
     * Handles common onBlur meta update
     */
    const handleBlur = (evt, shouldValidate = false) => {
        meta.touched = true;
        if (shouldValidate) {
            validateWithStateMutation();
        }
    };
    async function validateCurrentValue(mode) {
        var _a, _b;
        if (form === null || form === void 0 ? void 0 : form.validateSchema) {
            const { results } = await form.validateSchema(mode);
            return (_a = results[(0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(name)]) !== null && _a !== void 0 ? _a : { valid: true, errors: [] };
        }
        if (validator.value) {
            return validate(value.value, validator.value, {
                name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(name),
                label: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(label),
                values: (_b = form === null || form === void 0 ? void 0 : form.values) !== null && _b !== void 0 ? _b : {},
                bails,
            });
        }
        return { valid: true, errors: [] };
    }
    const validateWithStateMutation = withLatest(async () => {
        meta.pending = true;
        meta.validated = true;
        return validateCurrentValue('validated-only');
    }, result => {
        if (flags.pendingUnmount[field.id]) {
            return result;
        }
        setState({ errors: result.errors });
        meta.pending = false;
        meta.valid = result.valid;
        return result;
    });
    const validateValidStateOnly = withLatest(async () => {
        return validateCurrentValue('silent');
    }, result => {
        meta.valid = result.valid;
        return result;
    });
    function validate$1(opts) {
        if ((opts === null || opts === void 0 ? void 0 : opts.mode) === 'silent') {
            return validateValidStateOnly();
        }
        return validateWithStateMutation();
    }
    // Common input/change event handler
    function handleChange(e, shouldValidate = true) {
        const newValue = normalizeEventValue(e);
        setValue(newValue, shouldValidate);
    }
    // Runs the initial validation
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        if (validateOnMount) {
            return validateWithStateMutation();
        }
        // validate self initially if no form was handling this
        // forms should have their own initial silent validation run to make things more efficient
        if (!form || !form.validateSchema) {
            validateValidStateOnly();
        }
    });
    function setTouched(isTouched) {
        meta.touched = isTouched;
    }
    function resetField(state) {
        var _a;
        const newValue = state && 'value' in state ? state.value : initialValue.value;
        setState({
            value: klona(newValue),
            initialValue: klona(newValue),
            touched: (_a = state === null || state === void 0 ? void 0 : state.touched) !== null && _a !== void 0 ? _a : false,
            errors: (state === null || state === void 0 ? void 0 : state.errors) || [],
        });
        meta.pending = false;
        meta.validated = false;
        validateValidStateOnly();
    }
    const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    function setValue(newValue, shouldValidate = true) {
        value.value = vm && syncVModel ? applyModelModifiers(newValue, vm.props.modelModifiers) : newValue;
        const validateFn = shouldValidate ? validateWithStateMutation : validateValidStateOnly;
        validateFn();
    }
    function setErrors(errors) {
        setState({ errors: Array.isArray(errors) ? errors : [errors] });
    }
    const valueProxy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)({
        get() {
            return value.value;
        },
        set(newValue) {
            setValue(newValue, validateOnValueUpdate);
        },
    });
    const field = {
        id,
        name,
        label,
        value: valueProxy,
        meta,
        errors,
        errorMessage,
        type,
        checkedValue,
        uncheckedValue,
        bails,
        keepValueOnUnmount,
        resetField,
        handleReset: () => resetField(),
        validate: validate$1,
        handleChange,
        handleBlur,
        setState,
        setTouched,
        setErrors,
        setValue,
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(FieldContextKey, field);
    if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(rules) && typeof (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(rules) !== 'function') {
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(rules, (value, oldValue) => {
            if (isEqual(value, oldValue)) {
                return;
            }
            meta.validated ? validateWithStateMutation() : validateValidStateOnly();
        }, {
            deep: true,
        });
    }
    if ((true)) {
        field._vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => (Object.assign(Object.assign({ errors: errors.value }, meta), { value: value.value })), refreshInspector, {
            deep: true,
        });
        if (!form) {
            registerSingleFieldWithDevtools(field);
        }
    }
    // if no associated form return the field API immediately
    if (!form) {
        return field;
    }
    // associate the field with the given form
    // extract cross-field dependencies in a computed prop
    const dependencies = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const rulesVal = validator.value;
        // is falsy, a function schema or a yup schema
        if (!rulesVal ||
            isCallable(rulesVal) ||
            isYupValidator(rulesVal) ||
            isTypedSchema(rulesVal) ||
            Array.isArray(rulesVal)) {
            return {};
        }
        return Object.keys(rulesVal).reduce((acc, rule) => {
            const deps = extractLocators(rulesVal[rule])
                .map((dep) => dep.__locatorRef)
                .reduce((depAcc, depName) => {
                const depValue = getFromPath(form.values, depName) || form.values[depName];
                if (depValue !== undefined) {
                    depAcc[depName] = depValue;
                }
                return depAcc;
            }, {});
            Object.assign(acc, deps);
            return acc;
        }, {});
    });
    // Adds a watcher that runs the validation whenever field dependencies change
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(dependencies, (deps, oldDeps) => {
        // Skip if no dependencies or if the field wasn't manipulated
        if (!Object.keys(deps).length) {
            return;
        }
        const shouldValidate = !isEqual(deps, oldDeps);
        if (shouldValidate) {
            meta.validated ? validateWithStateMutation() : validateValidStateOnly();
        }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
        var _a;
        const shouldKeepValue = (_a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(field.keepValueOnUnmount)) !== null && _a !== void 0 ? _a : (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(form.keepValuesOnUnmount);
        const path = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(name);
        if (shouldKeepValue || !form || flags.pendingUnmount[field.id]) {
            form === null || form === void 0 ? void 0 : form.removePathState(path, id);
            return;
        }
        flags.pendingUnmount[field.id] = true;
        const pathState = form.getPathState(path);
        const matchesId = Array.isArray(pathState === null || pathState === void 0 ? void 0 : pathState.id) && (pathState === null || pathState === void 0 ? void 0 : pathState.multiple)
            ? pathState === null || pathState === void 0 ? void 0 : pathState.id.includes(field.id)
            : (pathState === null || pathState === void 0 ? void 0 : pathState.id) === field.id;
        if (!matchesId) {
            return;
        }
        if ((pathState === null || pathState === void 0 ? void 0 : pathState.multiple) && Array.isArray(pathState.value)) {
            const valueIdx = pathState.value.findIndex(i => isEqual(i, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(field.checkedValue)));
            if (valueIdx > -1) {
                const newVal = [...pathState.value];
                newVal.splice(valueIdx, 1);
                form.setFieldValue(path, newVal);
            }
            if (Array.isArray(pathState.id)) {
                pathState.id.splice(pathState.id.indexOf(field.id), 1);
            }
        }
        else {
            form.unsetPathValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(name));
        }
        form.removePathState(path, id);
    });
    return field;
}
/**
 * Normalizes partial field options to include the full options
 */
function normalizeOptions(opts) {
    const defaults = () => ({
        initialValue: undefined,
        validateOnMount: false,
        bails: true,
        label: undefined,
        validateOnValueUpdate: true,
        keepValueOnUnmount: undefined,
        syncVModel: false,
        controlled: true,
    });
    const isVModelSynced = !!(opts === null || opts === void 0 ? void 0 : opts.syncVModel);
    const modelPropName = typeof (opts === null || opts === void 0 ? void 0 : opts.syncVModel) === 'string' ? opts.syncVModel : (opts === null || opts === void 0 ? void 0 : opts.modelPropName) || 'modelValue';
    const initialValue = isVModelSynced && !('initialValue' in (opts || {}))
        ? getCurrentModelValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)(), modelPropName)
        : opts === null || opts === void 0 ? void 0 : opts.initialValue;
    if (!opts) {
        return Object.assign(Object.assign({}, defaults()), { initialValue });
    }
    // TODO: Deprecate this in next major release
    const checkedValue = 'valueProp' in opts ? opts.valueProp : opts.checkedValue;
    const controlled = 'standalone' in opts ? !opts.standalone : opts.controlled;
    const syncVModel = (opts === null || opts === void 0 ? void 0 : opts.modelPropName) || (opts === null || opts === void 0 ? void 0 : opts.syncVModel) || false;
    return Object.assign(Object.assign(Object.assign({}, defaults()), (opts || {})), { initialValue, controlled: controlled !== null && controlled !== void 0 ? controlled : true, checkedValue,
        syncVModel });
}
function useFieldWithChecked(name, rules, opts) {
    const form = !(opts === null || opts === void 0 ? void 0 : opts.standalone) ? injectWithSelf(FormContextKey) : undefined;
    const checkedValue = opts === null || opts === void 0 ? void 0 : opts.checkedValue;
    const uncheckedValue = opts === null || opts === void 0 ? void 0 : opts.uncheckedValue;
    function patchCheckedApi(field) {
        const handleChange = field.handleChange;
        const checked = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const currentValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(field.value);
            const checkedVal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(checkedValue);
            return Array.isArray(currentValue)
                ? currentValue.findIndex(v => isEqual(v, checkedVal)) >= 0
                : isEqual(checkedVal, currentValue);
        });
        function handleCheckboxChange(e, shouldValidate = true) {
            var _a, _b;
            if (checked.value === ((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.checked)) {
                if (shouldValidate) {
                    field.validate();
                }
                return;
            }
            const path = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(name);
            const pathState = form === null || form === void 0 ? void 0 : form.getPathState(path);
            const value = normalizeEventValue(e);
            let newValue = (_b = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(checkedValue)) !== null && _b !== void 0 ? _b : value;
            if (form && (pathState === null || pathState === void 0 ? void 0 : pathState.multiple) && pathState.type === 'checkbox') {
                newValue = resolveNextCheckboxValue(getFromPath(form.values, path) || [], newValue, undefined);
            }
            else if ((opts === null || opts === void 0 ? void 0 : opts.type) === 'checkbox') {
                newValue = resolveNextCheckboxValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(field.value), newValue, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(uncheckedValue));
            }
            handleChange(newValue, shouldValidate);
        }
        return Object.assign(Object.assign({}, field), { checked,
            checkedValue,
            uncheckedValue, handleChange: handleCheckboxChange });
    }
    return patchCheckedApi(_useField(name, rules, opts));
}
function useVModel({ prop, value, handleChange, shouldValidate }) {
    const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    /* istanbul ignore next */
    if (!vm || !prop) {
        if ((true)) {
            // eslint-disable-next-line no-console
            console.warn('Failed to setup model events because `useField` was not called in setup.');
        }
        return;
    }
    const propName = typeof prop === 'string' ? prop : 'modelValue';
    const emitName = `update:${propName}`;
    // Component doesn't have a model prop setup (must be defined on the props)
    if (!(propName in vm.props)) {
        return;
    }
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(value, newValue => {
        if (isEqual(newValue, getCurrentModelValue(vm, propName))) {
            return;
        }
        vm.emit(emitName, newValue);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => getCurrentModelValue(vm, propName), propValue => {
        if (propValue === IS_ABSENT && value.value === undefined) {
            return;
        }
        const newValue = propValue === IS_ABSENT ? undefined : propValue;
        if (isEqual(newValue, value.value)) {
            return;
        }
        handleChange(newValue, shouldValidate());
    });
}
function getCurrentModelValue(vm, propName) {
    if (!vm) {
        return undefined;
    }
    return vm.props[propName];
}

const FieldImpl = /** #__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Field',
    inheritAttrs: false,
    props: {
        as: {
            type: [String, Object],
            default: undefined,
        },
        name: {
            type: String,
            required: true,
        },
        rules: {
            type: [Object, String, Function],
            default: undefined,
        },
        validateOnMount: {
            type: Boolean,
            default: false,
        },
        validateOnBlur: {
            type: Boolean,
            default: undefined,
        },
        validateOnChange: {
            type: Boolean,
            default: undefined,
        },
        validateOnInput: {
            type: Boolean,
            default: undefined,
        },
        validateOnModelUpdate: {
            type: Boolean,
            default: undefined,
        },
        bails: {
            type: Boolean,
            default: () => getConfig().bails,
        },
        label: {
            type: String,
            default: undefined,
        },
        uncheckedValue: {
            type: null,
            default: undefined,
        },
        modelValue: {
            type: null,
            default: IS_ABSENT,
        },
        modelModifiers: {
            type: null,
            default: () => ({}),
        },
        'onUpdate:modelValue': {
            type: null,
            default: undefined,
        },
        standalone: {
            type: Boolean,
            default: false,
        },
        keepValue: {
            type: Boolean,
            default: undefined,
        },
    },
    setup(props, ctx) {
        const rules = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'rules');
        const name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'name');
        const label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'label');
        const uncheckedValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'uncheckedValue');
        const keepValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'keepValue');
        const { errors, value, errorMessage, validate: validateField, handleChange, handleBlur, setTouched, resetField, handleReset, meta, checked, setErrors, setValue, } = useField(name, rules, {
            validateOnMount: props.validateOnMount,
            bails: props.bails,
            standalone: props.standalone,
            type: ctx.attrs.type,
            initialValue: resolveInitialValue(props, ctx),
            // Only for checkboxes and radio buttons
            checkedValue: ctx.attrs.value,
            uncheckedValue,
            label,
            validateOnValueUpdate: props.validateOnModelUpdate,
            keepValueOnUnmount: keepValue,
            syncVModel: true,
        });
        // If there is a v-model applied on the component we need to emit the `update:modelValue` whenever the value binding changes
        const onChangeHandler = function handleChangeWithModel(e, shouldValidate = true) {
            handleChange(e, shouldValidate);
        };
        const sharedProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } = resolveValidationTriggers(props);
            function baseOnBlur(e) {
                handleBlur(e, validateOnBlur);
                if (isCallable(ctx.attrs.onBlur)) {
                    ctx.attrs.onBlur(e);
                }
            }
            function baseOnInput(e) {
                onChangeHandler(e, validateOnInput);
                if (isCallable(ctx.attrs.onInput)) {
                    ctx.attrs.onInput(e);
                }
            }
            function baseOnChange(e) {
                onChangeHandler(e, validateOnChange);
                if (isCallable(ctx.attrs.onChange)) {
                    ctx.attrs.onChange(e);
                }
            }
            const attrs = {
                name: props.name,
                onBlur: baseOnBlur,
                onInput: baseOnInput,
                onChange: baseOnChange,
            };
            attrs['onUpdate:modelValue'] = e => onChangeHandler(e, validateOnModelUpdate);
            return attrs;
        });
        const fieldProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const attrs = Object.assign({}, sharedProps.value);
            if (hasCheckedAttr(ctx.attrs.type) && checked) {
                attrs.checked = checked.value;
            }
            const tag = resolveTag(props, ctx);
            if (shouldHaveValueBinding(tag, ctx.attrs)) {
                attrs.value = value.value;
            }
            return attrs;
        });
        const componentProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return Object.assign(Object.assign({}, sharedProps.value), { modelValue: value.value });
        });
        function slotProps() {
            return {
                field: fieldProps.value,
                componentField: componentProps.value,
                value: value.value,
                meta,
                errors: errors.value,
                errorMessage: errorMessage.value,
                validate: validateField,
                resetField,
                handleChange: onChangeHandler,
                handleInput: e => onChangeHandler(e, false),
                handleReset,
                handleBlur: sharedProps.value.onBlur,
                setTouched,
                setErrors,
                setValue,
            };
        }
        ctx.expose({
            value,
            meta,
            errors,
            errorMessage,
            setErrors,
            setTouched,
            setValue,
            reset: resetField,
            validate: validateField,
            handleChange,
        });
        return () => {
            const tag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(resolveTag(props, ctx));
            const children = normalizeChildren(tag, ctx, slotProps);
            if (tag) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(tag, Object.assign(Object.assign({}, ctx.attrs), fieldProps.value), children);
            }
            return children;
        };
    },
});
function resolveTag(props, ctx) {
    let tag = props.as || '';
    if (!props.as && !ctx.slots.default) {
        tag = 'input';
    }
    return tag;
}
function resolveValidationTriggers(props) {
    var _a, _b, _c, _d;
    const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } = getConfig();
    return {
        validateOnInput: (_a = props.validateOnInput) !== null && _a !== void 0 ? _a : validateOnInput,
        validateOnChange: (_b = props.validateOnChange) !== null && _b !== void 0 ? _b : validateOnChange,
        validateOnBlur: (_c = props.validateOnBlur) !== null && _c !== void 0 ? _c : validateOnBlur,
        validateOnModelUpdate: (_d = props.validateOnModelUpdate) !== null && _d !== void 0 ? _d : validateOnModelUpdate,
    };
}
function resolveInitialValue(props, ctx) {
    // Gets the initial value either from `value` prop/attr or `v-model` binding (modelValue)
    // For checkboxes and radio buttons it will always be the model value not the `value` attribute
    if (!hasCheckedAttr(ctx.attrs.type)) {
        return isPropPresent(props, 'modelValue') ? props.modelValue : ctx.attrs.value;
    }
    return isPropPresent(props, 'modelValue') ? props.modelValue : undefined;
}
const Field = FieldImpl;

let FORM_COUNTER = 0;
const PRIVATE_PATH_STATE_KEYS = ['bails', 'fieldsCount', 'id', 'multiple', 'type', 'validate'];
function resolveInitialValues(opts) {
    const givenInitial = (opts === null || opts === void 0 ? void 0 : opts.initialValues) || {};
    const providedValues = Object.assign({}, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(givenInitial));
    const schema = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(opts === null || opts === void 0 ? void 0 : opts.validationSchema);
    if (schema && isTypedSchema(schema) && isCallable(schema.cast)) {
        return klona(schema.cast(providedValues) || {});
    }
    return klona(providedValues);
}
function useForm(opts) {
    var _a;
    const formId = FORM_COUNTER++;
    const name = (opts === null || opts === void 0 ? void 0 : opts.name) || 'Form';
    // Prevents fields from double resetting their values, which causes checkboxes to toggle their initial value
    let FIELD_ID_COUNTER = 0;
    // If the form is currently submitting
    const isSubmitting = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    // If the form is currently validating
    const isValidating = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    // The number of times the user tried to submit the form
    const submitCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    // field arrays managed by this form
    const fieldArrays = [];
    // a private ref for all form values
    const formValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(resolveInitialValues(opts));
    const pathStates = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    const extraErrorsBag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    const pathStateLookup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    const rebuildPathLookup = debounceNextTick(() => {
        pathStateLookup.value = pathStates.value.reduce((names, state) => {
            names[normalizeFormPath((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path))] = state;
            return names;
        }, {});
    });
    /**
     * Manually sets an error message on a specific field
     */
    function setFieldError(field, message) {
        const state = findPathState(field);
        if (!state) {
            if (typeof field === 'string') {
                extraErrorsBag.value[normalizeFormPath(field)] = normalizeErrorItem(message);
            }
            return;
        }
        // Move the error from the extras path if exists
        if (typeof field === 'string') {
            const normalizedPath = normalizeFormPath(field);
            if (extraErrorsBag.value[normalizedPath]) {
                delete extraErrorsBag.value[normalizedPath];
            }
        }
        state.errors = normalizeErrorItem(message);
        state.valid = !state.errors.length;
    }
    /**
     * Sets errors for the fields specified in the object
     */
    function setErrors(paths) {
        keysOf(paths).forEach(path => {
            setFieldError(path, paths[path]);
        });
    }
    if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
        setErrors(opts.initialErrors);
    }
    const errorBag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const pathErrors = pathStates.value.reduce((acc, state) => {
            if (state.errors.length) {
                acc[(0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path)] = state.errors;
            }
            return acc;
        }, {});
        return Object.assign(Object.assign({}, extraErrorsBag.value), pathErrors);
    });
    // Gets the first error of each field
    const errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return keysOf(errorBag.value).reduce((acc, key) => {
            const errors = errorBag.value[key];
            if (errors === null || errors === void 0 ? void 0 : errors.length) {
                acc[key] = errors[0];
            }
            return acc;
        }, {});
    });
    /**
     * Holds a computed reference to all fields names and labels
     */
    const fieldNames = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return pathStates.value.reduce((names, state) => {
            names[(0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path)] = { name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path) || '', label: state.label || '' };
            return names;
        }, {});
    });
    const fieldBailsMap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return pathStates.value.reduce((map, state) => {
            var _a;
            map[(0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path)] = (_a = state.bails) !== null && _a !== void 0 ? _a : true;
            return map;
        }, {});
    });
    // mutable non-reactive reference to initial errors
    // we need this to process initial errors then unset them
    const initialErrors = Object.assign({}, ((opts === null || opts === void 0 ? void 0 : opts.initialErrors) || {}));
    const keepValuesOnUnmount = (_a = opts === null || opts === void 0 ? void 0 : opts.keepValuesOnUnmount) !== null && _a !== void 0 ? _a : false;
    // initial form values
    const { initialValues, originalInitialValues, setInitialValues } = useFormInitialValues(pathStates, formValues, opts);
    // form meta aggregations
    const meta = useFormMeta(pathStates, formValues, originalInitialValues, errors);
    const controlledValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return pathStates.value.reduce((acc, state) => {
            const value = getFromPath(formValues, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path));
            setInPath(acc, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path), value);
            return acc;
        }, {});
    });
    const schema = opts === null || opts === void 0 ? void 0 : opts.validationSchema;
    function createPathState(path, config) {
        var _a, _b;
        const initialValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => getFromPath(initialValues.value, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path)));
        const pathStateExists = pathStateLookup.value[(0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path)];
        const isCheckboxOrRadio = (config === null || config === void 0 ? void 0 : config.type) === 'checkbox' || (config === null || config === void 0 ? void 0 : config.type) === 'radio';
        if (pathStateExists && isCheckboxOrRadio) {
            pathStateExists.multiple = true;
            const id = FIELD_ID_COUNTER++;
            if (Array.isArray(pathStateExists.id)) {
                pathStateExists.id.push(id);
            }
            else {
                pathStateExists.id = [pathStateExists.id, id];
            }
            pathStateExists.fieldsCount++;
            pathStateExists.__flags.pendingUnmount[id] = false;
            return pathStateExists;
        }
        const currentValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => getFromPath(formValues, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path)));
        const pathValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path);
        const unsetBatchIndex = UNSET_BATCH.findIndex(_path => _path === pathValue);
        if (unsetBatchIndex !== -1) {
            UNSET_BATCH.splice(unsetBatchIndex, 1);
        }
        const isRequired = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            var _a, _b, _c, _d;
            const schemaValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(schema);
            if (isTypedSchema(schemaValue)) {
                return (_b = (_a = schemaValue.describe) === null || _a === void 0 ? void 0 : _a.call(schemaValue, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path)).required) !== null && _b !== void 0 ? _b : false;
            }
            // Path own schema
            const configSchemaValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(config === null || config === void 0 ? void 0 : config.schema);
            if (isTypedSchema(configSchemaValue)) {
                return (_d = (_c = configSchemaValue.describe) === null || _c === void 0 ? void 0 : _c.call(configSchemaValue).required) !== null && _d !== void 0 ? _d : false;
            }
            return false;
        });
        const id = FIELD_ID_COUNTER++;
        const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
            id,
            path,
            touched: false,
            pending: false,
            valid: true,
            validated: !!((_a = initialErrors[pathValue]) === null || _a === void 0 ? void 0 : _a.length),
            required: isRequired,
            initialValue,
            errors: (0,vue__WEBPACK_IMPORTED_MODULE_0__.shallowRef)([]),
            bails: (_b = config === null || config === void 0 ? void 0 : config.bails) !== null && _b !== void 0 ? _b : false,
            label: config === null || config === void 0 ? void 0 : config.label,
            type: (config === null || config === void 0 ? void 0 : config.type) || 'default',
            value: currentValue,
            multiple: false,
            __flags: {
                pendingUnmount: { [id]: false },
                pendingReset: false,
            },
            fieldsCount: 1,
            validate: config === null || config === void 0 ? void 0 : config.validate,
            dirty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                return !isEqual((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(currentValue), (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValue));
            }),
        });
        pathStates.value.push(state);
        pathStateLookup.value[pathValue] = state;
        rebuildPathLookup();
        if (errors.value[pathValue] && !initialErrors[pathValue]) {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
                validateField(pathValue, { mode: 'silent' });
            });
        }
        // Handles when a path changes
        if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(path)) {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(path, newPath => {
                rebuildPathLookup();
                const nextValue = klona(currentValue.value);
                pathStateLookup.value[newPath] = state;
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
                    setInPath(formValues, newPath, nextValue);
                });
            });
        }
        return state;
    }
    /**
     * Batches validation runs in 5ms batches
     * Must have two distinct batch queues to make sure they don't override each other settings #3783
     */
    const debouncedSilentValidation = debounceAsync(_validateSchema, 5);
    const debouncedValidation = debounceAsync(_validateSchema, 5);
    const validateSchema = withLatest(async (mode) => {
        return (await (mode === 'silent'
            ? debouncedSilentValidation()
            : debouncedValidation()));
    }, (formResult, [mode]) => {
        // fields by id lookup
        // errors fields names, we need it to also check if custom errors are updated
        const currentErrorsPaths = keysOf(formCtx.errorBag.value);
        // collect all the keys from the schema and all fields
        // this ensures we have a complete key map of all the fields
        const paths = [
            ...new Set([...keysOf(formResult.results), ...pathStates.value.map(p => p.path), ...currentErrorsPaths]),
        ].sort();
        // aggregates the paths into a single result object while applying the results on the fields
        const results = paths.reduce((validation, _path) => {
            var _a;
            const expectedPath = _path;
            const pathState = findPathState(expectedPath) || findHoistedPath(expectedPath);
            const messages = ((_a = formResult.results[expectedPath]) === null || _a === void 0 ? void 0 : _a.errors) || [];
            // This is the real path of the field, because it might've been a hoisted field
            const path = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(pathState === null || pathState === void 0 ? void 0 : pathState.path) || expectedPath);
            // It is possible that multiple paths are collected across loops
            // We want to merge them to avoid overriding any iteration's results
            const fieldResult = mergeValidationResults({ errors: messages, valid: !messages.length }, validation.results[path]);
            validation.results[path] = fieldResult;
            if (!fieldResult.valid) {
                validation.errors[path] = fieldResult.errors[0];
            }
            // clean up extra errors if path state exists
            if (pathState && extraErrorsBag.value[path]) {
                delete extraErrorsBag.value[path];
            }
            // field not rendered
            if (!pathState) {
                setFieldError(path, messages);
                return validation;
            }
            // always update the valid flag regardless of the mode
            pathState.valid = fieldResult.valid;
            if (mode === 'silent') {
                return validation;
            }
            if (mode === 'validated-only' && !pathState.validated) {
                return validation;
            }
            setFieldError(pathState, fieldResult.errors);
            return validation;
        }, {
            valid: formResult.valid,
            results: {},
            errors: {},
            source: formResult.source,
        });
        if (formResult.values) {
            results.values = formResult.values;
            results.source = formResult.source;
        }
        keysOf(results.results).forEach(path => {
            var _a;
            const pathState = findPathState(path);
            if (!pathState) {
                return;
            }
            if (mode === 'silent') {
                return;
            }
            if (mode === 'validated-only' && !pathState.validated) {
                return;
            }
            setFieldError(pathState, (_a = results.results[path]) === null || _a === void 0 ? void 0 : _a.errors);
        });
        return results;
    });
    function mutateAllPathState(mutation) {
        pathStates.value.forEach(mutation);
    }
    function findPathState(path) {
        const normalizedPath = typeof path === 'string' ? normalizeFormPath(path) : path;
        const pathState = typeof normalizedPath === 'string' ? pathStateLookup.value[normalizedPath] : normalizedPath;
        return pathState;
    }
    function findHoistedPath(path) {
        const candidates = pathStates.value.filter(state => path.startsWith((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path)));
        return candidates.reduce((bestCandidate, candidate) => {
            if (!bestCandidate) {
                return candidate;
            }
            return (candidate.path.length > bestCandidate.path.length ? candidate : bestCandidate);
        }, undefined);
    }
    let UNSET_BATCH = [];
    let PENDING_UNSET;
    function unsetPathValue(path) {
        UNSET_BATCH.push(path);
        if (!PENDING_UNSET) {
            PENDING_UNSET = (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
                const sortedPaths = [...UNSET_BATCH].sort().reverse();
                sortedPaths.forEach(p => {
                    unsetPath(formValues, p);
                });
                UNSET_BATCH = [];
                PENDING_UNSET = null;
            });
        }
        return PENDING_UNSET;
    }
    function makeSubmissionFactory(onlyControlled) {
        return function submitHandlerFactory(fn, onValidationError) {
            return function submissionHandler(e) {
                if (e instanceof Event) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                // Touch all fields
                mutateAllPathState(s => (s.touched = true));
                isSubmitting.value = true;
                submitCount.value++;
                return validate()
                    .then(result => {
                    const values = klona(formValues);
                    if (result.valid && typeof fn === 'function') {
                        const controlled = klona(controlledValues.value);
                        let submittedValues = (onlyControlled ? controlled : values);
                        if (result.values) {
                            submittedValues =
                                result.source === 'schema'
                                    ? result.values
                                    : Object.assign({}, submittedValues, result.values);
                        }
                        return fn(submittedValues, {
                            evt: e,
                            controlledValues: controlled,
                            setErrors,
                            setFieldError,
                            setTouched,
                            setFieldTouched,
                            setValues,
                            setFieldValue,
                            resetForm,
                            resetField,
                        });
                    }
                    if (!result.valid && typeof onValidationError === 'function') {
                        onValidationError({
                            values,
                            evt: e,
                            errors: result.errors,
                            results: result.results,
                        });
                    }
                })
                    .then(returnVal => {
                    isSubmitting.value = false;
                    return returnVal;
                }, err => {
                    isSubmitting.value = false;
                    // re-throw the err so it doesn't go silent
                    throw err;
                });
            };
        };
    }
    const handleSubmitImpl = makeSubmissionFactory(false);
    const handleSubmit = handleSubmitImpl;
    handleSubmit.withControlled = makeSubmissionFactory(true);
    function removePathState(path, id) {
        const idx = pathStates.value.findIndex(s => {
            return s.path === path && (Array.isArray(s.id) ? s.id.includes(id) : s.id === id);
        });
        const pathState = pathStates.value[idx];
        if (idx === -1 || !pathState) {
            return;
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            validateField(path, { mode: 'silent', warn: false });
        });
        if (pathState.multiple && pathState.fieldsCount) {
            pathState.fieldsCount--;
        }
        if (Array.isArray(pathState.id)) {
            const idIndex = pathState.id.indexOf(id);
            if (idIndex >= 0) {
                pathState.id.splice(idIndex, 1);
            }
            delete pathState.__flags.pendingUnmount[id];
        }
        if (!pathState.multiple || pathState.fieldsCount <= 0) {
            pathStates.value.splice(idx, 1);
            unsetInitialValue(path);
            rebuildPathLookup();
            delete pathStateLookup.value[path];
        }
    }
    function destroyPath(path) {
        keysOf(pathStateLookup.value).forEach(key => {
            if (key.startsWith(path)) {
                delete pathStateLookup.value[key];
            }
        });
        pathStates.value = pathStates.value.filter(s => !s.path.startsWith(path));
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            rebuildPathLookup();
        });
    }
    const formCtx = {
        name,
        formId,
        values: formValues,
        controlledValues,
        errorBag,
        errors,
        schema,
        submitCount,
        meta,
        isSubmitting,
        isValidating,
        fieldArrays,
        keepValuesOnUnmount,
        validateSchema: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(schema) ? validateSchema : undefined,
        validate,
        setFieldError,
        validateField,
        setFieldValue,
        setValues,
        setErrors,
        setFieldTouched,
        setTouched,
        resetForm,
        resetField,
        handleSubmit,
        useFieldModel,
        defineInputBinds,
        defineComponentBinds: defineComponentBinds,
        defineField,
        stageInitialValue,
        unsetInitialValue,
        setFieldInitialValue,
        createPathState,
        getPathState: findPathState,
        unsetPathValue,
        removePathState,
        initialValues: initialValues,
        getAllPathStates: () => pathStates.value,
        destroyPath,
        isFieldTouched,
        isFieldDirty,
        isFieldValid,
    };
    /**
     * Sets a single field value
     */
    function setFieldValue(field, value, shouldValidate = true) {
        const clonedValue = klona(value);
        const path = typeof field === 'string' ? field : field.path;
        const pathState = findPathState(path);
        if (!pathState) {
            createPathState(path);
        }
        setInPath(formValues, path, clonedValue);
        if (shouldValidate) {
            validateField(path);
        }
    }
    function forceSetValues(fields, shouldValidate = true) {
        // clean up old values
        keysOf(formValues).forEach(key => {
            delete formValues[key];
        });
        // set up new values
        keysOf(fields).forEach(path => {
            setFieldValue(path, fields[path], false);
        });
        if (shouldValidate) {
            validate();
        }
    }
    /**
     * Sets multiple fields values
     */
    function setValues(fields, shouldValidate = true) {
        merge(formValues, fields);
        // regenerate the arrays when the form values change
        fieldArrays.forEach(f => f && f.reset());
        if (shouldValidate) {
            validate();
        }
    }
    function createModel(path, shouldValidate) {
        const pathState = findPathState((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path)) || createPathState(path);
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)({
            get() {
                return pathState.value;
            },
            set(value) {
                var _a;
                const pathValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path);
                setFieldValue(pathValue, value, (_a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(shouldValidate)) !== null && _a !== void 0 ? _a : false);
            },
        });
    }
    /**
     * Sets the touched meta state on a field
     */
    function setFieldTouched(field, isTouched) {
        const pathState = findPathState(field);
        if (pathState) {
            pathState.touched = isTouched;
        }
    }
    function isFieldTouched(field) {
        const pathState = findPathState(field);
        if (pathState) {
            return pathState.touched;
        }
        // Find all nested paths and consider their touched state
        return pathStates.value.filter(s => s.path.startsWith(field)).some(s => s.touched);
    }
    function isFieldDirty(field) {
        const pathState = findPathState(field);
        if (pathState) {
            return pathState.dirty;
        }
        return pathStates.value.filter(s => s.path.startsWith(field)).some(s => s.dirty);
    }
    function isFieldValid(field) {
        const pathState = findPathState(field);
        if (pathState) {
            return pathState.valid;
        }
        return pathStates.value.filter(s => s.path.startsWith(field)).every(s => s.valid);
    }
    /**
     * Sets the touched meta state on multiple fields
     */
    function setTouched(fields) {
        if (typeof fields === 'boolean') {
            mutateAllPathState(state => {
                state.touched = fields;
            });
            return;
        }
        keysOf(fields).forEach(field => {
            setFieldTouched(field, !!fields[field]);
        });
    }
    function resetField(field, state) {
        var _a;
        const newValue = state && 'value' in state ? state.value : getFromPath(initialValues.value, field);
        const pathState = findPathState(field);
        if (pathState) {
            pathState.__flags.pendingReset = true;
        }
        setFieldInitialValue(field, klona(newValue), true);
        setFieldValue(field, newValue, false);
        setFieldTouched(field, (_a = state === null || state === void 0 ? void 0 : state.touched) !== null && _a !== void 0 ? _a : false);
        setFieldError(field, (state === null || state === void 0 ? void 0 : state.errors) || []);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            if (pathState) {
                pathState.__flags.pendingReset = false;
            }
        });
    }
    /**
     * Resets all fields
     */
    function resetForm(resetState, opts) {
        let newValues = klona((resetState === null || resetState === void 0 ? void 0 : resetState.values) ? resetState.values : originalInitialValues.value);
        newValues = (opts === null || opts === void 0 ? void 0 : opts.force) ? newValues : merge(originalInitialValues.value, newValues);
        newValues = isTypedSchema(schema) && isCallable(schema.cast) ? schema.cast(newValues) : newValues;
        setInitialValues(newValues, { force: opts === null || opts === void 0 ? void 0 : opts.force });
        mutateAllPathState(state => {
            var _a;
            state.__flags.pendingReset = true;
            state.validated = false;
            state.touched = ((_a = resetState === null || resetState === void 0 ? void 0 : resetState.touched) === null || _a === void 0 ? void 0 : _a[(0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path)]) || false;
            setFieldValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path), getFromPath(newValues, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path)), false);
            setFieldError((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path), undefined);
        });
        (opts === null || opts === void 0 ? void 0 : opts.force) ? forceSetValues(newValues, false) : setValues(newValues, false);
        setErrors((resetState === null || resetState === void 0 ? void 0 : resetState.errors) || {});
        submitCount.value = (resetState === null || resetState === void 0 ? void 0 : resetState.submitCount) || 0;
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            validate({ mode: 'silent' });
            mutateAllPathState(state => {
                state.__flags.pendingReset = false;
            });
        });
    }
    async function validate(opts) {
        const mode = (opts === null || opts === void 0 ? void 0 : opts.mode) || 'force';
        if (mode === 'force') {
            mutateAllPathState(f => (f.validated = true));
        }
        if (formCtx.validateSchema) {
            return formCtx.validateSchema(mode);
        }
        isValidating.value = true;
        // No schema, each field is responsible to validate itself
        const validations = await Promise.all(pathStates.value.map(state => {
            if (!state.validate) {
                return Promise.resolve({
                    key: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path),
                    valid: true,
                    errors: [],
                    value: undefined,
                });
            }
            return state.validate(opts).then(result => {
                return {
                    key: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path),
                    valid: result.valid,
                    errors: result.errors,
                    value: result.value,
                };
            });
        }));
        isValidating.value = false;
        const results = {};
        const errors = {};
        const values = {};
        for (const validation of validations) {
            results[validation.key] = {
                valid: validation.valid,
                errors: validation.errors,
            };
            if (validation.value) {
                setInPath(values, validation.key, validation.value);
            }
            if (validation.errors.length) {
                errors[validation.key] = validation.errors[0];
            }
        }
        return {
            valid: validations.every(r => r.valid),
            results,
            errors,
            values,
            source: 'fields',
        };
    }
    async function validateField(path, opts) {
        var _a;
        const state = findPathState(path);
        if (state && (opts === null || opts === void 0 ? void 0 : opts.mode) !== 'silent') {
            state.validated = true;
        }
        if (schema) {
            const { results } = await validateSchema((opts === null || opts === void 0 ? void 0 : opts.mode) || 'validated-only');
            return results[path] || { errors: [], valid: true };
        }
        if (state === null || state === void 0 ? void 0 : state.validate) {
            return state.validate(opts);
        }
        const shouldWarn = !state && ((_a = opts === null || opts === void 0 ? void 0 : opts.warn) !== null && _a !== void 0 ? _a : true);
        if (shouldWarn) {
            if ((true)) {
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.warn)(`field with path ${path} was not found`);
            }
        }
        return Promise.resolve({ errors: [], valid: true });
    }
    function unsetInitialValue(path) {
        unsetPath(initialValues.value, path);
    }
    /**
     * Sneaky function to set initial field values
     */
    function stageInitialValue(path, value, updateOriginal = false) {
        setFieldInitialValue(path, value);
        setInPath(formValues, path, value);
        if (updateOriginal && !(opts === null || opts === void 0 ? void 0 : opts.initialValues)) {
            setInPath(originalInitialValues.value, path, klona(value));
        }
    }
    function setFieldInitialValue(path, value, updateOriginal = false) {
        setInPath(initialValues.value, path, klona(value));
        if (updateOriginal) {
            setInPath(originalInitialValues.value, path, klona(value));
        }
    }
    async function _validateSchema() {
        const schemaValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(schema);
        if (!schemaValue) {
            return { valid: true, results: {}, errors: {}, source: 'none' };
        }
        isValidating.value = true;
        const formResult = isYupValidator(schemaValue) || isTypedSchema(schemaValue)
            ? await validateTypedSchema(schemaValue, formValues)
            : await validateObjectSchema(schemaValue, formValues, {
                names: fieldNames.value,
                bailsMap: fieldBailsMap.value,
            });
        isValidating.value = false;
        return formResult;
    }
    const submitForm = handleSubmit((_, { evt }) => {
        if (isFormSubmitEvent(evt)) {
            evt.target.submit();
        }
    });
    // Trigger initial validation
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
            setErrors(opts.initialErrors);
        }
        if (opts === null || opts === void 0 ? void 0 : opts.initialTouched) {
            setTouched(opts.initialTouched);
        }
        // if validate on mount was enabled
        if (opts === null || opts === void 0 ? void 0 : opts.validateOnMount) {
            validate();
            return;
        }
        // otherwise run initial silent validation through schema if available
        // the useField should skip their own silent validation if a yup schema is present
        if (formCtx.validateSchema) {
            formCtx.validateSchema('silent');
        }
    });
    if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(schema)) {
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(schema, () => {
            var _a;
            (_a = formCtx.validateSchema) === null || _a === void 0 ? void 0 : _a.call(formCtx, 'validated-only');
        });
    }
    // Provide injections
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(FormContextKey, formCtx);
    if ((true)) {
        registerFormWithDevTools(formCtx);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => (Object.assign(Object.assign({ errors: errorBag.value }, meta.value), { values: formValues, isSubmitting: isSubmitting.value, isValidating: isValidating.value, submitCount: submitCount.value })), refreshInspector, {
            deep: true,
        });
    }
    function defineField(path, config) {
        const label = isCallable(config) ? undefined : config === null || config === void 0 ? void 0 : config.label;
        const pathState = (findPathState((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path)) || createPathState(path, { label }));
        const evalConfig = () => (isCallable(config) ? config(omit(pathState, PRIVATE_PATH_STATE_KEYS)) : config || {});
        function onBlur() {
            var _a;
            pathState.touched = true;
            const validateOnBlur = (_a = evalConfig().validateOnBlur) !== null && _a !== void 0 ? _a : getConfig().validateOnBlur;
            if (validateOnBlur) {
                validateField((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(pathState.path));
            }
        }
        function onInput() {
            var _a;
            const validateOnInput = (_a = evalConfig().validateOnInput) !== null && _a !== void 0 ? _a : getConfig().validateOnInput;
            if (validateOnInput) {
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
                    validateField((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(pathState.path));
                });
            }
        }
        function onChange() {
            var _a;
            const validateOnChange = (_a = evalConfig().validateOnChange) !== null && _a !== void 0 ? _a : getConfig().validateOnChange;
            if (validateOnChange) {
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
                    validateField((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(pathState.path));
                });
            }
        }
        const props = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const base = {
                onChange,
                onInput,
                onBlur,
            };
            if (isCallable(config)) {
                return Object.assign(Object.assign({}, base), (config(omit(pathState, PRIVATE_PATH_STATE_KEYS)).props || {}));
            }
            if (config === null || config === void 0 ? void 0 : config.props) {
                return Object.assign(Object.assign({}, base), config.props(omit(pathState, PRIVATE_PATH_STATE_KEYS)));
            }
            return base;
        });
        const model = createModel(path, () => { var _a, _b, _c; return (_c = (_a = evalConfig().validateOnModelUpdate) !== null && _a !== void 0 ? _a : (_b = getConfig()) === null || _b === void 0 ? void 0 : _b.validateOnModelUpdate) !== null && _c !== void 0 ? _c : true; });
        return [model, props];
    }
    function useFieldModel(pathOrPaths) {
        if (!Array.isArray(pathOrPaths)) {
            return createModel(pathOrPaths);
        }
        return pathOrPaths.map(p => createModel(p, true));
    }
    /**
     * @deprecated use defineField instead
     */
    function defineInputBinds(path, config) {
        const [model, props] = defineField(path, config);
        function onBlur() {
            props.value.onBlur();
        }
        function onInput(e) {
            const value = normalizeEventValue(e);
            setFieldValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path), value, false);
            props.value.onInput();
        }
        function onChange(e) {
            const value = normalizeEventValue(e);
            setFieldValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path), value, false);
            props.value.onChange();
        }
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return Object.assign(Object.assign({}, props.value), { onBlur,
                onInput,
                onChange, value: model.value });
        });
    }
    /**
     * @deprecated use defineField instead
     */
    function defineComponentBinds(path, config) {
        const [model, props] = defineField(path, config);
        const pathState = findPathState((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path));
        function onUpdateModelValue(value) {
            model.value = value;
        }
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const conf = isCallable(config) ? config(omit(pathState, PRIVATE_PATH_STATE_KEYS)) : config || {};
            return Object.assign({ [conf.model || 'modelValue']: model.value, [`onUpdate:${conf.model || 'modelValue'}`]: onUpdateModelValue }, props.value);
        });
    }
    const ctx = Object.assign(Object.assign({}, formCtx), { values: (0,vue__WEBPACK_IMPORTED_MODULE_0__.readonly)(formValues), handleReset: () => resetForm(), submitForm });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(PublicFormContextKey, ctx);
    return ctx;
}
/**
 * Manages form meta aggregation
 */
function useFormMeta(pathsState, currentValues, initialValues, errors) {
    const MERGE_STRATEGIES = {
        touched: 'some',
        pending: 'some',
        valid: 'every',
    };
    const isDirty = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return !isEqual(currentValues, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValues));
    });
    function calculateFlags() {
        const states = pathsState.value;
        return keysOf(MERGE_STRATEGIES).reduce((acc, flag) => {
            const mergeMethod = MERGE_STRATEGIES[flag];
            acc[flag] = states[mergeMethod](s => s[flag]);
            return acc;
        }, {});
    }
    const flags = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(calculateFlags());
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
        const value = calculateFlags();
        flags.touched = value.touched;
        flags.valid = value.valid;
        flags.pending = value.pending;
    });
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return Object.assign(Object.assign({ initialValues: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValues) }, flags), { valid: flags.valid && !keysOf(errors.value).length, dirty: isDirty.value });
    });
}
/**
 * Manages the initial values prop
 */
function useFormInitialValues(pathsState, formValues, opts) {
    const values = resolveInitialValues(opts);
    // these are the mutable initial values as the fields are mounted/unmounted
    const initialValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(values);
    // these are the original initial value as provided by the user initially, they don't keep track of conditional fields
    // this is important because some conditional fields will overwrite the initial values for other fields who had the same name
    // like array fields, any push/insert operation will overwrite the initial values because they "create new fields"
    // so these are the values that the reset function should use
    // these only change when the user explicitly changes the initial values or when the user resets them with new values.
    const originalInitialValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(klona(values));
    function setInitialValues(values, opts) {
        if (opts === null || opts === void 0 ? void 0 : opts.force) {
            initialValues.value = klona(values);
            originalInitialValues.value = klona(values);
        }
        else {
            initialValues.value = merge(klona(initialValues.value) || {}, klona(values));
            originalInitialValues.value = merge(klona(originalInitialValues.value) || {}, klona(values));
        }
        if (!(opts === null || opts === void 0 ? void 0 : opts.updateFields)) {
            return;
        }
        // update the pristine non-touched fields
        // those are excluded because it's unlikely you want to change the form values using initial values
        // we mostly watch them for API population or newly inserted fields
        // if the user API is taking too much time before user interaction they should consider disabling or hiding their inputs until the values are ready
        pathsState.value.forEach(state => {
            const wasTouched = state.touched;
            if (wasTouched) {
                return;
            }
            const newValue = getFromPath(initialValues.value, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path));
            setInPath(formValues, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(state.path), klona(newValue));
        });
    }
    return {
        initialValues,
        originalInitialValues,
        setInitialValues,
    };
}
function mergeValidationResults(a, b) {
    if (!b) {
        return a;
    }
    return {
        valid: a.valid && b.valid,
        errors: [...a.errors, ...b.errors],
    };
}
function useFormContext() {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(PublicFormContextKey);
}

const FormImpl = /** #__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Form',
    inheritAttrs: false,
    props: {
        as: {
            type: null,
            default: 'form',
        },
        validationSchema: {
            type: Object,
            default: undefined,
        },
        initialValues: {
            type: Object,
            default: undefined,
        },
        initialErrors: {
            type: Object,
            default: undefined,
        },
        initialTouched: {
            type: Object,
            default: undefined,
        },
        validateOnMount: {
            type: Boolean,
            default: false,
        },
        onSubmit: {
            type: Function,
            default: undefined,
        },
        onInvalidSubmit: {
            type: Function,
            default: undefined,
        },
        keepValues: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            default: 'Form',
        },
    },
    setup(props, ctx) {
        const validationSchema = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'validationSchema');
        const keepValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'keepValues');
        const { errors, errorBag, values, meta, isSubmitting, isValidating, submitCount, controlledValues, validate, validateField, handleReset, resetForm, handleSubmit, setErrors, setFieldError, setFieldValue, setValues, setFieldTouched, setTouched, resetField, } = useForm({
            validationSchema: validationSchema.value ? validationSchema : undefined,
            initialValues: props.initialValues,
            initialErrors: props.initialErrors,
            initialTouched: props.initialTouched,
            validateOnMount: props.validateOnMount,
            keepValuesOnUnmount: keepValues,
            name: props.name,
        });
        const submitForm = handleSubmit((_, { evt }) => {
            if (isFormSubmitEvent(evt)) {
                evt.target.submit();
            }
        }, props.onInvalidSubmit);
        const onSubmit = props.onSubmit ? handleSubmit(props.onSubmit, props.onInvalidSubmit) : submitForm;
        function handleFormReset(e) {
            if (isEvent(e)) {
                // Prevent default form reset behavior
                e.preventDefault();
            }
            handleReset();
            if (typeof ctx.attrs.onReset === 'function') {
                ctx.attrs.onReset();
            }
        }
        function handleScopedSlotSubmit(evt, onSubmit) {
            const onSuccess = typeof evt === 'function' && !onSubmit ? evt : onSubmit;
            return handleSubmit(onSuccess, props.onInvalidSubmit)(evt);
        }
        function getValues() {
            return klona(values);
        }
        function getMeta() {
            return klona(meta.value);
        }
        function getErrors() {
            return klona(errors.value);
        }
        function slotProps() {
            return {
                meta: meta.value,
                errors: errors.value,
                errorBag: errorBag.value,
                values,
                isSubmitting: isSubmitting.value,
                isValidating: isValidating.value,
                submitCount: submitCount.value,
                controlledValues: controlledValues.value,
                validate,
                validateField,
                handleSubmit: handleScopedSlotSubmit,
                handleReset,
                submitForm,
                setErrors,
                setFieldError,
                setFieldValue,
                setValues,
                setFieldTouched,
                setTouched,
                resetForm,
                resetField,
                getValues,
                getMeta,
                getErrors,
            };
        }
        // expose these functions and methods as part of public API
        ctx.expose({
            setFieldError,
            setErrors,
            setFieldValue,
            setValues,
            setFieldTouched,
            setTouched,
            resetForm,
            validate,
            validateField,
            resetField,
            getValues,
            getMeta,
            getErrors,
            values,
            meta,
            errors,
        });
        return function renderForm() {
            // avoid resolving the form component as itself
            const tag = props.as === 'form' ? props.as : !props.as ? null : (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(props.as);
            const children = normalizeChildren(tag, ctx, slotProps);
            if (!tag) {
                return children;
            }
            // Attributes to add on a native `form` tag
            const formAttrs = tag === 'form'
                ? {
                    // Disables native validation as vee-validate will handle it.
                    novalidate: true,
                }
                : {};
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(tag, Object.assign(Object.assign(Object.assign({}, formAttrs), ctx.attrs), { onSubmit, onReset: handleFormReset }), children);
        };
    },
});
const Form = FormImpl;

function useFieldArray(arrayPath) {
    const form = injectWithSelf(FormContextKey, undefined);
    const fields = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    const noOp = () => { };
    const noOpApi = {
        fields,
        remove: noOp,
        push: noOp,
        swap: noOp,
        insert: noOp,
        update: noOp,
        replace: noOp,
        prepend: noOp,
        move: noOp,
    };
    if (!form) {
        if ((true)) {
            warn('FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly');
        }
        return noOpApi;
    }
    if (!(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath)) {
        if ((true)) {
            warn('FieldArray requires a field path to be provided, did you forget to pass the `name` prop?');
        }
        return noOpApi;
    }
    const alreadyExists = form.fieldArrays.find(a => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(a.path) === (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath));
    if (alreadyExists) {
        return alreadyExists;
    }
    let entryCounter = 0;
    function getCurrentValues() {
        return getFromPath(form === null || form === void 0 ? void 0 : form.values, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(arrayPath), []) || [];
    }
    function initFields() {
        const currentValues = getCurrentValues();
        if (!Array.isArray(currentValues)) {
            return;
        }
        fields.value = currentValues.map((v, idx) => createEntry(v, idx, fields.value));
        updateEntryFlags();
    }
    initFields();
    function updateEntryFlags() {
        const fieldsLength = fields.value.length;
        for (let i = 0; i < fieldsLength; i++) {
            const entry = fields.value[i];
            entry.isFirst = i === 0;
            entry.isLast = i === fieldsLength - 1;
        }
    }
    function createEntry(value, idx, currentFields) {
        // Skips the work by returning the current entry if it already exists
        // This should make the `key` prop stable and doesn't cause more re-renders than needed
        // The value is computed and should update anyways
        if (currentFields && !isNullOrUndefined(idx) && currentFields[idx]) {
            return currentFields[idx];
        }
        const key = entryCounter++;
        const entry = {
            key,
            value: computedDeep({
                get() {
                    const currentValues = getFromPath(form === null || form === void 0 ? void 0 : form.values, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(arrayPath), []) || [];
                    const idx = fields.value.findIndex(e => e.key === key);
                    return idx === -1 ? value : currentValues[idx];
                },
                set(value) {
                    const idx = fields.value.findIndex(e => e.key === key);
                    if (idx === -1) {
                        if ((true)) {
                            warn(`Attempting to update a non-existent array item`);
                        }
                        return;
                    }
                    update(idx, value);
                },
            }), // will be auto unwrapped
            isFirst: false,
            isLast: false,
        };
        return entry;
    }
    function afterMutation() {
        updateEntryFlags();
        // Should trigger a silent validation since a field may not do that #4096
        form === null || form === void 0 ? void 0 : form.validate({ mode: 'silent' });
    }
    function remove(idx) {
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!pathValue || !Array.isArray(pathValue)) {
            return;
        }
        const newValue = [...pathValue];
        newValue.splice(idx, 1);
        const fieldPath = pathName + `[${idx}]`;
        form.destroyPath(fieldPath);
        form.unsetInitialValue(fieldPath);
        setInPath(form.values, pathName, newValue);
        fields.value.splice(idx, 1);
        afterMutation();
    }
    function push(initialValue) {
        const value = klona(initialValue);
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        const normalizedPathValue = isNullOrUndefined(pathValue) ? [] : pathValue;
        if (!Array.isArray(normalizedPathValue)) {
            return;
        }
        const newValue = [...normalizedPathValue];
        newValue.push(value);
        form.stageInitialValue(pathName + `[${newValue.length - 1}]`, value);
        setInPath(form.values, pathName, newValue);
        fields.value.push(createEntry(value));
        afterMutation();
    }
    function swap(indexA, indexB) {
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!Array.isArray(pathValue) || !(indexA in pathValue) || !(indexB in pathValue)) {
            return;
        }
        const newValue = [...pathValue];
        const newFields = [...fields.value];
        // the old switcheroo
        const temp = newValue[indexA];
        newValue[indexA] = newValue[indexB];
        newValue[indexB] = temp;
        const tempEntry = newFields[indexA];
        newFields[indexA] = newFields[indexB];
        newFields[indexB] = tempEntry;
        setInPath(form.values, pathName, newValue);
        fields.value = newFields;
        updateEntryFlags();
    }
    function insert(idx, initialValue) {
        const value = klona(initialValue);
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!Array.isArray(pathValue) || pathValue.length < idx) {
            return;
        }
        const newValue = [...pathValue];
        const newFields = [...fields.value];
        newValue.splice(idx, 0, value);
        newFields.splice(idx, 0, createEntry(value));
        setInPath(form.values, pathName, newValue);
        fields.value = newFields;
        afterMutation();
    }
    function replace(arr) {
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(arrayPath);
        form.stageInitialValue(pathName, arr);
        setInPath(form.values, pathName, arr);
        initFields();
        afterMutation();
    }
    function update(idx, value) {
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!Array.isArray(pathValue) || pathValue.length - 1 < idx) {
            return;
        }
        setInPath(form.values, `${pathName}[${idx}]`, value);
        form === null || form === void 0 ? void 0 : form.validate({ mode: 'validated-only' });
    }
    function prepend(initialValue) {
        const value = klona(initialValue);
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        const normalizedPathValue = isNullOrUndefined(pathValue) ? [] : pathValue;
        if (!Array.isArray(normalizedPathValue)) {
            return;
        }
        const newValue = [value, ...normalizedPathValue];
        setInPath(form.values, pathName, newValue);
        form.stageInitialValue(pathName + `[0]`, value);
        fields.value.unshift(createEntry(value));
        afterMutation();
    }
    function move(oldIdx, newIdx) {
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        const newValue = isNullOrUndefined(pathValue) ? [] : [...pathValue];
        if (!Array.isArray(pathValue) || !(oldIdx in pathValue) || !(newIdx in pathValue)) {
            return;
        }
        const newFields = [...fields.value];
        const movedItem = newFields[oldIdx];
        newFields.splice(oldIdx, 1);
        newFields.splice(newIdx, 0, movedItem);
        const movedValue = newValue[oldIdx];
        newValue.splice(oldIdx, 1);
        newValue.splice(newIdx, 0, movedValue);
        setInPath(form.values, pathName, newValue);
        fields.value = newFields;
        afterMutation();
    }
    const fieldArrayCtx = {
        fields,
        remove,
        push,
        swap,
        insert,
        update,
        replace,
        prepend,
        move,
    };
    form.fieldArrays.push(Object.assign({ path: arrayPath, reset: initFields }, fieldArrayCtx));
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
        const idx = form.fieldArrays.findIndex(i => (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(i.path) === (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(arrayPath));
        if (idx >= 0) {
            form.fieldArrays.splice(idx, 1);
        }
    });
    // Makes sure to sync the form values with the array value if they go out of sync
    // #4153
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(getCurrentValues, formValues => {
        const fieldsValues = fields.value.map(f => f.value);
        // If form values are not the same as the current values then something overrode them.
        if (!isEqual(formValues, fieldsValues)) {
            initFields();
        }
    });
    return fieldArrayCtx;
}

const FieldArrayImpl = /** #__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'FieldArray',
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    setup(props, ctx) {
        const { push, remove, swap, insert, replace, update, prepend, move, fields } = useFieldArray(() => props.name);
        function slotProps() {
            return {
                fields: fields.value,
                push,
                remove,
                swap,
                insert,
                update,
                replace,
                prepend,
                move,
            };
        }
        ctx.expose({
            push,
            remove,
            swap,
            insert,
            update,
            replace,
            prepend,
            move,
        });
        return () => {
            const children = normalizeChildren(undefined, ctx, slotProps);
            return children;
        };
    },
});
const FieldArray = FieldArrayImpl;

const ErrorMessageImpl = /** #__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'ErrorMessage',
    props: {
        as: {
            type: String,
            default: undefined,
        },
        name: {
            type: String,
            required: true,
        },
    },
    setup(props, ctx) {
        const form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FormContextKey, undefined);
        const message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return form === null || form === void 0 ? void 0 : form.errors.value[props.name];
        });
        function slotProps() {
            return {
                message: message.value,
            };
        }
        return () => {
            // Renders nothing if there are no messages
            if (!message.value) {
                return undefined;
            }
            const tag = (props.as ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(props.as) : props.as);
            const children = normalizeChildren(tag, ctx, slotProps);
            const attrs = Object.assign({ role: 'alert' }, ctx.attrs);
            // If no tag was specified and there are children
            // render the slot as is without wrapping it
            if (!tag && (Array.isArray(children) || !children) && (children === null || children === void 0 ? void 0 : children.length)) {
                return children;
            }
            // If no children in slot
            // render whatever specified and fallback to a <span> with the message in it's contents
            if ((Array.isArray(children) || !children) && !(children === null || children === void 0 ? void 0 : children.length)) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(tag || 'span', attrs, message.value);
            }
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(tag, attrs, children);
        };
    },
});
const ErrorMessage = ErrorMessageImpl;

function useResetForm() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        if ((true)) {
            warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
        }
    }
    return function resetForm(state, opts) {
        if (!form) {
            return;
        }
        return form.resetForm(state, opts);
    };
}

/**
 * If a field is dirty or not
 */
function useIsFieldDirty(path) {
    const fieldOrPath = resolveFieldOrPathState(path);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a, _b;
        if (!fieldOrPath) {
            return false;
        }
        return (_b = ('meta' in fieldOrPath ? fieldOrPath.meta.dirty : (_a = fieldOrPath === null || fieldOrPath === void 0 ? void 0 : fieldOrPath.value) === null || _a === void 0 ? void 0 : _a.dirty)) !== null && _b !== void 0 ? _b : false;
    });
}

/**
 * If a field is touched or not
 */
function useIsFieldTouched(path) {
    const fieldOrPath = resolveFieldOrPathState(path);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a, _b;
        if (!fieldOrPath) {
            return false;
        }
        return (_b = ('meta' in fieldOrPath ? fieldOrPath.meta.touched : (_a = fieldOrPath === null || fieldOrPath === void 0 ? void 0 : fieldOrPath.value) === null || _a === void 0 ? void 0 : _a.touched)) !== null && _b !== void 0 ? _b : false;
    });
}

/**
 * If a field is validated and is valid
 */
function useIsFieldValid(path) {
    const fieldOrPath = resolveFieldOrPathState(path);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a, _b;
        if (!fieldOrPath) {
            return false;
        }
        return (_b = ('meta' in fieldOrPath ? fieldOrPath.meta.valid : (_a = fieldOrPath === null || fieldOrPath === void 0 ? void 0 : fieldOrPath.value) === null || _a === void 0 ? void 0 : _a.valid)) !== null && _b !== void 0 ? _b : false;
    });
}

/**
 * If the form is submitting or not
 */
function useIsSubmitting() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        if ((true)) {
            warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
        }
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.isSubmitting.value) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * If the form is validating or not
 */
function useIsValidating() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        if ((true)) {
            warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
        }
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.isValidating.value) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * Validates a single field
 */
function useValidateField(path) {
    const form = injectWithSelf(FormContextKey);
    const field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextKey);
    return function validateField() {
        if (field) {
            return field.validate();
        }
        if (form && path) {
            return form === null || form === void 0 ? void 0 : form.validateField((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path));
        }
        if ((true)) {
            warn(`field with name ${(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)} was not found`);
        }
        return Promise.resolve({
            errors: [],
            valid: true,
        });
    };
}

/**
 * If the form is dirty or not
 */
function useIsFormDirty() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        if ((true)) {
            warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
        }
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.dirty) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * If the form is touched or not
 */
function useIsFormTouched() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        if ((true)) {
            warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
        }
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.touched) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * If the form has been validated and is valid
 */
function useIsFormValid() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        if ((true)) {
            warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
        }
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.valid) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * Validate multiple fields
 */
function useValidateForm() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        if ((true)) {
            warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
        }
    }
    return function validateField() {
        if (!form) {
            return Promise.resolve({ results: {}, errors: {}, valid: true, source: 'none' });
        }
        return form.validate();
    };
}

/**
 * The number of form's submission count
 */
function useSubmitCount() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        if ((true)) {
            warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
        }
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.submitCount.value) !== null && _a !== void 0 ? _a : 0;
    });
}

/**
 * Gives access to a field's current value
 */
function useFieldValue(path) {
    const form = injectWithSelf(FormContextKey);
    // We don't want to use self injected context as it doesn't make sense
    const field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextKey);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (path) {
            return getFromPath(form === null || form === void 0 ? void 0 : form.values, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path));
        }
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(field === null || field === void 0 ? void 0 : field.value);
    });
}

/**
 * Gives access to a form's values
 */
function useFormValues() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        if ((true)) {
            warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
        }
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return (form === null || form === void 0 ? void 0 : form.values) || {};
    });
}

/**
 * Gives access to all form errors
 */
function useFormErrors() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        if ((true)) {
            warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
        }
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return ((form === null || form === void 0 ? void 0 : form.errors.value) || {});
    });
}

/**
 * Gives access to a single field error
 */
function useFieldError(path) {
    const form = injectWithSelf(FormContextKey);
    // We don't want to use self injected context as it doesn't make sense
    const field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextKey);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (path) {
            return form === null || form === void 0 ? void 0 : form.errors.value[(0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path)];
        }
        return field === null || field === void 0 ? void 0 : field.errorMessage.value;
    });
}

function useSubmitForm(cb) {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        if ((true)) {
            warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
        }
    }
    const onSubmit = form ? form.handleSubmit(cb) : undefined;
    return function submitForm(e) {
        if (!onSubmit) {
            return;
        }
        return onSubmit(e);
    };
}

/**
 * Sets a field's error message
 */
function useSetFieldError(path) {
    const form = injectWithSelf(FormContextKey);
    // We don't want to use self injected context as it doesn't make sense
    const field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextKey);
    return function setFieldError(message) {
        if (path && form) {
            form.setFieldError((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path), message);
            return;
        }
        if (field) {
            field.setErrors(message || []);
            return;
        }
        if ((true)) {
            warn(`Could not set error message since there is no form context or a field named "${(0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path)}", did you forget to call "useField" or "useForm"?`);
        }
    };
}

/**
 * Sets a field's touched meta state
 */
function useSetFieldTouched(path) {
    const form = injectWithSelf(FormContextKey);
    // We don't want to use self injected context as it doesn't make sense
    const field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextKey);
    return function setFieldTouched(touched) {
        if (path && form) {
            form.setFieldTouched((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path), touched);
            return;
        }
        if (field) {
            field.setTouched(touched);
            return;
        }
        if ((true)) {
            warn(`Could not set touched state since there is no form context or a field named "${(0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path)}", did you forget to call "useField" or "useForm"?`);
        }
    };
}

/**
 * Sets a field's value
 */
function useSetFieldValue(path) {
    const form = injectWithSelf(FormContextKey);
    // We don't want to use self injected context as it doesn't make sense
    const field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextKey);
    return function setFieldValue(value, shouldValidate = true) {
        if (path && form) {
            form.setFieldValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path), value, shouldValidate);
            return;
        }
        if (field) {
            field.setValue(value, shouldValidate);
            return;
        }
        if ((true)) {
            warn(`Could not set value since there is no form context or a field named "${(0,vue__WEBPACK_IMPORTED_MODULE_0__.toValue)(path)}", did you forget to call "useField" or "useForm"?`);
        }
    };
}

/**
 * Sets multiple fields errors
 */
function useSetFormErrors() {
    const form = injectWithSelf(FormContextKey);
    function setFormErrors(fields) {
        if (form) {
            form.setErrors(fields);
            return;
        }
        if ((true)) {
            warn(`Could not set errors because a form was not detected, did you forget to use "useForm" in a parent component?`);
        }
    }
    return setFormErrors;
}

/**
 * Sets multiple fields touched or all fields in the form
 */
function useSetFormTouched() {
    const form = injectWithSelf(FormContextKey);
    function setFormTouched(fields) {
        if (form) {
            form.setTouched(fields);
            return;
        }
        if ((true)) {
            warn(`Could not set touched state because a form was not detected, did you forget to use "useForm" in a parent component?`);
        }
    }
    return setFormTouched;
}

/**
 * Sets multiple fields values
 */
function useSetFormValues() {
    const form = injectWithSelf(FormContextKey);
    function setFormValues(fields, shouldValidate = true) {
        if (form) {
            form.setValues(fields, shouldValidate);
            return;
        }
        if ((true)) {
            warn(`Could not set form values because a form was not detected, did you forget to use "useForm" in a parent component?`);
        }
    }
    return setFormValues;
}




/***/ }),

/***/ "./resources/js/utils/validationRules.js":
/*!***********************************************!*\
  !*** ./resources/js/utils/validationRules.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commonValidations: () => (/* binding */ commonValidations),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   createValidator: () => (/* binding */ _createValidator),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   validateField: () => (/* binding */ validateField),
/* harmony export */   validateForm: () => (/* binding */ validateForm),
/* harmony export */   validationRules: () => (/* binding */ validationRules)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
// validationRules.js - Common validation rules and utilities

/**
 * Common validation rules that can be used across the application
 */
var validationRules = {
  // Basic validations
  required: function required(value) {
    var fieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Field';
    if (!value || typeof value === 'string' && !value.trim()) {
      return "".concat(fieldName, " is required");
    }
    return true;
  },
  // Email validations
  email: function email(value) {
    if (!value) return true; // Only validate if value exists (use with required for mandatory)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) || 'Please enter a valid email address';
  },
  emailRequired: function emailRequired(value) {
    if (!value) return 'Email is required';
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) || 'Please enter a valid email address';
  },
  // Password validations
  password: function password(value) {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters long';
    return true;
  },
  passwordStrong: function passwordStrong(value) {
    if (!value) return 'Password is required';
    if (value.length < 8) return 'Password must be at least 8 characters long';
    if (!/(?=.*[a-z])/.test(value)) return 'Password must contain at least one lowercase letter';
    if (!/(?=.*[A-Z])/.test(value)) return 'Password must contain at least one uppercase letter';
    if (!/(?=.*\d)/.test(value)) return 'Password must contain at least one number';
    if (!/(?=.*[@$!%*?&])/.test(value)) return 'Password must contain at least one special character';
    return true;
  },
  passwordConfirm: function passwordConfirm(confirmValue, originalValue) {
    if (!confirmValue) return 'Please confirm your password';
    if (confirmValue !== originalValue) return 'Passwords do not match';
    return true;
  },
  // Text validations
  minLength: function minLength(min) {
    return function (value) {
      if (!value) return true;
      return value.length >= min || "Must be at least ".concat(min, " characters long");
    };
  },
  maxLength: function maxLength(max) {
    return function (value) {
      if (!value) return true;
      return value.length <= max || "Must be no more than ".concat(max, " characters long");
    };
  },
  alphabetic: function alphabetic(value) {
    if (!value) return true;
    var alphabeticRegex = /^[A-Za-z\s]+$/;
    return alphabeticRegex.test(value) || 'Only letters and spaces are allowed';
  },
  alphanumeric: function alphanumeric(value) {
    if (!value) return true;
    var alphanumericRegex = /^[A-Za-z0-9]+$/;
    return alphanumericRegex.test(value) || 'Only letters and numbers are allowed';
  },
  // Numeric validations
  numeric: function numeric(value) {
    if (!value) return true;
    var numericRegex = /^\d+$/;
    return numericRegex.test(value) || 'Only numbers are allowed';
  },
  decimal: function decimal(value) {
    if (!value) return true;
    var decimalRegex = /^\d*\.?\d+$/;
    return decimalRegex.test(value) || 'Please enter a valid number';
  },
  min: function min(minValue) {
    return function (value) {
      if (!value) return true;
      var num = parseFloat(value);
      return !isNaN(num) && num >= minValue || "Value must be at least ".concat(minValue);
    };
  },
  max: function max(maxValue) {
    return function (value) {
      if (!value) return true;
      var num = parseFloat(value);
      return !isNaN(num) && num <= maxValue || "Value must be no more than ".concat(maxValue);
    };
  },
  between: function between(min, max) {
    return function (value) {
      if (!value) return true;
      var num = parseFloat(value);
      return !isNaN(num) && num >= min && num <= max || "Value must be between ".concat(min, " and ").concat(max);
    };
  },
  // Phone validations
  phone: function phone(value) {
    if (!value) return true;
    var phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(value.replace(/[\s\-\(\)]/g, '')) || 'Please enter a valid phone number';
  },
  phoneRequired: function phoneRequired(value) {
    if (!value) return 'Phone number is required';
    var phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(value.replace(/[\s\-\(\)]/g, '')) || 'Please enter a valid phone number';
  },
  // Date validations
  date: function date(value) {
    if (!value) return true;
    var date = new Date(value);
    return !isNaN(date.getTime()) || 'Please enter a valid date';
  },
  dateAfter: function dateAfter(afterDate) {
    return function (value) {
      if (!value) return true;
      var inputDate = new Date(value);
      var compareDate = new Date(afterDate);
      return inputDate > compareDate || "Date must be after ".concat(afterDate);
    };
  },
  dateBefore: function dateBefore(beforeDate) {
    return function (value) {
      if (!value) return true;
      var inputDate = new Date(value);
      var compareDate = new Date(beforeDate);
      return inputDate < compareDate || "Date must be before ".concat(beforeDate);
    };
  },
  age: function age(minAge) {
    return function (value) {
      if (!value) return true;
      var birthDate = new Date(value);
      var today = new Date();
      var age = today.getFullYear() - birthDate.getFullYear();
      var monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
        +age, _readOnlyError("age");
      }
      return age >= minAge || "You must be at least ".concat(minAge, " years old");
    };
  },
  // URL validation
  url: function url(value) {
    if (!value) return true;
    try {
      new URL(value);
      return true;
    } catch (_unused) {
      return 'Please enter a valid URL';
    }
  },
  // File validations
  fileSize: function fileSize(maxSizeMB) {
    return function (file) {
      if (!file) return true;
      var maxSizeBytes = maxSizeMB * 1024 * 1024;
      return file.size <= maxSizeBytes || "File size must be less than ".concat(maxSizeMB, "MB");
    };
  },
  fileType: function fileType(allowedTypes) {
    return function (file) {
      if (!file) return true;
      var fileType = file.type.toLowerCase();
      var isAllowed = allowedTypes.some(function (type) {
        return fileType.includes(type.toLowerCase()) || file.name.toLowerCase().endsWith(".".concat(type.toLowerCase()));
      });
      return isAllowed || "File must be one of: ".concat(allowedTypes.join(', '));
    };
  },
  // Credit card validation
  creditCard: function creditCard(value) {
    if (!value) return true;
    var cleaned = value.replace(/\D/g, '');

    // Luhn algorithm
    var sum = 0;
    var isEven = false;
    for (var i = cleaned.length - 1; i >= 0; i--) {
      var digit = parseInt(cleaned.charAt(i));
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isEven = !isEven;
    }
    return sum % 10 === 0 || 'Please enter a valid credit card number';
  },
  // Social security number (US format)
  ssn: function ssn(value) {
    if (!value) return true;
    var ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
    return ssnRegex.test(value) || 'Please enter a valid SSN (xxx-xx-xxxx)';
  },
  // ZIP code validations
  zipCode: function zipCode(value) {
    if (!value) return true;
    var zipRegex = /^\d{5}(-\d{4})?$/;
    return zipRegex.test(value) || 'Please enter a valid ZIP code';
  },
  // Custom regex validation
  regex: function regex(pattern) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Invalid format';
    return function (value) {
      if (!value) return true;
      var regex = new RegExp(pattern);
      return regex.test(value) || message;
    };
  },
  // Array validations
  arrayMinLength: function arrayMinLength(min) {
    return function (array) {
      if (!array) return "Please select at least ".concat(min, " item(s)");
      return array.length >= min || "Please select at least ".concat(min, " item(s)");
    };
  },
  arrayMaxLength: function arrayMaxLength(max) {
    return function (array) {
      if (!array) return true;
      return array.length <= max || "Please select no more than ".concat(max, " item(s)");
    };
  }
};

/**
 * Validation rule composer - combines multiple validation rules
 */
var compose = function compose() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }
  return function (value) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    for (var _i = 0, _validators = validators; _i < _validators.length; _i++) {
      var validator = _validators[_i];
      var result = typeof validator === 'function' ? validator.apply(void 0, [value].concat(args)) : validator;
      if (result !== true) {
        return result;
      }
    }
    return true;
  };
};

/**
 * Common validation patterns for easy use
 */
var commonValidations = {
  // User registration
  firstName: compose(validationRules.required, validationRules.alphabetic, validationRules.minLength(2), validationRules.maxLength(50)),
  lastName: compose(validationRules.required, validationRules.alphabetic, validationRules.minLength(2), validationRules.maxLength(50)),
  username: compose(validationRules.required, validationRules.alphanumeric, validationRules.minLength(3), validationRules.maxLength(20)),
  email: validationRules.emailRequired,
  password: validationRules.password,
  strongPassword: validationRules.passwordStrong,
  // Contact information
  phone: validationRules.phoneRequired,
  address: compose(validationRules.required, validationRules.minLength(10), validationRules.maxLength(200)),
  city: compose(validationRules.required, validationRules.alphabetic, validationRules.minLength(2), validationRules.maxLength(50)),
  zipCode: compose(validationRules.required, validationRules.zipCode),
  // Business information
  companyName: compose(validationRules.required, validationRules.minLength(2), validationRules.maxLength(100)),
  // Financial
  amount: compose(validationRules.required, validationRules.decimal, validationRules.min(0)),
  currency: validationRules.required,
  // Dates
  birthDate: compose(validationRules.required, validationRules.date, validationRules.age(18)),
  expiryDate: compose(validationRules.required, validationRules.date, validationRules.dateAfter(new Date().toISOString().split('T')[0]))
};

/**
 * Dynamic validator creator
 * Creates validation functions based on configuration
 */
var _createValidator = function createValidator(config) {
  return function (value) {
    // Handle array of validation rules
    if (Array.isArray(config)) {
      var _iterator = _createForOfIteratorHelper(config),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var rule = _step.value;
          var result = typeof rule === 'function' ? rule(value) : rule;
          if (result !== true) {
            return result;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return true;
    }

    // Handle single validation rule
    if (typeof config === 'function') {
      return config(value);
    }

    // Handle validation config object
    if (_typeof(config) === 'object' && config.rules) {
      return _createValidator(config.rules)(value);
    }
    return true;
  };
};

/**
 * Form validation helper
 * Validates entire form object against validation schema
 */

var validateForm = function validateForm(formData, validationSchema) {
  var errors = {};
  var isValid = true;
  for (var _i2 = 0, _Object$entries = Object.entries(formData); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
      field = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (validationSchema[field]) {
      var validator = _createValidator(validationSchema[field]);
      var result = validator(value);
      if (result !== true) {
        errors[field] = result;
        isValid = false;
      }
    }
  }
  return {
    isValid: isValid,
    errors: errors
  };
};

/**
 * Real-time validation helper for individual fields
 */
var validateField = function validateField(value, validationRules) {
  var validator = _createValidator(validationRules);
  return validator(value);
};

// Export default for easy importing
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  validationRules: validationRules,
  commonValidations: commonValidations,
  compose: compose,
  createValidator: _createValidator,
  validateForm: validateForm,
  validateField: validateField
});

/***/ }),

/***/ "./resources/js/views/auth/login_boxed.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/auth/login_boxed.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_boxed_vue_vue_type_template_id_77930828_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login_boxed.vue?vue&type=template&id=77930828&scoped=true */ "./resources/js/views/auth/login_boxed.vue?vue&type=template&id=77930828&scoped=true");
/* harmony import */ var _login_boxed_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login_boxed.vue?vue&type=script&setup=true&lang=js */ "./resources/js/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _login_boxed_vue_vue_type_style_index_0_id_77930828_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login_boxed.vue?vue&type=style&index=0&id=77930828&scoped=true&lang=css */ "./resources/js/views/auth/login_boxed.vue?vue&type=style&index=0&id=77930828&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_login_boxed_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_login_boxed_vue_vue_type_template_id_77930828_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-77930828"],['__file',"resources/js/views/auth/login_boxed.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login_boxed.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/views/auth/login_boxed.vue?vue&type=style&index=0&id=77930828&scoped=true&lang=css":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/auth/login_boxed.vue?vue&type=style&index=0&id=77930828&scoped=true&lang=css ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_style_index_0_id_77930828_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login_boxed.vue?vue&type=style&index=0&id=77930828&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login_boxed.vue?vue&type=style&index=0&id=77930828&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/auth/login_boxed.vue?vue&type=template&id=77930828&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/auth/login_boxed.vue?vue&type=template&id=77930828&scoped=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_template_id_77930828_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_template_id_77930828_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login_boxed.vue?vue&type=template&id=77930828&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login_boxed.vue?vue&type=template&id=77930828&scoped=true");


/***/ })

}]);