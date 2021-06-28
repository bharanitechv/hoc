import { Component } from "react";
function WithCategory(limit) {
    return function (WrapperComponent) {
      return class extends Component {
        constructor(props) {
          super(props);
          this.state = {
            list: [
              "category1",
              "category2",
              "category3",
              "category4",
              "category5",
            ],
          };
        }
        render() {
        const list = this.state.list.slice(0, limit)
          return (
            <div>
              <h2>HOC</h2>
              <WrapperComponent {...this.props} list={list}/>
            </div>
          );
        }
      };
    };
}

export default WithCategory;
