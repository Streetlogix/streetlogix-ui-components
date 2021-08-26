import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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

const useStyles = makeStyles({
  DialogRoot: {
    textAlign: 'center',
  },
  DialogPaper: {
    padding: '20px 60px',
  },
  TitleRoot: {
    padding: 0,
  },
  MessageDialogIcon: {
    fontSize: 40,
    color: (props) => {
      if (props.type === 'success') return colors.successGreen;
      if (props.type === 'warning') return colors.warningYellow;
      if (props.type === 'error') return colors.errorRed;
    },
  },
  DialogActions: {
    justifyContent: 'center',
    padding: 0,
  },
  ButtonRoot: {
    padding: '2px 30px',
    boxShadow: 'none',
    color: (props) => {
      if (props.type === 'success') return colors.successGreen;
      if (props.type === 'warning') return colors.warningYellow;
      if (props.type === 'error') return colors.errorRed;
    },
    background: (props) => {
      if (props.type === 'success') return '#E8FFDB';
      if (props.type === 'warning') return '#FFECDB';
      if (props.type === 'error') return '#FFDCDB';
    },
  },
});

const MessageDialog = (props) => {
  const { type, message, btnText, show } = props;
  const classes = useStyles(props);

  const [showDialog, setShowDialog] = useState(false);
  const handleClose = () => {
    setShowDialog(false);
  };
  useEffect(() => {
    setShowDialog(show);
  }, [show]);

  return (
    <Dialog
      open={show}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      classes={{
        root: classes.DialogRoot,
        paper: classes.DialogPaper,
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        classes={{
          root: classes.TitleRoot,
        }}
      >
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

MessageDialog.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

MessageDialog.defaultProps = {
  type: null, // success, warning, error
  message: null,
  btnText: null,
  show: null,
};

export default MessageDialog;
