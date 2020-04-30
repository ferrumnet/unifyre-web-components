import React, { useContext, Component } from 'react';
import { ThemeContext, Theme, ResourceContext } from 'unifyre-react-helper';
import { PropTypes } from 'prop-types';
import { getRenderedResource } from 'unifyre-native-assets';
import { Icon } from '@iconify/react';
import mdArrowDropdown from '@iconify/icons-ion/md-arrow-dropdown';
import moment from 'moment';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var ThemedText = function () {
  function ThemedText() {
    classCallCheck(this, ThemedText);
  }

  createClass(ThemedText, null, [{
    key: "H1",
    value: function H1(_ref) {
      var text = _ref.text,
          style = _ref.style;

      return ThemedText.text({ text: text, style: style }, function (s) {
        return s.h1;
      });
    }
  }, {
    key: "H2",
    value: function H2(_ref2) {
      var text = _ref2.text,
          style = _ref2.style;

      return ThemedText.text({ text: text, style: style }, function (s) {
        return s.h2;
      });
    }
  }, {
    key: "H3",
    value: function H3(_ref3) {
      var text = _ref3.text,
          style = _ref3.style;

      return ThemedText.text({ text: text, style: style }, function (s) {
        return s.h3;
      });
    }
  }, {
    key: "H4",
    value: function H4(_ref4) {
      var text = _ref4.text,
          style = _ref4.style;

      return ThemedText.text({ text: text, style: style }, function (s) {
        return s.h4;
      });
    }
  }, {
    key: "P",
    value: function P(_ref5) {
      var text = _ref5.text,
          style = _ref5.style;

      return ThemedText.text({ text: text, style: style }, function (s) {
        return s.p;
      });
    }
  }, {
    key: "SMALL",
    value: function SMALL(_ref6) {
      var text = _ref6.text,
          style = _ref6.style;

      return ThemedText.text({ text: text, style: style }, function (s) {
        return s.small;
      });
    }
  }, {
    key: "text",
    value: function text(_ref7, styleSelector) {
      var _text = _ref7.text,
          _ref7$style = _ref7.style,
          style = _ref7$style === undefined ? {} : _ref7$style;

      var theme = useContext(ThemeContext);
      var styles = themedStyles(theme);
      console.log(style, 'Style');
      // return <div style={...styles.commonText, styleSelector(styles), style || {}}>{text}</div>;
      // console.log(styleSelector(styles), 'styleSelector(styles)')
      return React.createElement(
        "div",
        { style: _extends({}, styles.commonText, styleSelector(styles), style) },
        _text
      );
    }
  }]);
  return ThemedText;
}();


var themedStyles = function themedStyles(theme) {
  return {
    commonText: {
      fontFamily: theme.get(Theme.Font.main),
      // color: theme.get(Theme.Colors.textColor),
      color: "pink"
    },
    h1: {
      fontSize: theme.get(Theme.Text.h1Size)
    },
    h2: {
      fontSize: theme.get(Theme.Text.h2Size)
    },
    h3: {
      fontSize: theme.get(Theme.Text.h3Size)
    },
    h4: {
      fontSize: theme.get(Theme.Text.h4Size)
    },
    p: {
      fontSize: theme.get(Theme.Text.h2Size) * 0.7
    },
    small: {
      fontSize: theme.get(Theme.Text.h3Size) * 0.7
    }
  };
};

function Gap(_ref) {
  var size = _ref.size;

  var theme = useContext(ThemeContext);
  var styles = themedStyles$1(theme);
  return React.createElement(
    "div",
    null,
    React.createElement("p", {
      style: _extends({}, styles.gap, size === "small" ? styles.smallGap : {})
    })
  );
}

var themedStyles$1 = function themedStyles(theme) {
  return {
    gap: {
      width: "100%",
      height: theme.get(Theme.Spaces.gap)
    },
    smallGap: {
      height: theme.get(Theme.Spaces.gap) / 2
    }
  };
};

/**
 * Theme App Button component
 *
 * @param       {string}  text
 * @param       {string}  type
 * @param       {Boolean}  disabled
 * @param       {Boolean} isSmall              add this attribute to make button smaller
 * @param       {callback}  onPress
 * @param       {String}  [position='normal'}]
 * @constructor
 */
function ThemedButton(_ref) {
    var text = _ref.text,
        type = _ref.type,
        disabled = _ref.disabled,
        isSmall = _ref.isSmall,
        onPress = _ref.onPress,
        _ref$position = _ref.position,
        position = _ref$position === undefined ? 'normal' : _ref$position;

    var theme = useContext(ThemeContext);
    var styles = themedStyles$2(theme);
    var bkgStyle = void 0,
        textStyle = void 0,
        buttonPositionStyle = void 0;

    // position changer
    if (position === 'sticky-bottom') buttonPositionStyle = styles.stickyBottom;else buttonPositionStyle = styles.common;

    // Button size mutator
    var buttonSizeStyle = void 0,
        textSizeStyle = void 0;
    if (isSmall !== undefined) {
        buttonSizeStyle = styles.smallButton;
        textSizeStyle = styles.smallText;
    }

    switch (type) {
        default:
        case 'primary':
            bkgStyle = styles.primary;
            textStyle = styles.textPrimary;
            break;
        case 'highlight':
            bkgStyle = styles.highlight;
            textStyle = styles.textHighlight;
            break;
        case 'inverse':
            bkgStyle = styles.inverse;
            textStyle = styles.textInverse;
            break;
        case 'notification':
            bkgStyle = styles.primary;
            textStyle = styles.textInverse;
            textSizeStyle = styles.smallText;
            buttonPositionStyle = styles.notification;
            break;
    }

    return React.createElement(
        'button',
        { onClick: onPress, disabled: disabled, style: _extends({}, bkgStyle, buttonPositionStyle, buttonSizeStyle) },
        React.createElement(ThemedText.H4, { text: text, style: _extends({}, textStyle, textSizeStyle) })
    );
}

ThemedButton.propTypes = {
    type: PropTypes.oneOf(['primary', 'highlight', 'inverse', 'notification']),
    text: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool
};

var themedStyles$2 = function themedStyles(theme) {
    var _stickyBottom;

    return {
        common: {
            width: '100%',
            borderRadius: theme.get(Theme.Button.btnBorderRadius),
            paddingVertical: theme.get(Theme.Button.btnPadding) * 0.5,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            height: '35px'
        },
        smallButton: {
            paddingVertical: theme.get(Theme.Button.btnPadding) / 4
        },
        smallText: {
            fontSize: theme.get(Theme.Text.h2Size) * 0.5

        },
        notification: {
            width: '100%',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: theme.get(Theme.Button.btnBorderRadius),
            borderBottomLeftRadius: theme.get(Theme.Button.btnBorderRadius),
            paddingVertical: theme.get(Theme.Spaces.gap) / 3,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.get(Theme.Button.btnHighlight),
            cursor: 'pointer'
        },
        stickyBottom: (_stickyBottom = {
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: theme.get(Theme.Button.btnPadding),
            left: theme.get(Theme.Spaces.screenMarginVertical),
            width: '100%',
            borderRadius: theme.get(Theme.Button.btnBorderRadius)
        }, defineProperty(_stickyBottom, 'bottom', 0), defineProperty(_stickyBottom, 'left', 0), defineProperty(_stickyBottom, 'right', 0), defineProperty(_stickyBottom, 'justifyContent', 'center'), defineProperty(_stickyBottom, 'alignItems', 'center'), _stickyBottom),
        primary: {
            backgroundColor: theme.get(Theme.Button.btnPrimary)
            // outline: 'none', 
        },
        highlight: {
            backgroundColor: theme.get(Theme.Button.btnHighlight)
        },
        inverse: {
            backgroundColor: theme.get(Theme.Button.inverseBtnPrimary),
            outline: 'none'
        },
        textPrimary: {
            color: theme.get(Theme.Button.btnPrimaryTextColor)
        },
        textHighlight: {
            color: theme.get(Theme.Button.btnHighlightTextColor)
        },
        textInverse: {
            color: theme.get(Theme.Button.inverseBtnPrimaryTextColor)
        }

    };
};

function ThemedLink(_ref) {
    var text = _ref.text,
        onPress = _ref.onPress,
        disabled = _ref.disabled;

    var theme = useContext(ThemeContext);
    var styles = themedStyles$3(theme);
    return React.createElement(
        'button',
        { onPress: onPress },
        React.createElement(ThemedText.H4, { text: text, style: styles.link })
    );
}

ThemedLink.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool
};

var themedStyles$3 = function themedStyles(theme) {
    return {
        link: {
            color: theme.get(Theme.Text.linkColor)
        }
    };
};

/**
 * Get big logo component
 *
 * @constructor
 */
function BigLogo() {
  var theme = useContext(ThemeContext);
  var styles = themedStyles$4();
  var resources = useContext(ResourceContext);
  var logoSource = getRenderedResource("App.Icon.Big");

  return React.createElement(
    "div",
    { style: styles.container },
    React.createElement("img", { style: styles.logo, src: logoSource, alt: "big logo" })
  );
}

var themedStyles$4 = function themedStyles(theme) {
  return {
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: "100%"
    },
    logo: {
      position: "absolute"
    }
  };
};

/**
 * Card
 *
 * @param       {integer} id
 * @param       {string} image
 * @param       {string} title
 * @param       {string} description
 */
function Card(_ref) {
    var data = _ref.data;

    var theme = useContext(ThemeContext);
    var styles = themedStyles$5(theme);
    var resources = useContext(ResourceContext);
    var logoSource = getRenderedResource('Icon.App.Big.Logo');
    var id = data.id,
        image = data.image,
        title = data.title,
        description = data.description;


    return React.createElement(
        'div',
        { style: styles.container },
        React.createElement(
            'div',
            { style: styles.iconContainer },
            React.createElement('img', {
                style: styles.icon,
                src: logoSource
            })
        ),
        React.createElement(
            'div',
            { style: styles.detailsContainer },
            React.createElement(ThemedText.H3, { text: title, style: styles.title }),
            React.createElement(ThemedText.H4, { text: description, style: styles.description })
        )
    );
}

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};

var themedStyles$5 = function themedStyles(theme) {
    return {
        container: {
            backgroundColor: theme.get(Theme.Colors.bkgShade1),
            borderRadius: theme.get(Theme.Button.btnBorderRadius),
            borderBottomWidth: 2,
            borderBottomColor: theme.get(Theme.Colors.highlight),
            flexDirection: 'row',
            paddingVertical: theme.get(Theme.Spaces.line),
            paddingHorizontal: theme.get(Theme.Spaces.line)
        },
        iconContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: 30
        },
        icon: {
            position: 'absolute',
            width: 30
        },
        detailsContainer: {
            flex: 2,
            marginLeft: theme.get(Theme.Spaces.line) * 0.5
        },
        title: {},
        description: {
            fontSize: theme.get(Theme.Text.pSize) * 0.5
        }
    };
};

/**
 * CardSlider component -
 * provide card data or assign/create children to be used as cards
 *
 */

var CardSilder = function (_Component) {
  inherits(CardSilder, _Component);

  function CardSilder(props) {
    classCallCheck(this, CardSilder);

    var _this = possibleConstructorReturn(this, (CardSilder.__proto__ || Object.getPrototypeOf(CardSilder)).call(this, props));

    var numOfCards = 0;
    var hasChildren = false;

    if (_this.props.cards) {
      numOfCards = _this.props.cards.length;
    } else {
      numOfCards = _this.props.children.length;
      hasChildren = true;
    }

    _this.state = {
      numOfCards: numOfCards,
      position: 1,
      hasChildren: hasChildren
    };

    _this.scroll = _this.scroll.bind(_this);
    return _this;
  }

  createClass(CardSilder, [{
    key: "render",
    value: function render() {
      var theme = this.context;
      var styles = themedStyles$6(theme);
      var cardElements = void 0;

      if (this.state.hasChildren) {
        // Use children
        cardElements = this.props.children.map(function (item, index) {
          return React.createElement(
            "div",
            { style: styles.card, key: index },
            item
          );
        });
      } else {
        cardElements = this.props.cards.map(function (card, index) {
          return React.createElement(
            "div",
            { style: styles.card, key: index },
            React.createElement(Card, { key: index, data: card })
          );
        });
      }

      return React.createElement(
        "div",
        _extends({}, this.props, { style: _extends({}, styles.scroll, this.props.style) }),
        cardElements
      );
    }
  }]);
  return CardSilder;
}(Component);

CardSilder.contextType = ThemeContext;


CardSilder.propTypes = {
  cards: PropTypes.array
};

var themedStyles$6 = function themedStyles(theme) {
  return {
    card: {
      width: theme.get(Theme.Spaces.gap) * 4,
      marginLeft: theme.get(Theme.Spaces.line)
    }
  };
};

/**
 * Header Label
 *
 * @constructor
 */
function HeaderLabel(_ref) {
    var title = _ref.title,
        description = _ref.description;

    var theme = useContext(ThemeContext);
    var styles = themedStyles$7();
    var arrowIconSource = getRenderedResource('Icon.Arrow.Right');

    return React.createElement(
        "div",
        { style: styles.container },
        React.createElement(
            "div",
            { style: styles.textContainer },
            React.createElement(ThemedText.P, { text: title,
                style: styles.title }),
            React.createElement(ThemedText.SMALL, { text: description,
                style: styles.description })
        ),
        React.createElement(
            "div",
            { style: styles.iconContainer },
            React.createElement("img", {
                style: styles.icon,
                src: arrowIconSource,
                alt: "icon" })
        )
    );
}

HeaderLabel.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

var themedStyles$7 = function themedStyles(theme) {
    return {
        container: {
            flexDirection: 'row'
        },
        textContainer: {
            flex: 4
        },
        iconContainer: {
            justifyContent: 'center',
            alignItems: 'flex-end',
            flex: 1
        },
        icon: {
            height: 10
        }
    };
};

/**
 * Icon with label - component
 * @param       {string} label
 * @param       {string} icon
 * @param       {object} labelStyles
 * @param       {string} iconThumbnail
 * @param       {node} subLabel
 * @constructor
 */
function IconLabel(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      labelStyles = _ref.labelStyles,
      iconThumbnail = _ref.iconThumbnail,
      subLabel = _ref.subLabel;

  var theme = useContext(ThemeContext);
  var styles = themedStyles$8(theme);
  var resources = useContext(ResourceContext);
  var iconSource = getRenderedResource(icon);

  var iconThumbnailStyle = void 0,
      iconThumbnailImageStyle = void 0;
  if (iconThumbnail !== undefined) {
    iconThumbnailStyle = styles.iconThumbnail;
    iconThumbnailImageStyle = styles.iconThumbnailImage;
  }
  var subLabelElement = void 0;
  if (subLabel !== undefined) subLabelElement = React.createElement(ThemedText.H4, { text: subLabel, style: styles.subLabelStlye });

  return React.createElement(
    "div",
    { style: styles.container },
    React.createElement(
      "div",
      { style: _extends({}, styles.iconContainer, iconThumbnailStyle) },
      React.createElement("img", {
        style: _extends({}, styles.icon, iconThumbnailImageStyle),
        src: iconSource
      })
    ),
    React.createElement(
      "div",
      { style: styles.labelContainer },
      React.createElement(ThemedText.H3, { text: label, style: [styles.labelStlye, labelStyles] }),
      subLabelElement
    )
  );
}

IconLabel.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  labelStyles: PropTypes.object
};

var themedStyles$8 = function themedStyles(theme) {
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

/**
 * InputGroupAddon components - used to create inputs with icon on the box
 *
 * @param       {String} [placeholder=''}]
 * @param       {String} [icon=''}]
 * @constructor
 */
function InputGroupAddon(_ref) {
    var _ref$placeholder = _ref.placeholder,
        placeholder = _ref$placeholder === undefined ? '' : _ref$placeholder,
        _ref$icon = _ref.icon,
        icon = _ref$icon === undefined ? '' : _ref$icon,
        _ref$type = _ref.type,
        type = _ref$type === undefined ? 'text' : _ref$type,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? '' : _ref$value,
        toggleIcon = _ref.toggleIcon,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === undefined ? false : _ref$disabled,
        _ref$isPassword = _ref.isPassword,
        onChange = _ref.onChange,
        props = objectWithoutProperties(_ref, ['placeholder', 'icon', 'type', 'value', 'toggleIcon', 'disabled', 'isPassword', 'onChange']);


    var theme = useContext(ThemeContext);
    var styles = themedStyles$9(theme);

    var iconElement = void 0;

    value = (value || '').toString();

    if (icon !== '') {
        // With icon
        var iconSource = getRenderedResource(icon);
        iconElement = React.createElement(
            'button',
            { onClick: toggleIcon, style: styles.iconContainer },
            React.createElement('img', { style: styles.icon,
                src: iconSource,
                alt: 'icon' })
        );
    }
    return React.createElement(
        'div',
        { style: styles.inputContainer },
        React.createElement('input', _extends({
            type: type,
            style: styles.input,
            placeholder: placeholder,
            maxLength: 40,
            defaultValue: value,
            disabled: disabled,
            onChange: onChange
        }, props)),
        iconElement
    );
}

InputGroupAddon.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    toggleIcon: PropTypes.func
};

var themedStyles$9 = function themedStyles(theme) {
    return {
        inputContainer: {
            borderRadius: theme.get(Theme.Button.btnBorderRadius),
            borderColor: theme.get(Theme.Input.inputBackground),
            borderWidth: 9,
            borderStyle: 'solid',
            backgroundColor: theme.get(Theme.Input.inputBackground),
            flexDirection: 'row',
            borderBottomWidth: 5,
            width: '60%',
            margin: ' 2%',
            marginLeft: '20%',
            height: theme.get(Theme.Input.inputTextSize) * 1.5
            // paddingLeft: theme.get(Theme.Spaces.screenMarginHorizontal),
            // paddingRight: theme.get(Theme.Spaces.screenMarginHorizontal),
        },
        input: {
            backgroundColor: theme.get(Theme.Input.inputBackground),
            fontSize: theme.get(Theme.Input.inputTextSize) * 0.5,
            color: theme.get(Theme.Input.inputTextColor),
            paddingLeft: theme.get(Theme.Button.btnBorderRadius),
            flex: 1,
            display: 'inline-block',
            border: 'none',
            outline: 'none',
            width: '40%',
            padding: '10px 10px',
            textAlign: 'center'
        },
        icon: {
            marginLeft: '70px',
            height: theme.get(Theme.Text.h2Size) * 0.5,
            width: theme.get(Theme.Text.h2Size) * 0.5,
            justifyContent: 'center',
            alignSelf: 'center',
            marginRight: 'auto',
            float: 'left',
            cursor: 'pointer'
        },
        iconContainer: {
            justifyContent: 'center',
            marginTop: 2,
            backgroundColor: theme.get(Theme.Input.inputBackground),
            border: 'none',
            outline: 'none'
        }
    };
};

/**
 * InputSearch components
 * @param       {[type]} open [description]
 * @constructor
 */
function InputSearch(_ref) {
  var open = _ref.open;

  var theme = useContext(ThemeContext);
  var styles = themedStyles$a(theme);

  var searchIconSearch = getRenderedResource("Icon.Search");
  var iconDropDownStyle = {
    size: theme.get(Theme.Text.h2Size),
    color: theme.get(Theme.Colors.bkgShade3)
  };

  return React.createElement(
    "div",
    { style: styles.inputContainer },
    React.createElement("img", { style: styles.icon, source: searchIconSearch }),
    React.createElement("input", { type: "text", style: styles.input, maxlength: "40" }),
    React.createElement(
      "div",
      { style: styles.dropdownContainer },
      React.createElement(Icon, {
        icon: mdArrowDropdown,
        size: iconDropDownStyle.size,
        color: iconDropDownStyle.color
      })
    )
  );
}

InputSearch.propTypes = {
  open: PropTypes.func
};

var themedStyles$a = function themedStyles(theme) {
  return {
    inputContainer: {
      borderRadius: theme.get(Theme.Button.btnBorderRadius),
      borderColor: theme.get(Theme.Input.inputBackground),
      borderWidth: 1,
      borderStyle: "solid",
      backgroundColor: theme.get(Theme.Input.inputBackground),
      flexDirection: "row",
      borderBottomWidth: 1,
      paddingHorizontal: theme.get(Theme.Button.btnBorderRadius)
    },
    input: {
      backgroundColor: theme.get(Theme.Input.inputBackground),
      fontSize: theme.get(Theme.Input.inputTextSize) * 0.5,
      color: theme.get(Theme.Colors.textColor),
      paddingLeft: theme.get(Theme.Button.btnBorderRadius),
      flex: 1
    },
    icon: {
      height: theme.get(Theme.Text.h3Size),
      width: theme.get(Theme.Text.h3Size),
      justifyContent: "center",
      alignSelf: "center"
    },
    dropdownContainer: {
      alignItems: "center",
      marginTop: 3
    }
  };
};

/**
 * Input Switch
 *
 * @param       {String} [label]
 * @constructor
 */
function InputSwitch(_ref) {
  var label = _ref.label,
      on = _ref.on,
      onChange = _ref.onChange,
      name = _ref.name,
      off = _ref.off,
      value = _ref.value,
      toggle = _ref.toggle,
      disabled = _ref.disabled,
      props = objectWithoutProperties(_ref, ["label", "on", "onChange", "name", "off", "value", "toggle", "disabled"]);

  var theme = useContext(ThemeContext);
  var styles = themedStyles$b();
  var checked = value === on;

  function handleClick() {
    if (onChange) {
      onChange(checked ? off : on);
    }
  }

  return React.createElement(
    "div",
    { style: styles.container },
    React.createElement(ThemedText.SMALL, { text: label, style: styles.label }),
    React.createElement(
      "label",
      _extends({}, props, {
        style: _extends({}, styles.container, styles.containerDisabled),
        onClick: disabled ? null : handleClick
      }),
      React.createElement("input", { type: "hidden", name: name, value: value }),
      React.createElement("span", {
        style: _extends({}, styles.track, checked && styles.trackChecked)
      }),
      React.createElement("span", {
        style: _extends({}, checked && styles.buttonChecked, styles.button)
      })
    )
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

var themedStyles$b = function themedStyles(theme) {
  var _container;

  return {
    container: (_container = {
      flexDirection: "row",
      verticalAlign: "middle",
      position: "relative",
      display: "inline-block",
      width: 24,
      height: 14
    }, defineProperty(_container, "verticalAlign", "middle"), defineProperty(_container, "cursor", "pointer"), defineProperty(_container, "userSelect", "none"), _container),
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
    } };
};

/**
 * Single row layout - container
 * @param       {object} children
 * @constructor
 */
function Row(_ref) {
    var withPadding = _ref.withPadding,
        gapMarginTop = _ref.gapMarginTop,
        children = _ref.children,
        noMarginTop = _ref.noMarginTop;

    var theme = useContext(ThemeContext);
    var styles = themedStyles$c(theme);
    var withPaddingStyle = void 0,
        withGapMarginTop = void 0,
        noMarginTopStyle = void 0;

    if (withPadding !== undefined) {
        withPaddingStyle = styles.withPadding;
    }

    if (noMarginTop !== undefined) {
        noMarginTopStyle = styles.noMarginTop;
    }

    if (gapMarginTop !== undefined) {
        withGapMarginTop = styles.gapMarginTop;
    }

    return React.createElement(
        'div',
        { style: _extends({}, styles.row, withPaddingStyle, withGapMarginTop, noMarginTopStyle) },
        children
    );
}

Row.propTypes = {
    children: PropTypes.node

    /**
     * Sticky bottom container
     *
     * @param       {object} children
     * @constructor
     */
};function StickyBottom(_ref2) {
    var children = _ref2.children;

    var theme = useContext(ThemeContext);
    var styles = themedStyles$c(theme);

    return React.createElement(
        'div',
        { style: styles.stickyBottom },
        children
    );
}

StickyBottom.propTypes = {
    children: PropTypes.node
};

var themedStyles$c = function themedStyles(theme) {
    return {
        row: {
            width: '100%',
            marginTop: theme.get(Theme.Spaces.line)
        },
        withPadding: {
            paddingLeft: theme.get(Theme.Spaces.screenMarginVertical),
            paddingRight: theme.get(Theme.Spaces.screenMarginVertical)
        },
        stickyBottom: {
            position: 'absolute',
            bottom: theme.get(Theme.Button.btnPadding),
            left: 0,
            right: 0,
            width: '100%',
            color: theme.get(Theme.Colors.textColor)
        },
        gapMarginTop: {
            marginTop: theme.get(Theme.Spaces.gap)
        },
        noMarginTop: {
            marginTop: 0
        }
    };
};

/**
 * List item component, item for `List` component
 *
 * @constructor
 */
function ListItem(_ref) {
    var title = _ref.title,
        icon = _ref.icon,
        itemIndex = _ref.itemIndex;

    var theme = useContext(ThemeContext);
    var styles = themedStyles$d(theme);
    var resources = useContext(ResourceContext);

    var iconSource = getRenderedResource(icon);
    var arrowIconSource = getRenderedResource('Icon.Arrow.Right');

    var styleBgColor = void 0;
    if (itemIndex % 2) styleBgColor = styles.itemBgGray;

    return React.createElement(
        "div",
        { style: [styles.container, styleBgColor] },
        React.createElement(
            "div",
            { style: styles.iconContainer },
            React.createElement("img", {
                style: styles.icon,
                resizeMode: "center",
                src: iconSource,
                alt: "icon"
            })
        ),
        React.createElement(
            "div",
            { style: styles.labelContainer },
            React.createElement(ThemedText.P, { text: title })
        ),
        React.createElement(
            "div",
            { style: styles.arrowContainer },
            React.createElement("img", {
                style: styles.arrowIcon,
                resizeMode: "center",
                resizeMethod: "resize",
                src: arrowIconSource,
                alt: "icon"
            })
        )
    );
}

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    itemIndex: PropTypes.number
};

var iconWidthHeight = 30;

var themedStyles$d = function themedStyles(theme) {
    return {
        container: {
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: theme.get(Theme.Spaces.screenMarginVertical),
            paddingVertical: theme.get(Theme.List.listItemPaddingTop) * 0.5,
            backgroundColor: theme.get(Theme.Colors.bkgShade1)
        },
        iconContainer: {
            width: iconWidthHeight,
            height: iconWidthHeight,
            alignItems: 'center'
        },
        arrowContainer: {
            position: 'absolute',
            right: theme.get(Theme.Spaces.screenMarginVertical)
        },
        labelContainer: {
            marginLeft: theme.get(Theme.Button.btnBorderRadius)
        },
        icon: {
            width: iconWidthHeight,
            marginTop: (iconWidthHeight + 5) * -1
        },
        arrowIcon: {
            height: 10
        },
        itemBgGray: {
            backgroundColor: theme.get(Theme.Colors.bkgShade6)
        }
    };
};

/**
 * List component
 * @param       {string} title
 * @param       {object} items
 * @constructor
 */
function List(_ref) {
  var title = _ref.title,
      items = _ref.items;

  var theme = useContext(ThemeContext);
  var styles = themedStyles$e(theme);
  var itemsElement = items.map(function (_ref2, index) {
    var title = _ref2.title,
        icon = _ref2.icon;
    return React.createElement(ListItem, { key: index, itemIndex: index, title: title, icon: icon });
  });

  return React.createElement(
    "div",
    { style: styles.container },
    React.createElement(ThemedText.H4, { text: title, style: styles.listHeaderTitle }),
    React.createElement(
      "div",
      { style: styles.listContainer },
      itemsElement
    )
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string
};

var themedStyles$e = function themedStyles(theme) {
  return {
    container: {
      marginBottom: theme.get(Theme.Spaces.line)
    },
    listHeaderTitle: {
      marginLeft: theme.get(Theme.Spaces.screenMarginVertical),
      marginBottom: theme.get(Theme.Spaces.line) * 0.5
    },
    listContainer: {
      width: "100%"
    }
  };
};

/**
 * Get app logo - will be modified soon to be used widely
 *
 * @constructor
 */
function Logo() {
  var theme = useContext(ThemeContext);
  var styles = themedStyles$f();
  var logoSource = getRenderedResource("App.Icon.Small");

  return React.createElement(
    "div",
    { style: { alignItems: "center" } },
    React.createElement("img", {
      style: styles.logo,
      resizeMode: "contain",
      resizeMethod: "resize",
      src: logoSource,
      alt: "logo"
    })
  );
}

var themedStyles$f = function themedStyles(theme) {
  return {
    logo: {
      height: 60
    }
  };
};

/**
 * Notification component to be used as alert box
 *
 * @extends Component
 */

var Notification = function (_Component) {
    inherits(Notification, _Component);

    function Notification(props) {
        classCallCheck(this, Notification);

        var _this = possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));

        _this.state = {
            isShow: false,
            title: _this.props.title,
            message: _this.props.message
        };
        return _this;
    }

    createClass(Notification, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ isShow: nextProps.isShow });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                message = _state.message,
                title = _state.title,
                isShow = _state.isShow;

            var theme = this.context;
            var styles = themedStyles$g(theme);

            if (!isShow) {
                return null;
            }

            return React.createElement(
                'div',
                { style: styles.container },
                React.createElement(
                    'div',
                    { style: styles.modal },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(ThemedText.H3, { text: title, style: styles.title }),
                        React.createElement(ThemedText.P, { style: styles.message, text: message }),
                        React.createElement(ThemedButton, { text: 'Close',
                            type: 'notification',
                            onPress: function onPress() {
                                return _this2.setState({ isShow: !isShow });
                            }
                        })
                    )
                )
            );
        }
    }]);
    return Notification;
}(Component);

Notification.contextType = ThemeContext;


Notification.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    isShow: PropTypes.bool
};

var themedStyles$g = function themedStyles(theme) {
    return {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        modal: {
            opacity: '0.9',
            backgroundColor: '#aaaaaa',
            width: '80%',
            borderRadius: theme.get(Theme.Button.btnBorderRadius),
            position: 'absolute',
            top: '20%',
            left: '10%'
        },
        title: {
            color: theme.get(Theme.Text.textColor),
            textAlign: 'center',
            marginTop: theme.get(Theme.Spaces.line),
            fontWeight: 'bold'
        },
        message: {
            color: theme.get(Theme.Text.textColor),
            marginTop: theme.get(Theme.Spaces.line),
            marginBottom: theme.get(Theme.Spaces.line),
            textAlign: 'center'
        }
    };
};

function PageTopSection(_ref) {
    var children = _ref.children;

    var theme = useContext(ThemeContext);
    var styles = themedStyles$h(theme);

    return React.createElement(
        'div',
        { style: styles.topContainer },
        children
    );
}

var themedStyles$h = function themedStyles(theme) {
    return {
        topContainer: {
            width: '100%',
            paddingTop: theme.get(Theme.Spaces.line) * 2,
            backgroundColor: theme.get(Theme.Colors.bkgShade1),
            paddingBottom: theme.get(Theme.Spaces.line) * 2,
            borderBottomLeftRadius: theme.get(Theme.Spaces.line) * 2,
            borderBottomRightRadius: theme.get(Theme.Spaces.line) * 2
            // paddingLeft: theme.get(Theme.Spaces.screenMarginHorizontal),
            // paddingRight: theme.get(Theme.Spaces.screenMarginHorizontal),
        }
    };
};

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
function renderHeader(title, styles) {
    return React.createElement(
        'div',
        { style: styles.titleContainer },
        React.createElement(ThemedText.H2, { text: title, style: styles.title }),
        React.createElement('div', { style: _extends({}, styles.underline, { marginLeft: '46%' }) })
    );
}

/**
 * Render header logo
 *
 * @param  {string} source
 * @param  {object} styles
 * @return {JSX}
 */
function renderLogo(source, styles) {
    return React.createElement(
        'div',
        { style: _extends({}, styles.titleContainer, styles.logoContainer) },
        React.createElement('img', {
            style: styles.logo,
            src: source,
            alt: 'logo'
        })
    );
}

function PageTitle(_ref) {
    var _ref$title = _ref.title,
        title = _ref$title === undefined ? '' : _ref$title,
        children = _ref.children;

    var theme = useContext(ThemeContext);
    var styles = themedStyles$i(theme);
    var logoSource = getRenderedResource('App.Icon.Small');
    var header = title !== '' ? renderHeader(title, styles) : renderLogo(logoSource, styles);

    return React.createElement(
        PageTopSection,
        null,
        header,
        children
    );
}

PageTitle.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

var themedStyles$i = function themedStyles(theme) {
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
            zIndex: 999
        },
        title: {
            textAlign: 'center'
        },
        titleContainer: {
            marginBottom: theme.get(Theme.Spaces.line)
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
            bottom: theme.get(Theme.Spaces.line)
        },
        logoContainer: {
            marginBottom: 0,
            alignItems: 'center'
        },
        logo: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '20%'
        }
    };
};

var ScaledImage = function (_Component) {
    inherits(ScaledImage, _Component);

    function ScaledImage(props) {
        classCallCheck(this, ScaledImage);

        var _this = possibleConstructorReturn(this, (ScaledImage.__proto__ || Object.getPrototypeOf(ScaledImage)).call(this, props));

        _this.state = {
            source: { uri: _this.props.uri }
        };
        return _this;
    }

    createClass(ScaledImage, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            getSize(this.props.uri, function (width, height) {
                if (_this2.props.width && !_this2.props.height) {
                    _this2.setState({
                        width: _this2.props.width,
                        height: height * (_this2.props.width / width)
                    });
                } else if (!_this2.props.width && _this2.props.height) {
                    _this2.setState({
                        width: width * (_this2.props.height / height),
                        height: _this2.props.height
                    });
                } else {
                    _this2.setState({ width: width, height: height });
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("img", {
                src: this.state.source,
                style: _extends({}, this.props.style, { height: this.state.height, width: this.state.width })
            });
        }
    }]);
    return ScaledImage;
}(Component);

/**
 * Account security list item settings
 *
 * @param       {string} name       component list name, to be used on toggling identifier etc.
 * @param       {string} title       Title of list
 * @param       {string} description Item description
 * @param       {boolean} value       switch value
 * @param       {function} toggle      callback
 * @param       {boolean} padTop      add padding top
 * @param       {boolean} padBottom   add padding bottom
 * @param       {boolean} noBorder    no border on bottom
 * @param       {boolean} noSwitch    remove switch , add arrow icon
 *
 * @constructor
 */
function AccountListItem(_ref) {
  var name = _ref.name,
      title = _ref.title,
      description = _ref.description,
      value = _ref.value,
      toggle = _ref.toggle,
      padTop = _ref.padTop,
      padBottom = _ref.padBottom,
      noBorder = _ref.noBorder,
      noSwitch = _ref.noSwitch;

  var theme = useContext(ThemeContext);
  var styles = themedStyles$j(theme);
  var resources = useContext(ResourceContext);
  var arrowIconSource = getRenderedResource("Icon.Arrow.Right");

  var stylePadTop = void 0,
      stylePadBottom = void 0,
      styleNoBorder = void 0,
      actionElement = void 0;

  if (padTop !== undefined) {
    stylePadTop = styles.padTop;
  }

  if (padBottom !== undefined) {
    stylePadBottom = styles.padBottom;
  }

  if (noBorder !== undefined) {
    styleNoBorder = styles.noBorder;
  }

  if (noSwitch !== undefined) {
    actionElement = React.createElement("img", { style: styles.arrowIcon, src: arrowIconSource, alt: "icon" });
  } else {
    actionElement = React.createElement(InputSwitch, {
      onChange: function onChange(value) {
        return toggle(value, name);
      },
      value: value,
      style: styles.actionSwitch
    });
  }

  return React.createElement(
    "div",
    {
      style: _extends({}, styles.container, stylePadBottom, stylePadTop, styleNoBorder)
    },
    React.createElement(
      "div",
      { style: styles.textContainer },
      React.createElement(ThemedText.P, { text: title }),
      React.createElement(ThemedText.SMALL, { text: description })
    ),
    React.createElement(
      "div",
      { style: styles.iconContainer },
      actionElement
    )
  );
}

AccountListItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.bool,
  toggle: PropTypes.func,
  padTop: PropTypes.bool,
  padBottom: PropTypes.bool,
  noBorder: PropTypes.bool
};

var themedStyles$j = function themedStyles(theme) {
  return {
    container: {
      flexDirection: "row",
      // borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.get(Theme.List.listItemBorderColor)
    },
    textContainer: {
      flex: 5
    },
    iconContainer: {
      flex: 1,
      alignItems: "flex-end",
      justifyContent: "center"
    },
    padTop: {
      paddingTop: theme.get(Theme.Spaces.line)
    },
    padBottom: {
      paddingBottom: theme.get(Theme.Spaces.line)
    },
    noBorder: {
      borderBottomWidth: 0
    },
    actionSwitch: {
      marginRight: -2
    },
    arrowIcon: {
      height: 10
    }
  };
};

/**
 * Coin balance section
 *
 * @constructor
 */
function CoinBalance(_ref) {
    var coin = _ref.coin,
        balance = _ref.balance,
        pending = _ref.pending,
        _ref$coinLabel = _ref.coinLabel,
        coinLabel = _ref$coinLabel === undefined ? '' : _ref$coinLabel,
        withBorderBottom = _ref.withBorderBottom;

    var theme = useContext(ThemeContext);
    var styles = themedStyles$k(theme);

    var pendingText = "Pending " + pending + " " + coin;
    var iconSource = getRenderedResource('Icon.Coin.BTC.White');
    var balanceText = balance + " " + coin;
    var coinLabelText = 'YOUR BALANCE';

    if (coinLabel != '') {
        coinLabelText = coinLabel;
    }

    var withBorderBottomStyle = void 0;
    if (withBorderBottom !== undefined) {
        withBorderBottomStyle = styles.withBorderBottom;
    }

    return React.createElement(
        "div",
        { style: _extends({}, styles.container, withBorderBottomStyle) },
        React.createElement(
            "div",
            { style: styles.balanceContainer },
            React.createElement(
                "div",
                { style: styles.iconContainer },
                React.createElement("img", {
                    src: iconSource,
                    alt: "icon" })
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { style: styles.balanceLabel },
                    React.createElement(ThemedText.SMALL, { text: coinLabelText }),
                    React.createElement(ThemedText.H3, { text: balanceText,
                        style: styles.balance })
                )
            )
        ),
        React.createElement(
            "div",
            { style: styles.pendingContainer },
            React.createElement(ThemedText.SMALL, { text: pendingText, style: styles.pending })
        )
    );
}

CoinBalance.propTypes = {
    coin: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    pending: PropTypes.number.isRequired,
    coinLabel: PropTypes.string,
    withBorderBottom: PropTypes.bool
};

var themedStyles$k = function themedStyles(theme) {
    return {
        container: {
            flexDirection: 'row',
            marginTop: theme.get(Theme.Spaces.line)
        },
        balanceContainer: {
            flex: 2,
            flexDirection: 'row'
        },
        pendingContainer: {
            flex: 1,
            justifyContent: 'center'
        },
        iconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.get(Theme.Colors.bkgShade7),
            borderRadius: theme.get(Theme.Button.btnBorderRadius),
            marginRight: theme.get(Theme.Button.btnBorderRadius),
            height: 30,
            width: 30
        },
        balanceLabel: {
            flex: 1,
            flexDirection: 'column'
        },
        balance: {
            fontWeight: 'bold',
            marginTop: theme.get(Theme.Button.btnBorderRadius) * -1
        },
        pending: {
            textAlign: 'right'
        },
        withBorderBottom: {
            borderBottomColor: theme.get(Theme.List.listItemBorderColor),
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingBottom: theme.get(Theme.Spaces.line),
            marginTop: 0
        }
    };
};

/**
 * User activity component
 *
 * @constructor
 */
function UserActivity(_ref) {
  var activity = _ref.activity,
      activityIndex = _ref.activityIndex;
  var id = activity.id,
      type = activity.type,
      coin = activity.coin,
      balance = activity.balance,
      sell = activity.sell,
      created_at = activity.created_at;

  var theme = useContext(ThemeContext);
  var styles = themedStyles$l(theme);
  var resources = useContext(ResourceContext);
  var iconSource = getRenderedResource("Icon.User.Activity." + type);
  var timeFormat = getRenderedResource("App.DateTime.Format");

  var balanceText = balance + " " + coin;
  var sellLabelText = sell + " " + coin;
  var iconBackgroundColorStyle = type === "Withdraw" ? styles.iconHighlight : styles.iconGray;
  var createdAtFromNow = moment(created_at, timeFormat).fromNow();
  var activityBgColor = void 0;
  if (activityIndex % 2) activityBgColor = styles.itemBgGray;

  var sellLabelElement = void 0;
  if (type === "Sell") sellLabelElement = React.createElement(ThemedText.SMALL, { text: sellLabelText, style: styles.sellLabel });

  return React.createElement(
    "div",
    { style: _extends({}, styles.mainContainer, activityBgColor) },
    React.createElement(
      "div",
      { style: styles.container },
      React.createElement(
        "div",
        { style: styles.action },
        React.createElement(
          "div",
          { style: [styles.iconContainer, iconBackgroundColorStyle] },
          React.createElement("img", { style: styles.icon, src: iconSource, alt: "icon" })
        ),
        React.createElement(
          "div",
          { style: styles.activityTypeContainer },
          React.createElement(ThemedText.P, { text: type, style: styles.typeLabel }),
          React.createElement(ThemedText.SMALL, {
            text: createdAtFromNow,
            style: styles.timeLabel
          })
        )
      ),
      React.createElement(
        "div",
        { style: styles.details },
        React.createElement(ThemedText.H4, { text: balanceText, style: styles.detailsLabel }),
        sellLabelElement
      )
    )
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

var themedStyles$l = function themedStyles(theme) {
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

/**
 * Dashboard coin item
 * @param       {[type]}  coin
 * @param       {Boolean} noBorderBottom set to `true` if you want to remove border bottom
 * @constructor
 */
function Coin(_ref) {
    var coin = _ref.coin,
        noBorderBottom = _ref.noBorderBottom;
    var id = coin.id,
        name = coin.name,
        amount = coin.amount,
        balance = coin.balance;


    var theme = useContext(ThemeContext);
    var styles = themedStyles$m(theme);
    var resources = useContext(ResourceContext);

    var coinAbbreviation = name.toUpperCase();
    var coinLogoSource = getRenderedResource("Icon.Coin." + coinAbbreviation + ".White");
    var balanceText = "Pending " + balance + " " + coinAbbreviation;
    var arrowIconSource = getRenderedResource('Icon.Arrow.Right');

    var borderBottomStyle = void 0;
    if (noBorderBottom) borderBottomStyle = styles.noBorderBottom;

    return React.createElement(
        "div",
        { style: [styles.mainContainer, borderBottomStyle] },
        React.createElement(
            "div",
            { style: styles.coinProfile },
            React.createElement(
                "div",
                { style: styles.iconContainer },
                React.createElement("img", {
                    style: styles.icon,
                    src: coinLogoSource,
                    alt: "icon"
                })
            ),
            React.createElement(
                "div",
                { style: styles.coinNameContainer },
                React.createElement(ThemedText.H3, { text: name })
            )
        ),
        React.createElement(
            "div",
            { style: styles.coinData },
            React.createElement(ThemedText.H4, { text: amount,
                style: styles.amountLabel }),
            React.createElement(ThemedText.SMALL, { text: balanceText,
                style: styles.balanceLabel })
        ),
        React.createElement(
            "div",
            { style: styles.arrowIconContainer },
            React.createElement("img", {
                src: arrowIconSource,
                alt: "arrowIcon"
            })
        )
    );
}

Coin.propTypes = {
    coin: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        balance: PropTypes.string.isRequired
    }),
    noBorderBottom: PropTypes.bool.isRequired
};

var themedStyles$m = function themedStyles(theme) {
    return {
        mainContainer: {
            paddingVertical: theme.get(Theme.Spaces.screenMarginVertical) * 0.5,
            alignItems: 'center',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: theme.get(Theme.Input.inputLabelColor),
            flexDirection: 'row'
        },
        itemBgGray: {
            backgroundColor: theme.get(Theme.Colors.bkgShade1)
        },
        coinProfile: {
            flex: 1,
            flexDirection: 'row'
        },
        coinData: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
            alignSelf: 'center',
            flexDirection: 'column',
            marginRight: theme.get(Theme.Spaces.screenMarginVertical)
        },
        coinNameContainer: {
            flex: 3,
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: theme.get(Theme.Button.btnBorderRadius)
        },
        iconContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 35,
            borderRadius: theme.get(Theme.Button.btnBorderRadius),
            overflow: 'hidden'
        },
        icon: {
            backgroundColor: theme.get(Theme.Input.inputBackground)
        },
        amountLabel: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        balanceLabel: {
            marginTop: theme.get(Theme.Icon.iconBorderRadius) * 2 * -1
        },
        arrowIconContainer: {
            position: 'absolute',
            alignSelf: 'center',
            justifyContent: 'center',
            right: 0
        },
        noBorderBottom: {
            borderBottomWidth: 0
        }
    };
};

/**
 * Coin deposit section
 *
 * @param {string} code QR code
 * @constructor
 */
function CoinDeposit(_ref) {
    var code = _ref.code;

    var theme = useContext(ThemeContext);
    var styles = themedStyles$n(theme);
    var qrSource = getRenderedResource('Image.QR.Sample');
    var copyIconSource = getRenderedResource('Icon.Copy');

    return React.createElement(
        "div",
        { style: styles.container },
        React.createElement("img", {
            src: qrSource,
            alt: "qrcode" }),
        React.createElement(
            "div",
            { style: styles.codeContainer },
            React.createElement(ThemedText.P, { text: code,
                style: styles.qrLabel }),
            React.createElement("img", {
                style: styles.copyIcon,
                src: copyIconSource,
                alt: "icon" })
        ),
        React.createElement(
            "div",
            { style: styles.footer },
            React.createElement(
                "div",
                { style: styles.bankDepositBtnContainer },
                React.createElement(ThemedButton, { text: 'Bank Deposit', isSmall: true,
                    type: 'inverse' })
            ),
            React.createElement(
                "div",
                { style: { flex: 1 } },
                React.createElement(ThemedButton, { text: 'USSD Deposit',
                    isSmall: true,
                    type: 'inverse' })
            )
        )
    );
}

CoinDeposit.propTypes = {
    code: PropTypes.string.isRequired
};

var themedStyles$n = function themedStyles(theme) {
    return {
        container: {
            backgroundColor: theme.get(Theme.Colors.bkgShade5),
            paddingVertical: theme.get(Theme.Spaces.screenMarginVertical),
            paddingHorizontal: theme.get(Theme.Spaces.screenMarginVertical),
            borderRadius: theme.get(Theme.Button.btnBorderRadius),
            marginTop: theme.get(Theme.Spaces.line),
            marginHorizontal: theme.get(Theme.Spaces.screenMarginVertical),
            textAlign: 'center',
            alignItems: 'center'
        },
        qrLabel: {
            color: theme.get(Theme.Text.infoColor)
        },
        bankDepositBtnContainer: {
            flex: 1,
            marginRight: theme.get(Theme.Spaces.screenMarginVertical)
        },
        footer: {
            flexDirection: 'row'
        },
        codeContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        copyIcon: {}
    };
};

/**
 * Search Item result
 *
 * @constructor
 */
function Item(_ref) {
  var result = _ref.result,
      resultIndex = _ref.resultIndex;
  var id = result.id,
      name = result.name,
      balance = result.balance;


  var theme = useContext(ThemeContext);
  var styles = themedStyles$o(theme);
  var resources = useContext(ResourceContext);
  var profileIconSource = getRenderedResource("Icon.User.Profile");
  var arrowIconSource = getRenderedResource("Icon.Arrow.Right");
  var timeFormat = getRenderedResource("App.DateTime.Format");

  var itemBgColor = void 0;
  // Set list backgroundColor - must be alternate
  if (resultIndex % 2) itemBgColor = styles.itemBgGray;

  return React.createElement(
    "div",
    { style: _extends({}, styles.mainContainer, itemBgColor) },
    React.createElement(
      "div",
      { style: styles.profile },
      React.createElement(
        "div",
        { style: styles.iconContainer },
        React.createElement("img", { style: styles.icon, src: profileIconSource, alt: "icon" })
      ),
      React.createElement(
        "div",
        { style: styles.userProfileContainer },
        React.createElement(ThemedText.H4, { text: name, style: styles.nameLabel }),
        React.createElement(ThemedText.SMALL, { text: balance, style: styles.userBalanceLabel })
      )
    ),
    React.createElement(
      "div",
      { style: styles.arrowIconContainer },
      React.createElement("img", { style: styles.arrowIcon, src: arrowIconSource, alt: "icon" })
    )
  );
}

var themedStyles$o = function themedStyles(theme) {
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

export { AccountListItem, BigLogo, Card, Coin, CoinBalance, CoinDeposit, Gap, HeaderLabel, IconLabel, InputGroupAddon, InputSearch, InputSwitch, Item, List, ListItem, Logo, PageTitle, PageTopSection, Row, StickyBottom, ThemedButton, ThemedLink, ThemedText, UserActivity };
//# sourceMappingURL=index.es.js.map
