import {Button} from "../Button/component";

export const Tabs = ({ tabs, onClick }) => {
  return (
    tabs.map((tabName, index) => {
      return (
        <Button key={index} title={tabName} onClick={() => onClick(index)} disabled={false} />
      );
    })
  );
}