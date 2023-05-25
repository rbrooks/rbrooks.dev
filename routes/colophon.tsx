import Menu from "../components/menu.tsx";
import ColophonContent from "../components/colophon.tsx";
import Footer from "../components/footer.tsx";

const Colophon = () => (
  <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
    <Menu lang="en" page="colophon" />
    <ColophonContent translation="en" />
    <Footer />
  </div>
);
export default Colophon;
