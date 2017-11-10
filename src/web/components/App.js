import React, {Component} from 'react';
import StartPage from './StartPage';
import EndPage from './EndPage';
import StoryPage from '../containers/StoryPage';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={StartPage} />
                    <Route path="/story" component={StoryPage} />
                    <Route path="/end" component={EndPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}