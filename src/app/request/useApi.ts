import { useState } from 'react';
import { ContentType } from '../data/initContent';

export default function useApi(baseUrl: string) {
    const [data, setData] = useState<ContentType[]>([]);
    const [isQuerying, setIsQuerying] = useState(false);

    const list = async () => {
        setIsQuerying(true);
        const res = await fetch(baseUrl);
        const resData = await res.json();

        setData([...resData]);
        setIsQuerying(false);
    };

    const add = async (post: ContentType) => {
        setIsQuerying(true);
        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });

        setData([...data, post]);
        setIsQuerying(false);
    };

    // const edit = async (id: string, newTitle: string) => {
    //     setIsQuerying(true);
    //     await fetch(baseUrl, {
    //         method: 'PUT',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ id, newTitle }),
    //     });
    //     const copy = [...data];
    //     const index = copy.findIndex((item) => item.id === id);
    //     copy[index].title = newTitle;
    //     setData(copy);
    //     setIsQuerying(false);
    // };

    // const remove = async (id) => {
    //     setIsQuerying(true);
    //     await fetch(`${baseUrl}?item=${id}`, {
    //         method: 'DELETE',
    //     });
    //     const copy = [...data];
    //     copy.splice(
    //         copy.findIndex((item) => item.id === id),
    //         1,
    //     );
    //     setData(copy);
    //     setIsQuerying(false);
    // };

    const api = {
        list,
        add,
        // edit,
        // remove,
    };

    return [data, isQuerying, api];
}
