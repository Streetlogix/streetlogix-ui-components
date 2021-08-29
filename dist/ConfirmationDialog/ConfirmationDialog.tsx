import React, { useState, useEffect } from 'react';

import {
  makeStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { Help } from '@material-ui/icons';

// UTILS/HELPERS/STYLES
import { colors } from '../utils/constants';

import { ConfirmationDialogProps } from './ConfirmationDialog.types';

const useStyles = makeStyles({
  DialogRoot: {
    textAlign: 'center',
  },
  DialogPaper: {
    minWidth: 400,
  },
  MessageDialogIcon: {
    fontSize: 40,
    color: colors.slxBlue,
  },
  ButtonRoot: {
    boxShadow: 'none',
    color: colors.slxBlue,
  },
});

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  message,
  confirmBtnText,
  cancelBtnText,
  show,
  handleCancel,
  handleConfirm,
}) => {
  const classes = useStyles();
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    setShowDialog(show);
  }, [show]);

  return (
    <Dialog
      open={showDialog}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      classes={{
        root: classes.DialogRoot,
        paper: classes.DialogPaper,
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <Help
          classes={{
            root: classes.MessageDialogIcon,
          }}
        />
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCancel}
          disableRipple={true}
          classes={{
            root: classes.ButtonRoot,
          }}
        >
          {cancelBtnText}
        </Button>
        <Button
          onClick={handleConfirm}
          disableRipple={true}
          classes={{
            root: classes.ButtonRoot,
          }}
        >
          {confirmBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
