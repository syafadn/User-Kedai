import React , { useState }from 'react'
import Logo from '../assets/mate.png'
import { Link } from "react-router-dom"
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
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
        },
        {
            text: "About",
            icon: <InfoIcon />,
        },
        {
            text: "Menu",
            icon: <RestaurantMenuIcon />,
        },
        {
            text: "Testimonials",
            icon: <CommentRoundedIcon />,
        },
    ];
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
                        {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                <Divider />
                </Box>
            </Drawer>
        </nav>
    )
}

export default NavbarMenu