import React, { Component } from 'react';

class RatingComponent extends React.Component {
    state = { 
        isHover:false
    }

    handleHover = () =>{
        this.setState({ isHover: true })
    }

    handleOut = () =>{
        this.setState({ isHover: false }) 
    }

    getClassName = () =>{
        const { israted } = this.props;
        const { isHover } = this.state;
        let className = israted ? "bi bi-star-fill":"bi bi-star"
        className += isHover ? " text-primary" : ""
        return className;

    }
    render() { 
        const { handleToggleClick,id } = this.props
        return(
            <i 
            onMouseOver={this.handleHover} 
            onMouseOut={ this.handleOut } 
            onClick={() =>handleToggleClick(id)}
            className={ this.getClassName() }></i>
        );
    }
}
 
export default RatingComponent;