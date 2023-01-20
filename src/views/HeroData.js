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
import React, { useState, useContext } from "react";
import { HeroIdContext } from './HeroIdContext';
import { useLocation } from "react-router-dom";
import heroDataByID from '../../src/herodata.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';
import '../assets/css/herodata.css';
import HeroSkills from './HeroSkills'
import herodatas from '../herodatajson/HeroDataImport'
import attrStrImg from '../assets/img/attr_str.jpeg'
import attrAgiImg from '../assets/img/attr_agi.jpeg'
import attrIntImg from '../assets/img/attr_int.jpeg'

// import Modal from 'assets/scss/black-dashboard-react.scss';

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
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    CardFooter,
    CardText,
    UncontrolledTooltip
  } from "reactstrap";


function HeroData() {

    

    const location = useLocation()
    const heroid = new URLSearchParams(location.search).get('heroid')

    // console.log(herodatas)

    const herodata = herodatas.find((data) => data.id == heroid)
    var primaryAttrLabel = ''
    var primaryAttrIcon = ''
    // console.log(herodatas.find((data) => data.id == heroid))

    if(herodata.primary_attr == '0'){
        primaryAttrLabel = 'Strength'
        primaryAttrIcon = attrStrImg
    }else if(herodata.primary_attr == '1'){
        primaryAttrLabel = 'Agility'
        primaryAttrIcon = attrAgiImg
    }else{
        primaryAttrLabel = 'Intelligence'
        primaryAttrIcon = attrIntImg
    }
    
    // console.log(herodata.abilities)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [primaryAttrIcon, setPrimaryAttrIcon] = useState('')

    return (
    <>
      <div className="content">
          
        <Row>
          <Col md="4">
          <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={herodata.thumb_image}
                    //   src={require({herodata.thumb_image})}
                    />
                    <h3 className="title">{herodata.name_loc}</h3>
                  </a>
                  <img src={primaryAttrIcon} className="attrLogo" />
                  {/* <p className="description"><b>{primaryAttrLabel}</b> Type</p> */}
                </div>
                <div className="card-description">
                  <p>{herodata.hype_loc}</p>
                  <br />
                  <p>Common Role: {herodata.npe_desc_loc}</p>
                </div>
                <br />
                <Row>
                    <Col md="3">
                        <p>Health:</p>
                        <p>Mana:</p>
                        <p>Min. Dmg:</p>
                        <p>Max Dmg:</p>
                        <p>Attk Rate:</p>
                        <p>Attk Rate:</p>
                        <p>Armor:</p>

                    </Col>
                    <Col md="2">
                        <p><span className="text-success">{herodata.max_health}</span></p>
                        <p><span className="text-success">{herodata.max_mana}</span></p>
                        <p><span className="text-success">{herodata.damage_min}</span></p>
                        <p><span className="text-success">{herodata.damage_max}</span></p>
                        <p><span className="text-success">{herodata.attack_rate}</span></p>
                        <p><span className="text-success">{herodata.attack_range}</span></p>
                        <p><span className="text-success">{parseInt(herodata.armor)}</span></p>
                    </Col>
                    <Col md="1"></Col>
                    <Col md="4">
                        <p>Base STR:&nbsp; <span className="text-success">{herodata.str_base}</span></p>
                        <p>Base AGI:&nbsp; <span className="text-success">{herodata.agi_base}</span></p>
                        <p>Base INT:&nbsp; <span className="text-success">{herodata.int_base}</span></p>

                        
                    </Col>
                   
                </Row>
                
              </CardBody>
              {/* <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter> */}
            </Card>
          </Col>
          
          <Col md="8">
              <HeroSkills ability={herodata.abilities} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HeroData;
