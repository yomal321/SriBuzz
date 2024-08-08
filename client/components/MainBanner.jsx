import React from "react";

function MainBanner() {
  return (
    <section className="bg-gray-200 rounded-3xl">
      <div className="mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-4 sm:text-xl/relaxed">Welcome to Sri Buzz</p>
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Understand User Flow.
            <strong className="font-extrabold text-red-700 sm:block">
              Increase Conversion.
            </strong>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
