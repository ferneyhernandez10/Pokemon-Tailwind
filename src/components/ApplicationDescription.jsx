import React from "react";

export const ApplicationDescription = () => {
  return (
    <>
      <div className="flex flex-col">
        <h5 className="text-2xl font-medium">
          - Explanation of the pokemon page
        </h5>
        <p className="text-lg">
          This application is designed so that you can find at the beginning a
          list of one hundred Pokémon which has a search engine with
          functionality that depending on what you type, a select list of
          Pokémon appears. When you click on the name of the Pokémon you choose,
          it will be sent to another tab where you will find the name, the
          image, some of the characteristics that identify it, among them we can
          find: Skills, Movements, Statistics and Types.
        </p>
        <h5 className="text-2xl font-medium">
          - Explanation of the technologies that have been applied in the
          project
        </h5>
        <p className="text-lg">
          The technologies that have been used to create this project have been
          React with which we have brought the information from the hundred
          pokemon app and it has been put into functionality and with Tailwind
          CSS we have helped us with the design.
        </p>
      </div>
    </>
  );
};
