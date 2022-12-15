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
import React ,{ useState, useEffect} from "react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartExample1,
} from "variables/charts.js";

function Abnormal(props) {
   const [startDate, setStartDate] = useState("2022-12-01");
   const [endDate, setEndDate] = useState("2022-12-9");
   const [abtime, setabtime] = useState("2022-12-11");
   const [downloadq,setdownloadq]=useState("30");
   const [daliydownloadq,setdaliydownloadq]=useState("30");
   const [vscodedownload,setvscodedownload]=useState("30");
   const [vscodenew,setvscodenew]=useState("30");
   const [jet,setjet]=useState("30");
   const [jet2,setjet2]=useState("30");
   const [daycall,setdaycall]=useState("30");
   const [dayuse,setdayuse]=useState("30");
   const [weekdownload,setweekdownload]=useState("10");
   const [weekcu,setweekcu]=useState("10");
   const [weeknew,setweeknew]=useState("10");
   const [weekcall,setweekcall]=useState("10");
   const [weekuse,setweekuse]=useState("10");
  let list=[];
  let datagex4=[];
  let ratio=[];

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
    data3: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [
          {
            label: "用户采纳率",
            fill: true,
            type: 'bar',
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: ratio
          }
        ]
      };
    },
    data5: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: list,
        datasets: [
          {
            label: "日调用",
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
            data: datagex4
          },
          {
            label: "日调用",
            fill: true,
            type: 'bar',
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: datagex4
          }
        ]
      };
    },
    options: chart1_2_options
  };


   const getData1 = (startDate) => {
    let request = new XMLHttpRequest();
    request.open('GET', "https://maas.aminer.cn/tracking/report/selectPlugReport?startTime="+startDate+"&endTime="+startDate, false);  // 同步请求
    request.send(null);

    let obj={}
    if (request.status === 200) {
       obj = JSON.parse(request.responseText);
      console.log(obj) 
      // console.log(request.responseText);
    }

      console.log(Object.keys(obj.data).length) 

    setdownloadq(obj.data["installsNumber"]);
    setdaliydownloadq(obj.data["addInstallsNumber"]);
    setvscodedownload(obj.data["vscodeInstallsNumber"]);
    setvscodenew(obj.data["addVscodeInstallsNumber"]);
    setjet(obj.data["ideaInstallsNumber"]);
    setjet2(obj.data["addIdeaInstallsNumber"]);
    setdaycall(obj.data["requestNumber"]);
    setdayuse(obj.data["userDau"]);
  };
   useEffect(() => {
    getData1(startDate)
  }, [startDate]);

  const getData2 = (endDate) => {
    let request = new XMLHttpRequest();
    request.open('GET', "https://maas.aminer.cn/tracking/report/selectWeekReport?startTime="+endDate+"&endTime="+endDate, false);  // 同步请求
    request.send(null);

    let obj={}
    if (request.status === 200) {
       obj = JSON.parse(request.responseText);
      console.log(obj) 
      // console.log(request.responseText);
    }

      console.log(Object.keys(obj.data).length) 
      setweekdownload(obj.data["installsNumber"])
      setweekcu(obj.data["totalRequestNumber"])
      setweeknew(obj.data["weekInstallsNumber"])
      setweekcall(obj.data["weekRequestNumber"])
      setweekuse(obj.data["weekUserDau"])


  };
  useEffect(() => {
    getData2(endDate)
  }, [endDate]);

  const getData3 = (abtime) => {
  let request = new XMLHttpRequest();
  let texts="https://maas.aminer.cn/tracking/report/userAnalysis?startTime="+abtime+"&endTime="+abtime;
  console.log(texts)
  request.open('GET', texts, false);  // 同步请求
  request.send(null);

  let obj={}
  if (request.status === 200) {
      obj = JSON.parse(request.responseText);
    console.log(obj) 
    // console.log(request.responseText);
  }

    console.log(Object.keys(obj.data).length) 

    for(var i=0;i<10;i++)
    {

      list.push(obj.data[i]["vscodeMachineId"])
      ratio.push(obj.data[i]["adoptCount"]/obj.data[i]["total"])
      datagex4.push(obj.data[i]["total"])

    }
  return{

    labels: [1,2,3,4,5,6,7,8,9,10],
    datasets: [
      {
        label: "调用排行",
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
      }]
  }


};
useEffect(() => {
  getData3(abtime)
}, [abtime]);
  return (
    <>
      <div className="content">
        <Row>
        <Col lg="4" md="12">
        <FormGroup >
            <Label >查询日期</Label>
            <Input
                  type="date"
                  name="end date"
                  onChange={(e) => { setStartDate(e.target.value) }}
               />
            </FormGroup>
          </Col>
          <Col lg="12" md="12">

            <Card>
              <CardHeader>
                <CardTitle tag="h4">日报数据</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>累计下载量</th>
                      <th>日新增下载量</th>
                      <th>vscode下载数</th>
                      <th>vscode新增下载数</th>
                      <th>jetbrains下载数</th>
                      <th>jetbrains新增下载数</th>
                      <th>日调用量</th>
                      <th>日活用户</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{downloadq}</td>
                      <td>{daliydownloadq}</td>
                      <td>{vscodedownload}</td>
                      <td>{vscodenew}</td>
                      <td>{jet}</td>
                      <td>{jet2}</td>
                      <td>{daycall}</td>
                      <td>{dayuse}</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col lg="4" md="12">
        <FormGroup>
            <Label >查询日期</Label>
            <Input
                  type="date"
                  name="end date"
                  onChange={(e) => { setEndDate(e.target.value) }}
               />
            </FormGroup>
          </Col>
          <Col lg="12" md="12">

 
            <Card>
              <CardHeader>
                <CardTitle tag="h4">周报数据</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>下载数</th>
                      <th>累计调用量</th>
                      <th>本周新增下载数</th>
                      <th>本周调用量</th>
                      <th>周平均日活用户</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{weekdownload}</td>
                      <td>{weekcu}</td>
                      <td>{weeknew}</td>
                      <td>{weekcall}</td>
                      <td>{weekuse}</td>
                    </tr>
                  </tbody>
                </Table>
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
                  用户采纳率
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1["data3"]}
                    plugins={[ChartDataLabels]} 
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">CodeGeeX</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 调用排行
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={getData3(abtime)}
                    plugins={[ChartDataLabels]} 
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="12">
          <FormGroup >
            <Label >查询日期</Label>
            <Input
                  type="date"
                  name="end date"
                  onChange={(e) => { setabtime(e.target.value) }}
               />
            </FormGroup>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">异常排除数据</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr >
                      <th>用户排行</th>
                      <th>vscodeid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td >1</td>
                      <td>{list[0]}</td>
                    </tr>
                    <tr>
                       <td>2</td>
                      <td>{list[1]}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>{list[2]}</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>{list[3]}</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>{list[4]}</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>{list[5]}</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>{list[6]}</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>{list[7]}</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>{list[8]}</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>{list[9]}</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Abnormal;