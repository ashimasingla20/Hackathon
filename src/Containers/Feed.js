import React from 'react';
import ErrorBoundary from "../Components/ErrorBoundary/ErrorBoundary.js";
import { Grid, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import ProfileCard from '../Components/Cards/Card.js';
const FeedLanding = (props) => {
    return(<div className="app" style={{background :'#f8f8f8'}}>
            <h2 className="feed__header">Welcome to Airtel Social Networking App</h2>
            <ProfileCard/>
            {/* <div className="feed__cards">
                <ProfileCard/>
            </div> */}
            
            {/* <Card.Group centered>
                <Card href='profile/1'>
                    <Card.Content>
                        <Card.Header>Steve Sanders</Card.Header>
                        <Card.Meta>Friends of Elliot</Card.Meta>
                        <Card.Description>
                        <ReactAudioPlayer
                         
                            autoPlay
                            controls
                            />
                        </Card.Description>
                    </Card.Content>
                </Card> */}
                {/* <Card>
                    <Card.Content href='profile/2'>
                        <Card.Header>Steve Sanders</Card.Header>
                        <Card.Meta>Friends of Elliot</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                </Card> */}
            {/* </Card.Group> */}
        {/* </ErrorBoundary> */}
    </div>) 
}
export default FeedLanding;
