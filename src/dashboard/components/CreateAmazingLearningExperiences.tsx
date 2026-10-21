import createAmazingLearningExperiencesImageLG from "../../assets/Create-Amazing-Learning-Experiences.png";
import createAmazingLearningExperiencesImageMD from "../../assets/Create-Amazing-Learning-Experiences-md.png";

function CreateAmazingLearningExperiences() {
  return (
    <div className="mt-3 w-full overflow-hidden rounded-xl">
      <picture>
        <source
          media="(min-width: 1300px)"
          srcSet={createAmazingLearningExperiencesImageLG}
        />

        <img
          src={createAmazingLearningExperiencesImageMD}
          alt="Create amazing learning experiences"
          className="block h-full w-full rounded-xl object-contain min-[1300px]:max-h-48"
        />
      </picture>
    </div>
  );
}

export default CreateAmazingLearningExperiences;
