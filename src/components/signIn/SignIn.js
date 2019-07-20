import React from 'react';

import './signIn.scss';
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";

class SignIn extends React.Component {

    state = {
        email: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }

}

export default SignIn;
