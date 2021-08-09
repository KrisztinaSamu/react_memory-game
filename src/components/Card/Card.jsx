import React from "react";
import "./Card.css";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: "50vh",
    right: 0,
    left: "25vw",
    zIndex: 1,
    border: "1px solid",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    width: "50vw",
  },
}));

export default function Card({ key, className, onClick, img, isActive }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(true);
  };
  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <div key={key} className={className} onClick={onClick}>
        {open && !isActive ? (
          <div className={classes.dropdown}>Press the Restart button!</div>
        ) : null}

        <div className="inner">
          <div className="front">
            <img src={img} alt="frontimg" className="img" />
          </div>
          <div className="back" onClick={handleClick}></div>
        </div>
      </div>
    </ClickAwayListener>
  );
}
