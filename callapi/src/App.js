import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const url = 'https://aircall-job.herokuapp.com/activities'
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJson = await response.json()
    setTodos(responseJson)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="App">

      {!todos ? 'Cargando...' :
        todos.map((todo, index) => {
          return <div>
            <h4 class="separator"><span>{todo.created_at}</span></h4>
            <div id="box1" key={index}>
              <div class="jumbotron">
                <div class="row">
                  <div id="phone" class="col-3"><img src="assets/img/incoming-call.png" /></div>
                  <div id="info" class="col-6">
                    <div id="number" class="row">
                      <h5><strong>{todo.from}</strong><br /></h5>
                    </div>
                    <div id="text" class="row">
                      <p>&nbsp;tried to call on&nbsp;<strong>{todo.to}</strong><br /></p>
                    </div>
                  </div>
                  <div id="time" class="col-3">
                    <p>{todo.duration} Min</p>
                  </div>
                </div>
                <a href="details.html">Details</a>
              </div>
            </div>
          </div>
        })
      }

    </div >
  );
}

export default App;
