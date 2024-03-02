function DeleteNotes() {
  return (
    <>
      <h3>Fetch API (Vanilla JavaScript):</h3>
      <code>
        {`
        fetch('https://api.example.com/data', {
            method: 'DELETE'
            })
            .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete data');
            }
            console.log('Data deleted successfully');
            })
            .catch(error => console.error('Error deleting data:', error));
            `}
      </code>
      <h3>Axios (Vanilla JavaScript or React):</h3>
      <code>
        {`
        import axios from 'axios';

        axios.delete('https://api.example.com/data')
        .then(() => console.log('Data deleted successfully'))
        .catch(error => console.error('Error deleting data:', error));
            `}
      </code>
      <h3>useEffect Hook (React):</h3>
      <code>
        {`
        import React, { useEffect } from 'react';

        function MyComponent() {
        useEffect(() => {
            fetch('https://api.example.com/data', {
            method: 'DELETE'
            })
            .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete data');
            }
            console.log('Data deleted successfully');
            })
            .catch(error => console.error('Error deleting data:', error));
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

export default DeleteNotes;
