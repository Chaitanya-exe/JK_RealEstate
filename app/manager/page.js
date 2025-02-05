"use client"
import { CldUploadWidget } from 'next-cloudinary';
import React from 'react'
import { useState } from 'react'

const Manager = () => {
    const [property, setProperty] = useState({
        address: "",
        location: "",
        size: 0,
        owner: "",
        images: []
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(property)
        try {
            const response = await fetch("api/estate/post",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({...property})
            })
            const data = await response.json();
            if(!data.success){
                alert("error while submitting form")
                return
            }
            alert("form submitted successfully");
        } catch (err) {
            alert("some error occured");
        }
    }

    const handleImageUpload = (result) => {
        console.log(result)
        setProperty((prev) => ({
            ...prev,
            images: [...prev.images, {
                url: result.info.secure_url,
                publicId: result.info.public_id,
            }]
        }))
        alert("images uploaded successfully")
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-slate-400'>
            <form onSubmit={handleSubmit} className=''>
                <h2>address</h2>
                <input value={property.address} type='text' name='address' onChange={(e) => setProperty({ ...property, address: e.target.value })} />
                <br />
                <h2>location</h2>
                <input value={property.location} type='text' name='location' onChange={(e) => setProperty({ ...property, location: e.target.value })} />
                <h2>size</h2>
                <input value={property.size} type='number' name='size' onChange={(e) => setProperty({ ...property, size: Number(e.target.value) })} />
                <h2>owner's name</h2>
                <input value={property.owner} type='text' name='owner' onChange={(e) => setProperty({ ...property, owner: e.target.value })} />
                <br></br>
                <CldUploadWidget
                    uploadPreset='ogtUploadPreset'
                    onSuccess={handleImageUpload}

                >
                    {({ open }) => (
                        <button
                            type="button"
                            onClick={() => open()}
                            className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                        >
                            Upload Images
                        </button>
                    )}
                </CldUploadWidget>
                <br />
                <button type='submit' className='bg-blue-600 w-[100px] rounded-lg text-white mt-3'>
                    submit
                </button>
            </form>
        </div>
    )
}

export default Manager