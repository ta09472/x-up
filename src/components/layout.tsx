import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className=" w-full h-svh flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
}
