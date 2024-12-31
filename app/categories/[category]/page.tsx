const CategoryPage = ({ params }: { params: { category: string } }) => {
  const category = params.category;

  const posts = [
    { id: 1, title: "The Role of Hydration in Your Mental and Physical Health", slug: "The-Role-of-Hydration-in-Your-Mental-and-Physical-Health", category: "Health" },
    { id: 2, title: "5 Simple Exercises to Boost Your Mental Health", slug: "5-Simple-Exercises-to-Boost-Your-Mental-Health", category: "Fitness" },
    { id: 3, title: "How to Create a Healthy Work-Life Balance", slug: "How-to-Create-a-Healthy-Work--Life-Balance", category: "Lifestyle" },
  ].filter((post) => post.category === category);

  if (!posts.length) {
    return <div>No posts found for this category!</div>;
  }

  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category} Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <a
              href={`/blogs/${post.slug}`}
              className="text-blue-500 hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
