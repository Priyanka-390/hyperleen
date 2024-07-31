import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import SegmentVerification from "@/components/SegmentVerification";

export default function Home() {
  return (
    <>
      <Header />
      <SegmentVerification/>
      <Faq/>
      <GetInTouch/>
      <Footer/>
    </>
  );
}
