import { React, Component } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const Wrapper = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, #3d3c68 0%, #1b1a2c 100%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartCont = styled.div`
  background: rgba(255, 255, 255, 0.06);
  width: 60%;
  height: 70%;
  border-radius: 10px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "GROCERIES",
          data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43],
        },
        {
          name: "HOUSEHOLD",
          data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27],
        },
        {
          name: "WORK",
          data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14],
        },
        {
          name: "OTHER",
          data: [21, 7, 25, 13, 22, 8, 21, 7, 25, 13, 22, 8],
        },
      ],
      options: {
        chart: {
          fontFamily: "Inter",
          style: {
            borderRadius: "10px",
          },
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            colors: {
              ranges: [
                {
                  from: 0,
                  to: 0,
                  color: ["pink", "blue", "orange", "black"],
                },
              ],
            },
            dataLabels: {
              position: "top",
              maxItems: 100,
              hideOverflowingLabels: true,
            },
          },
        },
        xaxis: {
          type: "text",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          labels: {
            maxHeight: 120,
            style: {
              colors: "#fff",
              fontSize: "14px",
              fontFamily: "Inter",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#fff",
              fontSize: "14px",
              fontFamily: "Inter",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        legend: {
          position: "right",
          labels: {
            colors: "#fff",
          },
        },
        fill: {
          opacity: 1,
        },
        colors: ["#2EE1ED", "#7037EA", "#F83AA1", "#F2B18D"],
      },
    };
  }

  render() {
    return (
      <Wrapper>
        <ChartCont>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={550}
            width={900}
          />
        </ChartCont>
      </Wrapper>
    );
  }
}

export default ApexChart;
