import { ProjectTemplate } from "./ProjectTemplate";

export const ProjectView = ({title, description, client, localization, imagesArray}) => {
  return (
    <>
      <ProjectTemplate 
      title={title} 
      description={description} 
      client={client} 
      localization={localization} 
      imagesArray={imagesArray}/>
    </>
  );
};
