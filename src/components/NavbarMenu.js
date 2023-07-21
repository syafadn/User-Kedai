import React , { useState }from 'react'
import Logo from '../assets/mate.png'
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";

const NavbarMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="" width='100' />
            </div>
            <div className="navbar-links-container">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/menu">Menu</a>
                <a href="/">Testimonial</a>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        <ListItem disablePadding>
                            <div className='nav-responsive'>
                                <div>
                                    <a href='/'>
                                        <ListItemIcon><HomeIcon /></ListItemIcon>
                                        <span>Home</span>
                                    </a>    
                                </div><br/>
                                <div>
                                    <a href='/'>
                                        <ListItemIcon><InfoIcon /></ListItemIcon>
                                        <span>About</span>
                                    </a>
                                </div><br/>
                                <div>
                                    <a href='/menu'>
                                        <ListItemIcon><RestaurantMenuIcon /></ListItemIcon>
                                        <span>Menu</span>
                                    </a>    
                                </div><br/>
                                <div>
                                    <a href='/'>
                                        <ListItemIcon><CommentRoundedIcon /></ListItemIcon>
                                        <span>Testimonial</span>
                                    </a>     
                                </div>
                            </div>
                        </ListItem>
                    </List>
                <Divider />
                </Box>
            </Drawer>
        </nav>
    )
}

export default NavbarMenu