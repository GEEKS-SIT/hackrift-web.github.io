import { useState } from "react";
import Content from "../commons/Content";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b flex flex-col mx-4">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full py-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-semibold text-left">{title}</p>
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
          <p className="text-gray-600 lg:text-2xl">{children}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <div id="FAQ">
      <Content title="FAQ">
        <div class="space-y-4 grid md:grid-cols-2">
          <p></p>
          <p></p>
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
          <Item title="I'm interested, but none of my team member has coding experience. Can I still join?">
            Coding experience is not necessary for this challenge. Judges will
            also assess other components of your solution! So grab your friends
            who are keen on putting their prototyping skills and UI/UX Design
            skills to the test!
          </Item>
          <Item title="When is the application opening?">
            Registration opens on 12th August 2022! Click{" "}
            <a href="https://forms.gle/gXjE8Q3a35VwVpjY7" className="underline">
              here
            </a>{" "}
            to apply now!
          </Item>
          <Item title="I still have questions!">
            Please email us at{" "}
            <a className="underline" href="mailto:sit.ict.smc@outlook.com">
              sit.ict.smc@outlook.com
            </a>{" "}
            or{" "}
            <a className="underline" href="mailto:geeks.sit@gmail.com">
              geeks.sit@gmail.com{" "}
            </a>
            if you have any questions or concerns : )
          </Item>
        </div>
      </Content>
    </div>
  );
}
