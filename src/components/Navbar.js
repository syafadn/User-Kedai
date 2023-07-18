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
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState(false);
    
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="" width='100' />
            </div>
            <div className="navbar-links-container">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="/menu">Menu</a>
                <a href="#testimonial">Testimonial</a>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right" >
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
                                    <a href='/#'>
                                        <HomeIcon />
                                        <a>Home</a>
                                    </a>    
                                </div><br/>
                                <div>
                                    <a href='/#about'>
                                        <><InfoIcon /></>
                                        <span>About</span>
                                    </a>
                                </div><br/>
                                <div>
                                    <a href='/menu'>
                                        <><RestaurantMenuIcon /></>
                                        <span>Menu</span>
                                    </a>    
                                </div><br/>
                                <div>
                                <   a href='/#testimonial'>
                                        <><CommentRoundedIcon /></>
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

export default Navbar