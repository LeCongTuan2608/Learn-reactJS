import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Register from 'features/Auth/components/Register';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';
export default function Header() {
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}>
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link className="link-white" to="/">
                     Tuấn Lê
                  </Link>
               </Typography>
               <NavLink className="link-white" to="/todos">
                  <Button color="inherit">Todos</Button>
               </NavLink>
               <NavLink className="link-white" to="/album">
                  <Button color="inherit">Album</Button>
               </NavLink>
               <NavLink className="link-white" to="/page">
                  <Button color="inherit">Pages</Button>
               </NavLink>
               <Button color="inherit" onClick={handleClickOpen}>
                  Register
               </Button>
            </Toolbar>
         </AppBar>

         <Dialog disableEscapeKeyDown onBackdropClick open={open} onClose={handleClose}>
            <DialogContent>
               <DialogContentText>
                  <Register />
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
         </Dialog>
      </Box>
   );
}
