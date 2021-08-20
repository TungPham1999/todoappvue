import React, { Component } from "react";
import TestExamTwo from "../TestExamTwo";
import TestExamOne from "../TestExamOne";

class Tab extends Component {
  components = {
    one: TestExamOne,
    two: TestExamTwo,
  };
  render() {
    const TagName = this.components[this.props.tab.component || "one"];
    return <TagName />;
  }
}
export default Tab;
