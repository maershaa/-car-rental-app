import React, { useEffect } from "react";

import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { Loader } from "./components/Loader/Loader";
import { useDispatch } from "react-redux";
import { fetchCars } from "./redux/cars/cars.operations";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("App component mounted");
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
          <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
