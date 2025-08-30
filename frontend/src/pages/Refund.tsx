import { RefreshCw, CreditCard, Clock, AlertCircle } from 'lucide-react';

const Refund = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <RefreshCw className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Refund Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We strive for complete client satisfaction. This policy outlines our refund and cancellation terms for various services.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 25, 2025</p>
          </div>
        </div>
      </section>

      {/* Refund Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CreditCard className="h-6 w-6 text-blue-600 mr-2" />
                General Refund Policy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At TechFlow, we are committed to delivering high-quality services that meet your expectations. 
                  Our refund policy is designed to be fair to both our clients and our business while ensuring project success.
                </p>
                <p>
                  Due to the custom nature of our IT services and the time invested in each project, 
                  refunds are evaluated on a case-by-case basis according to the guidelines outlined below.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Eligible for Refund</h2>
                <div className="space-y-3 text-gray-700">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Services not delivered as per agreed specifications</li>
                    <li>Project cancellation within 24 hours of agreement</li>
                    <li>Technical issues preventing service delivery</li>
                    <li>Failure to meet agreed project milestones due to our fault</li>
                    <li>Duplicate payments or billing errors</li>
                    <li>Service unavailability due to our technical issues</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Not Eligible for Refund</h2>
                <div className="space-y-3 text-gray-700">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Change of mind after project commencement</li>
                    <li>Delays caused by client feedback or resource unavailability</li>
                    <li>Completed work that meets agreed specifications</li>
                    <li>Third-party service costs (hosting, licenses, etc.)</li>
                    <li>Consultation services already provided</li>
                    <li>Custom development work in progress</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 text-teal-600 mr-2" />
                Service-Specific Refund Terms
              </h2>
              <div className="space-y-6 text-gray-700">
                
                <div className="bg-white rounded-lg p-4 border border-teal-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Web Development Projects</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Before Development Starts:</strong> 100% refund within 24 hours</li>
                    <li><strong>Design Phase (0-25% complete):</strong> 75% refund possible</li>
                    <li><strong>Development Phase (25-75% complete):</strong> 25% refund possible</li>
                    <li><strong>Testing/Deployment Phase (75%+ complete):</strong> No refund</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-teal-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Data Analytics & BI Services</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Consultation Phase:</strong> 100% refund if no insights delivered</li>
                    <li><strong>Data Analysis Phase:</strong> Partial refund based on work completed</li>
                    <li><strong>Dashboard Development:</strong> Refund based on milestone completion</li>
                    <li><strong>Delivered Reports:</strong> No refund for completed analysis</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-teal-200">
                  <h3 className="font-semibold text-gray-900 mb-3">AI & Machine Learning Projects</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Feasibility Study:</strong> 100% refund if project deemed unfeasible</li>
                    <li><strong>Model Development:</strong> Refund based on development stage</li>
                    <li><strong>Training & Testing:</strong> Partial refund if performance targets not met</li>
                    <li><strong>Deployed Models:</strong> No refund for working solutions</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-teal-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Monthly Retainer Services</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>First Month:</strong> Pro-rated refund for unused portion</li>
                    <li><strong>Ongoing Months:</strong> 30-day notice required for cancellation</li>
                    <li><strong>Annual Plans:</strong> Refund for unused months minus setup costs</li>
                    <li><strong>Support Services:</strong> No refund for support already provided</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-2" />
                Refund Process
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How to Request a Refund</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Contact us via email at chandaranajaimin@gmail.com</li>
                    <li>Provide your project details and reason for refund request</li>
                    <li>Include any relevant documentation or evidence</li>
                    <li>Allow 5-7 business days for review and response</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Refund Timeline</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Review Period:</strong> 5-7 business days to evaluate request</li>
                    <li><strong>Approval Notification:</strong> 2-3 business days after review</li>
                    <li><strong>Processing Time:</strong> 7-14 business days for refund to appear</li>
                    <li><strong>Bank Transfer:</strong> 3-5 business days for direct transfers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Partial Refunds</h2>
              <div className="space-y-4 text-gray-700">
                <p>In cases where work has been partially completed, refunds are calculated based on:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Milestone Completion:</strong> Percentage of project milestones achieved</li>
                  <li><strong>Time Invested:</strong> Hours spent on research, planning, and development</li>
                  <li><strong>Deliverables Provided:</strong> Value of completed work and documentation</li>
                  <li><strong>Third-party Costs:</strong> Non-refundable expenses incurred on client's behalf</li>
                </ul>
                
                <div className="bg-white rounded-lg p-4 border border-purple-200 mt-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Calculation Example</h3>
                  <p className="text-sm">
                    For a ₹50,000 project that is 40% complete: <br/>
                    Refund = ₹50,000 - (₹50,000 × 40%) - Third-party costs = ₹30,000 - Third-party costs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Project Cancellation</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Clients may cancel projects with written notice</li>
                    <li>Cancellation fees may apply based on work completed</li>
                    <li>All completed work and documentation will be provided</li>
                    <li>Third-party licenses and services are non-refundable</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Subscription Cancellation</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Monthly subscriptions: 30-day notice required</li>
                    <li>Annual subscriptions: 60-day notice for next billing cycle</li>
                    <li>Support services continue until end of billing period</li>
                    <li>No refund for current billing period unless service failure</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you're not satisfied with our refund decision:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Request a detailed explanation of the decision</li>
                  <li>Provide additional information or documentation</li>
                  <li>Request escalation to senior management</li>
                  <li>Consider mediation for complex disputes</li>
                </ol>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200 mt-4">
                  <p className="text-sm">
                    <strong>Note:</strong> We are committed to fair resolution of all disputes and will work with clients 
                    to find mutually acceptable solutions whenever possible.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Circumstances</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Force Majeure</h3>
                  <p>
                    In cases of natural disasters, pandemics, or other unforeseeable circumstances that prevent 
                    service delivery, we will work with clients to reschedule or provide appropriate refunds.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Failures</h3>
                  <p>
                    If our technical infrastructure fails and prevents service delivery, 
                    full refunds will be provided for affected services.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Client Satisfaction Guarantee</h3>
                  <p>
                    We stand behind our work. If you're not satisfied with the final deliverable and we cannot 
                    resolve the issues, we will provide a partial refund based on the circumstances.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Refunds</h2>
              <div className="space-y-4 text-gray-700">
                <p>For refund requests or questions about this policy:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> chandaranajaimin@gmail.com</p>
                  <p><strong>Phone:</strong> +91 74908 24904</p>
                  <p><strong>Response Time:</strong> Within 24 hours during business days</p>
                  <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                </div>
                <p className="text-sm mt-4">
                  Please include your project details, payment information, and specific reason for the refund request.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 border-l-4 border-blue-600 bg-blue-50">
              <h3 className="font-semibold text-gray-900 mb-2">Policy Updates</h3>
              <p className="text-gray-700 text-sm">
                This refund policy may be updated periodically. Clients will be notified of material changes. 
                The policy in effect at the time of service agreement governs that specific project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;