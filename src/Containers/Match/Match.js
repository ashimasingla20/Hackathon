import React from "react";
import { Grid, Image, Button, Card} from 'semantic-ui-react';
import MatchCard from "../../Components/Cards/MatchCard";
const Match = () => {
    return (
        <div className="match__page">
            <MatchCard/>
            {/* <Card.Group> */}
                {/* <Card>
                    <Card.Content header='About Amy' />
                </Card>
                <Card fluid color='orange' header='Option 2' />
                <Card fluid color='yellow' header='Option 3' />
                    <Card.Content>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Description>
                    </Card.Description>
                    </Card.Content> */}
                    {/* <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                        Approve
                        </Button>
                        <Button basic color='red'>
                        Decline
                        </Button>
                    </div>
                    </Card.Content> */}
                {/* </Card> */}
                {/* <Card>
                    <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                    />
                    <Card.Header>Molly Thomas</Card.Header>
                    <Card.Meta>New User</Card.Meta>
                    <Card.Description>
                        Molly wants to add you to the group <strong>musicians</strong>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                        Approve
                        </Button>
                        <Button basic color='red'>
                        Decline
                        </Button>
                    </div>
                    </Card.Content>
                </Card> */}
                {/* <Card>
                    <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
                    />
                    <Card.Header>Jenny Lawrence</Card.Header>
                    <Card.Meta>New User</Card.Meta>
                    <Card.Description>
                        Jenny requested permission to view your contact details
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                        Approve
                        </Button>
                        <Button basic color='red'>
                        Decline
                        </Button>
                    </div>
                    </Card.Content>
                </Card> */}
            {/* </Card.Group> */}
        </div>
    )
}
export default Match;
