import React, {useState} from 'react';
import {AppBar, Toolbar, Tabs, Tab, useMediaQuery, useTheme,} from "@mui/material";
import AnimationOutlinedIcon from '@mui/icons-material/AnimationOutlined';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import "../App.css";

const pages = [
    { label: 'Home', path: '/', icon: <HomeRoundedIcon />, cName: "nav-text", },
    { label: 'About', path: '/about', icon: <InfoRoundedIcon />, cName: "nav-text", },
    { label: 'Service', path: '/service', icon: <ManageAccountsRoundedIcon />, cName: "nav-text", }, 
    { label: 'Contact', path: '/contact', icon: <ContactMailRoundedIcon />, cName: "nav-text", },
  ];

const Header = () => {

    const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
    const [value, setValue] = useState();
    return (
        <>
            <AppBar sx={{background: '#000000'}}>
                <Toolbar>
                <AnimationOutlinedIcon/>
                <Navbar/>
                <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >

                    {pages.map((page, index) => (
              <Tab
                key={index}
                label={page.label}
                component={Link}
                to={page.path}
              />
            ))}
                </Tabs>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header; 