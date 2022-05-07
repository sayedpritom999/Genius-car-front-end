import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://quiet-forest-13370.herokuapp.com/service')
            .then(result => result.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices]
}

export default useServices;