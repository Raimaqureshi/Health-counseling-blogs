import { notFound } from "next/navigation";

type ContentSection =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string }
  | {
      type: "list";
      items: {
        heading: string;
        content: string;
        points?: string[];
      }[];
    }
    | { type: "hr" };

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: ContentSection[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "How-to-manage-stress-in-your-daily-life",
    title: "How to Manage Stress in Your Daily Life",
    content: [
      {
        type: "paragraph",
        text: "Stress is a natural part of life, but when it becomes overwhelming, it can negatively affect our mental and physical health. Whether it's work, personal relationships, or other life pressures, learning how to manage stress is crucial for maintaining overall well-being. In this blog post, we’ll explore practical ways to manage stress in your daily life and achieve a more balanced and peaceful existence.",
      },
      {
        type: "image",
        src: "/images/stress-management.jpg",
        alt: "Stress Management",
      },
      {
        type: "list",
        items: [
          {
            heading: "Identify the Source of Your Stress",
            content:
              "The first step in managing stress is understanding where it's coming from. Is it work-related pressure? Personal conflicts? Financial worries? Once you identify the source, it becomes easier to address the problem directly. Take some time each day to reflect on what’s causing you stress and write it down. By pinpointing the root causes, you can begin to strategize solutions.",
          },
          {
            heading: "Practice Deep Breathing and Mindfulness",
            content:
              "Breathing exercises are one of the quickest and most effective ways to reduce stress in the moment. Practicing deep breathing helps calm the nervous system and can immediately lower your heart rate and blood pressure. Try the following techniques:",
            points: [
              "Breathe in for 4 counts, hold for 4 counts, and exhale for 4 counts.",
              "Repeat this for a few minutes, and you’ll start to feel a sense of calm. In addition to deep breathing, mindfulness practices, such as meditation, help you stay present and reduce anxious thoughts. These simple techniques can be incorporated into your daily routine, whether during a stressful workday or at home.",
            ],
          },
        {
heading: "Exercise Regularly",
content: "Physical activity is a powerful stress reliever. Exercise releases endorphins, which are natural mood boosters. Whether it’s going for a walk, practicing yoga, or hitting the gym, regular exercise helps reduce the body's stress hormones and improves overall mood. Aim for at least 30 minutes of moderate exercise each day, and notice how it helps you feel more relaxed and energized."
        },
        {
          heading: "Prioritize Sleep and Rest",
          content: "Lack of sleep can significantly contribute to stress, making it harder to handle daily challenges. When you’re sleep-deprived, you’re more likely to feel irritable and overwhelmed. Aim for 7-9 hours of quality sleep each night. Create a calming bedtime routine that helps you unwind, such as reading a book, taking a warm bath, or practicing relaxation techniques. Good sleep hygiene plays a vital role in managing stress and improving your mood."
        },
        {
          heading: "Set Boundaries and Learn to Say No",
          content: "Many people experience stress because they take on too much. It’s essential to set healthy boundaries in both your personal and professional life. Learn to say no when you’re overwhelmed, and prioritize your well-being. Saying yes to everything can lead to burnout, so focus on what truly matters and be selective about the commitments you make."
        },
        {
          heading: "Stay Organized and Manage Your Time",
          content: "Poor time management is a common cause of stress. When you’re disorganized or overloaded with tasks, it’s easy to feel anxious and overwhelmed. To reduce stress, develop a routine or use tools like planners, calendars, and to-do lists. Break down large tasks into smaller, manageable steps, and prioritize the most important tasks. Setting clear goals and timelines will help you stay on track and feel more in control."
        },
        {
          heading: " Nurture Your Relationships",
          content: "Social support plays a significant role in stress management. Spending time with loved ones, friends, or coworkers who are supportive can help reduce stress and provide emotional relief. When you're feeling stressed, talk to someone you trust, or take time to engage in activities with others that make you feel good, like having a meal together or going for a walk."
        },
        {
          heading: "Engage in Relaxing Hobbies",
          content: "Taking time out for hobbies and activities that you enjoy can provide an important break from stress. Whether it’s painting, gardening, reading, or cooking, engaging in creative or relaxing activities helps distract the mind and reduces stress. Schedule time for these activities regularly to give yourself a mental break from daily pressures."
        },
        {
          heading: "Seek Professional Help if Needed",
          content: "If you find that stress is overwhelming and difficult to manage on your own, it may be helpful to talk to a professional. A counselor or therapist can help you identify the underlying causes of stress and provide strategies for coping. Don’t hesitate to reach out for help if stress is interfering with your daily life."
        },
        {
          heading: "Adopt a Positive Mindset",
          content: "A positive mindset can help you manage stress more effectively. Practice gratitude by writing down three things you’re thankful for each day. This simple habit can shift your focus from stressors to positive aspects of your life. Also, reframe negative thoughts by focusing on solutions rather than problems. When you face challenges, try to see them as opportunities for growth."
        }
        ],
      },
      {
        type: "hr", 
      },
      {
        type: "paragraph",
        text: "Conclusion: Stress is a part of life, but it doesn’t have to control you. By identifying the causes of your stress and incorporating healthy coping strategies, you can regain control over your mental and physical well-being. Remember, managing stress is an ongoing process, so be patient with yourself as you find what works best for you. Incorporate small changes into your daily routine, and with time, you’ll feel more relaxed, balanced, and in control of your life."
      },
    ],
  },
  {
    id: 2,
    slug: "Top-10-Healthy-Habits-for-a-Better-Life",
    title: "Top 10 Healthy Habits for a Better Life",
    content: [
      {
        type: "paragraph",
        text: "Living a healthy life is about making smart choices and incorporating habits that promote both physical and mental well-being. While it can be difficult to change old habits, adopting even a few positive ones can make a significant impact on your overall health. Here are the top 10 healthy habits you can incorporate into your life to achieve a better and more balanced lifestyle.",
      },
      {
        type: "image",
        src: "/images/healthy-eating.jpg",
        alt: "Healthy Eating",
      },
      {
        type: "list",
        items: [
          {
            heading: "Stay Hydrated",
            content: "Water is essential for our body’s optimal function. Staying hydrated helps maintain energy levels, improves digestion, and supports healthy skin. Aim to drink at least 8 glasses of water a day, and even more if you're active or live in a hot climate. You can also include herbal teas or fruits with high water content to boost your hydration.",
          },
          {
            heading: "Eat a Balanced Diet",
            content: "A well-rounded diet that includes a variety of fruits, vegetables, whole grains, and lean proteins is key to maintaining good health. Try to incorporate a rainbow of colors on your plate, as each color represents different nutrients that are beneficial for your body. Avoid processed foods, excessive sugar, and unhealthy fats.",
          },
          {
            heading: "Exercise Regularly",
            content: "Physical activity is crucial for both physical and mental health. It improves heart health, builds muscle strength, enhances flexibility, and can even improve your mood. You don’t have to engage in intense workouts – even daily activities like walking, swimming, or yoga can be very effective. Aim for at least 30 minutes of moderate exercise most days of the week.",
          },
          {
            heading: " Get Enough Sleep",
            content: "Sleep is when your body restores itself. Lack of sleep can lead to various health problems, including a weakened immune system, poor memory, and increased stress. Aim for 7-9 hours of quality sleep each night. Create a relaxing bedtime routine, and avoid screens and caffeine close to bedtime for better sleep quality.",
          },
          {
            heading: "Practice Mindfulness and Meditation",
            content: "In today’s fast-paced world, stress can take a toll on our mental and emotional health. Practicing mindfulness and meditation can help reduce stress, improve focus, and enhance overall mental well-being. Even just a few minutes a day of mindful breathing or meditation can make a big difference.",
          },
          {
            heading: "Prioritize Mental Health",
            content: "Mental health is just as important as physical health. Taking time to relax, talk to someone you trust, or pursue activities that make you happy can reduce anxiety and stress. Be kind to yourself and recognize when you need to take a break. If necessary, don’t hesitate to seek help from a therapist or counselor.",
          },
          {
            heading: "Maintain Strong Relationships",
            content: "Spending time with friends and family strengthens emotional well-being. Healthy relationships provide support, love, and comfort, helping you feel grounded and connected. Whether through regular calls, outings, or simple check-ins, investing time in relationships can improve both your happiness and your mental health.",
          },
          {
            heading: "Avoid Smoking and Limit Alcohol Consumption",
            content: "Smoking and excessive alcohol intake are linked to various health risks, including heart disease, cancer, and liver damage. If you're a smoker, seek resources to help quit. Similarly, try to limit alcohol consumption to moderate levels, as excessive drinking can negatively affect your liver, heart, and overall health.",
          },
          {
            heading: "Practice Gratitude",
            content: "Gratitude has been linked to better mental health, lower stress levels, and higher happiness. Take time each day to reflect on what you’re thankful for – whether it’s your health, family, or simple joys in life. Writing down three things you’re grateful for each day can help shift your mindset to focus on the positive aspects of life.",
          },
          {
            heading: "Stay Organized and Manage Your Time Well",
            content: "Living in a cluttered or disorganized environment can lead to increased stress and feelings of being overwhelmed. Organizing your home, workplace, and daily schedule can give you a sense of control and clarity. Set realistic goals, create daily to-do lists, and prioritize your tasks to ensure you’re staying productive without feeling rushed.",
          },
        ],
      },
      {
        type: "hr"
      },
      {
        type: "paragraph",
        text: "Conclusion: Incorporating healthy habits into your routine doesn’t have to be overwhelming. Start small, focus on consistency, and celebrate your progress. Each positive change you make brings you one step closer to a healthier and more fulfilling life. Remember, living a healthy life is a journey, not a destination."
      }
    ],
  },
  {
    id: 3,
    slug: "The-Importance-of-Mental-Health-Why-You-Should-Care",
    title: "The Importance of Mental Health: Why You Should Care",
    content: [
      {
        type: "paragraph",
        text: " Mental health is a crucial aspect of overall well-being that often gets overlooked. While we regularly focus on physical health, mental health can sometimes take a backseat. However, mental health influences every aspect of our lives—our emotions, thoughts, relationships, and even our physical health. Understanding its importance and how to care for it is essential for living a balanced and fulfilling life. In this blog post, we’ll explore why mental health matters and how you can prioritize it for a better quality of life.",
      },
      {
        type: "image",
        src: "/images/mental-health.jpg",
        alt: "mental-health",
      },
      {
        type: "list",
        items: [
          {
            heading: " Mental Health Impacts Your Physical Health",
            content:
              "There’s a strong connection between mental and physical health. Poor mental health can lead to physical symptoms such as headaches, fatigue, and digestive issues. Chronic stress, anxiety, or depression can weaken the immune system, making you more susceptible to illnesses. By prioritizing mental health, you improve your physical well-being too.",
          },
        {
heading: "Mental Health Affects Your Relationships",
content: "Our mental health directly influences how we interact with others. When we’re struggling with mental health issues like stress, anxiety, or depression, it can affect our mood, communication, and overall behavior. It becomes harder to build and maintain healthy relationships with loved ones, friends, and colleagues. Taking care of your mental health enables you to form deeper connections and have more positive interactions with others."
        },
        {
          heading: "Mental Health is Essential for Productivity",
          content: "Your mental state greatly affects how well you perform at work, school, or in personal projects. When you’re mentally healthy, you’re more focused, creative, and motivated to achieve your goals. However, mental health struggles such as burnout, anxiety, or depression can lead to reduced productivity, lack of motivation, and an inability to complete tasks efficiently. Managing your mental health helps you stay productive and achieve your full potential."
        },
        {
          heading: " Mental Health Affects Your Self-Esteem",
          content: "Mental health plays a significant role in how we view ourselves. Struggles with mental health can lead to negative self-talk, low self-esteem, and feelings of worthlessness. On the other hand, maintaining good mental health can foster a positive self-image, confidence, and self-compassion. Taking care of your mental health allows you to feel better about yourself and approach life with a healthier mindset."
        },
        {
          heading: "Mental Health Affects Your Emotional Resilience",
          content: "Life is full of challenges, and how we respond to these challenges often depends on our mental health. People with good mental health are better equipped to handle stress, setbacks, and difficult emotions. Mental health struggles, however, can make it harder to cope with life’s ups and downs. By focusing on mental well-being, you can build emotional resilience, making it easier to bounce back from adversity."
        },
        {
          heading: "Stigma Around Mental Health Needs to End",
          content: "Unfortunately, there is still a stigma surrounding mental health issues. Many people avoid seeking help because they fear judgment or don't know where to turn for support. It’s essential to break down these barriers and create an environment where people feel comfortable discussing their mental health and seeking help when needed. Remember, just like physical health, mental health deserves attention and care."
        },
        {
          heading: "How to Prioritize Your Mental Health",
          content: "Prioritizing mental health is not just about treating mental illness, but also about maintaining a healthy mental state. Here are a few ways you can take care of your mental well-being:",
          points: [
            "Practice mindfulness through activities like meditation, yoga, or deep breathing exercises.",
            "Exercise regularly to release endorphins and improve mood.",
            "Connect with others by spending time with family and friends, or seeking therapy when needed.",
            "Get adequate sleep to rejuvenate both mind and body.",
            "Set realistic goals and practice self-compassion in the face of setbacks.",
            "Limit stress by managing your time effectively and taking breaks when necessary.",
          ],
        },       
        ],
      },
      {
        type: "hr", 
      },
      {
        type: "paragraph",
        text: "Conclusion: Mental health is just as important as physical health, and it deserves the same level of attention and care. By understanding its importance and implementing practices to support it, you can improve your quality of life, your relationships, and your ability to handle life’s challenges. Don’t wait until you’re struggling—prioritize your mental health today for a better tomorrow."
      },
    ],
  },
  {
    id: 4,
    slug: "Nutrition-Myths-Debunking-Common-Misconceptions",
    title: "Nutrition Myths: Debunking Common Misconceptions",
    content: [
      {
        type: "paragraph",
        text: "In the world of health and wellness, nutrition is one of the most discussed topics, yet also one of the most misunderstood. There is a lot of misinformation that can confuse people, leading them to make poor dietary choices. From fad diets to misleading advertisements, it’s easy to get caught up in myths about food. In this blog post, we’ll debunk some of the most common nutrition myths to help you make informed decisions about your diet and overall health.",
      },
      {
        type: "image",
        src: "/images/nutrition.jpg",
        alt: "nutritionals",
      },
      {
        type: "list",
        items: [
          {
            heading: "Myth: Carbs Are Bad for You",
            content:
              "Carbohydrates have been demonized for years, with many believing that they are the main cause of weight gain. The truth is, carbs are an essential nutrient that provides your body with energy. The problem lies in choosing the wrong kinds of carbs. Processed and refined carbohydrates, like white bread and sugary snacks, can lead to weight gain and other health issues. However, complex carbohydrates found in whole grains, fruits, and vegetables are nutrient-dense and an important part of a balanced diet.",
          },
        {
         heading: "Myth: Eating Fat Makes You Fat",
         content: "For years, people have been led to believe that consuming fat leads directly to weight gain. While it’s true that fat is calorie-dense, not all fats are bad. Healthy fats, such as those found in avocados, nuts, seeds, and fatty fish, are crucial for your body’s overall function. They support brain health, reduce inflammation, and help absorb essential vitamins. The key is moderation—eating the right types of fats in appropriate amounts."
        },
        {
          heading: "Myth: Skipping Meals Helps You Lose Weight",
          content: "Many believe that skipping meals, particularly breakfast, is an effective way to cut calories and lose weight. However, skipping meals can actually slow down your metabolism and lead to overeating later in the day. Regular, balanced meals help maintain steady blood sugar levels, control hunger, and provide sustained energy throughout the day. Instead of skipping meals, focus on eating nutrient-rich foods at regular intervals."
        },
        {
          heading: "Myth: All Calories Are Created Equal",
          content: "While it’s true that weight loss is largely influenced by the number of calories consumed versus burned, not all calories are created equal in terms of nutrition. For example, 100 calories from a sugary snack will have a vastly different impact on your body compared to 100 calories from a piece of fruit or a serving of lean protein. Nutrient-dense foods provide essential vitamins, minerals, and fiber, which contribute to overall health, while empty calories from processed foods can lead to nutrient deficiencies and weight gain."
        },
        {
          heading: "myth: Detox Diets Are Effective for Cleansing the Body",
          content: "Detox diets and cleanses often claim to help the body flush out toxins and promote weight loss. However, the human body is equipped with its own detoxification system, primarily the liver and kidneys, which work tirelessly to eliminate toxins. There is no scientific evidence that detox diets provide any additional benefit beyond what your body already does naturally. Instead of falling for quick fixes, focus on eating a balanced diet and drinking plenty of water to support your body’s natural detox processes."
        },
        {
          heading: "myth: You Should Avoid All Sugars",
          content: "Not all sugars are bad. Naturally occurring sugars, such as those found in fruits, vegetables, and dairy, come with important nutrients like fiber, vitamins, and minerals. The real issue arises from added sugars, which are often found in processed foods and sugary drinks. Excessive intake of added sugars can contribute to obesity, diabetes, and heart disease. It’s important to limit added sugars and focus on whole foods to get your sweet fix."
        },
        {
          heading: "myth: Gluten-Free Diets Are Healthier",
          content: "Gluten-free diets have gained popularity in recent years, but they aren’t automatically healthier for everyone. Gluten is a protein found in wheat, barley, and rye, and while it can be problematic for individuals with celiac disease or gluten sensitivity, there is no need for the general population to avoid it. Many gluten-free products are highly processed and lack essential nutrients like fiber and vitamins. If you don't have a gluten sensitivity or allergy, there’s no need to eliminate gluten from your diet.",
        }, 
        {
          heading: "myth: Eating Late at Night Leads to Weight Gain",
          content: "Another common misconception is that eating late at night will lead to weight gain. The truth is that it’s not when you eat, but what and how much you eat that matters most. Eating large, calorie-dense meals late at night can cause discomfort and disrupt sleep, but a small, balanced snack before bed isn’t harmful. Just be mindful of portion sizes and choose nutrient-dense options like a handful of nuts or a small bowl of Greek yogurt.",
        }, 
        {
          heading: "Vegetarian or Vegan Diets Are Always Healthier",
          content: "While plant-based diets can be very healthy, they are not automatically superior to other diets. A vegetarian or vegan diet can still be unhealthy if it consists mainly of processed foods, refined carbs, and sugary snacks. The key to a healthy diet, whether you’re vegetarian, vegan, or omnivorous, is balance and nutrient density. Focus on whole foods like fruits, vegetables, whole grains, legumes, and lean proteins, and ensure you’re meeting all your nutritional needs.",
        }, 
        {
          heading: "myth: Supplements Can Replace a Healthy Diet",
          content: "While supplements can help fill nutritional gaps, they should never be used as a substitute for a healthy, balanced diet. Whole foods provide not only vitamins and minerals but also essential fiber, antioxidants, and other compounds that supplements can’t replicate. Aim to get the majority of your nutrients from whole foods, and use supplements only when necessary, under the guidance of a healthcare provider.",
        },       
        ],
      },
      {
        type: "hr", 
      },
      {
        type: "paragraph",
        text: "conclusion: Nutrition is an ever-evolving field, and it's important to stay informed about the facts, not the myths. By debunking these common misconceptions, you can make more informed choices that support your overall health and well-being. Remember, a balanced, nutrient-rich diet is the foundation of a healthy lifestyle. If you're ever in doubt about your nutrition, consult with a healthcare provider or a registered dietitian to receive personalized advice."
      },
    ],
  },
  {
    id: 5,
    slug: "How-to-Build-a-Positive-Mindset-for-Better-Health",
    title: "How to Build a Positive Mindset for Better Health",
    content: [
      {
        type: "paragraph",
        text: "Your mindset plays a significant role in your physical and mental well-being. Having a positive mindset doesn’t just mean thinking happy thoughts—it involves changing the way you approach challenges, deal with setbacks, and take care of your body and mind. Research has shown that cultivating a positive outlook can improve your immune system, reduce stress, and increase your chances of living a longer, healthier life. In this blog post, we’ll explore practical steps to build a positive mindset that can help you lead a healthier, more fulfilling life.",
      },
      {
        type: "image",
        src: "/images/positive-mindset.jpg",
        alt: "positive mindset image",
      },
      {
        type: "list",
        items: [
          {
            heading: "Practice Gratitude Daily",
            content:
              "One of the most powerful ways to shift your mindset is by practicing gratitude. Gratitude helps you focus on what’s going well in your life rather than what’s going wrong. Taking a few minutes each day to reflect on what you’re thankful for can improve your mood and create a positive outlook. Whether it’s a quiet moment of reflection in the morning or writing in a gratitude journal, making gratitude a daily habit will help you focus on the positive aspects of your life, boosting your overall well-being.",
          },
        {
         heading: "Reframe Negative Thoughts",
         content: "Negative thinking can significantly impact your mental and physical health. When negative thoughts arise, practice reframing them. For example, instead of thinking “I’ll never get better at this,” try shifting your perspective to “I’m improving with each step.” Reframing negative thoughts encourages a growth mindset, where challenges are viewed as opportunities to learn and grow, rather than as insurmountable obstacles. This shift in thinking can improve resilience and contribute to better mental health."
        },
        {
          heading: " Surround Yourself with Positive Influences",
          content: "Your environment plays a crucial role in shaping your mindset. Surround yourself with people who uplift, motivate, and encourage you to be your best self. Positive social connections can provide emotional support, boost your mood, and help you stay motivated on your journey toward better health. Whether it's friends, family, or mentors, having a strong support system is key to maintaining a positive mindset."
        },
        {
          heading: "Set Realistic and Achievable Goals",
          content: "Having clear, realistic goals can help you stay focused and motivated. Break down larger goals into smaller, manageable steps to make progress more achievable. Each small success will build your confidence and reinforce a positive mindset. When you achieve a goal, no matter how small, celebrate your success—it’s a reminder of your capability and progress."
        },
        {
          heading: "Take Care of Your Body",
          content: "Physical health and mental health are closely linked. Regular exercise, proper nutrition, and sufficient sleep are essential components of a healthy body and mind. When you take care of your body, you feel more energized, focused, and confident. Incorporating regular physical activity into your routine—whether it’s yoga, walking, or strength training—can boost your mood by releasing endorphins, the body’s natural “feel-good” chemicals."
        },
        {
          heading: "Practice Mindfulness and Meditation",
          content: "Mindfulness and meditation are proven techniques for reducing stress and improving mental clarity. Practicing mindfulness helps you stay present, focus on the moment, and reduce overthinking. Meditation can help calm your mind, relieve anxiety, and cultivate inner peace. By regularly practicing mindfulness and meditation, you can train your mind to stay positive and calm in the face of challenges."
        },
        {
          heading: "Focus on Solutions, Not Problems",
          content: "A positive mindset involves shifting your focus from problems to solutions. Instead of dwelling on what’s not going right, look for ways to improve the situation. Ask yourself, “What can I do to move forward?” This approach fosters a proactive attitude and encourages you to take control of your circumstances, rather than feeling helpless. By focusing on solutions, you’ll feel more empowered and confident in your ability to handle challenges.",
        },
        {
          heading: "Practice Self-Compassion",
          content: "Building a positive mindset involves being kind and understanding with yourself, especially during difficult times. Self-compassion means treating yourself with the same love, patience, and understanding that you would offer to a friend. It’s important to recognize that setbacks are a natural part of life and don’t define your worth. Instead of being overly critical of yourself, practice self-compassion by acknowledging your efforts and being forgiving of your mistakes.",
        },
        {
          heading: "Visualize Success",
          content: "Visualization is a powerful technique that can help you achieve your health goals. By vividly imagining yourself succeeding and living a healthier life, you send positive signals to your brain and reinforce the belief that it’s possible. Take a few minutes each day to close your eyes and visualize yourself achieving your goals—whether it’s eating healthy, exercising, or living stress-free. Visualization can improve motivation, build confidence, and increase your chances of success.",
        },
        {
          heading: "Embrace Positivity in Every Situation",
          content: "A positive mindset doesn’t mean ignoring challenges or pretending everything is perfect. It’s about finding the silver lining in every situation. When faced with difficulties, try to focus on what you can learn from them or how they can help you grow. Embracing positivity in the face of adversity can reduce stress and increase resilience, ultimately benefiting both your mental and physical health.",
        },       
        ],
      },
      {
        type: "hr", 
      },
      {
        type: "paragraph",
        text: "conclusion: Building a positive mindset takes time and consistent effort, but the benefits are well worth it. A positive outlook not only improves your mental health but also enhances your physical health and quality of life. By practicing gratitude, reframing negative thoughts, setting achievable goals, and taking care of your body, you can cultivate a mindset that empowers you to live a healthier, happier life. Remember, a positive mindset is a powerful tool for achieving better health and well-being."
      },
    ],
  },
  {
    id: 6,
    slug: "5-Simple-Exercises-to-Boost-Your-Mental-Health",
    title: "5 Simple Exercises to Boost Your Mental Health",
    content: [
      {
        type: "paragraph",
        text: "Mental health is just as important as physical health, yet it’s often overlooked in our busy lives. Incorporating simple exercises into your daily routine can make a significant difference in reducing stress, improving focus, and enhancing overall well-being. These exercises don’t require much time or special equipment, making them easy to adopt no matter your schedule. Let’s explore five simple exercises that can help boost your mental health.",
      },
      {
        type: "image",
        src: "/images/simple-exercise.jpg",
        alt: "exercise",
      },
      {
        type: "list",
        items: [
          {
            heading: "Mindful Breathing",
            content:
              "What It Is: Mindful breathing involves focusing your attention on your breath, helping to calm your mind and reduce stress.",
              points: [
                "Sit or lie down in a comfortable position.",
                "Close your eyes and take a deep breath in through your nose, counting to four.",
                "Hold your breath for a count of four, then exhale slowly through your mouth for another count of four.",
                "Repeat this process for 5–10 minutes."
              ],
          },
        {
         heading: "Walking in Nature",
         content: "What It Is: Walking outdoors, especially in green spaces, is a simple yet effective way to boost your mental health.",
         points: [
          "Find a park, trail, or any outdoor space with greenery.",
          "Walk at a comfortable pace for 20–30 minutes, focusing on the sights, sounds, and smells around you.",
          "Leave your phone behind or put it on silent to avoid distractions."
         ]
        },
        {
          heading: "Progressive Muscle Relaxation (PMR)",
          content: "What It Is: Progressive muscle relaxation involves tensing and then relaxing each muscle group in your body to release tension and stress.",
          points: [
            "Sit or lie down in a quiet space.",
            "Start with your toes, tensing the muscles for 5 seconds, then relaxing them.",
            "Gradually move up your body—feet, legs, abdomen, arms, and neck—tensing and relaxing each muscle group.",
            "Breathe deeply as you go through each step."
          ]
        },
        {
          heading: "Yoga for Mental Clarity",
          content: "What It Is: Yoga combines physical movement with mindfulness and controlled breathing, making it a holistic exercise for mental and physical well-being.",
          points: [
            "Choose a beginner-friendly yoga routine, such as sun salutations or a few basic poses like child’s pose, downward dog, and cat-cow.",
            "Spend 10–15 minutes practicing in a quiet, comfortable space.",
            "Focus on your breathing and the sensations in your body as you move."
          ]
        },
        {
          heading: "Journaling for Emotional Release",
          content: "What It Is: Journaling is a mental exercise that helps you process thoughts, emotions, and experiences by writing them down.",
          points: [
            "Set aside 10 minutes each day to write in a notebook or journal.",
            "Start with prompts like “What made me happy today?” or “What’s currently on my mind?",
            "Write freely without worrying about grammar or structure."
          ]
        },       
        ],
      },
      {
        type: "hr", 
      },
      {
        type: "paragraph",
        text: "Benefits of These Exercises: Engaging in these simple exercises offers a range of benefits for your mental health. They can help reduce stress, improve mood, enhance focus, and boost overall emotional well-being. Regular practice fosters a sense of calm, increases self-awareness, and strengthens your resilience against life's challenges, empowering you to maintain a balanced and positive mindset."
      },
      {
        type: "hr", 
      },
      {
        type: "paragraph",
        text: "Conclusion: Taking care of your mental health doesn’t have to be complicated or time-consuming. These five simple exercises—mindful breathing, walking in nature, progressive muscle relaxation, yoga, and journaling—are easy to incorporate into your daily life and can have profound benefits for your mental well-being. Start small, choose one exercise to try today, and experience the positive impact it can have on your mind and body."
      },
    ],
  },
  {
    id: 7,
    slug: "How-to-Overcome-Procrastination-and-Boost-Productivity",
    title: "How to Overcome Procrastination and Boost Productivity",
    content: [
      {
        type: "paragraph",
        text: "Procrastination is a common challenge that affects many people. While it might provide temporary relief, delaying tasks often leads to stress, missed opportunities, and decreased productivity. Fortunately, with the right strategies, you can overcome procrastination and unlock your potential for greater efficiency and achievement.",
      },
      {
        type: "image",
        src: "/images/boost-productivity.jpg",
        alt: "boosty",
      },
      {
        type: "list",
        items: [
          {
            heading: "Understand the Root Causes",
            content:
              "Procrastination often stems from fear of failure, perfectionism, or feeling overwhelmed by a task. Identifying what’s holding you back is the first step to overcoming it. Solution: Break the task into smaller, manageable steps, and focus on progress rather than perfection.",
          },
        {
         heading: "Set Clear Goals",
         content: "Unclear or vague goals can lead to indecision and delays. Setting specific, measurable, and time-bound objectives gives you direction and purpose. Solution: Use tools like to-do lists or productivity apps to define and prioritize your tasks."
        },
        {
          heading: "Practice Time Management",
          content: "Poor time management contributes to procrastination. Without a schedule, it’s easy to lose track of priorities.  Solution: Use techniques like the Pomodoro Technique (working in focused 25-minute intervals with short breaks) to stay on track."
        },
        {
          heading: " Eliminate Distractions",
          content: "Social media, notifications, and a cluttered workspace can derail your focus and lead to procrastination. Solution: Create a dedicated, distraction-free workspace, and use apps to block distracting websites during work hours."
        },
        {
          heading: "Reward Yourself",
          content: "Incentives can motivate you to complete tasks and make work more enjoyable. Solution: Reward yourself with something you enjoy after completing a task, such as a short walk, a favorite snack, or leisure time."
        },
        {
          heading: "Develop a Positive Mindset",
          content: "Self-doubt and negative thinking can hinder your progress. Cultivating a positive mindset helps you stay motivated and resilient. Solution: Practice self-affirmation and focus on your strengths. Celebrate small achievements to build confidence."
        },
        {
          heading: " Hold Yourself Accountable",
          content: `Without accountability, it’s easy to postpone tasks indefinitely.
Solution: Share your goals with a friend, mentor, or accountability partner who can help keep you on track.`,


        },       
        ],
      },
      {
        type: "hr", 
      },
      {
        type: "paragraph",
        text: "Conclusion: Overcoming procrastination requires consistent effort and self-awareness. By understanding its causes and implementing these strategies, you can take control of your time, increase productivity, and achieve your goals. Remember, small, steady steps lead to significant progress. Start today, and experience the satisfaction of accomplishing what you set out to do!"
      },
    ],
  },
  {
    id: 8,
    slug: "The-Benefits-of-Meditation-for-Stress-Relief",
    title: "The Benefits of Meditation for Stress Relief",
    content: [
      {
        type: "paragraph",
        text: "In today’s fast-paced world, stress has become a common part of life. While some stress is natural, chronic stress can negatively impact your mental and physical health. Meditation, a simple yet powerful practice, offers a solution to manage stress effectively and restore balance in your life.",
      },
      {
        type: "image",
        src: "/images/meditation.jpeg",
        alt: "meditation",
      },
      {
        type: "list",
        items: [
          {
            heading: " Reduces Stress Hormones",
            content:
              "Meditation helps reduce cortisol levels, the hormone responsible for stress. By practicing mindfulness or deep-breathing techniques, you can calm your nervous system and shift your body into a relaxed state.",
              points: [
"Benefit: Lower cortisol levels can lead to improved mood, better sleep, and reduced risk of stress-related health problems.",]
          },
        {
         heading: " Improves Emotional Well-being",
         content: "Meditation encourages self-awareness and emotional regulation. Regular practice helps you develop a more positive outlook on life and reduces feelings of anxiety and depression.",
         points: ["Benefit: A balanced emotional state makes it easier to handle life’s challenges without feeling overwhelmed."]
        },
        {
          heading: " Enhances Focus and Clarity",
          content: "Stress often clouds your ability to think clearly, but meditation improves focus and mental clarity. Practices like mindfulness meditation train your brain to stay present, boosting productivity and decision-making.",
          points: ["Benefit: Enhanced focus allows you to approach tasks with a calm and clear mind, improving efficiency."]
        },
        {
          heading: "Promotes Relaxation",
          content: "Meditation activates the parasympathetic nervous system, often called the 'rest and digest' system. This helps your body enter a state of deep relaxation, counteracting the effects of stress.",
          points: ["Benefit: Relaxation helps reduce tension, alleviate headaches, and improve overall physical health."]
        },
        {
          heading: " Boosts Resilience to Stress",
          content: "Meditation doesn’t just reduce current stress—it builds resilience against future stress. By practicing regularly, you train your mind to respond to stressful situations with greater calmness and control.",
          points: ["Benefit: Resilience helps you navigate life’s ups and downs more effectively, maintaining peace of mind even in difficult times."]
        },
        {
          heading: "How to Get Started with Meditation",
          content: "",
          points: ["Start small: Begin with 5–10 minutes a day and gradually increase the duration.",
            "Find a quiet space: Choose a comfortable spot free from distractions.",
            "Focus on your breath: Pay attention to your breathing, letting go of any intrusive thoughts.",
            "Use guided meditations: Apps like Headspace or Calm can provide structured sessions to help you begin."
          ]
        },
             
        ],
      },
      {
        type: "hr", 
      },
      {
        type: "paragraph",
        text: "Conclusion Meditation is a powerful tool for managing stress and improving overall well-being. By incorporating it into your daily routine, you can reduce stress, enhance emotional stability, and lead a healthier, more balanced life. Remember, consistency is key—start small and watch how meditation transforms your life, one breath at a time."
      },
    ],
  },
  // Add more blog posts as needed
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold">{blogPost.title}</h1>
      {blogPost.content.map((section, index) => {
        switch (section.type) {
          case "paragraph":
            return (
              <p key={index} className="text-gray-700">
                {section.text}
              </p>
            );
          case "image":
            return (
              <img
                key={index}
                src={section.src}
                alt={section.alt}
                className="w-full h-auto"
              />
            );
          case "list":
            return (
              <ul key={index} className="list-decimal list-outside">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">
                    <h3 className="font-semibold my-4">{item.heading}</h3>
                    <p>{item.content}</p>
                    {item.points && (
                      <ul className="list-disc list-inside ml-4">
                        {item.points.map((point, pointIdx) => (
                          <li key={pointIdx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            );
            case "hr":
              return <hr key={index} className="border-t border-gray-300 my-4" />;
          default:
            return null;
        }
      })}
    </div>
  );
}
