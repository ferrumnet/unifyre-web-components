import {PropTypes} from "prop-types";
import React, {useContext} from 'react';
import {ThemedText} from "../../ThemedText";
import {ThemedButton} from "../../../components/ThemedButton";
import {ThemeContext, Theme} from 'unifyre-react-helper';
import {getRenderedResource} from 'unifyre-native-assets';

/**
 * Coin deposit section
 *
 * @param {string} code QR code
 * @constructor
 */
export function CoinDeposit({code}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    let qrSource = getRenderedResource('Image.QR.Sample');
    let copyIconSource = getRenderedResource('Icon.Copy');

    return (
        <div style={styles.container}>
            <img
                src={qrSource}
                alt='qrcode' />
            <div style={styles.codeContainer}>
                <ThemedText.P text={code}
                    style={styles.qrLabel} />
                <img 
                    style={styles.copyIcon}
                    src={copyIconSource}
                    alt='icon' />
            </div>
            <div style={styles.footer}>
                <div style={styles.bankDepositBtnContainer}>
                    <ThemedButton text={'Bank Deposit'} isSmall
                        type={'inverse'} />
                </div>
                <div style={{flex: 1}}>
                    <ThemedButton text={'USSD Deposit'}
                        isSmall
                        type={'inverse'} />
                </div>
            </div>
        </div>
    );
}

CoinDeposit.propTypes = {
    code: PropTypes.string.isRequired,
}

const themedStyles = function(theme){
    return {
        container: {
            backgroundColor: theme.get(Theme.Colors.bkgShade5),
            paddingVertical: theme.get(Theme.Spaces.screenMarginVertical),
            paddingHorizontal: theme.get(Theme.Spaces.screenMarginVertical),
            borderRadius: theme.get(Theme.Button.btnBorderRadius),
            marginTop: theme.get(Theme.Spaces.line),
            marginHorizontal: theme.get(Theme.Spaces.screenMarginVertical),
            textAlign: 'center',
            alignItems: 'center',
        },
        qrLabel: {
            color: theme.get(Theme.Text.infoColor),
        },
        bankDepositBtnContainer: {
            flex: 1,
            marginRight: theme.get(Theme.Spaces.screenMarginVertical)
        },
        footer: {
            flexDirection: 'row',
        },
        codeContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        copyIcon: {
    
        },
    }
};
