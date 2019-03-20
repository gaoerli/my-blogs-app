import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

export default class LogInAndOut extends Component {
  render() {
    const { data, events, flag } = this.props;

    // 事件分解
    const { handleChange, handleSumbit } = events;

    return (
      <div>
        <div className="form-group ">
          <h1 className="col-sm-offset-2 col-md-10">{flag.sup}</h1>
        </div>
        <form className="form-horizontal" id={flag.id} onSubmit={handleSumbit}>
          {data.map(
            (
              { type, classNa, id, placeholder, value, name, ...res },
              index
            ) => (
              <div className="form-group" key={index}>
                <label htmlFor={id} className="col-md-2 control-label">
                  {name}:
                </label>
                <div className="col-sm-5">
                  <input
                    type={type}
                    className={classNa}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                  {res.iconType && (
                    <i className={res.iconType} onClick={handleChange} />
                  )}
                </div>
              </div>
            )
          )}

          <div className="form-group">
            <div className="col-sm-offset-2 col-md-10 ">
              <button type="submit" className="btn btn-primary col-md-2 ">
                {flag.sup}
              </button>
            </div>
          </div>
        </form>
        <div className="form-group">
          <div className="col-sm-offset-2 col-md-5">
            {flag.hint}，<Link to={flag.linkTo}>点击{flag.sub}</Link>
          </div>
        </div>
      </div>
    );
  }
}
