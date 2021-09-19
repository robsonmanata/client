import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';


export default makeStyles((theme) => ({
  appBar: {
    margin: '0 0 30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    boxShadow: 'none',
    position:'fixed',
    
    
    
  },
  heading: {
    
    textDecoration: 'none',
    fontFamily:'Pacifico',
    fontSize:'30px',
    color: 'red',
    
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    // width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: '#c5a880',
  },
  logout: {
backgroundColor:'black',
color:'white',
  },
  "@media (max-width: 700px)": {
    heading: {
      color: "black",
      fontSize:'15px',
      zIndex:"1",

    },
    userName: {
      fontSize:'10px',
    },
    profile: {
      width: '220px',
    },
    logout: {
      fontSize:'10px',
      padding: '6px 0 6px 0',
        },
    upload: {
      minWidth: '30px'
    },
    appBar: {
      padding: '10px 10px', 
      width: '300px',
    },
    image: {
      marginLeft: '0px',
      width: '30px',
      height: '30px',
    },
    toolbar: {
paddingLeft: '0px',
    },
  }
}));