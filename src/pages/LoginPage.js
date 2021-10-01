//https:github.com/bezkoder/react-redux-axios-crud/blob/master/src/components/add-tutorial.component.js

import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Skeleton, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginAction } from "../actions/loginAction";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./LoginPage.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {};
  onFinish = (values) => {
    // this.props.login(values);

    // const logindata = this.state;
    // console.log("state= " + logindata.username);
    this.props.logins(values);
    // const { username, password } = this.state;
    // if (username && password) {
    //   this.props.login(username, password);
    // }
  };
  onFinishFailed = (values) => {
    console.log(values);
  };
  render() {
    // const { data } = this.props;
    // console.log("data.login - " + data.login);
    return (
      <>
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ minHeight: "100vh" }}
        >
          <Col>
            <Card>
              <Link to={"/counter"}>Counter</Link>
              <Form
                name="login"
                className="login-form"
                initialValues={this.state}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please enter Username!" }
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Password!"
                    }
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                  Or <a href="">register now!</a>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state
  };
};
const actionCreators = (dispatch) => {
  return {
    logins: (values) => dispatch(loginAction(values))
  };
};
export default connect(mapStateToProps, actionCreators)(LoginPage);
