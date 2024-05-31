import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";

const Faq = () => {
  return (
    <>
      <Header />

      <div className="relative  mt-[100px]">
        <img
          src="assets/images/faq.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt="alt"
        />
        <div className="relative bg-opacity-50 bg-[#00000095]">
          <svg
            className="absolute inset-x-0 bottom-[-2px]"
            style={{ color: "#f8f8f8" }}
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none min-h-[300px] flex justify-start items-end">
                  Frequenty asked questions
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8  sm:px-10 mb-[100px]">
        <div className="mx-auto px-5 remove-p">
          <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
              FAQ
            </h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">
              Frequenty asked questions
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl divide-y divide-neutral-200 faq">
            <div className="p-4 rounded mb-5 shadow">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> How does the billing work?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Springerdata offers a variety of billing options, including
                  monthly and annual subscription plans, as well as
                  pay-as-you-go pricing for certain services. Payment is
                  typically made through a credit card or other secure online
                  payment method.
                </p>
              </details>
            </div>
            <div className="p-4 rounded mb-5 shadow">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Can I get a refund for my subscription?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We offer a 30-day money-back guarantee for most of its
                  subscription plans. If you are not satisfied with your
                  subscription within the first 30 days, you can request a full
                  refund. Refunds for subscriptions that have been active for
                  longer than 30 days may be considered on a case-by-case basis.
                </p>
              </details>
            </div>
            <div className="p-4 rounded mb-5 shadow">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> How do I cancel my subscription?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  To cancel your subscription, you can log in to your account
                  and navigate to the subscription management page. From there,
                  you should be able to cancel your subscription and stop future
                  billing.
                </p>
              </details>
            </div>
            <div className="p-4 rounded mb-5 shadow">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Is there a free trial?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We offer a free trial of our software for a limited time.
                  During the trial period, you will have access to a limited set
                  of features and functionality, but you will not be charged.
                </p>
              </details>
            </div>
            <div className="p-4 rounded mb-5 shadow">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> How do I contact support?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  If you need help with our platform or have any other
                  questions, you can contact the company support team by
                  submitting a support request through the website or by
                  emailing support@ourwebsite.com.
                </p>
              </details>
            </div>
            <div className="p-4 rounded mb-5 shadow">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Do you offer any discounts or promotions?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We may offer discounts or promotions from time to time. To
                  stay up-to-date on the latest deals and special offers, you
                  can sign up for the company newsletter or follow it on social
                  media.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
