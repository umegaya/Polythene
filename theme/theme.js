"use strict";var _styler=require("polythene/common/styler");var _styler2=_interopRequireDefault(_styler);require("polythene/layout/theme/theme");require("polythene/font-roboto/theme");var _typography=require("polythene/theme/typography");var _typography2=_interopRequireDefault(_typography);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var roboto=[{"html, body, input, textarea":{"font-family":"Roboto, Helvetica, Arial, sans-serif"}}];var general=[{"*":[{"box-sizing":"border-box"},{"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},{"-webkit-tap-highlight-color":"transparent"}]," a, a:active, a:focus, input:active, input[type]:focus":{outline:0},"input:disabled":{opacity:1}}];_styler2.default.add("pe-theme",roboto,_typography2.default,general);