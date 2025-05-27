import { defineQuery } from "next-sanity";

// Clients Queries
export const getClientsQuery = defineQuery(`*[_type == 'client']`);

// Properties Queries
export const getPropertiesQuery = defineQuery(`*[_type == 'property'] | order(_createdAt desc)`);

export const getPropertyByIdQuery = defineQuery(`*[_type == 'property' && _id == $id]`);

// Jobs Queries
export const getJobsQuery = defineQuery(`*[_type == 'job'] | order(_createdAt desc)`);

export const getJobByIdQuery = defineQuery(`*[_type == 'job' && _id == $id]`);

// Services Queries
export const getServicesIdsQuery = defineQuery(`*[_type == 'service']{_id}`);

export const getServicesQuery = defineQuery(`*[_type == 'service']`);

export const getServiceByIdQuery = defineQuery(`*[_type == 'service' && _id == $id]`);
