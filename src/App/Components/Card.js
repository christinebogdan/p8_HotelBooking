import React from "react";
import "../styles/card.scss";
import { Link } from "react-router-dom";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.cover = this.props.cover;
    this.title = this.props.title;
    this.type = this.props.type;
  }
  render() {
    return (
      <li className={this.type}>
        <Link
          to={`/accommodations/${this.id}`}
          className={`${this.type}__link`}
        >
          <div className={`${this.type}__wrap`}>
            <img src={this.cover} alt="" className={`${this.type}__img`}></img>
            <div className={`${this.type}__layer`}></div>
            <h2 className={`${this.type}__title`}>{this.title}</h2>
          </div>
        </Link>
      </li>
    );
  }
}

export default Card;
