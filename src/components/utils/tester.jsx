// 'use client'
// import { useState, useEffect } from 'react';
// import { TextField, Tooltip , styled} from '@mui/material';

// export default function WorkTracker() {
//   const [isWorking, setIsWorking] = useState(false);
//   const [startTime, setStartTime] = useState(null);
//   const [endTime, setEndTime] = useState(null);
//   const [totalTime, setTotalTime] = useState(0);
//   const [week, setWeek] = useState(0);

//   useEffect(() => {
//     let interval;
//     if (isWorking && startTime) {
//       interval = setInterval(() => {
//         const now = new Date();
//         setTotalTime((prev) => prev + (now - startTime) / 1000);
//         setStartTime(now);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isWorking, startTime]);

//   const toggleCheckInOut = () => {
//     if (isWorking) {
//       const end = new Date();
//       setEndTime(end);
//       setIsWorking(false);
//     } else {
//       const start = new Date();
//       setStartTime(start);
//       setIsWorking(true);
//     }
//   };

//   const BlueOnGreenTooltip =  styled(Tooltip)(({ theme }) => ({
//     '& .MuiTooltip-tooltip': {
//       color: 'lightblue', // Default text color
//       backgroundColor: 'green', // Default background color
//       fontSize: '1rem', // Optional: Adjust font size
//     },
//     '&:hover .MuiTooltip-tooltip': {
//       color: 'yellow', // Text color on hover
//       backgroundColor: 'blue', // Background color on hover
//     },
//   }));
//   const formatTime = (seconds) => {
//     const hrs = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${hrs}h ${mins}m ${secs}s`;
//   };

//   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//   const workHours = { Mon: 5, Tue: 8, Wed: 4, Thu: 6, Fri: 7, Sat: 3, Sun: 0 };

//   const previousWeek = () => setWeek((prev) => prev - 1);
//   const nextWeek = () => setWeek((prev) => prev + 1);

//   return (
//     <div className="container mx-auto p-4 space-y-4 shadow-lg rounded-lg">
//       <button
//         onClick={toggleCheckInOut}
//         className={`px-4 py-2 rounded-full text-white shadow-md ${isWorking ? 'bg-red-500' : 'bg-green-500'
//           }`}
//       >
//         {isWorking ? 'Check Out' : 'Check In'}
//       </button>

//       <div className="mt-4 shadow-md p-4 rounded-lg bg-white">
//         <p>Total Time Worked: {formatTime(totalTime)}</p>
//         {endTime && !isWorking && (
//           <p>Last Checkout: {endTime.toLocaleTimeString()}</p>
//         )}
//       </div>

//       {/* Flex container for progress bar and table in a single row */}
//       <div className="flex space-x-4 shadow-md p-4 rounded-lg bg-white">
//         {/* Progress Bar Column */}
//         <div className="w-1/2">
//           {days.map((day) => (
//             // <Tooltip key={day} title={`${workHours[day]} hours worked`} arrow>
//             <Tooltip className='text-green'
//             key={day}
//             title={`${workHours[day]} hours worked`}
//             arrow
//             sx={{
//               '& :hover .MuiTooltip-tooltip': {
//                 backgroundColor: 'green', // Green background color
//                 color: 'white', // White text color
//               },
//               '& .MuiTooltip-arrow': {
//                 color: 'green', // Green arrow color
//               },
//             }}
//           >
//               <div className="flex bg-green items-center mb-2 shadow-sm">
//                 <span className="w-12 text-gray-700">{day}</span>
//                 <div className="flex-grow h-4 bg-green rounded-full overflow-hidden shadow-inner">
//                   <div
//                     className="h-4 bg-yellow-500"
//                     style={{ width: `${(workHours[day] / 8) * 100}%` }}
//                   ></div>
//                 </div>
//               </div>
//             </Tooltip>
//           ))}
//         </div>



//         {/* Table Column */}
//         <div className="w-1/2">
//           <h3 className="text-lg font-semibold mb-4">Employee Work Details</h3>
//           <table className="w-full border border-gray-300 shadow-lg rounded-lg">
//             <thead>
//               <tr className="bg-gray-200 text-gray-700 text-left">
//                 <th className="px-4 py-2">Name</th>
//                 <th className="px-4 py-2">Project Name</th>
//                 <th className="px-4 py-2">Working Hours</th>
//                 <th className="px-4 py-2">Update</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-t border-gray-300">
//                 <td className="px-4 py-2">Employee 1</td>
//                 <td className="px-4 py-2">Project Alpha</td>
//                 <td className="px-4 py-2">
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     type="number"
//                     inputProps={{ min: 0 }}
//                     className="w-full"
//                   />
//                        <BlueOnGreenTooltip title="Hello World" arrow >

//         <button>Hover me</button>
//       </BlueOnGreenTooltip>
//                 </td>
//                 <td className="px-4 py-2">
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     className="w-full"
//                     placeholder="Update"
//                   />
//                 </td>
//               </tr>
//               {/* Add more rows as needed */}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="flex justify-between mt-4 shadow-md p-4 rounded-lg bg-white">
//         <button onClick={previousWeek} className="text-gray-700 p-2 shadow-sm">← Start Date</button>
//         <button onClick={nextWeek} className="text-gray-700 p-2 shadow-sm">End Date →</button>
//       </div>
//     </div>
//   );
// }

// 'use client';
// import React, { useState, useEffect } from 'react';
// import { Tooltip } from '@material-tailwind/react';

// export default function Dashboard() {
//     const [isCheckedIn, setIsCheckedIn] = useState(false);
//     const [elapsedTime, setElapsedTime] = useState(0); // Track elapsed time in seconds

//     // Update the elapsed time every second while checked in
//     useEffect(() => {
//         let interval;
//         if (isCheckedIn) {
//             interval = setInterval(() => {
//                 setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
//             }, 1000);
//         }
//         return () => clearInterval(interval);
//     }, [isCheckedIn]);

//     // Format elapsed time from seconds to HH:MM:SS
//     const formatTime = (totalSeconds) => {
//         const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
//         const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
//         const seconds = String(totalSeconds % 60).padStart(2, '0');
//         return `${hours}:${minutes}:${seconds}`;
//     };

//     // Handle check-in and check-out
//     const handleCheckInOut = () => {
//         setIsCheckedIn(!isCheckedIn);
//     };

//     const days = [
//         { day: 'Mon, 03', checkIn: '11:01 AM', checkOut: '07:30 PM', hours: '08:28' },
//         { day: 'Tue, 04', checkIn: '10:38 AM', checkOut: '08:06 PM', hours: '09:27' },
//         { day: 'Wed, 05', checkIn: '11:00 AM', checkOut: '07:43 PM', hours: '08:53' },
//         { day: 'Thu, 06', checkIn: '11:01 AM', checkOut: '07:31 PM', hours: '08:06' },
//         { day: 'Fri, 07', checkIn: '11:15 AM', checkOut: '06:37 PM', hours: '07:32' },
//         { day: 'Sat, 08', checkIn: null, checkOut: null, hours: 'Weekend' },
//         { day: 'Sun, 09', checkIn: null, checkOut: null, hours: 'Weekend' },
//     ];

//     return (
//         <div className="p-5 max-w-3xl mx-auto">
//             <div className="flex items-center justify-between mb-6">
//                 <input
//                     type="text"
//                     placeholder="Add notes for check-in"
//                     className="border p-2 rounded-lg w-1/2"
//                 />
//                 <span className="text-gray-500">General [09AM - 06PM]</span>
//                 <button
//                     onClick={handleCheckInOut}
//                     className={`px-4 py-2 rounded-lg ${
//                         isCheckedIn ? 'bg-red-500' : 'bg-green-500'
//                     } text-white`}
//                 >
//                     {isCheckedIn ? 'Check-Out' : 'Check-In'} {formatTime(elapsedTime)}
//                 </button>
//             </div>

//             <div>
//                 {days.map((day, index) => (
//                     <div key={index} className="flex items-center justify-between mb-4 p-3 border rounded-lg">
//                         <div className="w-1/5 font-semibold">{day.day}</div>
//                         <div className="w-1/5">{day.checkIn || '--'}</div>
//                         <div className="flex-grow mx-4">
//                             <Tooltip content={`Total: ${day.hours}`}>   
//                                 <div className="relative w-full h-4 bg-gray-200 rounded-lg">
//                                     <div
//                                         className={`absolute left-0 h-4 rounded-lg ${
//                                             day.hours === 'Weekend' ? 'bg-gray-400' : 'bg-green-500'
//                                         }`}
//                                         style={{
//                                             width:
//                                                 day.hours === 'Weekend'
//                                                     ? '0%'
//                                                     : `${(parseFloat(day.hours) / 9) * 100}%`,
//                                         }}
//                                     ></div>
//                                 </div>
//                             </Tooltip>
//                         </div>
//                         <div className="w-1/5">{day.checkOut || '--'}</div>
//                         <div className="w-1/5">{day.hours} Hrs</div>
//                     </div>
//                 ))}
//             </div>

//             {/* Success Popup */}
//             {/* {isCheckedIn && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//                         <h2 className="text-xl font-semibold mb-4">Check-in Successful</h2>
//                         <button
//                             onClick={() => setIsCheckedIn(false)}
//                             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )} */}
//         </div>
//     );
// }



// 'use client'
// import React, { useState } from 'react';

// export default function WeeklyProgress() {
//   const data = {
//     "dateRange": {
//         "startDate": "2024-11-10",
//         "endDate": "2024-12-08"
//     },
//     "weeks": [
//         {
//             "weekStart": "2024-11-10",
//             "weekEnd": "2024-11-16",
//             "attendances": [
//                 {
//                     "date": "2024-11-11",
//                     "totalDuration": "00:55:13",
//                     "sessions": [
//                         { "checkIn": "2024-11-11 13:13:00", "checkOut": "2024-11-11 13:13:05" },
//                         { "checkIn": "2024-11-11 13:20:19", "checkOut": "2024-11-11 13:20:21" },
//                         { "checkIn": "2024-11-11 15:25:52", "checkOut": "2024-11-11 15:29:35" },
//                         { "checkIn": "2024-11-11 16:49:01", "checkOut": null }
//                     ]
//                 },
//                 {
//                     "date": "2024-11-12",
//                     "totalDuration": "05:15:30",
//                     "sessions": [
//                         { "checkIn": "2024-11-12 09:00:00", "checkOut": "2024-11-12 12:00:00" },
//                         { "checkIn": "2024-11-12 13:00:00", "checkOut": "2024-11-12 17:15:30" }
//                     ]
//                 },
//                 {
//                     "date": "2024-11-13",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 },
//                 {
//                     "date": "2024-11-14",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 },
//                 {
//                     "date": "2024-11-15",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 },
//                 {
//                     "date": "2024-11-16",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 }
//             ]
//         },
//         {
//             "weekStart": "2024-11-17",
//             "weekEnd": "2024-11-23",
//             "attendances": [
//                 {
//                     "date": "2024-11-18",
//                     "totalDuration": "07:45:00",
//                     "sessions": [
//                         { "checkIn": "2024-11-18 09:00:00", "checkOut": "2024-11-18 12:00:00" },
//                         { "checkIn": "2024-11-18 13:00:00", "checkOut": "2024-11-18 17:45:00" }
//                     ]
//                 },
//                 {
//                     "date": "2024-11-19",
//                     "totalDuration": "08:30:00",
//                     "sessions": [
//                         { "checkIn": "2024-11-19 09:15:00", "checkOut": "2024-11-19 12:15:00" },
//                         { "checkIn": "2024-11-19 13:00:00", "checkOut": "2024-11-19 17:30:00" }
//                     ]
//                 },
//                 {
//                     "date": "2024-11-20",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 },
//                 {
//                     "date": "2024-11-21",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 },
//                 {
//                     "date": "2024-11-22",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 },
//                 {
//                     "date": "2024-11-23",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 }
//             ]
//         },
//         {
//             "weekStart": "2024-11-24",
//             "weekEnd": "2024-11-30",
//             "attendances": [
//                 {
//                     "date": "2024-11-25",
//                     "totalDuration": "06:30:00",
//                     "sessions": [
//                         { "checkIn": "2024-11-25 10:00:00", "checkOut": "2024-11-25 13:30:00" },
//                         { "checkIn": "2024-11-25 14:00:00", "checkOut": "2024-11-25 17:00:00" }
//                     ]
//                 },
//                 {
//                     "date": "2024-11-26",
//                     "totalDuration": "08:00:00",
//                     "sessions": [
//                         { "checkIn": "2024-11-26 09:00:00", "checkOut": "2024-11-26 12:00:00" },
//                         { "checkIn": "2024-11-26 13:00:00", "checkOut": "2024-11-26 18:00:00" }
//                     ]
//                 },
//                 {
//                     "date": "2024-11-27",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 },
//                 {
//                     "date": "2024-11-28",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 },
//                 {
//                     "date": "2024-11-29",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 },
//                 {
//                     "date": "2024-11-30",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 }
//             ]
//         },
//         {
//             "weekStart": "2024-12-01",
//             "weekEnd": "2024-12-07",
//             "attendances": [
//                 {
//                     "date": "2024-12-02",
//                     "totalDuration": "09:00:00",
//                     "sessions": [
//                         { "checkIn": "2024-12-02 09:00:00", "checkOut": "2024-12-02 12:00:00" },
//                         { "checkIn": "2024-12-02 13:00:00", "checkOut": "2024-12-02 18:00:00" }
//                     ]
//                 },
//                 {
//                     "date": "2024-12-03",
//                     "totalDuration": "07:30:00",
//                     "sessions": [
//                         { "checkIn": "2024-12-03 09:30:00", "checkOut": "2024-12-03 12:30:00" },
//                         { "checkIn": "2024-12-03 13:30:00", "checkOut": "2024-12-03 17:00:00" }
//                     ]
//                 },
//                 {
//                     "date": "2024-12-04",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 },
//                 {
//                     "date": "2024-12-05",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 },
//                 {
//                     "date": "2024-12-06",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 },
//                 {
//                     "date": "2024-12-07",
//                     "totalDuration": "00:00:00",
//                     "sessions": []
//                 }
//             ]
//         }
//     ]
// };



//   const [weekIndex, setWeekIndex] = useState(0);
//   const currentWeek = data.weeks && data.weeks[weekIndex];

//   const handleNextWeek = () => {
//     if (weekIndex < data.weeks.length - 1) {
//       setWeekIndex(weekIndex + 1);
//     }
//   };

//   const handlePrevWeek = () => {
//     if (weekIndex > 0) {
//       setWeekIndex(weekIndex - 1);
//     }
//   };

//   const durationToHours = (duration) => {
//     const [hours, minutes, seconds] = duration.split(':').map(Number);
//     return hours + minutes / 60 + seconds / 3600;
//   };

//   return (
//     <div className="p-5 max-w-3xl mx-auto">
//       <h2 className="text-lg font-bold mb-4">
//         {currentWeek ? `Week of ${currentWeek.weekStart} to ${currentWeek.weekEnd}` : "No data available"}
//       </h2>

//       <div className="mb-4">
//         <button
//           onClick={handlePrevWeek}
//           disabled={weekIndex === 0}
//           className="px-4 py-2 mr-2 bg-gray-200 rounded disabled:opacity-50"
//         >
//           Previous Week
//         </button>
//         <button
//           onClick={handleNextWeek}
//           disabled={weekIndex === data.weeks.length - 1}
//           className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//         >
//           Next Week
//         </button>
//       </div>

//       {currentWeek && currentWeek.attendances ? (
//         <table className="w-full text-left">
//           <thead>
//             <tr>
//               <th>Day</th>
//               <th>Check-In</th>
//               <th>Check-Out</th>
//               <th>Total Hours</th>
//               <th>Progress</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentWeek.attendances.map((attendance, index) => {
//               const totalHours = durationToHours(attendance.totalDuration);
//               const progressPercentage = (totalHours / 8) * 100; // Assuming 8 hours as a full workday

//               return (
//                 <tr key={index} className="border-b">
//                   <td>{new Date(attendance.date).toLocaleDateString('en-US', { weekday: 'long' })}</td>
//                   <td>{attendance.sessions[0]?.checkIn || '--'}</td>
//                   <td>{attendance.sessions[attendance.sessions.length - 1]?.checkOut || '--'}</td>
//                   <td>{attendance.totalDuration}</td>
//                   <td className="w-1/3">
//                     <div className="relative h-4 bg-gray-200 rounded w-full">
//                       <div
//                         className="h-4 bg-green-500 rounded"
//                         style={{ width: `${progressPercentage}%` }}
//                       ></div>
//                     </div>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       ) : (
//         <p>No attendance data for this week.</p>
//       )}
//     </div>
//   );
// }




// 'use client'
// import React, { useState, useEffect } from 'react';

// export default function Tester() {
//     const [isCheckedIn, setIsCheckedIn] = useState(false);
//     const [currentTime, setCurrentTime] = useState(new Date());
//     const [selectedWeek, setSelectedWeek] = useState(0);
//     const [checkInTime, setCheckInTime] = useState(null);
//     const [checkOutTime, setCheckOutTime] = useState(null);
//     const [elapsedTime, setElapsedTime] = useState(0); // Elapsed time in seconds
//     const [intervalId, setIntervalId] = useState(null);

//     useEffect(() => {
//         const interval = setInterval(() => setCurrentTime(new Date()), 1000);
//         return () => clearInterval(interval);
//     }, []);

//     const handleCheckInOut = () => {
//         if (isCheckedIn) {
//             // Check-Out
//             clearInterval(intervalId);
//             const endTime = new Date();
//             setCheckOutTime(endTime);
//             setIsCheckedIn(false);
//         } else {
//             // Check-In
//             const startTime = new Date();
//             setCheckInTime(startTime);
//             setIsCheckedIn(true);

//             // Start/resume the stopwatch
//             const id = setInterval(() => {
//                 setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
//             }, 1000);
//             setIntervalId(id);
//         }
//     };

//     useEffect(() => {
//         // Clear the interval when component unmounts to prevent memory leaks
//         return () => clearInterval(intervalId);
//     }, [intervalId]);

//     const formatTime = (seconds) => {
//         const hrs = Math.floor(seconds / 3600);
//         const mins = Math.floor((seconds % 3600) / 60);
//         const secs = seconds % 60;
//         return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//     };

//     const weeksData = [
//         {
//             dateRange: { startDate: '2024-10-20', endDate: '2024-10-26' },
//             attendances: [
//                 { day: 'Mon', totalDuration: '01:12:34' },
//                 { day: 'Tue', totalDuration: '07:34:56' },
//                 { day: 'Wed', totalDuration: '08:00:00' },
//                 { day: 'Thu', totalDuration: '06:45:30' },
//                 { day: 'Fri', totalDuration: '07:10:45' },
//                 { day: 'Sat', totalDuration: '05:00:00' },
//                 { day: 'Sun', totalDuration: '00:00:00' }
//             ]
//         },
//         // More weekly data here...
//     ];

//     const convertToMinutes = (duration) => {
//         const [hours, minutes, seconds] = duration.split(':').map(Number);
//         return hours * 60 + minutes + seconds / 60;
//     };

//     const calculateDayProgressPercentage = (workedTimeInMinutes) => {
//         const availableTimeInMinutes = 600;
//         return (workedTimeInMinutes / availableTimeInMinutes) * 100;
//     };

//     const getDayProgressBars = (attendances) => {
//         return attendances.map((attendance, index) => {
//             const workedTimeInMinutes = convertToMinutes(attendance.totalDuration);
//             const progressPercentage = calculateDayProgressPercentage(workedTimeInMinutes);

//             return (
//                 <div key={index} className="flex justify-between items-center mb-2">
//                     <span>{attendance.day}</span>
//                     <div className="w-full h-2 bg-gray-200 rounded-full relative">
//                         <div
//                             className="h-full rounded-full"
//                             style={{
//                                 width: `${progressPercentage}%`,
//                                 backgroundColor: '#4caf50'
//                             }}
//                         ></div>
//                     </div>
//                     <span className="ml-2">{Math.round(progressPercentage)}%</span>
//                 </div>
//             );
//         });
//     };

//     const handleWeekChange = (direction) => {
//         setSelectedWeek((prev) => (prev + direction + weeksData.length) % weeksData.length);
//     };

//     const formatAMPM = (date) => {
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let ampm = hours >= 12 ? 'PM' : 'AM';
//         hours = hours % 12;
//         hours = hours ? hours : 12;
//         minutes = minutes < 10 ? '0' + minutes : minutes;
//         return `${hours}:${minutes} ${ampm}`;
//     };

//     return (
//         <div className="p-5 w-full mx-auto">
//             <div className="flex items-center justify-between mb-6">
//                 <input
//                     type="text"
//                     placeholder="Add notes for check-in"
//                     className="border p-2 rounded-lg w-1/2"
//                 />
//                 <span className="text-gray-500">General [09AM - 06PM]</span>
//                 <button
//                     onClick={handleCheckInOut}
//                     className={`px-4 py-2 rounded-lg ${isCheckedIn ? 'bg-red-500' : 'bg-green-500'} text-white`}
//                 >
//                     {isCheckedIn ? 'Check-Out' : 'Check-In'} {formatAMPM(currentTime)}
//                 </button>
//             </div>

//             <div className="text-center text-xl font-semibold mb-6">
//                 Timer: {formatTime(elapsedTime)}
//             </div>

//             <div className="flex justify-between mb-4">
//                 <button
//                     onClick={() => handleWeekChange(-1)}
//                     className="px-4 py-2 rounded-lg bg-gray-300 text-black"
//                 >
//                     Prev Week
//                 </button>
//                 <button
//                     onClick={() => handleWeekChange(1)}
//                     className="px-4 py-2 rounded-lg bg-gray-300 text-black"
//                 >
//                     Next Week
//                 </button>
//             </div>

//             <div className="mb-6">
//                 <h3 className="text-xl font-semibold mb-2">
//                     Week: {weeksData[selectedWeek].dateRange.startDate} to {weeksData[selectedWeek].dateRange.endDate}
//                 </h3>
//                 {getDayProgressBars(weeksData[selectedWeek].attendances)}
//             </div>
//         </div>
//     );
// }

// 'use client';
// import React, { useState, useEffect } from 'react';
// import { checkInEmployee, checkOutEmployee } from '@/_services/services_api'; // Import API functions

// export default function Dashboard() {
//     const [isCheckedIn, setIsCheckedIn] = useState(false);
//     const [currentTime, setCurrentTime] = useState(new Date());
//     const [selectedWeek, setSelectedWeek] = useState(0);
//     const [checkInTime, setCheckInTime] = useState(null);
//     const [checkOutTime, setCheckOutTime] = useState(null);
//     const [elapsedTime, setElapsedTime] = useState(0); // Elapsed time in seconds
//     const [intervalId, setIntervalId] = useState(null);

//     useEffect(() => {
//         const interval = setInterval(() => setCurrentTime(new Date()), 1000);
//         return () => clearInterval(interval);
//     }, []);

//     const handleCheckInOut = async () => {
//         if (isCheckedIn) {
//             // Check-Out
//             clearInterval(intervalId);
//             const endTime = new Date();
//             setCheckOutTime(endTime);
//             setIsCheckedIn(false);

//             // Get auth token from localStorage
//             const authToken = localStorage.getItem('auth-token');

//             if (authToken) {
//                 // Call check-out API
//                 try {
//                     // const response = await checkOutEmployee({ checkOutTime: endTime, token: authToken });
//                     const response = await checkOutEmployee(
//                         { checkOutTime: endTime },
//                         {
//                           headers: { Authorization: `Bearer ${authToken}` }
//                         }
//                       );
//                     console.log('Check-out successful:', response);
//                     // Handle success (e.g., show a success message or update state)
//                 } catch (error) {
//                     console.error('Check-out failed:', error);
//                     // Handle error (e.g., show an error message)
//                 }
//             }
//         } else {
//             // Check-In
//             const startTime = new Date();
//             setCheckInTime(startTime);
//             setIsCheckedIn(true);

//             // Start/resume the stopwatch
//             const id = setInterval(() => {
//                 setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
//             }, 1000);
//             setIntervalId(id);

//             // Get auth token from localStorage
//             const authToken = localStorage.getItem('auth-token');

//             if (authToken) {
//                 // Call check-in API
//                 try {
//                     // const response = await checkInEmployee({ checkInTime: startTime, token: authToken });
//                     const response = await checkInEmployee(
//                         { checkInTime: startTime},
//                         {
//                           headers: { Authorization: `Bearer ${authToken}` }
//                         }
//                       );
//                     console.log('Check-in successful:', response);
//                     // Handle success (e.g., show a success message or update state)
//                 } catch (error) {
//                     console.error('Check-in failed:', error);
//                     // Handle error (e.g., show an error message)
//                 }
//             }
//         }
//     };

//     useEffect(() => {
//         // Clear the interval when component unmounts to prevent memory leaks
//         return () => clearInterval(intervalId);
//     }, [intervalId]);

//     const formatTime = (seconds) => {
//         const hrs = Math.floor(seconds / 3600);
//         const mins = Math.floor((seconds % 3600) / 60);
//         const secs = seconds % 60;
//         return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//     };

//     const weeksData = [
//         {
//             dateRange: { startDate: '2024-10-20', endDate: '2024-10-26' },
//             attendances: [
//                 { day: 'Mon', totalDuration: '01:12:34' },
//                 { day: 'Tue', totalDuration: '07:34:56' },
//                 { day: 'Wed', totalDuration: '08:00:00' },
//                 { day: 'Thu', totalDuration: '06:45:30' },
//                 { day: 'Fri', totalDuration: '07:10:45' },
//                 { day: 'Sat', totalDuration: '05:00:00' },
//                 { day: 'Sun', totalDuration: '00:00:00' }
//             ]
//         },
//         // More weekly data here...
//     ];

//     const convertToMinutes = (duration) => {
//         const [hours, minutes, seconds] = duration.split(':').map(Number);
//         return hours * 60 + minutes + seconds / 60;
//     };

//     const calculateDayProgressPercentage = (workedTimeInMinutes) => {
//         const availableTimeInMinutes = 600;
//         return (workedTimeInMinutes / availableTimeInMinutes) * 100;
//     };

//     const percentageOf10Hours = (timeString) => {
//         // console.log("Parsing timeString:", timeString);

//         // Ensure the timeString is in the correct format "HH:MM:SS"
//         const timeParts = timeString.split(':');  // Split the string by ":" into an array
//         const hours = parseInt(timeParts[0], 10);  // Convert hours to integer
//         const minutes = parseInt(timeParts[1], 10);  // Convert minutes to integer
//         const seconds = parseInt(timeParts[2], 10);  // Convert seconds to integer

//         // Check if any of the values are NaN and handle the case gracefully
//         if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
//             // console.error("Invalid time format:", timeString);
//             return NaN;  // Return NaN to indicate an error
//         }

//         // Convert the parsed time into total seconds
//         const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

//         // Calculate percentage of 10 hours in seconds
//         const tenHoursInSeconds = 10 * 60 * 60; // 36,000 seconds
//         const percentage = (totalSeconds / tenHoursInSeconds) * 100;

//         return percentage;
//     }

//     const getDayProgressBars = (attendances) => {
//         console.log(attendances) 
//         return attendances.map((attendance, index) => {
//             const workedTimeInMinutes = percentageOf10Hours(attendance.totalDuration); // Returns percentage
//             if (isNaN(workedTimeInMinutes)) {
//                 return <div key={index}>Invalid time format</div>;  // Handle invalid time formats
//             }

//             // console.log("Worked time in minutes (percentage):", workedTimeInMinutes);

//             return (
//                 <div key={index} className="flex justify-between items-center mb-2">
//                     <span>{attendance.day}</span>
//                     <div className="w-full h-2 bg-gray-200 rounded-full relative">
//                         <div
//                             className="h-full rounded-full"
//                             style={{
//                                 width: `${workedTimeInMinutes}%`,
//                                 backgroundColor: '#4caf50'
//                             }}
//                         ></div>
//                     </div>
//                     <span className="ml-2">{Math.round(workedTimeInMinutes)}%</span>
//                 </div>
//             );
//         });
//     };

//     const handleWeekChange = (direction) => {
//         setSelectedWeek((prev) => (prev + direction + weeksData.length) % weeksData.length);
//     };

//     const formatAMPM = (date) => {
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let ampm = hours >= 12 ? 'PM' : 'AM';
//         hours = hours % 12;
//         hours = hours ? hours : 12;
//         minutes = minutes < 10 ? '0' + minutes : minutes;
//         return `${hours}:${minutes} ${ampm}`;
//     };

//     return (
//         <div className="p-5 w-full mx-auto">
//             <div className="flex items-center justify-between mb-6">
//                 <input
//                     type="text"
//                     placeholder="Add notes for check-in"
//                     className="border p-2 rounded-lg w-1/2"
//                 />
//                 <span className="text-gray-500">General [09AM - 06PM]</span>
//                 <button
//                     onClick={handleCheckInOut}
//                     className={`px-4 py-2 rounded-lg ${isCheckedIn ? 'bg-red-500' : 'bg-green-500'} text-white`}
//                 >
//                     {isCheckedIn ? 'Check-Out' : 'Check-In'} {formatAMPM(currentTime)}
//                 </button>
//             </div>

//             <div className="text-center text-xl font-semibold mb-6">
//                 Timer: {formatTime(elapsedTime)}
//             </div>

//             <div className="flex justify-between mb-4">
//                 <button
//                     onClick={() => handleWeekChange(-1)}
//                     className="px-4 py-2 rounded-lg bg-gray-300 text-black"
//                 >
//                     Prev Week
//                 </button>
//                 <button
//                     onClick={() => handleWeekChange(1)}
//                     className="px-4 py-2 rounded-lg bg-gray-300 text-black"
//                 >
//                     Next Week
//                 </button>
//             </div>

//             <div className="mb-6">
//                 <h3 className="text-xl font-semibold mb-2">
//                     Week: {weeksData[selectedWeek].dateRange.startDate} to {weeksData[selectedWeek].dateRange.endDate}
//                 </h3>
//                 {getDayProgressBars(weeksData[selectedWeek].attendances)}
//             </div>
//         </div>
//     );
// }


'use client';
import React, { useState, useEffect } from 'react';
import { checkInEmployee, checkOutEmployee } from '@/_services/services_api'; // Import API functions
import axios from 'axios'; // Ensure axios is installed

export default function Dashboard() {
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [selectedWeek, setSelectedWeek] = useState(0);
    const [attendanceData, setAttendanceData] = useState([]);
    const [checkInTime, setCheckInTime] = useState(null);
    const [checkOutTime, setCheckOutTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0); // Elapsed time in seconds
    const [intervalId, setIntervalId] = useState(null);

    const [isNextWeekAvailable, setIsNextWeekAvailable] = useState(true); // Track if next week's data is available

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    // Function to calculate start and end date for the current, next, and previous weeks
    const getWeekDates = (weekOffset = 0) => {
        const currentDate = new Date();
        const currentDay = currentDate.getDay();
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDay + (weekOffset * 7)); // Adjust for the start of the desired week (0 = current week)

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week (7 days after start)

        const startDate = startOfWeek.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
        const endDate = endOfWeek.toISOString().split('T')[0];     // Format as 'YYYY-MM-DD'

        return { startDate, endDate };
    };

    // Fetch attendance data from API
    const fetchAttendanceData = async (startDate, endDate) => {
        try {
            // Retrieve the auth token from localStorage
            const authToken = localStorage.getItem('auth-token');

            // If authToken exists, include it in the request headers
            const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};

            // Construct the URL with startDate and endDate as query parameters
            const url = `https://1pqbgqn7-4000.inc1.devtunnels.ms/Employee/totalDuration?startDate=${startDate}&endDate=${endDate}`;

            // Send the GET request with the constructed URL
            const response = await axios.get(url, { headers: headers });

            // Set the attendance data from the response
            setAttendanceData(response.data.attendances);

            // Check if the next week's data is available (check based on response length or specific criteria)
            const nextWeekStartDate = new Date(endDate);
            nextWeekStartDate.setDate(nextWeekStartDate.getDate() + 1); // Start date of next week
            const nextWeekEndDate = new Date(nextWeekStartDate);
            nextWeekEndDate.setDate(nextWeekEndDate.getDate() + 6); // End date of next week

            const nextStartDate = nextWeekStartDate.toISOString().split('T')[0];
            const nextEndDate = nextWeekEndDate.toISOString().split('T')[0];

            // Call API to check if next week's data exists
            const nextWeekResponse = await axios.get(
                `https://1pqbgqn7-4000.inc1.devtunnels.ms/Employee/totalDuration?startDate=${nextStartDate}&endDate=${nextEndDate}`,
                { headers }
            );

            setIsNextWeekAvailable(nextWeekResponse.data.attendances.length > 0); // Set availability of next week's data

        } catch (error) {
            console.error("Error fetching attendance data:", error);
        }
    };

    useEffect(() => {
        const { startDate, endDate } = getWeekDates(0); // Get current week's start and end dates
        fetchAttendanceData(startDate, endDate);
    }, []);

    const handleCheckInOut = async () => {
        if (isCheckedIn) {
            // Check-Out
            clearInterval(intervalId);
            const endTime = new Date();
            setCheckOutTime(endTime);
            setIsCheckedIn(false);

            // Get auth token from localStorage
            const authToken = localStorage.getItem('auth-token');

            if (authToken) {
                // Call check-out API
                try {
                    const response = await checkOutEmployee(
                        { checkOutTime: endTime },
                        {
                            headers: { Authorization: `Bearer ${authToken}` }
                        }
                    );
                    console.log('Check-out successful:', response);
                } catch (error) {
                    console.error('Check-out failed:', error);
                }
            }
        } else {
            // Check-In
            const startTime = new Date();
            setCheckInTime(startTime);
            setIsCheckedIn(true);

            // Start/resume the stopwatch
            const id = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
            }, 1000);
            setIntervalId(id);

            // Get auth token from localStorage
            const authToken = localStorage.getItem('auth-token');

            if (authToken) {
                // Call check-in API
                try {
                    const response = await checkInEmployee(
                        { checkInTime: startTime },
                        {
                            headers: { Authorization: `Bearer ${authToken}` }
                        }
                    );
                    console.log('Check-in successful:', response);
                } catch (error) {
                    console.error('Check-in failed:', error);
                }
            }
        }
    };

    const handleWeekChange = (direction) => {
        const newWeek = selectedWeek + direction;
        setSelectedWeek(newWeek);
        
        const { startDate, endDate } = getWeekDates(newWeek);
        fetchAttendanceData(startDate, endDate);
    };

    useEffect(() => {
        // Clear the interval when component unmounts to prevent memory leaks
        return () => clearInterval(intervalId);
    }, [intervalId]);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const percentageOf10Hours = (timeString) => {
        const [hours, minutes, seconds] = timeString.split(':').map(Number);
        const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
        const tenHoursInSeconds = 10 * 60 * 60; // 36,000 seconds
        const percentage = (totalSeconds / tenHoursInSeconds) * 100;
        return percentage;
    };

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayIndex = date.getDay();
        return daysOfWeek[dayIndex];
    };

    const getDayProgressBars = (attendances) => {
        const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        return daysOfWeek.map((day, index) => {
            const attendance = attendances.find((attendance) => getDayName(attendance.date) === day);

            const workedTimeInMinutes = attendance ? percentageOf10Hours(attendance.totalDuration) : 0;

            return (
                <div key={index} className="flex justify-between items-center mb-2">
                    <span className='me-2'>{day}</span>
                    <div className="w-full h-2 bg-gray-200 rounded-full relative">
                        <div
                            className="h-full rounded-full"
                            style={{
                                width: `${workedTimeInMinutes}%`,
                                backgroundColor: workedTimeInMinutes > 0 ? '#4caf50' : '#ddd'
                            }}
                        >
                        </div>
                    </div>
                    {attendance ? <span className="ml-2">{attendance.totalDuration}</span> : <span>00:00:00</span>}
                </div>
            );
        });
    };

    return (
        <div className="p-5 w-full mx-auto">
            <div className="flex items-center justify-between mb-6">
                <input
                    type="text"
                    placeholder="Add notes for check-in"
                    className="border p-2 rounded-lg w-1/2"
                />
                <span className="text-gray-500">General [09AM - 06PM]</span>
                <button
                    onClick={handleCheckInOut}
                    className={`px-4 py-2 rounded-lg ${isCheckedIn ? 'bg-red-500' : 'bg-green-500'} text-white`}
                >
                    {isCheckedIn ? 'Check-Out' : 'Check-In'} {new Date(currentTime).toLocaleTimeString()}
                </button>
            </div>

            <div className="text-center text-xl font-semibold mb-6">
                Timer: {formatTime(elapsedTime)}
            </div>

            <div className="flex justify-between mb-4">
                <button
                    onClick={() => handleWeekChange(-1)}
                    className="px-4 py-2 rounded-lg bg-gray-300 text-black"
                >
                    Prev Week
                </button>
                <button
                    onClick={() => handleWeekChange(1)}
                    className={`px-4 py-2 rounded-lg bg-gray-300 text-black ${!isNextWeekAvailable ? 'cursor-not-allowed opacity-50' : ''}`}
                    disabled={!isNextWeekAvailable}
                >
                    Next Week
                </button>
            </div>

            <div className="mb-6">
                {attendanceData.length > 0 && attendanceData[0].dateRange ? (
                    <h3 className="text-xl font-semibold mb-2">
                        Week: {attendanceData[0].dateRange.startDate} to {attendanceData[0].dateRange.endDate}
                    </h3>
                ) : ("")}

                {attendanceData.length > 0 && getDayProgressBars(attendanceData)}
            </div>
        </div>
    );
}






