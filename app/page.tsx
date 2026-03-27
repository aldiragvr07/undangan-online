import CoverSection from "@/components/sections/CoverSection";
import ProfileSection from "@/components/sections/ProfileSection";
import EventSection from "@/components/sections/EventSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CountdownSection from "@/components/sections/CountdownSection";
import GallerySection from "@/components/sections/GallerySection";
import RsvpSection from "@/components/sections/RsvpSection";
import GiftSection from "@/components/sections/GiftSection";
import InvitationGate from "@/components/InvitationGate";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense>
      <InvitationGate>
      <main className="flex flex-col items-center">
        <CoverSection />
        <ProfileSection />
        <EventSection />
        <TimelineSection />
        <CountdownSection />
        <GallerySection />
        <RsvpSection />
        <GiftSection />
      </main>
      </InvitationGate>
    </Suspense>
  );
}

