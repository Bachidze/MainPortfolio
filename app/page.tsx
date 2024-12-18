import About from "./Components/organisms/About";
import Experience from "./Components/organisms/Experience";
import Media from "./Components/organisms/Media";
import SwiperComponent from "./Components/organisms/Swiper";

export default function Home() {
  return (
    <>
    <SwiperComponent />
    <Experience />
    <About />
    <Media />
    </>
  );
}
