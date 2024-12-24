import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/count";
import { useEffect, useRef } from "react";

export default function APage() {
  const { count, setCount } = useCountStore();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const countRef = useRef<number>(count);

  useEffect(() => {
    // count 변경 시 최신 값 업데이트
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    console.log("✅ Creating an interval");

    const id = setInterval(() => {
      if (buttonRef.current) {
        if (countRef.current === 10) {
          console.log("❌ Clearing an interval by condition");
          clearInterval(id);
        } else {
          console.log("⏰ Interval tick");
          buttonRef.current.click();
        }
      }
    }, 1000);

    return () => {
      console.log("❌ Clearing an interval by unmounted");
      clearInterval(id);
    };
  }, []);

  return (
    <Button
      size={"lg"}
      ref={buttonRef}
      onClick={() => setCount(count + 1)}
      className="min-w-20"
    >
      {count}
    </Button>
  );
}
