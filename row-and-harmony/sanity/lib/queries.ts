import { defineQuery } from "next-sanity";

// Properties Queries
export const getPropertiesQuery = defineQuery(`*[_type == 'property'] | order(_createdAt desc)`);

export const getPropertyByIdQuery = defineQuery(`*[_type == 'property' && _id == $id]`);

// Jobs Queries
export const getJobsQuery = defineQuery(`*[_type == 'job'] | order(_createdAt desc)`);

export const getJobByIdQuery = defineQuery(`*[_type == 'job' && _id == $id]`);

// Services Queries
export const getServicesQuery = defineQuery(`*[_type == 'service']`);
