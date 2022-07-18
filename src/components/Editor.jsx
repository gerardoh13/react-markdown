import React from "react";
import { Row, Col } from 'react-bootstrap';
import Preview from './Preview';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';
import defaultText from "./defaultText";
import TextArea from "./TextArea";

Lowlight.registerLanguage('js', javascript);

const renderer = {
    code(snippet, lang) {
    return <Lowlight key={this.elementId} language={lang} value={snippet} />;
    },
};

class Editor extends React.Component {
    state = {
        text: defaultText,
        hideEditor: false
    }
    handleChange = (e)=> {
        this.setState({
            text: e.target.value
        })
    }

    minEditor = () => {
        this.setState(prevState => {
            return {
                hideEditor: !prevState.hideEditor
            }
        })
    }
    handleButtons = (e) => {
        let val = e.currentTarget.value
        const { text } = this.state
        let textCopy = text
        let myField = document.getElementsByTagName('textarea').item(0);
        let newText = textCopy.slice(0, myField.selectionStart) + ' ' + val + ' ' + textCopy.slice(myField.selectionEnd)
        this.setState({
            text: newText
        })

    }
    
    textSelection = () => {
        let text = "";
        let myField = document.getElementsByTagName('textarea').item(0);
        text = myField.value.slice(myField.selectionStart, myField.selectionEnd);
        return text;
    }
render () {
    return (
            <Row >
                <TextArea hideEditor={this.state.hideEditor} minEditor={this.minEditor} text={this.state.text} handleChange={this.handleChange} handleButtons={this.handleButtons}/>
                <Col lg={this.state.hideEditor ? 12 : 6} xs={12}>
                <Preview value={this.state.text} renderer={renderer}/>
                </Col>
            </Row>
    );
}
}

export default Editor