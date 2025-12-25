import { BlobServiceClient } from "@azure/storage-blob";

const blobService = BlobServiceClient.fromConnectionString(
  process.env.AZURE_STORAGE_CONNECTION_STRING
);

export const container = blobService.getContainerClient("images");