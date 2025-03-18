import React, { useEffect,useState,useRef } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./NavBar.module.scss";

const drawerWidth = 240;
const navItems = [
  { title: "Nuestro propósito", href: "/#wedo" },
  { title: "Contacto", href: "/#contact" },
  { title: "Proyectos", href: "/proyectos" },
  // {
  //   title: "Servicios",
  //   submenu: [
  //     { title: "Subcategoría 1", href: "/servicios/1" },
  //     { title: "Subcategoría 2", href: "/servicios/2" },
  //     {
  //       title: "Remodelaciones",
  //       submenu: [
  //         { title: "Remodelaciones Sub 1", href: "/remodelaciones/1" },
  //         { title: "Remodelaciones Sub 2", href: "/remodelaciones/2" },
  //       ],
  //     },
  //   ],
  // },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [subAnchorEl, setSubAnchorEl] = useState(null);
  

  // Control de menú en desktop
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubAnchorEl(null); // Cierra el submenú también
  };
  const handleSubMenuOpen = (event) => setSubAnchorEl(event.currentTarget);
  const handleSubMenuClose = () => setSubAnchorEl(null);

  // Control de menú en mobile
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  // Cerrar el menú al hacer scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     handleMenuClose();
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <figure className={styles.logoContainer}>
          <Image
            src="/icono-lv-negro.png"
            width={1018}
            height={877}
            layout="responsive"
            alt="logo"
          />
        </figure>
      </Link>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            {item.submenu ? (
              <Accordion onClick={(e) => e.stopPropagation()}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <ListItemText primary={item.title} />
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {item.submenu.map((subItem, idx) => (
                      subItem.submenu ? (
                        <Accordion key={idx} onClick={(e) => e.stopPropagation()}>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <ListItemText primary="Remodelaciones" />
                          </AccordionSummary>
                          <AccordionDetails>
                            <List>
                              {subItem.submenu.map((nestedItem, nIdx) => (
                                <ListItem key={nIdx}>
                                  <Link href={nestedItem.href} style={{ textDecoration: "none", color: "inherit" }}>
                                    <ListItemText primary={nestedItem.title} />
                                  </Link>
                                </ListItem>
                              ))}
                            </List>
                          </AccordionDetails>
                        </Accordion>
                      ) : (
                        <ListItem key={idx}>
                          <Link href={subItem.href} style={{ textDecoration: "none", color: "inherit" }}>
                            <ListItemText primary={subItem.title} />
                          </Link>
                        </ListItem>
                      )
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItemButton>
                <Link href={item.href} style={{ textDecoration: "none", color: "inherit" }}>
                  <ListItemText primary={item.title} />
                </Link>
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className={styles.themeBar} component="nav">
        <Toolbar className={styles.toolBar}>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box className={styles.logoBox} sx={{ flexGrow: 1, display: { sm: "block" } }}>
            <Link href="/">
              <figure>
                <Image src="/logo-constructora-lv-white.png" width={1480} height={877} alt="logo" />
              </figure>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              item.submenu ? (
                <Box key={index} onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose} sx={{ display: "inline-block" }}>
                  <Button sx={{ color: "#fff" }}>{item.title}</Button>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} >
                    {item.submenu.map((subItem, idx) => (
                      subItem.submenu ? (
                        <Box key={idx} onMouseEnter={handleSubMenuOpen} onMouseLeave={handleSubMenuClose}>
                          <MenuItem>{subItem.title} →</MenuItem>
                          <Menu anchorEl={subAnchorEl} open={Boolean(subAnchorEl)} onClose={handleSubMenuClose}   anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                          }}>
                            {subItem.submenu.map((nestedItem, nIdx) => (
                              <MenuItem key={nIdx} onClick={handleSubMenuClose}>
                                <Link href={nestedItem.href} style={{ textDecoration: "none", color: "inherit" }}>
                                  {nestedItem.title}
                                </Link>
                              </MenuItem>
                            ))}
                          </Menu>
                        </Box>
                      ) : (
                        <MenuItem key={idx} onClick={handleMenuClose}>
                          <Link href={subItem.href} style={{ textDecoration: "none", color: "inherit" }}>
                            {subItem.title}
                          </Link>
                        </MenuItem>
                      )
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button key={index} sx={{ color: "#fff" }}>
                  <Link href={item.href} style={{ textDecoration: "none", color: "inherit" }}>
                    {item.title}
                  </Link>
                </Button>
              )
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ "& .MuiDrawer-paper": { width: drawerWidth } }}>
        {drawer}
      </Drawer>
    </Box>
  );
}

DrawerAppBar.propTypes = { window: PropTypes.func };

export default DrawerAppBar;