import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useSetFilter(filterParam, filterVariable) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  function handleSetFilter() {
    const params = new URLSearchParams(searchParams);
    params.set(filterParam, filterVariable);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return { handleSetFilter };
}
