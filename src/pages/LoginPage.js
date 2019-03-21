import React, { Component } from 'react';
import { StyleSheet, View, Button, Keyboard } from 'react-native';

// Redux
import { login } from './../actions';
import { connect } from 'react-redux';


export class LoginPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillReceiveProps(nextProps) {
        this.onLoginComplete(nextProps)
    }

    onLoginComplete(props) {
        console.log(props, 'Props Login Complete');
    }

    renderButton = () => {
        return (
            <Button
                onPress={() => this.onLogin()}
                title="Sign In"
            />
        )
    }

    onLoginFire = () => {
        Keyboard.dismiss();
        const { email, password } = this.state;

        console.log(this.props, 'Props Login');

        this.props.login(email, password);
    }

    render() {
        const { container } = styles;
        return (
            <View style={container}>
                {this.renderButton()}
            </View >
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps, { login })(LoginPage)