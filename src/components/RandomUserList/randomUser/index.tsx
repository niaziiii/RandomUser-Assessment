import React from "react";

const RandomUser = () => {
  return (
    <div>
      <div className="h-screen w-full flex items-center justify-center dark:bg-gray-900">
        <div className="relative w-full max-w-2xl my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">
          <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
            author
          </span>

          <div className="w-full flex justify-center sm:justify-start sm:w-auto">
            <img
              className="object-cover w-20 h-20 mt-3 mr-3 rounded-full"
              src="https://i.pinimg.com/564x/a5/17/09/a51709893a88477e167b86f6ab71b16f.jpg"
            />
          </div>

          <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
            <p
              className="font-display mb-2 text-2xl font-semibold dark:text-gray-200"
              itemProp="author"
            >
              John Doe
            </p>

            <div className="mb-4 md:text-lg text-gray-400">
              <p>
                John Doe is a versatile content writer with a strong background
                in web development.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="https://veilmail.io/e/FkKh7o">
                My email https://veilmail.io/e/FkKh7o
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomUser;
