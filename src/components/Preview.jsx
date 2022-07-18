import React from "react";
import { Card} from 'react-bootstrap';
import Markdown from 'marked-react';

// Markdown.arguments 

    function Preview(props) {
    return (
        <Card className="preview ">
            <Card.Header>
            <h5>Preview</h5>
            </Card.Header>
            <Card.Body id="preview">
                <Markdown value={props.value} breaks={true}/>
            </Card.Body>
        </Card>
    );
}

export default Preview