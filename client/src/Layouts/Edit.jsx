import { useEffect, useState } from "react"
import { Form, MenuItem, FormInput, Container, ButtonGroup, Menu, Segment } from "semantic-ui-react"

export default ({model,fields,Obj,})=>{
    const [editable,setEditable] = useState((Obj==undefined?"New "+model:"Edit" +model))
    const [formData,setFormData] = useState({})

    useEffect(()=>{
        if(Obj){
            setFormData(Obj)
        }else{
            const dt = {}
            fields.forEach(each=>{dt[each]=undefined})
        }
    },[])

    return (
        <Container fluid>
            <Menu>
                <MenuItem content={<h1 text="large">{editable ? "New " + model : "Edit " + model }</h1>}/>
                <MenuItem position = "right">
                    <ButtonGroup secondary
                        position="right"
                        buttons={[
                            {icon:"add",content:"Post"},
                            {icon:"save",content:"Save",basic:true},
                            {icon:"trash",content:"Discard"},
                        ]}
                    />
                </MenuItem>
            </Menu>
            <Segment>
                <Form>
                    {Object.keys(formData).map(each=><FormInput 
                                        inline
                                        position="left"
                                        type="text" 
                                        label={String(each).toUpperCase()} 
                                        name={each}
                                        placeholder={each}/>)}
                </Form>
            </Segment>
            
        </Container>
    )
}