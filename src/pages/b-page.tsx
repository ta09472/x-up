import { Button } from "@/components/ui/button";

import { useCountStore } from "@/store/count";

export default function BPage() {
  const { count } = useCountStore();

  return <Button className=" w-full">{count === 10 ? 1 : 0}</Button>;
}
