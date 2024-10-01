import React, { useState } from 'react'

interface Biodata {
    name: string;
    age: number;
    email: string;
    address: string;
}

const BiodataForm = () => {
    const [formData, setFormData] = useState<Biodata>({
        name: '',
        age: 0,
        email: '',
        address: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        const updatedValue = name === 'age' ? Number(value) : value;

        setFormData({...formData, [name]: updatedValue});
    };

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/biodata',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Name' onChange={handleChange} required />
        <input type="number" name="age" placeholder='Age' onChange={handleChange} required />
        <input type="email" name="email" placeholder='Email' onChange={handleChange} required />
        <input type="text" name="address" placeholder='Address' onChange={handleChange} required />
        <button type="submit">Submit</button>
    </form>
  )
}

export default BiodataForm