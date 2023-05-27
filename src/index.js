import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";
import Button from '@mui/material/Button';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject} from '@syncfusion/ej2-react-schedule';
//api key: AIzaSyA25ffjjtEgljtqx4m_q88f4hLtzH-AjIE
//calendar id: c_ff8bf5a545e37da62ca4bacdf524c7b1dc6015629b9d8bb79568750ef6421e18@group.calendar.google.com

const SchedulePage = (props) => {
  // Use the props here as needed
  return (
    <div>
      <ScheduleComponent width = '100%' height = '650px'>
          <Inject services = {[Day, Week, WorkWeek, Month, Agenda]}></Inject>
        </ScheduleComponent>;
    </div>
  );
};

const App = () => {
  const [activeView, setActiveView] = useState('view1');

  const handleButtonClick = (view) => {
    setActiveView(view);
  };

  const renderView = () => {
    switch (activeView) {
      case 'view1':
        return <SchedulePage />;
      case 'view2':
        return <div>View 2</div>;
      case 'view3':
        return <div>View 3</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <br /> 
      <div>
        {renderView()}
      </div>
        <Button color = "success" variant="contained" onClick={() => handleButtonClick('view1')}>View 1</Button>
        <Button color = "success" variant="contained" onClick={() => handleButtonClick('view2')}>View 2</Button>
        <Button color = "success" variant="contained" onClick={() => handleButtonClick('view3')}>View 3</Button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);