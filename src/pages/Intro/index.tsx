import { Link, RouteComponentProps } from "@reach/router";
import { Typography } from "antd";

import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const IntroPage = (props: RouteComponentProps) => (
  <div className="intro-container">
    <Typography.Title level={2}>
      Welcome to the Trivia Challenge
    </Typography.Title>
    <Typography.Title level={3}>
      You will be presented with 10 True or False questions.
    </Typography.Title>
    <Typography.Title level={4}>Can you score 100%?</Typography.Title>
    <Link to="/questions">BEGIN</Link>
  </div>
);
