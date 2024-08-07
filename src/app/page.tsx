import Ensure from "@/components/Ensure";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import Label from "@/components/Label";
import OurTeam from "@/components/OurTeam";
import Platforms from "@/components/Platforms";
import SegmentVerification from "@/components/SegmentVerification";

export default function Home() {
  return (
    <>
      <Header />
      <Label/>
      <SegmentVerification />
      <OurTeam/>
      <Ensure/>
      <Platforms/>
      <Faq/>
      <GetInTouch/>
      <Footer/>
    </>
  );
}
