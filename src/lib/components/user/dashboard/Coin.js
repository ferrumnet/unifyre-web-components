import {PropTypes} from "prop-types";
import React, {useContext} from 'react';
import {ThemedText} from "../../ThemedText";
import {getRenderedResource} from 'unifyre-native-assets';
import {ThemeContext, Theme, ResourceContext} from 'unifyre-react-helper';

/**
 * Dashboard coin item
 * @param       {[type]}  coin
 * @param       {Boolean} noBorderBottom set to `true` if you want to remove border bottom
 * @constructor
 */
export function Coin({coin, noBorderBottom}) {
    let {id, name, amount, balance} = coin;

    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    const resources = useContext(ResourceContext);

    let coinAbbreviation = name.toUpperCase();
    let coinLogoSource = getRenderedResource(`Icon.Coin.${coinAbbreviation}.White`);
    let balanceText = `Pending ${balance} ${coinAbbreviation}`;
    const arrowIconSource = getRenderedResource('Icon.Arrow.Right');

    let borderBottomStyle;
    if (noBorderBottom)
        borderBottomStyle = styles.noBorderBottom;

    return (
        <div style={[styles.mainContainer, borderBottomStyle]}>
            <div style={styles.coinProfile}>
                <div style={styles.iconContainer}>
                    <img
                        style={styles.icon}
                        src={coinLogoSource}
                        alt='icon'
                    />
                </div>
                <div style={styles.coinNameContainer}>
                    <ThemedText.H3 text={name} />
                </div>
            </div>
            <div style={styles.coinData}>
                <ThemedText.H4 text={amount}
                    style={styles.amountLabel} />
                <ThemedText.SMALL text={balanceText}
                    style={styles.balanceLabel} />
            </div>
            <div style={styles.arrowIconContainer}>
                <img
                    src={arrowIconSource}
                    alt='arrowIcon'
                />
            </div>
        </div>

    );
}

Coin.propTypes = {
    coin: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        balance: PropTypes.string.isRequired,
    }),
    noBorderBottom: PropTypes.bool.isRequired,
}

const themedStyles =  function(theme){
    return {
        mainContainer: {
            paddingVertical: theme.get(Theme.Spaces.screenMarginVertical) * 0.5,
            alignItems: 'center',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: theme.get(Theme.Input.inputLabelColor),
            flexDirection: 'row',
        },
        itemBgGray: {
            backgroundColor: theme.get(Theme.Colors.bkgShade1),
        },
        coinProfile: {
            flex: 1,
            flexDirection: 'row',
        },
        coinData: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
            alignSelf: 'center',
            flexDirection: 'column',
            marginRight: theme.get(Theme.Spaces.screenMarginVertical),
        },
        coinNameContainer: {
            flex: 3,
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: theme.get(Theme.Button.btnBorderRadius),
        },
        iconContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 35,
            borderRadius: theme.get(Theme.Button.btnBorderRadius),
            overflow: 'hidden',
        },
        icon: {
            backgroundColor: theme.get(Theme.Input.inputBackground),
        },
        amountLabel: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        balanceLabel: {
            marginTop: (theme.get(Theme.Icon.iconBorderRadius) * 2) * -1,
        },
        arrowIconContainer: {
            position: 'absolute',
            alignSelf: 'center',
            justifyContent: 'center',
            right: 0,
        },
        noBorderBottom: {
            borderBottomWidth: 0,
        },
    }
};
