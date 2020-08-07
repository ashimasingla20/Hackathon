import React from "react";
import { Grid, Image, Button, Icon } from 'semantic-ui-react';
const MatchCard = () => {
    return (
        <div className="match__container">
            <div className="match__card">
                <p className="match__card__name">Steve Sanders</p>
            </div>
            <button><Icon name="phone"/></button>
        </div>
    )
}
export default MatchCard ;
