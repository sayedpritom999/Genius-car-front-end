import React from 'react';
import Expert from '../Expert/Expert';
import expert1 from '../../../Images/experts/expert-1.jpg';
import expert2 from '../../../Images/experts/expert-2.jpg';
import expert3 from '../../../Images/experts/expert-3.jpg';
import expert4 from '../../../Images/experts/expert-4.jpg';
import expert5 from '../../../Images/experts/expert-5.jpg';
import expert6 from '../../../Images/experts/expert-6.png';


const Experts = () => {
    const experts = [
        { id: 1, name: 'Mr Tate', img: expert1},
        { id: 2, name: 'Mr Andrew', img: expert2},
        { id: 3, name: 'Mr King', img: expert3},
        { id: 4, name: 'Mr Liate', img: expert4},
        { id: 5, name: 'Mr Jhankar', img: expert5},
        { id: 6, name: 'Mr Khan', img: expert6},
    ]
    return (
        <div id="experts" className="container">
            <h2 className="text-primary text-center my-5">Our Experts:</h2>
            <div className="row justify-content-center">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;