import React, {Component} from 'react';
import { PostWrapper, Navigate, Post } from '../../components';
import * as service from '../../services/post';
 
 
class PostContainer extends Component {
 
    componentDidMount() {
        this.fetchPostInfo(1);
    }


    fetchPostInfo = async (postId) => {
        const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId)
        ]);
        
        console.log(info);
    }
 
    render() {
        return (
            <PostWrapper>
                <Navigate/>
                <Post/>
            </PostWrapper>
        );
    }
}
 
export default PostContainer;