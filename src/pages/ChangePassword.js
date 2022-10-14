import Bredcrum from "../components/Bredcrum";
import AccountWrapper from "../components/layouts/AccountWrapper";
import Wrapper from "../components/layouts/Wrapper";

const ChangePassword = () => {
  return (
    <Wrapper title="Chanage Password | RAFTCRAFT">
      <Bredcrum name="Account" name2="Change Password" />
      <AccountWrapper>
        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
          <form action="">
            <h3 className="text-lg font-medium capitalize mb-4">
              Change password
            </h3>
            <div className="space-y-4 max-w-sm">
              <div>
                <label className="text-gray-600 mb-2 block">
                  Current Password
                </label>
                <div className="relative">
                  <span className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                    <i className="far fa-eye-slash"></i>
                  </span>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="enter current password"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">New Password</label>
                <div className="relative">
                  <span className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                    <i className="far fa-eye-slash"></i>
                  </span>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="enter new password"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Confirm Password
                </label>
                <div className="relative">
                  <span className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                    <i className="far fa-eye-slash"></i>
                  </span>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="enter confirm password"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                Save change
              </button>
            </div>
          </form>
        </div>
      </AccountWrapper>
    </Wrapper>
  );
};

export default ChangePassword;
