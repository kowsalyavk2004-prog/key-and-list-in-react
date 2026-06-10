
import React from 'react'

const Child = (props, index) => {
    console.log(props);
    return (
        <>
            <p>Child Element</p>
            {
                Child.map((item,index)=>{
                    

                })
            }
            <p >Name: {props.name}</p>
            <p >Mark: {props.mark}</p>


            {/* {Child.map((item, index) => (
                <Child
                    key={index}
                    name={item.name}
                    mark={item.mark}
                />
            ))} */}
        </>

    )
}

export default Child