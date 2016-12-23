import React, {Component} from 'react';
import {Comment} from '../';
 
import './CommentList.css';
 
 
class CommentList extends Component {
    render() {
        return (
            <ul className="CommentList">
                <Comment/>
                <Comment/>
                <Comment/>
            </ul>
        );
    }
}
 
export default CommentList;