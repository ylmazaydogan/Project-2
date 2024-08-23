// import React , {Component} from 'react';

// class PasswordValidationForm extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         input: {},
//         errors: {}
//       };
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//       let input = this.state.input;
//       input[event.target.name] = event.target.value;
//       this.setState({
//         input
//       });
//     }
//     handleSubmit(event) {
//       event.preventDefault();
//       if (this.validate()) {
//         console.log(this.state);
//         let input = {};
        
//         input["password"] = "";
//         input["confirm_password"] = "";
//         this.setState({ input: input });
//         alert("Form is submitted");
//       }
//     }
//     validate() {
//       let input = this.state.input;
//       let errors = {};
//       let isValid = true;   
//       if (!input["password"]) {
//         isValid = false;
//         errors["password"] = "Please enter your password.";
//       }
//       if (!input["confirm_password"]) {
//         isValid = false;
//         errors["confirm_password"] = "Please enter your confirm password.";
//       }
//       if (typeof input["password"] !== "undefined") {
//         if (input["password"].length < 6) {
//           isValid = false;
//           errors["password"] = "Please add at least 6 charachter.";
//         }
//       }
//       if (
//         typeof input["password"] !== "undefined" &&
//         typeof input["confirm_password"] !== "undefined"
//       ) {
//         if (input["password"] != input["confirm_password"]) {
//           isValid = false;
//           errors["confirm_password"] = "Passwords don't match.";
//         }
//       }
//       this.setState({
//         errors: errors
//       });
//       return isValid;
//     }
// }
// export default PasswordValidationForm;