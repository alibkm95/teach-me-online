import React from 'react'

import SectionHeader from './SectionHeader'

import { FaQuestion } from "react-icons/fa";

const FAQ = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-2 md:px-6">
      <SectionHeader title={`FAQ`} icon={<FaQuestion className='text-lime-500' />} showLink={false} linkPath='' />
      <div className='w-full bg-base-200 py-6 rounded-ee-xl rounded-es-xl px-2 lg:px-4'>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-gray-700">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is the best way to contact customer support?
            </div>
            <div className="collapse-content">
              <p>The best way to contact customer support is by email at support@example.com or by phone at 1-800-123-4567. Our customer support team is available 24/7 to assist you with any questions or concerns you may have.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-gray-700">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How long does it take to process a refund?
            </div>
            <div className="collapse-content">
              <p>Refunds typically take 3-5 business days to process. Once the refund has been processed, it may take an additional 3-5 business days for the funds to appear in your account, depending on your bank's policies.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-gray-700">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Can I track my order?
            </div>
            <div className="collapse-content">
              <p>Yes, you can track your order by logging into your account on our website and viewing your order history. You will also receive an email with tracking information once your order has shipped.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-gray-700">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What is your return policy?
            </div>
            <div className="collapse-content">
              <p>We offer a 30-day return policy for all products purchased on our website. If you are not satisfied with your purchase for any reason, you can return it for a full refund or exchange within 30 days of receipt.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-gray-700">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Do you offer free shipping?
            </div>
            <div className="collapse-content">
              <p>Yes, we offer free standard shipping on all orders over $50. For orders under $50, shipping is a flat rate of $5.99. Expedited shipping options are also available for an additional fee.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ