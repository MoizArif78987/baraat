import { Hero } from "./components/Hero";
import { Couple } from "./components/Couple";
import { EventDetails } from "./components/EventDetails";
import { VenueMap } from "./components/VenueMap";
import { Closing } from "./components/Closing";

export default function App() {
  return (
    <main>
      <Hero />
      <Couple />
      <EventDetails />
      <VenueMap />
      <Closing />
    </main>
  );
}
