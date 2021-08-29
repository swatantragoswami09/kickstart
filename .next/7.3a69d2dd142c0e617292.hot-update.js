webpackHotUpdate(7,{

/***/ 1524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(571);

var _routes = __webpack_require__(913);

var _Layout = __webpack_require__(1519);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1516);

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = __webpack_require__(1525);

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\kickstart\\pages\\campaigns\\requests\\index.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRow',
    value: function renderRow() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, this.renderRow())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, ' Found ', this.props.requestCount, ' requests.'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, approversCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return campaign.methods.approversCount().call();

              case 7:
                approversCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvdyIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVEsQUFBTzs7QUFDZixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7O2dDQWlCSzttQkFDVDs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBUSxBQUM5QzsrQkFBTyxBQUFDO2VBQUQsQUFDRSxBQUNMO2NBRkcsQUFFQyxBQUNKO21CQUhHLEFBR00sQUFDVDttQkFBUyxPQUFBLEFBQUssTUFKWCxBQUlpQixBQUNwQjswQkFBZ0IsT0FBQSxBQUFLLE1BTGxCLEFBS3dCOztzQkFMeEI7d0JBQVAsQUFBTyxBQU9SO0FBUFE7QUFDSCxTQURHO0FBRFQsQUFBTyxBQVNSLE9BVFE7Ozs7NkJBWUM7VUFBQSxBQUVDLFNBRkQsQUFFa0MsdUJBRmxDLEFBRUM7VUFGRCxBQUVTLE1BRlQsQUFFa0MsdUJBRmxDLEFBRVM7VUFGVCxBQUVjLGFBRmQsQUFFa0MsdUJBRmxDLEFBRWM7VUFGZCxBQUUwQixPQUYxQixBQUVrQyx1QkFGbEMsQUFFMEIsQUFFaEM7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDZCQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQWhCLEFBQXdCLFNBQVEsT0FBTyxFQUFDLGNBQXhDLEFBQXVDLEFBQWU7b0JBQXREO3NCQUFBO0FBQUE7U0FKTixBQUVFLEFBQ0UsQUFDRSxBQUdKLGtDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtBQUFBLHlCQUNLLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURKLEFBQ0ksQUFDQSx1QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUVJLEFBQ0EsZ0NBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEosQUFHSSxBQUNBLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpKLEFBSUksQUFDQSw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMSixBQUtJLEFBQ0EsbUNBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTkosQUFNSSxBQUNBLDRCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVRSLEFBQ0UsQUFDRSxBQU9JLEFBR04sK0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FuQkosQUFPRSxBQVlFLEFBQU8sQUFBSyxBQUVkLCtCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFhLGdCQUFBLEFBQUssTUFBbEIsQUFBd0IsY0F0QjVCLEFBQ0UsQUFxQkUsQUFHTDs7Ozs7MkcsQUExRDRCOzs7OzttQkFDcEI7QSwwQkFBUyxNLEFBQU0sTSxBQUFmLEFBQ0Q7QSwyQkFBVyx3QixBQUFBLEFBQVM7O3VCQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CLEFBQWpCLEFBQW9DOzttQkFBekQ7QTs7dUJBQ3VCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGlCLEFBQWpCLEFBQWtDOzttQkFBekQ7QTs7eUNBRWdCLEFBQVEsVUFDdEIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUE4QixPQUE5QixBQUFxQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBUSxBQUN4RDt5QkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQ3pDO0EsQUFIbUIsQUFDcEIsaUJBQUEsQ0FEb0I7O21CQUFoQjtBO2lEQU1BLEVBQUMsU0FBRCxTQUFTLFVBQVQsVUFBa0IsY0FBbEIsY0FBK0IsZ0IsQUFBL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRFYsQSxBQTlEMkI7O2tCQThEM0IsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\kickstart\\pages\\campaigns\\requests\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\kickstart\\pages\\campaigns\\requests\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\requests\\index")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4zYTY5ZDJkZDE0MmMwZTYxNzI5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzPzVjMWE1MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbixUYWJsZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vQ29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5pbXBvcnQgUmVxdWVzdFJvdyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1JlcXVlc3RSb3cnO1xyXG5cclxuY2xhc3MgUmVxdWVzdEluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgY29uc3Qge2FkZHJlc3N9PXByb3BzLnF1ZXJ5O1xyXG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcclxuICAgIGNvbnN0IHJlcXVlc3RDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcclxuICAgIGNvbnN0IGFwcHJvdmVyc0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0cz0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpLmZpbGwoKS5tYXAoKGVsZW1lbnQsaW5kZXgpPT57XHJcbiAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3RzKTtcclxuICAgIHJldHVybnthZGRyZXNzLHJlcXVlc3RzLHJlcXVlc3RDb3VudCxhcHByb3ZlcnNDb3VudH07XHJcblxyXG4gIH1cclxuXHJcbnJlbmRlclJvdygpe1xyXG4gIHJldHVybiB0aGlzLnByb3BzLnJlcXVlc3RzLm1hcCgocmVxdWVzdCxpbmRleCk9PntcclxuICAgIHJldHVybiA8UmVxdWVzdFJvd1xyXG4gICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgaWQ9e2luZGV4fVxyXG4gICAgICAgIHJlcXVlc3Q9e3JlcXVlc3R9XHJcbiAgICAgICAgYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfVxyXG4gICAgICAgIGFwcHJvdmVyc0NvdW50PXt0aGlzLnByb3BzLmFwcHJvdmVyc0NvdW50fVxyXG4gICAgIC8+O1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuICByZW5kZXIoKXtcclxuXHJcbiAgICBjb25zdCB7SGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHl9ID0gVGFibGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDM+UmVxdWVzdHM8L2gzPlxyXG4gICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsb2F0ZWQ9XCJyaWdodFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxMH19PkFkZCBSZXF1ZXN0PC9CdXR0b24+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkRlc2NyaXB0aW9uPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QW1vdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92YWwgQ291bnQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZlPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICA8Qm9keT57dGhpcy5yZW5kZXJSb3coKX08L0JvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICA8ZGl2PiBGb3VuZCB7dGhpcy5wcm9wcy5yZXF1ZXN0Q291bnR9IHJlcXVlc3RzLjwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SW5kZXg7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7QUFPQTs7OztBQUdBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQXREQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUVBO0FBRUE7QUFEQTtBQUNBO0FBRkE7O0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==