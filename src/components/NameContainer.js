import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class NameContainer extends Component {
  render() {
    var list = this.props.names.map((name) => (
      <li>
        <FontAwesomeIcon icon={faSearch} />{" "}
        <span className="left-span">
          {name
            .toLowerCase()
            .substring(
              0,
              name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase())
            )}
        </span>
        <span className="middle-span">
          {name
            .toLowerCase()
            .substring(
              name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()),
              name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) +
                this.props.searchTerm.length
            )}
        </span>
        <span className="right-span">
          {name
            .toLowerCase()
            .substring(
              name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) +
                this.props.searchTerm.length
            )}
        </span>
      </li>
    ));
    return <div>{list}</div>;
  }
}

export default NameContainer;
