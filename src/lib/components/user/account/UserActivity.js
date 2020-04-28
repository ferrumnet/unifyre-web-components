import moment from "moment";
import { PropTypes } from "prop-types";
import React, { useContext } from "react";
import { ThemedText } from "../../../components/ThemedText";
import { getRenderedResource } from "unifyre-native-assets";
import { ThemeContext, Theme, ResourceContext } from "unifyre-react-helper";

/**
 * User activity component
 *
 * @constructor
 */
export function UserActivity({ activity, activityIndex }) {
  let { id, type, coin, balance, sell, created_at } = activity;
  const theme = useContext(ThemeContext);
  const styles = themedStyles(theme);
  const resources = useContext(ResourceContext);
  const iconSource = getRenderedResource(`Icon.User.Activity.${type}`);
  const timeFormat = getRenderedResource("App.DateTime.Format");

  let balanceText = `${balance} ${coin}`;
  let sellLabelText = `${sell} ${coin}`;
  let iconBackgroundColorStyle =
    type === "Withdraw" ? styles.iconHighlight : styles.iconGray;
  let createdAtFromNow = moment(created_at, timeFormat).fromNow();
  let activityBgColor;
  if (activityIndex % 2) activityBgColor = styles.itemBgGray;

  let sellLabelElement;
  if (type === "Sell")
    sellLabelElement = (
      <ThemedText.SMALL text={sellLabelText} style={styles.sellLabel} />
    );

  return (
    <div style={{ ...styles.mainContainer, ...activityBgColor }}>
      <div style={styles.container}>
        <div style={styles.action}>
          <div style={[styles.iconContainer, iconBackgroundColorStyle]}>
            <img style={styles.icon} src={iconSource} alt="icon" />
          </div>

          <div style={styles.activityTypeContainer}>
            <ThemedText.P text={type} style={styles.typeLabel} />
            <ThemedText.SMALL
              text={createdAtFromNow}
              style={styles.timeLabel}
            />
          </div>
        </div>

        <div style={styles.details}>
          <ThemedText.H4 text={balanceText} style={styles.detailsLabel} />
          {sellLabelElement}
        </div>
      </div>
    </div>
  );
}

UserActivity.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    coin: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    sell: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired
  }),
  activityIndex: PropTypes.number.isRequired
};

const themedStyles = function(theme) {
  return {
    mainContainer: {
      width: "100%",
      paddingHorizontal: theme.get(Theme.Spaces.line),
      paddingVertical: theme.get(Theme.List.listItemPaddingTop) * 0.5,
      backgroundColor: theme.get(Theme.Colors.bkgShade1)
    },
    itemBgGray: {
      backgroundColor: theme.get(Theme.Colors.bkgShade6)
    },
    container: {
      flex: 1,
      flexDirection: "row"
    },
    action: {
      flex: 1,
      flexDirection: "row"
    },
    activityTypeContainer: {
      flex: 3,
      flexDirection: "column",
      paddingLeft: theme.get(Theme.Button.btnBorderRadius)
    },
    typeLabel: {},
    timeLabel: {
      marginTop: -5
    },
    details: {
      flex: 1,
      alignItems: "flex-end",
      justifyContent: "flex-start"
    },
    detailsLabel: {
      fontWeight: "bold"
    },
    sellLabel: {
      marginTop: -5
    },
    icon: {
      height: 17,
      width: 17
    },
    iconContainer: {
      borderRadius: theme.get(Theme.Button.btnBorderRadius),
      overflow: "hidden",
      borderWidth: 1,
      textAlign: "center",
      height: 25,
      width: 25,
      alignItems: "center",
      padding: 2,
      paddingTop: 3
    },
    iconGray: {
      backgroundColor: theme.get(Theme.Colors.bkgShade2),
      borderColor: theme.get(Theme.Colors.bkgShade2)
    },
    iconHighlight: {
      backgroundColor: theme.get(Theme.Colors.highlight),
      borderColor: theme.get(Theme.Colors.highlight)
    }
  };
};
