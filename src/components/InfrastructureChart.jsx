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
        backgroundColor: "#0ea5e9"
      }
    ]
  };

  return <Bar data={data} />;
}