'use client'

import { CourseService, CourseItem } from "@/data/services/course.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GRADIENTS = [
  "from-red-500 to-orange-400",
  "from-orange-500 to-yellow-400",
  "from-pink-500 to-rose-400",
  "from-purple-500 to-indigo-500",
  "from-teal-500 to-emerald-400",
  "from-blue-500 to-cyan-400",
];

const HSK_LEVELS = [1, 2, 3, 4, 5, 6];

const STATUS_BADGE: Record<string, string> = {
  published: "bg-green-100 text-green-700",
  draft: "bg-yellow-100 text-yellow-700",
  archived: "bg-gray-100 text-gray-500",
};

export function ChinesePage() {
  const router = useRouter();
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CourseService.getCoursesBySubjectCode('chinese')
      .then(res => setCourses(res?.data ?? res ?? []))
      .catch(() => setCourses([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen px-6 py-[80px] flex flex-col items-center bg-gray-50">

      <div className="w-full max-w-5xl">
        <button
          onClick={() => router.back()}
          className="text-gray-400 hover:text-gray-700 text-sm mb-8 flex items-center gap-1 transition-colors"
        >
          ← Back
        </button>
        <h1 className="text-4xl font-semibold text-gray-900 mb-2 tracking-tight">Tiếng Trung · HSK</h1>
        <p className="text-gray-500 text-base mb-6">Chọn cấp độ HSK để vào danh sách bài học.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {HSK_LEVELS.map((level, idx) => (
            <Link
              key={level}
              href={`/studies/chinese/hsk${level}`}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md active:scale-95 transition-all duration-150"
            >
              <div className={`bg-gradient-to-r ${GRADIENTS[idx % GRADIENTS.length]} h-16 flex items-center justify-center text-white text-2xl font-bold`}>
                HSK {level}
              </div>
              <div className="px-3 py-2 text-center text-sm text-gray-500">标准教程 {level}</div>
            </Link>
          ))}
        </div>


        <p className="text-gray-500 text-base mb-10">
          {loading ? 'Loading courses…' : `${courses.length} course${courses.length !== 1 ? 's' : ''} available — choose one to start learning`}
        </p>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm animate-pulse">
                <div className="h-24 bg-gray-100" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-100 rounded w-3/4" />
                  <div className="h-3 bg-gray-100 rounded w-full" />
                  <div className="h-3 bg-gray-100 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-20 text-gray-400">No courses found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course, idx) => (
              <button
                key={course.id}
                onClick={() => router.push(`/studies/chinese/${course.id}`)}
                className="text-left bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden active:scale-95 transition-all duration-150 flex flex-col shadow-sm hover:shadow-md"
              >
                {course.cover_image_url ? (
                  <img
                    src={course.cover_image_url}
                    alt={course.title}
                    className="h-24 w-full object-cover"
                  />
                ) : (
                  <div className={`bg-gradient-to-r ${GRADIENTS[idx % GRADIENTS.length]} h-24 flex items-center justify-center text-4xl`}>
                    🈶
                  </div>
                )}

                <div className="p-4 flex flex-col gap-2 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-gray-900 font-semibold text-base leading-snug">
                      {course.title}
                    </h2>
                    <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${STATUS_BADGE[course.status] ?? "bg-gray-100 text-gray-500"}`}>
                      {course.status}
                    </span>
                  </div>

                  {course.description && (
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {course.description}
                    </p>
                  )}

                  <div className="mt-auto pt-3 flex items-center justify-between text-gray-400 text-xs">
                    <span>{course.is_public ? 'Public' : 'Private'}</span>
                    <span>#{course.id}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
