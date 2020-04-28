import {PropTypes} from "prop-types";
import React, {useContext} from 'react';
import {ThemedText} from "../ThemedText";
import {ThemeContext} from 'unifyre-react-helper';
import {getRenderedResource} from 'unifyre-native-assets';

/**
 * Header Label
 *
 * @constructor
 */
export function HeaderLabel({title, description}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    let arrowIconSource = getRenderedResource('Icon.Arrow.Right');

    return (
        <div style={styles.container}>
            <div style={styles.textContainer}>
                <ThemedText.P text={title}
                    style={styles.title} />
                <ThemedText.SMALL text={description}
                    style={styles.description} />
            </div>
            <div style={styles.iconContainer}>
                <img
                    style={styles.icon}
                    src={arrowIconSource}
                    alt='icon' />
            </div>
        </div>
    );
}

HeaderLabel.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

const themedStyles = function(theme){
    return {
        container: {
            flexDirection: 'row',
        },
        textContainer: {
            flex: 4,
        },
        iconContainer: {
            justifyContent: 'center',
            alignItems: 'flex-end',
            flex: 1,
        },
        icon: {
            height: 10,
        },
    }
}
