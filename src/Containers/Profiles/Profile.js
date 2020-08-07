import React from "react";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import ProfileForm from "../../Components/Profile/ProfileForm";
import ProfileView from "../../Components/Profile/ProfileView";
export const Profile = (props) => {
    const isSelf = true;
    console.log('here in profile');
    return (<>
        {
            isSelf 
            ? <ProfileForm/>
            : <ProfileView/>
        }
    </>)
    
}
function mapStatesToProps(state) {
    return {
       
    }
}
const mapDispatchToProps = {
    
}

export default connect(mapStatesToProps, mapDispatchToProps)(Profile);
