import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { Suspense } from "react";
import { Loader } from "./components/Loader";


export const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <main className="bg-black  overflow-hidden">
        <RouterProvider router={router} />
      </main>
    </Suspense>
  );
};
