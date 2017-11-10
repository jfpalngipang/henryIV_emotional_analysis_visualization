import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class StartPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/story"><h1>START</h1></Link>
            </div>
        )
    }
}