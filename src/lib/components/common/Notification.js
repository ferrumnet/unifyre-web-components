import {PropTypes} from "prop-types";
import React, {Component} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';
import {ThemedText} from "../ThemedText";
import {ThemedButton} from "../ThemedButton";

/**
 * Notification component to be used as alert box
 *
 * @extends Component
 */
export class Notification extends Component {

    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            title: this.props.title,
            message: this.props.message,
        };
    }

    // componentWillReceiveProps(nextProps)
    // {
    //     this.setState({isShow: nextProps.isShow});
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isShow !== prevState.isShow) {
          return ({ isShow: nextProps.isShow }) // <- this is setState equivalent
        }
      }

    render() {
        let {message, title, isShow} = this.state;
        let theme = this.context;
        let styles = themedStyles(theme);

        if(!isShow){
            return null;
        }
        console.log(this.props, 'in the notification component')
        return (
            <div style={styles.container}>
                    <div style={styles.modal}>
                        <div>
                            <ThemedText.H3 text={title} style={styles.title} />
                            <ThemedText.P style={styles.message} text={message} />
                            <ThemedButton text={'Close'}
                                type={'notification'}
                                onPress={() => this.setState({isShow: !isShow}) }
                                 />
                        </div>
                    </div>
            </div>
        );
    }
}

Notification.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    isShow: PropTypes.bool,
}

const themedStyles = function(theme){
    return {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        modal: {
            opacity:'0.9',
            backgroundColor:'#aaaaaa',
            width: '80%',
            borderRadius: theme.get(Theme.Button.btnBorderRadius),
            position: 'absolute',
            top: '20%',
            left: '10%',
        },
        title: {
            color: theme.get(Theme.Text.textColor),
            textAlign: 'center',
            marginTop: theme.get(Theme.Spaces.line),
            fontWeight: 'bold',
        },
        message: {
            color: theme.get(Theme.Text.textColor),
            marginTop: theme.get(Theme.Spaces.line),
            marginBottom: theme.get(Theme.Spaces.line),
            textAlign: 'center',
        },
    }
};
