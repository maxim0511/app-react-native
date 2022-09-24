import { QueryClient, QueryClientProvider } from "react-query";
import { Navigation } from "./screens/Navigation";

export default function App() {
  return (
      <QueryClientProvider client={new QueryClient()}>
        <Navigation/>
      </QueryClientProvider>
  );
}
