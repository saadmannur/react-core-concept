import './App.css'

function App() {
  return (
    <>
     <h1>Hello React</h1>
     <Student></Student>
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

    
    </>
  )
}
function Player({name, run}){
  return(
    <div style={{marginBottom : '30px'}} className='player'>
      <h2>Name: {name} </h2>
      <p>Runs: {run} </p>
    </div>
  )
}
function Device (info){
  // console.log(info)
  const fixMargin = {
    margin: "5px"
  }
  return(
    <div style={{
      background:'lightGray',
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
function Developer (props) {
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
function Person () {
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
function Sports () {
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
function Pet () {
  return(
    <p>cats and dogs</p>
  )
}
function Student () {
  return (<>
    <div className='student'>
      <h2>Name</h2>
      <p>description</p>
    </div>
  </>)
}

export default App
