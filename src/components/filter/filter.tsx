import { useContext } from "react"
import { ButtonFilter } from "../../style/buttonsStyle"
import { FilterTypograpy } from "../../style/typograpy"
import { DivFilter } from "./style"
import { UserContext } from "../../providers/UserContext"

export const Filter = ()=> {
    const {countToDo, filterActive, filterComplete, filterAll, clearComplete, listToDo, activeType} = useContext(UserContext)
    return(
        <>
            <DivFilter className={listToDo.length>0?"show":undefined}>
                <FilterTypograpy>{`${countToDo} Itens left`}</FilterTypograpy>
                <div>
                    <ButtonFilter onClick={()=> filterAll()} className={activeType === "all" ? "active" : undefined}>
                        <FilterTypograpy>All</FilterTypograpy>
                    </ButtonFilter>
                    <ButtonFilter onClick={()=> filterActive()} className={activeType === "active" ? "active" : undefined}>
                        <FilterTypograpy>Active</FilterTypograpy>
                    </ButtonFilter>
                    <ButtonFilter onClick={()=> filterComplete()} className={activeType === "complete" ? "active" : undefined}>
                        <FilterTypograpy>Completed</FilterTypograpy>
                    </ButtonFilter>
                </div>
                <ButtonFilter> 
                    <FilterTypograpy onClick={()=> clearComplete()}>Clear Completed</FilterTypograpy>
                </ButtonFilter>
            </DivFilter>
        </>
    )
}
