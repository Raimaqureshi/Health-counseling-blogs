import React from 'react';
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div className="lg:max-w-5xl mx-auto text-center space-y-4 bg-gray-50 p-8 py-6 shadow-sm md:max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Health Counseling Hub
        </h1>
        <p className="text-lg text-gray-600">
          Your journey to a healthier, more balanced life starts here. Whether
          it&apos;s mental well-being, physical health, or finding inner peace, we&apos;re
          here to guide you every step of the way.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-center min-h-screen">
        <div className="lg:max-w-7xl xs:max-w-lg sm:max-w2xl mx-auto text-center py-10 px-4 md:px-20 space-y-12">
          <h2 className="w-4xl text-3xl font-bold text-center text-gray-800">
            Our Story
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Welcome to Health Counseling Hub, your partner in achieving a
            balanced and healthier life through personalized wellness
            counseling. Our heartfelt dedication is here to guide you every step
            of the way on this journey.
          </p>

          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="/images/story10.jpg"
                  alt="Inspiring Transformations Story"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Our Core Belief
                </h3>
                <p className="text-gray-600">
                  At Health Counseling Hub, our story begins with a simple
                  belief: true wellness is a balance of mind, body, and spirit.
                  We are a team of passionate individuals who have come together
                  with the shared mission of helping others live healthier,
                  happier, and more fulfilling lives.
                </p>
                <p className="text-gray-400 text-sm">July 1, 2023</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="/images/story2.jpg"
                  alt="The Inspiration"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  The Inspiration
                </h3>
                <p className="text-gray-600">
                  The journey to creating Health Counseling Hub was inspired by
                  our own personal experiences with the challenges of modern
                  life. We understand the pressures of daily stress, mental
                  health struggles, and the difficulty of finding balance in a
                  fast-paced world. Our founder,{" "}
                  <span className="font-bold">Raima</span>, has always been
                  driven by the desire to make a positive impact on
                  people&apos;s lives, and that&apos;s how this journey began.
                </p>
                <p className="text-gray-400 text-sm">March 20, 2023</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="/images/story3000.jpg"
                  alt="Our Services"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Our Services
                </h3>
                <p className="text-gray-600">
                  Having seen firsthand the transformative power of health
                  counseling, coaching, and holistic wellness practices, we
                  decided to create a space where others could receive the same
                  support and guidance. We believe that everyone deserves access
                  to the tools and resources that can help them overcome
                  obstacles, improve their mental and physical health, and
                  ultimately, create a life of balance.
                </p>
                <p className="text-gray-400 text-sm">November 5, 2023</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="/images/story4.png"
                  alt="Our Mission"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  Our story is not just about a business – it&apos;s about a
                  mission to make wellness more accessible and personalized. We
                  are committed to empowering individuals, offering a safe space
                  for personal growth, and providing the professional support
                  that our clients need to thrive.
                </p>
                <p className="text-gray-400 text-sm">November 5, 2023</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="/images/story5.jpg"
                  alt="Join Us on Your Wellness Journey"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Join Us on Your Wellness Journey
                </h3>
                <p className="text-gray-600">
                  Whether you&apos;re struggling with mental health, looking to
                  improve your physical well-being, or seeking personal growth,
                  we are here for you. Health Counseling Hub is more than just a
                  service – it&apos;s a place where you can begin your journey
                  to healing, self-discovery, and lasting change.
                </p>
                <p className="text-gray-400 text-sm">November 5, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 py-12 px-4">
        <div className="flex flex-col items-center py-12 bg-gray-50 text-center mx-auto space-y-6 rounded-lg">
          <h3 className="text-2xl font-semibold sm:text-xl">
            Ready to Start Your Wellness Journey?
          </h3>
          <p className="text-lg mx-4 sm:text-base">
            Contact us today to schedule your free consultation or learn more
            about how we can help you achieve your health and wellness goals.
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg hover:bg-yellow-600 transition underline sm:text-base sm:px-4"
          >
            Get Started
          </a>
        </div>
        {/* Follow Us Section */}
        <div className="flex flex-col items-center py-12 bg-gray-50 text-center mx-auto space-y-6 rounded-lg max-w-5xl">
          <h3 className="text-2xl font-semibold sm:text-xl">
            Follow Us for More Wellness Tips!
          </h3>
          <p className="text-lg mx-4 sm:text-base">
            Stay connected with us on social media for updates, tips, and more
            inspiration to live a healthier life.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/raima___qureshi/"
              className="text-xl underline sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100057248295298"
              className="text-xl underline sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://x.com/QureshiRai68418?t=ST-P-FkA3SQh80XX_QupPQ&s=08"
              className="text-xl underline sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-8 w-5xl">
        <h3 className="text-center text-2xl font-bold text-gray-800">
          What Our Clients Say:
        </h3>
        <div className="space-y-4 text-center">
          <blockquote className="italic text-gray-600">
            "Health Counseling Hub changed my life! I feel more balanced and
            happier than ever."
          </blockquote>
          <p className="text-sm text-gray-400">- Sarah, Client</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
