'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _v = require('watson-developer-cloud/natural-language-understanding/v1.js');

var _v2 = _interopRequireDefault(_v);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _socket = require('../socket');

var _socket2 = _interopRequireDefault(_socket);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nlu = new _v2.default({
    'username': 'f37a7353-73f4-47ce-8cf6-782df797b12c',
    'password': 'xy7ttJhNZxZ3',
    'version_date': '2017-02-27'
});

var NluController = function () {
    function NluController() {
        _classCallCheck(this, NluController);
    }

    _createClass(NluController, null, [{
        key: 'getPlay',
        value: function getPlay(req, res, next) {
            res.json({ text_entry: 'Hello, Franz.' });
        }
    }, {
        key: 'analyze',
        value: function analyze(req, res, next) {
            _fs2.default.readFile(_path2.default.join(__dirname, '../../../') + 'henry_iv.json', 'utf8', function (err, data) {
                if (err) throw err;
                var scenes = JSON.parse(data);

                _.each(scenes, function (scene, i) {
                    setTimeout(function () {
                        var data = {
                            'text': scene.text_entry,
                            'features': {
                                'emotion': {}
                            },
                            'language': 'en'
                        };

                        nlu.analyze(data, function (err, response) {
                            if (err) {
                                console.log(err);
                            }

                            var clientData = {
                                text_entry: data.text,
                                emotion: response ? response.emotion.document.emotion : null
                            };

                            _socket2.default.emit(clientData);
                        });
                    }, 5000 * i);
                });

                res.status(200);
            });
        }
    }]);

    return NluController;
}();

exports.default = NluController;