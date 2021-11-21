import logo from './logo.svg';
import './App.css';
import CardList from './component/CardList';

function App() {
  const robots = [
    {id:1,name:'Zid1',email:'zid1@gmail.com',username:'alkrenawizid1'},
    {id:2,name:'Zid2',email:'zid2@gmail.com',username:'alkrenawizid2'},
    {id:3,name:'Zid3',email:'zid3@gmail.com',username:'alkrenawizid3'},
    {id:4,name:'Zid4',email:'zid4@gmail.com',username:'alkrenawizid4'},
    {id:5,name:'Zid5',email:'zid5@gmail.com',username:'alkrenawizid5'}
  ]
  return (
    <div>
      <CardList arr_robots={robots} />
    </div>
  );
}

export default App;
