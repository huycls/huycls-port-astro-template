import Dock from "@/components/organisms/Dock";
import { getDockItems } from "./DockItems";

export default function DockWithItems() {
  const items = getDockItems();
  
  return (
    <Dock 
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  );
}

