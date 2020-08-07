import React from "react";
// import firebase from "../../firebase";
// import md5 from "md5";
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
import {  PostApi } from '../../ajaxHandler';

class Register extends React.Component {
  state = {
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    loading: false,
    // usersRef: firebase.database().ref("users")
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ phoneNumber, password, passwordConfirmation }) => {
    return (
      !phoneNumber.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 4 || passwordConfirmation.length < 4) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {phoneNumber, password} = this.state;
    console.log(phoneNumber);
    console.log(password);
    
    // let data = {
    //   "phoneNumber" : "8447699020",
    //   "password" : "1234"
    // }
    // PostApi('secured/sign-up',data)
    if (this.isFormValid()) {
      this.setState({ errors: [], loading: true });
      let data = {
        phoneNumber,
        password
      }
      PostApi('secured/sign-up',data)
      //   .then((response) => {
      //     console.log(response);
      //     // handle success
      //     return Promise.resolve(response.data);
      //   })
      //   .catch((error) => {
      //     return Promise.reject(error.response)
      //   })
      //   .finally(function () {
      //     // always executed
      //   });
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //     .then(createdUser => {
    //       console.log(createdUser);
    //       createdUser.user
    //         .updateProfile({
    //           displayName: this.state.username,
    //           photoURL: `http://gravatar.com/avatar/${md5(
    //             createdUser.user.email
    //           )}?d=identicon`
    //         })
    //         .then(() => {
    //           this.saveUser(createdUser).then(() => {
    //             console.log("user saved");
    //           });
    //         })
    //         .catch(err => {
    //           console.error(err);
    //           this.setState({
    //             errors: this.state.errors.concat(err),
    //             loading: false
    //           });
    //         });
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       this.setState({
    //         errors: this.state.errors.concat(err),
    //         loading: false
    //       });
    //     });
    }
  };

  saveUser = createdUser => {
    return this.state.usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL
    });
  };

  handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName))
      ? "error"
      : "";
  };

  render() {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      errors,
      loading,
      number
    } = this.state;

    return (
      <div className="register">
          <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" icon color="orange" textAlign="center">
              <Icon name="user" color="orange" />
              Register to Social Connect
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
                  value={number}
                  className={this.handleInputError(errors, "number")}
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
                  className={this.handleInputError(errors, "password")}
                  type="password"
                />

                <Form.Input
                  fluid
                  name="passwordConfirmation"
                  icon="repeat"
                  iconPosition="left"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                  value={passwordConfirmation}
                  className={this.handleInputError(errors, "password")}
                  type="password"
                />

                <Button
                  disabled={loading}
                  className={loading ? "loading" : ""}
                  color="orange"
                  fluid
                  size="large"
                >
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
              Already a user? <Link to="/login">Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
      
    );
  }
}

export default Register;
