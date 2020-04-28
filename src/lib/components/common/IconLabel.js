import { PropTypes } from "prop-types";
import React, { useContext } from "react";
import { getRenderedResource } from "unifyre-native-assets";
import { ThemedText } from "../ThemedText";
import { ThemeContext, Theme, ResourceContext } from "unifyre-react-helper";

/**
 * Icon with label - component
 * @param       {string} label
 * @param       {string} icon
 * @param       {object} labelStyles
 * @param       {string} iconThumbnail
 * @param       {node} subLabel
 * @constructor
 */
export function IconLabel({
  label,
  icon,
  labelStyles,
  iconThumbnail,
  subLabel
}) {
  const theme = useContext(ThemeContext);
  const styles = themedStyles(theme);
  const resources = useContext(ResourceContext);
  const iconSource = getRenderedResource(icon);

  let iconThumbnailStyle, iconThumbnailImageStyle;
  if (iconThumbnail !== undefined) {
    iconThumbnailStyle = styles.iconThumbnail;
    iconThumbnailImageStyle = styles.iconThumbnailImage;
  }
  let subLabelElement;
  if (subLabel !== undefined)
    subLabelElement = (
      <ThemedText.H4 text={subLabel} style={styles.subLabelStlye} />
    );

  return (
    <div style={styles.container}>
      <div style={{ ...styles.iconContainer, ...iconThumbnailStyle }}>
        <img
          style={{ ...styles.icon, ...iconThumbnailImageStyle }}
          src={iconSource}
        />
      </div>
      <div style={styles.labelContainer}>
        <ThemedText.H3 text={label} style={[styles.labelStlye, labelStyles]} />
        {subLabelElement}
      </div>
    </div>
  );
}

IconLabel.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  labelStyles: PropTypes.object
};

const themedStyles = function(theme) {
  return {
    container: {
      alignItems: "center",
      flex: 1,
      flexDirection: "row"
      // marginVertical: theme.get(Theme.Spaces.line),
    },
    iconContainer: {
      marginLeft: 0,
      alignItems: "center",
      width: 40
    },
    labelContainer: {
      flexDirection: "column"
    },
    icon: {
      width: 40
    },
    labelStlye: {},
    subLabelStlye: {
      color: theme.get(Theme.Colors.textColor),
      marginTop: theme.get(Theme.Button.btnBorderRadius) * -1
    },
    iconThumbnail: {
      width: 40,
      height: 40,
      borderColor: theme.get(Theme.Icon.iconColor),
      backgroundColor: theme.get(Theme.Icon.iconColor),
      borderRadius: theme.get(Theme.Button.btnBorderRadius),
      // borderWidth: StyleSheet.hairlineWidth,
      alignSelf: "center",
      marginRight: theme.get(Theme.Button.btnBorderRadius)
    },
    iconThumbnailImage: {
      marginTop: theme.get(Theme.Button.btnBorderRadius) * -1
    }
  };
};
