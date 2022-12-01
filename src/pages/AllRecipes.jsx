
import { Card, Col, Row, Spin } from "antd";
import { useContext, useEffect } from "react";
import { RecipesContext} from "../context/RecipesContext"
import { UserChoiceContext } from "../context/UserChoiceContext";

const { Meta } = Card;

export default function AllRecipes() {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { bestFor } = useContext(UserChoiceContext);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/recipes`)
      .then((res) => res.json())
      .then((data) => {
        console.log("this is", bestFor);
        const recipes = data.filter((recipes) => recipes.type === bestFor);
        setRecipes(recipes);
      })
      .catch((err) => console.error(err));
  }, [bestFor]);
// console.log(recipes)

  return (
    <>
    <div id="all-recipes">
      <h1 className="recipe-type"></h1>
      <div>
        {!recipes ? (
          <Spin size="large" />
        ) : (
          <div className="recipe-cards-overall">
            <Row gutter={16} justify="space-around" align="middle">
              {recipes.map((recipe) => {
                return (
                  <div>
                    <Col
                      key={recipe._id}
                      className="recipes-cards-group"
                      span={8}
                    >
                      <Card
                        className="recipe-card"
                        loading={!recipe}
                        cover={  
                          <img
                            className="recipe-images"
                            alt={recipe?.name}
                            src={recipe?.image} width={300}
                          />
                        }
                        hoverable
                      >
                        <Meta
                          title={recipe?.name}
                        />
                        {/* <div className="title-paragraphs">
                          <p id="styling-title">{recipe?.type}</p>
                        </div> */}
                      </Card>
                    </Col>
                  </div>
                );
              })}
            </Row>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

