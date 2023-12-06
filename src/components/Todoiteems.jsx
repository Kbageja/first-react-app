import Todoitem from "./Todoitem";
const Todoiteems = ({todoitems}) =>{
return( <>
{todoitems.map((item)=>{
 <Todoitem date = {item.date} name = {item.name}></Todoitem>
})}
</>
);

};
export default Todoiteems;