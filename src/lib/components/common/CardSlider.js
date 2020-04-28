import React, { Component } from "react";
import { Card } from "./Card";
import { ThemeContext, Theme } from "unifyre-react-helper";
import { PropTypes } from "prop-types";

/**
 * CardSlider component -
 * provide card data or assign/create children to be used as cards
 *
 */
export default class CardSilder extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    let numOfCards = 0;
    let hasChildren = false;

    if (this.props.cards) {
      numOfCards = this.props.cards.length;
    } else {
      numOfCards = this.props.children.length;
      hasChildren = true;
    }

    this.state = {
      numOfCards: numOfCards,
      position: 1,
      hasChildren: hasChildren
    };

    this.scroll = this.scroll.bind(this);
  }

  render() {
    let theme = this.context;
    let styles = themedStyles(theme);
    let cardElements;

    if (this.state.hasChildren) {
      // Use children
      cardElements = this.props.children.map((item, index) => (
        <div style={styles.card} key={index}>
          {item}
        </div>
      ));
    } else {
      cardElements = this.props.cards.map((card, index) => (
        <div style={styles.card} key={index}>
          <Card key={index} data={card} />
        </div>
      ));
    }

    return (
      <div {...this.props} style={{ ...styles.scroll, ...this.props.style }}>
        {cardElements}
      </div>
    );
  }
}

CardSilder.propTypes = {
  cards: PropTypes.array
};

const themedStyles = function(theme) {
  return {
    card: {
      width: theme.get(Theme.Spaces.gap) * 4,
      marginLeft: theme.get(Theme.Spaces.line)
    }
  };
};
