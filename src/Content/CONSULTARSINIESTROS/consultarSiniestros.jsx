import React from 'react';
 import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
 import { IoFilterSharp } from "react-icons/io5";
 import { FaAngleRight } from "react-icons/fa";
 import './consultarSiniestros.css';
 
 export function CONSULTARSINIESTROS() {
   const sourcesData = [
     { name: 'Payments', value: 60 },
     { name: 'Tariff', value: 10 },
     { name: 'Current', value: 25 },
     { name: 'Reserve', value: 5 }
   ];
 
   const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];
 
   const customerPaymentsData = [
     { month: 'L', payments: 400, claims: 240 },
     { month: 'M', payments: 300, claims: 139 },
     { month: 'X', payments: 200, claims: 980 },
     { month: 'J', payments: 278, claims: 390 },
     { month: 'V', payments: 189, claims: 480 },
     { month: 'S', payments: 239, claims: 380 },
     { month: 'D', payments: 349, claims: 430 }
   ];
 
   const accidentsData = [
     { id: 21472, status: 'Awaiting Processing', amount: '$316.83', date: '14/12/2023 05:47' },
     { id: 190369, status: 'In Progress', amount: '$140.27', date: '16/12/2023 04:47' },
     { id: 60917, status: 'Pending', amount: '$864.00', date: '15/12/2023 05:35' },
     { id: 661042, status: 'Processed', amount: '$792.31', date: '16/12/2023 05:05' }
   ];
 
   return (
     <div className="container">
       <h1 className="title">Consulta por Siniestro</h1>
       <div className="nav-bar">
         {["Marca", "Año", "Modelo", "Dato"].map((label, idx) => (
           <div key={label} className="nav-item">
             <span>{label}</span>
             {idx < 3 && <FaAngleRight />}
           </div>
         ))}
       </div>
 
       <div className="grid-container">
       <div className="filters">
         <div className="filter-header">
             <h2 className="filter-title">Dodge Attitude 2016</h2>
             <div className="filter-divider"></div> {/* Línea divisoria */}
             <div className="filter-icon">
             
             <span>Filtros</span>
             </div>
         </div>
 
         <p className="filter-description">
             Siniestros en los que estuvieron involucrados autos de este modelo
         </p>
 
         <div className="filter-options">
             <div className="filter-column">
             {["Estado", "Municipio"].map((option) => (
                 <select key={option} className="select">
                 <option>{option}</option>
                 </select>
             ))}
             </div>
             <div className="filter-column">
             {["Flujo", "Modelo"].map((option) => (
                 <select key={option} className="select">
                 <option>{option}</option>
                 </select>
             ))}
             </div>
         </div>
 
         <div className="filter-years">
             <select className="select"><option>Año 1</option></select>
             <select className="select"><option>Año 2</option></select>
         </div>
         </div>
 
 
         <div className="chart-container">
           <h3 className="chart-title">Sources</h3>
           <PieChart width={300} height={220}>
             <Pie data={sourcesData} cx={150} cy={110} innerRadius={50} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
               {sourcesData.map((entry, index) => (
                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
               ))}
             </Pie>
             <Tooltip />
             <Legend 
                 layout="vertical" 
                 align="right" 
                 verticalAlign="middle" 
                 wrapperStyle={{  transform: 'translateX(100px)'  }} 
             />
 
           </PieChart>
         </div>
       </div>
 
       <div className="table-container">
         <h3 className="table-title">21,472 orders (15 await processing)</h3>
         <table className="table">
           <thead>
             <tr>
               <th>ID</th>
               <th>Status</th>
               <th>Amount</th>
               <th>Date</th>
             </tr>
           </thead>
           <tbody>
             {accidentsData.map((accident) => (
               <tr key={accident.id} className="table-row">
                 <td>{accident.id}</td>
                 <td>{accident.status}</td>
                 <td>{accident.amount}</td>
                 <td>{accident.date}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
 
       <div className="chart-container">
         <h3 className="chart-title">Customer Payments</h3>
         <BarChart width={900} height={300} data={customerPaymentsData}>
           <XAxis dataKey="month" />
           <YAxis />
           <Tooltip />
           <Legend />
           <Bar dataKey="payments" fill="#8884d8" />
           <Bar dataKey="claims" fill="#82ca9d" />
         </BarChart>
       </div>
     </div>
   );
 }