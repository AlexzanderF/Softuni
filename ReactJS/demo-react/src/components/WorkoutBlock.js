import { Component } from 'react'

class WorkoutBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rpe: 1
        };
    }

    render() {
        return (
            <div>
                <h2>{this.props.heading}</h2>
                <p>RPE: {this.state.rpe}</p>
                <button onClick={(e) => this.setState({ rpe: Math.min(this.state.rpe + 1, 10) })}>Increase RPE</button>
                <button onClick={(e) => this.setState({ rpe: Math.max(this.state.rpe - 1, 1) })}>Decrease RPE</button>
            </div>
        );
    }
}

export default WorkoutBlock;