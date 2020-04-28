import {PropTypes} from "prop-types";
import React, {useContext} from 'react';
import {ThemedText} from "../ThemedText";
import {getRenderedResource} from 'unifyre-native-assets';
import {ThemeContext, Theme, ResourceContext} from 'unifyre-react-helper';

/**
 * List item component, item for `List` component
 *
 * @constructor
 */
export function ListItem({title, icon, itemIndex}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    const resources = useContext(ResourceContext);

    const iconSource = getRenderedResource(icon);
    const arrowIconSource = getRenderedResource('Icon.Arrow.Right');

    let styleBgColor;
    if (itemIndex % 2)
        styleBgColor = styles.itemBgGray;

    return (
        <div style={[styles.container, styleBgColor]}>
            <div style={styles.iconContainer}>
                <img
                    style={styles.icon}
                    resizeMode="center"
                    src={iconSource}
                    alt='icon'
                />
            </div>
            <div style={styles.labelContainer}>
                <ThemedText.P text={title} />
            </div>
            <div style={styles.arrowContainer}>
                <img
                    style={styles.arrowIcon}
                    resizeMode="center"
                    resizeMethod="resize"
                    src={arrowIconSource}
                    alt='icon'
                />
            </div>
        </div>
    );
}

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    itemIndex: PropTypes.number,
}

const iconWidthHeight = 30;

const themedStyles = function(theme){
    return {
        container: {
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: theme.get(Theme.Spaces.screenMarginVertical),
            paddingVertical: theme.get(Theme.List.listItemPaddingTop) * 0.5,
            backgroundColor: theme.get(Theme.Colors.bkgShade1),
        },
        iconContainer: {
            width: iconWidthHeight,
            height: iconWidthHeight,
            alignItems: 'center',
        },
        arrowContainer: {
            position: 'absolute',
            right: theme.get(Theme.Spaces.screenMarginVertical),
        },
        labelContainer: {
            marginLeft: theme.get(Theme.Button.btnBorderRadius),
        },
        icon: {
            width: iconWidthHeight,
            marginTop: (iconWidthHeight + 5) * -1,
        },
        arrowIcon: {
            height: 10,
        },
        itemBgGray: {
            backgroundColor: theme.get(Theme.Colors.bkgShade6),
        },
    }
};
