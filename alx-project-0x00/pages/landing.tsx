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
          <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
          <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
          <Button
            title="Large Rounded-full"
            size="large"
            shape="rounded-full"
          />
          <Button title="Large Rounded-lg" size="large" shape="rounded-lg" />{" "}
          {/* ✅ added */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
