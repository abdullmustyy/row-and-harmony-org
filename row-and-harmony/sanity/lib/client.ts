import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, readAndWriteToken } from "../env";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    token: readAndWriteToken,
});
