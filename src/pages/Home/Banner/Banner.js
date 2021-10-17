import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="d-flex align-items-center justify-content-center input-field">
                <div className="input">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search Food items"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-danger" id="button-addon2">
                            Button
                        </Button>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default Banner;