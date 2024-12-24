import { Button } from "@/components/ui/button";
import { CountContext } from "@/context/count-context";
import { useContext } from "react";

export default function BPage() {
  const { count } = useContext(CountContext);
  return <Button className=" w-full">{count === 10 ? 1 : 0}</Button>;
}
