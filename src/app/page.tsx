import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import Label from "@/components/Label";
import OurTeam from "@/components/OurTeam";
import SegmentVerification from "@/components/SegmentVerification";

export default function Home() {
  return (
    <>
      <Header />
      <Label/>
      <SegmentVerification />
      <OurTeam/>
      <Faq/>
      <GetInTouch/>
      <Footer/>
    </>
  );
}
