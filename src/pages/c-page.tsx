import { Button } from "@/components/ui/button";
import { CountContext } from "@/context/count-context";
import { useContext } from "react";

export default function CPage() {
  const { count } = useContext(CountContext);

  return <Button className=" w-full">{count === 10 ? 2 : 0}</Button>;
}
