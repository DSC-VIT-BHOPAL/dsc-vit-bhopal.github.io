webpackHotUpdate_N_E("pages/index",{

/***/ "./components/index/sponsors.tsx":
/*!***************************************!*\
  !*** ./components/index/sponsors.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _data_sponsors_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/sponsors.json */ "./data/sponsors.json");
var _data_sponsors_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/sponsors.json */ "./data/sponsors.json", 1);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global */ "./components/global.tsx");


var _jsxFileName = "C:\\Users\\ABHIJEET\\Desktop\\dsc\\components\\index\\sponsors.tsx",
    _this = undefined;






var Sponsors = function Sponsors() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    id: "sponsors",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_global__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextGroup, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
          children: "Our Sponsors"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContainer, {
          children: _data_sponsors_json__WEBPACK_IMPORTED_MODULE_3__.map(function (sponsor, id) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
                src: sponsor.image,
                alt: sponsor.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Name, {
                children: sponsor.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 15
              }, _this)]
            }, id, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, _this);
};

_c = Sponsors;
var Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_global__WEBPACK_IMPORTED_MODULE_4__["Section"]).withConfig({
  displayName: "sponsors__Wrapper",
  componentId: "sc-51f1ov-0"
})(["background-color:", ";clip-path:polygon(0 3vw,100% 0,100% 100%,0 100%);padding:10rem 0;"], function (props) {
  return props.theme.color.background;
});
_c2 = Wrapper;
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "sponsors__CardContainer",
  componentId: "sc-51f1ov-1"
})(["display:flex;flex-direction:row;width:100%;flex-wrap:wrap;"]);
_c3 = CardContainer;
var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "sponsors__Card",
  componentId: "sc-51f1ov-2"
})(["margin:1rem 1rem;padding:1rem 1rem;flex:1;background:#fff;height:200px;width:250px;border-radius:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
_c4 = Card;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "sponsors__Image",
  componentId: "sc-51f1ov-3"
})(["height:48%;flex:1;max-width:-webkit-fill-available;"]);
_c5 = Image;
var Name = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "sponsors__Name",
  componentId: "sc-51f1ov-4"
})(["color:black;text-align:center;"]);
_c6 = Name;
var TextGroup = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "sponsors__TextGroup",
  componentId: "sc-51f1ov-5"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;@media (max-width:", "){align-items:flex-start;}a{text-decoration:none;}"], function (props) {
  return props.theme.screen.md;
});
_c7 = TextGroup;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "sponsors__Title",
  componentId: "sc-51f1ov-6"
})(["font-size:45px;font-weight:bolder;margin-bottom:2rem;@media (max-width:", "){font-size:38px;}"], function (props) {
  return props.theme.screen.md;
});
_c8 = Title;
/* harmony default export */ __webpack_exports__["default"] = (Sponsors);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Sponsors");
$RefreshReg$(_c2, "Wrapper");
$RefreshReg$(_c3, "CardContainer");
$RefreshReg$(_c4, "Card");
$RefreshReg$(_c5, "Image");
$RefreshReg$(_c6, "Name");
$RefreshReg$(_c7, "TextGroup");
$RefreshReg$(_c8, "Title");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC9zcG9uc29ycy50c3giXSwibmFtZXMiOlsiU3BvbnNvcnMiLCJzcG9uc29ycyIsIm1hcCIsInNwb25zb3IiLCJpZCIsImltYWdlIiwibmFtZSIsIldyYXBwZXIiLCJzdHlsZWQiLCJTZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsIkNhcmRDb250YWluZXIiLCJkaXYiLCJDYXJkIiwiSW1hZ2UiLCJpbWciLCJOYW1lIiwiaDMiLCJUZXh0R3JvdXAiLCJzY3JlZW4iLCJtZCIsIlRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLHNCQUNmLHFFQUFDLE9BQUQ7QUFBUyxNQUFFLEVBQUMsVUFBWjtBQUFBLDJCQUNFLHFFQUFDLGlEQUFEO0FBQUEsNkJBQ0UscUVBQUMsU0FBRDtBQUFBLGdDQUNFLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxhQUFEO0FBQUEsb0JBQ0dDLGdEQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLEVBQVY7QUFBQSxnQ0FDWixxRUFBQyxJQUFEO0FBQUEsc0NBQ0UscUVBQUMsS0FBRDtBQUFPLG1CQUFHLEVBQUVELE9BQU8sQ0FBQ0UsS0FBcEI7QUFBMkIsbUJBQUcsRUFBRUYsT0FBTyxDQUFDRztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUscUVBQUMsSUFBRDtBQUFBLDBCQUFPSCxPQUFPLENBQUNHO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBLGVBQVdGLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEWTtBQUFBLFdBQWI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGU7QUFBQSxDQUFqQjs7S0FBTUosUTtBQWtCTixJQUFNTyxPQUFPLEdBQUdDLGlFQUFNLENBQUNDLCtDQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsZ0dBQ1MsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQUFaLENBQWtCQyxVQUE3QjtBQUFBLENBRFQsQ0FBYjtNQUFNTixPO0FBTU4sSUFBTU8sYUFBYSxHQUFHTix5REFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFuQjtNQUFNRCxhO0FBT04sSUFBTUUsSUFBSSxHQUFHUix5REFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJMQUFWO01BQU1DLEk7QUFjTixJQUFNQyxLQUFLLEdBQUdULHlEQUFNLENBQUNVLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkRBQVg7TUFBTUQsSztBQU1OLElBQU1FLElBQUksR0FBR1gseURBQU0sQ0FBQ1ksRUFBVjtBQUFBO0FBQUE7QUFBQSxzQ0FBVjtNQUFNRCxJO0FBS04sSUFBTUUsU0FBUyxHQUFHYix5REFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhKQUtRLFVBQUNMLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVcsTUFBWixDQUFtQkMsRUFBOUI7QUFBQSxDQUxSLENBQWY7TUFBTUYsUztBQWNOLElBQU1HLEtBQUssR0FBR2hCLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0dBSVksVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZVyxNQUFaLENBQW1CQyxFQUE5QjtBQUFBLENBSlosQ0FBWDtNQUFNQyxLO0FBYVN4Qix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNTU5NDc0YzdiZTRmNGMyYWI2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgc3BvbnNvcnMgZnJvbSBcIi4uLy4uL2RhdGEvc3BvbnNvcnMuanNvblwiO1xyXG5cclxuaW1wb3J0IHsgU2VjdGlvbiwgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5cclxuY29uc3QgU3BvbnNvcnMgPSAoKSA9PiAoXHJcbiAgPFdyYXBwZXIgaWQ9XCJzcG9uc29yc1wiPlxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFRleHRHcm91cD5cclxuICAgICAgICA8VGl0bGU+T3VyIFNwb25zb3JzPC9UaXRsZT5cclxuICAgICAgICA8Q2FyZENvbnRhaW5lcj5cclxuICAgICAgICAgIHtzcG9uc29ycy5tYXAoKHNwb25zb3IsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJkIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Nwb25zb3IuaW1hZ2V9IGFsdD17c3BvbnNvci5uYW1lfT48L0ltYWdlPlxyXG4gICAgICAgICAgICAgIDxOYW1lPntzcG9uc29yLm5hbWV9PC9OYW1lPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0NhcmRDb250YWluZXI+XHJcbiAgICAgIDwvVGV4dEdyb3VwPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgPC9XcmFwcGVyPlxyXG4pO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZChTZWN0aW9uKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3IuYmFja2dyb3VuZH07XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgM3Z3LCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcclxuICBwYWRkaW5nOiAxMHJlbSAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtd3JhcDogd3JhcDsgXHJcbmA7XHJcblxyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDFyZW0gMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgZmxleDogMTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgaGVpZ2h0OiA0OCU7XHJcbiAgZmxleDogMTtcclxuICBtYXgtd2lkdGg6LXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuYDtcclxuXHJcbmNvbnN0IE5hbWUgPSBzdHlsZWQuaDNgXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgVGV4dEdyb3VwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi5tZH0pIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4ubWR9KSB7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgfVxyXG4gIC8vICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4ueHN9KSB7XHJcbiAgLy8gICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAvLyAgIH1cclxuICAvL1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BvbnNvcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=