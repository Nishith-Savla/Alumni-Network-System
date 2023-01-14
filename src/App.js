import { QueryClientProvider } from "react-query";
import { client } from "util";
import Routes from "./Routes";

function App() {
  return (
    <QueryClientProvider client={client}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
