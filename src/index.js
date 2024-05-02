import React from 'react';
import ReactDOM from 'react-dom';
import RoutesP from './RoutesP'; 
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
       <RoutesP /> 
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
