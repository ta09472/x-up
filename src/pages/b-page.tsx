import { Button } from "@/components/ui/button";

import { useCountStore } from "@/store/count";

export default function BPage() {
  const { count } = useCountStore();

  return (
    <Button className="min-w-20" size={"lg"}>
      {count === 10 ? 1 : 0}
    </Button>
  );
}
