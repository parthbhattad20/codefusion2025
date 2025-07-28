'use client';

import React from 'react';

const sections = [
	{
		title: '1. Introduction',
		content: `Welcome to Vulnuris Security Solutions LLP ("Vulnuris," "we," "us," or "our"). We are committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, process, and disclose your information, including personal data, in conjunction with your access to and use of our website (https://vulnuris.in ), our services, and our communications, including those via the WhatsApp Business API.\nThis policy is designed to be compliant with applicable data protection laws, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 under the Information Technology Act, 2000 of India, and the platform policies of Meta Platforms, Inc. ("Meta").\nBy using our services, you agree to the collection and use of information in accordance with this policy.`,
	},
	{
		title: '2. Information We Collect',
		content: `We collect information to provide and improve our services to you. The types of information we may collect are:\n\na) Personal Information You Provide to Us:\nContact Information: When you fill out a contact form, subscribe to our newsletter, or communicate with us, you may provide your name, email address, phone number, company name, and job title.\nWhatsApp Communications: When you communicate with us via WhatsApp, we collect your mobile number, your name as it appears on your WhatsApp profile, and the content of your messages, including any inquiries, documents, or other information you share. This is essential for us to respond to your requests and provide our services.\nClient Information: When you engage our services, we may collect additional information necessary for billing and service delivery, such as billing address and payment information.\n\nb) Information We Collect Automatically:\nLog and Usage Data: This includes your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.\nCookies and Similar Technologies: We use cookies to operate and administer our website, gather usage data, and improve your experience. You can manage your cookie preferences through your browser settings.`,
	},
	{
		title: '3. How We Use Your Information',
		content: `We use the information we collect for various purposes, including:\nTo Provide and Maintain Our Services: To deliver the cybersecurity services you have requested, including Vulnerability Assessment and Penetration Testing (VAPT), and to manage our client relationships.\nTo Communicate With You: To respond to your inquiries, send you service-related information, provide customer support, and share marketing communications that may be of interest to you. Specifically, data obtained via the WhatsApp Business API will be used to respond directly to your messages, provide requested information, and facilitate service delivery.\nFor Marketing and Promotional Purposes: To send you newsletters, security alerts, and information about our new services or events. You may opt out of receiving these communications at any time.\nTo Improve Our Website and Services: To understand how users interact with our website, analyze trends, and improve the functionality and user experience of our services.\nFor Legal and Compliance Purposes: To comply with applicable laws, regulations, legal processes, or governmental requests, and to enforce our terms and conditions.`,
	},
	{
		title: '4. Sharing and Disclosure of Information',
		content: `Vulnuris does not sell or rent your personal data to third parties. We will only share your information in the following circumstances:\nWith Service Providers: We may share your information with third-party vendors and service providers who perform services on our behalf, such as payment processing, website hosting, and marketing automation. These providers are contractually obligated to protect your data and use it only for the purposes for which it was disclosed.\nFor Legal Reasons: We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, prevent fraud, or protect the personal safety of users or the public.\nBusiness Transfers: In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such deal and outline your choices in that event.\nWith Your Consent: We may disclose your personal information for any other purpose with your explicit consent.\nWe will not share, sell, or use data obtained via the WhatsApp Business API for any purpose other than to support the messaging conversation with you.`,
	},
	{
		title: '5. Data Retention',
		content: `We will retain your personal information for as long as is necessary for the purposes set out in this Privacy Policy, or as required to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable tax or security laws), resolve disputes, and enforce our legal agreements and policies.\nData collected via WhatsApp will be retained for the duration of the client engagement or as long as necessary to resolve your inquiry, and thereafter as required by our data retention policies.`,
	},
	{
		title: '6. Data Security',
		content: `We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. We are an ISO 27001:2013 certified organization and take our responsibility to protect your assets very seriously. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.`,
	},
	{
		title: '7. Your Data Protection Rights',
		content: `Depending on your location, you may have the following rights regarding your personal information:\nThe right to access: You have the right to request copies of your personal data.\nThe right to rectification: You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.\nThe right to erasure: You have the right to request that we erase your personal data, under certain conditions.\nThe right to object to processing: You have the right to object to our processing of your personal data, under certain conditions.\nTo exercise any of these rights, please contact us using the details provided below.`,
	},
	{
		title: '8. Policy for Children',
		content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information.`,
	},
	{
		title: '9. Changes to This Privacy Policy',
		content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. We encourage you to review this Privacy Policy periodically for any changes.`,
	},
	{
		title: '10. Contact Us',
		content: `If you have any questions, concerns, or complaints about this Privacy Policy or our data-handling practices, please contact us at:\nVulnuris Security Solutions LLP\n2, Anjali Apartments, near Nexa Showroom, Besides Sakal Nagar, Aundh, Pune - 411007 India\nEmail: connect@vulnuris.com\nPhone: +91 8208387709`,
	},
];

const PrivacyPolicyPage = () => {
	return (
		<div className='mt-20 max-w-3xl mx-auto py-12 px-4 md:px-8 font-paragraph text-foreground'>
			<h1 className='text-4xl md:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-transparent bg-clip-text'>
				Privacy Policy for Vulnuris Security Solutions LLP
			</h1>
			<p className='text-center text-base mb-8 text-muted-foreground'>
				Last Updated: July 28, 2025
			</p>
			<div className='space-y-8'>
				{sections.map((section, idx) => (
					<section key={idx}>
						<h2 className='text-2xl font-semibold mb-2 text-blue-700 dark:text-purple-400'>
							{section.title}
						</h2>
						<p className='whitespace-pre-line text-base leading-relaxed text-foreground dark:text-white/80'>
							{section.content}
						</p>
					</section>
				))}
			</div>
		</div>
	);
};

export default PrivacyPolicyPage;
