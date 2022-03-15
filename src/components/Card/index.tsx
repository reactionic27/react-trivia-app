import { Button, Typography } from "antd";
import cx from "classnames";

import "./style.css";

type Props = {
  title: string;
  handleClick: (args: string) => void;
};

export const QuestionCard = ({ title, handleClick }: Props) => (
  <div className={cx("question-card")}>
    <Typography.Title level={3}>
      <div dangerouslySetInnerHTML={{ __html: title }}></div>
    </Typography.Title>
    <Button className={cx("btn-answer")} onClick={() => handleClick("True")}>
      True
    </Button>
    <Button className={cx("btn-answer")} onClick={() => handleClick("False")}>
      False
    </Button>
  </div>
);
