'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var unifyreReactHelper = require('unifyre-react-helper');
var propTypes = require('prop-types');
var unifyreNativeAssets = require('unifyre-native-assets');
var react = require('@iconify/react');
var mdArrowDropdown = _interopDefault(require('@iconify/icons-ion/md-arrow-dropdown'));
var moment = _interopDefault(require('moment'));

function Greeting() {
  return React__default.createElement(
    "div",
    null,
    React__default.createElement(
      "p",
      null,
      "hello edna"
    )
  );
}

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

function Gap(_ref) {
  var size = _ref.size;

  var theme = React.useContext(unifyreReactHelper.ThemeContext);
  var styles = themedStyles(theme);
  return React__default.createElement(
    "div",
    null,
    React__default.createElement("p", {
      style: _extends({}, styles.gap, size === "small" ? styles.smallGap : {})
    })
  );
}

var themedStyles = function themedStyles(theme) {
  return {
    gap: {
      width: "100%",
      height: theme.get(unifyreReactHelper.Theme.Spaces.gap)
    },
    smallGap: {
      height: theme.get(unifyreReactHelper.Theme.Spaces.gap) / 2
    }
  };
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
          style = _ref7.style;

      var theme = React.useContext(unifyreReactHelper.ThemeContext);
      var styles = themedStyles$1(theme);

      return React__default.createElement(
        "div",
        null,
        _text
      );
    }
  }]);
  return ThemedText;
}();


var themedStyles$1 = function themedStyles(theme) {
  return {
    commonText: {
      fontFamily: theme.get(unifyreReactHelper.Theme.Font.main),
      color: theme.get(unifyreReactHelper.Theme.Colors.textColor)
    },
    h1: {
      fontSize: theme.get(unifyreReactHelper.Theme.Text.h1Size)
    },
    h2: {
      fontSize: theme.get(unifyreReactHelper.Theme.Text.h2Size)
    },
    h3: {
      fontSize: theme.get(unifyreReactHelper.Theme.Text.h3Size)
    },
    h4: {
      fontSize: theme.get(unifyreReactHelper.Theme.Text.h4Size)
    },
    p: {
      fontSize: theme.get(unifyreReactHelper.Theme.Text.h2Size) * 0.5
    },
    small: {
      fontSize: theme.get(unifyreReactHelper.Theme.Text.h3Size) * 0.5
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

    var theme = React.useContext(unifyreReactHelper.ThemeContext);
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

    return React__default.createElement(
        'button',
        { onClick: onPress, disabled: disabled, style: _extends({}, bkgStyle, buttonPositionStyle, buttonSizeStyle) },
        React__default.createElement(ThemedText.H4, { text: text, style: _extends({}, textStyle, textSizeStyle) })
    );
}

ThemedButton.propTypes = {
    type: propTypes.PropTypes.oneOf(['primary', 'highlight', 'inverse', 'notification']),
    text: propTypes.PropTypes.string,
    onPress: propTypes.PropTypes.func,
    disabled: propTypes.PropTypes.bool
};

var themedStyles$2 = function themedStyles(theme) {
    var _stickyBottom;

    return {
        common: {
            width: '100%',
            borderRadius: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
            paddingVertical: theme.get(unifyreReactHelper.Theme.Button.btnPadding) * 0.5,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            height: '35px'
        },
        smallButton: {
            paddingVertical: theme.get(unifyreReactHelper.Theme.Button.btnPadding) / 4
        },
        smallText: {
            fontSize: theme.get(unifyreReactHelper.Theme.Text.h2Size) * 0.5

        },
        notification: {
            width: '100%',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
            borderBottomLeftRadius: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
            paddingVertical: theme.get(unifyreReactHelper.Theme.Spaces.gap) / 3,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.get(unifyreReactHelper.Theme.Button.btnHighlight),
            cursor: 'pointer'
        },
        stickyBottom: (_stickyBottom = {
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: theme.get(unifyreReactHelper.Theme.Button.btnPadding),
            left: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical),
            width: '100%',
            borderRadius: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius)
        }, defineProperty(_stickyBottom, 'bottom', 0), defineProperty(_stickyBottom, 'left', 0), defineProperty(_stickyBottom, 'right', 0), defineProperty(_stickyBottom, 'justifyContent', 'center'), defineProperty(_stickyBottom, 'alignItems', 'center'), _stickyBottom),
        primary: {
            backgroundColor: theme.get(unifyreReactHelper.Theme.Button.btnPrimary)
            // outline: 'none', 
        },
        highlight: {
            backgroundColor: theme.get(unifyreReactHelper.Theme.Button.btnHighlight)
        },
        inverse: {
            backgroundColor: theme.get(unifyreReactHelper.Theme.Button.inverseBtnPrimary),
            outline: 'none'
        },
        textPrimary: {
            color: theme.get(unifyreReactHelper.Theme.Button.btnPrimaryTextColor)
        },
        textHighlight: {
            color: theme.get(unifyreReactHelper.Theme.Button.btnHighlightTextColor)
        },
        textInverse: {
            color: theme.get(unifyreReactHelper.Theme.Button.inverseBtnPrimaryTextColor)
        }

    };
};

function ThemedLink(_ref) {
    var text = _ref.text,
        onPress = _ref.onPress,
        disabled = _ref.disabled;

    var theme = React.useContext(unifyreReactHelper.ThemeContext);
    var styles = themedStyles$3(theme);
    return React__default.createElement(
        'button',
        { onPress: onPress },
        React__default.createElement(ThemedText.H4, { text: text, style: styles.link })
    );
}

ThemedLink.propTypes = {
    text: propTypes.PropTypes.string,
    onPress: propTypes.PropTypes.func,
    disabled: propTypes.PropTypes.bool
};

var themedStyles$3 = function themedStyles(theme) {
    return {
        link: {
            color: theme.get(unifyreReactHelper.Theme.Text.linkColor)
        }
    };
};

/**
 * Get big logo component
 *
 * @constructor
 */
function BigLogo() {
  var theme = React.useContext(unifyreReactHelper.ThemeContext);
  var styles = themedStyles$4();
  var resources = React.useContext(unifyreReactHelper.ResourceContext);
  var logoSource = unifyreNativeAssets.getRenderedResource("App.Icon.Big");

  return React__default.createElement(
    "div",
    { style: styles.container },
    React__default.createElement("img", { style: styles.logo, src: logoSource, alt: "big logo" })
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

    var theme = React.useContext(unifyreReactHelper.ThemeContext);
    var styles = themedStyles$5(theme);
    var resources = React.useContext(unifyreReactHelper.ResourceContext);
    var logoSource = unifyreNativeAssets.getRenderedResource('Icon.App.Big.Logo');
    var id = data.id,
        image = data.image,
        title = data.title,
        description = data.description;


    return React__default.createElement(
        'div',
        { style: styles.container },
        React__default.createElement(
            'div',
            { style: styles.iconContainer },
            React__default.createElement('img', {
                style: styles.icon,
                src: logoSource
            })
        ),
        React__default.createElement(
            'div',
            { style: styles.detailsContainer },
            React__default.createElement(ThemedText.H3, { text: title, style: styles.title }),
            React__default.createElement(ThemedText.H4, { text: description, style: styles.description })
        )
    );
}

Card.propTypes = {
    data: propTypes.PropTypes.shape({
        id: propTypes.PropTypes.number.isRequired,
        image: propTypes.PropTypes.string.isRequired,
        title: propTypes.PropTypes.string.isRequired,
        description: propTypes.PropTypes.string.isRequired
    }).isRequired
};

var themedStyles$5 = function themedStyles(theme) {
    return {
        container: {
            backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade1),
            borderRadius: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
            borderBottomWidth: 2,
            borderBottomColor: theme.get(unifyreReactHelper.Theme.Colors.highlight),
            flexDirection: 'row',
            paddingVertical: theme.get(unifyreReactHelper.Theme.Spaces.line),
            paddingHorizontal: theme.get(unifyreReactHelper.Theme.Spaces.line)
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
            marginLeft: theme.get(unifyreReactHelper.Theme.Spaces.line) * 0.5
        },
        title: {},
        description: {
            fontSize: theme.get(unifyreReactHelper.Theme.Text.pSize) * 0.5
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
          return React__default.createElement(
            "div",
            { style: styles.card, key: index },
            item
          );
        });
      } else {
        cardElements = this.props.cards.map(function (card, index) {
          return React__default.createElement(
            "div",
            { style: styles.card, key: index },
            React__default.createElement(Card, { key: index, data: card })
          );
        });
      }

      return React__default.createElement(
        "div",
        _extends({}, this.props, { style: _extends({}, styles.scroll, this.props.style) }),
        cardElements
      );
    }
  }]);
  return CardSilder;
}(React.Component);

CardSilder.contextType = unifyreReactHelper.ThemeContext;


CardSilder.propTypes = {
  cards: propTypes.PropTypes.array
};

var themedStyles$6 = function themedStyles(theme) {
  return {
    card: {
      width: theme.get(unifyreReactHelper.Theme.Spaces.gap) * 4,
      marginLeft: theme.get(unifyreReactHelper.Theme.Spaces.line)
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

    var theme = React.useContext(unifyreReactHelper.ThemeContext);
    var styles = themedStyles$7();
    var arrowIconSource = unifyreNativeAssets.getRenderedResource('Icon.Arrow.Right');

    return React__default.createElement(
        "div",
        { style: styles.container },
        React__default.createElement(
            "div",
            { style: styles.textContainer },
            React__default.createElement(ThemedText.P, { text: title,
                style: styles.title }),
            React__default.createElement(ThemedText.SMALL, { text: description,
                style: styles.description })
        ),
        React__default.createElement(
            "div",
            { style: styles.iconContainer },
            React__default.createElement("img", {
                style: styles.icon,
                src: arrowIconSource,
                alt: "icon" })
        )
    );
}

HeaderLabel.propTypes = {
    title: propTypes.PropTypes.string,
    description: propTypes.PropTypes.string
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

  var theme = React.useContext(unifyreReactHelper.ThemeContext);
  var styles = themedStyles$8(theme);
  var resources = React.useContext(unifyreReactHelper.ResourceContext);
  var iconSource = unifyreNativeAssets.getRenderedResource(icon);

  var iconThumbnailStyle = void 0,
      iconThumbnailImageStyle = void 0;
  if (iconThumbnail !== undefined) {
    iconThumbnailStyle = styles.iconThumbnail;
    iconThumbnailImageStyle = styles.iconThumbnailImage;
  }
  var subLabelElement = void 0;
  if (subLabel !== undefined) subLabelElement = React__default.createElement(ThemedText.H4, { text: subLabel, style: styles.subLabelStlye });

  return React__default.createElement(
    "div",
    { style: styles.container },
    React__default.createElement(
      "div",
      { style: _extends({}, styles.iconContainer, iconThumbnailStyle) },
      React__default.createElement("img", {
        style: _extends({}, styles.icon, iconThumbnailImageStyle),
        src: iconSource
      })
    ),
    React__default.createElement(
      "div",
      { style: styles.labelContainer },
      React__default.createElement(ThemedText.H3, { text: label, style: [styles.labelStlye, labelStyles] }),
      subLabelElement
    )
  );
}

IconLabel.propTypes = {
  label: propTypes.PropTypes.string.isRequired,
  icon: propTypes.PropTypes.string,
  labelStyles: propTypes.PropTypes.object
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
      color: theme.get(unifyreReactHelper.Theme.Colors.textColor),
      marginTop: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius) * -1
    },
    iconThumbnail: {
      width: 40,
      height: 40,
      borderColor: theme.get(unifyreReactHelper.Theme.Icon.iconColor),
      backgroundColor: theme.get(unifyreReactHelper.Theme.Icon.iconColor),
      borderRadius: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
      // borderWidth: StyleSheet.hairlineWidth,
      alignSelf: "center",
      marginRight: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius)
    },
    iconThumbnailImage: {
      marginTop: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius) * -1
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


    var theme = React.useContext(unifyreReactHelper.ThemeContext);
    var styles = themedStyles$9(theme);

    var iconElement = void 0;

    value = (value || '').toString();

    if (icon !== '') {
        // With icon
        var iconSource = unifyreNativeAssets.getRenderedResource(icon);
        iconElement = React__default.createElement(
            'button',
            { onClick: toggleIcon, style: styles.iconContainer },
            React__default.createElement('img', { style: styles.icon,
                src: iconSource,
                alt: 'icon' })
        );
    }
    return React__default.createElement(
        'div',
        { style: styles.inputContainer },
        React__default.createElement('input', _extends({
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
    placeholder: propTypes.PropTypes.string,
    icon: propTypes.PropTypes.string,
    type: propTypes.PropTypes.string,
    value: propTypes.PropTypes.oneOfType([propTypes.PropTypes.string, propTypes.PropTypes.number]),
    toggleIcon: propTypes.PropTypes.func
};

var themedStyles$9 = function themedStyles(theme) {
    return {
        inputContainer: {
            borderRadius: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
            borderColor: theme.get(unifyreReactHelper.Theme.Input.inputBackground),
            borderWidth: 9,
            borderStyle: 'solid',
            backgroundColor: theme.get(unifyreReactHelper.Theme.Input.inputBackground),
            flexDirection: 'row',
            borderBottomWidth: 5,
            width: '60%',
            margin: ' 2%',
            marginLeft: '20%',
            height: theme.get(unifyreReactHelper.Theme.Input.inputTextSize) * 1.5
            // paddingLeft: theme.get(Theme.Spaces.screenMarginHorizontal),
            // paddingRight: theme.get(Theme.Spaces.screenMarginHorizontal),
        },
        input: {
            backgroundColor: theme.get(unifyreReactHelper.Theme.Input.inputBackground),
            fontSize: theme.get(unifyreReactHelper.Theme.Input.inputTextSize) * 0.5,
            color: theme.get(unifyreReactHelper.Theme.Input.inputTextColor),
            paddingLeft: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
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
            height: theme.get(unifyreReactHelper.Theme.Text.h2Size) * 0.5,
            width: theme.get(unifyreReactHelper.Theme.Text.h2Size) * 0.5,
            justifyContent: 'center',
            alignSelf: 'center',
            marginRight: 'auto',
            float: 'left',
            cursor: 'pointer'
        },
        iconContainer: {
            justifyContent: 'center',
            marginTop: 2,
            backgroundColor: theme.get(unifyreReactHelper.Theme.Input.inputBackground),
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

  var theme = React.useContext(unifyreReactHelper.ThemeContext);
  var styles = themedStyles$a(theme);

  var searchIconSearch = unifyreNativeAssets.getRenderedResource("Icon.Search");
  var iconDropDownStyle = {
    size: theme.get(unifyreReactHelper.Theme.Text.h2Size),
    color: theme.get(unifyreReactHelper.Theme.Colors.bkgShade3)
  };

  return React__default.createElement(
    "div",
    { style: styles.inputContainer },
    React__default.createElement("img", { style: styles.icon, source: searchIconSearch }),
    React__default.createElement("input", { type: "text", style: styles.input, maxlength: "40" }),
    React__default.createElement(
      "div",
      { style: styles.dropdownContainer },
      React__default.createElement(react.Icon, {
        icon: mdArrowDropdown,
        size: iconDropDownStyle.size,
        color: iconDropDownStyle.color
      })
    )
  );
}

InputSearch.propTypes = {
  open: propTypes.PropTypes.func
};

var themedStyles$a = function themedStyles(theme) {
  return {
    inputContainer: {
      borderRadius: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
      borderColor: theme.get(unifyreReactHelper.Theme.Input.inputBackground),
      borderWidth: 1,
      borderStyle: "solid",
      backgroundColor: theme.get(unifyreReactHelper.Theme.Input.inputBackground),
      flexDirection: "row",
      borderBottomWidth: 1,
      paddingHorizontal: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius)
    },
    input: {
      backgroundColor: theme.get(unifyreReactHelper.Theme.Input.inputBackground),
      fontSize: theme.get(unifyreReactHelper.Theme.Input.inputTextSize) * 0.5,
      color: theme.get(unifyreReactHelper.Theme.Colors.textColor),
      paddingLeft: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
      flex: 1
    },
    icon: {
      height: theme.get(unifyreReactHelper.Theme.Text.h3Size),
      width: theme.get(unifyreReactHelper.Theme.Text.h3Size),
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

  var theme = React.useContext(unifyreReactHelper.ThemeContext);
  var styles = themedStyles$b();
  var checked = value === on;

  function handleClick() {
    if (onChange) {
      onChange(checked ? off : on);
    }
  }

  return React__default.createElement(
    "div",
    { style: styles.container },
    React__default.createElement(ThemedText.SMALL, { text: label, style: styles.label }),
    React__default.createElement(
      "label",
      _extends({}, props, {
        style: _extends({}, styles.container, styles.containerDisabled),
        onClick: disabled ? null : handleClick
      }),
      React__default.createElement("input", { type: "hidden", name: name, value: value }),
      React__default.createElement("span", {
        style: _extends({}, styles.track, checked && styles.trackChecked)
      }),
      React__default.createElement("span", {
        style: _extends({}, checked && styles.buttonChecked, styles.button)
      })
    )
  );
}

InputSwitch.propTypes = {
  label: propTypes.PropTypes.string,
  value: propTypes.PropTypes.bool.isRequired,
  toggle: propTypes.PropTypes.func
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

    var theme = React.useContext(unifyreReactHelper.ThemeContext);
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

    return React__default.createElement(
        'div',
        { style: _extends({}, styles.row, withPaddingStyle, withGapMarginTop, noMarginTopStyle) },
        children
    );
}

Row.propTypes = {
    children: propTypes.PropTypes.node

    /**
     * Sticky bottom container
     *
     * @param       {object} children
     * @constructor
     */
};function StickyBottom(_ref2) {
    var children = _ref2.children;

    var theme = React.useContext(unifyreReactHelper.ThemeContext);
    var styles = themedStyles$c(theme);

    return React__default.createElement(
        'div',
        { style: styles.stickyBottom },
        children
    );
}

StickyBottom.propTypes = {
    children: propTypes.PropTypes.node
};

var themedStyles$c = function themedStyles(theme) {
    return {
        row: {
            width: '100%',
            marginTop: theme.get(unifyreReactHelper.Theme.Spaces.line)
        },
        withPadding: {
            paddingLeft: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical),
            paddingRight: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical)
        },
        stickyBottom: {
            position: 'absolute',
            bottom: theme.get(unifyreReactHelper.Theme.Button.btnPadding),
            left: 0,
            right: 0,
            width: '100%',
            color: theme.get(unifyreReactHelper.Theme.Colors.textColor)
        },
        gapMarginTop: {
            marginTop: theme.get(unifyreReactHelper.Theme.Spaces.gap)
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

    var theme = React.useContext(unifyreReactHelper.ThemeContext);
    var styles = themedStyles$d(theme);
    var resources = React.useContext(unifyreReactHelper.ResourceContext);

    var iconSource = unifyreNativeAssets.getRenderedResource(icon);
    var arrowIconSource = unifyreNativeAssets.getRenderedResource('Icon.Arrow.Right');

    var styleBgColor = void 0;
    if (itemIndex % 2) styleBgColor = styles.itemBgGray;

    return React__default.createElement(
        "div",
        { style: [styles.container, styleBgColor] },
        React__default.createElement(
            "div",
            { style: styles.iconContainer },
            React__default.createElement("img", {
                style: styles.icon,
                resizeMode: "center",
                src: iconSource,
                alt: "icon"
            })
        ),
        React__default.createElement(
            "div",
            { style: styles.labelContainer },
            React__default.createElement(ThemedText.P, { text: title })
        ),
        React__default.createElement(
            "div",
            { style: styles.arrowContainer },
            React__default.createElement("img", {
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
    title: propTypes.PropTypes.string.isRequired,
    icon: propTypes.PropTypes.string,
    itemIndex: propTypes.PropTypes.number
};

var iconWidthHeight = 30;

var themedStyles$d = function themedStyles(theme) {
    return {
        container: {
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical),
            paddingVertical: theme.get(unifyreReactHelper.Theme.List.listItemPaddingTop) * 0.5,
            backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade1)
        },
        iconContainer: {
            width: iconWidthHeight,
            height: iconWidthHeight,
            alignItems: 'center'
        },
        arrowContainer: {
            position: 'absolute',
            right: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical)
        },
        labelContainer: {
            marginLeft: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius)
        },
        icon: {
            width: iconWidthHeight,
            marginTop: (iconWidthHeight + 5) * -1
        },
        arrowIcon: {
            height: 10
        },
        itemBgGray: {
            backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade6)
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

  var theme = React.useContext(unifyreReactHelper.ThemeContext);
  var styles = themedStyles$e(theme);
  var itemsElement = items.map(function (_ref2, index) {
    var title = _ref2.title,
        icon = _ref2.icon;
    return React__default.createElement(ListItem, { key: index, itemIndex: index, title: title, icon: icon });
  });

  return React__default.createElement(
    "div",
    { style: styles.container },
    React__default.createElement(ThemedText.H4, { text: title, style: styles.listHeaderTitle }),
    React__default.createElement(
      "div",
      { style: styles.listContainer },
      itemsElement
    )
  );
}

List.propTypes = {
  items: propTypes.PropTypes.array.isRequired,
  title: propTypes.PropTypes.string
};

var themedStyles$e = function themedStyles(theme) {
  return {
    container: {
      marginBottom: theme.get(unifyreReactHelper.Theme.Spaces.line)
    },
    listHeaderTitle: {
      marginLeft: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical),
      marginBottom: theme.get(unifyreReactHelper.Theme.Spaces.line) * 0.5
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
  var theme = React.useContext(unifyreReactHelper.ThemeContext);
  var styles = themedStyles$f();
  var logoSource = unifyreNativeAssets.getRenderedResource("App.Icon.Small");

  return React__default.createElement(
    "div",
    { style: { alignItems: "center" } },
    React__default.createElement("img", {
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

            return React__default.createElement(
                'div',
                { style: styles.container },
                React__default.createElement(
                    'div',
                    { style: styles.modal },
                    React__default.createElement(
                        'div',
                        null,
                        React__default.createElement(ThemedText.H3, { text: title, style: styles.title }),
                        React__default.createElement(ThemedText.P, { style: styles.message, text: message }),
                        React__default.createElement(ThemedButton, { text: 'Close',
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
}(React.Component);

Notification.contextType = unifyreReactHelper.ThemeContext;


Notification.propTypes = {
    title: propTypes.PropTypes.string,
    message: propTypes.PropTypes.string,
    isShow: propTypes.PropTypes.bool
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
            borderRadius: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
            position: 'absolute',
            top: '20%',
            left: '10%'
        },
        title: {
            color: theme.get(unifyreReactHelper.Theme.Text.textColor),
            textAlign: 'center',
            marginTop: theme.get(unifyreReactHelper.Theme.Spaces.line),
            fontWeight: 'bold'
        },
        message: {
            color: theme.get(unifyreReactHelper.Theme.Text.textColor),
            marginTop: theme.get(unifyreReactHelper.Theme.Spaces.line),
            marginBottom: theme.get(unifyreReactHelper.Theme.Spaces.line),
            textAlign: 'center'
        }
    };
};

function PageTopSection(_ref) {
    var children = _ref.children;

    var theme = React.useContext(unifyreReactHelper.ThemeContext);
    var styles = themedStyles$h(theme);

    return React__default.createElement(
        'div',
        { style: styles.topContainer },
        children
    );
}

var themedStyles$h = function themedStyles(theme) {
    return {
        topContainer: {
            width: '100%',
            paddingTop: theme.get(unifyreReactHelper.Theme.Spaces.line) * 2,
            backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade1),
            paddingBottom: theme.get(unifyreReactHelper.Theme.Spaces.line) * 2,
            borderBottomLeftRadius: theme.get(unifyreReactHelper.Theme.Spaces.line) * 2,
            borderBottomRightRadius: theme.get(unifyreReactHelper.Theme.Spaces.line) * 2
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
    return React__default.createElement(
        'div',
        { style: styles.titleContainer },
        React__default.createElement(ThemedText.H2, { text: title, style: styles.title }),
        React__default.createElement('div', { style: _extends({}, styles.underline, { marginLeft: '46%' }) })
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
    return React__default.createElement(
        'div',
        { style: _extends({}, styles.titleContainer, styles.logoContainer) },
        React__default.createElement('img', {
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

    var theme = React.useContext(unifyreReactHelper.ThemeContext);
    var styles = themedStyles$i(theme);
    var logoSource = unifyreNativeAssets.getRenderedResource('App.Icon.Small');
    var header = title !== '' ? renderHeader(title, styles) : renderLogo(logoSource, styles);

    return React__default.createElement(
        PageTopSection,
        null,
        header,
        children
    );
}

PageTitle.propTypes = {
    title: propTypes.PropTypes.string,
    children: propTypes.PropTypes.node
};

var themedStyles$i = function themedStyles(theme) {
    return {
        container: {
            width: '100%',
            backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade1),
            paddingBottom: theme.get(unifyreReactHelper.Theme.Spaces.gap),
            paddingLeft: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical),
            paddingRight: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical),
            marginBottom: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical),
            borderBottomLeftRadius: theme.get(unifyreReactHelper.Theme.Text.h2Size),
            borderBottomRightRadius: theme.get(unifyreReactHelper.Theme.Text.h2Size),
            zIndex: 999
        },
        title: {
            textAlign: 'center'
        },
        titleContainer: {
            marginBottom: theme.get(unifyreReactHelper.Theme.Spaces.line)
        },
        underline: {
            backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.highlight),
            height: 2,
            width: '8%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            left: '46%',
            top: -3,
            bottom: theme.get(unifyreReactHelper.Theme.Spaces.line)
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
            return React__default.createElement("img", {
                src: this.state.source,
                style: _extends({}, this.props.style, { height: this.state.height, width: this.state.width })
            });
        }
    }]);
    return ScaledImage;
}(React.Component);

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

  var theme = React.useContext(unifyreReactHelper.ThemeContext);
  var styles = themedStyles$j(theme);
  var resources = React.useContext(unifyreReactHelper.ResourceContext);
  var arrowIconSource = unifyreNativeAssets.getRenderedResource("Icon.Arrow.Right");

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
    actionElement = React__default.createElement("img", { style: styles.arrowIcon, src: arrowIconSource, alt: "icon" });
  } else {
    actionElement = React__default.createElement(InputSwitch, {
      onChange: function onChange(value) {
        return toggle(value, name);
      },
      value: value,
      style: styles.actionSwitch
    });
  }

  return React__default.createElement(
    "div",
    {
      style: _extends({}, styles.container, stylePadBottom, stylePadTop, styleNoBorder)
    },
    React__default.createElement(
      "div",
      { style: styles.textContainer },
      React__default.createElement(ThemedText.P, { text: title }),
      React__default.createElement(ThemedText.SMALL, { text: description })
    ),
    React__default.createElement(
      "div",
      { style: styles.iconContainer },
      actionElement
    )
  );
}

AccountListItem.propTypes = {
  name: propTypes.PropTypes.string,
  title: propTypes.PropTypes.string.isRequired,
  description: propTypes.PropTypes.string.isRequired,
  value: propTypes.PropTypes.bool,
  toggle: propTypes.PropTypes.func,
  padTop: propTypes.PropTypes.bool,
  padBottom: propTypes.PropTypes.bool,
  noBorder: propTypes.PropTypes.bool
};

var themedStyles$j = function themedStyles(theme) {
  return {
    container: {
      flexDirection: "row",
      // borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.get(unifyreReactHelper.Theme.List.listItemBorderColor)
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
      paddingTop: theme.get(unifyreReactHelper.Theme.Spaces.line)
    },
    padBottom: {
      paddingBottom: theme.get(unifyreReactHelper.Theme.Spaces.line)
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

    var theme = React.useContext(unifyreReactHelper.ThemeContext);
    var styles = themedStyles$k(theme);

    var pendingText = "Pending " + pending + " " + coin;
    var iconSource = unifyreNativeAssets.getRenderedResource('Icon.Coin.BTC.White');
    var balanceText = balance + " " + coin;
    var coinLabelText = 'YOUR BALANCE';

    if (coinLabel != '') {
        coinLabelText = coinLabel;
    }

    var withBorderBottomStyle = void 0;
    if (withBorderBottom !== undefined) {
        withBorderBottomStyle = styles.withBorderBottom;
    }

    return React__default.createElement(
        "div",
        { style: _extends({}, styles.container, withBorderBottomStyle) },
        React__default.createElement(
            "div",
            { style: styles.balanceContainer },
            React__default.createElement(
                "div",
                { style: styles.iconContainer },
                React__default.createElement("img", {
                    src: iconSource,
                    alt: "icon" })
            ),
            React__default.createElement(
                "div",
                null,
                React__default.createElement(
                    "div",
                    { style: styles.balanceLabel },
                    React__default.createElement(ThemedText.SMALL, { text: coinLabelText }),
                    React__default.createElement(ThemedText.H3, { text: balanceText,
                        style: styles.balance })
                )
            )
        ),
        React__default.createElement(
            "div",
            { style: styles.pendingContainer },
            React__default.createElement(ThemedText.SMALL, { text: pendingText, style: styles.pending })
        )
    );
}

CoinBalance.propTypes = {
    coin: propTypes.PropTypes.string.isRequired,
    balance: propTypes.PropTypes.number.isRequired,
    pending: propTypes.PropTypes.number.isRequired,
    coinLabel: propTypes.PropTypes.string,
    withBorderBottom: propTypes.PropTypes.bool
};

var themedStyles$k = function themedStyles(theme) {
    return {
        container: {
            flexDirection: 'row',
            marginTop: theme.get(unifyreReactHelper.Theme.Spaces.line)
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
            backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade7),
            borderRadius: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
            marginRight: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
            height: 30,
            width: 30
        },
        balanceLabel: {
            flex: 1,
            flexDirection: 'column'
        },
        balance: {
            fontWeight: 'bold',
            marginTop: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius) * -1
        },
        pending: {
            textAlign: 'right'
        },
        withBorderBottom: {
            borderBottomColor: theme.get(unifyreReactHelper.Theme.List.listItemBorderColor),
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingBottom: theme.get(unifyreReactHelper.Theme.Spaces.line),
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

  var theme = React.useContext(unifyreReactHelper.ThemeContext);
  var styles = themedStyles$l(theme);
  var resources = React.useContext(unifyreReactHelper.ResourceContext);
  var iconSource = unifyreNativeAssets.getRenderedResource("Icon.User.Activity." + type);
  var timeFormat = unifyreNativeAssets.getRenderedResource("App.DateTime.Format");

  var balanceText = balance + " " + coin;
  var sellLabelText = sell + " " + coin;
  var iconBackgroundColorStyle = type === "Withdraw" ? styles.iconHighlight : styles.iconGray;
  var createdAtFromNow = moment(created_at, timeFormat).fromNow();
  var activityBgColor = void 0;
  if (activityIndex % 2) activityBgColor = styles.itemBgGray;

  var sellLabelElement = void 0;
  if (type === "Sell") sellLabelElement = React__default.createElement(ThemedText.SMALL, { text: sellLabelText, style: styles.sellLabel });

  return React__default.createElement(
    "div",
    { style: _extends({}, styles.mainContainer, activityBgColor) },
    React__default.createElement(
      "div",
      { style: styles.container },
      React__default.createElement(
        "div",
        { style: styles.action },
        React__default.createElement(
          "div",
          { style: [styles.iconContainer, iconBackgroundColorStyle] },
          React__default.createElement("img", { style: styles.icon, src: iconSource, alt: "icon" })
        ),
        React__default.createElement(
          "div",
          { style: styles.activityTypeContainer },
          React__default.createElement(ThemedText.P, { text: type, style: styles.typeLabel }),
          React__default.createElement(ThemedText.SMALL, {
            text: createdAtFromNow,
            style: styles.timeLabel
          })
        )
      ),
      React__default.createElement(
        "div",
        { style: styles.details },
        React__default.createElement(ThemedText.H4, { text: balanceText, style: styles.detailsLabel }),
        sellLabelElement
      )
    )
  );
}

UserActivity.propTypes = {
  activity: propTypes.PropTypes.shape({
    id: propTypes.PropTypes.number.isRequired,
    type: propTypes.PropTypes.string.isRequired,
    coin: propTypes.PropTypes.string.isRequired,
    balance: propTypes.PropTypes.number.isRequired,
    sell: propTypes.PropTypes.number.isRequired,
    created_at: propTypes.PropTypes.string.isRequired
  }),
  activityIndex: propTypes.PropTypes.number.isRequired
};

var themedStyles$l = function themedStyles(theme) {
  return {
    mainContainer: {
      width: "100%",
      paddingHorizontal: theme.get(unifyreReactHelper.Theme.Spaces.line),
      paddingVertical: theme.get(unifyreReactHelper.Theme.List.listItemPaddingTop) * 0.5,
      backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade1)
    },
    itemBgGray: {
      backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade6)
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
      paddingLeft: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius)
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
      borderRadius: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
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
      backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade2),
      borderColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade2)
    },
    iconHighlight: {
      backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.highlight),
      borderColor: theme.get(unifyreReactHelper.Theme.Colors.highlight)
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


    var theme = React.useContext(unifyreReactHelper.ThemeContext);
    var styles = themedStyles$m(theme);
    var resources = React.useContext(unifyreReactHelper.ResourceContext);

    var coinAbbreviation = name.toUpperCase();
    var coinLogoSource = unifyreNativeAssets.getRenderedResource("Icon.Coin." + coinAbbreviation + ".White");
    var balanceText = "Pending " + balance + " " + coinAbbreviation;
    var arrowIconSource = unifyreNativeAssets.getRenderedResource('Icon.Arrow.Right');

    var borderBottomStyle = void 0;
    if (noBorderBottom) borderBottomStyle = styles.noBorderBottom;

    return React__default.createElement(
        "div",
        { style: [styles.mainContainer, borderBottomStyle] },
        React__default.createElement(
            "div",
            { style: styles.coinProfile },
            React__default.createElement(
                "div",
                { style: styles.iconContainer },
                React__default.createElement("img", {
                    style: styles.icon,
                    src: coinLogoSource,
                    alt: "icon"
                })
            ),
            React__default.createElement(
                "div",
                { style: styles.coinNameContainer },
                React__default.createElement(ThemedText.H3, { text: name })
            )
        ),
        React__default.createElement(
            "div",
            { style: styles.coinData },
            React__default.createElement(ThemedText.H4, { text: amount,
                style: styles.amountLabel }),
            React__default.createElement(ThemedText.SMALL, { text: balanceText,
                style: styles.balanceLabel })
        ),
        React__default.createElement(
            "div",
            { style: styles.arrowIconContainer },
            React__default.createElement("img", {
                src: arrowIconSource,
                alt: "arrowIcon"
            })
        )
    );
}

Coin.propTypes = {
    coin: propTypes.PropTypes.shape({
        id: propTypes.PropTypes.number.isRequired,
        name: propTypes.PropTypes.string.isRequired,
        amount: propTypes.PropTypes.string.isRequired,
        balance: propTypes.PropTypes.string.isRequired
    }),
    noBorderBottom: propTypes.PropTypes.bool.isRequired
};

var themedStyles$m = function themedStyles(theme) {
    return {
        mainContainer: {
            paddingVertical: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical) * 0.5,
            alignItems: 'center',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: theme.get(unifyreReactHelper.Theme.Input.inputLabelColor),
            flexDirection: 'row'
        },
        itemBgGray: {
            backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade1)
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
            marginRight: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical)
        },
        coinNameContainer: {
            flex: 3,
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius)
        },
        iconContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 35,
            borderRadius: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
            overflow: 'hidden'
        },
        icon: {
            backgroundColor: theme.get(unifyreReactHelper.Theme.Input.inputBackground)
        },
        amountLabel: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        balanceLabel: {
            marginTop: theme.get(unifyreReactHelper.Theme.Icon.iconBorderRadius) * 2 * -1
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

    var theme = React.useContext(unifyreReactHelper.ThemeContext);
    var styles = themedStyles$n(theme);
    var qrSource = unifyreNativeAssets.getRenderedResource('Image.QR.Sample');
    var copyIconSource = unifyreNativeAssets.getRenderedResource('Icon.Copy');

    return React__default.createElement(
        "div",
        { style: styles.container },
        React__default.createElement("img", {
            src: qrSource,
            alt: "qrcode" }),
        React__default.createElement(
            "div",
            { style: styles.codeContainer },
            React__default.createElement(ThemedText.P, { text: code,
                style: styles.qrLabel }),
            React__default.createElement("img", {
                style: styles.copyIcon,
                src: copyIconSource,
                alt: "icon" })
        ),
        React__default.createElement(
            "div",
            { style: styles.footer },
            React__default.createElement(
                "div",
                { style: styles.bankDepositBtnContainer },
                React__default.createElement(ThemedButton, { text: 'Bank Deposit', isSmall: true,
                    type: 'inverse' })
            ),
            React__default.createElement(
                "div",
                { style: { flex: 1 } },
                React__default.createElement(ThemedButton, { text: 'USSD Deposit',
                    isSmall: true,
                    type: 'inverse' })
            )
        )
    );
}

CoinDeposit.propTypes = {
    code: propTypes.PropTypes.string.isRequired
};

var themedStyles$n = function themedStyles(theme) {
    return {
        container: {
            backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade5),
            paddingVertical: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical),
            paddingHorizontal: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical),
            borderRadius: theme.get(unifyreReactHelper.Theme.Button.btnBorderRadius),
            marginTop: theme.get(unifyreReactHelper.Theme.Spaces.line),
            marginHorizontal: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical),
            textAlign: 'center',
            alignItems: 'center'
        },
        qrLabel: {
            color: theme.get(unifyreReactHelper.Theme.Text.infoColor)
        },
        bankDepositBtnContainer: {
            flex: 1,
            marginRight: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical)
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


  var theme = React.useContext(unifyreReactHelper.ThemeContext);
  var styles = themedStyles$o(theme);
  var resources = React.useContext(unifyreReactHelper.ResourceContext);
  var profileIconSource = unifyreNativeAssets.getRenderedResource("Icon.User.Profile");
  var arrowIconSource = unifyreNativeAssets.getRenderedResource("Icon.Arrow.Right");
  var timeFormat = unifyreNativeAssets.getRenderedResource("App.DateTime.Format");

  var itemBgColor = void 0;
  // Set list backgroundColor - must be alternate
  if (resultIndex % 2) itemBgColor = styles.itemBgGray;

  return React__default.createElement(
    "div",
    { style: _extends({}, styles.mainContainer, itemBgColor) },
    React__default.createElement(
      "div",
      { style: styles.profile },
      React__default.createElement(
        "div",
        { style: styles.iconContainer },
        React__default.createElement("img", { style: styles.icon, src: profileIconSource, alt: "icon" })
      ),
      React__default.createElement(
        "div",
        { style: styles.userProfileContainer },
        React__default.createElement(ThemedText.H4, { text: name, style: styles.nameLabel }),
        React__default.createElement(ThemedText.SMALL, { text: balance, style: styles.userBalanceLabel })
      )
    ),
    React__default.createElement(
      "div",
      { style: styles.arrowIconContainer },
      React__default.createElement("img", { style: styles.arrowIcon, src: arrowIconSource, alt: "icon" })
    )
  );
}

var themedStyles$o = function themedStyles(theme) {
  return {
    mainContainer: {
      width: "100%",
      paddingVertical: theme.get(unifyreReactHelper.Theme.List.listItemPaddingTop) * 0.5,
      paddingHorizontal: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical),
      backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade1),
      justifyContent: "flex-start",
      flexDirection: "row",
      alignItems: "flex-start"
    },
    itemBgGray: {
      backgroundColor: theme.get(unifyreReactHelper.Theme.Colors.bkgShade6)
    },
    profile: {
      flex: 5,
      flexDirection: "row"
    },
    arrowIconContainer: {
      position: "absolute",
      alignSelf: "center",
      justifyContent: "center",
      right: theme.get(unifyreReactHelper.Theme.Spaces.screenMarginVertical)
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
      fontSize: theme.get(unifyreReactHelper.Theme.Text.h4Size) - 5,
      marginTop: theme.get(unifyreReactHelper.Theme.Icon.iconBorderRadius) * 2 * -1
    }
  };
};

exports.AccountListItem = AccountListItem;
exports.BigLogo = BigLogo;
exports.Card = Card;
exports.Coin = Coin;
exports.CoinBalance = CoinBalance;
exports.CoinDeposit = CoinDeposit;
exports.Gap = Gap;
exports.Greeting = Greeting;
exports.HeaderLabel = HeaderLabel;
exports.IconLabel = IconLabel;
exports.InputGroupAddon = InputGroupAddon;
exports.InputSearch = InputSearch;
exports.InputSwitch = InputSwitch;
exports.Item = Item;
exports.List = List;
exports.ListItem = ListItem;
exports.Logo = Logo;
exports.PageTitle = PageTitle;
exports.PageTopSection = PageTopSection;
exports.Row = Row;
exports.StickyBottom = StickyBottom;
exports.ThemedButton = ThemedButton;
exports.ThemedLink = ThemedLink;
exports.ThemedText = ThemedText;
exports.UserActivity = UserActivity;
//# sourceMappingURL=index.js.map
