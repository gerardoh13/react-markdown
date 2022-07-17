import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import Preview from './Preview';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';
import defaultText from "./defaultText";

Lowlight.registerLanguage('js', javascript);

const renderer = {
    code(snippet, lang) {
    return <Lowlight key={this.elementId} language={lang} value={snippet} />;
    },
};

class Editor extends React.Component {
    state = {
        text: defaultText
    }
    handleChange = (e)=> {
        this.setState({
            text: e.target.value
        })
    }
render () {
    return (
        <div>
            <Row>
                <Col >
                <Card className="editor">
            <Card.Header>
            <h1>Editor</h1>
            </Card.Header>
            <Card.Body>
                <textarea className="textarea" id="editor" value={this.state.value} defaultValue={defaultText} onChange={this.handleChange} type="text"/>
            </Card.Body>
        </Card>
                </Col>
                <Col >
                <Preview value={this.state.text} renderer={renderer}/>
                </Col>
            </Row>
        </div>
    );
}
}

export default Editor