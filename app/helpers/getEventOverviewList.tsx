export default function getEventOverviewList(
  events: [],
  eventCreations: any[],
  venues: []
) {
  let eventOverviewList: any = [];

  for (let i = 0; i < eventCreations.length; i++) {
    let event: any = events.filter(
      (event: {event_id: string}) =>
        event.event_id === eventCreations[i].event_id
    );
    let venue: any = venues.filter(
      (venue: {venue_id: string}) =>
        venue.venue_id === eventCreations[i].venue_id
    );
    let eventOverview: {
      hostName: string;
      dateOf: string;
      timeOf: string;
      venueName: string;
      capacity: string;
      address: string;
    } = {
      hostName: "",
      dateOf: "",
      timeOf: "",
      venueName: "",
      capacity: "",
      address: "",
    };
    eventOverview.hostName = event[0].name;
    eventOverview.dateOf = event[0].dateOf;
    eventOverview.timeOf = event[0].timeOf;
    eventOverview.venueName = venue[0].name;
    eventOverview.capacity = venue[0].capacity;
    eventOverview.address = venue[0].address;
    eventOverviewList.push(eventOverview);
  }
  return eventOverviewList;
}
