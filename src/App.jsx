import RcName from "./RcName";
import RcImg from "./RcImg";
import Ingredients from "./Ingredients";
import Preparation from "./Preparation";
import "./App.css";

function App() {
    return (
        <div className="container">
            Grandma's recipes
            <RcName/>
            <RcImg/>
            <Ingredients/>
            <Preparation/>
        </div>
    );
}
export default App;

