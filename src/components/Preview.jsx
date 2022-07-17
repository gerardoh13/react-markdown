import React from "react";
import { Card} from 'react-bootstrap';
import Markdown from 'marked-react';

// Markdown.arguments 

class Preview extends React.Component {
render () {
    return (
        <div>
        <Card className="preview ">
            <Card.Header>
            <h1>Preview</h1>
            </Card.Header>
            <Card.Body id="preview">
                <Markdown value={this.props.value} breaks={true}/>
            </Card.Body>
        </Card>
        </div>
    );
}
}

export default Preview