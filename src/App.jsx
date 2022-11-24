import "./App.css";
import Toggle from "./components/Toggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cats from "./components/Cats";
import Count from "./components/Count";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cats />
      </QueryClientProvider>
      {/* <Toggle /> */}
      <br />
      <br />
      {/* <Count /> */}
    </div>
  );
}

export default App;
