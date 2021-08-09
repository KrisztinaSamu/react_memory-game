import React from "react";
import { Dialog, DialogActions, DialogTitle, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFF1C1",
    fontFamily: '"Mulish", sans-serif'
  }
});

const Finish = ({ startModal, handleGameStart }) => {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        id="alert-dialog"
        open={startModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" classes={{ root: classes.root }}>
          Hello! Let the game begin!
        </DialogTitle>
        <DialogActions classes={{ root: classes.root }}>
          <Button onClick={handleGameStart} variant="contained" color="primary">
            Start
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Finish;
