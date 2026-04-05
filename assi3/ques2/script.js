const data = {
  2023: [10,20,30],
  2024: [15,25,35]
};

let chart;

function loadChart(year){
  let ctx = document.getElementById("chart");

  if(chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan","Feb","Mar"],
      datasets: [{
        label: "Sales",
        data: data[year]
      }]
    }
  });
}

// dropdown change
document.getElementById("year").addEventListener("change", (e)=>{
  loadChart(e.target.value);
});

// initial load
loadChart("2023");