import React, { Component } from 'react';
import { makeStyles, InputBase, AppBar, IconButton, Toolbar, MenuIcon, Typography, Button, Avatar, List, ListItem, ListItemIcon, ListItemText, Drawer, Hidden, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tabs, Tab, Box } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import {HomeIcon, SettingsIcon, TransIcon, CardIcon} from './svgIcons'
import {TopBar, SideMenu} from './TopBar';

const Images = require('./imports').Images

const useStyles = makeStyles({
  primary: {
    fontSize: 14,
    fontFamily: "Titillium",
  },
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
    minWidth:'unset', fontFamily:'Titillium', fontSize:12, color:"#8484A5", borderRadius:15, border:'1px solid #D8DAE4', padding:"6px 14px", marginRight:10, marginLeft:10, minHeight:'unset'
  },
  tabBody:{
    padding:0,
    paddingTop:20
  },
  indicator:{
    display:'none'
  },
  selectedTab:{
    border: 'unset',
    backgroundColor: '#5531EE',
    color: '#FFF',
  }
});

const Title = props => {
  const classes = useStyles();
  return (
    <div className={classes.titlelabel}>
      {props.label}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const Summary = props => {
  const classes = useStyles();
  return(
    <div style={{width:'100%', flexGrow:1}}>
      <Tabs value={props.value} onChange={props.handleChange} variant="scrollable"
          scrollButtons="auto" classes={{
            indicator:classes.indicator
          }}
          aria-label="scrollable auto tabs example">
        <Tab className={classes.tabLabel} classes={{selected: classes.selectedTab}} label="AUG" {...a11yProps(0)} />
        <Tab className={classes.tabLabel} classes={{selected: classes.selectedTab}} label="SEPT" {...a11yProps(1)} />
        <Tab className={classes.tabLabel} classes={{selected: classes.selectedTab}} label="OCT" {...a11yProps(2)} />
        <Tab className={classes.tabLabel} classes={{selected: classes.selectedTab}} label="NOV" {...a11yProps(3)} />
        <Tab className={classes.tabLabel} classes={{selected: classes.selectedTab}} label="DEC" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={props.value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={props.value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={props.value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={props.value} index={3}>
        Item Three
      </TabPanel>
      <TabPanel value={props.value} index={4}>
        Item Three
      </TabPanel>
    </div>
  );
}



const Service = props => {
  const classes = useStyles();
  return(
    <div style={{height:110, flex:3, maxWidth:200, marginRight:20, backgroundColor:props.color, borderRadius:12, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
      <div className={classes.imgCircle}><span style={{height:24, display:'block', width:24, backgroundImage:`url(${Images[props.image]})`, backgroundSize:'contain', backgroundPosition:'center', backgroundRepeat:'no-repeat' }} /></div>
      <div style={{fontFamily:'Titillium', marginTop:10, color:props.titleColor, fontSize:16, fontWeight:'bold'}} >{props.title}</div>
    </div>
  )
}

const TableMenu = props => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table aria-label="simple table">
      <caption style={{fontFamily:'Titillium', color:'#5531EE', fontSize:14, textAlign:'center'}}>See all transactions</caption>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>ID</TableCell>
            <TableCell className={classes.tableHead}>Date</TableCell>
            <TableCell className={classes.tableHead}>Amount</TableCell>
            <TableCell className={classes.tableHead}>Type</TableCell>
            <TableCell className={classes.tableHead}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell  className={classes.tableBody} style={{fontWeight:'bold'}} component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className={classes.tableBody}>{row.date}</TableCell>
              <TableCell className={classes.tableBody}>{row.amount}</TableCell>
              <TableCell className={classes.tableBody}>{row.type}</TableCell>
              <TableCell className={classes.tableBody} style={{color:'#06A561', textAlign:'center'}}>
                <div style={{padding: '2px 8px', backgroundColor:'#C4F8E2', borderRadius:4}}>
                  {row.status}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const BarUnit = props => {
  return(
    <div style={{width:21, height:props.height, backgroundColor:props.color, borderRadius:4, marginRight:2, marginLeft:2}} />
  )
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
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>
              <div style={{fontFamily:'Titillium', color:'#2DC173', fontSize:14}}>Money in</div>
              <div style={{fontFamily:'Titillium', color:'#131523', fontSize:20, fontWeight:'bold', marginTop:10}}>₦503,653.03</div>
            </div>
            <div style={{display:'flex', alignItems:'flex-end'}}>
              <BarUnit height={25} color="#C5F7DC" />
              <BarUnit height={40} color="#C5F7DC" />
              <BarUnit height={66} color="#4FBC82" />
              <BarUnit height={49} color="#C5F7DC" />
              <BarUnit height={57} color="#C5F7DC" />
              <BarUnit height={40} color="#C5F7DC" />
            </div>
          </div>
          <div style={{marginTop:30, marginBottom:40, height:1,  backgroundColor:'#D9E1EC'}} />
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>
              <div style={{fontFamily:'Titillium', color:'#E76A5E', fontSize:14}}>Money out</div>
              <div style={{fontFamily:'Titillium', color:'#131523', fontSize:20, fontWeight:'bold', marginTop:10}}>₦1,650,021</div>
            </div>
            <div style={{display:'flex', alignItems:'flex-end'}}>
              <BarUnit height={25} color="#FFDDDD" />
              <BarUnit height={40} color="#F6A29A" />
              <BarUnit height={66} color="#FFDDDD" />
              <BarUnit height={49} color="#FFDDDD" />
              <BarUnit height={57} color="#FFDDDD" />
              <BarUnit height={40} color="#FFDDDD" />
            </div>
          </div>
        </Box>
      )}
    </div>
  );
}

function createData(id, date, amount, type, status) {
  return { id, date, amount, type, status };
}

const rows = [
  createData('PP3828', '24/05/2020  10:29am', 'N124,932.97', 'Airtime', 'Success'),
  createData('PP3828', '24/05/2020  10:29am', 'N124,932.97', 'Cable TV', 'Success'),
  createData('PP3828', '24/05/2020  10:29am', 'N124,932.97', 'Cable TV', 'Success'),
  createData('PP3828', '24/05/2020  10:29am', 'N124,932.97', 'Cable TV', 'Success'),
];


export default class Home extends Component {
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
              <SideMenu active='dashboard' />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              variant="permanent"
              style={{width:240}}
              open
            >
              <SideMenu active='dashboard' />
            </Drawer>
          </Hidden>
          <main style={{width:'100%'}}>
            <div style={styles.toolbar} />{/* For the header */}
            <div style={styles.content}>
              <div style={{fontSize:20}}>Welcome to <span style={{fontWeight:'bold'}}>PayPhast</span> 😊</div>
              <section style={styles.section}>
                <div style={styles.atmcard}>
                  <div style={{color:'rgba(255, 255, 255, 0.6)', fontSize:10, textTransform:'uppercase'}}>Wallet Balance</div>
                  <div style={{color:'#FFF', fontSize:30, letterSpacing:-0.16, fontWeight:'bold', textTransform:'uppercase', marginTop:5}}>₦ 14,568.42</div>
                  <div style={{marginTop:45, marginBottom:20, height:1, width:197, opacity:0.15, backgroundColor:'#EFF3F6'}} />
                  <div style={{display:'flex', marginBottom:15}}>
                    <div style={{justifyContent:'center', alignItems:'center', display:'flex', width:100, height:40, fontFamily: "Titillium", color: '#5531EE', fontSize: 12, backgroundColor:'#FFF', borderRadius:5, fontWeight:'bold'}}>Fund wallet</div>
                    <div style={{justifyContent:'center', alignItems:'center', display:'flex', width:88, height:38, fontFamily: "Titillium", color: '#FFF', fontSize: 12, border:'1px solid #FFF', borderRadius:5, fontWeight:'bold', marginLeft:8}}>Withdraw</div>
                  </div>
                </div>
                <div style={styles.services}>
                  <Title label="Top Services" />
                  <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Service color="#F4F2FF" title="Buy Airtime" titleColor="#242131" image="phone" />
                    <Service color="#3C66FF" title="Pay Cable TV" titleColor="#FFF" image="phone" />
                    <Service color="#00B856" title="Fund Bet Wallet" titleColor="#FFF" image="game" />
                  </div>
                </div>
              </section>
              <section style={styles.section}>
                <div style={styles.transactions}>
                  <Title label="Recent Transactions" />
                  <TableMenu />
                </div>
                <div style={styles.summary}>
                  <Title label="Summary" />
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
    display: 'flex'
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
  searchIcon: {
    padding: 12,
    height: '100%',
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