import { defineQuery } from "next-sanity";

// Properties Queries
export const getPropertiesQuery = defineQuery(`*[_type == 'property'] | order(datePosted)`);

export const getPropertyByIdQuery = defineQuery(`*[_type == 'property' && _id == $id]`);

// Jobs Queries
export const getJobsQuery = defineQuery(`*[_type == 'job'] | order(datePosted)`);

export const getJobByIdQuery = defineQuery(`*[_type == 'job' && _id == $id]`);
