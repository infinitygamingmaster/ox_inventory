import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Slide, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Locale } from '../../store/locale';
import { Notify } from '../utils/Notifications';
import React from 'react';
import { TransitionProps } from '@mui/material/transitions';

interface Props {
  infoVisible: boolean;
  setInfoVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UsefulControls: React.FC<Props> = ({ infoVisible, setInfoVisible }) => {
  return (
    <Dialog
      open={infoVisible}
      fullWidth
      maxWidth={'xs'}
      onClose={() => setInfoVisible(false)}
      TransitionComponent={Transition}
    >
      <DialogTitle>
        <Typography fontSize={18}>Useful Controls</Typography>
        <IconButton
          aria-label="close"
          onClick={() => setInfoVisible(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            borderRadius: '4px',
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack>
          <p>[RMB] - {Locale.ui_rmb}</p>
          <p>[CTRL + LMB] - {Locale.ui_ctrl_lmb}</p>
          <p>[SHIFT + Drag] - {Locale.ui_shift_drag}</p>
          <p>[CTRL + SHIFT + LMB] - {Locale.ui_ctrl_shift_lmb}</p>
          <p>[ALT + LMB] - {Locale.ui_alt_lmb}</p>
          <p>[CTRL + C] - {Locale.ui_ctrl_c}</p>
        </Stack>
      </DialogContent>
      <DialogActions>
        <span onClick={() => Notify({ text: 'Made with 🐂 by the Overextended team' })}>🐂</span>
      </DialogActions>
    </Dialog>
  );
};

export default UsefulControls;
