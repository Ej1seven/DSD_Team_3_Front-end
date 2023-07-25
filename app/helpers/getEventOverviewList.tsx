export default async function getEventOverviewList(
  events: any,
  eventCreations: any,
  venues: any
) {
  let eventOverviewList: any = [];

  for (let i = 0; i < eventCreations.length; i++) {
    let event = await events.filter(
      (event: any) => event.event_id === eventCreations[i].event_id
    );
    let venue = await venues.filter(
      (venue: any) => venue.venue_id === eventCreations[i].venue_id
    );
    let eventOverview: any = {
      hostName: '',
      dateOf: '',
      timeOf: '',
      venueName: '',
      capacity: '',
      address: '',
    };
    eventOverview.hostName = event[0].name;
    eventOverview.dateOf = event[0].dateOf;
    eventOverview.timeOf = event[0].timeOf;
    eventOverview.venueName = venue[0].name;
    eventOverview.capacity = venue[0].capacity;
    eventOverview.address = venue[0].address;
    eventOverviewList.push(eventOverview);
  }
  console.log();
  return eventOverviewList;
}
