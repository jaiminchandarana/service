import { BarChart3, Brain, Code, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'data-analytics',
      icon: <BarChart3 className="h-16 w-16 text-blue-600" />,
      title: 'Data Analytics & Visualization',
      subtitle: 'Transform data into strategic insights',
      description: 'Unlock the power of your data with comprehensive analytics solutions that drive informed decision-making and business growth.',
      problems: [
        'Scattered data across multiple systems',
        'Lack of real-time insights',
        'Manual reporting processes',
        'Difficulty identifying trends and patterns'
      ],
      benefits: [
        'Reduce reporting time by 80%',
        'Increase data accuracy by 95%',
        'Make faster, data-driven decisions',
        'Identify new revenue opportunities'
      ],
      packages: [
        {
          name: 'Starter Analytics',
          price: '₹2,500/month',
          features: [
            'Basic dashboard setup',
            'Up to 5 data sources',
            'Standard reporting',
            'Email support'
          ]
        },
        {
          name: 'Professional BI',
          price: '₹5,000/month',
          features: [
            'Advanced dashboards',
            'Unlimited data sources',
            'Dedicated support',
            'Custom visualizations'
          ],
          popular: true
        },
        {
          name: 'Premium Analytics',
          price: 'Custom pricing',
          features: [
            'Multipage dashboards',
            'Predictive analytics',
            'Real-time streaming',
            '24/7 support',
            'Custom development'
          ]
        }
      ],
      techStack: ['Tableau', 'Power BI', 'Python', 'SQL', 'Looker studio']
    },
    {
      id: 'ai-ml',
      icon: <Brain className="h-16 w-16 text-teal-600" />,
      title: 'AI & Machine Learning',
      subtitle: 'Intelligent automation for competitive advantage',
      description: 'Harness cutting-edge AI technologies to automate processes, predict outcomes, and create intelligent solutions that adapt to your business needs.',
      problems: [
        'Manual, repetitive processes',
        'Inability to predict customer behavior',
        'Limited personalization capabilities',
        'Reactive instead of proactive strategies'
      ],
      benefits: [
        'Automate 70% of routine tasks',
        'Improve prediction accuracy by 60%',
        'Enhance customer experience',
        'Generate new revenue streams'
      ],
      packages: [
        {
          name: 'AI Consultation',
          price: '₹5,000/project',
          features: [
            'AI readiness assessment',
            'Use case identification',
            'ROI analysis',
            'Implementation roadmap'
          ]
        },
        {
          name: 'ML Model Development',
          price: '₹10,000+/model',
          features: [
            'Custom model development',
            'Model Training',
            'Deployment setup',
            '3 months support',
            'Performance monitoring'
          ],
          popular: true
        },
        {
          name: 'AI Platform',
          price: 'Custom pricing',
          features: [
            'End-to-end AI solution',
            'Multiple ML models',
            'Real-time inference',
            'Dedicated team'
          ]
        }
      ],
      techStack: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Hugging Face']
    },
    {
      id: 'web-development',
      icon: <Code className="h-16 w-16 text-orange-600" />,
      title: 'Web Development',
      subtitle: 'Scalable applications that drive business growth',
      description: 'Build modern, responsive web applications and mobile solutions using the latest technologies to deliver exceptional user experiences.',
      problems: [
        'Outdated, slow websites',
        'Poor mobile experience',
        'Limited scalability',
        'High maintenance costs'
      ],
      benefits: [
        'Improve site speed by 300%',
        'Increase mobile conversions',
        'Scale to millions of users',
        'Reduce maintenance by 50%'
      ],
      packages: [
        {
          name: 'Business Website',
          price: '₹3,500-₹8,000',
          features: [
            'Responsive design',
            'CMS integration',
            'SEO optimization',
            'Contact forms',
            '3 months support'
          ]
        },
        {
          name: 'Web Application',
          price: '₹15,000-₹50,000',
          features: [
            'Custom development',
            'User authentication',
            'API development',
            '6 months support',
            'Performance optimization'
          ],
          popular: true
        },
        {
          name: 'Enterprise Platform',
          price: 'Custom pricing',
          features: [
            'Scalable architecture',
            'Database integration',
            'Security compliance',
            'AI Integration',
            '12 months support',
          ]
        }
      ],
      techStack: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business operations, drive growth, and create sustainable competitive advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-xl text-gray-600 mb-6">{service.subtitle}</p>
                <p className="text-lg text-gray-700 mb-8">{service.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Problems We Solve:</h4>
                    <ul className="space-y-2">
                      {service.problems.map((problem, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Benefits You Get:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technology Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="grid gap-6">
                  {service.packages.map((pkg, idx) => (
                    <div key={idx} className={`relative bg-white rounded-xl shadow-lg p-6 border-2 ${pkg.popular ? 'border-blue-500' : 'border-gray-200'}`}>
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-gray-900">{pkg.name}</h4>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{pkg.price}</div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-center text-gray-600">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <a
                        href="/contact"
                        className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                          pkg.popular
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                        }`}
                      >
                        Get Started
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Discovery', description: 'We analyze your needs, challenges, and goals to create a tailored strategy.' },
              { step: '2', title: 'Planning', description: 'Detailed project planning with timelines, milestones, and resource allocation.' },
              { step: '3', title: 'Development', description: 'Agile development process with regular updates and client feedback.' },
              { step: '4', title: 'Delivery', description: 'Testing, deployment, training, and ongoing support to ensure success.' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Let's discuss your project and create a solution that drives real business results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Request a Quote
            </a>
            <a
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;