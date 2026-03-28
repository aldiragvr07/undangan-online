import { Suspense } from "react";
import InvitationGate from "@/components/InvitationGate";
import CoverSection from "@/components/sections/CoverSection";
import ProfileSection from "@/components/sections/ProfileSection";
import EventSection from "@/components/sections/EventSection";
import GallerySection from "@/components/sections/GallerySection";
import LoveStorySection from "@/components/sections/LoveStorySection";
import RsvpSection from "@/components/sections/RsvpSection";
import GiftSection from "@/components/sections/GiftSection";
import FloralDivider from "@/components/ui/FloralDivider";

export default function HomePage() {
  return (
    <Suspense>
      <InvitationGate>
        <main className="flex flex-col w-full max-w-[480px] mx-auto overflow-x-hidden">
          <CoverSection />
          <FloralDivider bgColor="#FAF3E8" />
          <ProfileSection />
          <FloralDivider bgColor="#EEEBE6" />
          <EventSection />
          <FloralDivider bgColor="#FAF3E8" color="#8B7355" />
          <GallerySection />
          <FloralDivider bgColor="#FAF3E8" />
          <LoveStorySection />
          <FloralDivider bgColor="#FAF3E8" />
          <RsvpSection />
          <FloralDivider bgColor="#F5ECD8" />
          <GiftSection />
        </main>
      </InvitationGate>
    </Suspense>
  );
}
