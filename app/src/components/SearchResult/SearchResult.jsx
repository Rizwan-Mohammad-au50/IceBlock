import styled from "styled-components";
import { BACKND_URL } from "../../App";
import { Button } from "../../App";
import { Container } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardsContainer>
      <Container>
      <CardContainer>
        {data?.map(({ name, text, image, price }) => (
          <FoodCard key={name}>
            <div className="foodimg">
              <img src={BACKND_URL + image} alt="FoodImage" />
            </div>
            <div className="foodInfo">
              <div className="information">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <Button>Rs. {price.toFixed(2)}/-</Button>
            </div>
          </FoodCard>
        ))}
      </CardContainer>
      </Container>
    </FoodCardsContainer>
  );
};

export default SearchResult;

const FoodCardsContainer = styled.section`
  min-height: calc(100vh - 210px);
  /* background-image: url("/images/bg_img03.jpg"); */
  background-size: cover;
`;
const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;

    .foodimg{
      margin-right: 3px;
    }
`;

const FoodCard = styled.div`

  background: radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #011e1f 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    ),
    radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #3a0057 0%,
      rgba(135, 38, 183, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
  border: 1px solid whitesmoke;

    width:340px ;
    height: 167px;
    display: flex;
    padding: 8px;

    .foodInfo{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: end;

        h3{
            margin-top: 8px;
            font-size: 16px;
            font-weight: 500;
        }
        p{
            margin-top: 4px;
            font-size: 12px;
        }
        Button{
            font-size: 12px;
        }
    }
`;
