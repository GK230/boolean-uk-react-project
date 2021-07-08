import MenuItem from "./MenuItem";
import Description from "./Description";
import useStore from "../store";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SmallSetMealForm from "./SmallSetMealForm";
import MediumSetMealForm from "./MediumSetMealForm";
import LoadingPage from "../pages/LoadingPage";

function MenuSections() {
  let { path, url } = useRouteMatch();

  const veg = useStore((store) => store.getVeg());
  const beans = useStore((store) => store.getBeans());
  const dal = useStore((store) => store.getDal());
  const breadRice = useStore((store) => store.getBreadRice());
  const sides = useStore((store) => store.getSides());
  const smallSetMeal = useStore((store) => store.getSmallSetMeal());
  const medSetMeal = useStore((store) => store.getMedSetMeal());

  const drinks = useStore((store) => store.getDrinks());
  const vegDes = useStore((store) => store.getVegDes());
  const beansDes = useStore((store) => store.getBeansDes());
  const dalDes = useStore((store) => store.getDalDes());
  const breadDes = useStore((store) => store.getBreadDes());
  const saladDes = useStore((store) => store.getSaladDes());
  const papadomsDes = useStore((store) => store.getPapadomsDes());
  const smallSetMealDes = useStore((store) => store.getSmallSetMealDes());
  const mediumSetMealDes = useStore((store) => store.getMediumSetMealDes());
  console.log(smallSetMeal);

  if (vegDes.length === 0 || beansDes === 0 || dalDes === 0) {
    return <LoadingPage />;
  }
  return (
    <Switch>
      <Route exact path={`${path}/veg`}>
        <article>
          <Description description={vegDes[0].description} />
          <ul>
            {veg.map((item) => (
              <li key={item.id}>
                <MenuItem item={item} />
              </li>
            ))}
          </ul>
        </article>
      </Route>
      <Route exact path={`${path}/beans`}>
        <article>
          <Description description={beansDes[0].description} />
          <ul>
            {beans.map((item) => (
              <li key={item.id}>
                <MenuItem item={item} />
              </li>
            ))}
          </ul>
        </article>
      </Route>

      <Route path={`${path}/dal`}>
        <article>
          <Description description={dalDes[0].description} />
          <ul>
            {dal.map((item) => (
              <li key={item.id}>
                <MenuItem item={item} />
              </li>
            ))}
          </ul>
        </article>
      </Route>

      <Route path={`${path}/bread-rice`}>
        <article>
          <Description description={breadDes[0].description} />
          <ul>
            {breadRice.map((item) => (
              <li key={item.id}>
                <MenuItem item={item} />
              </li>
            ))}
          </ul>
        </article>
      </Route>

      <Route path={`${path}/sides`}>
        <article>
          <Description description={saladDes[0].description} />
          <Description description={papadomsDes[0].description} />

          <ul>
            {sides.map((item) => (
              <li key={item.id}>
                <MenuItem item={item} />
              </li>
            ))}
          </ul>
        </article>
      </Route>

      <Route path={`${path}/set-meals`}>
        <article>
          <Description description={smallSetMealDes[0].description} />
          <ul>
            {smallSetMeal.map((item) => (
              <li key={item.id}>
                <MenuItem item={item} />
              </li>
            ))}
          </ul>
          <SmallSetMealForm />
          <Description description={mediumSetMealDes[0].description} />
          <ul>
            {medSetMeal.map((item) => (
              <li key={item.id}>
                <MenuItem item={item} />
              </li>
            ))}
          </ul>
          <MediumSetMealForm />
        </article>
      </Route>

      <Route path={`${path}/drinks`}>
        <article>
          <Description />
          <ul>
            {drinks.map((item) => (
              <li key={item.id}>
                <MenuItem item={item} />
              </li>
            ))}
          </ul>
        </article>
      </Route>
    </Switch>
  );
}

export default MenuSections;
