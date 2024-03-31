import { useEffect, useState } from "react"
import { TableHeaderCell, Table, TableHeader, TableRow, TableBody} from "semantic-ui-react"
import DataRow from "./DataRow"


export default ({title,data})=>{
    return(
        <>
        <Table fullwidth compact selectable basic>
        <TableHeader>
          <TableRow>
            {title.map(each=><TableHeaderCell content={each}/>)}
          </TableRow>
        </TableHeader>
        <TableBody>
            {data.map(each=><DataRow key={each.id} entry={each} onClick={(e=>{alert(each.order)})}/>)}
        </TableBody>
      </Table>
        </>
    )
}