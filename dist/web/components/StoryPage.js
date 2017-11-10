'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactBootstrap = require('react-bootstrap');

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data = {

    labels: ['Sadness', 'Joy', 'Fear', 'Disgust', 'Anger'],
    datasets: [{
        label: ['Emotional Analysis'],
        backgroundColor: '#ffffff',
        borderColor: 'transparent',
        borderRadius: 10,
        hoverBackgroundColor: '#1F3A93',
        hoverBorderColor: '#34495E',
        data: [65, 80, 50, 77, 64]
    }]
};

var StoryPage = function (_Component) {
    _inherits(StoryPage, _Component);

    function StoryPage(props) {
        _classCallCheck(this, StoryPage);

        return _possibleConstructorReturn(this, (StoryPage.__proto__ || Object.getPrototypeOf(StoryPage)).call(this, props));
    }

    _createClass(StoryPage, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.scene) {}
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'title-container' },
                    _react2.default.createElement(
                        'h2',
                        { className: 'text' },
                        'Henry IV'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'line-container' },
                    _react2.default.createElement(
                        'h3',
                        { className: 'text' },
                        this.props.scene ? this.props.scene.text_entry : null
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Panel,
                    { id: 'chart-panel' },
                    _react2.default.createElement(_reactChartjs.Bar, {
                        id: 'bar-chart',
                        data: this.props.chartData ? this.props.chartData : null,
                        width: 10,
                        height: 300,
                        options: {
                            maintainAspectRatio: false
                        }
                    })
                )
            );
        }
    }]);

    return StoryPage;
}(_react.Component);

exports.default = StoryPage;