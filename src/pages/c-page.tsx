import { Button } from "@/components/ui/button";

import { useCountStore } from "@/store/count";

export default function CPage() {
  const { count } = useCountStore();

  return <Button className=" w-full">{count === 10 ? 2 : 0}</Button>;
}
