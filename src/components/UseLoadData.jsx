import { useState, useEffect } from "react";

function UseLoadData(fetchFunction) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response =  await fetchFunction();
                setData(response); 
            } catch (error) {
                setError(error.message || "Error al cargar datos");
            } finally {
                setLoading(false);  
            }
        };

        loadData();
    }, [fetchFunction]);

    return { data, loading, error };
}

export default UseLoadData;

