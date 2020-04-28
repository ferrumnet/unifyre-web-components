import { PropTypes } from "prop-types";
import React, { useContext } from "react";
import { ThemedText } from "../ThemedText";
import { ThemeContext, Theme } from "unifyre-react-helper";

/**
 * Input Switch
 *
 * @param       {String} [label]
 * @constructor
 */
export function InputSwitch({
  label,
  on,
  onChange,
  name,
  off,
  value,
  toggle,
  disabled,
  ...props
}) {
  const theme = useContext(ThemeContext);
  const styles = themedStyles(theme);
  const checked = value === on;

  function handleClick() {
    if (onChange) {
      onChange(checked ? off : on);
    }
  }

  return (
    <div style={styles.container}>
      <ThemedText.SMALL text={label} style={styles.label} />
      <label
        {...props}
        style={{ ...styles.container, ...styles.containerDisabled }}
        onClick={disabled ? null : handleClick}
      >
        <input type="hidden" name={name} value={value} />
        <span
          style={{ ...styles.track, ...(checked && styles.trackChecked) }}
        />
        <span
          style={{ ...(checked && styles.buttonChecked), ...styles.button }}
        />
      </label>
    </div>
  );
}

InputSwitch.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool.isRequired,
  toggle: PropTypes.func
};
InputSwitch.defaultProps = {
  value: 1,
  on: 1,
  off: 0,
  disabled: false
};

const themedStyles = function(theme) {
  return {
    container: {
      flexDirection: "row",
      verticalAlign: "middle",
      position: "relative",
      display: "inline-block",
      width: 24,
      height: 14,
      verticalAlign: "middle",
      cursor: "pointer",
      userSelect: "none"
    },
    containerDisabled: {
      opacity: 0.7,
      cursor: "pointer"
    },

    track: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 7,
      backgroundColor: "#cccccc"
    },

    trackChecked: {
      backgroundColor: "#5e72e4"
    },

    button: {
      position: "absolute",
      top: 2,
      bottom: 2,
      right: 11,
      left: 2,
      backgroundColor: "#fff",
      borderRadius: 9,
      transition: "all 100ms ease",
      flex: 1
    },

    buttonChecked: {
      right: 2,
      left: 11
    }
    // label: {
    //     flex: 3,
    //     display: 'block',
    //     overflow: 'hidden',
    //     cursor: 'pointer',
    //     border: '0 solid #ccc',
    //     borderRadius: '20px',
    //     margin: 0,
    // },
    // switch: {
    //     flex: 1,
    // },
    // inputCheckbox: {
    //     display: 'none',
    // },
  };
};
