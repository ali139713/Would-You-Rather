import * as React from "react";

export default class ProgressBar extends React.Component {
  render() {
    let { percent } = this.props;
    let valuemin = percent.toString();
    let widthStyle = valuemin + "%";
    return (
      <div>
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: `${widthStyle}` }}
            aria-valuenow={widthStyle}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  }
}
