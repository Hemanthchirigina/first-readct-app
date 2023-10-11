import React from 'react';
import HeaderBar from './HeaderBar';
import { Routes,Route } from 'react-router-dom';
import Form from './Form';
import TodoApp from './TodoApp';
function App() {
  return (
    <div>
      
      <Routes>
          <Route path='/' element={<HeaderBar/>}></Route>
          <Route path='/Form.js' element={<Form/>}></Route>
          <Route path="/https://www.indiatoday.in/programmes/news-today"></Route>
          <Route path='/TodoApp.js' element={<TodoApp/>}></Route>
        </Routes>
    
    </div>
  );
}

export default App;
