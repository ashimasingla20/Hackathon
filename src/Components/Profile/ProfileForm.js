import React from "react";
import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon,
    Dropdown
  } from "semantic-ui-react";
import {
    DateInput
  } from 'semantic-ui-calendar-react';
import DefaultTableCheckbox from "../Elements/Checkbox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const optionsArray = [
    {
      key: 'male',
      text: 'Male',
      value: 'male',
      image: { avatar: true, src: 'https://semantic-ui.com/images/avatar/small/elliot.jpg' },
    },
    {
      key: 'female',
      text: 'Female',
      value: 'female',
      image: { avatar: true, src: 'https://semantic-ui.com/images/avatar/small/stevie.jpg' },
    }
]
const ExampleCustomInput = ({ value, onClick }) => (
    // <button className="example-custom-input" onClick={onClick}>
    //   {value}
    // </button>
    <input value={value} onClick={onClick} className="date__calender" style={{ width: '100%' }}/>
  );
class ProfileForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nickname: '',
            phone: '',
            dob: '',
            gender: ''
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleAudioChange = this.handleAudioChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleAudioChange = () => {
        const file = this.refs.file.files[0];
        var sound = document.getElementById('sound');
        // console.log(this.refs.file.files[0])
        sound.src = URL.createObjectURL(file);
        const reader  = new FileReader();

        reader.onloadend = () => {
            this.setState({
                fileUrl: reader.result
            })
        }
        if (file) {
            reader.readAsDataURL(file);
            this.setState({
                fileUrl :reader.result
            })
        } 
        else {
            this.setState({
                fileUrl: ""
            })
        }
    }
    handleSubmit = () => {
        const {nickname, phone, dob, gender, fileUrl} = this.state;
    }
    handleChange = (event, {value}) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleOnChange = (event, {value}) => {
        this.setState({ gender: value });
    }
    handleDateChange = date => {
        console.log(date);
        this.setState({
          dob: date
        });
    };
    handleClick = () => {
        var addSound = document.getElementById('recorder');
        addSound.click();
    }
    // handleAudioChange = () => {

    // }
    render() {
        const {nickname, phone, dob, gender} = this.state;
        return (
            <div>
                <Grid textAlign="center" verticalAlign="middle" className="app">
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h1" icon color="orange" textAlign="center">
                            <Icon name="user" color="orange" />
                            My Profile
                        </Header>
                        <Form onSubmit={this.handleSubmit} size="large">
                            <Segment stacked>
                            <Form.Input
                                fluid
                                name="nickname"
                                icon="user"
                                iconPosition="left"
                                placeholder="nickname"
                                onChange={this.handleChange}
                                value={nickname}
                                type="text"
                            />
    
                            <Form.Input
                                fluid
                                name="phone"
                                icon="phone square"
                                iconPosition="left"
                                placeholder="Phone Number"
                                onChange={this.handleChange}
                                value={phone}
                                // className={this.handleInputError(errors, "email")}
                                type="number"
                            />
                            <div className="date__container">
                                <label className="date__container__label">Date:</label>
                                <DatePicker 
                                    // popperClassName="date__calender"
                                    // className="date__calender"
                                    name="dob" 
                                    selected={dob} 
                                    customInput={<ExampleCustomInput />}
                                    onChange={this.handleDateChange} />
                            </div>
                            <Form.Dropdown
                                className="dropdown"
                                fluid
                                selection
                                placeholder='Please select Gender'
                                options={optionsArray}
                                onChange={this.handleOnChange}
                                name="gender"
                                value={gender}
                                />
                            <button 
                                className="profile__about"
                                type="button" 
                                onClick={this.handleClick}> 
                                Tell about yourself
                            </button>
                            <input 
                                ref="file" 
                                onChange={this.handleAudioChange}
                                type="file" 
                                accept="audio/*" 
                                capture id="recorder" 
                                className="audio__screen"/>
                            <audio 
                                id="sound"
                                ref="audio_tag" 
                                src="" 
                                autoPlay
                                controls/>
                            <DefaultTableCheckbox/>
                            <Button
                                // disabled={loading}
                                // className={loading ? "loading" : ""}
                                color="orange"
                                fluid
                                size="large"
                            >
                                Submit
                            </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>)
    }
   
    
}
export default ProfileForm;
