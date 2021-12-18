import { useState, useEffect } from 'react';
import { ContentType } from '../data/initContent';

const useJsonFetch = (url: string, options: any) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<ContentType[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFunc = async () => {
            setLoading(true);

            const response = await fetch(url, options);
            const jsonData = await response.json();

            if (jsonData.error) setError(jsonData.status);
            console.log(jsonData);
            setData(jsonData.data);
            setLoading(false);
        };

        if (url) fetchFunc();
    }, [url, options]);

    return { loading, data, error };
};

export default useJsonFetch;
