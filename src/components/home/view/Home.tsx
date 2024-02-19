import Footer from "design/template/Footer";
import Widgets from "../controller/Widgets";
import Qna from "./home/Qna";
import Promotions from "./home/Promotions";
import Team from "./home/Team";

export default function Home() {
  return (
    <Widgets>
      <Promotions />
      <Qna />
      <Team />
      <Footer />
    </Widgets>
  );
}
