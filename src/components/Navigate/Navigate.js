import React from 'react';
import {Button} from 'semantic-ui-react';
import './Navigate.css'
 
const Navigate = () => (
    <div className="Navigate">
        <Button
            color="teal"
            content="Previous"
            icon="left arrow"
            labelPosition="left"
        />
        <div className="Navigate-page-num">
            1
        </div>
        <Button
            color="teal"
            content="Next"
            icon="right arrow"
            labelPosition="right"
            className="Navigate-right-button"
        /> 
    </div>
);
 
export default Navigate;