import { createContext, useState, useEffect } from "react";
import { getData } from "../lib/services";
import { pantryContext, pantryItem, dashboardData } from "../types";

export const PantryContext = createContext<pantryContext>({});

export const PantryProvider = ({ children }) => {
    const [data, setData] = useState({});
    const [retry, setRetry] = useState(false);
    const [error, setError] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [selected, setSelected] = useState({
        name: '',
        qty: 0,
        bought: '',
        lifespan: 0,
        usedBy:{}
    })

    useEffect(() => {
        getData('pantry/fruits')
        .then((retrievedData : any) => {
            setData({fruits: retrievedData})
        })
        .catch((error) => {setError(!error)})
        .finally(() => {setLoaded(!isLoaded);})
    }, [retry])

    return (
        <PantryContext.Provider value={{
            data,
            setData,
            retry,
            setRetry,
            error,
            isLoaded,
            selected,
            setSelected
        }}>
            { children }
        </PantryContext.Provider>
    );
}