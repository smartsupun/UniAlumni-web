import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
 
    // margin: '0px 0px 30px 0px ',
   
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
 
  },
  heading: {
    color: 'rgba(0,133,255, 1)',
    textDecoration: 'none',
    paddingLeft:'5px'
  },
  tabContainer: {
    padding: '0px 30px ',
  },

  tabs: {
    color: 'rgba(0,0,0, 1)',
    textDecoration: 'none',
    padding:'20px'
  },

  image: {
    marginLeft: '15px',
  },
  toolbar: {
   
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent:'start',
    width: '250px',
    marginRight:'30px'

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
    backgroundColor: deepPurple[500],
  },
}));



