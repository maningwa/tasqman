import { TableRow,TableCell } from "semantic-ui-react"

export default ({entry})=>{
    return(
        <>
          <TableRow>
            {entry.map(each=><TableCell content={each}/>)}
          </TableRow>
        </>
    )
}