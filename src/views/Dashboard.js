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
import React, { useState, useEffect} from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';
// nodejs library that concatenates classes
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";
function Dashboard(props) {
  const [startDate, setStartDate] = useState("2022-12-01");
  const [endDate, setEndDate] = useState("2022-12-5");
  const [chart1,setChart1]=useState({});
  const [chart2,setChart2]=useState({});
  const [chart3,setChart3]=useState({});
  const [chart4,setChart4]=useState({});
  const [chart5,setChart5]=useState({});

  let chart1_2_options = {
    Plugins:{
      datalabels: {
        display: true,
        color: 'white'
     }
    },
    maintainAspectRatio: false,
    legend: {
      display: true
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

  useEffect(() => {
 
    let tests=
    axios.get(tests)
    .then(response=>{
      let list=[]
      let datagex=[]
      let datagex2=[]
      let datagex3=[]
      let datagex4=[]
      for(var i=0;i<response.data.data.length;i++)
      {
        list.push(response.data.data[i]["dateTime"])
        datagex.push(response.data.data[i]["installsNumber"])
        datagex2.push(response.data.data[i]["addInstallsNumber"])
        datagex3.push(response.data.data[i]["userDau"])
        datagex4.push(response.data.data[i]["requestNumber"])
        setChart1(
           {
            labels: list,
            datasets: [
              {
                label: "累计下载量",
                fill: true,
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
                label: "日新增安装量",
                fill: true,
                borderColor: "#d048b6",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#d048b6",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#d048b6",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: datagex2
              },
              {
                label: "日活跃度",
                fill: true,
                borderColor: "#00FF7F",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#00FF7F",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#00FF7F",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: datagex3
              },
              {
                label: "日调用",
                fill: true,
                borderColor: "#9932CC",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#9932CC",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#9932CC",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: datagex4
              }
            ]
           }
        )
        setChart2(
           {
            labels: list,
            datasets: [
              {
                label: "累计下载量",
                fill: true,
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
                label: "累计下载量",
                fill: true,
                type: 'bar',
                borderColor: "#d048b6",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: datagex
              }
            ]
          }

        )
        setChart3(
           {
            labels: list,
            datasets: [
              {
                label: "日新增安装量",
                fill: true,
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
                label: "日新增安装量",
                fill: true,
                type: 'bar',
                borderColor: "#d048b6",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: datagex2
              }
            ]
          }

        )
        setChart4(
           {
            labels: list,
            datasets: [
              {
                label: "日活跃度",
                fill: true,
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
                data: datagex3
              },
              {
                label: "日活跃度",
                fill: true,
                type: 'bar',
                borderColor: "#d048b6",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: datagex3
              }
            ]
          }
        )
        setChart5(
           {
            labels: list,
            datasets: [
              {
                label: "日调用",
                fill: true,
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
                data: datagex4
              },
              {
                label: "日调用",
                fill: true,
                type: 'bar',
                borderColor: "#d048b6",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: datagex4
              }
            ]
          }
        )

      }

    })
    .catch(error=>{
      console.log(error);
    });
  }, [startDate,endDate]);
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>

                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">CodeGeeX</h5>
                    <CardTitle tag="h2">总面板</CardTitle>
                    </Col>
                    <Col className="text-right" sm="6">
                    <Form className="text-right" inline>
                      <FormGroup>
                        <Label >start date</Label>
                        <Input
                          type="date"
                          name="start date"
                          onChange={(e) => { setStartDate(e.target.value) }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label >end datey</Label>
                        <Input
                          type="date"
                          name="end date"
                          onChange={(e) => { setEndDate(e.target.value) }}
                        />
                      </FormGroup>
                  </Form>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chart1}
                    plugins={[ChartDataLabels]} options={chart1_2_options}
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
                    <h5 className="card-category">CodeGeeX</h5>
                    <CardTitle tag="h2">累计下载</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
              
                    data={chart2}
                    plugins={[ChartDataLabels]} 
                    options={chart1_2_options}
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
                <h5 className="card-category">CodeGeeX</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  日新增
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chart3}
                    plugins={[ChartDataLabels]} 
                    options={chart1_2_options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">CodeGeeX</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 日活
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chart4}
                    plugins={[ChartDataLabels]} 
                    options={chart1_2_options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">CodeGeeX</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 日调用
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chart5}
                    plugins={[ChartDataLabels]} 
                    options={chart1_2_options}
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
