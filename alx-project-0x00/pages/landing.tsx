import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      {/* Showcase Card */}
      <Card />

      {/* Showcase Buttons */}
      <div className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold">Button Variants</h2>
        <div className="flex gap-4 flex-wrap">
          <Button
            title="Small Rounded-sm"
            styles="px-2 py-1 text-sm rounded-sm"
          />
          <Button
            title="Medium Rounded-md"
            styles="px-4 py-2 text-base rounded-md"
          />
          <Button
            title="Large Rounded-full"
            styles="px-6 py-3 text-lg rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
