import React, { useContext } from "react";
import { ThemedText } from "../../ThemedText";
import { getRenderedResource } from "unifyre-native-assets";
import { ThemeContext, Theme, ResourceContext } from "unifyre-react-helper";

/**
 * Search Item result
 *
 * @constructor
 */
export function Item({ result, resultIndex }) {
  let { id, name, balance } = result;

  const theme = useContext(ThemeContext);
  const styles = themedStyles(theme);
  const resources = useContext(ResourceContext);
  const profileIconSource = getRenderedResource(`Icon.User.Profile`);
  const arrowIconSource = getRenderedResource("Icon.Arrow.Right");
  const timeFormat = getRenderedResource("App.DateTime.Format");

  let itemBgColor;
  // Set list backgroundColor - must be alternate
  if (resultIndex % 2) itemBgColor = styles.itemBgGray;

  return (
    <div style={{ ...styles.mainContainer, ...itemBgColor }}>
      <div style={styles.profile}>
        <div style={styles.iconContainer}>
          <img style={styles.icon} src={profileIconSource} alt="icon" />
        </div>
        <div style={styles.userProfileContainer}>
          <ThemedText.H4 text={name} style={styles.nameLabel} />
          <ThemedText.SMALL text={balance} style={styles.userBalanceLabel} />
        </div>
      </div>
      <div style={styles.arrowIconContainer}>
        <img style={styles.arrowIcon} src={arrowIconSource} alt="icon" />
      </div>
    </div>
  );
}

const themedStyles = function(theme) {
  return {
    mainContainer: {
      width: "100%",
      paddingVertical: theme.get(Theme.List.listItemPaddingTop) * 0.5,
      paddingHorizontal: theme.get(Theme.Spaces.screenMarginVertical),
      backgroundColor: theme.get(Theme.Colors.bkgShade1),
      justifyContent: "flex-start",
      flexDirection: "row",
      alignItems: "flex-start"
    },
    itemBgGray: {
      backgroundColor: theme.get(Theme.Colors.bkgShade6)
    },
    profile: {
      flex: 5,
      flexDirection: "row"
    },
    arrowIconContainer: {
      position: "absolute",
      alignSelf: "center",
      justifyContent: "center",
      right: theme.get(Theme.Spaces.screenMarginVertical)
    },
    arrowIcon: {},
    userProfileContainer: {
      flex: 8,
      flexDirection: "column"
    },
    iconContainer: {
      flex: 1,
      position: "relative"
    },
    icon: {
      position: "absolute",
      width: 30,
      height: 30
    },
    nameLabel: {
      alignItems: "center",
      justifyContent: "center"
    },
    userBalanceLabel: {
      fontSize: theme.get(Theme.Text.h4Size) - 5,
      marginTop: theme.get(Theme.Icon.iconBorderRadius) * 2 * -1
    }
  };
};
