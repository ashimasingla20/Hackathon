import React from 'react';
import ProfileCard from '../Components/Cards/Card.js';
import { PostApi, GetApi } from '../ajaxHandler';
class FeedLanding extends React.Component {
    componentDidMount() {
        GetApi('authenticated/user/my-feed',{})
            .then ((response) => {
                console.log(response)
            })
    }
    render() {
        return(<div className="app" style={{background :'#f8f8f8'}}>
            <h2 className="feed__header">Welcome to Airtel Social Networking App</h2>
            <ProfileCard/>
        </div>) 
    }
}
export default FeedLanding;
