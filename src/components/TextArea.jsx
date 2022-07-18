import React from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faItalic, faImage, faLink, faList, faListOl, faQuoteLeft, faMinimize, faMaximize } from '@fortawesome/free-solid-svg-icons'



function TextArea(props) {
    const hideEditor = props.hideEditor
    console.log(hideEditor)
    if (hideEditor){
        return (
            <Col >
            <Card className="editor">
                <Card.Header>
                    <Row>
                        <Col>
                            <h5>Editor</h5>
                        </Col>
                        <Col style={{textAlign: "right"}}>
                            <Button variant="dark" onClick={props.minEditor}><FontAwesomeIcon icon={faMaximize}/></Button>
                        </Col>
                    </Row>
                </Card.Header>
            </Card>
            </Col>
        )
    } else {
        return (
            <Col lg={6} xs={12}>
            <Card className="editor" >
                <Card.Header>
                    <Row>
                        <Col>
                            <h5>Editor</h5>
                        </Col>
                        <Col style={{textAlign: "right"}}>
                            <Button variant="dark" onClick={props.minEditor}><FontAwesomeIcon icon={faMinimize}/></Button>
                        </Col>
                        </Row>
                            <Button className="btnmargin" variant="secondary" value="**Strong Text**" onClick={props.handleButtons}><FontAwesomeIcon icon={faBold}/></Button>
                            <Button className="btnmargin" variant="secondary" value="_Emphasized Text_" onClick={props.handleButtons}><FontAwesomeIcon icon={faItalic}/></Button>
                            <Button className="btnmargin" variant="secondary" value=">" onClick={props.handleButtons}><FontAwesomeIcon icon={faQuoteLeft}/></Button>
                            <Button className="btnmargin" variant="secondary" value="[Link](https://)" onClick={props.handleButtons}><FontAwesomeIcon icon={faLink}/></Button>
                            <Button className="btnmargin" variant="secondary" value="1. " onClick={props.handleButtons}><FontAwesomeIcon icon={faListOl}/></Button>
                            <Button className="btnmargin" variant="secondary" value="- " onClick={props.handleButtons}><FontAwesomeIcon icon={faList}/></Button>
                            <Button className="btnmargin" variant="secondary" value="![Alt Text](https://)" onClick={props.handleButtons}><FontAwesomeIcon icon={faImage}/></Button>
                </Card.Header>
                <Card.Body >
                    <textarea className="form-control" rows={25} id="editor" value={props.text} onChange={props.handleChange} type="text"/>
                </Card.Body>
            </Card>
            </Col>
        );
    }
}

export default TextArea