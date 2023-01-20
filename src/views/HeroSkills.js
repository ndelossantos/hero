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
// import HeroSkills from '..//'

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

  function HeroSkills({ability}){
        console.log(ability)

        const [ modalvidskill, setModalVidSkill ] = useState('')

        const [show, setShow] = useState(false);
        
        const handleClose = () => setShow(false);
        
        const handleShow = (vid) => {
            setShow(true);
            setModalVidSkill(vid)
            // console.log(vid)
        }

        


    
        return(

                <Card className="">
                <CardHeader>
                    <h6 className="title d-inline">Abilities</h6>
                    {/* <p className="card-category d-inline"> today</p> */}
                </CardHeader>
                <CardBody>
                    <div className="table-full-width table-responsive">
                    <Table>
                        <tbody>
                        {
                            ability.map(ha => (
                            <tr key={ha.id}>
                                <td width="15%">
                                    <img src={ha.thumb_image} height="100px" width="100px" />
                                </td>
                                <td>
                                    <p className="text-primary">{ha.name_loc}</p>
                                    {/* <p className="title">Description</p> */}
                                    <p className="">
                                        { ha.desc_loc }
                                    </p>
                                    {
                                        ha.scepter_loc !== "" ?
                                        
                                        <div>
                                            <br />
                                            <span className="title" color="blue" >Scepter Effect</span>
                                            <p className="text-success">
                                                { ha.scepter_loc }
                                            </p>
                                        </div>
                                        :''
                                    }
                                </td>
                                <td width="15%" className="td-actions text-right">
                                <Button onClick={() => {handleShow(ha.video_mp4)}}>
                                    <i className="tim-icons icon-triangle-right-17" />
                                </Button>
                                {/* <Button className="nextButton" onClick={handleShow}>
                                    Open Modal
                                </Button> */}
 
                                </td>
                            </tr>
                            ))
                        }
                            
                        
                        </tbody>
                    </Table>
                    </div>
                </CardBody>
                        
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                    <Modal.Title>Skill Demonstration</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <p>{ha.video_mp4}</p> */}
                    <video className="skillvideo" autoplay="true" controls loop>
                        <source src={modalvidskill} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </Modal.Body>
                
                    <Modal.Footer>
                
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Card>

                

        )

  }




  export default HeroSkills