import { useState } from "react";
// import iconClose from "../images/icon-close-modal.svg";
import iconCheck from "../images/icon-check.svg";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, onPledge }) => {
  const [selectedPledge, setSelectedPledge] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isPledgeSuccessful, setIsPledgeSuccessful] = useState(false); // New state for success message

  const handleSelectPledge = (amount) => {
    setSelectedPledge(amount);
    setCustomAmount(""); // Reset custom amount when selecting a new pledge
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
  };

  const handleSubmit = (amount) => {
    const pledgeAmount = customAmount ? parseInt(customAmount) : amount;
    if (pledgeAmount >= 0) {
      onPledge(pledgeAmount);
      setIsPledgeSuccessful(true); // Set success state to true
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-0 left-0 inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 min-h-screen">
      {!isPledgeSuccessful ? (
        <div className="bg-white rounded-xl p-8 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto shadow-lg -translate-y-20">
          <div className="flex justify-between items-center group">
            <h2 className="text-black text-xl commissioner-700 mb-4">
              Back this project
            </h2>
            {/* <img
              src={iconClose}
              alt=""
              onClick={onClose}
              width={15}
              height={15}
              className="cursor-pointer"
            /> */}
            <svg onClick={onClose} className="group-hover:fill-black hover:cursor-pointer" width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill={`${isOpen ? "#7a7a7a" : "#B1B1B1"}`} fillRule="evenodd" >
                <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
                <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
              </g>
            </svg>
          </div>

          <p className="text-Dark-Gray commissioner-500 text-sm mb-4">
            Want to support us in bringing MasterCraft Bamboo Monitor Riser out
            of the world?
          </p>

          <div className="mb-4">
            {[
              {
                amount: 0,
                label: "Pledge with no reward",
                description:
                  "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
              },
              {
                amount: 25,
                label: "Bamboo Stand",
                description:
                  "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
                left: 101,
              },
              {
                amount: 75,
                label: "Black Edition Stand",
                description:
                  "You get a black Special Edition computer stand and a personal thank you. You will be added to our Backer member list. Shipping is included",
                left: 64,
              },
              {
                amount: 200,
                label: "Mahogany Special Edition",
                description:
                  "You get two Special Edition Mahogany stands, a Backer T-Shirt and a personal thank you. You'll be added to our Backer member list, Shipping is included",
                left: 0,
              },
            ].map((pledge) => (
              <div
                key={pledge.amount}
                className={`bg-white ${
                  selectedPledge === pledge.amount ? "border-2" : "border"
                } ${
                  selectedPledge === pledge.amount
                    ? "border-Moderate-Cyan"
                    : "border-[hsl(0_0%_85%)]"
                } rounded-lg py-6 mx-auto my-4 ${
                  pledge.left === 0 ? "opacity-50" : ""
                }`}
              >
                <label className="flex items-center mb-6 px-4">
                  <input
                    type="radio"
                    name="pledge"
                    value={pledge.amount}
                    onChange={() => handleSelectPledge(pledge.amount)}
                    disabled={pledge.left === 0}
                    className="mr-4 w-5 h-5 accent-Moderate-Cyan focus:accent-Moderate-Cyan ring-Moderate-Cyan cursor-pointer"
                  />
                  <div className="flex flex-col md:flex-row justify-between items-center gap-2 px-4 ">
                    <p className="text-black text-base commissioner-700 hover:cursor-pointer hover:text-Moderate-Cyan">
                      {pledge.label}
                    </p>
                    {pledge.amount > 0 && (
                      <p className="text-Moderate-Cyan">
                        Pledge ${pledge.amount} or more
                      </p>
                    )}
                  </div>
                  {pledge.left !== undefined && (
                    <div className="justify-start items-center gap-2 ml-auto hidden md:flex">
                      <h3 className="text-black text-[1.3rem] commissioner-700">
                        {pledge.left}
                      </h3>
                      <p className="text-Dark-Gray commissioner-500 text-sm self-center">
                        left
                      </p>
                    </div>
                  )}
                </label>
                <p className="text-Dark-Gray commissioner-500 text-sm mb-4 px-4 ">
                  {pledge.description}
                </p>
                {pledge.left !== undefined && (
                  <div className="flex justify-start items-center gap-2 mb-4 px-4 md:hidden">
                    <h3 className="text-black text-[1.7rem] commissioner-700">
                      {pledge.left}
                    </h3>
                    <p className="text-Dark-Gray commissioner-500 text-sm self-center">
                      left
                    </p>
                  </div>
                )}

                {selectedPledge === pledge.amount && (
                  <div className="md:flex block justify-start items-center">
                    {selectedPledge !== 0 && (
                      <>
                        <hr />
                        <div>
                          {" "}
                          <h3 className="text-Dark-Gray text-center my-5 md:ml-4">
                            Enter your pledge
                          </h3>
                        </div>
                      </>
                    )}
                    <div className="flex gap-4 items-center justify-end px-4 md:ml-auto ">
                      {selectedPledge !== 0 && (
                        <input
                          type="number"
                          placeholder={`$`}
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          className={`w-[45%] md:w-[30%] border placeholder:text-Dark-Gray text-Moderate-Cyan focus:outline-Dark-Cyan commissioner-500 placeholder:text-left text-center border-gray-300 px-4 py-3 rounded-full ${
                            selectedPledge !== 0 ? "" : "mb-4"
                          } inline-flex`}
                        />
                      )}
                      <button
                        onClick={() => handleSubmit(pledge.amount)}
                        className={`bg-Moderate-Cyan hover:bg-Dark-Cyan ${
                          selectedPledge == 0 ? "w-full" : "w-[55%] md:w-[35%]"
                        } commissioner-500 text-base px-4 py-3 rounded-full text-white`}
                      >
                        {selectedPledge !== 0 ? "Continue" : "Confirm Pledge"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl flex flex-col items-center p-8 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto shadow-lg -translate-y-20">
          <img src={iconCheck} alt="Check Icon" />
          <h2 className="my-4 text-black md:text-2xl lg:text-3xl commissioner-700">
            Thanks for your support!
          </h2>
          <p className="text-Dark-Gray mb-4 text-center">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will receive an email once our campaign
            is completed.
          </p>
          <button
            onClick={() => {
              setIsPledgeSuccessful(false); // Reset success state
              onClose(); // Close modal
            }}
            className="w-[40%] bg-Moderate-Cyan flex justify-center items-center rounded-full px-4 py-3 text-white"
          >
            Got it!
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
