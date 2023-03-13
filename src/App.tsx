import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import AuthForm  from "./components/Login/AuthForm";
import BasicTaskList from "./components/TaskMenu/TaskList";

export default function App() {
  const [auth, setAuth] = useState<boolean>(false);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {auth ? <BasicTaskList /> : <AuthForm auth={setAuth}/>}
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
