

import './App.css'
import Child from './components/child'
import { Parent } from './components/parent'

function App() {
  const Fruits = ["Html", "css", "javascript", "react"]
  const Number = [1, 2, 3, 4]
  const Students = [{
    id: 1,
    name: "kowsalya",
    degree: "BCA",
    mark: 80,
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500"

  },
  {
    id: 2,
    name: "viji",
    degree: "BCA",
    mark: 90,
    img: "https://img.magnific.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink_176532-13861.jpg"
  }
  ]

  return (
    <>
      <h2>Key And List</h2>
      <div className='list'>
        {
          Fruits.map((fruit) => (
            <h3>{fruit}</h3>
          ))
        }

      </div>


      <div className="num">
        <h2>Number</h2>
        {
          Number.map((num) => {
            return num * 2
          })
        }
      </div>
      <h2>Object Using</h2>
      <div className="student" >

        {
          Students.map((student) => {

            return <div className="student-details" key={student.id}>
              <img src={student.img} alt={student.name} />
              <p>Id:{student.id}</p>
              <p>Name:{student.name}</p>
              <p>Degree:{student.degree}</p>
              <p>Mark:{student.mark}</p>

            </div>
          })
        }
      </div>

      <Parent />
     
    </>
  )
}

export default App
