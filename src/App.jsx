import './App.css'
import ToDo from './todo.jsx'
import DoWork from './work.jsx'
import TaskDo from "./conditional-rendering.jsx"
import Kheloyer from "./player.jsx"
import Singer from './singer.jsx'
import Library from './library.jsx'

// const time = 50;
// const players = ['messi', 'neymer', 'ronaldo', 'mbappe', 'barnerdo silva', 'pepe', 'vini', 'benjima', 'kito']
const singers = [
  { id: 1, name: "arjit", age: 40 },
  { id: 2, name: "atif", age: 35 },
  { id: 3, name: "rahat", age: 55 },
  { id: 4, name: "kaluda", age: 29 },
]
const books = [
  { id: 1, name: 'English', price: 200 },
  { id: 2, name: 'Bangla', price: 100 },
  { id: 3, name: 'Math', price: 300 },
  { id: 4, name: 'Science', price: 400 },
  { id: 5, name: 'Fiction', price: 500 },
]

function App() {
  return (
    <>
      <h1>Hello React</h1>

      <Library books={books}></Library>

      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }

      {/* {
        players.map(player => <Kheloyer name={player}></Kheloyer>)
      } */}


      {/* <TaskDo task='Class' isDone={true} duration={120}></TaskDo>
     <TaskDo task='Kola' isDone={false}></TaskDo>
     <TaskDo task='ghum' isDone={false}></TaskDo>
     <TaskDo task='Tution, Balucora' isDone={true} duration={70}></TaskDo>
      <TaskDo task='Tution, Agrabad' isDone={true} duration={80}></TaskDo>
     <TaskDo task='do not waste' isDone={false}></TaskDo>
     <TaskDo task='Coding' isDone={true} duration={550}></TaskDo> */}
      {/* <DoWork work='Make Project' isFit={true} duration={200}></DoWork>
     <DoWork work='Make another Project' isFit={false} duration={100}></DoWork>
     <DoWork work='Do Explore' isFit={true} duration={300}></DoWork>
     <DoWork work='burn cigaret' isFit={true} duration={5}></DoWork>
     <DoWork work='burn weed' isFit={false} duration={1}></DoWork> */}

      {/* <ToDo task='Learn React' isDone={false} time={time}></ToDo>
     <ToDo task='revise javascript' isDone={true}></ToDo>
     <ToDo task='take shower' isDone={false}></ToDo>
      <ToDo task='burn a cigaret' isDone={true} time={time}></ToDo>
      <ToDo task='enjoy the enviroment' isDone={true} time={time}></ToDo> */}

      {/* <Student></Student>
     <Student></Student>
     <Person></Person>
     <Person></Person>
     <Developer name='multi' technology="javascript" ></Developer>
     <Developer name='banty' technology="pithon"></Developer>
     <Developer name='kakala' technology="c++"></Developer>
     <Device type='laptop' name='Dell Latitude' price='24,400' bran='Dell' description='this is a very good laptop in the world'></Device>
     <Device type='phone' name='Redmi 12' price='16000' bran='xami' description='this is a very good laptop in the world'></Device>
     <Device type='laptop' name='hp Hunter' price='2,40,000' bran='hp' description='this is a very good laptop in the world'></Device>
     <Device type='laptop' name='Apple Mac Book' price='20,000' bran='Apple' description='this is a very good laptop in the world'></Device>
     <Device type='phone' name='iphone 13' price='24,000' bran='apple' description='this is a very good laptop in the world'></Device>
     <Device type='phone' name='iphone 15pro max' price='24,4000' bran='apple' description='this is a very good laptop in the world'></Device>
     <Player name='Rubel' run='377'></Player>
     <Player name='Musfiqur' run='5556'></Player>
     <Player name='Muztafize' run='477'></Player>
     <Player name='Taskin' run='1126'></Player>
     <Salami event='rojar Eid' amount='2000'></Salami>
     <Salami event='kurbani Eid' amount='200'></Salami> */}


    </>
  )
}
function Salami({ event, amount = 0 }) {
  return (
    <div className='player' style={{ marginBottom: '30px' }}>
      <h2>Salami for: {event}</h2>
      <h3>Amount: {amount} </h3>
    </div>
  )
}

function Player({ name, run }) {
  return (
    <div style={{ marginBottom: '30px' }} className='player'>
      <h2>Name: {name} </h2>
      <p>Runs: {run} </p>
    </div>
  )
}
function Device(info) {
  // console.log(info)
  const fixMargin = {
    margin: "5px"
  }
  return (
    <div style={{
      background: 'lightGray',
      color: 'green',
      border: '2px solid purple',
      margin: '10px',
      padding: '10px',
      borderRadius: '20px',
    }}>
      <h4 style={fixMargin}>Type: {info.type}</h4>
      <h2 style={{ color: 'green' }}>Name: {info.name}</h2>
      <h3 style={fixMargin}>Price: {info.price}</h3>
      <h4 style={fixMargin}>brand: {info.bran}</h4>
      <p style={fixMargin}>Description: {info.description}</p>

    </div>
  )
}
function Developer(props) {
  // console.log(props)
  return (
    <div style={{
      color: "yellow",
      border: '2px , solid green',
      borderRadius: '10px',
      background: "gray",
      margin: '10px',
      padding: '10px'
    }}>
      <h3>Developer: {props.name} </h3>
      <p>Technology: {props.technology} </p>
    </div>
  )
}
function Person() {
  const name = "dragoon"
  const age = 23;
  const personStyle = {
    color: "green",
    textAlign: "left"
  }
  return (
    <p style={personStyle}>i am a Person {name} {age}</p>
  )
}
function Sports() {
  return (
    <div>
      <h1>Cricket</h1>
      <ul>
        <li>Shakib al hasan</li>
        <li>rubel</li>
        <li>safe uddin</li>
      </ul>
      <p>playing and loosing</p>
    </div>
  )
}
function Pet() {
  return (
    <p>cats and dogs</p>
  )
}
function Student() {
  return (<>
    <div className='student'>
      <h2>Name</h2>
      <p>description</p>
    </div>
  </>)
}

export default App
