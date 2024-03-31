import { useEffect, useState } from 'react'
import {Container, Menu,Button, MenuItem, MenuMenu, Header, Segment} from "semantic-ui-react"
import './App.css'
import Summary from './Layouts/Summary'
import Edit from './Layouts/Edit'

function App() {
  const [headings,setHeadings] = useState([])
  const [db, setDb] = useState([])
  const [activeModel,setActiveModel] = useState("Orders")

  const toggleModel = (model)=>{
    setActiveModel(model)
  }
  useEffect(()=>{
      const url = "/api/"+activeModel
      fetch(url).then(response=>{
        return response.json()
      }).then(
        (res)=>{
          setHeadings(Object.keys(res[0]))
          const things = res.map(each=>Object.values(each))
          setDb(things)
        }
      )
    },[activeModel])
  return (
   <> 
    {/* // Navbar Component */}
    <Container fluid>
      <Menu>
        <MenuItem>
          <Header size="large">TasqMan</Header>
        </MenuItem>
        <MenuMenu position='right'>
          <MenuItem> 
            <Button basic  onClick={e=>{e.preventDefault();toggleModel("Orders")}} compact icon="home" content="Dashboard"/>
          </MenuItem>
          <MenuItem >
            <Button basic  onClick={e=>{e.preventDefault();toggleModel("Orders")}} compact icon="folder" content="Orders"/>
          </MenuItem>
          <MenuItem >
            <Button basic  onClick={e=>{e.preventDefault();toggleModel("Deliveries")}} compact icon="plane" content="Deliveries"/>
          </MenuItem>
          <MenuItem >
            <Button basic  onClick={e=>{e.preventDefault();toggleModel("Vehicles")}} compact icon="truck" content="Vehicles"/>
          </MenuItem>
        </MenuMenu>
      </Menu>
    </Container>
    <Container fluid>
      <Segment>
        <Summary model={activeModel} titles ={headings} datas = {db}/>
      </Segment>
    </Container >
    <Container fluid>
      <Segment>
        <Edit model={activeModel} fields={headings}/>    
      </Segment>
    </Container>
  </>
  )
}

export default App
