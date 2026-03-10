import About from "@/app/components/sections/About";
import Experience from "@/app/components/sections/Experience";
import Media from "@/app/components/sections/Media";
import ProjectSlider from "@/app/components/sections/ProjectSlider";

export default function Home() {
  return (
    <main>
      <ProjectSlider />
      <Experience />
      <About />
      <Media />
    </main>
  );
}
