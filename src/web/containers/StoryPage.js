import React, { Component } from 'react';
import Story from '../components/StoryPage';
import { Panel } from 'react-bootstrap';
import client from 'socket.io-client';

const socket = client('http://localhost:3000');

export default class StoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scene: null,
            chartData: null
        }
    }

    componentDidMount() {
        fetch('/api/story', {
            method:'GET'
        }).then((response) => {
            return response.json();
        }).then((play) => {
            console.log(play);
        }).catch((err) => {
            console.log(err);
        });

        socket.on('line', (data) => {
            let chartData = {
                labels: data.data.emotion? Object.keys(data.data.emotion) : ['sadness', 'joy', 'fear', 'disgust', 'anger'],
                datasets: [
                    {
                        label: ['Emotional Analysis'],
                        backgroundColor: '#ffffff',
                        borderColor: 'transparent',
                        borderRadius: 10,
                        hoverBackgroundColor: '#1F3A93',
                        hoverBorderColor: '#34495E',
                        data: data.data.emotion? Object.values(data.data.emotion) : [0, 0, 0, 0, 0]
                    }
                ]
            };

            this.setState({scene: data.data, chartData: chartData});
        })
    }

    render() {
        return (
            <Story scene={this.state.scene} chartData={this.state.chartData} />
        );
    }
}