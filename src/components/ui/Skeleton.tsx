import { cn } from "@/utils/cn";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-white/10", className)} />;
}

export function SkeletonPage() {
  return (
    <div className="min-h-screen bg-[#0F0E0C] pt-28">
      <div className="container-lux grid gap-8 lg:grid-cols-[1fr_.8fr]">
        <div className="space-y-5">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-24 w-full max-w-3xl" />
          <Skeleton className="h-6 w-4/5" />
          <div className="flex gap-3">
            <Skeleton className="h-12 w-36" />
            <Skeleton className="h-12 w-44" />
          </div>
        </div>
        <Skeleton className="h-[520px] w-full rounded-lg" />
      </div>
    </div>
  );
}
