import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import './talleresMecanicos.css';

export function GARAGE () {
  // Datos para los gráficos
  const paymentData = [
    { name: 'Ene', value: 1000 },
    { name: 'Feb', value: 750 },
    { name: 'Mar', value: 500 },
    { name: 'Abr', value: 250 },
  ];

  const claimsData = [
    { name: 'Siniestros', value: 1200 },
  ];

  const pieData = [
    { name: 'Colisión', value: 35 },
    { name: 'Robo', value: 25 },
    { name: 'Daños Naturales', value: 20 },
    { name: 'Incendio', value: 15 },
    { name: 'Otros', value: 5 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const ordersData = [
    { id: 21472, status: 'Pendiente', amount: 316.83, date: '14/12/2023' },
    { id: 198369, status: 'En Proceso', amount: 140.27, date: '16/12/2023' },
    { id: 60917, status: 'Pendiente', amount: 864.00, date: '15/12/2023' },
    { id: 661042, status: 'Procesado', amount: 792.31, date: '16/12/2023' },
  ];

  return (
    <div className="dashboard-horizontal">
      <header className="dashboard-header">
        <h1>Talleres Mecanicos</h1>
      </header>

      <div className="dashboard-content">
        {/* Primera columna */}
        <div className="dashboard-column">
          <div className="card">
            <h2> A {'>'} B {'>'} C {'>'} D</h2>
            <p>Filtro de talleres "A" "B" "C" "D"</p>
            
            <div className="filters">
              <div className="filter-item">Estado</div>
              <div className="filter-item">Municipio</div>
              <div className="filter-item">Flujo</div>
              <div className="filter-item">Modelo</div>
            </div>
            
            <div className="years">
              <div className="year">Año 1</div>
              <div className="year">Año 2</div>
            </div>
          </div>

          <div className="card">
            <h3>Talleres</h3>
            <div className="sources-grid">
              <div className="source">A</div>
              <div className="source">B</div>
              <div className="source">C</div>
              <div className="source">D</div>
            </div>
          </div>
        </div>

        {/* Segunda columna */}
        <div className="dashboard-column">
          <div className="card">
            <h3>21,472 órdenes (15 pendientes)</h3>
            <div className="orders-table-container">
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Estado</th>
                    <th>Monto</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersData.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td className={`status ${order.status.toLowerCase().replace(' ', '-')}`}>
                        {order.status}
                      </td>
                      <td>${order.amount.toFixed(2)}</td>
                      <td>{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tercera columna */}
        <div className="dashboard-column">
          <div className="card">
            <h3>Comparacion de talleres</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={paymentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card">
            <h3>Distribución de Talleres</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};