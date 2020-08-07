import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Grid, Image, Button, Icon } from 'semantic-ui-react';
const ProfileCard = () => {
    return (
        <div className="feed__container">
            <div className="feed__card">
                <ReactAudioPlayer
                    // src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba-online-audio-converter.com_-1.wav"
                    autoPlay
                    controls
                    />
                <p className="feed__card__name">Steve Sanders</p>
                {/* <div>
                    <button>Like</button>
                    <button>Dislike</button>
                </div> */}
                <div class="extra content">
                    <div class="ui two buttons">
                        <div class="ui basic green button">
                            <Icon name="thumbs up outline"/>
                            Yes
                        </div>
                        <div class="ui basic red button"> 
                            <Icon name="thumbs down outline"/>No
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileCard ;
