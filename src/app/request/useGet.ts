// import { useState, useEffect } from 'react';
// import { ContentType } from '../data/initContent';
// import api from './api';

// const useGet = (operation: string) => {
//     const [loading, setLoading] = useState(false);
//     const [data, setData] = useState<ContentType[]>([]);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchFunc = async () => {
//             setLoading(true);

//             try {
//                 const response = await api.posts.getPosts();
//                 setData(response);
//             } catch (e) {
//                 setError(e.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchFunc();
//     }, [operation]);

//     return {
//         data,
//         setData,
//         loading,
//         error,
//     };
// };

// export default useGet;
