import React, { Component } from 'react';
import { makeStyles, InputBase, AppBar, IconButton, Toolbar, MenuIcon, Typography, Button, Avatar, List, ListItem, ListItemIcon, ListItemText, Drawer, Hidden, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tabs, Tab, Box, TableFooter } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import {HomeIcon, SettingsIcon, TransIcon, CardIcon} from './svgIcons'

const Images = require('./imports').Images

const useStyles = makeStyles({
  primary: {
    fontSize: 14,
    fontFamily: "Titillium",
  },
  inputStyle:{color:'#212529', fontSize:16},
  disabledInput:{backgroundColor:'#F8F8F9'},
  tableHead:{
    fontFamily:'Titillium', color:'#81838C', fontSize:14
  },
  tableBody:{
    fontFamily:'Titillium', color:'#131523', fontSize:14
  },
  titlelabel:{
    fontFamily:'Titillium', color:'#242131', fontSize:16, fontWeight:'bold', marginBottom:15
  },
  imgCircle:{
    backgroundColor:'#FFF', display:'flex', borderRadius:40, width:48, height:48, justifyContent:'center', alignItems:'center' 
  },
  tabLabel:{
    minWidth:'unset', fontFamily:'Titillium', fontSize:16, color:"#656B71",  padding:"6px 14px", marginRight:10, marginLeft:10, minHeight:'unset', textTransform:'unset'
  },
  tabBody:{
    padding:0,
    paddingTop:20
  },
  indicator:{
    backgroundColor:'#5531EE'
  },
  selectedTab:{
    color: '#5531EE',
  }
});


function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

function createData(title, placeholder, disabled) {
  return { title, placeholder, disabled };
}

const rows = [
  createData('First Name', 'Usman', false),
  createData('Last Name', 'Abiola', false),
  createData('Email', 'Abiola@gmail.com', true),
  createData('Phone Number', '09037937897', true),
  createData('Date Of Birth', 'DD/MM/YYYY', false),
  createData('Nationality', 'Nigeria', false),
  createData('Occupation', 'Enter your profession', false),
];

const passwordrows = [
  createData('Current Password', '**********', true),
  createData('New Password', '*******', false),
  createData('Confirm New Password', '*******', false),
];

const Summary = props => {
  const classes = useStyles();
  return(
    <div style={{width:'100%', flexGrow:1}}>
      <Tabs value={props.value} onChange={props.handleChange} variant="scrollable"
          scrollButtons="auto" classes={{
            indicator:classes.indicator
          }}
          aria-label="scrollable auto tabs example">
        <Tab className={classes.tabLabel} classes={{selected: classes.selectedTab}} label="Profile" {...a11yProps(0)} />
        <Tab className={classes.tabLabel}  classes={{selected: classes.selectedTab}} label="Settings" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={props.value} index={0}>
        <div style={{fontFamily:'Titillium', fontWeight:'bold', fontSize:16, marginBottom:4, color:'#131523'}}>Profile Details</div>
        <div style={{fontFamily:'Titillium', color:'#5A607F', fontSize:14}}>Enter your profile information</div>
        <div style={{marginTop:45, marginBottom:50, display:'flex', alignItems:'center'}}>
          <div style={{display:"flex", alignItems:'center', justifyContent:'center', textAlign:'center', fontWeight:'bold', color:'#FFFCF9', fontSize:16, height:64, width:64, borderRadius:10, backgroundColor:'#362773'}}>UA</div>
          <div style={{marginLeft:20}}>
            <div style={{fontFamily:'Titillium', fontWeight:'bold', fontSize:14, marginBottom:4, color:'#353535'}}>Update Profile Image</div>
            <div style={{fontFamily:'Titillium', color:'#656B71', fontSize:12}}>Recommends 1:1, jpg, jpeg, png</div>
          </div>
          <div style={{display:"flex", alignItems:'center', justifyContent:'center', textAlign:'center', color:'#353535', fontWeight:'bold', fontSize:12, height:36, width:148, border:'1px dashed rgba(0, 59, 119, 0.2)', borderRadius:3, background:'rgba(85, 49, 238, 0.04)', marginLeft:80}}>CHANGE IMAGE</div>
        </div>
        <div style={{display:'flex', flexWrap:'wrap'}}>
          {rows.map((row, index) => (
            <div key={index} style={styles.form}>
              <div style={{color:'#656B71', fontSize:14, marginBottom:4}}>{row.title}</div>
              <InputBase style={{border:"1px solid #D9E1EC", borderRadius:8, height:48, paddingLeft:15, paddingRight:15, color:'#212529', fontSize:16}}
                disabled={row.disabled}
                placeholder={row.placeholder}
                classes={{
                  input:classes.inputStyle,
                  disabled: classes.disabledInput
                }}
              />
            </div>
          ))}
        </div>
        <div style={{display:'flex', justifyContent:'flex-end', marginTop:30, marginBottom:25}}>
          <div style={{justifyContent:'center', alignItems:'center', display:'flex', width:155, height:46, fontFamily: "Titillium", color: '#656B71', fontSize: 16, border:'1px solid #D7DBEC', borderRadius:5, marginRight:18}}>Cancel</div>
          <div style={{justifyContent:'center', alignItems:'center', display:'flex', width:133, height:48, fontFamily: "Titillium", color: '#FFF', fontSize: 16, backgroundColor:'#5531EE', borderRadius:5}}>Save</div>
        </div>
      </TabPanel>
      <TabPanel value={props.value} index={1}>
      <div style={{fontFamily:'Titillium', fontWeight:'bold', fontSize:16, marginBottom:4, color:'#131523'}}>Password</div>
        <div style={{fontFamily:'Titillium', color:'#5A607F', fontSize:14}}>Change your details</div>
        <div style={{display:'flex', flexWrap:'wrap', marginTop:40}}>
          {passwordrows.map((row, index) => (
            <div key={index} style={styles.form}>
              <div style={{color:'#656B71', fontSize:14, marginBottom:4}}>{row.title}</div>
              <InputBase style={{border:"1px solid #D9E1EC", borderRadius:8, height:48, paddingLeft:15, paddingRight:15, color:'#212529', fontSize:16}}
                disabled={row.disabled}
                placeholder={row.placeholder}
                classes={{
                  input:classes.inputStyle,
                  disabled: classes.disabledInput
                }}
              />
            </div>
          ))}
        </div>
        <div style={{display:'flex', justifyContent:'flex-end', marginTop:30, marginBottom:25}}>
          <div style={{justifyContent:'center', alignItems:'center', display:'flex', width:155, height:46, fontFamily: "Titillium", color: '#656B71', fontSize: 16, border:'1px solid #D7DBEC', borderRadius:5, marginRight:18}}>Cancel</div>
          <div style={{justifyContent:'center', alignItems:'center', display:'flex', width:173, height:48, fontFamily: "Titillium", color: '#FFF', fontSize: 16, backgroundColor:'#5531EE', borderRadius:5}}>Change Password</div>
        </div>
      </TabPanel>
    </div>
  );
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{paddingTop:40, paddingLeft:10,}}>
          {children}
        </Box>
      )}
    </div>
  );
}


const SideMenu = props => {
  const classes = useStyles();
  return (
  <div>
    <List style={styles.leftMenu}>
        <ListItem button style={{marginBottom:5, borderRadius:4}}>
          <ListItemIcon><HomeIcon color="#81838C" /></ListItemIcon>
          <ListItemText primary='Dashboard' classes={{
            primary:classes.primary
          }}  style={styles.avatarName} />
        </ListItem>
        <ListItem button style={{ marginBottom:5, borderRadius:4}}>
          <ListItemIcon><TransIcon color="#81838C" /></ListItemIcon>
          <ListItemText primary='Transactions' classes={{
            primary:classes.primary
          }} style={styles.avatarName} />
        </ListItem>
        <ListItem button style={{marginBottom:5, borderRadius:4}}>
          <ListItemIcon><CardIcon color="#81838C" /></ListItemIcon>
          <ListItemText primary='Saved Cards' classes={{
            primary:classes.primary
          }} style={styles.avatarName} />
        </ListItem>
        <ListItem button style={{backgroundColor:'#5531EE',marginBottom:5, borderRadius:4}}>
          <ListItemIcon><SettingsIcon color="#FFF" /></ListItemIcon>
          <ListItemText primary='Settings' classes={{
            primary:classes.primary
          }} style={styles.avatarName, styles.active} />
        </ListItem>
    </List>
  </div>
)
}



export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileOpen:false,
      tabValue: 0
    };
    this.handleChange = this.handleChange.bind(this);
  };

  toggleDrawer(){
    this.setState({mobileOpen: !this.state.mobileOpen });
  };

  handleChange = (event, newValue) => {
    this.setState({tabValue: newValue});
  };

  render() {
    return (
      <div style={{backgroundColor:'#F5F6FA', minHeight:'100vh'}}> 
        <AppBar position="fixed" style={{backgroundColor:'#FFF', height:68,
            boxShadow:'0px 1px 4px 0px rgba(21, 34, 50, 0.08)', zIndex:1000}}>
          <Toolbar>
            <div style={{display:'flex'}} ><img src={Images.logo} style={{width:128, height: 35,}} /></div>
            <div style={styles.search}>
              <div style={styles.searchIcon}>
                <SearchIcon style={{ color: "#81838C", width:17, height:17 }} />
              </div>
             <InputBase
                placeholder="Search for cable providers, network"
              />
            </div>
            <div style={styles.menu}>
              <Typography style={styles.menuItem}>
              Buy Airtime
              </Typography>
              <Typography style={styles.menuItem}>
              Pay Cable TV
              </Typography>
              <Typography style={styles.menuItem}>
              Fund Betting wallet
              </Typography>
            </div>
            <div style={{display:'flex', alignItems:'center', marginLeft:90}}>
              <div style={{display:'flex', alignItems:'center'}}>
                <Avatar src={Images.avatar} style={styles.avatar} />
                <Typography style={styles.avatarName}>
                  Usman Abiola
                </Typography>
              </div>
              <IconButton style={{marginTop:5, marginLeft:5 }}>
                <KeyboardArrowDownIcon style={{ fontSize: 12, color: '#7E84A3' }} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <div style={{display:'flex'}} >
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={'left'}
              open={this.state.mobileOpen}
              onClose={() => this.toggleDrawer()}
              style={{width:240, zIndex:0, position:'relative'}}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <SideMenu />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              variant="permanent"
              style={{width:240}}
              open
            >
              <SideMenu />
            </Drawer>
          </Hidden>
          <main style={{width:'100%'}}>
            <div style={styles.toolbar} />{/* For the header */}
            <div style={styles.content}>
              <div style={{fontSize:24, fontWeight:'bold'}}>Settings</div>
              <section style={styles.section}>
                <div style={styles.transactions}>
                  <Summary value={this.state.tabValue} handleChange={this.handleChange} />
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const styles = {
  menu:{
    display:'flex',
    justifyContent: 'space-between',
    flexGrow: 1
  },
  menuItem:{
    fontFamily: "Titillium",
    color: '#81838C',
    fontSize: 14
  },
  leftMenu: {
    paddingLeft:20,
    paddingTop:30,
    paddingRight:20
  },
  avatarName:{
    fontFamily: "Titillium",
    color: '#5A607F',
    fontSize: 14,
  },
  section:{
    marginTop:27,
  },
  atmcard:{
    padding: 19,
    width:350,
    //height:210,
    backgroundColor: '#5531EE',
    borderRadius:8,
    backgroundImage:`url(${Images.bgatm})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
  },
  services:{
    padding: "20px 25px",
    flexGrow: 1,
    //height:210,
    backgroundColor: '#FFF',
    borderRadius:8,
    marginLeft: 20
  },
  transactions:{
    padding: "20px 25px",
    backgroundColor: '#FFF',
    borderRadius:4,
    boxShadow:'0px 1px 4px rgba(21, 34, 50, 0.08)'
  },
  summary:{
    padding: "20px 25px",
    flexGrow: 1,
    backgroundColor: '#FFF',
    borderRadius:4,
    marginLeft: 20,
    boxShadow:'0px 1px 4px rgba(21, 34, 50, 0.08)'
  },
  active:{
    color:'#FFF'
  },
  form:{
    width: "calc(50% - 24px)",
    paddingRight:24,
    marginBottom:20
  },
  avatar: {
    width: 39,
    height: 39,
    marginRight: 11
  },
  search: {
    display: 'flex',
    backgroundColor: '#FFF',
    marginLeft: 90,
    flexGrow: 1
  },
  transSearch: {
    display: 'flex',
    backgroundColor: '#FFF',
    borderRadius:4,
    border:'1px solid #D9E1EC',
    width:350,height: 40,
  },
  filterSearch: {
    display: 'flex',
    backgroundColor: '#FFF',
    borderRadius:4,
    border:'1px solid #D9E1EC',
    width:180,
    marginRight:12,
    height: 40,
  },
  searchIcon: {
    padding: 12,
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transSearchIcon: {
    padding: 12,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 36,
  },
  toolbar: {
    alignItems:'center',
    //justifyContent:'center',
    paddingLeft:30,
    display:'flex',
    height:68,
    boxShadow:'0px 1px 4px 0px rgba(21, 34, 50, 0.08)'
  },
}