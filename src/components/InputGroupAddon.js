import React, {useContext} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';
import {widthFactor} from './ThemedText';

/**
 * InputGroupAddon components - used to create inputs with icon on the box
 *
 * @constructor
 */
export function InputGroupAddon({placeholder = '', icon = '', value = '', type = 'text',
                                    toggleIcon, toggleIconOnPressIn, toggleIconOnPressOut,
                                    numberOfLines = 1, multiline = false,
                                    isPassword = false, leftAddon, rightAddon, textStyle, editable,
                                    lightBorder = false,
                                    inputRef, onChange, ...props}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);

    let iconElement;

    value = (value || '').toString();

    if (icon) {
        // With icon
        iconElement = <a onClick={toggleIcon}
                        onMouseDown={toggleIconOnPressOut}
                        onMouseUp={toggleIconOnPressIn}
                        style={styles.iconContainer}>
            <img style={styles.icon} src={icon} />
        </a>;
    }
    const editRelatedStyleBkg = editable !== false ? ({}) : styles.readOnlyInputBkg;
    const editRelatedStyleFg = editable !== false ? ({}) : styles.readOnlyInputFg;
    const multiLineStyle = multiline ? styles.multiline(numberOfLines) : ({});
    const borderStyle = lightBorder ? styles.lightBorder : ({});

    return (
        <div style={Object.assign(styles.inputContainer, editRelatedStyleBkg, multiLineStyle, borderStyle)}>
            {leftAddon}
            {multiline ? (
            <textarea
                ref={inputRef}
                editable={editable}
                style={Object.assign(styles.input, editRelatedStyleFg, textStyle)}
                placeholder={placeholder}
                defaultValue={value}
                rows={numberOfLines}
                onChange={e => onChange(e.target.value)}
                {...props}
            />
            ) : (
            <input
                ref={inputRef}
                editable={editable}
                type={isPassword ? 'password' : type}
                style={Object.assign(styles.input, editRelatedStyleFg, textStyle)}
                placeholder={placeholder}
                maxLength={80}
                value={!editable ? value : undefined}
                defaultValue={editable ? value : undefined}
                onChange={e => onChange(e.target.value)}
                {...props}
            />
            )}
            {iconElement}
            {rightAddon}
        </div>
    );
}

const themedStyles = theme => ({
    inputContainer: {
        borderRadius: theme.get(Theme.Button.btnBorderRadius),
        borderColor: theme.get(Theme.Input.inputBackground),
        borderWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        backgroundColor: theme.get(Theme.Input.inputBackground),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: theme.get(Theme.Input.inputTextSize) * 1.5,
        flex: 1,
    },
    input: {
        backgroundColor: 'transparent',
        border: 0,
        fontSize: theme.get(Theme.Input.inputTextSize) * 0.7 * widthFactor(),
        color: theme.get(Theme.Input.inputTextColor),
        paddingLeft: theme.get(Theme.Button.btnBorderRadius),
        flex: 1,
    },
    readOnlyInputBkg: {
        backgroundColor: theme.get(Theme.Colors.bkgShade1),
        borderColor: theme.get(Theme.Colors.bkgShade1),
    },
    readOnlyInputFg: {
        color: theme.get(Theme.Colors.textColor),
    },
    icon: {
        marginRight: theme.get(Theme.Button.btnBorderRadius),
        height: theme.get(Theme.Input.inputTextSize) * 1,
        width: theme.get(Theme.Input.inputTextSize) * 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: theme.get(Theme.Input.inputTextSize) * 1.5,
    },
    multiline: nOfLines => ({
        height: theme.get(Theme.Input.inputTextSize) * 1.5 * nOfLines,
    }),
    lightBorder: {
        borderColor: theme.get(Theme.Colors.textColor),
    },
});
