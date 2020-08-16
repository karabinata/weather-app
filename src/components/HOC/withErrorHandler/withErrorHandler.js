import React, { useState, useEffect } from 'react';

import { Modal, Button } from '../../UI';

const withErrorHandler = (WrappedComponent, axios) => {
    return (props) => {
        const [error, setError] = useState(null);

        useEffect(() => {
            axios.interceptors.request.use(req => {
                setError(null);
                return req;
            });
            axios.interceptors.response.use(null, error => {
                setError(error);
            });
        }, [axios]);

        return <>
            <Modal show={error}>
                <div>{error?.message}</div>
                <hr />
                <Button 
                    style={{ color: 'blue', fontWeigh: 'bold', fontSize:"20px" }} 
                    text="Dismiss" 
                    onClick={() => setError(null)} 
                />
            </Modal>
            <WrappedComponent {...props} />
        </>
    }
}

export default withErrorHandler;