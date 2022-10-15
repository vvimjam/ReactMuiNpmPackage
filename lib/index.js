'use strict';

var material = require('@mui/material');
var React = require('react');

const MuiButton = (props) => {
    var _a, _b;
    return React.createElement(material.Button, { variant: (_a = props === null || props === void 0 ? void 0 : props.variant) !== null && _a !== void 0 ? _a : 'text' }, (_b = props === null || props === void 0 ? void 0 : props.name) !== null && _b !== void 0 ? _b : 'Button');
};

module.exports = MuiButton;
//# sourceMappingURL=index.js.map
