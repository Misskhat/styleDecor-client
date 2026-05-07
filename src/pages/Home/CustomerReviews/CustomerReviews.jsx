import React from "react";

const CustomerReviews = () => {
  return (
    <div className="bg-base-200 py-10">
      <h2 className="text-3xl font-semibold my-5 text-[#090979] text-center">
        Customer Review
      </h2>
      <p className="w-7/12 mx-auto text-center">
        Our clients trust Style Decor for creative interior solutions,
        professional service, and quality craftsmanship. From modern home
        decoration to complete commercial interior setups, we focus on creating
        stylish and comfortable spaces that leave a lasting impression. Their
        positive experiences and feedback continue to inspire our work every
        day.
      </p>
      <div className="w-11/12 mx-auto py-20">
        <div></div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className="bg-white py-10 px-5 rounded space-y-3">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
                  <img src="https://i.ibb.co.com/rd6TdMB/boy-au1.jpg" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-blue-400">MD. Siam</p>
                <p className="italic">Posted on Facebook</p>
              </div>
            </div>

            <p>
              "I think interior concepts is one of the best interior design farm
              in Bangladesh. I really wish I met them earlier."
            </p>
          </div>
          <div className="bg-white py-10 px-5 rounded space-y-3">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
                  <img src="https://i.ibb.co.com/vCQrBbxW/shakib-al-hasan.jpg" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-blue-400">MD. Sakib</p>
                <p className="italic">Posted on Google</p>
              </div>
            </div>

            <p>
              "I think interior concepts is one of the best interior design farm
              in Bangladesh. I really wish I met them earlier."
            </p>
          </div>
          <div className="bg-white py-10 px-5 rounded space-y-3">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
                  <img src="https://i.ibb.co.com/3f8wtPZ/author-img5.png" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-blue-400">MD. Hoque</p>
                <p className="italic">Posted on LinkedIn</p>
              </div>
            </div>
            <p>
              "I think interior concepts is one of the best interior design farm
              in Bangladesh. I really wish I met them earlier."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
