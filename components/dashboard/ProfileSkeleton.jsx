export default function ProfileSkeleton() {
  return (
    <div className="max-w-5xl mx-auto my-8 bg-white rounded-3xl shadow-lg overflow-hidden animate-pulse">
      {/* Header Skeleton */}
      <div className="relative bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-end sm:justify-start gap-6">
        {/* Skeleton Avatar */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gray-300 border-4 border-white shadow-lg" />

        {/* Skeleton Texts */}
        <div className="text-white text-center sm:text-left space-y-3 w-full max-w-sm">
          <div className="h-6 bg-white/40 rounded w-3/4 mx-auto sm:mx-0" />
          <div className="h-4 bg-white/30 rounded w-1/2 mx-auto sm:mx-0" />
        </div>
      </div>

      {/* Info Grid Skeleton */}
      <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-white rounded-xl shadow p-5"
          >
            <div className="w-10 h-10 bg-indigo-100 rounded-lg" />
            <div className="flex-1 space-y-2">
              <div className="w-1/3 h-4 bg-gray-200 rounded" />
              <div className="w-2/3 h-5 bg-gray-300 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
