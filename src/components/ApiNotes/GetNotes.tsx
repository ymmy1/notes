export default function GetNotes() {
  return (
    <>
      <h3>Fetch API (Vanilla JavaScript):</h3>
      <code>
        {`
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error fetching data:', error));
            `}
      </code>
      <h3>Axios (Vanilla JavaScript or React):</h3>
      <code>
        {`
        import axios from 'axios';
        
        axios.get('https://api.example.com/data')
            .then(response => console.log(response.data))
            .catch(error => console.error('Error fetching data:', error));
            `}
      </code>
      <h3>useEffect Hook (React):</h3>
      <code>
        {`
        import React, { useState, useEffect } from 'react';
        
        function MyComponent() {
            const [data, setData] = useState(null);
        
            useEffect(() => {
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error('Error fetching data:', error));
            }, []);
        
            return (
            <div>
                {/* Render data here */}
            </div>
            );
        }
            `}
      </code>
    </>
  );
}
