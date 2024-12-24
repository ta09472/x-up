import { useNavigate } from "react-router";
import { Outlet } from "react-router";
import { Button } from "./ui/button";

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
  {
    label: "polygon",
    path: "polygon",
  },
];

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div className=" w-full h-svh flex flex-col ">
      <div className="h-14  border-b w-full sticky top-0 flex items-center  px-20 z-40 bg-white">
        {items.map(({ label, path }) => (
          <Button key={label} onClick={() => navigate(path)} variant="link">
            {label}
          </Button>
        ))}
      </div>

      <div className=" min-w-[40rem] flex flex-col h-full justify-center items-center mx-auto px-20 z-10">
        <Outlet />
      </div>
    </div>
  );
}
