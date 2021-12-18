import { useState, useEffect } from 'react';
import postList from '../logic/ContentList';
import { ContentType } from '../data/initContent';
import api from './api';

const useFetch = (operation: string, options: ContentType | string | null) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<ContentType[]>([]);
    const [error, setError] = useState<string | null>(null);

    postList.data = data;

    const onCreate = (item: ContentType) => {
        postList.add(item);
        setData(postList.getData());
        api.posts.addPost(item);
    };

    // const onEdit = (item: ContentType) => {
    //     postList.
    // }

    useEffect(() => {
        const fetchFunc = async () => {
            setLoading(true);

            // const response = await callback();
            // if (response.error) setError(response.status);

            if (operation === 'INIT') {
                const response = await api.posts.getPosts();
                setData(response);
                setLoading(false);
            }

            if (operation === 'ADD') onCreate(options as ContentType);
            // if (operation === 'EDIT')
        };

        fetchFunc();
    }, [operation]);

    return { postList, setData, loading };
};

export default useFetch;

// import { useState, useEffect } from 'react';
// import { ContentType } from '../data/initContent';

// const useJsonFetch = (url: string, options: any) => {
//     const [loading, setLoading] = useState(false);
//     const [data, setData] = useState<ContentType[]>([]);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchFunc = async () => {
//             setLoading(true);

//             const response = await fetch(url, options);
//             const jsonData = await response.json();

//             if (jsonData.error) setError(jsonData.status);
//             setData(jsonData);
//             setLoading(false);
//         };

//         if (url) fetchFunc();
//     }, [url, options]);

//     return { data, loading };
// };

// export default useJsonFetch;
