import cogoToast from 'cogo-toast';
import { useEffect, useState } from "react";
import { BiLoaderAlt } from 'react-icons/bi';
import { useSelector } from "react-redux";
import Bredcrum from "../components/Bredcrum";
import AccountWrapper from "../components/layouts/AccountWrapper";
import Wrapper from "../components/layouts/Wrapper";
import FormLoaders from '../components/loaders/FormLoaders';
import { useAddAddressMutation, useGetAddressQuery, useUpdateAddressMutation } from "../features/address/addressApi";

const ManageAddress = () => {
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [zipCode, setZipCode] = useState('');

  const [isEdit, setIsEdit] = useState(false);


  // get the user from state
  const {user} = useSelector((state) => state.auth);
  console.log(user);
  const { data: addressData, isLoading: getAddressLoading } = useGetAddressQuery(user.id);

  useEffect(() => {
    if (addressData) {
      setPhone(addressData.phone);
      setCountry(addressData.country);
      setRegion(addressData.region);
      setCity(addressData.city);
      setAddress(addressData.address);
      setCompanyName(addressData.companyName);
      setZipCode(addressData.zipCode)
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [addressData])

  // add addresss
  const [addAddress, {isLoading, isSuccess, data} ] = useAddAddressMutation();
  const addAddressHandler = (e) => {
    e.preventDefault();
    addAddress({phone, country, region, city, address, companyName, zipCode});
  }

  useEffect(() => {
    if (isSuccess) {
      cogoToast.success(data?.message);
    }
  }, [isSuccess, data]);


  // update addres

  const [updateAddress, {isLoading: updateLoading, isSuccess: updateSuccess, data: updatedData}] = useUpdateAddressMutation()
  const updateHandler = (e) => {
    e.preventDefault();

    updateAddress({ body: { phone, country, region, city, address, companyName, zipCode }, id: user.id});
  }

  useEffect(() => {
    if (updateSuccess) {
      console.log(updatedData);
      cogoToast.success(updatedData.message);
    }
  }, [updateSuccess, updatedData]);

  
  return (
    <Wrapper title="Manage Address | RAFTCRAFT">
      
      <Bredcrum name="Account" name2="Manage Address" />
      <AccountWrapper>
        
        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
          {
            getAddressLoading ? <FormLoaders /> : (<>
              <form onSubmit={isEdit ? updateHandler : addAddressHandler}>
                <h3 className="text-lg font-medium capitalize mb-4">Manage Address</h3>
                <div className="space-y-4">
                  {/* <!-- Form row --> */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-600 mb-2 block">Phone Number</label>
                      <input type="text" value={phone} onChange={e => setPhone(e.target.value)} className="input-box" required />
                    </div>
                    <div>
                      <label className="text-gray-600 mb-2 block">Country</label>
                      <select value={country} onChange={e => setCountry(e.target.value)} className="input-box" required>
                        <option selected>Select country</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option>Bidesh</option>
                      </select>
                    </div>
                    {/* <!-- Single input end --> */}
                  </div>
                  {/* <!-- Form row end --> */}
                  <div className="grid sm:grid-cols-2 gap-4">

                    <div>
                      <label className="text-gray-600 mb-2 block">Region</label>
                      <select value={region} onChange={e => setRegion(e.target.value)} className="input-box" required>
                        <option selected>Select Region</option>
                        <option value="dhaka">Dhaka</option>
                        <option>Noakhali</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-600 mb-2 block">City</label>
                      <select value={city} onChange={e => setCity(e.target.value)} className="input-box" required>
                        <option selected>Select City</option>
                        <option value={'dhaka'}>Dhaka</option>
                      </select>
                    </div>
                  </div>
                  <div className='grid sm:grid-cols-2 gap-4'>
                    <div>
                      <label className="text-gray-600 mb-2 block">Company</label>
                      <input
                        type="text"
                        className="input-box"
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                        required
                      />
                    </div><div>
                      <label className="text-gray-600 mb-2 block">Zip Code</label>
                      <input
                        type="number"
                        className="input-box"
                        value={zipCode}
                        onChange={e => setZipCode(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">

                    <div>
                      <label className="text-gray-600 mb-2 block">Address</label>
                      <input
                        type="text"
                        className="input-box"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                </div>
                <div className="mt-6">
                  {
                    isEdit ? <button
                      type="submit"
                      className="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                    >
                      {
                        updateLoading ? <BiLoaderAlt className="animate-spin" /> : 'Update Changes'
                      }
                    </button> : <button
                      type="submit"
                      className="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                    >
                      {
                        isLoading ? <BiLoaderAlt className="animate-spin" /> : 'Save Changes'
                      }
                    </button>
                  }

                </div>
              </form>
            </>)
          }
        </div>
      </AccountWrapper>
    </Wrapper>
  );
};

export default ManageAddress;
