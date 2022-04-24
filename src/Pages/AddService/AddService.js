import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/service/`;
        fetch(url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(data => console.log(data))

    };
    return (
        <div className="w-50 mx-auto my-5">
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2" placeholder="Name" {...register("name")} />
                <textarea className="mb-2" placeholder="Description" {...register("description")} />
                <input className="mb-2" placeholder="Price" type="number" {...register("price")} />
                <input className="mb-2" placeholder="PhotoUrl" type="text" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;