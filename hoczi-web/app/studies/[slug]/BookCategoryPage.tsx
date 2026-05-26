export function BookCategoryPage({slug}: {slug: string}) {
  return (
    <main className="min-h-screen flex flex-col px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Book Category: {slug}</h1>
      <p className="text-lg text-gray-600">This is the book category page.</p>
    </main>
  );
}