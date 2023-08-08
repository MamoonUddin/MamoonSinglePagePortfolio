import React, { useState, useEffect } from "react";
import { data } from "../../assets/data/data";
import WebsiteLogos from "../WebsiteLogos/WebsiteLogos";
import "./ProjectSection.css";

export default function ProjectSection() {
  // State to keep track of selected and unselected tags
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTagCounts, setSelectedTagCounts] = useState({});
  const [unselectedTagCounts, setUnselectedTagCounts] = useState({});
  const [showTags, setShowTags] = useState(false); // State for showing/hiding tags

  // Filter projects based on selected tags
  const filteredProjects = data.filter((project) => {
    if (selectedTags.length === 0) {
      return true;
    } else {
      return selectedTags.every((tag) => project.Tags.includes(tag));
    }
  });

  // useEffect to update selected and unselected tag counts when selectedTags or filteredProjects change
  useEffect(() => {
    // Count the occurrences of each tag in the filtered projects
    const selectedCounts = {};
    const unselectedCounts = {};

    filteredProjects.forEach((project) => {
      project.Tags.forEach((tag) => {
        if (selectedTags.includes(tag)) {
          if (selectedCounts[tag]) {
            selectedCounts[tag]++;
          } else {
            selectedCounts[tag] = 1;
          }
        } else {
          if (unselectedCounts[tag]) {
            unselectedCounts[tag]++;
          } else {
            unselectedCounts[tag] = 1;
          }
        }
      });
    });

    setSelectedTagCounts(selectedCounts);
    setUnselectedTagCounts(unselectedCounts);
  }, [selectedTags]); // Include selectedTags and filteredProjects in the dependency array

  // Function to handle tag click event
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <section id="project" className="uk-margin-small-left uk-margin-small-right uk-margin-xlarge-top uk-margin-xlarge-bottom">
      <h1 className="uk-margin-xlarge-left uk-light"> Projects</h1>
      {/* Toggle button for showing/hiding tags */}
      <div className="toggle-button">
        <button onClick={() => setShowTags(!showTags)}>
          {showTags ? "Hide Tags" : "Show Tags"}
        </button>
      </div>
      <div className="button-holder">
        {/* Render buttons for selected tags */}
        {showTags &&
          Object.entries(selectedTagCounts).map(([tag, count]) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={selectedTags.includes(tag) ? "project-button selected" : "project-button"}
            >
              <span>{tag}</span> <span>{count}</span>
            </button>
          ))}
        {/* Render buttons for unselected tags */}
        {showTags &&
          Object.entries(unselectedTagCounts).map(([tag, count]) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={!selectedTags.includes(tag) ? "project-button unselected" : "project-button"}
            >
              <span>{tag}</span> <span>{count}</span>
            </button>
          ))}
      </div>
      <div className="uk-margin-xlarge-left uk-margin-xlarge-right">
        <ul className="uk-margin-xlarge-left uk-margin-xlarge-right">
          {/* Render filtered projects */}
          {filteredProjects.map((project, index) => (
            <li className="uk-margin uk-card uk-card-secondary uk-card-body" key={index}>
              <h4>{project.Title}</h4>
              <p>{project.Description}</p>
              <div className="project-inline">
                {/* Render buttons for project tags */}
                {project.Tags.map((tag, index) => (
                  <button className="project-button" key={index} onClick={() => handleTagClick(tag)}>
                    {tag}
                  </button>
                ))}
              </div>
              {/* Render WebsiteLogos component with project links */}
              <WebsiteLogos
                github={project.GitHub}
                linkedIn={project.LinkedIn}
                gmail={null}
                medium={project.Medium}
                tableau={project.Tableau}
                youtube={project.Youtube}
                website={project.Website}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
