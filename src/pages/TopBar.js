import React, { Component } from 'react';
import { makeStyles, InputBase, AppBar, IconButton, Toolbar, MenuIcon, Typography, Button, Avatar, List, ListItem, ListItemIcon, ListItemText, Drawer, Hidden, TableContainer, TableHead, TableRow, Paper, Tabs, Tab, Box, TableFooter } from '@material-ui/core';
import {HomeIcon, SettingsIcon, TransIcon, CardIcon} from './svgIcons'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  primary: {
    fontSize: 14,
    fontFamily: "Titillium",
  },
});

export function TopBar(props) {
  const history = useHistory();
  return(
    <div style={styles.menu}>
      <Typography onClick={() => history.push("/buy-airtime")} style={styles.menuItem}>
      Buy Airtime
      </Typography>
      <Typography onClick={() => history.push("/pay-cable")} style={styles.menuItem}>
      Pay Cable TV
      </Typography>
      <Typography onClick={() => {}} style={styles.menuItem}>
      Fund Betting wallet
      </Typography>
    </div>
  )
}

function createData(title, route, icon) {
  return { title, route, icon };
}

const rows = [
  createData('Dashboard', '/', 'HomeIcon'),
  createData('Transactions', '/transactions', 'TransIcon'),
  createData('Saved Cards', '', 'CardIcon'),
  createData('Settings', '/settings', 'SettingsIcon'),
];

export function SideMenu(props) {
  var dcolor, tcolor, scolor, ccolor = tcolor = scolor = dcolor = '#81838C'
  var dbg, tbg, sbg, cbg = tbg = sbg = dbg = {marginBottom:5, borderRadius:4, fontSize: 14, color: '#5A607F',}
  switch (props.active) {
    case 'dashboard':
      dcolor = '#FFF'
      dbg = {backgroundColor:'#5531EE', color:"#FFF", fontSize: 14, marginBottom:5, borderRadius:4}
      break;
    case 'transactions':
      tcolor = '#FFF'
      tbg = {backgroundColor:'#5531EE', color:"#FFF", fontSize: 14, marginBottom:5, borderRadius:4}
      break;
    case 'cards':
      ccolor = '#FFF'
      cbg = {backgroundColor:'#5531EE', color:"#FFF", fontSize: 14, marginBottom:5, borderRadius:4}
      break;
    case 'settings':
      scolor = '#FFF'
      sbg = {backgroundColor:'#5531EE', color:"#FFF", fontSize: 14, marginBottom:5, borderRadius:4}
      break;
    default:
      break;
  }
  const classes = useStyles();
  const history = useHistory();
  return (
  <div>
    <List style={styles.leftMenu}>
      {rows.map((row, index) => {
        let icomponent, style
        switch (row.icon) {
          case 'HomeIcon':
            icomponent = <HomeIcon color={dcolor} />
            style = dbg
            break;
          case 'TransIcon':
            icomponent = <TransIcon color={tcolor} />
            style = tbg
            break;
          case 'CardIcon':
            icomponent = <CardIcon color={ccolor} />
            style = cbg
            break;
          case 'SettingsIcon':
            icomponent = <SettingsIcon color={scolor} />
            style = sbg
            break;
          default:
            break;
        }
        return(
          <ListItem key={index} button onClick={() => history.push(row.route)} style={style}>
            <ListItemIcon>{icomponent}</ListItemIcon>
            <ListItemText primary={row.title} classes={{
              primary:classes.primary
            }}/>
          </ListItem>
        )})}
    </List>
  </div>
)
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
    fontSize: 14,
    cursor: 'pointer'
  },
  leftMenu: {
    paddingLeft:20,
    paddingTop:30,
    paddingRight:20
  },
  active:{
    color:'#FFF'
  },
  avatarName:{
    fontFamily: "Titillium",
    color: '#5A607F',
    fontSize: 14,
  },
}