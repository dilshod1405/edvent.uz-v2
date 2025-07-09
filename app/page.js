"use client";

import AudienceSection from "@/components/home/AudienceSection";
import BenefitsSection from "@/components/home/BenefitSection";
import BlogSection from "@/components/home/BlogSection";
import CallToAction from "@/components/home/CallToAction";
import ChatBot from "@/components/home/ChatBot";
import CollaborationSection from "@/components/home/CollaborationSection";
import CourseSection from "@/components/home/CourseSection";
import ExaminationSection from "@/components/home/ExaminationSection";
import HeroSection from "@/components/home/HeroSection";
import SpecialityFilter from "@/components/home/SpecialityFilter";
import StatsSection from "@/components/home/StatsSection";
import VideoBanner from "@/components/home/VideoBanner";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Loader from "@/components/common/Loader";

export default function Home() {
  return (
    <>
      <Loader duration={1500} />
      <div className="bg-white text-text font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="max-w-full mx-auto px-4 py-6 flex-grow">
          <HeroSection />
          <SpecialityFilter />
          <CourseSection />
          <StatsSection />
          <ExaminationSection />
          <BenefitsSection />
          <CallToAction />
          <VideoBanner />
          <AudienceSection />
          <BlogSection />
          <CollaborationSection />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </>
  );
}
