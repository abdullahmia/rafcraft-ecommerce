import Bredcrum from "../components/Bredcrum";
import AccountWrapper from "../components/layouts/AccountWrapper";
import Wrapper from "../components/layouts/Wrapper";

const MyReviews = () => {
  return (
    <Wrapper title="My Reviews">
      <Bredcrum name="Account" name2="My Reviews" />
      <AccountWrapper>
        <div className="col-span-9 overflow-x-auto relative shadow sm:rounded-lg">
          <h3 className="text-lg p-5 text-gray-700 font-medium font-roboto uppercase mb-4">
            My Reviews
          </h3>
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase font-roboto bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Product name
                </th>
                <th scope="col" className="py-3 px-6">
                  Color
                </th>
                <th scope="col" className="py-3 px-6">
                  Category
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b 700 hover:bg-gray-50">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="py-4 px-6">Sliver</td>
                <td className="py-4 px-6">Laptop</td>
                <td className="py-4 px-6">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </AccountWrapper>
    </Wrapper>
  );
};

export default MyReviews;
