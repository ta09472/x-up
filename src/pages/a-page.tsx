import { Button } from "@/components/ui/button";
import { CountContext } from "@/context/count-context";
import { useContext, useEffect } from "react";

export default function APage() {
  const { count, setCount } = useContext(CountContext);

  useEffect(() => {
    console.log("✅ Creating an interval");
    const id = setInterval(() => {
      console.log("⏰ Interval tick");
      setCount((prevCount) => {
        if (prevCount === 10) {
          console.log("❌ Clearing an interval by condition");
          clearInterval(id);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 1000);

    console.log(id);
    return () => {
      console.log("❌ Clearing an interval by unmounted");
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Button className="w-20">{count}</Button>;
}
