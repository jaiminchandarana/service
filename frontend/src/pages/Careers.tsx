import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Code, Zap, Send, CheckCircle, FileText } from 'lucide-react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    resume: null as File | null,
    coverLetter: '',
    availability: '',
    expectedSalary: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in joining TechFlow! We've received your application and will review it carefully. 
            We'll get back to you within 5-7 business days.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                experience: '',
                portfolio: '',
                resume: null,
                coverLetter: '',
                availability: '',
                expectedSalary: ''
              });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be part of an exciting startup journey! We're looking for passionate developers who want to make a real impact 
              and grow with us as we build innovative solutions for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Job Opening */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Job Details */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl p-8 mb-8">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 mr-3" />
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Full-time</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Full Stack Developer</h2>
                <div className="grid md:grid-cols-3 gap-4 text-blue-100">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Remote</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    <span>₹3-8 LPA</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Immediate</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Role</h3>
                  <p className="text-gray-700 mb-4">
                    We're seeking a talented Full Stack Developer to join our growing startup team. You'll work directly with our founder 
                    to build cutting-edge web applications, AI-powered solutions, and data analytics platforms for our clients.
                  </p>
                  <p className="text-gray-700">
                    This is a unique opportunity to be part of a startup from its early stages, where your contributions will have a direct 
                    impact on our growth and success. You'll wear multiple hats, learn rapidly, and help shape our technical direction.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h3>
                  <ul className="space-y-3">
                    {[
                      'Develop and maintain full-stack web applications using modern technologies',
                      'Build responsive, user-friendly interfaces with React, Next.js, and Tailwind CSS',
                      'Design and implement RESTful APIs and database schemas',
                      'Integrate AI/ML models and data analytics solutions into web applications',
                      'Collaborate on project planning, architecture decisions, and code reviews',
                      'Optimize applications for performance, scalability, and security',
                      'Work directly with clients to understand requirements and deliver solutions',
                      'Contribute to our technical blog and knowledge sharing initiatives'
                    ].map((responsibility, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Skills & Experience</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technical Skills</h4>
                      <ul className="space-y-2">
                        {[
                          'React.js & Next.js',
                          'Node.js & Express.js',
                          'TypeScript/JavaScript',
                          'HTML5, CSS3, Tailwind CSS',
                          'PostgreSQL/MongoDB',
                          'Git & GitHub',
                          'RESTful API development',
                          'Basic understanding of AI/ML'
                        ].map((skill, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Experience & Qualities</h4>
                      <ul className="space-y-2">
                        {[
                          '2+ years of development experience',
                          'Strong problem-solving skills',
                          'Excellent communication abilities',
                          'Startup mindset & adaptability',
                          'Passion for learning new technologies',
                          'Experience with cloud platforms (AWS/Azure)',
                          'Understanding of DevOps practices',
                          'Portfolio of completed projects'
                        ].map((quality, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                            {quality}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <Users className="h-8 w-8 text-blue-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Growth & Learning</h4>
                      <p className="text-gray-700 text-sm">Direct mentorship, skill development, and opportunity to shape our technical direction</p>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-6">
                      <Zap className="h-8 w-8 text-teal-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Flexible Work</h4>
                      <p className="text-gray-700 text-sm">100% remote work, flexible hours, and excellent work-life balance</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-6">
                      <DollarSign className="h-8 w-8 text-orange-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Competitive Package</h4>
                      <p className="text-gray-700 text-sm">Competitive salary, performance bonuses, and potential equity as we grow</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-6">
                      <Code className="h-8 w-8 text-purple-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Latest Tech</h4>
                      <p className="text-gray-700 text-sm">Work with cutting-edge technologies and contribute to innovative projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-8 sticky top-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply Now</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select experience</option>
                      <option value="1-2">1-2 years</option>
                      <option value="2-4">2-4 years</option>
                      <option value="4-6">4-6 years</option>
                      <option value="6+">6+ years</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                      Portfolio/GitHub URL *
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      required
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                      Resume/CV *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        required
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                      <FileText className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                      Availability
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select availability</option>
                      <option value="immediate">Immediate</option>
                      <option value="2-weeks">2 weeks notice</option>
                      <option value="1-month">1 month notice</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Salary (LPA)
                    </label>
                    <input
                      type="text"
                      id="expectedSalary"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., 5-7 LPA"
                    />
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter *
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      required
                      rows={4}
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us why you're interested in joining TechFlow and what makes you a great fit for this role..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join TechFlow?</h2>
            <p className="text-xl text-gray-600">Be part of something special from the ground up</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Startup Energy</h3>
              <p className="text-gray-600">Experience the excitement of building something from scratch with direct impact on company growth and direction.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-teal-100 rounded-full p-4 inline-block mb-6">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Mentorship</h3>
              <p className="text-gray-600">Work closely with our experienced founder and get personalized guidance to accelerate your career growth.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-orange-100 rounded-full p-4 inline-block mb-6">
                <Code className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Technologies</h3>
              <p className="text-gray-600">Work with cutting-edge technologies including AI, modern web frameworks, and cloud platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Join us in building the future of technology solutions. Your career growth starts here.
          </p>
          <a
            href="#apply"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            Apply Now
            <Send className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;