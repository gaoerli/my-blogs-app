import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../index";
import ProductList from "./ProductList";

// 顶部导航
const NavList = ({ value }) => {
  const { name, isSignin, uId } = value;
  let filterData;

  isSignin &&
    (filterData = [
      { link: "sigin", name: "登陆", isShow: false },
      { link: "sigin", name: "退出", isShow: true },
      { link: "register", name: "注册", isShow: false }
    ].filter(item => item.isShow === isSignin));

  const defaultName = "默认用户名";

  return (
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a
            className="navbar-brand"
            id={uId ? uId : ""}
            name={name ? name : ""}
          >
            {name ? name : defaultName}
          </a>
        </div>

        <div
          id="navbar"
          className="navbar-collapse collapse"
          aria-expanded="false"
          style={{ height: "1px" }}
        >
          <ul className="nav navbar-nav">
            {filterData.map((item, index) => (
              <li key={index}>
                <Link to={item.link} data-toggle="modal" data-whatever="@mdo">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// 作品列表集合
const ArticleList = () => (
  <div className="container">
    <div className="row col-xs-12 col-sm-12">
      <div className="col-xs-6 col-lg-4" style={{ padding: "0px" }}>
        <h2>{"item.userName"}</h2>
        <p>{"item.describeMsg"}</p>
        <p>{"item.zan"}</p>
        <p>
          <a className="btn btn-default" href="javascript:;" role="button">
            点赞
          </a>
          <a className="btn btn-default" href="javascript:;" role="button">
            删除
          </a>
          <a className="btn btn-default" href="javascript:;" role="button">
            取消点赞
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-lg-4">
        <h2>{"item.userName"}</h2>
        <p>{"item.describeMsg"}</p>
        <p>{"item.zan"}</p>
        <p>
          <a className="btn btn-default" href="javascript:;" role="button">
            点赞
          </a>
          {/* <a className="btn btn-default" href="javascript:;" role="button">
          删除
        </a> */}
          <a className="btn btn-default" href="javascript:;" role="button">
            取消点赞
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-lg-4">
        <h2>{"item.userName"}</h2>
        <p>{"item.describeMsg"}</p>
        <p>{"item.zan"}</p>
        <p>
          <a className="btn btn-default" href="javascript:;" role="button">
            点赞
          </a>
          {/* <a className="btn btn-default" href="javascript:;" role="button">
          删除
        </a> */}
          <a className="btn btn-default" href="javascript:;" role="button">
            取消点赞
          </a>
        </p>
      </div>
    </div>
  </div>
);

const TitleMsg = props => {
  const { isLogin, ...res } = props;
  return (
    <div className="container">
      <div className="row row-offcanvas row-offcanvas-right">
        <div className="col-xs-12 col-sm-12">
          <p className="pull-right visible-xs">
            <button
              type="button"
              className="btn btn-primary btn-xs"
              data-toggle="offcanvas"
            >
              Toggle nav
            </button>
          </p>
          {isLogin ? (
            <div>
              <div className="jumbotron">
                <h1>Hello, {res.userName}</h1>
                <p>请点赞~</p>
                <form className="form-inline">
                  <div className="form-group">
                    {/* <label htmlFor="article">文章</label> */}
                    <input
                      type="text"
                      className="form-control"
                      id="article"
                      placeholder="请输入文章"
                    />
                  </div>
                  <button className="btn btn-primary">发布</button>
                </form>
              </div>{" "}
              <ArticleList />
            </div>
          ) : (
            <div>
              <div className="jumbotron">
                <h1>Hello, 请登录!</h1>
                <p>登录了才能点赞哦~</p>
              </div>
              <div className="row" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PageData = () => {
  return (
    <div className="app">
      <UserContext.Consumer>
        {value => {
          return (
            <>
              <NavList value={value} />
              <ProductList value={value} />
              {/* <ArticleList value={value} /> */}
            </>
          );
        }}
      </UserContext.Consumer>
      {/* 顶部导航 */}
      {/* <TitleMsg isLogin={true} userName="gao" /> */}
    </div>
  );
};

export default PageData;
