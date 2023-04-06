import React from "react"


export default


class Mounting extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            mount: true
        }
    
        this.mountCounter = () => this.setState({mount: true})
        this.unmountCounter = () => this.setState({mount: false})

    }   
 
    render () {
        return (
            <div>
                <button onClick={this.mountCounter} disabled={this.state.mount}>
                    Mount Counter
                </button>
    
                <button onClick={this.unmountCounter} disabled={!this.state.mount}>
                    Unmount Counter
                </button>
            </div>
        );
    }
}
