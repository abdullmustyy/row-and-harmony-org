import { defineQuery } from "next-sanity";

export const getPropertiesQuery = defineQuery(`*[_type == 'property'] | order(datePosted)`);

export const getJobsQuery = defineQuery(`*[_type == 'property'] | order(datePosted)`);
