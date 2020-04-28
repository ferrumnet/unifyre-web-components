import React, { Component } from "react";

export default class ScaledImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: { uri: this.props.uri }
        };
    }

    componentWillMount() {
        getSize(this.props.uri, (width, height) => {
        if (this.props.width && !this.props.height) {
            this.setState({
                width: this.props.width,
                height: height * (this.props.width / width)
            });
        } else if (!this.props.width && this.props.height) {
            this.setState({
                width: width * (this.props.height / height),
                height: this.props.height
            });
        } else {
            this.setState({ width: width, height: height });
        }
        });
    }

    render() {
        return (
            <img
                src={this.state.source}
                style={{...this.props.style, height: this.state.height, width: this.state.width}}
            />
        );
    }
}
