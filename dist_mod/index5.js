'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fill0 = num => {
  var _num = parseFloat(num);

  return _num < 10 ? '0' + _num : _num;
};

var chainAsync = fns => {
  var curr = 0;
  var last = fns[fns.length - 1];

  var next = () => {
    var fn = fns[curr++];
    fn === last ? fn() : fn(next);
  };

  next();
};

exports.chainAsync = chainAsync;
exports.fill0 = fill0;
