import "./App.css";

import Tabs from "./components/Tabs";

function App() {
  const tabs = [
    {
      id: 1,
      component: 'one',
      name: 'Test Exam One'
    },
    {
      id: 2,
      component: 'two',
      name: 'Test Exam Two'
    },
  ];
  return (
    <div className="container">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
