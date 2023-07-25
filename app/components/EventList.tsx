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
import Paper, { PaperProps } from '@mui/material/Paper';
import { fetchEventData } from '../api/services/Event';
import format from 'date-fns/format';
import getEventOverviewList from '../helpers/getEventOverviewList';
import { useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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
  height: '130px',
  width: '600px',
}));

const EventDateContainer = styled(Paper)<PaperProps>(({ theme }) => ({
  boxShadow:
    '0px 3px 1px -2px rgba(252, 163, 17, 0.3), 0px 2px 2px 0px rgba(252, 163, 17, 0.24), 0px 1px 5px 0px rgba(252, 163, 17, 0.22); !important',
}));

const EventList = ({ events, eventCreations, venues }: any) => {
  const [eventOverview, setEventOverview] = useState([]);
  async function getList() {
    let eventOverviewList = await getEventOverviewList(
      events,
      eventCreations,
      venues
    );
    setEventOverview(eventOverviewList);
  }
  getList();
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
            {eventOverview?.map((eventOverviewItem: any) => {
              return (
                <EventListItem
                  alignItems="flex-start"
                  className="h-[130px] w-[600px]"
                >
                  <EventDateContainer
                    elevation={3}
                    className="h-[80px] w-[80px]"
                  >
                    <div className="flex flex-col items-center justify-center h-full w-full">
                      <div>
                        {' '}
                        {format(new Date(eventOverviewItem.dateOf), 'MMM')}
                      </div>
                      <div className="flex-1 text-3xl font-bold">
                        {' '}
                        {format(new Date(eventOverviewItem.dateOf), 'do')}
                      </div>
                    </div>
                  </EventDateContainer>
                  <div className="flex flex-col pl-4">
                    <div>
                      <span>
                        {' '}
                        {`${format(new Date(eventOverviewItem.dateOf), 'iii')}`}
                      </span>
                      <FiberManualRecordIcon className="text-[8px] mx-2" />
                      <span>{`${eventOverviewItem.timeOf}`}</span>
                    </div>
                    <div className="font-bold text-lg">
                      {eventOverviewItem.venueName}
                    </div>
                    <div>{eventOverviewItem.address}</div>
                    <div className="text-sm pt-4">{`Capacity ${eventOverviewItem.capacity}`}</div>
                  </div>
                </EventListItem>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventList;
