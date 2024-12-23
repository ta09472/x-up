import { Button } from "@/components/ui/button";
import { CountContext } from "@/context/count-context";
import { useContext, useEffect } from "react";

export default function APage() {
  const { count, setCount } = useContext(CountContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 10) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
    console.log(count);

    return () => clearInterval(interval);
  }, []);

  return <Button className="w-20">{count}</Button>;
}
