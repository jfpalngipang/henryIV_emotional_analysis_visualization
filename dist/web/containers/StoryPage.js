'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StoryPage = require('../components/StoryPage');

var _StoryPage2 = _interopRequireDefault(_StoryPage);

var _reactBootstrap = require('react-bootstrap');

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var socket = (0, _socket2.default)('http://localhost:3000');

var StoryPage = function (_Component) {
    _inherits(StoryPage, _Component);

    function StoryPage(props) {
        _classCallCheck(this, StoryPage);

        var _this = _possibleConstructorReturn(this, (StoryPage.__proto__ || Object.getPrototypeOf(StoryPage)).call(this, props));

        _this.state = {
            scene: null,
            chartData: null
        };
        return _this;
    }

    _createClass(StoryPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            fetch('/api/story', {
                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then(function (play) {
                console.log(play);
            }).catch(function (err) {
                console.log(err);
            });

            socket.on('line', function (data) {
                var chartData = {
                    labels: data.data.emotion ? Object.keys(data.data.emotion) : ['sadness', 'joy', 'fear', 'disgust', 'anger'],
                    datasets: [{
                        label: ['Emotional Analysis'],
                        backgroundColor: '#ffffff',
                        borderColor: 'transparent',
                        borderRadius: 10,
                        hoverBackgroundColor: '#1F3A93',
                        hoverBorderColor: '#34495E',
                        data: data.data.emotion ? Object.values(data.data.emotion) : [0, 0, 0, 0, 0]
                    }]
                };

                _this2.setState({ scene: data.data, chartData: chartData });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_StoryPage2.default, { scene: this.state.scene, chartData: this.state.chartData });
        }
    }]);

    return StoryPage;
}(_react.Component);

exports.default = StoryPage;