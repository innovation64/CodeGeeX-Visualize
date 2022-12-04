/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import Example from "variables/data";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  Form,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample3,
} from "variables/charts.js";
function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  var list=[]
  for (var i=28;i<32;i++)
{ 
  list.push('10月'+i+'号')
}
for (var i=1;i<31;i++)
{ 
  list.push('11月'+i+'号')
}
var datagex2
datagex2=[
  "205",
  "120",
"84",
"178",
"134",
"105",
"98",
"88",
"45",
"41",
"74",
"62",
"67",
"74",
"446",
"95",
"69",
"140",
"107",
"395",
"395",
"207",
"118",
"93",
"125",
"136",
"113",
"163",
"109",
"144",
"93",
"105",
"83",
"137"
]
  var datagex=[]
  let chart1_2_options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ]
    }
  };

  let chartExample1 = {
    data1: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: list,
        datasets: [
          {
            label: "总下载量",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: datagex2
          },
          {
            label: "总调用量",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: datagex
          },
          {
            label: "Countries",
            fill: true,
            type: 'bar',
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: datagex
          }
        ]
      };
    },
    data2: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: list,
        datasets: [
          {
            label: "总调用量",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: datagex
          }
        ]
      };
    },
    data3: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
          }
        ]
      };
    },
    options: chart1_2_options
  };
  function datasum(a,b){
    var year=a.slice(0,4);
    var month=a.slice(5,7);
    var day=a.slice(8,10);
    var year2=b.slice(0,4);
    var month2=b.slice(5,7);
    var day2=b.slice(8,10);
    day=parseInt(day)
    day2=parseInt(day2)
    // console.log(year+" "+month+" "+day);
    for (var i=day;i<day2;i++){console.log(i);
    var day1= i.toString()
    console.log(day1)
    const fetchData = async () => {
      const result = await axios.get(
        'https://maas.aminer.cn/tracking/statistics/selectDataIndicators?startTime=2022-11-0'+day1+'&endTime=2022-11-0'+day1,
      );
      return (datagex.push(result.data.data["dayInstallNumber"]),
            console.log ('fetch data result:' , datagex))
    };
    fetchData(); 
  }
   }
  useEffect(() => {
      datasum("2022-11-01","2022-11-10")
  }, []);
  let dataset={}
  dataset={datagex:datagex}
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>

                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">CodeGeeX下载总量</h5>
                    <CardTitle tag="h2">4648</CardTitle>
                    </Col>
                    <Col className="text-right" sm="6">
                    <Form className="text-right" inline>
                      <FormGroup>
                        <Label for="exampleEmail">start date</Label>
                        <Input
                          type="date"
                          name="start date"
                          placeholder="2022/10/01"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">end datey</Label>
                        <Input
                          type="date"
                          name="end date"
                          placeholder="2022/10/02"
                        />
                      </FormGroup>
                    <Button >查询</Button>
                  </Form>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>

        </Row>
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">CodeGeeX调用总量</h5>
                    <CardTitle tag="h2">2056521</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
              
                    data={chartExample1["data2"]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  3,500€
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
