import { Button } from "@/components/ui/button";
import { CountContext } from "@/context/count-context";
import { useContext } from "react";

export default function APage() {
  const { count, setCount } = useContext(CountContext);

  return (
    <Button onClick={() => setCount((prev) => prev + 1)} className="w-20">
      {count}
    </Button>
  );
}
