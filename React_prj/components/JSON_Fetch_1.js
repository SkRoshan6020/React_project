import React, { Component} from "react";
import { Container, Grid, Header, List} from "semantic-ui-react";
import contacts from './data.json';

class JSON_Fetch_1 extends
Component {

    render() {
        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header>List</Header>
                            <List>
                                {
                                    contacts.map(el => {
                                        return (
                                            <List.Item key={el.id}>
                                            <List.Content>
                                                {el.id}{el.name}
                                            </List.Content>
               <List.Content>{el.phone}
               </List.Content>
                               </List.Item>
                            );
                                    })
                                }
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default JSON_Fetch_1;