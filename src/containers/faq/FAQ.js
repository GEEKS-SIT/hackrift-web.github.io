import { useState } from "react";
import Content from "../commons/Content";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full py-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="py-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <div id="FAQ">
      <Content title="FAQ">
        <div class="space-y-4">
          <Item title="When is HackRift?">
            HackRift is a weekend hackathon that will run from 14th October 2022
            to 16th October 2022.
          </Item>
          <Item title="Do we have to pay for this hackathon?">
            Admission is free and includes mentors, swag, resources, opportunity
            to make new friends and a memorable experience!
          </Item>
          <Item title="What if I don’t have a team?">
            Don't worry! You may still sign up individually and we will help you
            find people to work with.
          </Item>
          <Item title="How do teams work?">
            Your team must minimally have 3 members and can have up to 5 people!
            You may sign up together with your friends and hack away!
          </Item>
          <Item title="When is the application opening?">
            Registration opens on 12th August 2022! Click{" "}
            <a href="https://forms.gle/gXjE8Q3a35VwVpjY7">here</a> to apply now!
          </Item>
          <Item title="I still have questions!">
            Please email us at sit.ict.smc@outlook.com or geeks.sit@gmail.com if
            you have any questions or concerns : )
          </Item>
        </div>
      </Content>
    </div>
  );
}
