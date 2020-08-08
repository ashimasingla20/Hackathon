import React from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import {  PostApi, GetApi } from '../../ajaxHandler';
class Login extends React.Component {
  state = {
    phoneNumber: "",
    password: "",
    errors: [],
    loading: false
  };
  isFormValid = ({phoneNumber, password}) => phoneNumber && password;
  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if(this.isFormValid(this.state)) {
      this.setState({errors: [], loading: true})
      console.log(this.state);
      const {phoneNumber, password} = this.state;
      let data = {
        phoneNumber,
        password
      };
      let {history} = this.props;
      PostApi('secured/login',data, false)
        .then((response) => {
          console.log(response);
          // handle success
          localStorage.setItem("token", response);
          return Promise.resolve(response.data);
        })
        .then (() => {
          GetApi('authenticated/user/my-info', {}, true)
            .then((myresponse) => {
              console.log(myresponse);
              if(myresponse.profileStatus === "COMPLETED") {
                history.push("/");
              } else {
                history.push("/profile");
              }
            })
        })
        // .then((response) => {
        //   console.log(response);
        //   this.props.history.push('/');
        // }
      // firebase
      //   .auth()
      //   .signInWithEmailAndPassword(this.state.email, this.state.password)
      //   .then(signedInUser => {
      //     console.log(signedInUser);
      //     this.setState({loading: false})
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     this.setState({
      //       errors: this.state.errors.concat(err),
      //       loading: false
      //     })
      //   })
    }
   
  };
  handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName) )? 'error': '';
  }
  render() {
    const {
      phoneNumber,
      password,
      errors,
      loading
    } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="login">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="violet" textAlign="center">
            <Icon name="user" color="violet" />
            Login to Social Connect
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="phoneNumber"
                icon="phone"
                iconPosition="left"
                placeholder="Phone Number"
                onChange={this.handleChange}
                value={phoneNumber}
                className={this.handleInputError(errors, 'phoneNumber')}
                type="number"
              />

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
                className={this.handleInputError(errors, 'password')}
                type="password"
              />
              <Button 
                disabled={loading}
                className={loading ? 'loading': ''}
                color="violet" 
                fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>
            Don't have an account? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
