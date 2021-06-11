import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    position: 'relative',
    top: '100px',
    // left:'150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper1: {
    width: '300px',
    height: '440px',
    position: 'absolute',
    top: '18%',
    left: '10%',
  },
  phoneimg: {
    height: '90%',
    width: '40%',
    position: 'absolute',
    marginLeft: '0',
    left: '0',
  },
  ipad: {
    height: '50%',
    width: '70%',
    position: 'absolute',
    marginLeft: '0',
    zIndex:'-1',
  },
  devices:{
    width:'600px',
    height:'500px',
    position:'absolute',
    left:'150px',
    top:'110px'

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  contain:{
    marginTop:'0',
  },
  
}));