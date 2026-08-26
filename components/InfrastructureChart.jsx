import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function InfrastructureChart() {
  const data = {
    labels: [
      "Laptops",
      "Desktops",
      "Switches",
      "Servidores",
      "Dell"
    ],
    datasets: [
      {
        label: "Inventario",
        data: [650, 300, 98, 42, 680],
        backgroundColor: "#f2a93c",
        borderRadius: 4,
      }
    ]
  };

  const options = {
    plugins: {
      legend: { labels: { color: "#929aa6", font: { family: "'IBM Plex Mono', monospace" } } },
    },
    scales: {
      x: {
        ticks: { color: "#929aa6", font: { family: "'IBM Plex Mono', monospace" } },
        grid: { color: "#2a3038" },
      },
      y: {
        ticks: { color: "#929aa6", font: { family: "'IBM Plex Mono', monospace" } },
        grid: { color: "#2a3038" },
      },
    },
  };

  return <Bar data={data} options={options} />;
}