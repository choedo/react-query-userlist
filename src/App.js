import { QueryClient, QueryClientProvider } from "react-query";
import RQ from "./components/RQ";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      {/* 리액트 쿼리 초기 설정 */}
      <QueryClientProvider client={queryClient}>
        <RQ />
      </QueryClientProvider>
    </div>
  );
}

export default App;
