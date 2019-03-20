// 所有数据处理部分
import * as axios from "axios";

const URL = "http://10.18.204.85:30/";
const GETPRODUCTS = URL + "products";
const UPDATEPRODUCT = URL + "updateProduct";
const REMOVEPRODUCT = URL + "removeProduct";

//默认配置
// axios.defaults.baseURL = "http://api.exmple.com";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["content-Type"] =
  "appliction/x-www-form-urlencoded";

const API = {
  sigIn: (type, callback) => {
    axios
      .post("user/tokenLogin")
      .then(res => {
        console.log("res :", res);

        // console.log(response.data);
        // this.userData.userId = response.data.userData.id;
        // this.userData.userName = response.data.userData.userName;
        // this.userData.zanProductionId = response.data.userData.zanProductionId;
        // if (response.data.userData.sendProductionId != null) {
        //   this.userData.sendProductionId = response.data.userData.sendProductionId.split(
        //     ","
        //   );
        // } else {
        //   this.userData.sendProductionId = null;
        // }
        // this.isLogin = true;
        // console.log(response.data.token)
        // window.localStorage.setItem("token", response.data.token);
      })
      .catch(error => {
        console.log(error);
      });
    // const formData = $("#sigin").target
    // console.log("formData :", type);
  },

  // 获取列表
  getProducts: callback => {
    axios.get(GETPRODUCTS).then(
      res => {
        console.log(res);
        callback(res.data.data);
      },
      error => {
        console.log("error", error);
      }
    );
  },

  // 更新作品列表
  updateProduct: (parma, callback) => {
    // 暂时报错
    // axios.post(parma, UPDATEPRODUCT).then(
    //   res => {
    //     callback(res.data);
    //   },
    //   errors => {
    //     console.log(errors);
    //   }
    // );
    let resData = [];
    window.$.ajax({
      type: "post",
      async: false,
      data: parma,
      url: UPDATEPRODUCT,
      success: res => {
        resData = res.data;
      },
      errors: error => {
        console.log(error);
      }
    });

    callback(resData);
  },

  // 删除作品
  removeProduct: (parma, callback) => {
    debugger;
    let resData = [];
    window.$.ajax({
      type: "post",
      async: false,
      data: parma,
      url: REMOVEPRODUCT,
      success: res => {
        resData = res.data;
      },
      errors: error => {
        console.log(error);
      }
    });

    callback(resData);
  }
};

export default API;
