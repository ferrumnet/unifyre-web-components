import { PropTypes } from "prop-types";
import React, { useContext } from 'react';
import { ThemeContext, Theme } from 'unifyre-react-helper';
import { getRenderedResource } from 'unifyre-native-assets'

/**
 * InputGroupAddon components - used to create inputs with icon on the box
 *
 * @param       {String} [placeholder=''}]
 * @param       {String} [icon=''}]
 * @constructor
 */
export function InputGroupAddon({ placeholder = '', icon = '', type = 'text', value = '', toggleIcon, disabled = false , isPassword = false, onChange, ...props}) {

    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);

    let iconElement;

    value = (value || '').toString();

    if (icon !== '') {
        // With icon
        const iconSource = getRenderedResource(icon);
        iconElement = (<button onClick={toggleIcon} style={styles.iconContainer}>
                <img style={styles.icon} 
                    src={iconSource} 
                    alt='icon'/>
        </button>);
    } 
    return (
        <div style={styles.inputContainer} >
            <input
                type={type}
                style={styles.input}
                placeholder={placeholder}
                maxLength={40}
                defaultValue={value}
                disabled={disabled}
                onChange={onChange}
                {...props}
            />
            {iconElement} 
        </div>
    );
}

InputGroupAddon.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    toggleIcon: PropTypes.func,
}

const themedStyles = function (theme) {
    return {
        inputContainer: {
            borderRadius: theme.get(Theme.Button.btnBorderRadius),
            borderColor: theme.get(Theme.Input.inputBackground),
            borderWidth: 9,
            borderStyle: 'solid',
            backgroundColor: theme.get(Theme.Input.inputBackground),
            flexDirection: 'row',
            borderBottomWidth: 5,
            width: '60%',
            margin:' 2%', 
            marginLeft: '20%',
            height: theme.get(Theme.Input.inputTextSize) * 1.5,
            // paddingLeft: theme.get(Theme.Spaces.screenMarginHorizontal),
            // paddingRight: theme.get(Theme.Spaces.screenMarginHorizontal),
        },
        input: {
            backgroundColor: theme.get(Theme.Input.inputBackground),
            fontSize: theme.get(Theme.Input.inputTextSize) * 0.5,
            color: theme.get(Theme.Input.inputTextColor),
            paddingLeft: theme.get(Theme.Button.btnBorderRadius),
            flex: 1,
            display: 'inline-block', 
            border: 'none',
            outline: 'none',
            width: '40%',
            padding: '10px 10px',
            textAlign: 'center'
        },
        icon: {
            marginLeft: '70px',
            height: theme.get(Theme.Text.h2Size) * 0.5,
            width: theme.get(Theme.Text.h2Size) * 0.5,
            justifyContent: 'center',
            alignSelf: 'center',
            marginRight: 'auto',
            float:'left',
            cursor:'pointer',
        },
        iconContainer: {
            justifyContent: 'center',
            marginTop:2,
            backgroundColor:theme.get(Theme.Input.inputBackground),
            border: 'none',
            outline: 'none'
        },
    }
}

