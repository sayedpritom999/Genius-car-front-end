import { useState, useEffect } from 'react';

const useServiceDetail = serviceId => {
    const [service, setService] = useState({});

    useEffect(() => {
        const uri = `https://quiet-forest-13370.herokuapp.com/service/${serviceId}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])

    return [service];
}

export default useServiceDetail;