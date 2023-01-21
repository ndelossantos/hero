import React, { useState, useEffect, useContext } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { HeroIdContext } from './HeroIdContext';
import { NavLink } from "react-router-dom";
import '../assets/css/herodata.css';
// import heroDataByID from '../../src/herodata.json';
import herodatas from '../herodatajson/HeroDataImport'



// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import heroListData from '../../src/herolist.json';

function Dashboard(props) {

  // console.log(herodatas) 
  
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);

  };

  const [showHeroPrev, setShowHeroPrev] = useState({img:'', name:''})
  // const showHeroImg = heroDataByID.find((data) => data.id == heroid)

  // const navigate = useNavigate();

  const [heroList, setHeroList] = useState(heroListData)

  // STR heroes
  // const [attrherolist, setStrHeroList] = useState({})
  const strHeroListArr = []
  const agiHeroListArr = []
  const intHeroListArr = []

  const [isActiveHover, setIsActiveHover] = useState(false);
  const [ isActiveHeroPrev, setSsActiveHeroPrev ] = useState(false)
  // const ref = useRef(null);

  function someHandler(e) {

    // const { id } = e.target
    const find = herodatas.find((data) => data.id == e.target.id)
    
    // setShowHeroPrev(find.thumb_image)
    if(find){
      setIsActiveHover(true)
      setSsActiveHeroPrev(true)
      setShowHeroPrev({img:find.thumb_image, name:find.name_loc})
      // console.log('img: '+find.name_loc)
    }else{
      
      setSsActiveHeroPrev(false)
      setShowHeroPrev({img:'', name:''})
    }
    // console.log(id)
    // element.className = "heroborderpick"

    // console.log(id)
    // setIsActiveHover(true);
  }

  function someOtherHandler(e) {
    setIsActiveHover(false)
    // const element = e.target.id
    // element.className = ""
    // console.log(id)
    // setIsActiveHover(false);
  }

  


  for(let attrh of heroList){
    
    if(attrh.primary_attr == '0'){
      strHeroListArr.push({id: attrh.id, name: attrh.name_loc, img: attrh.image})
    }else if(attrh.primary_attr == '1'){
      agiHeroListArr.push({id: attrh.id, name: attrh.name_loc, img: attrh.image})
    }else{
      intHeroListArr.push({id: attrh.id, name: attrh.name_loc, img: attrh.image})
    }
  }
  // console.log(strHeroListArr)
  // const [ heroIDvalue, setheroIDvalue ] = useContext(HeroIdContext)

  const [passed, setPassed] = useState({data: 'hoooy!'})

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12" className="">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    {/* <h5 className="card-category">Total Shipments</h5> */}
                    <CardTitle tag="h2">Hero Guide App</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
            <Row>
              <Col md="9">
              <CardBody className="all-icons cbody centerbod">
                <h4>STRENGTH</h4>
                <Row >
                  {
                    strHeroListArr.map(strhl => (
                      
                      <Col key={strhl.id} lg="1">
                        <NavLink to={`/admin/herodata?heroid=${strhl.id}`}>
                          <div>
                            <img src={strhl.img} height="90px" width="auto"
                              id={strhl.id}
                              onMouseEnter={(e) => someHandler(e)}
                              onMouseLeave={(e) => someOtherHandler(e)}
                              className="heroListImg"
                            />
                              {/* // id={`heroborder_${strhl.id1}`} */}
                              {/* className={ isActiveHover ? 'heroborderpick' : '' } /> */}
                            {/* <br />
                            <span>{strhl.name}</span> */}
                          </div>
                          {/* <Button onClick={() => setheroIDvalue(agihl.id)}>View</Button> */}
                        </NavLink>
                      </Col>
                    ))
                  }
                </Row>
              </CardBody>
              <CardBody className="all-icons cbody">
                <h4>AGILITY</h4>
                <Row>
                  {
                    agiHeroListArr.map(agihl => (
                      
                      <Col key={agihl.id}
                        className="herolistcont"
                        lg="1"
                      >
                        <NavLink to={`/admin/herodata?heroid=${agihl.id}`}>
                          <div>
                          <img src={agihl.img} height="70px" width="70px"
                              id={agihl.id}
                              onMouseEnter={(e) => someHandler(e)}
                              onMouseLeave={(e) => someOtherHandler(e)}
                              className="heroListImg"
                            />
                            {/* <br />
                            <span>{agihl.name}</span> */}
                          </div>
                          {/* <Button onClick={() => setheroIDvalue(agihl.id)}>View</Button> */}
                        </NavLink>
                        
                      </Col>

                    ))
                  }
                </Row>
              </CardBody>
              <CardBody className="all-icons cbody">
                <h4>INTELLIGENCE</h4>
                <Row>
                  {
                    intHeroListArr.map(inthl => (
                      
                      <Col key={inthl.id}
                        className="herolistcont"
                        lg="1"
                        md="2"
                        sm="3"  
                      >
                        <NavLink to={`/admin/herodata?heroid=${inthl.id}`}>
                          <div>
                          <img src={inthl.img} height="70px" width="70px"
                              id={inthl.id}
                              onMouseEnter={(e) => someHandler(e)}
                              onMouseLeave={(e) => someOtherHandler(e)}
                              className="heroListImg"
                            />
                            {/* <br />
                            <span>{inthl.name}</span> */}
                          </div>
                          {/* <Button onClick={() => setheroIDvalue(agihl.id)}>View</Button> */}
                        </NavLink>
                        <br />
                        <br />
                        <br />
                      </Col>

                    ))
                  }
                </Row>
              </CardBody>
              </Col>
              <Col md="3">
                <div className="showHeroHover">
                  { isActiveHeroPrev && <img src={showHeroPrev.img} className="prevHero" />}
                  <br />
                  <br />
                  <h3>{showHeroPrev.name}</h3>
                </div>
                
              </Col>
            </Row>
            </Card>
          </Col>
          
        </Row>
        
      </div>
    </>
  );
}

export default Dashboard;
