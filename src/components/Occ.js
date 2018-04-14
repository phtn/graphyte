import React from 'react'
import { Icon, Label, Menu, Table, Progress } from 'semantic-ui-react'

const getColumn = data => {
  if(data){
    let reversed = data.slice(0).reverse()
    return reversed.map((item)=> (

      <Table.Row key={item.id}>
        <Table.Cell>
          {item.ADR}
          <Progress indicating percent={100*(parseInt(item.ADR) / 180) }/>
        </Table.Cell>
        <Table.Cell>
          <Label color='blue'>{item.Available}</Label>
        </Table.Cell>
        <Table.Cell>
          <Label color='yellow'>{item.Occupied}</Label>
        </Table.Cell>
        <Table.Cell>
          {item.OccPercent}
          <Progress percent={parseInt(item.OccPercent.substr(0,item.OccPercent.length - 2))} indicating/>
        </Table.Cell>
        <Table.Cell>
          <Label color='yellow'>{item.RevPAR}</Label>
        </Table.Cell>
        <Table.Cell>
          <Label color='red'>{item.RoomRev}</Label>
        </Table.Cell>
        <Table.Cell>
          <Label color='black'>{item.Day}</Label>
        </Table.Cell>
      </Table.Row>


    ))
  }
}

const Occupancy = (props) => (
  <Table celled fixed>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ADR</Table.HeaderCell>
        <Table.HeaderCell>Avail</Table.HeaderCell>
        <Table.HeaderCell>Occ</Table.HeaderCell>
        <Table.HeaderCell>Occ %</Table.HeaderCell>
        <Table.HeaderCell>PAR</Table.HeaderCell>
        <Table.HeaderCell>Rev</Table.HeaderCell>
        <Table.HeaderCell>Day</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

      {getColumn(props.data)}
       
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='7'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)
export default Occupancy