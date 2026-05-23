import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function Routes() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <WouterRouter base="/qra-strategies-web">
        <Routes />
      </WouterRouter>
    </ErrorBoundary>
  );
}

export default App;
