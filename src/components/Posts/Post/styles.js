import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  media: {
    paddingTop: '56.25%',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    // position: 'absolute',
    top: '0px',
    left: '0px',
    color: 'black',
     backgroundColor: 'white',
     width:'100%',
  },
  overlay2: {
    position: 'absolute',
    top: '4%',
    right: '1%',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 20px 0 20px',
  },
  title: {
    padding: '0 16px 0 16px',
    marginBottom:'0',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor:'#c5a880',
    top: '5%',
    left: '2%',
  },
  name:{
   paddingLeft:'5px',
   left:'30%',
   bottom:'25%',
  },
  message: {
    padding: '0 16px 0 16px'
  }
}));