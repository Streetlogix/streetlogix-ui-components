"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _constants = require("../utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _core.makeStyles)({
  DialogRoot: {
    textAlign: 'center'
  },
  DialogPaper: {
    padding: '20px 60px'
  },
  TitleRoot: {
    padding: 0
  },
  MessageDialogIcon: {
    fontSize: 40,
    color: function color(props) {
      if (props.type === 'success') return _constants.colors.successGreen;
      if (props.type === 'warning') return _constants.colors.warningYellow;
      if (props.type === 'error') return _constants.colors.errorRed;
    }
  },
  DialogActions: {
    justifyContent: 'center',
    padding: 0
  },
  ButtonRoot: {
    padding: '2px 30px',
    boxShadow: 'none',
    color: function color(props) {
      if (props.type === 'success') return _constants.colors.successGreen;
      if (props.type === 'warning') return _constants.colors.warningYellow;
      if (props.type === 'error') return _constants.colors.errorRed;
    },
    background: function background(props) {
      if (props.type === 'success') return '#E8FFDB';
      if (props.type === 'warning') return '#FFECDB';
      if (props.type === 'error') return '#FFDCDB';
    }
  }
});

var MessageDialog = function MessageDialog(props) {
  var type = props.type,
      message = props.message,
      btnText = props.btnText,
      show = props.show;
  var classes = useStyles(props);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showDialog = _useState2[0],
      setShowDialog = _useState2[1];

  var handleClose = function handleClose() {
    setShowDialog(false);
  };

  (0, _react.useEffect)(function () {
    setShowDialog(show);
  }, [show]);
  return /*#__PURE__*/_react.default.createElement(_core.Dialog, {
    open: show,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    classes: {
      root: classes.DialogRoot,
      paper: classes.DialogPaper
    }
  }, /*#__PURE__*/_react.default.createElement(_core.DialogTitle, {
    id: "alert-dialog-title",
    classes: {
      root: classes.TitleRoot
    }
  }, type && type === 'success' ? /*#__PURE__*/_react.default.createElement(_icons.CheckCircle, {
    classes: {
      root: classes.MessageDialogIcon
    }
  }) : null, type && type === 'warning' ? /*#__PURE__*/_react.default.createElement(_icons.Warning, {
    classes: {
      root: classes.MessageDialogIcon
    }
  }) : null, type && type === 'error' ? /*#__PURE__*/_react.default.createElement(_icons.Cancel, {
    classes: {
      root: classes.MessageDialogIcon
    }
  }) : null), /*#__PURE__*/_react.default.createElement(_core.DialogContent, null, /*#__PURE__*/_react.default.createElement(_core.DialogContentText, {
    id: "alert-dialog-description"
  }, message)), /*#__PURE__*/_react.default.createElement(_core.DialogActions, {
    classes: {
      root: classes.DialogActions
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    onClick: handleClose,
    variant: "contained",
    disableRipple: true,
    classes: {
      root: classes.ButtonRoot
    }
  }, btnText)));
};

MessageDialog.propTypes = {
  type: _propTypes.default.string.isRequired,
  message: _propTypes.default.string.isRequired,
  btnText: _propTypes.default.string.isRequired,
  show: _propTypes.default.bool.isRequired
};
MessageDialog.defaultProps = {
  type: null,
  // success, warning, error
  message: null,
  btnText: null,
  show: null
};
var _default = MessageDialog;
exports.default = _default;