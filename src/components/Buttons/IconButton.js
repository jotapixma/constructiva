import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

export const IconButton = styled(MuiButton)(({theme, secondary, w100}) => ({
  fontFamily: 'Outfit',
  width: w100 ? '100%' : 'auto',
  height: '30px',
  textTransform: 'initial',
  fontSize: '0.9rem',
  backgroundColor: 'transparent',
  // color: theme.colors.white,
  color: secondary ? theme.colors.secondary : theme.colors.primary,
  gap: '0.5rem',
  '&:hover': {
    color: secondary ? theme.colors.primary : theme.colors.secondary,
  },
  '&:disabled,&[disabled]': {
    opacity: '0.5',
    backgroundColor: theme.colors.disabled,
    color: 'rgba(0, 0, 0, 0.5)',
    cursor: 'not-allowed',
    pointerEvents: 'initial',
  },
  
}));