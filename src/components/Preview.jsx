import React from "react";
import { Card} from 'react-bootstrap';
import Markdown from 'marked-react';

// Markdown.arguments 

class Preview extends React.Component {
render () {
    return (
        <Card className="preview ">
            <Card.Header>
            <h2>Preview</h2>
            </Card.Header>
            <Card.Body id="preview">
                <Markdown value={this.props.value} breaks={true}/>
            </Card.Body>
        </Card>
    );
}
}

export default Preview