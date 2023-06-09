import Menu from "../components/menu.tsx";
import MeAbout from "../components/me-about.tsx";
import Footer from "../components/footer.tsx";

const AboutMe = () => (
  <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
    <Menu lang="en" page="about" />
    <MeAbout translation="en" />
    <Footer />
  </div>
);
export default AboutMe;
