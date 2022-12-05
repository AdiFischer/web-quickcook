import { useNavigate } from 'react-router-dom';
import { Card, Col, Row, Spin } from "antd";
import { useContext, useEffect, useState } from "react";
import '../assets/Styles.css';
// import { RecipesContext} from "../context/RecipesContext"
// import { UserChoiceContext } from "../context/UserChoiceContext";

const { Meta } = Card;

export default function AllRecipes({ bestFor }) {
  const [recipes, setRecipes] = useState();
  // const { bestFor } = useContext(UserChoiceContext);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/recipes/type/${bestFor}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("this is", bestFor);
        // const recipes = data.filter((recipes) => recipes.type === bestFor);
        setRecipes(data);
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
              <Row 
              className='row'
              gutter={16} justify="space-around" align="middle"
              >
                {recipes.map((recipe) => {
                  return (
                      <Col
                        key={recipe._id}
                        className="recipes-cards-group"
                        span={8}
                      >
                        <Card
                          className="recipe-card"
                          loading={!recipe}
                          cover={
                            <img onClick={() => navigate(`/recipe/${recipe._id}`)}
                              className="recipe-images"
                              alt={recipe?.name}
                              src={recipe?.image} 
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

