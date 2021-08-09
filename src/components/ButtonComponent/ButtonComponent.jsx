import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: '"Mulish", sans-serif',
    width: "8rem",
    height: "4rem",
  },
}));

const Wrapper = styled.div`
  padding: 0.5rem 0.5rem 0 0.5rem;

  @media (max-width: 576px) {
    .button {
      padding: 0.25rem 0.25rem 0 0.25rem;
    }

    .MuiButton-root {
      width: 4.5rem;
      height: 3rem;
      font-size: 0.7rem;
    }
  }
`;

export default function ButtonComponent({ reStart, name }) {
  const classes = useStyles();
  return (
    <Wrapper>
      <Button
        classes={{ root: classes.root }}
        variant="contained"
        color="primary"
        onClick={reStart}
      >
        {name}
      </Button>
    </Wrapper>
  );
}
