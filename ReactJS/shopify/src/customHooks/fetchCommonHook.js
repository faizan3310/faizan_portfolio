import { useEffect, useState } from "react";

export function useCommonFetch(apiUrl) {
    const [apiResponse, setApiResponse] = useState(null);
    useEffect(() => {
        fetch(apiUrl).then(response => response.json()).then((res)=> {
            setApiResponse(res);
        })
    }, [apiUrl]);
    return apiResponse;
}