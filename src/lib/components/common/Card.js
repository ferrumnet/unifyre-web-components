import React, {useContext} from 'react';
import {ThemedText} from "../ThemedText";
import {getRenderedResource} from 'unifyre-native-assets';
import {ThemeContext, Theme, ResourceContext} from 'unifyre-react-helper';
import {PropTypes} from "prop-types";

/**
 * Card
 *
 * @param       {integer} id
 * @param       {string} image
 * @param       {string} title
 * @param       {string} description
 */
export function Card({data}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    const resources = useContext(ResourceContext);
    const logoSource = getRenderedResource('Icon.App.Big.Logo');
    let {id, image, title, description} = data;

    return (
            <div style={styles.container}>
                <div style={styles.iconContainer}>
                    <img
                        style={styles.icon}
                        src={logoSource}
                    />
                </div>
                <div style={styles.detailsContainer}>
                    <ThemedText.H3 text={title} style={styles.title} />
                    <ThemedText.H4 text={description} style={styles.description} />
                </div>
            </div>

    );
}

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
}

const themedStyles = function(theme){
    return {
        container: {
            backgroundColor: theme.get(Theme.Colors.bkgShade1),
            borderRadius: theme.get(Theme.Button.btnBorderRadius),
            borderBottomWidth: 2,
            borderBottomColor: theme.get(Theme.Colors.highlight),
            flexDirection: 'row',
            paddingVertical: theme.get(Theme.Spaces.line),
            paddingHorizontal: theme.get(Theme.Spaces.line),
        },
        iconContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: 30,
        },
        icon: {
            position: 'absolute',
            width: 30,
        },
        detailsContainer: {
            flex: 2,
            marginLeft: theme.get(Theme.Spaces.line) * 0.5,
        },
        title: {
    
        },
        description: {
            fontSize: theme.get(Theme.Text.pSize) * 0.5,
        }
    }
} 
