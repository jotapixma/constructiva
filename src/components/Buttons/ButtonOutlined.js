import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

export const ButtonOutlined = styled(MuiButton)(({theme, secondary, w100, small}) => ({
  fontFamily: 'Outfit',
  width: w100 ? '100%' : 'auto',
  height: small ? '30px' : '40px',
  textTransform: 'initial',
  fontSize: small ? '0.8rem' : '0.950rem',
  fontWeight: '500',
  backgroundColor: 'transparent',
  lineHeight: '120%',
  border: small ? '1px solid' : '2px solid',
  borderColor: secondary ? theme.colors.secondary : theme.colors.primary,
  color: secondary ? theme.colors.secondary: theme.colors.primary,
  gap: '0.5rem',
  '&:hover': {
    backgroundColor: secondary ? theme.colors.primary : theme.colors.primary,
    color: secondary ? theme.colors.secondary: theme.colors.white,
    svg: {
      color: theme.colors.white
    }
  },
  '&:disabled,&[disabled]': {
    opacity: '0.5',
    backgroundColor: theme.colors.disabled,
    color: 'rgba(0, 0, 0, 0.5)',
    cursor: 'not-allowed',
    pointerEvents: 'initial',
  },
  'svg': {
    color: 'red',
    fontSize: small ? '0.8rem' : '1rem'
  }
  
}));