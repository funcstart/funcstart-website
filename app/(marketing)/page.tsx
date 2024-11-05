import { infos } from "@/config/landing";
import BentoGrid from "@/components/sections/bentogrid";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import InfoLanding from "@/components/sections/info-landing";
import Testimonials from "@/components/sections/testimonials";

const HomePage = () => {
  return (
    <main>
      <HeroLanding stars={2} />
      <BentoGrid />
      <InfoLanding data={infos[0]} reverse={true} />
      <Features />
      {/* <Testimonials /> */}
    </main>
  );
};

export default HomePage;
