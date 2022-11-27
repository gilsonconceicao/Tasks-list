import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
// icons
import { SlOptionsVertical } from 'react-icons/sl';
// menu 
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// styles
import styles from './Tasks.module.css';

interface ListProps {
    list: [];
}

export default function Tasks({ list }: ListProps) {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function removeItemList(id: number | any): string[] {
        const listBeforeRemove = list.filter(checked => checked['id'] != id);
        localStorage.setItem("tasks", JSON.stringify(listBeforeRemove));

        location.href = '/';

        return listBeforeRemove
    }

    return (
        <div className={styles.containerTasks}>
            <div className={styles.tasks}>
                <List className={styles.itemsList}>
                    {list && list.map((item: any) => (
                        <ListItem key={item.id}>
                            <ListItemText
                                primary={item.titleTask}
                                secondary={item.descTask}
                            />
                            <ListItemSecondaryAction>
                                <Button onClick={handleClick}>
                                    <SlOptionsVertical />
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={() => removeItemList(item.id)}>
                                        <DeleteIcon />
                                    </MenuItem>
                                </Menu>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                    }
                </List>
            </div>
        </div>
    );
}
