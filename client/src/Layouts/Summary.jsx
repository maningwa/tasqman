import {Segment,Menu,MenuItem,Button} from "semantic-ui-react"
import DataList from "../Components/DataList"
export default ({model,titles,datas})=>{
    return (
        <>
          <Menu>
            <MenuItem>
              <h1>{model}</h1>
            </MenuItem>
            <MenuItem position="right">
              <Button secondary basic compact icon="add" content ={"New "+model}/>
            </MenuItem>
          </Menu>
          <DataList title={titles} data={datas}/>
        </>
    )
}