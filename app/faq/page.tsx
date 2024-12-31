import React from "react"
const FAQPage = () => {
    return (

<div className="bg-gray-50 py-10 px-6">
  <h3 className="text-3xl font-bold text-gray-900 text-center underline mb-6">FAQs</h3>
  <div className="space-y-6 max-w-4xl mx-auto">
    {/* Question 1 */}
    <div>
      <h4 className="text-xl font-semibold text-gray-800">
        What services do you offer?
      </h4>
      <p className="text-gray-600">
        We provide personalized counseling for mental health, physical wellness, and holistic health
        coaching. Our services include stress management, nutrition planning, and lifestyle improvement strategies.
      </p>
    </div>
    {/* Question 2 */}
    <div>
      <h4 className="text-xl font-semibold text-gray-800">
        Do you offer online consultations?
      </h4>
      <p className="text-gray-600">
        Yes, we offer virtual counseling sessions for your convenience. You can book your session through our website&apos;s contact page.
      </p>
    </div>
    {/* Question 3 */}
    <div>
      <h4 className="text-xl font-semibold text-gray-800">
        How much do your services cost?
      </h4>
      <p className="text-gray-600">
        Our pricing varies based on the type of service and session duration. Please contact us for a detailed consultation and pricing plan.
      </p>
    </div>
    {/* Question 4 */}
    <div>
      <h4 className="text-xl font-semibold text-gray-800">
        Are your services suitable for all age groups?
      </h4>
      <p className="text-gray-600">
        Absolutely! We cater to individuals of all ages, including teenagers, adults, and seniors. Our counseling is customized to meet your unique needs.
      </p>
    </div>
    {/* Question 5 */}
    <div>
      <h4 className="text-xl font-semibold text-gray-800">
        How can I book a session?
      </h4>
      <p className="text-gray-600">
        You can book a session by visiting our <a href="/contact" className="text-blue-600 underline">Contact Us</a> page or reaching out to us via email or phone. We&apos;ll guide you through the process.
      </p>
    </div>
  </div>
</div>
 );
};
export default FAQPage