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
        <ListItem button style={{backgroundColor:'#5531EE', marginBottom:5, borderRadius:4}}>
          <ListItemIcon><TransIcon color="#FFF" /></ListItemIcon>
          <ListItemText primary='Transactions' classes={{
            primary:classes.primary
          }} style={styles.avatarName, styles.active} />
        </ListItem>
        <ListItem button style={{marginBottom:5, borderRadius:4}}>
          <ListItemIcon><CardIcon color="#81838C" /></ListItemIcon>
          <ListItemText primary='Saved Cards' classes={{
            primary:classes.primary
          }} style={styles.avatarName} />
        </ListItem>
        <ListItem button style={{marginBottom:5, borderRadius:4}}>
          <ListItemIcon><SettingsIcon color="#81838C" /></ListItemIcon>
          <ListItemText primary='Settings' classes={{
            primary:classes.primary
          }} style={styles.avatarName} />
        </ListItem>
    </List>
  </div>
)
}

const TableMenu = props => {
  const classes = useStyles();
  return (
    <TableContainer>
      <div style={{marginBottom:15, marginTop:10, display:'flex'}}>
        <div style={styles.filterSearch}>
          <InputBase
          style={{paddingLeft:15}}
            placeholder="Filter"
          />
          <div style={styles.transSearchIcon}>
            <KeyboardArrowDownIcon style={{ color: "#81838C", width:24, height:24 }} />
          </div>
        </div>

        <div style={styles.transSearch}>
          <div style={styles.transSearchIcon}>
            <SearchIcon style={{ color: "#81838C", width:17, height:17 }} />
          </div>
          <InputBase
            placeholder="Search..."
          />
        </div>
      </div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>ID</TableCell>
            <TableCell className={classes.tableHead}>Date</TableCell>
            <TableCell className={classes.tableHead}>Amount</TableCell>
            <TableCell className={classes.tableHead}>Fee</TableCell>
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
              <TableCell className={classes.tableBody}>{row.fee}</TableCell>
              <TableCell className={classes.tableBody}>{row.type}</TableCell>
              {(row.status) == "Success" ? 
                <TableCell className={classes.tableBody} style={{color:'#06A561', textAlign:'center'}}>
                  <div style={{padding: '2px 8px', backgroundColor:'#C4F8E2', borderRadius:4}}>
                    {row.status}
                  </div>
                </TableCell> :
                <TableCell className={classes.tableBody} style={{color:'#FF3C30', textAlign:'center'}}>
                <div style={{padding: '2px 8px', backgroundColor:'#F8C7C4', borderRadius:4}}>
                  {row.status}
                </div>
              </TableCell> 
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{display:'flex', marginBottom:30, marginTop:30, justifyContent:'space-between'}}>
            <div  style={{display:'flex',}}>
          {['⟵', 1,2,3,4,5,6, '...', 24, '⟶'].map( (value, ind) => (
            (value == 2) ? <div key={ind} style={{width:36, height:36, display:'flex', color:'#5531EE', alignItems:'center', justifyContent:'center', backgroundColor:'#ECF2FF', borderRadius:4}}>{value}</div> : <div key={ind} style={{width:36, height:36, color:'#5A607F', display:'flex', borderRadius:4, alignItems:'center', justifyContent:'center',}}>{value}</div>           
          ))}
          </div>
          <div style={{color:'#5A607F', display:'flex', borderRadius:4, alignItems:'center', justifyContent:'center',}} >274 Results</div>
      </div>
    </TableContainer>
  );
}

function createData(id, date, amount, fee, type, status) {
  return { id, date, amount, type, fee, status };
}

const rows = [
  createData('889322353992', '24/05/2020  10:29am', 'N124,932.97', 'N38.92', 'Bill Payment', 'Success'),
  createData('889322353992', '24/05/2020  10:29am', 'N124,932.97', 'N38.92', 'Bill Payment', 'Failed'),
  createData('889322353992', '24/05/2020  10:29am', 'N124,932.97', 'N38.92', 'Bill Payment', 'Success'),
  createData('889322353992', '24/05/2020  10:29am', 'N124,932.97', 'N38.92', 'Bill Payment', 'Success'),
  createData('889322353992', '24/05/2020  10:29am', 'N124,932.97', 'N38.92', 'Bill Payment', 'Success'),
  createData('889322353992', '24/05/2020  10:29am', 'N124,932.97', 'N38.92', 'Bill Payment', 'Success'),
  createData('889322353992', '24/05/2020  10:29am', 'N124,932.97', 'N38.92', 'Bill Payment', 'Success'),
  createData('889322353992', '24/05/2020  10:29am', 'N124,932.97', 'N38.92', 'Bill Payment', 'Success'),
  createData('889322353992', '24/05/2020  10:29am', 'N124,932.97', 'N38.92', 'Bill Payment', 'Success'),
  createData('889322353992', '24/05/2020  10:29am', 'N124,932.97', 'N38.92', 'Bill Payment', 'Success'),
  createData('889322353992', '24/05/2020  10:29am', 'N124,932.97', 'N38.92', 'Bill Payment', 'Success'),
];


export default class Transactions extends Component {
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
              <div style={{fontSize:24, fontWeight:'bold'}}>Transactions</div>
              <section style={styles.section}>
                <div style={styles.transactions}>
                  <TableMenu />
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