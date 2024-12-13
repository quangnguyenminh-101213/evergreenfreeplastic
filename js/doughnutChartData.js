const doughnutChartData = {
    labels: [
        "Rác hữu cơ",
        "Chất dẻo, Nhựa, nilon",
        "Giấy, bìa carton",
        "Da, cao su, vải vụn",
        "Kim loại",
        "Xương, vỏ sò, ốc, hến và các thành phần khác",
        "Thủy tinh, gạch đá, sành sứ",
        "Gỗ, cành cây nhỏ"
    ],
    datasets: [{
        data: [62.7, 8.88, 8.2, 9.72, 0.33, 10.77, 3.4, 4.2],
        backgroundColor: [
            "#ff9999",
            "#66b3ff",
            "#99ff99",
            "#ffcc99",
            "#c2c2f0",
            "#ffb3e6",
            "#c2f0c2",
            "#f2c2f0"
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: doughnutChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Thành phần chất thải rắn'
            }
        }
    }
};

export function renderChart(chart) {
    const ctx = document.getElementById(chart).getContext('2d');
    new chart(ctx, config);
}
