import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how TechFlow collects, uses, and protects your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 25, 2025</p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 text-blue-600 mr-2" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900">Personal Information</h3>
                  <p>When you contact us or use our services, we may collect:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company name and job title</li>
                    <li>Project requirements and business information</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900">Technical Information</h3>
                  <p>We automatically collect certain technical information:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>IP address and browser information</li>
                    <li>Website usage data and analytics</li>
                    <li>Device information and operating system</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <UserCheck className="h-6 w-6 text-teal-600 mr-2" />
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Service Delivery:</strong> To provide IT solutions, consulting, and support services</li>
                  <li><strong>Communication:</strong> To respond to inquiries, send updates, and provide customer support</li>
                  <li><strong>Project Management:</strong> To manage projects, track progress, and deliver results</li>
                  <li><strong>Business Operations:</strong> To process payments, maintain records, and improve our services</li>
                  <li><strong>Marketing:</strong> To send relevant information about our services (with your consent)</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 text-orange-600 mr-2" />
                Information Sharing and Disclosure
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We do not sell, trade, or rent your personal information. We may share information in these limited circumstances:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in service delivery</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                  <li><strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our clients</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
                
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Third-Party Services</h3>
                  <p>We may use third-party services such as:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Google Analytics for website analytics</li>
                    <li>Email service providers for communications</li>
                    <li>Cloud hosting services for data storage</li>
                    <li>Payment processors for billing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-purple-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Data Security</h2>
                <div className="space-y-3 text-gray-700">
                  <p>We implement appropriate security measures to protect your information:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Secure hosting and backup systems</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <div className="space-y-3 text-gray-700">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Data portability and restriction of processing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Improve our website functionality and user experience</li>
                  <li>Provide personalized content and advertisements</li>
                </ul>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Cookie Types</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                    <li><strong>Marketing Cookies:</strong> Used for advertising and personalization</li>
                  </ul>
                  <p className="text-sm mt-2">You can control cookies through your browser settings.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <div className="space-y-4 text-gray-700">
                <p>We retain your information for as long as necessary to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide our services and support</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Improve our services and operations</li>
                </ul>
                <p>When information is no longer needed, we securely delete or anonymize it.</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <div className="space-y-4 text-gray-700">
                <p>As a startup based in India, we primarily process data within India. However, some of our service providers may be located in other countries. When we transfer data internationally, we ensure appropriate safeguards are in place.</p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> chandaranajaimin@gmail.com</p>
                  <p><strong>Phone:</strong> +91 74908 24904</p>
                  <p><strong>Address:</strong> Remote Operations (India)</p>
                </div>
                <p className="text-sm">We will respond to your inquiry within 30 days.</p>
              </div>
            </div>

            <div className="mt-8 p-4 border-l-4 border-blue-600 bg-blue-50">
              <h3 className="font-semibold text-gray-900 mb-2">Policy Updates</h3>
              <p className="text-gray-700 text-sm">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;