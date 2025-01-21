import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

const Donate = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heart className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Make a Difference</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your donation helps us continue our mission of empowering communities and creating lasting change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Impact Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Your Impact</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-red-500 mb-2">₹1,000</div>
                <p className="text-gray-600">Provides educational materials for one child for a month</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-red-500 mb-2">₹5,000</div>
                <p className="text-gray-600">Supports a farmer with sustainable farming equipment</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-red-500 mb-2">₹10,000</div>
                <p className="text-gray-600">Funds a medical camp for an entire village</p>
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Donate Now</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Amount</label>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    <button type="button" className="p-3 border rounded-md hover:bg-red-50 focus:ring-2 focus:ring-red-500">₹1,000</button>
                    <button type="button" className="p-3 border rounded-md hover:bg-red-50 focus:ring-2 focus:ring-red-500">₹5,000</button>
                    <button type="button" className="p-3 border rounded-md hover:bg-red-50 focus:ring-2 focus:ring-red-500">₹10,000</button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Custom Amount</label>
                  <input
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    placeholder="Enter amount in ₹"
                  />
                </div>

                {/* QR Code Section */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">Scan to donate via UPI</p>
                  <div className="bg-gray-100 w-48 h-48 mx-auto mb-4 flex items-center justify-center">
                    [QR Code Placeholder]
                  </div>
                  <p className="text-sm text-gray-600">UPI ID: donate@vews</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition flex items-center justify-center"
                >
                  Proceed to Pay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;