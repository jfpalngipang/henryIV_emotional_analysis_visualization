import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

let data = {

    labels: ['Sadness', 'Joy', 'Fear', 'Disgust', 'Anger'],
    datasets: [
      {
        label: ['Emotional Analysis'],
        backgroundColor: '#ffffff',
        borderColor: 'transparent',
        borderRadius: 10,
        hoverBackgroundColor: '#1F3A93',
        hoverBorderColor: '#34495E',
        data: [65, 80, 50, 77, 64]
      }
    ]
  };

export default class StoryPage extends Component {
    constructor(props) {
        super(props);
        
        
    }

    componentWillReceiveProps(newProps) {
        if(newProps.scene) {
        }
    }

    render() {
        return (
            <div>
                <div className="title-container">
                    <h2 className="text">Henry IV</h2>
                </div>

                <div className="line-container">
                    <h3 className="text">{this.props.scene? this.props.scene.text_entry :  null}</h3>
                </div>
                <Panel id="chart-panel">
                    <Bar
                        id="bar-chart"
                        data={this.props.chartData? this.props.chartData: null}
                        width={10}
                        height={300}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </Panel>
            </div>
        )
    }
}