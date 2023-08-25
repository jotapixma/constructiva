import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';


export const Button = styled(MuiButton)(({theme, secondary, w100, small, uppercase, hoverWhite, opacity}) => ({
  fontFamily: 'Roboto',
  opacity: opacity ? '80%' : 1,
  width: w100 ? '100%' : 'auto',
  height: small ? '30px' : '40px',
  lineHeight: '120%',
  textTransform: uppercase ? 'uppercase' : 'initial',
  fontSize: small ? '0.850rem' : '0.950rem',
  backgroundColor: secondary ? theme.colors.secondary : theme.colors.white,
  color: secondary ? theme.colors.white : theme.colors.secondary ,
  gap: '0.5rem',
  padding: '0.5rem 1rem',
  '&:hover': {
    backgroundColor: secondary ? theme.colors.primary : theme.colors.secondary,
    color: secondary ? theme.colors.secondary : theme.colors.white
  },
  '&:disabled,&[disabled]': {
    backgroundColor: theme.colors.disabled,
    color: '#5A6474',
    cursor: 'not-allowed',
    pointerEvents: 'initial',
  },  
}));