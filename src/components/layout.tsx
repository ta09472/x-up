import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { useNavigate } from "react-router";
import { Outlet } from "react-router";
import { Button } from "./ui/button";

export default function Layout() {
  const items = [
    {
      label: "a",
      path: "/",
    },
    {
      label: "b",
      path: "b",
    },
    {
      label: "c",
      path: "c",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className=" w-full h-svh flex flex-col items-center justify-center">
      <div className=" border rounded-lg border-neutral-300 p-40">
        <NavigationMenu>
          <NavigationMenuList>
            {items.map(({ label, path }) => (
              <NavigationMenuItem key={label}>
                <Button onClick={() => navigate(path)} variant="link">
                  {label}
                </Button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Outlet />
      </div>
    </div>
  );
}
