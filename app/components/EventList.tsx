"use client";
import format from "date-fns/format";
import getEventOverviewList from "../helpers/getEventOverviewList";
import {useEffect, useState} from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Pagination from "@mui/material/Pagination";
import {useGlobalContext} from "../context/store";
import {
  ColorButton,
  EventDateContainer,
  EventListItem,
} from "./StyledComponents";

interface EventList {
  events: [];
  eventCreations: [];
  venues: [];
}

const EventList = ({events, eventCreations, venues}: EventList) => {
  const {setEventOverviewData, eventOverviewData, calendarDay} =
    useGlobalContext();
  const pageSize: number = 10;
  const [pagination, setPagination] = useState<{
    count: number;
    from: number;
    to: number;
  }>({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const [eventOverview, setEventOverview] = useState<[]>([]);
  const handlePageChange = (event: any, page: number) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({...pagination, from: from, to: to});
  };
  const service = {
    getData: ({from, to}: {from: number; to: number}) => {
      return new Promise<{count: number; data: any}>(
        async (resolve, reject) => {
          let filteredData: [] | never[] = [];
          filteredData = eventOverviewData.filter(
            (dataItem: {dateOf: string}) =>
              new Date(dataItem.dateOf) >= new Date(calendarDay)
          );
          const data: [] | never[] = filteredData.slice(from, to);
          data.sort(function compare(a: {dateOf: string}, b: {dateOf: string}) {
            let dateA: Date = new Date(a.dateOf);
            let dateB: Date = new Date(b.dateOf);
            return dateA.valueOf() - dateB.valueOf();
          });
          resolve({
            count: filteredData.length,
            data: data,
          });
        }
      );
    },
  };

  useEffect(() => {
    service
      .getData({from: pagination.from, to: pagination.to})
      .then((response: {count: number; data: any}) => {
        setPagination({...pagination, count: response.count});

        setEventOverview(response.data);
      });
  }, [pagination.from, pagination.to, eventOverviewData, calendarDay]);

  useEffect(() => {
    setPagination({...pagination, count: eventOverviewData.length});
  }, [pagination.from, pagination.to]);
  useEffect(() => {
    (async () => {
      setEventOverviewData(
        await getEventOverviewList(events, eventCreations, venues)
      );
    })();
  }, []);
  return (
    <div className="flex flex-col gl:flex-row gl:gap-10 flex-1">
      <div className="">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <ColorButton variant="contained">Event Type</ColorButton>
            <ColorButton variant="contained">Location</ColorButton>
            <ColorButton variant="contained">Date</ColorButton>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="mb-16">
          <div className="w-full">
            {eventOverview?.map((eventOverviewItem: any, index) => {
              return (
                <EventListItem
                  alignItems="flex-start"
                  className="h-[130px] w-[600px]"
                  key={index}
                >
                  <EventDateContainer
                    elevation={3}
                    className="h-[80px] w-[80px]"
                  >
                    <div className="flex flex-col items-center justify-center h-full w-full">
                      <div>
                        {" "}
                        {format(new Date(eventOverviewItem.dateOf), "MMM")}
                      </div>
                      <div className="flex-1 text-3xl font-bold">
                        {" "}
                        {format(new Date(eventOverviewItem.dateOf), "do")}
                      </div>
                    </div>
                  </EventDateContainer>
                  <div className="flex flex-col pl-4">
                    <div>
                      <span>
                        {" "}
                        {`${format(new Date(eventOverviewItem.dateOf), "iii")}`}
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
          {pagination.count > 0 && (
            <Pagination
              count={Math.ceil(pagination.count / pageSize)}
              onChange={handlePageChange}
            />
          )}{" "}
        </div>
      </div>
    </div>
  );
};
export default EventList;
