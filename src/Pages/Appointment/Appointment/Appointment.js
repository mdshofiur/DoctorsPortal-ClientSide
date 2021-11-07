import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AppointmentMents from '../AppointmentMents/AppointmentMents';

const Appointment = () => {
    const [date, setdate] = React.useState(new Date());

    return (
        <div>
           <Navigation></Navigation>
           <AppointmentHeader date={date} setdate={setdate}></AppointmentHeader>
           <AppointmentMents date={date}></AppointmentMents>
        </div>
    );
};

export default Appointment;