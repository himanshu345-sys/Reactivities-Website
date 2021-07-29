import { observer } from "mobx-react-lite";
import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";


interface Props{
    activity: Activity;
}

export default observer (function ActivityDetailedInfo({activity}:Props){
    
    
    return(

        <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='info'/>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        {activity.description}
                    </Grid.Column>
                </Grid>
            </Segment>

            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='calendar'/>
                    </Grid.Column>

                    <Grid.Column width={15}>
                        <span>
                            {activity.date}
                        </span>
                    </Grid.Column>
                </Grid>
            </Segment>

            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='marker' size='large' color='teal'/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{activity.venue}, {activity.city}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    )
})