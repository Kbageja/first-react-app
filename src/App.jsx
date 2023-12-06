import 'bootstrap/dist/css/bootstrap.min.css';

import Todoitem from './components/Todoitem';
import Todoiteems from './components/Todoiteems';
import './App.css'
function app(){
  const  todoitems   = [
  {
    name:"BUY MILK",
    date:"12/11/23",

  },
  {
    name:"CLEAN BEARD",
    date:"13/11/23",
  },
];
  return (
  <div class = "body">
  <center>
    <span>To Do Item</span>
  <div class="container text-center kg-rows ">
  <div class="row kg-row">
    <div class="col-4">
      <input type="text" placeholder='enter your todo here'/>
      
    </div>
    <div class="col-4">
      <input type="date" placeholder='dd/mm/yyyy' />
      
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success">Add</button>
    </div>
  </div>
 <Todoiteems todoitems={todoitems}></Todoiteems>

 
</div>
  </center>
</div>
  );
}
export default app;