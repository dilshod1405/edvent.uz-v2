export default function SkeletonCard() {
  return (
    <div className="bg-gray-200 rounded-lg shadow-sm p-4 w-full max-w-xs mx-auto animate-pulse">
      <div className="mb-4 rounded-lg bg-gray-300 h-36" />
      <div className="h-6 bg-gray-300 rounded mb-2 w-3/4" />
      <div className="h-4 bg-gray-300 rounded mb-2 w-1/2" />
      <div className="h-6 bg-gray-300 rounded w-1/4" />
    </div>
  )
}
