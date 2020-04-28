import {PropTypes} from "prop-types";
import React, {useContext} from 'react';
import {ThemedText} from "../../ThemedText";
import {ThemeContext, Theme} from 'unifyre-react-helper';
import {getRenderedResource} from 'unifyre-native-assets';

/**
 * Coin balance section
 *
 * @constructor
 */
export function CoinBalance({coin, balance, pending, coinLabel = '', withBorderBottom}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);

    let pendingText = `Pending ${pending} ${coin}`;
    let iconSource = getRenderedResource('Icon.Coin.BTC.White');
    let balanceText = `${balance} ${coin}`;
    let coinLabelText = 'YOUR BALANCE';

    if (coinLabel != '') {
        coinLabelText = coinLabel;
    }

    let withBorderBottomStyle;
    if (withBorderBottom !== undefined) {
        withBorderBottomStyle = styles.withBorderBottom;
    }

    return (
        <div style={{...styles.container, ...withBorderBottomStyle}}>
            <div style={styles.balanceContainer}>
                <div style={styles.iconContainer}>
                    <img
                        src={iconSource}
                        alt='icon' />
                </div>
                <div>
                    <div style={styles.balanceLabel}>
                        <ThemedText.SMALL text={coinLabelText} />
                        <ThemedText.H3 text={balanceText}
                            style={styles.balance} />
                    </div>
                </div>
            </div>
            <div style={styles.pendingContainer}>
                <ThemedText.SMALL text={pendingText} style={styles.pending} />
            </div>
        </div>
    );
}

CoinBalance.propTypes = {
    coin: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    pending: PropTypes.number.isRequired,
    coinLabel: PropTypes.string,
    withBorderBottom: PropTypes.bool,
}

const themedStyles = function(theme){
    return {
        container: {
            flexDirection: 'row',
            marginTop: theme.get(Theme.Spaces.line),
        },
        balanceContainer: {
            flex: 2,
            flexDirection: 'row',
        },
        pendingContainer: {
            flex: 1,
            justifyContent: 'center',
        },
        iconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.get(Theme.Colors.bkgShade7),
            borderRadius: theme.get(Theme.Button.btnBorderRadius),
            marginRight: theme.get(Theme.Button.btnBorderRadius),
            height: 30,
            width: 30,
        },
        balanceLabel: {
            flex: 1,
            flexDirection: 'column',
        },
        balance: {
            fontWeight: 'bold',
            marginTop: theme.get(Theme.Button.btnBorderRadius) * -1,
        },
        pending: {
            textAlign: 'right',
        },
        withBorderBottom: {
            borderBottomColor: theme.get(Theme.List.listItemBorderColor),
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingBottom: theme.get(Theme.Spaces.line),
            marginTop: 0,
        }
    }
};
