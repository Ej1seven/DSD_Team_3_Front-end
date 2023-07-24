'use client';
import axios from 'axios';
import Button, { ButtonProps } from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { fetchEventData } from '../api/services/Event';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#14213D'),
  backgroundColor: '#14213D !important',
  '&:hover': {
    backgroundColor: '#fff !important',
    color: '#14213D !important',
  },
}));

const EventListItem = styled(ListItem)<ListItemProps>(({ theme }) => ({
  color: '#14213D !important',
  borderRadius: '4px !important',
  boxShadow:
    '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12); !important',
  '&:hover': {
    backgroundColor: '#fff !important',
  },
  marginBottom: '6px',
}));

const EventList = ({ events }: any) => {
  console.log(events);
  return (
    <div className="flex flex-col gl:flex-row gl:gap-10">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <ColorButton variant="contained">Event Type</ColorButton>
            <ColorButton variant="contained">Location</ColorButton>
            <ColorButton variant="contained">Date</ColorButton>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-16">
          <div className="w-full">
            {' '}
            {/* <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            > */}
            {events?.map((event: any) => {
              return (
                <EventListItem
                  alignItems="flex-start"
                  className="h-[130px] w-[600px]"
                >
                  <Paper elevation={3} className="h-[60px] w-[60px]">
                    {event.dateOf}
                  </Paper>
                </EventListItem>
              );
            })}
            {/* <EventListItem
                alignItems="flex-start"
                className="h-[130px] w-[600px]"
              >
                <Paper elevation={3} className="h-[60px] w-[60px]">
                  July 27
                </Paper>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                  }
                />
              </EventListItem>
              <Divider variant="inset" component="li" />
              <EventListItem
                alignItems="flex-start"
                className="h-[130px] w-[600px]"
              >
                <ListItemAvatar>
                  <Paper elevation={3} className="h-[60px] w-[60px]">
                    July 27
                  </Paper>
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                  }
                />
              </EventListItem>
              <Divider variant="inset" component="li" />
              <EventListItem
                alignItems="flex-start"
                className="h-[130px] w-[600px]"
              >
                <Paper elevation={3} className="h-[60px] w-[60px]">
                  July 27
                </Paper>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                  }
                />
              </EventListItem> */}
            {/* </List> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventList;
