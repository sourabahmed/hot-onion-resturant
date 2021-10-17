import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Dinner from './Dinner/Dinner';
import Lunch from './Lunch/Lunch';
import Breakfast from './Breakfasts/Breakfast';

const Foods = () => {
    return (
        <div className="container">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 text-center">
                <Tab eventKey="home" title="Home">
                    <Breakfast></Breakfast>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <Lunch></Lunch>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <Dinner></Dinner>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Foods;