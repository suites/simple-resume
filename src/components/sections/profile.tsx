import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

const Profile = () => {
  const data = useStaticQuery(graphql`
  query {
  allResumesYaml {
    edges {
      node {
        photo
        name
        links {
          type
          name
          symbol
        }
        introduction
      }
    }
  }
}
  `);
  const profile = data.allResumesYaml.edges[0].node;
  return (
    <>
      <img src={profile.photo} />
      <div>{profile.name}</div>
      <ul>
        {
          profile.links.map((value: any) => {
            return (
              <li>
                <a href={value.name}>{value.name}</a>
              </li>
            );
          })
        }
      </ul>
      <div>
        {
          profile.introduction.map((value: string) => {
            return (
              <p>{value}</p>
            );
          })
        }
      </div>
    </>
  );
};

export default Profile;
