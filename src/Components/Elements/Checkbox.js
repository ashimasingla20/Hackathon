import React from 'react';
const DefaultTableCheckbox = ({ onChangeHandler, checked, rowData, value, isCheckHeader, isChecked }) => {
    let id = 'temp'
    if (rowData) {
        const { _id } = rowData;
        id = id + _id;
    }

    return (
        <div className="checkbox-group">
            <input type="checkbox" id="html"/>
            <label for="html">I am 18 or above</label>
        </div>
    )
}
export default DefaultTableCheckbox;
