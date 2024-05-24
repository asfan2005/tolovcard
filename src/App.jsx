import React, { useState } from "react";
import Payme from "./img/payme.svg";
import Click from "./img/click.svg";
import Uzum from "./img/uzum.svg";
import { X } from "react-bootstrap-icons";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveButton(null);
  };

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex === null ? 1 : buttonIndex);
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          Open Modal
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div
            className="border border-image-source: linear-gradient(153.46deg, rgba(255, 255, 255, 0) 16.52%, rgba(255, 255, 255, 0.5) 36.53%, rgba(255, 255, 255, 0.5) 63.47%, rgba(255, 255, 255, 0) 83.21%); rounded-lg p-6"
            style={{
              width: "598px",
              height: "435px",
              borderRadius: "25px",
              position: "relative",
              backgroundColor: "rgba(33, 21, 45, 1)",
              color: "white",
            }}
          >
            <h5
              style={{
                fontFamily: "sans-serif",
                fontSize: "18px",
                color: "rgba(255, 255, 255, 1)",
              }}
              className="font-bold mb-4 my-4"
            >
              To'lov qilish
            </h5>
            <div
              className="p-4 rounded-lg shadow-md"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                height:"190px"
              }}
            >
              <h5
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  color: "rgba(255, 255, 255, 1)",
                }}
                className="font-bold mb-4"
              >
                To'lov tizimini tanlang
              </h5>
              <div className="flex justify-between">
                <div>
                  <button
                    className={`font-bold py-2 px-4 rounded h-20 w-100 ${
                      activeButton === null || activeButton === 1
                        ? "bg-blue-500"
                        : "bg-gray-200 hover:bg-gray-400 text-black"
                    } ${
                      activeButton === null || activeButton === 1
                        ? "active"
                        : ""
                    }`}
                    onClick={() => handleButtonClick(null)}
                  >
                    <img src={Payme} alt="Payme" />
                  </button>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "18px",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="text-center my-1"
                  >
                    Payme
                  </p>
                </div>
                <div>
                  <button
                    className={`font-bold py-2 px-4 rounded h-20 ${
                      activeButton === 2
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 hover:bg-gray-400 text-black"
                    } ${activeButton === 2 ? "active" : ""}`}
                    onClick={() => handleButtonClick(2)}
                  >
                    <img src={Uzum} alt="Uzum" />
                  </button>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "18px",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="text-center my-1"
                  >
                    Uzum
                  </p>
                </div>
                <div>
                  <button
                    className={`font-bold py-2 px-4 rounded h-20 ${
                      activeButton === 3
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 hover:bg-gray-400 text-black"
                    } ${activeButton === 3 ? "active" : ""}`}
                    onClick={() => handleButtonClick(3)}
                  >
                    <img src={Click} alt="Click" />
                  </button>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "18px",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="text-center my-1"
                  >
                    Click
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                To'lanadigan summa
              </p>
              <h4
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                4 000 000 UZS
              </h4>
            </div>

            <button
              style={{
                fontFamily: "sans-serif",
                fontSize: "18px",
                color: "rgba(255, 255, 255, 1)",
              }}
              className="text-center w-100 bg-blue-500 text-white py-2 px-4 rounded my-3"
            >
              To’lov 150 000 UZS
            </button>

            <button
              className="text-white font-bold py-2 px-4 rounded"
              style={{ position: "absolute", top: "10px", right: "10px" }}
              onClick={handleCloseModal}
            >
              <X style={{ fontSize: "30px" }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
