import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { css } from "emotion";
import Logo from "../common/Logo";
import Article from "../common/Article";
import Heading from "../common/Heading";
import Input from "../common/Input";
import Button from "../common/Button";
import Checkbox from "../common/Checkbox";

const headerStyle = css``;

const labelStyle = css`
  align-self: start;
  margin-bottom: -14px;
  margin-left: 8px;
`;
const Label = ({ children }) => <label class={labelStyle}>{children}</label>;

export default function ({ clientPayload }) {
  function handleReload(e) {
    e.preventDefault();
  }

  console.log("here=>", clientPayload);

  return (
    <Article ariaLabel="Your Wallet">
      <Heading number={2}>Your Wallet</Heading>
      <p>Recent transactions:</p>

      <Button type="button" disabled primary>
        Send
      </Button>
      <Button type="button" primary linkTo="/receive">
        Receive
      </Button>
    </Article>
  );
}
