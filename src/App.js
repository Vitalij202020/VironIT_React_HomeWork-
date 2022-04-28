import React, {Fragment} from 'react';
import './App.css';
import Button from "./components/Button";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            historyBtn: [],
            buttons: [
                {id: 1, style: 'first'},
                {id: 2, style: 'second'},
                {id: 3, style: 'third'},
                {id: 4, style: 'fourth'},
                {id: 5, style: 'fifth'}
            ]
        }
    }

    clickHandler = (e) => {
        this.setState((prevState) => ({
            historyBtn: [...prevState.historyBtn, e.target.innerText]
        }))
    }


    render() {
        return (
            <div className="App">
                {this.state.buttons.map(btn => (
                    <Fragment key={btn.id}>
                        <Button style={btn.style} onClick={this.clickHandler}>{btn.id}</Button>
                    </Fragment>
                ))}

                {this.state.historyBtn.length > 2
                    ?
                    this.state.historyBtn.slice(this.state.historyBtn.length - 3).map(item => (
                        <p key={Math.random()}><strong>{item}</strong></p>
                    ))
                    :
                    <p><strong>Нажмитете на кнопки три раза</strong></p>
                }
            </div>
        )
    }
}


export default App;

