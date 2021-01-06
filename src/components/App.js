import React, { Component } from "react";
import { connect } from "react-redux";
import { createData } from "../actions/data";
import NameContainer from "./NameContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onEnter = this._onEnter.bind(this);
    this.state = {
      searchTerm: "",
      showResults: false,
    };
  }

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  dynamicSearch = () => {
    const { data } = this.props;
    if (this.state.searchTerm === "") return [];
    return data.filter((name) =>
      name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };
  _onFocus = () => {
    this.setState({ showResults: true });
  };
  _onBlur = () => {
    this.setState({ searchTerm: "", showResults: false });
  };
  _onEnter = (e) => {
    const { data } = this.props;
    if (
      e.key === "Enter" &&
      this.state.searchTerm !== "" &&
      !data.includes(this.state.searchTerm.toLowerCase())
    ) {
      this.props.dispatch(createData(this.state.searchTerm));
      this.setState({ searchTerm: "", showResults: true });
    }
  };

  render() {
    const { data } = this.props;
    console.log("Props", this.props);
    console.log(data);
    return (
      <div className="App">
        <div className="searchbox">
          <FontAwesomeIcon icon={faSearch} />
          <input
            name=""
            type="text"
            placeholder="search"
            value={this.state.searchTerm}
            onChange={this.editSearchTerm}
            class="search"
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            onKeyDown={this._onEnter}
          />
        </div>
        {this.state.showResults && this.dynamicSearch().length !== 0 ? (
          <div className="searchresults">
            <NameContainer
              names={this.dynamicSearch()}
              searchTerm={this.state.searchTerm}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.data,
  };
}
export default connect(mapStateToProps)(App);
