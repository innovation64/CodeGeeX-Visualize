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
import { Pie,Line} from "react-chartjs-2";
import axios from 'axios';

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


function Abnormal(props) {
   const [startDate, setStartDate] = useState("2022-12-01");
   const [endDate, setEndDate] = useState("2022-12-9");
   const [abtime, setabtime] = useState("2022-12-21");
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
   const [chart1,setChart1]=useState({});
   const [chart2,setChart2]=useState({});
   const [chart3,setChart3]=useState({});
   const [chart4,setChart4]=useState({});
   const [list,setList]=useState([]);



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
   useEffect(() => {
    let tests="https://maas.aminer.cn/tracking/report/selectPlugReport?startTime="+startDate+"&endTime="+startDate;
    axios.get(tests)
    .then(
      response=>{
        setdownloadq(response.data.data["installsNumber"]);
        setdaliydownloadq(response.data.data["addInstallsNumber"]);
        setvscodedownload(response.data.data["vscodeInstallsNumber"]);
        setvscodenew(response.data.data["addVscodeInstallsNumber"]);
        setjet(response.data.data["ideaInstallsNumber"]);
        setjet2(response.data.data["addIdeaInstallsNumber"]);
        setdaycall(response.data.data["requestNumber"]);
        setdayuse(response.data.data["userDau"]);
      }
    )
    .catch(error=>{
      console.log(error);
    });
  }, [startDate]);

  useEffect(() => {
    let tests="https://maas.aminer.cn/tracking/report/selectWeekReport?startTime="+endDate+"&endTime="+endDate;
    axios.get(tests)
    .then(
      response=>{
        setweekdownload(response.data.data["installsNumber"])
        setweekcu(response.data.data["totalRequestNumber"])
        setweeknew(response.data.data["weekInstallsNumber"])
        setweekcall(response.data.data["weekRequestNumber"])
        setweekuse(response.data.data["weekUserDau"])
  
      }
    )
  .catch(error=>{
      console.log(error);
    });
  }, [endDate]);

useEffect(() => {
  let texts="https://maas.aminer.cn/tracking/report/userAnalysis?startTime="+abtime+"&endTime="+abtime;
  axios.get(texts)
  .then(
    response=>{
      let list1=[]
      let datagex4=[];
      let ratio=[];
      for(var i=0;i<10;i++)
      {
  
        list1.push(response.data.data[i]["vscodeMachineId"])
        ratio.push(response.data.data[i]["adoptCount"]/response.data.data[i]["total"])
        datagex4.push(response.data.data[i]["total"])
  
      }
      setList(list1)
      setChart4({
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [
          {
            label: "用户采纳率",
            fill: true,
            type: 'bar',
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: ratio
          }
        ]
      })
      setChart3({

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
      })
    }

  )
  .catch(error=>{
    console.log(error);
  });
}, [abtime]);


useEffect(()=>{
  let list1=[];
  let count=[];
  let list2=[];
  let count1=[];
  let texts="https://maas.aminer.cn/tracking/report/addrTol?startTime="+abtime+"&endTime="+abtime;
  axios.get(texts)
  .then(
    response=>{

  for(var i=0;i<response.data.data.length;i++)
    {

      list1.push(response.data.data[i]["country"])
      count.push(response.data.data[i]["total"])
      if (response.data.data[i]["total"]>35)
      {
        list2.push(response.data.data[i]["country"])
        count1.push(response.data.data[i]["total"])
      }

    }
  
console.log(list1,list2,count,count1)
 setChart1({

    labels: list2,
        datasets: [
          {
            label: "国家分布",
            fill: true,
            type: 'pie',
            borderColor: "#0068b7",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: count1
         }
      ]
  })
    setChart2({

          labels: list1,
          datasets: [
            {
              label: "国家分布",
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
              data: count
            }]
        })
    }
  )
  .catch(error=>{
    console.log(error);
  });
},[abtime])
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
        <Col lg="8">
          <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">CodeGeeX</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  国家用户分布
                </CardTitle>
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
          <Col lg="4">
          <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">CodeGeeX</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  国家用户分布
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Pie
                    data={chart1}
                    plugins={[ChartDataLabels]} 
                    options={chart1_2_options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row  >
        <Col lg="4" >

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
                    data={chart4}
                    plugins={[ChartDataLabels]} 
                    options={chart1_2_options}
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
                    data={chart3}
                    plugins={[ChartDataLabels]} 
                    options={chart1_2_options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="12">
          
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
                    <tr >
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
          <Col lg="4">
          <FormGroup >
            <Label >查询日期</Label>
            <Input
                  type="date"
                  name="end date"
                  defaultValue={2022-12-12}
                  onChange={(e) => { setabtime(e.target.value) }}
               />
            </FormGroup>
            <h1>注意事项</h1>
            <h3>异常数据查询日期仅仅支持12月11号以后的查询，之前没有数据库汇总为空</h3>
            <h3>本查询页面不能查询当天的异常数据，因为所有数据都是次日从数据库汇总</h3>

          </Col>

        </Row>
      </div>
    </>
  );
}

export default Abnormal;