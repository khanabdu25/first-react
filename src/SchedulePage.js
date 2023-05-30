import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';

//api key: AIzaSyA25ffjjtEgljtqx4m_q88f4hLtzH-AjIE
//calendar id: c_ff8bf5a545e37da62ca4bacdf524c7b1dc6015629b9d8bb79568750ef6421e18@group.calendar.google.com

const SchedulePage = (props) => {
  //Data Mananger:
  const calendarID="en.islamic#holiday@group.v.calendar.google.com";
  const apiAccessKey="AIzaSyBF8kJhXxkdZ9_vH5LQucimjV5exAjuZvMAIzaSyA25ffjjtEgljtqx4m_q88f4hLtzH-AjIE";
  const remoteData = new DataManager({
    url: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?key=${apiAccessKey}`,
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });
  const onDataBinding = (e)=> {
    let items = e.result;
    let schedulerData = [];
    let start;
    let end;
    // Access and process each item in the 'items' list
    if (items.length > 0){
    items.forEach(item => {
        let isAllDay = !item.start.dateTime;
        // Perform operations on each item
        if (isAllDay) {
        start = String(item.start.date);
        end = String(item.end.date);
        } else {
        start = String(item.start.dateTime);
        end = String(item.end.dateTime);
        }
        schedulerData.push({
            Id: item.id,
            Subject: item.summary,
            StartTime : new Date(start),
            EndTime: new Date(end),
            IsAllDay: isAllDay,
        });
    })
    }
    e.result = schedulerData;
  };
  
  return (
    <div>
      <ScheduleComponent width="100%" height="650px" currentView = 'Month' eventSettings={{ dataSource: remoteData }}
      dataBinding={onDataBinding}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
};

export default SchedulePage;
