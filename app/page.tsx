"use client";
import Image from "next/image";
import React from "react";


const HomePage = () => {
  const posts = [
    {
      id: 1,
      title: "How to Manage Stress in Your Daily Life",
      slug: "How-to-manage-stress-in-your-daily-life",
      image: "/images/stress-management.jpg",
      description: "Discover practical ways to reduce stress and live a calmer, more balanced life."
    },
    {
      id: 2,
      title: "Top 10 Healthy Habits for a Better Life",
      slug: "Top-10-healthy-habits-for-a-better-life",
      image: "/images/healthy-eating.jpg",
      description: "Explore ten habits that can help you achieve a healthier and more fulfilling lifestyle."
    },
    {
      id: 3,
      title: "The Importance of Mental Health: Why You Should Care",
      slug: "The-Importance-of-Mental-Health-Why-You-Should-Care",
      image: "/images/mental-health.jpg",
      description: "Understand the significance of mental health and how it impacts your overall well-being."
    }
  ];

  const categories = [
    { name: "Health", slug: "Health" },
    { name: "Fitness", slug: "Fitness" },
    { name: "Lifestyle", slug: "Lifestyle" }
  ];

  return (
    
    <div>
      <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 sm:text-5xl mt-8">Welcome to Our Health Blog</h1>
        <p className="text-xl text-center mb-6 sm:text-xl">Welcome to our Health Blog, your trusted partner in achieving a happier, healthier lifestyle. From expert tips on fitness and nutrition to insights into mental well-being and self-care, we bring you the knowledge and inspiration you need to transform your life. Dive in, explore our articles, and let’s embark on this journey to wellness together!</p>
        <a
          href="/blogs"
          className="bg-black text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-900 transition"
        >
          Read Our Latest Blog
        </a>
      </section>

      <section id="latest-posts" className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={400}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <a href={`/blogs/${post.slug}`} className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white text-center">
  <h2 className="text-3xl font-bold mb-8">Explore by Category</h2>
  <div className="flex flex-wrap justify-center gap-12">
  {categories.map((category) => (
    <div key={category.slug} className="bg-gray-200 p-6 rounded-lg shadow-md w-60">
      <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
      <a href={`/categories/${category.slug}`} className="text-blue-500 hover:underline">
        Explore
      </a>
    </div>
  ))}
</div>

</section>

      <section className="py-16 bg-gray-50 mx-4 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-xl mb-6">
          We are passionate about health and wellness. Our goal is to provide valuable information and tips to help you lead a healthy and fulfilling life.
        </p>
        <a href="/About" className="bg-black text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-900 transition">
          Learn More About Us
        </a>
      </section>
      <section className="py-16 bg-white text-center">
  <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
  <p className="text-xl mb-6">Subscribe to our newsletter for the latest health tips.</p>
  <form className="max-w-lg mx-auto flex items-center">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full p-2 border border-gray-300 rounded-l-lg"
    />
    <button
      type="submit"
      className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-black-900 transition"
    >
      Subscribe
    </button>
  </form>
</section>

    </div>
  );
};

export default HomePage;
