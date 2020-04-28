import {PropTypes} from "prop-types";
import React, {useContext} from 'react';
import {ThemedText} from '../ThemedText';
import {ThemeContext, Theme} from 'unifyre-react-helper';
import {getRenderedResource} from 'unifyre-native-assets';
import {PageTopSection} from "./PageTopSection";

/**
 * Page title component
 *
 * @constructor
 */


/**
 * Render header for titled text
 * @param  {string} title
 * @param  {object} styles
 * @return {JSX}
 */
function renderHeader(title, styles)
{
    return (
        <div style={styles.titleContainer}>
            <ThemedText.H2 text={title} style={styles.title} />
            <div style={{...styles.underline,  marginLeft: '46%' }} ></div>
        </div>
    );
}

/**
 * Render header logo
 *
 * @param  {string} source
 * @param  {object} styles
 * @return {JSX}
 */
function renderLogo(source, styles)
{
    return (
        <div style={{...styles.titleContainer, ...styles.logoContainer}}>
            <img
                style={styles.logo}
                src={source}
                alt='logo'
            />
        </div>
    );
}

export function PageTitle({title = '', children}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    const logoSource = getRenderedResource('App.Icon.Small');
    const header = title !== '' ? renderHeader(title, styles) : renderLogo(logoSource, styles);

    return (
            <PageTopSection >
                {header}
                {children}
            </PageTopSection >
    );
}

PageTitle.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

const themedStyles = function(theme){
    return {
        container: {
            width: '100%',
            backgroundColor: theme.get(Theme.Colors.bkgShade1),
            paddingBottom: theme.get(Theme.Spaces.gap),
            paddingLeft: theme.get(Theme.Spaces.screenMarginVertical),
            paddingRight: theme.get(Theme.Spaces.screenMarginVertical),
            marginBottom: theme.get(Theme.Spaces.screenMarginVertical),
            borderBottomLeftRadius: theme.get(Theme.Text.h2Size),
            borderBottomRightRadius: theme.get(Theme.Text.h2Size),
            zIndex: 999,
        },
        title: {
            textAlign: 'center',
        },
        titleContainer: {
            marginBottom: theme.get(Theme.Spaces.line),
        },
        underline: {
            backgroundColor: theme.get(Theme.Colors.highlight),
            height: 2,
            width: '8%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            left: '46%',
            top: -3,
            bottom: theme.get(Theme.Spaces.line),
        },
        logoContainer: {
            marginBottom: 0,
            alignItems: 'center',
        },
        logo:{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '20%',
        }
    }
};
