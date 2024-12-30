import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    slug: "How-to-manage-stress-in-your-daily-life",
    title: "How to Manage Stress in Your Daily Life",
    excerpt: "Stress is an inevitable part of life, but it doesn't have to control you. you can effectively manage stress and cultivate a sense of calm and well-being.",
    image: "/images/stress-management.jpg"
  },
  {
    id: 2,
    slug: "Top-10-Healthy-Habits-for-a-Better-Life",
    title: "Top 10 Healthy Habits for a Better Life",
    excerpt: "Discover the secrets to a healthier lifestyle with our guide to the top 10 healthy habits. From mindful eating to staying active, these simple yet powerful changes can transform your life for the better!",
    image: "/images/healthy-eating.jpg"
  },
  {
    id: 3,
    slug: "The-Importance-of-Mental-Health-Why-You-Should-Care",
    title: "The Importance of Mental Health: Why You Should Care",
    excerpt: "Understanding mental health is crucial for overall well-being and happiness. Learn why prioritizing your mental health can improve your quality of life.",
    image: "/images/mental-health.jpg"
  },
  {
    id: 4,
    slug: "Nutrition-Myths-Debunking-Common-Misconceptions",
    title: "Nutrition Myths: Debunking Common Misconceptions",
    excerpt: "Uncover the truth behind popular nutrition myths that often mislead us. Learn the science-backed facts to make healthier, more informed choices for your diet and well-being!",
    image: "/images/nutrition.jpg"
  },
  {
    id: 5,
    slug: "How-to-Build-a-Positive-Mindset-for-Better-Health",
    title: "How to Build a Positive Mindset for Better Health",
    excerpt: "A positive mindset can transform your health and happiness. Discover simple strategies to cultivate optimism, overcome challenges, and lead a more fulfilling life!",
    image: "/images/positive-mindset.jpg"
  },
  {
    id: 6,
    slug: "5-Simple-Exercises-to-Boost-Your-Mental-Health",
    title: "5 Simple Exercises to Boost Your Mental Health",
    excerpt: "Improve your mental well-being with these five easy exercises. From mindful breathing to light physical activity, these practices can help you reduce stress and feel more balanced every day!",
    image: "/images/simple-exercise.jpg"
  }, 
  {
    id: 7,
    slug: "How-to-Overcome-Procrastination-and-Boost-Productivity",
    title: "How to Overcome Procrastination and Boost Productivity",
    excerpt: "Break free from procrastination and take charge of your time! Discover practical tips to build focus, overcome delays, and achieve your goals with greater efficiency.",
    image: "/images/boost-productivity.jpg"
  },
  {
    id: 8,
    slug: "The-Benefits-of-Meditation-for-Stress-Relief",
    title: "The Benefits of Meditation for Stress Relief",
    excerpt: "Experience the calming power of meditation for stress relief. Learn how this simple practice can help you relax, improve focus, and enhance your overall well-being.",
    image: "/images/meditation.jpeg"
  },
  {
    id: 9,
    slug: "How-to-Build-Resilience-in-Difficlt-Times",
    title: "How to Build Resilience in Difficult Times",
    excerpt: "Strengthen your ability to bounce back with resilience. Explore effective strategies to stay strong, adapt to challenges, and thrive even in the toughest of times.",
    image: "/images/dificult.jpeg"
  },
  {
    id: 10,
    slug: "10-Easy-and-Healthy-Breakfast-Ideas",
    title: "10 Easy and Healthy Breakfast Ideas",
    excerpt: "Start your day with energy and nutrition! Discover 10 simple and healthy breakfast ideas that are delicious, quick to make, and perfect for a busy lifestyle.",
    image: "/images/healthy-breakfast.jpeg"
  },
  {
    id: 11,
    slug: "The-Importance-of-Sleep-for-Mental-and-Physical-Health",
    title: "The Importance of Sleep for Mental and Physical Health",
    excerpt: "Quality sleep is the foundation of a healthy mind and body. Learn why good sleep is essential and how it boosts your mood, energy, and overall well-being.",
    image: "/images/imp-sleep.jpg"
  },
  {
    id: 12,
    slug: "How-to-Cope-with-Anxiety-Naturally",
    title: "How to Cope with Anxiety Naturally",
    excerpt: "Discover natural ways to manage anxiety and regain your calm. From mindfulness techniques to lifestyle changes, these simple practices can help reduce stress and promote emotional well-being.",
    image: "/images/how-to-cope.jpeg"
  },
  {
    id: 13,
    slug: "Mindful-Eating:-How-to-Build-a-Healthy-Relationship-with-Food",
    title: "Mindful Eating: How to Build a Healthy Relationship with Food",
    excerpt: "Mindful eating helps you develop a healthier relationship with food by focusing on the present moment and listening to your body’s hunger cues. Learn how this practice can improve digestion, reduce overeating, and enhance your overall well-being.",
    image: "/images/food-relation.jpg"
  },
  {
    id: 14,
    slug: "How-to-Prevent-Burnout-in-the-Workplace",
    title: "How to Prevent Burnout in the Workplace",
    excerpt: "Preventing burnout starts with recognizing the signs and prioritizing self-care. Learn practical strategies to manage stress, set boundaries, and maintain a healthy work-life balance for long-term well-being.",
    image: "/images/workplace.jpg"
  },
  {
    id: 15,
    slug: "The-Role-of-Hydration-in-Your-Mental-and-Physical-Health",
    title: "The Role of Hydration in Your Mental and Physical Health",
    excerpt: "Staying hydrated is key to maintaining both mental clarity and physical health. Discover how proper hydration can boost your energy, improve focus, and support overall well-being throughout the day.",
    image: "/images/role-of-hydration.jpeg"
  },
  {
    id: 16,
    slug: "How-to-Set-and-Achieve-Your-Health-Goals",
    title: "How to Set and Achieve Your Health Goals",
    excerpt: "Setting and achieving health goals requires planning, consistency, and determination. Learn how to create realistic goals, track your progress, and stay motivated to improve your overall health and well-being.",
    image: "/images/health-goals.jpeg"
  },
  {
    id: 17,
    slug: "Healthy-Snack-Ideas-to-Keep-You-Energized-Throughout-the-Day",
    title: "Healthy Snack Ideas to Keep You Energized Throughout the Day",
    excerpt: "Keep your energy up with these healthy snack ideas that are both nutritious and delicious. From protein-packed options to fiber-rich treats, these snacks will keep you fueled and satisfied all day long.",
    image: "/images/healthy-snack.jpeg"
  },
  {
    id: 18,
    slug: "How-to-Combat-Negative-Thinking-and-Boost-Your-Mood",
    title: "How to Combat Negative Thinking and Boost Your Mood",
    excerpt: "Overcome negative thinking by practicing self-awareness and replacing unhelpful thoughts with positive affirmations. Learn effective techniques to improve your mindset, boost your mood, and cultivate a more optimistic outlook on life.",
    image: "/images/think-positive.jpeg"
  },
  {
    id: 19,
    slug: "The-Benefits-of-Yoga-for-Mental-and-Physical-Health",
    title: "The Benefits of Yoga for Mental and Physical Health",
    excerpt: "Yoga offers a holistic approach to improving both mental and physical health. By combining mindful movement with deep breathing, it helps reduce stress, increase flexibility, and promote overall well-being.",
    image: "/images/yoga.jpg"
  },
  {
    id: 20,
    slug: "How-to-Manage-Your-Time-Effectively-for-Better-Well--being",
    title: "How to Manage Your Time Effectively for Better Well-being",
    excerpt: "Mastering time management is key to reducing stress and enhancing your well-being. Learn practical strategies to organize your day, prioritize tasks, and create a balanced routine that supports both productivity and relaxation.",
    image: "/images/time-manage.jpg"
  },
  {
    id: 21,
    slug: "How-to-Build-Emotional-Intelligence-for-a-Healthier-Life",
    title: "How to Build Emotional Intelligence for a Healthier Life",
    excerpt: "Building emotional intelligence helps you understand and manage your emotions, leading to better relationships and improved mental health. Learn strategies to enhance empathy, self-awareness, and emotional regulation for a more balanced and fulfilling life.",
    image: "/images/emotional.jpeg"
  },
  {
    id: 22,
    slug: "The-Impact-of-Social-Media-on-Mental-Health",
    title: "The Impact of Social Media on Mental Health",
    excerpt: "Social media can significantly influence mental health, both positively and negatively. Learn how to manage your social media use to avoid stress, anxiety, and comparison, while fostering meaningful connections and maintaining a healthy balance.",
    image: "/images/impact-of-socialmedia.jpg"
  },
  {
    id: 23,
    slug: "How-to-Stay-Motivated-While-Working-Towards-Your-Health-Goals",
    title: "How to Stay Motivated While Working Towards Your Health Goals",
    excerpt: "Staying motivated requires setting clear, achievable goals and tracking progress along the way. Discover tips to keep your energy high, overcome obstacles, and stay focused on your health journey, making each step a success.",
    image: "/images/work-goals.jpeg"
  },
  {
    id: 24,
    slug: "How-to-Create-a-Healthy-Work--Life-Balance",
    title: "How to Create a Healthy Work-Life Balance",
    excerpt: "Creating a healthy work-life balance is essential for reducing stress and improving overall well-being. Learn how to set boundaries, prioritize self-care, and manage your time effectively to enjoy both professional success and personal fulfillment.",
    image: "/images/work-life.jpeg"
  },
  {
    id: 25,
    slug: "The-Power-of-Journaling-for-Mental-Clarity-and-Emotional-Healing",
    title: "The Power of Journaling for Mental Clarity and Emotional Healing",
    excerpt: "Journaling is a powerful tool for clearing your mind and processing emotions. By writing regularly, you can gain mental clarity, reduce stress, and foster emotional healing, helping you better understand yourself and improve overall well-being.",
    image: "/images/journaling.jpeg"
  },
];

export default function BlogsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Blogs</h1>
      <p className='mb-6 text-center'>Your trusted destination for practical tips, expert insights, and inspiring stories to help you lead a healthier, happier life. Explore our carefully crafted blogs designed to empower you on your wellness journey!</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {blogPosts.map((post) => (
          <li key={post.id} className="border p-4 rounded-lg shadow-md w-full md:w-80">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-4 rounded" />
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link href={`/blogs/${post.slug}`} className="text-blue-600 hover:underline">
              Read More
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12 p-6 bg-gray-100 rounded-lg text-center">
        <p className="text-lg text-gray-800">
        This blog posts provides practical steps and tips to help improve your health and well-being. Please note that these tips are intended for general guidance and are not a substitute for professional medical advice. If you find that these issues are significantly affecting your health or well-being, we encourage you to seek personalized support and guidance from a qualified healthcare professional or therapist. Your health is very important, and seeking the right help is crucial for effectively manage health-related issues.
        </p>
      </div>
    </div>
  );
}