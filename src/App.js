import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 15;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pagesize={this.pageSize}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pagesize={this.pageSize}
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pagesize={this.pageSize}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pagesize={this.pageSize}
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pagesize={this.pageSize}
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pagesize={this.pageSize}
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pagesize={this.pageSize}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
