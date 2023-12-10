import { SidebarContent } from ".";
import DrawerActionButton from "../drawer/DrawerActionButton";
import DrawerContent from "../drawer/DrawerContent";

const Sidebar = () => {
  return (
    <>
      <DrawerActionButton />
      <SidebarContent />
      <DrawerContent />
    </>
  );
};

export default Sidebar;
