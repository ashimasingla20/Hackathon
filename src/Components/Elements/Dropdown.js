import React from 'react';
const Dropdown = () => {
    return (<div class="ui selection dropdown">
        <input type="hidden" name="gender"/>
        <i class="dropdown icon"></i>
        <div class="default text">Gender</div>
        <div class="menu">
            <div class="item" data-value="1">Male</div>
            <div class="item" data-value="0">Female</div>
        </div>
    </div>)
}
export default Dropdown;
