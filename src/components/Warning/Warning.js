import React, {Component} from 'react';
import "./Warning.css";
 
class Warning extends Component {
    render() {
        const { message, visible } = this.props;
 
        return (
            <div className="Warning-wrapper">
                <div className="Warning animated bounceIn">
                    {message}
                </div>
            </div>
        );
    }
}
 
export default Warning;