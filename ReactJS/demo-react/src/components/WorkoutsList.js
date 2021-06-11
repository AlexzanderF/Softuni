import { Component } from 'react';
import WorkoutBlock from "./WorkoutBlock";

class WorkoutsList extends Component {
    // WE NEED CONSTRUCTOR WITH PROPS ONLY IF WE ARE GOING TO USE THE PROPS IN THE CONSTRUCTOR
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                {this.props.headings.map((x, i) => {
                    return <WorkoutBlock heading={x} key={i} />;
                })}
            </div>
        );
    }
}

export default WorkoutsList;
