import Content from "../commons/Content";

export default function About() {
  return (
    <div id="about">
      <Content title="About Us">
        <p class="text-xl md:text-2xl text-center font-semibold w-full md:w-4/5 mx-auto pb-4">
          HackRift is a virtual hackathon that aims to implore students to
          channel their creativity, critical thinking, and problem solving
          skills.
        </p>
        <p class="text-xl md:text-2xl text-center font-semibold w-full md:w-4/5 mx-auto ">
          Participants are encouraged to expand their knowledge and apply what
          they have learned in school by implementing intelligent solutions to
          real work industry problems.
        </p>
      </Content>
    </div>
  );
}
