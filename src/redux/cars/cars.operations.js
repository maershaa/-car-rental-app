import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Создаем экземпляр Axios с базовым URL
const instance = axios.create({
  baseURL: "https://65e95c314bb72f0a9c513d32.mockapi.io",
});

const toastOptions = { position: 'top-center', autoClose: 3000 };

// Создаем асинхронное Thunk-действие для запроса данных о машинах
export const fetchCars = createAsyncThunk(
  "cars/getAll",
  async (_, thunkApi) => {
    try {
      console.log("fetchCars started");

      const { data } = await instance.get("/advert");
      console.log("fetchCars data",data);
      return data;
    } catch (error) {
      console.error("fetchCars error", error.message);

      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const addToFavorites = creteAsyncThunk(
//   "cars/addToFavorite",
//   async (carId, thunkApi) => {
//     try {
//       const { data } = await instance.post(`/cars/favorites/add/${carId}`);

//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

//   'cocktails/deleteFromFavorites',
//   async (id, thunkApi) => {
//     try {
//       const { data } = await instance.delete(`/drinks/favorites/remove/${id}`);

//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchDrinkDetails = createAsyncThunk(
//   'cocktails/fetchDrinkDetails',
//   async (id, thunkApi) => {
//     try {
//       const { data } = await instance.get(`/drinks/${id}`);

//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchCarsBySearch = createAsyncThunk(
//   "cars/getBySearch",
//   async (params, thunkApi) => {
//     try {
//       const { data } = await instance.get("/cars/search", { params });
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const carsOperations = {
  fetchCars,
  // addToFavorites,
  // fetchCarsBySearch,
};
