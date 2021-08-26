"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MessageDialog = _interopRequireDefault(require("./MessageDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/MessageDialog',
  component: _MessageDialog.default,
  argTypes: {
    type: {
      name: 'type',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: 'success',
      description: 'success/warning/error',
      control: {
        type: 'text'
      }
    },
    message: {
      name: 'message',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: 'This is a success message',
      description: 'your message here',
      control: {
        type: 'text'
      }
    },
    btnText: {
      name: 'btnText',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: 'OK',
      description: 'text inside your button',
      control: {
        type: 'text'
      }
    },
    show: {
      name: 'show',
      type: {
        required: true
      },
      defaultValue: true,
      description: 'show/hide message dialog'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_MessageDialog.default, args);
};

var Default = Template.bind({});
exports.Default = Default;