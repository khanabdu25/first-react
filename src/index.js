import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";
import Button from '@mui/material/Button';
import SchedulePage from './SchedulePage';

const BoxWithCross = () => {
  return (
    <div className="box">
      <div className="cross" />
    </div>
  );
};

const App = () => {
  //view switcher
  const [activeView, setActiveView] = useState('view1');
  const handleButtonClick = (view) => {
    setActiveView(view);
  };

  const renderView = () => {
    switch (activeView) {
      case 'view1':
        return <SchedulePage />;
      case 'view2':
        return <BoxWithCross />;
      case 'view3':
        return <BoxWithCross />;
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
      <br />
      <Button color="success" variant="contained" onClick={() => handleButtonClick('view1')}>View 1</Button>
      <Button color="success" variant="contained" onClick={() => handleButtonClick('view2')}>View 2</Button>
      <Button color="success" variant="contained" onClick={() => handleButtonClick('view3')}>View 3</Button>
      <br />
    </div>
  );
  
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);