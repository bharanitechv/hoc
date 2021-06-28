import { Component } from "react";
import WithCategory from "../hoc/WithCategory";

class Category extends Component {
  render() {
    return (
      <div>
        Category : {this.props.name}
        {this.props.list.map((category) => {
          return <div>Category :- {category}</div>;
        })}
      </div>
    );
  }
}

export default WithCategory(2)(Category);
