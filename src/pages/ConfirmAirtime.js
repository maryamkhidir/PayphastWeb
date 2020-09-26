import React, { Component } from 'react';
import { makeStyles, InputBase, AppBar, IconButton, Toolbar, MenuIcon, Typography, Button, Avatar, List, ListItem, ListItemIcon, ListItemText, Drawer, Hidden, TableContainer, TableHead, TableRow, Paper, Tabs, Tab, Box, TableFooter } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import {HomeIcon, SettingsIcon, TransIcon, CardIcon} from './svgIcons'
import {TopBar, SideMenu} from './TopBar';
import { useHistory } from "react-router-dom";


const Images = require('./imports').Images

const useStyles = makeStyles({
  primary: {
    fontSize: 14,
    fontFamily: "Titillium",
  },
  inputStyle:{color:'#212529', fontSize:16},
  selectInput:{border:"1px solid #D9E1EC", flex:1, borderRadius:8, height:35, paddingLeft:15, paddingRight:15, color:'#212529', fontSize:24},
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

const options = [
  { value: 'airtel', label: 'Airtel Nigeria' },
  { value: 'mtn', label: 'MTN Nigeria' },
  { value: 'glo', label: 'Glo Nigeria' },
];

const Forms = props => {
  const classes = useStyles();
  const history = useHistory();
  return(
    <div style={{flex:1, marginTop:25}}>
        <div style={{borderBottom: '1.37981px solid #EFF3F6'}} />
        <div>
          <div style={{display:'flex', justifyContent:'space-between', margin:'30px auto'}}>
            <div style={{color:'#242131', fontSize:19, fontWeight:600}} >Summary</div>
            <div style={{backgroundColor:'#e6f1ff', width:119, height:33, color:'#0070FF', fontSize:17, justifyContent:'center', alignItems:'center', display:'flex', borderRadius:17}}>Initiated</div>
          </div>
          <div style={{marginTop:10, marginBottom:30, display:'flex',  alignItems:'flex-start', justifyContent:'space-between'}}>
            <div style={{ display:'flex',  alignItems:'center'}}>
              <div style={{display:"flex", alignItems:'center', justifyContent:'center', height:55, width:55, borderRadius:10, border:'1px solid #EFF3F6'}}>
                <img src={Images.airtel} style={{width:33, height:33}} />
              </div>
              <div style={{marginLeft:20}}>
                <div style={{fontFamily:'Titillium', fontWeight:'bold', fontSize:16, marginBottom:8, color:'#242131'}}>Airtel Airtime VTU</div>
                <div style={{fontFamily:'Titillium', color:'#81838C', fontSize:16}}>Airtel Nigeria</div>
              </div>
            </div>
            <div style={{fontFamily:'Titillium', fontWeight:'bold', fontSize:18, color:'#242131'}}>09039478724</div>
          </div>
        </div>
        <div style={{borderBottom: '1.37981px solid #EFF3F6'}} />
        <div>
          <div style={{display:'flex', justifyContent:'space-between', margin:'30px auto 20px'}}>
            <div style={{color:'#81838C', fontSize:16, fontWeight:600}} >Transaction ID</div>
            <div style={{fontFamily:'Titillium', fontWeight:'bold', fontSize:16, color:'#242131'}}>16008484082586385620280346</div>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', margin:'0px auto 30px'}}>
            <div style={{color:'#81838C', fontSize:16, fontWeight:600}} >Fees</div>
            <div style={{fontFamily:'Titillium', fontWeight:'bold', fontSize:16, color:'#242131'}}>N10.79</div>
          </div>
        </div>
        <div style={{borderBottom: '1.37981px solid #EFF3F6'}} />
        <div>
          <div style={{display:'flex', justifyContent:'space-between', margin:'25px auto 40px'}}>
            <div style={{color:'#81838C', fontSize:16, fontWeight:600}} >Total</div>
            <div style={{fontFamily:'Titillium', fontWeight:'bold', fontSize:24, color:'#5531EE'}}>N2000.79</div>
          </div>
        </div>
        <div onClick={() => history.push('/success-airtime')} style={{justifyContent:'center', marginTop:20, marginBottom:30, alignItems:'center', display:'flex', height:48, fontFamily: "Titillium", color: '#FFF', fontSize: 16, backgroundColor:'#5531EE', borderRadius:6, cursor:'pointer'}}>Confirm Payment</div>
    </div>
  )
}


export default class ConfirmAirtime extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileOpen:false,
      selectedValue: options[0]
    };
    this.handleChange = this.handleChange.bind(this);
  };

  toggleDrawer(){
    this.setState({mobileOpen: !this.state.mobileOpen });
  };

  handleChange = (value) => {
    this.setState({selectedValue: value});
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
            <TopBar />
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
              <div style={{fontSize:14, color:'#5A607F', cursor:'pointer', marginBottom:10}}>← Back</div>
              <div style={{fontSize:24, fontWeight:'bold'}}>Buy Airtime</div>
              <section style={styles.section}>
                <div style={styles.transactions}>
                  <div style={{fontFamily:'Titillium', fontSize:24, marginBottom:4, color:'#212529'}}>Confirm Purchase</div>
                  <div style={{fontFamily:'Titillium', color:'#656B71', fontSize:16}}>Review the transaction details</div>
                  <div>
                    <Forms selectedValue={this.state.selectedValue} handleChange={this.handleChange} />
                  </div>
                </div>
                <div style={styles.summary}>
                  <img src={Images.bg} style={{height: "auto", width: "100%"}} />
                  <div style={{paddingLeft:20, paddingRight:20, marginTop:50,  marginBottom:50}}>
                    <div style={{fontSize:53, marginBottom:35, fontFamily:'Titillium-Bold', fontWeight:'700', lineHeight:"56px", color:'#242131'}}>
                      Payment just got <span style={{color:'#896CFF'}}>phaster</span>
                    </div>
                    <div style={{fontSize:18, color:'#242131', lineHeight:"32px"}}>
                    Certain things are hard; making payments shouldn't be one of them
                    </div>
                    <div style={{justifyContent:'center', alignItems:'center', display:'flex', width:116, height:48, fontFamily: "Titillium", color: '#FFF', fontSize: 16, backgroundColor:'#9894AB', borderRadius:5, marginTop:36}}>Learn more</div>
                  </div>
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
    display:'flex',
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
    width:525,
    flex: 3,
    backgroundColor: '#FFF',
    borderRadius:4,
    boxShadow:'0px 1px 4px rgba(21, 34, 50, 0.08)',
    height: 'fit-content'
  },
  summary:{
    flex: 2,
    backgroundColor: '#FFF',
    borderRadius:4,
    marginLeft: 25,
    boxShadow:'0px 1px 4px rgba(21, 34, 50, 0.08)'
  },
  active:{
    color:'#FFF'
  },
  form:{
    width: "calc(50% - 24px)",
    paddingLeft:12,
    paddingRight:12,
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