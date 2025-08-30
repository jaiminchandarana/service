import { FileText, AlertTriangle, CheckCircle, Scale } from 'lucide-react';

const Terms = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Scale className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These terms govern your use of TechFlow's services. Please read them carefully before engaging with our services.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 25, 2025</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                Acceptance of Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  By accessing or using TechFlow's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                  If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
                <p>
                  These terms apply to all visitors, users, and others who access or use our services, including our website, 
                  consulting services, development projects, and any related services.
                </p>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-teal-600 mr-2" />
                Services Description
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>TechFlow provides the following services:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Web Development:</strong> Custom web applications, websites, and mobile solutions</li>
                  <li><strong>Data Analytics:</strong> Business intelligence, data visualization, and analytics solutions</li>
                  <li><strong>AI & Machine Learning:</strong> AI model development, integration, and consulting</li>
                  <li><strong>IT Consulting:</strong> Technology strategy, architecture planning, and technical guidance</li>
                  <li><strong>Support & Maintenance:</strong> Ongoing support for delivered solutions</li>
                </ul>
                <p>
                  All services are provided on a project basis or through ongoing service agreements as mutually agreed upon.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-600 mr-2" />
                Client Responsibilities
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>As a client, you agree to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide accurate and complete information necessary for service delivery</li>
                  <li>Respond to requests for information and feedback in a timely manner</li>
                  <li>Make payments according to agreed terms and schedules</li>
                  <li>Provide necessary access to systems, accounts, and resources as required</li>
                  <li>Review and approve deliverables within agreed timeframes</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights and confidentiality agreements</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-purple-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                <div className="space-y-3 text-gray-700">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Payment terms are specified in individual project agreements</li>
                    <li>Invoices are typically due within 30 days of receipt</li>
                    <li>Late payments may incur additional charges</li>
                    <li>Work may be suspended for overdue payments</li>
                    <li>All prices are in Indian Rupees (INR) unless otherwise specified</li>
                    <li>Additional work outside scope requires separate agreement</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <div className="space-y-3 text-gray-700">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Client owns rights to custom-developed solutions upon full payment</li>
                    <li>TechFlow retains rights to general methodologies and frameworks</li>
                    <li>Third-party software licenses remain with respective owners</li>
                    <li>TechFlow may use project experience for marketing purposes</li>
                    <li>Confidential information remains protected</li>
                    <li>Open-source components retain their original licenses</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations and Warranties</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service Warranties</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>We warrant that services will be performed with professional skill and care</li>
                    <li>We will correct any defects in our work at no additional cost</li>
                    <li>Warranty period is typically 90 days from project completion</li>
                    <li>Warranties do not cover issues caused by client modifications or third-party changes</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Our liability is limited to the amount paid for the specific service</li>
                    <li>We are not liable for indirect, consequential, or punitive damages</li>
                    <li>We are not responsible for data loss due to client actions</li>
                    <li>Force majeure events are excluded from liability</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Management</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Project Scope</h3>
                  <p>Each project will have a defined scope, timeline, and deliverables as outlined in the project agreement.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Changes and Modifications</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Scope changes require written approval and may affect timeline and cost</li>
                    <li>Minor adjustments within scope are included</li>
                    <li>Major changes will be quoted separately</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Project Delays</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Delays caused by client feedback or resource unavailability may extend timelines</li>
                    <li>We will communicate any potential delays promptly</li>
                    <li>Force majeure events may cause unavoidable delays</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
              <div className="space-y-4 text-gray-700">
                <p>We understand the importance of confidentiality in business relationships:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>All client information is treated as confidential</li>
                  <li>We will not disclose client information to third parties without consent</li>
                  <li>Confidentiality obligations survive termination of services</li>
                  <li>Exceptions include legal requirements and publicly available information</li>
                  <li>Separate NDAs may be executed for sensitive projects</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Termination by Client</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Projects may be terminated with 30 days written notice</li>
                    <li>Client is responsible for payment of work completed</li>
                    <li>Deliverables completed to date will be provided</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Termination by TechFlow</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>We may terminate for non-payment or breach of terms</li>
                    <li>30 days notice will be provided when possible</li>
                    <li>Immediate termination may occur for serious breaches</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
              <div className="space-y-4 text-gray-700">
                <p>In case of disputes:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>We encourage direct communication to resolve issues amicably</li>
                  <li>Mediation may be pursued if direct negotiation fails</li>
                  <li>Disputes will be governed by Indian law</li>
                  <li>Jurisdiction will be in the courts of Gujarat, India</li>
                </ol>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Neither party shall be liable for delays or failures in performance resulting from acts beyond reasonable control, 
                  including but not limited to natural disasters, government actions, pandemics, internet outages, or other unforeseeable circumstances.
                </p>
                <p>
                  In such cases, we will make reasonable efforts to minimize delays and communicate with clients about alternative solutions.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>For questions about these Terms of Service, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> chandaranajaimin@gmail.com</p>
                  <p><strong>Phone:</strong> +91 74908 24904</p>
                  <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 border-l-4 border-blue-600 bg-blue-50">
              <h3 className="font-semibold text-gray-900 mb-2">Terms Updates</h3>
              <p className="text-gray-700 text-sm">
                We reserve the right to modify these terms at any time. Material changes will be communicated to active clients. 
                Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;