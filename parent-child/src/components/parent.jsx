
import Child from './child'

export const  Parent=() =>{
    let User={
        name:"mathu",
        mark:90
    }
  return (
    <div>
      <p>parent Element</p>
    <Child values={User}/>

    </div>
  )
}
