import { useCallback, useState } from 'react';
import api from './api';
import { ContentType } from '../data/initContent';

type UseFetchData = { url: string; item: ContentType };

const useFetchData = ({ url, item }: UseFetchData) => {
    const [res, setRes] = useState({ data: null, error: null, isLoading: false });
    const [error, setError] = useState(null);
    // You POST method here
    const callAPI = useCallback(() => {
        setRes((prevState) => ({ ...prevState, isLoading: true }));

        api.post(url, item)
            .then((res) => {
                setRes({ data: res.data, isLoading: false, error: null });
            })
            .catch((error) => {
                setRes({ data: null, isLoading: false, error });
            });
    }, [url, item]);
    return [res, callAPI];
};
