import Mware from "./component/mware";
import { useSelector } from "react-redux";
import './App.css';

function App() {



  const company = useSelector(state => state.company)
  console.log(company);
  return (
    <>

      <Mware />
      <ul>
         {company.map(item => {
        return (
          <>
          <li>
            <h2>{item.name}</h2>
            <p>{item.sity}</p>
          </li>
          </>
        );
      })}
      </ul>
     
    </>
  );
}

export default App;
