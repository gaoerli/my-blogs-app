import React, { useState, useEffect, Component } from "react";
import API from "../api";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listVal: []
    };
  }

  // 初始化
  componentDidMount() {
    API.getProducts(data => this.setState({ listVal: data }));
  }

  // 更新state
  updateState = ($id, flag, callback) => {
    const filterVal = this.state.listVal.filter(item => {
      if (item.id == $id) {
        switch (flag) {
          case "add":
            item.zanNum += 1;
            return item;

          case "cancal":
            item.zanNum -= 1;
            return item;

          default:
            return item;
        }
      }
    })[0];
    const parmas = { zanUser: this.props.value.uId, type: true, ...filterVal }; //参数

    callback(parmas);
  };

  // 更新作品列表
  updataProdect = parmas => {
    API.updateProduct(parmas, res => this.setState({ listVal: res }));
  };

  // 删除作品
  removeProduct = parmas => {
    API.removeProduct(parmas, res => this.setState({ listVal: res }));
  };

  // 点击事件
  handleClick = event => {
    const $target = event.target;
    const $id = $target.id;
    const $name = $target.className;
    switch ($name.indexOf("add")) {
      case -1:
        switch ($name.indexOf("remove")) {
          case -1:
            this.updateState($id, "cancal", this.updataProdect);
            break;

          default:
            this.updateState($id, "remove", this.removeProduct);
            break;
        }
        break;

      default:
        this.updateState($id, "add", this.updataProdect);
        break;
    }
  };

  render() {
    const { listVal } = this.state;
    return (
      <div className="container">
        <div className="row col-xs-12 col-sm-12">
          {listVal.length > 0 &&
            listVal.map(({ id, moment, name, uId, uName, zanNum }) => (
              <div
                key={id}
                className="col-xs-6 col-lg-4"
                style={{ padding: "0px" }}
              >
                <h2>{name}</h2>
                <p>{uName}</p>

                <p>{zanNum}</p>
                <p>
                  <a
                    className="btn btn-default add"
                    href="javascript:;"
                    role="button"
                    id={id}
                    onClick={this.handleClick}
                  >
                    点赞
                  </a>
                  <a
                    className="btn btn-default remove"
                    href="javascript:;"
                    role="button"
                    id={id}
                    onClick={this.handleClick}
                  >
                    删除
                  </a>
                  <a
                    className="btn btn-default cancel"
                    href="javascript:;"
                    role="button"
                    id={id}
                    onClick={this.handleClick}
                  >
                    取消点赞
                  </a>
                </p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
