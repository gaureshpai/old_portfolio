"use client"
import { NextResponse } from 'next/server';
import React, { useState, useEffect } from 'react';

async function getdata() {
    try {
        const res = await fetch("http://localhost:3000/api/certs", { cache: "no-store" });
        if (res.ok) {
            const data: any[] = await res.json(); // Specify that data is an array of any type
            return data.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Cast dates to number using getTime() method
        }
    } catch (error) {
        console.error("Failed to fetch data from localhost. Using fallback URL.");
    }

    // If localhost is not accessible or there's an error, fall back to the other URL
    const fallbackRes = await fetch("https://gauresh.vercel.app/api/certs", { cache: "no-store" });
    if (fallbackRes.ok) {
        const fallbackData: any[] = await fallbackRes.json(); // Specify that fallbackData is an array of any type
        return fallbackData.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Cast dates to number using getTime() method
    }
    return null; // Return null if both URLs fail
}




const AllCertificates = () => {
    const [data, setData] = useState<any[]>([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getdata();
                if (result) setData(result); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <div className='Certificates'>
                <h2>Certifications and Courses</h2>
                <div className="certification-grid">
                    {data.map((post) => (
                        <div key={post?._id} className="certification">
                            <h3>{post?.name}</h3>
                            <img src={post?.Image} alt={post?.name} />
                            <p>Provider: {post?.provider}</p>
                            <p>Date of Completion: {post?.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllCertificates;
