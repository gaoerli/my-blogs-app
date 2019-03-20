import React, { Component } from "react";
import LogInAndOut from "./logInAndOut";
import API from "../api";

// const App = () => {
//   return <h1>Hello React2</h1>;
// };

// export { App };

class App extends Component {
  state = {
    data: [
      {
        type: "text",
        name: "用户名",
        classNa: "form-control",
        id: "name",
        placeholder: "请输入用户名",
        value: ""
      },
      {
        type: "password",
        name: "密码",
        classNa: "form-control",
        id: "password",
        placeholder: "请输入密码",
        value: "",
        iconType: "eyeIcon glyphicon glyphicon-eye-close"
      }
    ]
  };

  handleChange = event => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    const iconType = target.className;

    const data = this.state.data.filter(item => {
      // 修改数值
      if (id && item.id === id) {
        item.value = value;
      }

      // 改变icon属性
      if (item.iconType === iconType) {
        if (item.iconType.indexOf("glyphicon-eye-close") > -1) {
          item.iconType = "eyeIcon glyphicon glyphicon-eye-open";
          item.type = "text";
        } else {
          item.iconType = "eyeIcon glyphicon glyphicon-eye-close";
          item.type = "password";
        }
      }

      return item;
    });

    this.setState({
      data
    });
  };

  // 提交函数
  handleSumbit = event => {
    event.preventDefault();
    const submitTarget = event.target;
    const flagId = submitTarget.id; //表单id
    const formData = {}; //表单数据
    this.state.data
      .map(item => {
        const json = {};
        json.id = item.id;
        json.value = item.value;
        return json;
      })
      .map(e => {
        formData[e.id] = e.value;
      });

    console.log("obj :", formData);

    if (flagId === "sigIn") {
      API.sigIn(formData, res => console.log("res", res));
    }

    console.log("flagId :", flagId);
    console.log("formData :", formData);
    // API.getForm(flagId);
  };

  render() {
    const { data } = this.state;
    const eventList = {
      handleChange: this.handleChange,
      handleSumbit: this.handleSumbit
    };

    return (
      <LogInAndOut data={data} events={eventList} flag={this.props.flag} />
    );
  }
}

// 登陆
const Sigin = () => (
  <App
    flag={{
      id: "sigIn",
      sup: "登陆",
      sub: "注册",
      hint: "还没有账号",
      linkTo: "./register"
    }}
  />
);
// 注册
const Register = () => (
  <App
    flag={{
      id: "register",
      sup: "注册",
      sub: "登陆",
      hint: "已有账号",
      linkTo: "./sigin"
    }}
  />
);

export { Register, Sigin };
