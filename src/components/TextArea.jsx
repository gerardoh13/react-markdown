import React from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';
import defaultText from "./defaultText";



function TextArea(props) {
    const hideEditor = props.hideEditor
    if (hideEditor){
        return (
            <Col lg={12} xs={12}>
            <Card className="editor" style={props.hideEditor ? {} : {minHeight:'400px'}}>
                <Card.Header>
                    <Row>
                        <Col>
                            <h5>Editor</h5>
                        </Col>
                        <Col style={{textAlign: "right"}}>
                            <Button variant="dark" onClick={props.minEditor}>-</Button>
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
                            <Button variant="secondary" value=">" onClick={props.handleButtons}>block</Button>
                            <Button> block</Button>
                            <Button> block</Button>
                            <Button> block</Button>
                        </Col>
                        <Col style={{textAlign: "right"}}>
                            <Button variant="dark" onClick={props.minEditor}>-</Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body >
                {/* defaultValue={defaultText} */}
                    <textarea className="form-control" rows={20} id="editor" value={props.text} defaultValue={props.text} onChange={props.handleChange} type="text"/>
                </Card.Body>
            </Card>
            </Col>
        );
    }
}

export default TextArea