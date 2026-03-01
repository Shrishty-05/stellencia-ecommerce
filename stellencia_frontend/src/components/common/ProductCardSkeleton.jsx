export default function ProductCardSkeleton() {
  return (
    <div className="border rounded-lg bg-white w-40 md:w-auto animate-pulse">
      <div className="w-full aspect-square bg-gray-200" />

      <div className="p-3 space-y-2">
        <div className="h-4 w-1/3 bg-gray-200 rounded" />
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-2/3 bg-gray-200 rounded" />
      </div>

      <div className="h-9 bg-gray-300" />
    </div>
  );
}
