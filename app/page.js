"use client";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9000/oauth2/authorize', {
        params: {
            response_type: 'code', // or 'token' for implicit flow
            client_id: 'my-client',
            redirect_uri: 'http://localhost:3000/login',
            scope: 'read'
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log('Authorization Response:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <button
        onClick={() => fetchData()}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Go to Login
      </button>
    </div>
  );
}