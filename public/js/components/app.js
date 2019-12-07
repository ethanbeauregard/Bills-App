webpackJsonp([0],{

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(239);

var _Header2 = _interopRequireDefault(_Header);

var _AllBills = __webpack_require__(237);

var _AllBills2 = _interopRequireDefault(_AllBills);

var _FloatingMenu = __webpack_require__(238);

var _FloatingMenu2 = _interopRequireDefault(_FloatingMenu);

var _AddBill = __webpack_require__(236);

var _AddBill2 = _interopRequireDefault(_AddBill);

var _immutabilityHelper = __webpack_require__(457);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BillsApp = function (_Component) {
  _inherits(BillsApp, _Component);

  function BillsApp() {
    _classCallCheck(this, BillsApp);

    var _this = _possibleConstructorReturn(this, (BillsApp.__proto__ || Object.getPrototypeOf(BillsApp)).call(this));

    _this.clickedAddBillBtn = function () {
      _this.setState({
        addBillOpen: !_this.state.addBillOpen
      });
    };

    _this.saveBill = function (bill) {
      var newBills = (0, _immutabilityHelper2.default)(_this.state.allBills, {
        $push: [bill]
      });

      _this.setState({
        allBills: newBills,
        addBillOpen: !_this.state.addBillOpen
      }, function () {
        console.log(_this.state);
      });
    };

    _this.changeBillStatus = function (billIndex) {
      var allBills = _this.state.allBills;
      var bill = allBills[billIndex];
      if (bill.status == 'unpaid') {
        bill.status = 'paid';
      } else {
        bill.status = 'unpaid';
      }

      var newState = (0, _immutabilityHelper2.default)(_this.state, {
        allBills: {
          $set: allBills
        }
      });
      _this.setState(newState, function () {
        console.log(_this.state);
      });
    };

    _this.deleteBill = function (billIndex) {
      var allBills = _this.state.allBills;
      allBills.splice(billIndex, 1);
      var newState = (0, _immutabilityHelper2.default)(_this.state, {
        allBills: {
          $set: allBills
        }
      });
      _this.setState(newState);

      console.log(billIndex);
    };

    _this.state = {
      addBillOpen: false,
      allBills: [{
        business_name: 'Airbnb',
        price: 45,
        status: 'unpaid'
      }]
    };
    return _this;
  }

  _createClass(BillsApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'BillsApp' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_AllBills2.default, { allBills: this.state.allBills, changeBillStatus: this.changeBillStatus, deleteBill: this.deleteBill }),
        _react2.default.createElement(_AddBill2.default, { addBillOpen: this.state.addBillOpen, saveBill: this.saveBill }),
        _react2.default.createElement('div', { className: 'content-background' }),
        _react2.default.createElement(_FloatingMenu2.default, { clickedAddBillBtn: this.clickedAddBillBtn })
      );
    }
  }]);

  return BillsApp;
}(_react.Component);

exports.default = BillsApp;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _BillsApp = __webpack_require__(231);

var _BillsApp2 = _interopRequireDefault(_BillsApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Immutable from './components/Immutable/Immutable';


var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_BillsApp2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddBill = function (_Component) {
  _inherits(AddBill, _Component);

  function AddBill() {
    _classCallCheck(this, AddBill);

    var _this = _possibleConstructorReturn(this, (AddBill.__proto__ || Object.getPrototypeOf(AddBill)).call(this));

    _this.inputChange = function (event) {
      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      _this.setState(_defineProperty({}, name, value));
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.setState({
        business_name: '',
        price: 0
      });
      _this.props.saveBill(_this.state);
      console.log(_this.state);
    };

    _this.state = {
      business_name: '',
      price: 0,
      status: ''
    };
    return _this;
  }

  _createClass(AddBill, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'AddBill', className: '' + (this.props.addBillOpen == true ? 'active' : '') },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h2',
            null,
            'Add Bill'
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'business_name' },
                'Business Name'
              ),
              _react2.default.createElement('input', { type: 'text', id: 'business_name', name: 'business_name', onChange: this.inputChange, value: this.state.business_name })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'price' },
                'Price'
              ),
              _react2.default.createElement('input', { type: 'text', id: 'price', name: 'price', onChange: this.inputChange, value: this.state.price })
            ),
            _react2.default.createElement(
              'button',
              { type: 'submit' },
              'Save'
            )
          )
        )
      );
    }
  }]);

  return AddBill;
}(_react.Component);

exports.default = AddBill;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllBills = function (_Component) {
  _inherits(AllBills, _Component);

  function AllBills() {
    _classCallCheck(this, AllBills);

    var _this = _possibleConstructorReturn(this, (AllBills.__proto__ || Object.getPrototypeOf(AllBills)).call(this));

    _this.showAllBills = function () {
      var bills = _this.props.allBills;

      if (bills.length > 0) {
        return bills.map(function (bill, index) {
          return _react2.default.createElement(
            'li',
            { className: 'bill ' + (bill.status == 'paid' ? 'active' : ''), key: index },
            _react2.default.createElement(
              'div',
              { className: 'company' },
              _react2.default.createElement(
                'div',
                { className: 'logo' },
                _react2.default.createElement('img', { src: '/img/billsapp/airbnb-logo.png' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'title' },
                bill.business_name
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'price' },
              '-$',
              bill.price
            ),
            _react2.default.createElement(
              'div',
              { className: 'buttons' },
              _react2.default.createElement(
                'div',
                { className: 'paid', onClick: _this.props.changeBillStatus.bind(null, index) },
                _react2.default.createElement('i', { className: 'fas fa-check' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'delete', onClick: _this.props.deleteBill.bind(null, index) },
                _react2.default.createElement('i', { className: 'fas fa-trash-alt' })
              )
            )
          );
        });
      } else {
        return _react2.default.createElement(
          'li',
          { className: 'bill' },
          _react2.default.createElement(
            'div',
            { className: 'no-bills' },
            'No Bills, Please Add a Bill'
          )
        );
      }
    };

    _this.billsTotalAmount = function () {
      var bills = _this.props.allBills;
      var total = 0;

      for (var i = 0; i < bills.length; i++) {
        total += parseInt(bills[i].price);
      }

      if (bills.length > 0) {
        return total;
      } else {
        return 0;
      }
    };

    _this.state = {};
    return _this;
  }

  _createClass(AllBills, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'AllBills' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'total-bills' },
            _react2.default.createElement(
              'div',
              { className: 'text' },
              'Total Amount: '
            ),
            _react2.default.createElement(
              'div',
              { className: 'number' },
              '$',
              this.billsTotalAmount()
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'bills-list' },
            this.showAllBills()
          )
        )
      );
    }
  }]);

  return AllBills;
}(_react.Component);

exports.default = AllBills;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingMenu = function (_Component) {
  _inherits(FloatingMenu, _Component);

  function FloatingMenu() {
    _classCallCheck(this, FloatingMenu);

    var _this = _possibleConstructorReturn(this, (FloatingMenu.__proto__ || Object.getPrototypeOf(FloatingMenu)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(FloatingMenu, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "nav",
        { id: "FloatingMenu" },
        _react2.default.createElement(
          "div",
          { className: "link" },
          _react2.default.createElement(
            "div",
            { className: "icon" },
            _react2.default.createElement("i", { className: "far fa-credit-card" })
          ),
          _react2.default.createElement(
            "div",
            { className: "text" },
            "Spend"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "link" },
          _react2.default.createElement(
            "div",
            { className: "icon" },
            _react2.default.createElement("i", { className: "fas fa-piggy-bank" })
          ),
          _react2.default.createElement(
            "div",
            { className: "text" },
            "Save"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "link" },
          _react2.default.createElement(
            "div",
            { className: "icon" },
            _react2.default.createElement("i", { className: "fas fa-exchange-alt" })
          ),
          _react2.default.createElement(
            "div",
            { className: "text" },
            "Transfer"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "link" },
          _react2.default.createElement(
            "div",
            { className: "icon" },
            _react2.default.createElement("i", { className: "fas fa-cogs" })
          ),
          _react2.default.createElement(
            "div",
            { className: "text" },
            "Settings"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "link", onClick: this.props.clickedAddBillBtn },
          _react2.default.createElement(
            "div",
            { className: "add-button" },
            _react2.default.createElement(
              "div",
              { className: "icon" },
              "+"
            )
          )
        )
      );
    }
  }]);

  return FloatingMenu;
}(_react.Component);

exports.default = FloatingMenu;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Bills App'
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[235]);