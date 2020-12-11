import {NestedElements,Attributes, Style,JSExpression} from "./JSXElements"
import { StatefulExample } from "./StatefulComponent"
import { ClassComponent, FunctionalComponent } from "./StatelessComponent"


function App() {
  return (
    <div>
      <NestedElements/>
      <Attributes/> 
      <Style/>
      <JSExpression/>
      <FunctionalComponent/>
      <ClassComponent/>
      <StatefulExample/>

    </div>
  );
}

export default App;
