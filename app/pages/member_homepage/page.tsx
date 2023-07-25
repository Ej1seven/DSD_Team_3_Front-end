import {
  fetchEventCreationData,
  fetchEventData,
} from '@/app/api/services/Event';
import { fetchVenueData } from '@/app/api/services/Venue';
import EventList from '@/app/components/EventList';
import Navbar from '@/app/components/Navbar';

export default async function MemberHomepage({ params }: any) {
  const events = await fetchEventData();
  const eventCreations = await fetchEventCreationData();
  const venues = await fetchVenueData();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col items-center flex-grow">
          <div className="px-6 sm:px-4 xl:px-0 xl:px-4 w-full mx-auto px-4 sm:px-24 lg:px-10 xl:px-10 mt-6 pb-14 md:max-w-screen-xl">
            <div className="flex flex-col gl:flex-row text-primary mt-6 sm:mt-4 mb-10 justify-between">
              <div className="w-full">
                <h1 className="text-2xl leading-9 gl:text-heading leading-10 font-bold">
                  Erik Hunter
                </h1>
              </div>
              <EventList
                events={events}
                eventCreations={eventCreations}
                venues={venues}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
