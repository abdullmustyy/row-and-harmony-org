export const apiVersion = process.env.SANITY_API_VERSION || "2025-04-15";

export const dataset = assertValue(
    process.env.SANITY_DATASET,
    "Missing environment variable: SANITY_DATASET",
);

export const projectId = assertValue(
    process.env.SANITY_PROJECT_ID,
    "Missing environment variable: SANITY_PROJECT_ID",
);

export const readToken = assertValue(
    process.env.SANITY_API_READ_TOKEN,
    "Missing environment variable: SANITY_API_READ_TOKEN",
);

export const readAndWriteToken = assertValue(
    process.env.SANITY_API_WRITE_TOKEN,
    "Missing environment variable: SANITY_API_WRITE_TOKEN",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage);
    }

    return v;
}
