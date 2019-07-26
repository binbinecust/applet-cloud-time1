"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  config: {},
  hooks: {},
  data: {},
  computed: {
    testcomputed: function testcomputed() {
      return 'computed - ' + this.mynum;
    }
  },
  methods: {},
  created: function created() {}
}, {info: {"components":{"list":{"path":"../components/wepy-list"},"loading":{"path":"../components/van/loading/index"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {}, models: {} });