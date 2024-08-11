import { useState } from "react";
import mastercraft from "../images/logo-mastercraft.svg";
// import iconBookmark from "../images/icon-bookmark.svg";
import Modal from "./Modal";

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalBacked, setTotalBacked] = useState(89914);
  const [totalBackers, setTotalBackers] = useState(5007);
  const [bookmark, setBookmark] = useState(false);

  const toggleBookmark = () => {
    setBookmark((prev) => !prev);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePledge = (amount) => {
    setTotalBacked(totalBacked + amount);
    setTotalBackers(totalBackers + 1);
  };

  return (
    <section className="relative">
      <div className="bg-white rounded-xl px-4 py-12 -translate-y-14 relative w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px]">
        <img
          src={mastercraft}
          alt="This is a logo called mastercraft"
          className="absolute left-0 right-0 mx-auto -top-6"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-black commissioner-700 text-2xl text-center">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text-Dark-Gray text-[0.9rem] text-center commissioner-500 mb-4">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="flex justify-between">
            <button
              onClick={openModal}
              className="w-[75%] lg:w-[40%] bg-Moderate-Cyan hover:bg-Dark-Cyan commissioner-500 text-[1.1rem] px-4 py-3 rounded-full flex justify-center items-center text-white commissioner-500"
            >
              Back this project
            </button>
            <div
              className={`rounded-full bg-[hsl(0_0%_88%)]  flex justify-between items-center`}
            >
              <svg
                className="cursor-pointer"
                onClick={toggleBookmark}
                width="56"
                height="56"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <circle
                    fill={`${bookmark ? "#147b74" : "#2F2F2F"}`}
                    cx="28"
                    cy="28"
                    r="28"
                  />
                  <path
                    fill={`${bookmark ? "#ffffff" : "#B1B1B1"}`}
                    d="M23 19v18l5-5.058L33 37V19z"
                  />
                </g>
              </svg>
              <p
                className={`${
                  bookmark ? "text-Dark-Cyan" : "text-Dark-Gray"
                } px-4 commissioner-700 hidden lg:block`}
              >
                {bookmark ? "Bookmarked" : "Bookmark"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl px-6 py-12 w-[85%] mx-auto -translate-y-10 md:w-[70%] lg:w-[60%] xl:w-[50%] shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px] my-2">
        <div className="md:flex ">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-black text-4xl commissioner-700">
              ${totalBacked.toLocaleString()}
            </h1>
            <p className="text-Dark-Gray commissioner-500">
              of $100,000 backed
            </p>
          </div>
          <div className="bg-Dark-Gray/20 h-[2px] w-[30%] mx-auto md:mx-16 my-6 md:w-[2px] md:min-h-16" />
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-black text-4xl commissioner-700">
              {totalBackers.toLocaleString()}
            </h1>
            <p className="text-Dark-Gray commissioner-500">total backers</p>
          </div>
          <div className="bg-Dark-Gray/20 h-[2px] w-[30%] mx-auto md:mx-16 my-6 md:w-[2px] md:min-h-16" />
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-black text-4xl commissioner-700">56</h1>
            <p className="text-Dark-Gray commissioner-500">days left</p>
          </div>
        </div>

        <div className="bg-[hsl(0_0%_88%)] w-full h-3 rounded-full mt-8">
          <div
            className="bg-Moderate-Cyan h-3 rounded-full"
            style={{ width: `${(totalBacked / 100000) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-xl px-4 py-8 w-[85%] mx-auto md:w-[70%] lg:w-[60%] xl:w-[50%] -translate-y-10 shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px] my-6">
        <h2 className="text-black text-2xl commissioner-700 mb-4">
          About this project
        </h2>
        <p className="text-Dark-Gray commissioner-500 mb-4 text-sm">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand
        </p>
        <p className="text-Dark-Gray commissioner-500 text-sm">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>

        <div className="bg-white border border-[hsl(0_0%_85%)] rounded-xl px-4 py-6 mx-auto  my-6">
          <div className="flex flex-col md:flex-row justify-between">
            <h3 className="text-black text-base commissioner-700 mb-2">
              Bamboo Stand
            </h3>
            <h4 className="text-Moderate-Cyan commissioner-500 ">
              Pledge $25 or more
            </h4>
          </div>
          <p className="text-Dark-Gray commissioner-500 text-sm my-5">
            You get an ergonomic stand made of natural bamboo. You&apos;ve
            helped us launch our promotional campaign, and you’ll be added to a
            special Backer member list.
          </p>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex justify-start items-center gap-2">
              <h3 className="text-black text-[2rem] commissioner-700">101 </h3>
              <p className="text-Dark-Gray commissioner-500 text-sm self-center">
                left
              </p>
            </div>
            <button className="bg-Moderate-Cyan hover:bg-Dark-Cyan mr-24 md:mr-0 commissioner-500 text-[1rem] px-6 py-2 rounded-full flex justify-center items-center text-white commissioner-500">
              Select Reward
            </button>
          </div>
        </div>

        <div className="bg-white border border-[hsl(0_0%_85%)] rounded-xl px-4 py-6 mx-auto  my-6">
          <div className="flex flex-col md:flex-row justify-between">
            <h3 className="text-black text-base commissioner-700 mb-2">
              Black Edition Stand
            </h3>
            <h4 className="text-Moderate-Cyan commissioner-500">
              Pledge $75 or more
            </h4>
          </div>
          <p className="text-Dark-Gray commissioner-500 text-sm my-5">
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex justify-start items-center gap-2">
              <h3 className="text-black text-[2rem] commissioner-700">64 </h3>
              <p className="text-Dark-Gray commissioner-500 text-sm self-center">
                left
              </p>
            </div>
            <button className="bg-Moderate-Cyan hover:bg-Dark-Cyan mr-24 md:mr-0 commissioner-500 text-[1rem] px-6 py-2 rounded-full flex justify-center items-center text-white commissioner-500">
              Select Reward
            </button>
          </div>
        </div>

        <div className="bg-white border border-[hsl(0_0%_85%)] rounded-xl px-4 py-6 mx-auto my-6">
          <div className="flex flex-col md:flex-row justify-between">
            <h3 className="text-black/50 text-base commissioner-700 mb-2">
              Mahogany Special Edition
            </h3>
            <h4 className="text-[hsl(176_50%_85%)] commissioner-500">
              Pledge $200 or more
            </h4>
          </div>
          <p className="text-[hsl(0_0%_85%)] commissioner-500 text-sm my-5">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex justify-start items-center gap-2">
              <h3 className="text-black/50 text-[2rem] commissioner-700">0</h3>
              <p className="text-[hsl(0_0%_85%)] commissioner-500 text-sm self-center">
                left
              </p>
            </div>
            <button className="bg-[hsl(0_0%_85%)] mr-14 md:mr-0 commissioner-500 text-[1rem] px-6 py-2 rounded-full flex justify-center items-center text-white commissioner-500">
              Out of Stock
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onPledge={handlePledge}
      />
    </section>
  );
};

export default Features;




// import { useState } from "react";
// import mastercraft from "../images/logo-mastercraft.svg";
// import Modal from "./Modal";

// const Features = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [totalBacked, setTotalBacked] = useState(89914);
//   const [totalBackers, setTotalBackers] = useState(5007);
//   const [bookmark, setBookmark] = useState(false);

//   const toggleBookmark = () => setBookmark((prev) => !prev);
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
//   const handlePledge = (amount) => {
//     setTotalBacked((prev) => prev + amount);
//     setTotalBackers((prev) => prev + 1);
//   };

//   return (
//     <section className="relative">
//       <ProjectSummary 
//         openModal={openModal}
//         bookmark={bookmark}
//         toggleBookmark={toggleBookmark}
//       />
//       <FundingInfo 
//         totalBacked={totalBacked}
//         totalBackers={totalBackers}
//       />
//       <AboutProject />
//       <RewardTiers />
//       <Modal isOpen={isModalOpen} onClose={closeModal} onPledge={handlePledge} />
//     </section>
//   );
// };

// const ProjectSummary = ({ openModal, bookmark, toggleBookmark }) => (
//   <div className="bg-white rounded-xl px-4 py-12 -translate-y-14 relative w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px]">
//     <img
//       src={mastercraft}
//       alt="This is a logo called mastercraft"
//       className="absolute left-0 right-0 mx-auto -top-6"
//     />
//     <div className="flex flex-col gap-4">
//       <h1 className="text-black commissioner-700 text-2xl text-center">
//         Mastercraft Bamboo Monitor Riser
//       </h1>
//       <p className="text-Dark-Gray text-[0.9rem] text-center commissioner-500 mb-4">
//         A beautiful & handcrafted monitor stand to reduce neck and eye strain.
//       </p>
//       <div className="flex justify-between">
//         <button
//           onClick={openModal}
//           className="w-[75%] lg:w-[40%] bg-Moderate-Cyan hover:bg-Dark-Cyan commissioner-500 text-[1.1rem] px-4 py-3 rounded-full flex justify-center items-center text-white commissioner-500"
//         >
//           Back this project
//         </button>
//         <Bookmark bookmark={bookmark} toggleBookmark={toggleBookmark} />
//       </div>
//     </div>
//   </div>
// );

// const Bookmark = ({ bookmark, toggleBookmark }) => (
//   <div className="rounded-full bg-[hsl(0_0%_88%)] flex justify-between items-center">
//     <svg
//       className="cursor-pointer"
//       onClick={toggleBookmark}
//       width="56"
//       height="56"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g fill="none" fillRule="evenodd">
//         <circle
//           fill={bookmark ? "#147b74" : "#2F2F2F"}
//           cx="28"
//           cy="28"
//           r="28"
//         />
//         <path
//           fill={bookmark ? "#ffffff" : "#B1B1B1"}
//           d="M23 19v18l5-5.058L33 37V19z"
//         />
//       </g>
//     </svg>
//     <p
//       className={`${bookmark ? "text-Dark-Cyan" : "text-Dark-Gray"} px-4 commissioner-700 hidden lg:block`}
//     >
//       {bookmark ? "Bookmarked" : "Bookmark"}
//     </p>
//   </div>
// );

// const FundingInfo = ({ totalBacked, totalBackers }) => (
//   <div className="bg-white rounded-xl px-6 py-12 w-[85%] mx-auto -translate-y-10 md:w-[70%] lg:w-[60%] xl:w-[50%] shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px] my-2">
//     <div className="md:flex">
//       <FundingStat value={`$${totalBacked.toLocaleString()}`} label="of $100,000 backed" />
//       <Separator />
//       <FundingStat value={totalBackers.toLocaleString()} label="total backers" />
//       <Separator />
//       <FundingStat value="56" label="days left" />
//     </div>
//     <ProgressBar percentage={(totalBacked / 100000) * 100} />
//   </div>
// );

// const FundingStat = ({ value, label }) => (
//   <div className="flex flex-col justify-center items-center gap-2">
//     <h1 className="text-black text-4xl commissioner-700">{value}</h1>
//     <p className="text-Dark-Gray commissioner-500">{label}</p>
//   </div>
// );

// const Separator = () => (
//   <div className="bg-Dark-Gray/20 h-[2px] w-[30%] mx-auto md:mx-16 my-6 md:w-[2px] md:min-h-16" />
// );

// const ProgressBar = ({ percentage }) => (
//   <div className="bg-[hsl(0_0%_88%)] w-full h-3 rounded-full mt-8">
//     <div
//       className="bg-Moderate-Cyan h-3 rounded-full"
//       style={{ width: `${percentage}%` }}
//     />
//   </div>
// );

// const AboutProject = () => (
//   <div className="bg-white rounded-xl px-4 py-8 w-[85%] mx-auto md:w-[70%] lg:w-[60%] xl:w-[50%] -translate-y-10 shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px] my-6">
//     <h2 className="text-black text-2xl commissioner-700 mb-4">
//       About this project
//     </h2>
//     <p className="text-Dark-Gray commissioner-500 mb-4 text-sm">
//       The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
//       that elevates your screen to a more comfortable viewing height.
//       Placing your monitor at eye level has the potential to improve your
//       posture and make you more comfortable while at work, helping you stay
//       focused on the task at hand.
//     </p>
//     <p className="text-Dark-Gray commissioner-500 text-sm">
//       Featuring artisan craftsmanship, the simplicity of design creates
//       extra desk space below your computer to allow notepads, pens, and USB
//       sticks to be stored under the stand.
//     </p>
//   </div>
// );

// const RewardTiers = () => (
//   <>
//     <RewardTier
//       title="Bamboo Stand"
//       pledge="Pledge $25 or more"
//       description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
//       remaining={101}
//       isOutOfStock={false}
//     />
//     <RewardTier
//       title="Black Edition Stand"
//       pledge="Pledge $75 or more"
//       description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
//       remaining={64}
//       isOutOfStock={false}
//     />
//     <RewardTier
//       title="Mahogany Special Edition"
//       pledge="Pledge $200 or more"
//       description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
//       remaining={0}
//       isOutOfStock={true}
//     />
//   </>
// );

// const RewardTier = ({ title, pledge, description, remaining, isOutOfStock }) => (
//   <div className={`bg-white border ${isOutOfStock ? 'border-[hsl(0_0%_85%)]' : 'border-Dark-Gray/10'} rounded-xl px-4 py-6 mx-auto my-6`}>
//     <div className="flex flex-col md:flex-row justify-between">
//       <h3 className={`text-base commissioner-700 mb-2 ${isOutOfStock ? 'text-black/50' : 'text-black'}`}>
//         {title}
//       </h3>
//       <h4 className={`commissioner-500 ${isOutOfStock ? 'text-[hsl(176_50%_85%)]' : 'text-Moderate-Cyan'}`}>
//         {pledge}
//       </h4>
//     </div>
//     <p className={`text-sm commissioner-500 my-5 ${isOutOfStock ? 'text-[hsl(0_0%_85%)]' : 'text-Dark-Gray'}`}>
//       {description}
//     </p>
//     <div className="flex flex-col md:flex-row justify-between">
//       <div className="flex justify-start items-center gap-2">
//         <h3 className={`text-[2rem] commissioner-700 ${isOutOfStock ? 'text-black/50' : 'text-black'}`}>
//           {remaining}
//         </h3>
//         <p className={`text-sm self-center commissioner-500 ${isOutOfStock ? 'text-[hsl(0_0%_85%)]' : 'text-Dark-Gray'}`}>
//           left
//         </p>
//       </div>
//       <button
//         className={`commissioner-500 text-[1.1rem] px-6 py-2 rounded-full flex justify-center items-center ${isOutOfStock ? 'bg-[hsl(0_0%_85%)] text-white' : 'bg-Moderate-Cyan hover:bg-Dark-Cyan text-white'} mr-24 md:mr-0`}
//         disabled={isOutOfStock}
//       >
//         {isOutOfStock ? 'Out of Stock' : 'Select Reward'}
//       </button>
//     </div>
//   </div>
// );

// export default Features;

