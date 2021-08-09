import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFF1C1",
    fontFamily: '"Mulish", sans-serif',
  },
});

const Finish = ({ handleReStart, showModal, currentTime }) => {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        id="alert-dialog"
        open={showModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" classes={{ root: classes.root }}>
          Congratulations, You Won!
        </DialogTitle>
        <DialogContent classes={{ root: classes.root }}>
          Your playing time: {`${currentTime}`} .
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions classes={{ root: classes.root }}>
          <Button onClick={handleReStart} variant="contained" color="primary">
            Restart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Finish;
