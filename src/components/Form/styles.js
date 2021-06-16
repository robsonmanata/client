import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop:'7%',
    position: 'fixed',
    top:"0",
    marginRight:"10px",
    zIndex:'4',
  },
  input: {
    // border: '1px solid #c5a880',
    borderRadius:'5px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: 'black',
    color: 'white',

  },
  buttonclear:{
    backgroundColor: '#c5a880',
    color: 'white',
  },
  "@media (max-width: 700px)": {
    paper: {
      marginTop:'22%',
    },
  },
}));