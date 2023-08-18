import Carousel from "react-bootstrap/Carousel";
import { CarouselImage, CarouselImage2, CarouselImage3 } from "../components";
import Wrapper from "../assets/wrappers/HomePage";
Wrapper;

const Mission = () => {
  return (
    <Wrapper>
      <Carousel>
        <Carousel.Item interval={15000}>
          <CarouselImage text="slide" />
          <Carousel.Caption className="slide">
            <h1>Inclusiveness</h1>
            <p>
              SAGI is working to bring all Cameroonians living in the United
              States of America, together without distinction of age, race,
              tribe, or religion for the main purpose of helping each other in
              case one of us happens to pass away.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={15000}>
          <CarouselImage2 text=" slide" />
          <Carousel.Caption className="slide">
            <h1>Focus</h1>
            <p>
              Alleviate the financial burden of losing a loved one from the
              Cameroonian community, Independently of where the person passes
              away, SAGI will make sure the family receive the help, and our
              objective remain to bring individual contribution to less than
              #1.00
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage3 text="slide" />
          <Carousel.Caption className="slide">
            <h1>Equality</h1>
            <p>
              Facilitate the repatriation or the burial of the SAGI member,
              deceased in the USA or abroad. Collect contributions for any
              members who passes away and help the affected family to bury the
              love one anywhere of their choosing. Transfer all funds collected
              to the funeral home or family for repatriation or burial.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
};
export default Mission;
