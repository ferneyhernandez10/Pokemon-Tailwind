import React, { useEffect, useState } from "react";

export const InformationModal = ({ isOpen, closeModal, urlModal }) => {
  const [data, setData] = useState({});

  const urlData = async (urlModal) => {
    const response = await fetch(urlModal);
    const getData = await response.json();
    setData(getData);
  };

  const getInformation = data?.effect_entries?.map((effect, index) => (
    <div key={index} className="list-none break-words">
      <p className="text-lg hyphens-auto mb-5">{`Effect: ${effect.effect}`}</p>
      <p className="text-lg hyphens-auto mb-5">{`Short_effect: ${effect.short_effect}`}</p>
    </div>
  ));

  const handleModalClick = (e) => e.stopPropagation();

  useEffect(() => {
    urlModal && urlData(urlModal);
  }, [urlModal]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 border-2 border-black w-3/5 sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4 max-h-[95%] overflow-y-auto"
            onClick={handleModalClick}
          >
            {getInformation}
          </div>
        </div>
      )}
    </>
  );
};
