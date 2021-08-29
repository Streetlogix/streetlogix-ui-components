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
import { CheckCircle, Warning, Cancel } from '@material-ui/icons';

// UTILS/HELPERS/STYLES
import { colors } from '../utils/constants';

import { MessageDialogProps } from './MessageDialog.types';

const useStyles = makeStyles({
  DialogRoot: {
    textAlign: 'center',
  },
  DialogPaper: {
    minWidth: 400,
  },
  MessageDialogIcon: {
    fontSize: 40,
    color: (props: any) => {
      if (props.type === 'success') return colors.successGreen;
      if (props.type === 'warning') return colors.warningYellow;
      if (props.type === 'error') return colors.errorRed;
    },
  },
  DialogActions: {
    justifyContent: 'center',
  },
  ButtonRoot: {
    padding: '2px 30px',
    boxShadow: 'none',
    color: (props: { type: string }) => {
      if (props.type === 'success') return colors.successGreen;
      if (props.type === 'warning') return colors.warningYellow;
      if (props.type === 'error') return colors.errorRed;
    },
    background: (props: { type: string }) => {
      if (props.type === 'success') return '#E8FFDB';
      if (props.type === 'warning') return '#FFECDB';
      if (props.type === 'error') return '#FFDCDB';
    },
  },
});

const MessageDialog: React.FC<MessageDialogProps> = ({
  type,
  message,
  btnText,
  show,
  handleClose,
}) => {
  const classes = useStyles({ type });
  const [showDialog, setShowDialog] = useState(false);
  useEffect(() => {
    setShowDialog(show);
  }, [show]);

  return (
    <Dialog
      open={showDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      classes={{
        root: classes.DialogRoot,
        paper: classes.DialogPaper,
      }}
    >
      <DialogTitle id="alert-dialog-title">
        {type && type === 'success' ? (
          <CheckCircle
            classes={{
              root: classes.MessageDialogIcon,
            }}
          />
        ) : null}
        {type && type === 'warning' ? (
          <Warning
            classes={{
              root: classes.MessageDialogIcon,
            }}
          />
        ) : null}
        {type && type === 'error' ? (
          <Cancel
            classes={{
              root: classes.MessageDialogIcon,
            }}
          />
        ) : null}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        classes={{
          root: classes.DialogActions,
        }}
      >
        <Button
          onClick={handleClose}
          variant="contained"
          disableRipple={true}
          classes={{
            root: classes.ButtonRoot,
          }}
        >
          {btnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MessageDialog;
