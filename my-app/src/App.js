import React from 'react';
import './App.css';

class B extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.b = this.props.lolkek
    }

    static getDerivedStateFromProps(newProps, newState) {
        newState.b = newProps.lolkek;
        return newState
    }

    render() {
        return (
            <div>
                {this.state.b}
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {a: 1};

        setInterval(() =>
            this.setState({a: this.state.a + 1}), 100)

    }

    handleChange = (nevedomayahreny) => {
        this.setState({[nevedomayahreny.target.name]: [nevedomayahreny.target.value]})
    };

    render() {
        return <div>
            <input name = {this.state.target.name} value = {this.state.target.name}/>
        </div>
    }
}

export default App
