import { useCallback, useState } from 'react';
import api from './api';
import { ContentType } from '../data/initContent';

type UseFetchData = { url: string; item: ContentType };

const useFetchData = ({ url, item }: UseFetchData) => {
    const [resData, setResData] = useState({ error: null, isLoading: false });
    const [error, setError] = useState(null);
    // You POST method here
    const callAPI = useCallback(() => {
        setResData((prevState) => ({ ...prevState, isLoading: true }));

        api.post(url, item)
            .then((res) => {
                setResData({ isLoading: false, error: null });
            })
            .catch((err) => {
                setResData({ isLoading: false, error: err });
            });
    }, [url, item]);
    return [resData, callAPI];
};
