import { useForm } from 'react-hook-form';
import { BiMap, BiMessageSquareDetail, BiPhone } from "react-icons/bi";
import Wrapper from '../components/layouts/Wrapper';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const contactFormHandler = (data) => {
        console.log(data);
    }
  return (
    <Wrapper title="Contact | RAFCRAFT">
        <div className="bg-gray-100 py-20">
              <div className="container">
                  <div className='grid grid-cols-12 gap-6'>
                      <div className='lg:col-span-8 col-span-12 bg-white shadow-lg p-6 rounded-md'>
                          <h2 className='uppercase text-[28px] mb-1 text-gray-800'>LEAVE US A MESSAGE</h2>
                          <p className='text-gray-700 text-sm'>Use the form below to get in touch with the sales team</p>
                          <form onSubmit={handleSubmit(contactFormHandler)} className='space-y-4 mt-8'>
                              <div className="grid sm:grid-cols-2 gap-4">
                                  <div>
                                      <label className="text-gray-600 mb-2 block">First Name</label>
                                      <input {...register('firstName')} type="text" className="input-box" required />
                                  </div>
                                  <div>
                                      <label className="text-gray-600 mb-2 block">Last Name</label>
                                      <input {...register('lastName')} type="text" className="input-box" required />
                                  </div>
                              </div>
                              <div>
                                  <label className="text-gray-600 mb-2 block">Email</label>
                                  <input type="email" {...register('email')} className="input-box" required />
                              </div>
                              <div>
                                  <label className="text-gray-600 mb-2 block">Subject</label>
                                  <input type="text" {...register('subject')} className="input-box" required />
                              </div>
                              <div>
                                  <label className="text-gray-600 mb-2 block">Your Message</label>
                                  <textarea row={4} {...register('message')} type="text" className="input-box" required />
                              </div>

                              <button
                                  type="submit"
                                  className="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                              >
                                  Send Message
                              </button>
                          </form>
                      </div>
                      <div className='lg:col-span-4 col-span-12 bg-white shadow-lg p-6 rounded-md'>
                          <div className="space-y-3">
                              <h2 className='uppercase text-[18px] text-gray-700 font-semibold'>OUR STORE</h2>
                              <p className="text-[15px] text-gray-600 flex items-start gap-2">
                                  <BiMap className="text-3xl" />
                                  <span>7895 Dr New Albuquerue, NM 19800, nited States Of America</span>
                              </p>
                              <p className="text-[15px] text-gray-600 flex items-start gap-2">
                                  <BiPhone className="text-xl" />
                                  <span>+566 477 256, +566 254 575</span>
                              </p>
                              <p className="text-[15px] text-gray-600 flex items-start gap-2">
                                  <BiMessageSquareDetail className="text-xl" />
                                  <span>info@domain.com</span>
                              </p>
                          </div>

                          <div className="space-y-3 mt-10">
                              <h2 className='uppercase text-[18px] text-gray-700 font-semibold'>HOURS OF OPERATION</h2>
                              <div className="space-y-2">
                                  <p className="text-[15px] text-gray-600 flex justify-between items-center">
                                      <span>Satureday</span>
                                      <span>12.00 PM</span>
                                  </p>
                                  <p className="text-[15px] text-gray-600 flex justify-between items-center">
                                      <span>Satureday</span>
                                      <span>12.00 PM</span>
                                  </p>
                                  <p className="text-[15px] text-gray-600 flex justify-between items-center">
                                      <span>Sunday</span>
                                      <span>12.00 PM</span>
                                  </p>
                                  <p className="text-[15px] text-gray-600 flex justify-between items-center">
                                      <span>Monday</span>
                                      <span>12.00 PM</span>
                                  </p>
                                  <p className="text-[15px] text-gray-600 flex justify-between items-center">
                                      <span>Tuesday</span>
                                      <span>12.00 PM</span>
                                  </p>
                                  <p className="text-[15px] text-gray-600 flex justify-between items-center">
                                      <span>Wednesday</span>
                                      <span>12.00 PM</span>
                                  </p>
                                  <p className="text-[15px] text-gray-600 flex justify-between items-center">
                                      <span>Thursday</span>
                                      <span>12.00 PM</span>
                                  </p>
                                  <p className="text-[15px] text-gray-600 flex justify-between items-center">
                                      <span>Friday</span>
                                      <span>12.00 PM</span>
                                  </p>
                              </div>
                          </div>

                          <div className="space-y-3 mt-10">
                              <h2 className='uppercase text-[18px] text-gray-700 font-semibold'>CAREERS</h2>
                              <p className="text-[15px] text-gray-600">If you are interesting in emplyment opportunities at RAFCARTs. Please email us :  <span className="text-primary">contact@familiar.com</span></p>
                          </div>

                      </div>
                  </div>
              </div>
        </div>
    </Wrapper>
  )
}

export default Contact