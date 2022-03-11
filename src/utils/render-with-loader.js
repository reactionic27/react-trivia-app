import React from "react";
import { node } from "prop-types";
import { SwitchTransition, Transition } from "react-transition-group";
import { LoadingSpinner } from "../components/loading-spinner";

const DURATION = 200;

const FadeTransition = ({ children, ...rest }) => (
  <Transition {...rest}>{children}</Transition>
);

FadeTransition.propTypes = {
  children: node.isRequired,
};

export const renderWithLoader = (isHidden, Component, props) => (
  <SwitchTransition mode="out-in">
    <FadeTransition
      key={isHidden ? "hiddenState" : "Ui"}
      mountOnEnter
      timeout={DURATION}
      unmountOnExit
    >
      {isHidden ? <LoadingSpinner /> : <Component {...props} />}
    </FadeTransition>
  </SwitchTransition>
);
