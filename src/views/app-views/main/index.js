import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Main = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/dashboard`} />
      <Route path={`${match.url}/customers`} component={lazy(() => import(`./customers`))} />

			{/* <Route path={`${match.url}/dashboard`} component={lazy(() => import(`./dashboard`))} />
			<Route path={`${match.url}/catalog`} component={lazy(() => import(`./catalog`))} />
			<Route path={`${match.url}/combo`} component={lazy(() => import(`./combo`))} />
			<Route path={`${match.url}/orders`} component={lazy(() => import(`./orders`))} />
			<Route path={`${match.url}/banners`} component={lazy(() => import(`./banners`))} />
			<Route path={`${match.url}/promocodes`} component={lazy(() => import(`./promocodes`))} />
			<Route path={`${match.url}/shops`} component={lazy(() => import(`./shops`))} />
			<Route path={`${match.url}/staff`} component={lazy(() => import(`./staff`))} />
			<Route path={`${match.url}/mails`} component={lazy(() => import(`./mails`))} /> */}
    </Switch>
  </Suspense>
);

export default Main;