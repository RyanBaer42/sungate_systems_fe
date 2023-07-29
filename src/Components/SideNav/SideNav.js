import './SideNav.scss';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HistoryIcon from '@mui/icons-material/History';
import GrassIcon from '@mui/icons-material/Grass';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Collapse from '@mui/material/Collapse';
import { ExpandLess } from '@mui/icons-material';
import { ExpandMore } from '@mui/icons-material';
import CropSquareIcon from '@mui/icons-material/CropSquare';


const SideNav = () => {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <div className='list-container'>
            <List className='listcomponent'>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Field" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={handleClick}>
                    <ListItemButton>
                        <ListItemIcon>
                            <GrassIcon />
                        </ListItemIcon>
                        <ListItemText primary="Fields" />
                    </ListItemButton>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <CropSquareIcon />
                            </ListItemIcon>
                            <ListItemText primary="Field 1" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccessTimeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Schedule" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HistoryIcon /> {/* Use HistoryIcon for 'History' tab */}
                        </ListItemIcon>
                        <ListItemText primary="History" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );
}

export default SideNav