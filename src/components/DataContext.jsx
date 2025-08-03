import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext(null);

export function DataProvider({ children }){

    const [tourists, setTourists] = useState([]);
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const base = import.meta.env.BASE_URL;
        //parallerly fetch data
        Promise.all([
            fetch(`${base}data/TouristPageData.json`).then((r) => (r.ok ? r.json() : [])),
            fetch(`${base}data/FoodPageData.json`).then((r) => (r.ok ? r.json() : [])),
        ])
        .then(([touristData, foodData]) => {
            setTourists(touristData);
            setFoods(foodData);
        })
        .catch((e) => {
        console.error("data loading failed", e);
      })
      .finally(() => setLoading(false));
    },[])

    return(
        <DataContext.Provider value={{tourists, foods, loading}}>
            {children}
        </DataContext.Provider>
    )
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be inside DataProvider");
  return ctx;
}