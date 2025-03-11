'use client';

import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(false)

    const router = useRouter();

    const handleClick = async () => {
        try {
            const response = await fetch('/api/auth', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                redirect: "follow",
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })
            });
            const data = await response.json();
            const result = data.ok;
            console.log(result)
            if (result === true) {
                router.replace("/admin/dashboard")
            } else {
                setError(true)
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className=" flex pt-20  justify-center bg-cardBg">
            <form className="md:min-w-[450px] bg-white shadow-md rounded-lg p-4 gap-6">
                <h2 className="capitalize text-lg">email :</h2>
                <input
                    value={credentials.email}
                    type="text"
                    name="email"
                    onChange={(e) =>
                        setCredentials({ ...credentials, email: e.target.value })
                    }
                    className="p-2 border border-gray/40 rounded-sm w-full"
                />
                <br />
                <h2 className="capitalize mt-2 text-lg">password :</h2>
                <input
                    value={credentials.password}
                    type="password"
                    name="password"
                    onChange={(e) =>
                        setCredentials({ ...credentials, password: e.target.value })
                    }
                    className="p-2 border border-gray/40 rounded-sm w-full"
                />
                <br />
                <button
                    type="submit"
                    className="bg-green-700 hover:bg-green-900 hover:shadow text-lg p-2.5 capitalize float-right w-[100px] rounded-lg text-white mt-4"
                >
                    submit
                </button>
            </form>
        </div>
    )
}

export default page    