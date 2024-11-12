import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography, Chip, List, Card, CardHeader, CardContent, Table, Box, TableBody, TableCell, TableContainer, TableHead, TextField, TableRow, LinearProgress } from '@mui/material';
import CheckInOutProgressBar from './utils/ProgessBar';
// https://1pqbgqn7-4000.inc1.devtunnels.ms/admin/Employee/checkOut
// https://1pqbgqn7-4000.inc1.devtunnels.ms/admin/Employee/checkIn

const TimerComponent = () => {
    return (
        <Grid container direction="column" alignItems="center" spacing={4} className="p-6 bg-white shadow-lg rounded-xl my-5">
            {/* Toggle Button and Elapsed Time */}
            <CheckInOutProgressBar></CheckInOutProgressBar>
           
        </Grid>
    );
};

export default TimerComponent;
