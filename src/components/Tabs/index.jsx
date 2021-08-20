import { useState,useMemo } from "react";
import Navigation from '../Navigation';
import Tab from '../Tab';

const Tabs = (props) => {
  const [activeTabId, setActiveTab] = useState(props.tabs[0].id);

  const activeTab = useMemo(
    () => props.tabs.find((tab) => tab.id === activeTabId),
    [activeTabId, props.tabs]
  );

  return (
    <div className={`tabs`}>
      <Navigation
        tabs={props.tabs}
        onNavClick={setActiveTab}
        activeTabId={activeTabId}
      />
      <Tab tab={activeTab} />
    </div>
  );
};
export default Tabs;
